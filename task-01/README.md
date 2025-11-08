# Task-01: Git Exercises

Welcome to my Git journey!  
This document outlines my experience with **Task-01: Git Exercises** from the **amFOSS curriculum**. It explains my understanding of each problem, the approach I used to solve it, and the Git commands I applied.  

I initially didn’t know how to start this task, but I was very excited to explore Git beyond the basic commands like `git add`, `git commit`, and `git push`. This task provided a wonderful opportunity to understand Git in depth, and I really enjoyed it.

## Resources I Used
- [Git Official Documentation](https://git-scm.com/doc)

## Congratulation Message:
![Git Exercise Done](GitExerciseDONE.png)

---

## Exercise 1: [master]

**Command used:**  
```bash
git start master
```
This is a custom Git command provided by the Git Exercises site. It initializes a new exercise environment by setting up the master branch and preparing the repository for the given task.

---

## Exercise 2: [commit-one-file]

**Scenario:**  
In this exercise, two files — `A.txt` and `B.txt` — were created in the project directory. The goal was to commit only one file (`A.txt`).

**Solution:**  
```bash
git add A.txt
git commit -m "Commit A.txt file"
```
This task demonstrated how the git add command stages specific files for a commit, allowing selective version control. Only staged files are included in a commit, providing fine-grained control over project changes.

---

## Exercise 3: [commit-one-file-staged]

**Scenario:**  
In this exercise, both `A.txt` and `B.txt` were initially added to the staging area. The goal was to commit only one file. Here, I chose to commit only `B.txt`, so I had to remove `A.txt` from the staging area.

**Solution:**  
```bash
git reset A.txt
git commit -m "Commit B.txt file"
```
This exercise demonstrated how to unstage a file using git reset <file> before committing. It shows that even if multiple files are staged, you can selectively commit only the ones you want.

---

## Exercise 4: [ignore-them]

**Scenario:**  
This exercise focused on configuring Git to **ignore unnecessary files** such as compiled code, executables, and libraries.

**Solution:**  
Created a `.gitignore` file using:  
```bash
nano .gitignore
```
**Contents of .gitignore:**

```bash
*.exe
*.o
*.jar
/libraries
```

- The * wildcard matches any filename ending with the specified extension.

- The leading / before libraries ensures that the entire directory is ignored.

This setup prevents Git from tracking unwanted files, keeping the repository clean and manageable.

---

## Exercise 5: [chase-Branch]

**Scenario:**  
The goal was to update `chase-branch` with the commits from the `escaped` branch. The branch structure initially looked like this:

**Solution:**  
```bash
git merge escaped
```
After merging, chase-branch now contains all the commits from escaped.
This exercise shows how git merge combines changes from one branch into another while keeping the commit history intact.

---

## Exercise 6: [merge-conflict]

**Scenario:**  
This exercise showed how **merge conflicts** happen when the same part of a file is changed differently in two branches.

**Solution:**  
```bash
git merge another-piece-of-work
nano equation.txt   # resolve the conflict manually
git add equation.txt
git commit --no-edit
```

- Fix the conflict manually in the file.

- Stage the fixed file using git add.

- Complete the merge with git commit.

This exercise teaches how to handle merge conflicts carefully so that no work is lost.

---
## Exercise 7: [save-your-work]

**Scenario:**  
This exercise showed how to temporarily save uncommitted work to handle an urgent task without losing progress.  
For example, you are in the middle of ongoing work, but a critical bug needs an immediate fix.

**Solution:**  
```bash
git stash                  # save current work temporarily
# fix the bug in bug.txt
git commit -am "Fix a bug"
git stash pop              # retrieve previous work
echo "Finally, finished it!" >> bug.txt
git commit -am "Finish my work"
```

- git stash saves your current work temporarily.

- Fix the urgent bug and commit it.

- git stash pop restores your previous work.

- Continue working and commit your finished changes.

This exercise highlights how git stash allows you to pause ongoing work, handle urgent issues, and resume development without losing any changes.

---

## Exercise 8: [change-branch-history]

**Scenario:**  
This exercise demonstrated how to **reorder commits** using Git rebase.  
The goal was to make sure a critical bug fix is applied before continuing ongoing work.

**Solution:**  
```bash
git rebase hot-bugfix
```
After rebasing, the bug fix commit (C) is applied before the ongoing work (B).
This exercise shows how git rebase can be used to apply critical fixes cleanly while keeping a logical commit history.

---
## Exercise 9: [remove-ignored]

**Scenario:**  
In this exercise, `ignored.txt` was already being tracked by Git before a `.gitignore` rule was added. The goal was to stop tracking this file **without deleting it locally**.

**Solution:**  
```bash
git rm ignored.txt
git commit -am "Remove the file that should have been ignored"
```
This task shows how to remove a file from Git tracking while keeping it on your local machine, ensuring that .gitignore rules are properly followed.

---
## Exercise 10: [case-sensitive-filename]

**Scenario:**  
In this exercise, `File.txt` had already been committed, but the filename needed to be changed to lowercase (`file.txt`).

**Solution:**  
```bash
git mv File.txt file.txt
git commit -am "Lowercase file.txt"
```
This exercise shows how git mv can be used to rename files in a repository while preserving history, even on case-insensitive filesystems.

---
## Exercise 11: [fix-typo]

**Scenario:**  
A typo was found in `file.txt` after committing (e.g., "wordl" instead of "world"). The goal was to correct the file and **update the previous commit** so the mistake does not appear in the commit history.

**Solution:**  
```bash
# fix the typo in the file
git commit -a --amend
# optionally, update the commit message
```
This exercise shows how git commit --amend can be used to modify the last commit, including file changes and the commit message, keeping a clean and accurate history.

---
## Exercise 12: [forge-date]

**Scenario:**  
The goal was to change the date of the most recent commit to an earlier date, simulating that the work was completed earlier than it actually was.

**Solution:**  
```bash
git commit --amend --no-edit --date="1987-08-03"
```
This exercise shows how --amend with --date can be used to change the timestamp of a commit without altering its content, giving full control over commit metadata.

--- 
## Exercise 13: [fix-old-typo]

**Scenario:**  
A typo ("wordl" instead of "world") existed in an earlier commit, but another commit had already been made on top of it.  
Since a simple `--amend` couldn’t fix this, the commit history needed to be edited.

**Solution:**  
```bash
git rebase -i HEAD~2       # interactively rebase the last 2 commits
# mark the first commit with "edit"
# fix the typo in file.txt
git add file.txt
git rebase --continue       # continue the rebase
```
This exercise shows how interactive rebase can be used to edit older commits — including fixing files and updating commit messages — while keeping the overall commit history clean and consistent.

---
## Exercise 14: [commit-lost]

**Scenario:**  
An important commit was accidentally amended, overwriting the original changes.  
The goal was to **recover the original version** of the commit even though it no longer appeared in the normal commit history.

**Solution:**  
```bash
git reflog                     # find the commit ID of the original work
git reset --hard <commit-id>   # restore the repository to that commit
```
This exercise shows how git reflog keeps a record of all changes to HEAD, allowing you to recover lost commits — even those overwritten by --amend or reset.

---
## Exercise 15: [split-commit]

**Scenario:**  
Two files (`first.txt` and `second.txt`) were accidentally committed together.  
The goal was to **split them into separate commits** to keep the commit history clean and logical.

**Solution:**  
```bash
git reset --mixed HEAD~1   # unstage the last commit while keeping changes
git add first.txt
git commit -m "First.txt"
git add second.txt
git commit -m "Second.txt"
```
This exercise shows how to split a single commit by resetting it and committing changes in separate steps.
It helps maintain a clear and well-organized commit history.

---

## Exercise 16: [too-many-commits]

**Scenario:**  
Two consecutive commits introduced small changes.  
The goal was to **combine them into a single commit** to keep the project history clean and organized.

**Solution:**  
```bash
git log -2                  # view the last two commits
git rebase -i HEAD~2        # interactively rebase the last two commits
# mark the second commit as "fixup" to squash it into the first
```
This exercise shows how interactive rebase with the fixup option can merge multiple small commits into one.
It helps create a cleaner and more readable commit history.

---
## Exercise 17: [executable]

**Scenario:**  
A bash script `script.sh` did not have execute permissions, so it couldn’t be run directly on Unix systems.  
The goal was to **add execute permissions** in Git history so the script could be executed without extra steps.

**Solution:**  
```bash
git update-index --chmod=+x script.sh
```
This exercise shows how git update-index --chmod can be used to change file permissions in the repository, ensuring that scripts are properly executable across all systems.

---
## Exercise 18: [commit-parts]

**Scenario:**  
All changes were made in a single file, but the goal was to **split them into two separate commits** —  
one containing the lines with “Task 1” and another containing the remaining changes.

**Solution:**  
```bash
git add -p file.txt          # interactively select lines to stage
# mark lines with 'y' to include in the first commit
git commit -m "First part of changes"
git commit -am "The rest of the changes"
```
This exercise shows how git add -p allows you to stage specific lines from a file.
It helps make more granular commits, leading to a cleaner and more understandable project history.

---
## Exercise 19: [pick-your-features]

**Scenario:**  
Three features were developed on separate topic branches (`feature-a`, `feature-b`, and `feature-c`).  
The goal was to apply these changes as **single commits** onto the `pick-your-features` branch.

**Solution:**  
```bash
git cherry-pick feature-a
git cherry-pick feature-b
git cherry-pick feature-c
# resolve any merge conflicts
git add -A
git cherry-pick --continue
```
This exercise shows how git cherry-pick can be used to selectively apply commits from other branches.
It helps preserve specific changes while maintaining a clean and organized commit history.

---
## Exercise 20: [rebase-complex]

**Scenario:**  
A bug was fixed in the `rebase-complex` branch, but the goal was to apply **only those bug-fix commits** onto `your-master`,  
without including the unrelated work from `issue-555`.

**Solution:**  
```bash
git rebase issue-555 --onto your-master
```
This exercise shows how git rebase --onto can be used to move specific commits from one branch to another.
It gives precise control over which changes are carried forward, helping maintain a clean and focused branch history.

---
## Exercise 21: [invalid-order]

**Scenario:**  
Two consecutive commits were made in the wrong order, and the goal was to switch their positions in the commit history for better clarity and logical flow.

**Solution:**  
```bash
git log -2                  # view the last two commits
git rebase -i HEAD~2        # interactively rebase the last two commits
# move the second commit above the first to switch their order
```
This task demonstrated how interactive rebase can be used to reorder commits, allowing developers to maintain a clean, organized, and meaningful commit history.

---
## Exercise 22: [find-swearwords]

**Scenario:**  
The project contained inappropriate language that needed to be cleaned up across its history. Specifically, the goal was to replace all occurrences of the word **"shit"** with **"flower"** in `words.txt` and `list.txt` — including in past commits.

**Solution:**  
```bash
git log -S "shit" -- words.txt   # identify commits where "shit" appears in words.txt
git log -S "shit" -- list.txt    # identify commits where "shit" appears in list.txt
git rebase -i <commit-range>     # start an interactive rebase to edit those commits
# for each commit:
nano <file>                      # manually replace "shit" with "flower"
git add <file>
git commit --amend
git rebase --continue
```
This task demonstrated how interactive rebase and the -S (pickaxe) option in git log can be used together to locate and modify specific content across a project’s commit history. It’s a practical way to clean or sanitize historical data while maintaining a coherent commit sequence.

---
## Exercise 23: [find-bug]

**Scenario:**  
A customer reported that the word **"jackass"** was appearing on the main screen.  
The challenge was to **find the first commit** that introduced this bug, even though the text was Base64-encoded and the file had been changed multiple times recently.

**Solution:**  
```bash
git bisect start
git bisect bad HEAD
git bisect good 1.0           # last known working version
git bisect run sh -c "openssl enc -base64 -A -d < home-screen-text.txt | grep -v jackass"
```
After locating the commit with the bug, it can be pushed for verification:

```bash
git push origin COMMIT_ID:find-bug
```
This exercise demonstrates how git bisect can help track down exactly where a bug was introduced.
By combining it with a command to automatically check the file, you can automate the search and save significant time compared to manually checking each commit.

