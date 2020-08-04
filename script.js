var app = new Vue({
    el: '#app',
    data: {
        surname: '',
        name: '',
        birthDate: '',
        phone: '',
        group: [],
        zip: '',
        city: '',
        document: '',
        documentDate: '',
        errors: {},
        isNecessary: false,
        form: true,
        successfull: false
    },
    computed: {
        checkSurname: function() {
            if (this.surname.length > 0) {
                return 'Ok'
            }
        },
        checkName: function() {
            if (this.name.length > 0) {
                return 'Ok'
            }
        },
        checkBirthDate: function() {
            if (this.birthDate.length > 0) {
                return 'Ok'
            }
        },
        checkPhone: function() {
            if (Number(this.phone[0]) != 7 &&
                this.phone.length > 0) {
                return 'Номер должен начинаться с семёрки'
            } else if (Number.isNaN(Number(this.phone)) === true) {
                return 'Воу-воу - вводите номер состоящий только из цифр'
            } else if (this.phone.length > 0 &&
                this.phone.length < 11) {
                return 'Жду... Вводите ещё...'
            } else if (this.phone.length > 11) {
                return 'По-моему здесь есть лишние цифры'
            } else if (this.phone === '') {
                return ''
            } else {
                return 'Ok'
            }
        },
        checkGroup: function() {
            if (this.group.length > 0) {
                return 'Ok'
            }
        },
        checkZip: function() {
            if (this.zip.length === 0) {
                return ''
            } else if (Number.isNaN(Number(this.zip)) === true) {
                return 'Индекс состоит только из цифр'
            } else if (this.zip.length < 6) {
                return 'Жду... Вводите ещё'
            } else if (this.zip.length > 6) {
                return 'Нет такого индекса - убирайте циферки'
            } else {
                return 'Ok'
            }
        },
        checkCity: function() {
            if (this.city.length > 0) {
                return 'Ok'
            }
        },
        checkDocument: function() {
            if (this.document.length > 0 && this.document != 'Выбрать') {
                return 'Ok'
            }
        },
        checkDocumentDate: function() {
            if (this.documentDate.length > 0) {
                return 'Ok'
            }
        }
    },

    methods: {
        checkForm: function(event) {
            if (this.checkSurname === 'Ok' &&
                this.checkName === 'Ok' &&
                this.checkBirthDate === 'Ok' &&
                this.checkPhone === 'Ok' &&
                this.checkGroup === 'Ok' &&
                (this.checkZip === '' || this.checkZip === 'Ok') &&
                this.checkCity === 'Ok' &&
                this.checkDocument === 'Ok' &&
                this.checkDocumentDate === 'Ok'
            ) {
                this.form = false;
                this.successfull = true
            } else {
                this.isNecessary = true
            }

            this.errors = {};

            if (this.checkSurname != 'Ok') {
                this.errors.surname = 'Нужно бы фамилию заполнить.'
            }
            if (this.checkName != 'Ok') {
                this.errors.name = 'Без имени - никак'
            }
            if (this.checkBirthDate != 'Ok') {
                this.errors.birthDate = 'Ну а родился-то когда?'
            }
            if (this.checkPhone != 'Ok') {
                this.errors.phone = 'Я хотел бы дозвониться, когда буду звонить'
            }
            if (this.checkGroup != 'Ok') {
                this.errors.group = 'Сделайте выбор'
            }
            if (this.checkCity != 'Ok') {
                this.errors.city = 'Откудова?'
            }
            if (this.checkDocument != 'Ok') {
                this.errors.document = 'А документик имеется?'
            }
            if (this.checkDocumentDate != 'Ok') {
            	this.errors.documentDate = 'Давно ли сей документ в пользовании?'
            }
            event.preventDefault();
        }
    }
})