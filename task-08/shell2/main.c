#include "shell.h"

// Reading input from user
char *read_line() {
	input_line = readline(":~rufine@shell~$ ");

	if (input_line == NULL) {
		printf("\nUser pressed Ctrl+D. Exiting.\n");
		exit(0);
	}

	if (*input_line) {
		add_history(input_line);
	}

	return input_line;
}

// Tokenization
int split_line(char *input, char **args) {
	int i = 0;
	char *token = strtok(input, DELIM);

	while (token != NULL && i < MAX_ARGS - 1) {
		args[i++] = token;
		token = strtok(NULL, DELIM);
	}

	args[i] = NULL;
	return i;
}

void signal_handler(int signal) {
	printf("The Background Processess are: \n");
	for (int i = 0; i < bg_total; i++)
	{
		printf("%d\n",bg_pids[i]);
	}

}

// Command execution
void execute_command(char **args)
{
	if (args[0] == NULL)
		return;

	bg_count = 0;

	int i = 0;
	while (args[i] != NULL)
		i++;

	if (i > 0 && strcmp(args[i - 1], "&") == 0)
	{
		bg_count = 1;
		args[i - 1] = NULL;   // remove &
	}

	/* ---------- BUILTIN FUNCTIONS (cd, pwd, exit) ---------- */

	if (strcmp(args[0], "cd") == 0)
	{
		if (args[1] == NULL)
			fprintf(stderr, "cd: path not provided\n");
		else if (chdir(args[1]) != 0)
			perror("cd");
		return;
	}

	if (strcmp(args[0], "pwd") == 0)
	{
		if (getcwd(cwd, sizeof(cwd)) != NULL)
			printf("%s\n", cwd);
		else
			perror("pwd");
		return;
	}

	if (strcmp(args[0], "exit") == 0)
	{
		exit(0);
	}

	/* ---------- EXTERNAL COMMAND ---------- */

	pid_t pid = fork();
	if (bg_count)
	{
		bg_pids[bg_total++] = pid;
	}

	if (pid < 0)
	{
		perror("fork");
		return;
	}
    /*-----------CHILD---------------------*/
	if (pid == 0)
	{
		signal(SIGINT, SIG_DFL);
		signal(SIGTSTP, SIG_DFL);
		execvp(args[0], args);
		perror("execvp");
		exit(1);
	}

    /*----------PARENT PROCESS------------*/
	else
	{
		if (!bg_count)
		{
			int status;
			waitpid(pid, &status, WUNTRACED);
			if (WIFSTOPPED(status))
			{
				printf("\n[Process %d suspended]\n", pid);
				bg_pids[bg_total++] = pid;
			}
		}
		else
		{
			printf("[background pid %d]\n", pid);
		}
	}

}

/*------------MAIN---------------*/

int main() {
	while (1) {
		signal(SIGINT, signal_handler);
		signal(SIGTSTP,SIG_IGN);
		char *cmd = read_line();
		split_line(cmd, args);
		execute_command(args);
		free(cmd);
	}

	return 0;
}