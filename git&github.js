//! git => VCS (Version Control System)
//! github , gitbucket , gitlab , ... => Web based platform 

// repo

//! commands 
//* git config --global --list -> list global config

//* git init -> initialize empty git repo

//* stage change -> commit changes
//* git add <file path >
//* git add .
//* git commit -m "<commit message>"

// stages
// WD => Staging Area => Local Repo => Remote Repo
//     => git add    => git commit =>   git push origin <branch_name>


// to ignore create a file .gitignore and type file_name


//? Branching
//* git branch => list all branches
//* git branch "<branch_name>" -> creates a new branch
//* git switch "branch_name" -> switches to between branches
//* git checkout <branch_name> -> switch between branch
//* git checkout -b <branch_name> -> creates branch & switch between branch


//! merging
//* git merge <branch_name>

//? merge conflict

//? working with remote repo -> github
//* git remote -v -> lists connected remote repo
//* git remote add origin <remote_github_repo_link> -> connect local repo to remote repo
//* git remote remove origin -> removes origin from remote


//? push to remote repo
//* git push origin <branch_name> -> push local repo to remote

//? git fetch (takes the updated code to staging area)
//* git fetch -> fetch remote repo without merge

//? git pull (takes the updated code and merges it)
//* git pull origin <branch_name> -> pull remote repo to local repo + merge

//* git clone <repo_link>
//* git clone <repo_link> . -> clones into same folder

//?
//main : A -> B -> D
// feature : A -> C -> E 

//! rebase -> done from feature branch
//main : A -> B -> D
// feature :        D -> C -> E 

//* git checkout feature
//* git rebase main -> takes the changes of main branch into feature branch then merges it 

//! cherry-pick -> can pick out a single commit to push to main branch
//main : A -> B -> D
// feature : A -> C -> E 
//* git cherry-pick <commit-hash>

//*git checkout main

//*git cherry-pick <commit_hash>
