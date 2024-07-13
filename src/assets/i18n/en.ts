import { Locale } from './locale.type'

export const englishLocal: Locale = {
    lang: "en",
    data: {
        pages: {
            external: {
                login: {
                    stepOne: {
                        login: "Login",
                        form: {
                            email: "Email",
                            password: "Password",
                            forgotPassword: "Forgot Password?",
                            forgotPasswordSuccess: "An email has been sent to your email address successfully.",
                            forgotPasswordFailed: "An error has occurred while sending the email.",
                            login: "Login",
                            sso: "Single Sign On",
                            validations: {
                                invalidEmail: "Please enter a valid email address."
                            },
                            loginSuccess: "A verification code has been sent to your email.",
                            loginFailed: "An error has occurred while verifying your account",
                            loginTimeout: "Login request has timed out, please try again later."
                        }
                    },
                },
                validations: {
                    uppercaseError: "At least one upper case English letter.",
                    lowercaseError: "At least one lower case English letter.",
                    digitsError: "At least one digit.",
                    specialCharacterError: "At least one special character.",
                    minimumLengthError: "Minimum eight in length.",
                    invalidEquality: "Invalid password confirmation. Please ensure that your password confirmation matches the password you entered."
                }
            },
            home: {
                title: "Home",
                slogan: "All you need in one place.",
                ourCategories: "Products categories",
                youMayLike: "You may like",
            },
            products: {
                title: "Products",
                matchingResults: "Matching results",
            },

            favorites: {
                title: "Favorites",
            },
            basket: {
                title: "Basket",
                total: "Total",
                checkout: "Checkout",
                empty: "Your basket is empty."
            },
            layout: {
                header: {
                    language: {
                        en: "English",
                        ar: "عربي"
                    },
                    userControlPanel: {
                        userProfile: "My Profile",
                        logout: "Logout"
                    }
                }
            },
            notFound: {
                title: 'Page not found',
            }
        },

        translation: {
            name: "nameEn",
            desc: "descriptionEn",
            date: "dateEn",
        },
        validation: {
            form: {

            },
        },
        messages: {
            success: {
                title: "Success",
                desc: "Operation has been completed successfully!"
            },
            warning: {
                title: "Warning!",
                desc: ""
            },
            failed: {
                title: "Error",
                desc: "An error occurred."
            },
        },

        shared: {
            validation: {
                required: "This field is required.",
                minDigitsLength: "The minimum digits length allowed is {{minLength}}",
                maxDigitsLength: "The maximum digits length allowed is {{maxLength}}",
                invalidEmail: "Please enter a valid email address.",
                notOnlySpaces: "The field must not contain only spaces.",
                onlyTextWithoutNumbers: "The field should not contain numbers.",
            },
            product: {
                addToBasket: "Add to basket",
                addToFavorites: "Add to favorites",
            },
            search: "Search",
            searchPlaceHolder: "Search...",
            dialog: {
                confirm: "Confirm",
                cancel: "Cancel",
                close: "Close",
                warning: {
                    title: "Warning!",
                    desc: "Are you sure you want to complete this operation?"
                }
            },
            misc: {
                back: "Back",
                preview: "Preview",
                remove: "Remove",
                edit: 'Edit',
                delete: 'Delete',
                cancel: 'Cancel',
                jd: "JD"
            }
        }

    }
} 