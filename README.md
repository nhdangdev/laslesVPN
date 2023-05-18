This is a Html5, Css, Scss project with live Server

##### Getting Started

---

First, install node :

> npm i node
> #then check node version
> node -v

Open Vscode then

> #Turn on Terminal, install sass
> npm install -g sass
#on Terminal, write
> sass .sass/app.scss css/app.css --watch
#compile scss to css

- If you see error like that:

  > cannot be loaded because running scripts is disabled on this system

- In Start, turn on PowerShell, Run Administrator
  > Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

#Then write Yes and click Enter

- Open Terminal
  > sass .sass/app.scss css/app.css --watch
