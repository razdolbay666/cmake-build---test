# CMake Build & Test VSCode Extension

Расширение для Visual Studio Code, которое добавляет кнопку в статус-бар для автоматического выполнения команд CMake сборки и тестирования.


## ФИО, группа, ИСУ ID

* Кузьмин Тимофей 
* М3106
* 505200

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

## Установка расширения

Установите в VSCode через VSIX файл или скопируйте в папку расширений  

## Использование

* Откройте проект с CMake в VSCode

* Убедитесь, что в корне проекта есть файл CMakeLists.txt

* Нажмите на кнопку "Build & Test" в статус-баре (правый нижний угол)

* Наблюдайте за процессом в открывшемся терминале

## Структура проекта расширения 

├── .vscode/              # Конфигурация VSCode  
├── dist/                 # Скомпилированные файлы  
├── node_modules/         # Зависимости npm  
├── src/                  # Исходный код  
│   └── extension.ts      # Основной файл расширения  
├── test/                 # Тесты  
├── .gitignore           # Игнорируемые файлы Git  
├── .vscode-test.mjs     # Конфигурация тестов VSCode  
├── .vscodeignore        # Игнорируемые файлы при упаковке  
├── CHANGELOG.md         # История изменений  
├── eslint.config.mjs    # Конфигурация ESLint  
├── package-lock.json    # Фиксированные версии зависимостей  
├── package.json         # Манифест npm  
├── README.md            # Документация  
├── tsconfig.json        # Конфигурация TypeScript  
├── vsc-extension-quickstart.md # Быстрый старт  
└── webpack.config.js    # Конфигурация Webpack  

## Требования

* Visual Studio Code ≥ 1.105.1
* Node.js ≥ 14.x
* CMake ≥ 3.10
* CTest (обычно входит в состав CMake)

## Возможные проблемы

### Кнопка не отображается
* Убедитесь, что в корне проекта есть файл CMakeLists.txt
* Перезагрузите окно VSCode (Ctrl+Shift+P → "Developer: Reload Window")

### Ошибки выполнения команд
* Проверьте установку CMake и CTest
* Убедитесь, что компилятор настроен правильно
* Проверьте права доступа к папке сборки

## История коммитов 

* 26d211b (HEAD -> master, origin/master) Changed author to ФИО
* cecdc4f Added author's name
* 47112fe Updated VScode required version
* 2a68ee5 Fixed formatting in Readme
* 8964926 Changed CHANGELOG.md
* 667afb4 Made readme md
* 97803c5 Made brief description
* d25531f Added button