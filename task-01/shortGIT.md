# Git Commands Short Notes

These are concise Git notes summarizing the Git commands used in Task-01 exercises.  

---

## 1. Branch Management
1. **git start <branch>** – Creates and switches to a new branch (custom command in exercises).  
2. **git merge <branch>** – Combines changes from <branch> into the current branch while preserving commit history.  

---

## 2. Staging and Committing
3. **git add <file>** – Stages a specific file for commit.  
4. **git add -p <file>** – Stages selected lines or hunks interactively from a file.  
5. **git commit -m "<message>"** – Commits staged changes with a message.  
6. **git commit -a -m "<message>"** – Stages all tracked files and commits in one step.  
7. **git commit --amend** – Modifies the last commit message or content.  
8. **git commit -a --amend --date="<date>"** – Amends the last commit with a custom timestamp.  
9. **git reset <file>** – Removes a file from staging area without deleting it.  
10. **git reset --mixed HEAD~1** – Unstages the last commit but keeps changes in working directory.  
11. **git reset --hard <commit-id>** – Resets the repo to a specific commit, discarding changes.  

---

## 3. Branch History and Rewriting
12. **git rebase <branch>** – Reapplies commits on top of another branch.  
13. **git rebase -i HEAD~N** – Interactively edit, squash, or reorder last N commits.  
14. **git rebase <upstream> --onto <newbase>** – Moves commits from one branch to another selectively.  
15. **git rebase --continue** – Continues rebase after resolving conflicts.  

---

## 4. Handling Lost or Stashed Work
16. **git stash** – Temporarily saves uncommitted changes.  
17. **git stash pop** – Restores stashed changes.  
18. **git reflog** – Shows all changes to HEAD, including lost commits.  

---

## 5. File and Permission Management
19. **git mv <old> <new>** – Renames or moves a file while preserving history.  
20. **git rm <file>** – Stops tracking a file and optionally deletes it from the working directory.  
21. **git update-index --chmod=+x <file>** – Adds executable permission to a file.  
22. **.gitignore** – Lists files or patterns to ignore in the repository.  

---

## 6. Inspecting History
23. **git log** – Shows full commit history.  
24. **git log -2** – Shows the last 2 commits.  
25. **git log -S "<string>" -- <file>** – Finds commits that added or removed a specific string.  

---

## 7. Cherry-Pick
26. **git cherry-pick <commit/branch>** – Applies a commit from another branch onto the current branch.  
27. **git cherry-pick --continue** – Continues cherry-pick after resolving conflicts.  

---

## 8. Bisect
28. **git bisect start** – Begins binary search to find a commit introducing a bug.  
29. **git bisect bad HEAD** – Marks the current commit as bad.  
30. **git bisect good <commit>** – Marks a known good commit.  
31. **git bisect run <command>** – Automates checking commits using a script.  

---

## 9. Practical Summary
32. **git add -p** – Stage selected lines for granular commits.  
33. **git commit --amend** – Fix mistakes in last commit.  
34. **git reset --hard** – Recover repository to a previous state.  
35. **git rebase -i** – Edit, squash, or reorder commits.  
36. **git cherry-pick** – Apply selected commits to another branch.  
37. **git stash** – Temporarily save work.  
38. **git reflog** – Recover lost commits.  
39. **git bisect** – Find the commit introducing a bug.  
40. **git update-index --chmod=+x** – Make scripts executable.  
41. **.gitignore** – Ignore unwanted files.  
