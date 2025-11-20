import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Расширение загружается в изолированный процесс
    let disposable = vscode.commands.registerCommand('cmake-build-test.runBuildTest', async () => {
        if (!vscode.workspace.workspaceFolders) {
            vscode.window.showErrorMessage('No workspace folder open');
            return;
        }

        const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const terminal = vscode.window.createTerminal('CMake Build & Test');
        terminal.show();
        
        terminal.sendText(`cd "${workspaceFolder}"`);
        terminal.sendText('cmake -B build');
        terminal.sendText('cmake --build build');
        terminal.sendText('ctest -V --test-dir build');
        
        vscode.window.showInformationMessage('CMake build and test started');
    });

    // Создать кнопку 
    let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(play) Build & Test";
    statusBarItem.tooltip = "Run CMake Build and Test";
    statusBarItem.command = 'cmake-build-test.runBuildTest';
    
    // Показать элемент в статус баре, если есть CMakeLists.txt
    if (vscode.workspace.workspaceFolders) {
        const workspaceFolder = vscode.workspace.workspaceFolders[0];
        vscode.workspace.findFiles('CMakeLists.txt', null, 1).then(files => {
            if (files.length > 0) {
                statusBarItem.show();
            }
        });
    }

    context.subscriptions.push(disposable);
    context.subscriptions.push(statusBarItem);
}

export function deactivate() {}