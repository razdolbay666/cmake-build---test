import * as vscode from 'vscode';
// Функция активации расширения
export function activate(context: vscode.ExtensionContext) {
    // Регистрация функциональности 
    let disposable = vscode.commands.registerCommand('cmake-build-test.runBuildTest', async () => {
        // Проверка рабочего пространства
        if (!vscode.workspace.workspaceFolders) {
            vscode.window.showErrorMessage('No workspace folder open');
            return;
        }
        //Получение пути к рабочему пространству 
        const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const terminal = vscode.window.createTerminal('CMake Build & Test');
        terminal.show();
        // Выполнение комманд 
        terminal.sendText(`cd "${workspaceFolder}"`);
        terminal.sendText('cmake -B build');
        terminal.sendText('cmake --build build');
        terminal.sendText('ctest -V --test-dir build');
        // Отображение сообщения
        vscode.window.showInformationMessage('CMake build and test started');
    });

    // Создать кнопку (элемент статус бара)
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
    // Автоматическая очистка при деактивации 
    context.subscriptions.push(disposable);
    context.subscriptions.push(statusBarItem);
}
// Функция деактивации вызывается при отключении расширения, удалении расширения
export function deactivate() {}