import { Locale } from './locale.type'

export const arabicLocal: Locale = {
    lang: "ar",
    data: {
        pages: {
            external: {
                login: {
                    stepOne: {
                        login: "تسجيل الدخول",
                        register: "انشاء حساب",
                        registerForm: {
                            password: "كلمة المرور",
                            confirmPassword: "تأكيد كلمة المرور",
                            name: "الإسم",
                            email: "البريد الإلكتروني",
                        },
                        form: {
                            email: "البريد الإلكتروني",
                            password: "كلمة المرور",
                            forgotPassword: "هل نسيت كلمة المرور؟",
                            forgotPasswordSuccess: "تم إرسال بريد إلكتروني إلى عنوان بريدك الإلكتروني بنجاح.",
                            forgotPasswordFailed: "حدث خطأ أثناء إرسال البريد الإلكتروني.",
                            login: "تسجيل الدخول",
                            sso: "تسجيل بواسط الدخول الموحد",
                            validations: {
                                invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح."
                            },
                            loginSuccess: "تم إرسال رمز التحقق إلى بريدك الإلكتروني.",
                            loginFailed: "حدث خطأ أثناء التحقق من حسابك",
                            loginTimeout: "انتهت مدة طلب تسجيل الدخول، يرجى المحاولة مرة أخرى لاحقًا."
                        }
                    },
                },
                validations: {
                    uppercaseError: "على الأقل حرف إنجليزي كبير واحد.",
                    lowercaseError: "على الأقل حرف إنجليزي صغير واحد.",
                    digitsError: "على الأقل رقم واحد.",
                    specialCharacterError: "على الأقل حرف خاص واحد.",
                    minimumLengthError: "الحد الأدنى ثمانية أحرف.",
                    invalidEquality: "تأكيد كلمة المرور غير صحيحة. يرجى التأكد من أن تطابق كلمة المرور التي أدخلتها."
                }
            },
            home: {
                title: "الرئيسية",
                slogan: "كل ما تحتاجه في مكان واحد.",
                ourCategories: "فئات المنتجات",
                youMayLike: "قد تعجبك",
            },
            products: {
                title: "منتجاتنا",
                matchingResults: "نتائج مطابقة",
                allProducts: "جميع المنتجات"
            },
            favorites: {
                title: "المفضلة",
            },
            basket: {
                title: "السّلة",
                total: "الإجمالي",
                checkout: "الدفع",
                empty: "سلة مشترياتك فارغة",
                price: "السعر"
            },
            layout: {
                header: {
                    language: {
                        en: "English",
                        ar: "عربي"
                    },
                    userControlPanel: {
                        userProfile: "الملف الشخصي",
                        logout: "تسجيل الخروج"
                    }
                }
            },
            notFound: {
                title: 'الصفحة غير موجودة',
            }
        },
        translation: {
            name: "nameAr",
            desc: "descriptionAr",
            date: "dateAr",
        },
        validation: {
            form: {

            },
        },
        messages: {
            success: {
                title: "نجاح",
                desc: "تمت العملية بنجاح!"
            },
            warning: {
                title: "تحذير!",
                desc: ""
            },
            failed: {
                title: "خطأ",
                desc: "حدث خطأ ما."
            },
        },
        shared: {
            validation: {
                required: "هذا الحقل مطلوب",
                minDigitsLength: "الحد الأدنى لعدد الخانات المسموح به هو {{minLength}}",
                maxDigitsLength: "الحد الأعلى لعدد الخانات المسموح به هو {{maxLength}}",
                invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
                notOnlySpaces: "يجب أن لا يحتوي الحقل على فراغات فقط.",
                onlyTextWithoutNumbers: "يحب ان لا يحتوي الحقل على أرقام.",
            },
            product: {
                addToBasket: "اضف الى السلة",
                addToFavorites: "اضافة الى المفضلة",
            },
            search: "ابحث",
            searchPlaceHolder: "ابحث...",
            dialog: {
                confirm: "تأكيد",
                cancel: "إلغاء",
                close: "إغلاق",
                warning: {
                    title: "انتبه!",
                    desc: "هل أنت متأكد من اتمام العملية؟"
                }
            },
            misc: {
                back: "رجوع",
                preview: "عرض",
                remove: "إزالة",
                edit: 'تعديل',
                delete: 'حذف',
                cancel: 'الغاء',
                jd: "د.أ",
                noData: "لا توجد بيانات حتى الآن.",
            }
        },
    }
} 