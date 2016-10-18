var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.filterByData = function (student) {
        if (!student.websiteUrl || !student.codeSourceUrl) {
            return false;
        }
        return true;
    }

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Artur Savluk",
            "websiteUrl": "https://palyvodaboi.github.io/somali/",
            "codeSourceUrl": "https://github.com/palyvodaBoi/somali",
            "cvUrl": "https://ua.linkedin.com/in/arthur-savluk-b1322991",
            "photo": "images/students/savluk.jpg"
        },
        {
            "name": "Vasyl Paliukha",
            "websiteUrl": "https://guliver1993.github.io/my-page/",
            "codeSourceUrl": "https://github.com/guliver1993/my-page",
            "cvUrl": "",
            "photo": "images/students/paliukha.jpg"
        },
        {
            "name": "Denys Salamatin",
            "websiteUrl": "https://fleadone.github.io/personal_website/",
            "codeSourceUrl": "https://github.com/fleadone/personal_website",
            "cvUrl": "https://drive.google.com/open?id=0B6yR72owHu6yd29iY0g5aWJKUEk",
            "photo": "images/students/salamatin.jpg"
        },
        {
            "name": "Iryna Yeltsova",
            "websiteUrl": "https://irischka.github.io/My_projeckt/",
            "codeSourceUrl": "https://github.com/irischka/My_projeckt",
            "cvUrl": "",
            "photo": "images/students/yeltsova.jpg"
        },
        {
            "name": "Taras German",
            "websiteUrl": "https://spacestation5.github.io/site-permalink/",
            "codeSourceUrl": "https://github.com/spacestation5/site-permalink",
            "cvUrl": "",
            "photo": "images/students/german.jpg"
        },
        {
            "name": "Yurii Burko",
            "websiteUrl": "https://yuraburko.github.io/website/",
            "codeSourceUrl": "https://github.com/YuraBurko/website",
            "cvUrl": "https://docs.google.com/document/d/1dNgrxK5KaDtReUndgziZKJZBsayClgJdsEMa0axqC2Q/edit?usp=sharing",
            "photo": "images/students/burko.jpg"
        },
        {
            "name": "Iurii Grynykha",
            "websiteUrl": "https://iuriigrynykha.github.io/personalwebsite/",
            "codeSourceUrl": "https://github.com/iuriigrynykha/personalwebsite",
            "cvUrl": "https://drive.google.com/open?id=0B1FU5fABAynkSG96cEl5OG83aUE",
            "photo": "images/students/grynykha.jpg"
        },
        {
            "name": "Yurii Semkiv",
            "websiteUrl": "https://yursem11.github.io/my-first-site/",
            "codeSourceUrl": "https://github.com/yursem11/my-first-site",
            "cvUrl": "https://drive.google.com/file/d/0ByrLf0TpE6BPdm9uUWJYX1hqWG8/view?usp=sharing",
            "photo": "images/students/semkiv.jpg"
        },
        {
            "name": "Iryna Sergiychuk",
            "websiteUrl": "https://irynasergiychuk.github.io/innovatorsdna/",
            "codeSourceUrl": "https://github.com/IrynaSergiychuk/innovatorsdna",
            "cvUrl": "https://drive.google.com/file/d/0BxNXQT_T9RSncG5SMkZJRGVPWk0/view?usp=sharing",
            "photo": "images/students/sergiychuk.jpg"
        },
        {
            "name": "Iuliia Lazurkevych",
            "websiteUrl": "https://julialaz.github.io/project/",
            "codeSourceUrl": "https://github.com/Julialaz/project",
            "cvUrl": "https://drive.google.com/open?id=0B1Zf0UL_IQn3ODF3VE9BM1A3LUE",
            "photo": "images/students/lazurkevych.jpg"
        },
        {
            "name": "Karina Hul'ka",
            "websiteUrl": "",
            "codeSourceUrl": "",
            "cvUrl": "",
            "photo": "images/students/hul'ka.jpg"
        },
        {
            "name": "Andrii Rura",
            "websiteUrl": "https://andreq11.github.io/mywebsite/",
            "codeSourceUrl": "https://github.com/andreq11/mywebsite",
            "cvUrl": "",
            "photo": "images/students/rura.jpg"
        },
        {
            "name": "Galyna Sergunenkova",
            "websiteUrl": "https://galuwka.github.io/sea-see-site/",
            "codeSourceUrl": "https://github.com/galuwka/sea-see-site",
            "cvUrl": "",
            "photo": "images/students/sergunenkova.jpg"
        },
        {
            "name": "Andrii Orynchak",
            "websiteUrl": "https://andreworunchak.github.io/homepage/index.html",
            "codeSourceUrl": "https://github.com/AndrewOrunchak",
            "cvUrl": "",
            "photo": "images/students/orynchak.jpg"
        },
        {
            "name": "Olena Maherovska",
            "websiteUrl": "https://web-site-hmaherovska.c9users.io/index.html#",
            "codeSourceUrl": "https://github.com/HelenMaherovska/web-site",
            "cvUrl": "",
            "photo": "images/students/maherovska.png"
        },
        {
            "name": "Taras Borovets",
            "websiteUrl": "https://tarasborovets.github.io/mysite/",
            "codeSourceUrl": "https://github.com/TarasBorovets/mysite",
            "cvUrl": "",
            "photo": "images/students/borovets.jpg"
        },
        {
            "name": "Angelina Poryvaieva",
            "websiteUrl": "https://aporyvaeva.github.io/htmlwebsite/",
            "codeSourceUrl": "https://github.com/aporyvaeva/htmlwebsite",
            "cvUrl": "https://www.linkedin.com/in/angelina-poryvaieva-793352107?trk=nav_responsive_tab_profile",
            "photo": "images/students/poryvaieva.jpg"
        },
        {
            "name": "Olena Usyk",
            "websiteUrl": "https://olenkausyk.github.io/my-site/",
            "codeSourceUrl": "https://github.com/Olenkausyk/my-site",
            "cvUrl": "https://drive.google.com/open?id=0B9XqbSnh4QvCSGpYUGFKQnUxX1k",
            "photo": "images/students/usyk.jpg"
        },
        {
            "name": "Ihor Dziuba",
            "websiteUrl": "",
            "codeSourceUrl": "",
            "cvUrl": "",
            "photo": "images/students/dziuba.jpg"
        },
        {
            "name": "Yaroslav Rybak",
            "websiteUrl": "https://slavafisher.github.io/another/",
            "codeSourceUrl": "https://github.com/slavafisher/another",
            "cvUrl": "",
            "photo": "images/students/rybak.jpg"
        },
        {
            "name": "Mariana Krasnytska",
            "websiteUrl": "https://marjanaran.github.io/bootstrawebpage/",
            "codeSourceUrl": "https://github.com/MarjanAran/bootstrawebpage",
            "cvUrl": "",
            "photo": "images/students/krasnytska.jpg"
        },
        {
            "name": "Anastasia Doroshenko",
            "websiteUrl": "https://nastasi9020.github.io/mysite/",
            "codeSourceUrl": "https://github.com/Nastasi9020/mysite",
            "cvUrl": "",
            "photo": "images/students/doroshenko.jpg"
        },
        {
            "name": "Mykola Tatarenko",
            "websiteUrl": "https://kolya1088.github.io/newproject/",
            "codeSourceUrl": "https://github.com/Kolya1088/newproject",
            "cvUrl": "",
            "photo": "images/students/tatarenko.jpg"
        },
        {
            "name": "Nazar Tkach",
            "websiteUrl": "https://nazzarkevich.github.io/bootstrap-project/",
            "codeSourceUrl": "https://github.com/nazzarkevich/bootstrap-project",
            "cvUrl": "",
            "photo": "images/students/tkach.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
