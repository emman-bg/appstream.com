export default {
    name: 'FieldValidatorMixin',

    methods: {
        isValidEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    }
};
