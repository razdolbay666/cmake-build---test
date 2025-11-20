# CMake Build & Test VSCode Extension

Расширение для Visual Studio Code, которое добавляет кнопку в статус-бар для автоматического выполнения команд CMake сборки и тестирования.

## Функциональность

* Однокнопочная сборка и тестирование - запускает полный цикл сборки и тестирования CMake проекта

* Автоматическое определение проекта - кнопка отображается только в проектах с файлом CMakeLists.txt

* Интегрированный терминал - команды выполняются в отдельном терминале VSCode

## Команды

Расширение выполняет следующие команды в последовательности:
```
cmake -B build
cmake --build build
ctest -V --test-dir build
```
## Установка

### Предварительные требования:

* Visual Studio Code

* Установленный CMake

* Установленный CTest

* Совместимый компилятор (GCC, Clang, MSVC и т.д.)

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
