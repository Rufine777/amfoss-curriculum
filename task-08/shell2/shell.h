#ifndef SHELL_H
#define SHELL_H

#define _POSIX_C_SOURCE 200809L
#define MAX_ARGS 64
#define DELIM " \t\r\n\a"
#define MAX_BG 64

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <ctype.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <stddef.h>
#include <readline/readline.h>
#include <readline/history.h>
#include <errno.h>

char *input_line;
char *args[MAX_ARGS];  // allocate array to hold arguments
char cwd[1024];
int bg_count = 0;
#define MAX_BG 64
pid_t bg_pids[MAX_BG];
int bg_total =0;

#endif