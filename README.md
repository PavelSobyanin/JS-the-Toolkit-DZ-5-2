[![Build status](https://ci.appveyor.com/api/projects/status/0oatfmevdgf3efh3?svg=true)](https://ci.appveyor.com/project/PavelSobyanin/js-the-toolkit-dz-5-2)

# Домашнее задание к лекции «Классы, наследование»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## Методы

### Легенда

Поскольку вы создавали классы для того, чтобы хранить в одном месте свойства объекта и его поведение, то пришла пора реализовать соответствующие методы.

#### Описание

Реализуйте в классе `Character` метод `levelUp`, который работает следующим образом:
1. На 1 повышает поле `level`;
1. На 20% повышает показатели `attack` и `defence`;
1. Приводит показатель `health` к значению 100.

Метод должен работать только если показатель жизни не равен 0. В противном случае генерируется ошибка (нельзя повысить левел умершего).

Реализуйте в класса `Character` метод `damage(points)`, который меняет внутреннее состояние объекта (`points` -  это урон, наносимый персонажу). Метод `damage(points)` ничего не возвращает и рассчитывает итоговое изменение жизни персонажа (`health`) по формуле: `health -= points * (1 - defence / 100)`, учитывая, что значение `health >= 0`.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.