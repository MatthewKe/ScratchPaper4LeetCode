(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1450], {
        59787: function(r, e, t) {
            "use strict";
            t.d(e, {
                D8: function() {
                    return g
                },
                Hb: function() {
                    return c
                },
                IC: function() {
                    return u
                },
                WX: function() {
                    return b
                },
                mU: function() {
                    return i
                }
            });
            t(4676), t(66128), t(94546), t(91518), t(72793), t(37872), t(29308), t(27115), t(15084), t(2979), t(78464), t(29092), t(70748), t(96543), t(62217), t(63306);
            var a = t(8740),
                o = t(83815);
            var n = "https://github.com/LeetCode-Feedback/LeetCode-Feedback",
                d = function() {
                    return location.pathname + location.search + location.hash
                },
                l = function(r) {
                    return new URLSearchParams("string" === typeof r ? {
                        source: r
                    } : r).toString()
                },
                c = {
                    notFound: function() {
                        return "/404/"
                    },
                    internal: {
                        dbTestcase: function() {
                            return "/internal/db-testcase/"
                        },
                        tagManagement: function() {
                            return "/tools/tag-management/"
                        },
                        questionFeedback: function() {
                            return "/tools/question-feedback/"
                        }
                    },
                    library: function() {
                        return "/library"
                    },
                    internalContest: function() {
                        return "/contest/dashboard/internal-contest"
                    },
                    contestDashboard: function() {
                        return "/contest/dashboard"
                    },
                    contestAdmin: function() {
                        return "/contest/admin"
                    },
                    emailBatch: function() {
                        return "/email_batch/"
                    },
                    contestDetail: function(r) {
                        return "/contest/".concat(r)
                    },
                    contestSponsor: function() {
                        return "/business/contact/"
                    },
                    contributeDashboard: function() {
                        return "/contribute/dashboard"
                    },
                    adminBackend: function() {
                        return "/mystic/pluto"
                    },
                    otpManager: function() {
                        return "/mystic/charon/otp"
                    },
                    review: function() {
                        return "/manage"
                    },
                    dangerZone: function() {
                        return "/danger_zone"
                    },
                    signIn: function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = (0, a.stringify)({
                                next: r || d()
                            });
                        return "/accounts/login/?".concat(e)
                    },
                    register: function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = (0, a.stringify)({
                                next: r || d()
                            });
                        return "/accounts/signup/?".concat(e)
                    },
                    profile: function(r) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Oo;
                        return "".concat(e ? "" : "/u", "/").concat(r)
                    },
                    profileWithBadgeModal: function(r, e) {
                        return "/u/".concat(r, "/?medal=").concat(e)
                    },
                    USRankingCNProfile: function(r) {
                        return "https://leetcode.cn/u/".concat(r)
                    },
                    logOut: function() {
                        return "/accounts/logout"
                    },
                    newPlayground: function(r) {
                        return "/playground/new/".concat(r)
                    },
                    problemList: function(r) {
                        return "/problem-list/".concat(r)
                    },
                    problemset: function(r) {
                        return "/problemset/".concat(r)
                    },
                    problemsetList: function(r) {
                        return "/problem-list/".concat(r)
                    },
                    questionDetail: function(r) {
                        return "/problems/".concat(r, "/")
                    },
                    questionDetailWithLearningEnvironment: function(r, e) {
                        return "/problems/".concat(r).concat(e ? "?".concat(e) : "")
                    },
                    questionDetailWithTab: function(r) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "description";
                        return "/problems/".concat(r, "/").concat(e)
                    },
                    solutions: function(r, e, t, a) {
                        return "/problems/".concat(r, "/solutions").concat(e ? "/".concat(e) : "").concat(t ? "/".concat(t).concat(a ? "/comments/".concat(a) : "") : "")
                    },
                    solutionsWithLearningEnvironment: function(r, e, t, a, o) {
                        return "/problems/".concat(r, "/solutions").concat(t ? "/".concat(t) : "").concat(a ? "/".concat(a).concat(o ? "/comments/".concat(o) : "") : "").concat(e ? "?".concat(e) : "")
                    },
                    discussion: function(r, e) {
                        return "/problems/".concat(r, "/discussion").concat(e ? "/comments/".concat(e) : "")
                    },
                    discussionComment: function(r, e) {
                        return "/problems/".concat(r, "/description/comments/").concat(e)
                    },
                    solutionEditor: function(r, e, t, a) {
                        return "/problems/".concat(r, "/post-solution").concat(t ? "/".concat(t) : "").concat(a ? "?submissionId=".concat(a) : "")
                    },
                    submissionOverview: function(r) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        return "/problems/".concat(r, "/submissions/").concat(e).concat(t || location.search)
                    },
                    submissionOverviewWithSearch: function(r) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return "/problems/".concat(r, "/submissions/").concat(e).concat(t ? location.search : "")
                    },
                    questionSolution: function(r) {
                        return "/problems/".concat(r, "/solution")
                    },
                    questionEditorial: function(r, e) {
                        return "/problems/".concat(r, "/editorial").concat(e ? "?source=".concat(e) : "")
                    },
                    questionEditorialWithLearningEnvironment: function(r, e) {
                        return "/problems/".concat(r, "/editorial").concat(e ? "?".concat(e) : "")
                    },
                    randomOneQuestion: function() {
                        return "/problems/random-one-question/"
                    },
                    premium: function() {
                        return "/premium/"
                    },
                    premiumDetail: function(r) {
                        return r ? "/premium-detail/?".concat(l(r)) : "/premium-detail/"
                    },
                    subscription: function() {
                        return "/premium/subscription/"
                    },
                    subscriptionSuccess: function() {
                        return "/premium/subscription/success/"
                    },
                    eduAuth: function() {
                        return "/premium/edu-auth/"
                    },
                    studyPlan: function() {
                        return "/study-plan"
                    },
                    studyPlanDetail: function(r) {
                        return "/study-plan/".concat(r)
                    },
                    studyPlanV2: "/studyplan",
                    studyPlanV2MyPlan: "/studyplan/my-plan",
                    studyPlanV2Detail: function(r) {
                        return "/studyplan/".concat(r)
                    },
                    studyPlanV2HistoryDetail: function(r, e) {
                        return "/studyplan/".concat(r, "?historyId=").concat(e)
                    },
                    profileHome: function() {
                        return "/profile/info/"
                    },
                    profileResume: function() {
                        return "/profile/resume/"
                    },
                    profilePreview: function() {
                        return "/profile/preview-resume/"
                    },
                    chat: function() {
                        return "/chat/"
                    },
                    account: function() {
                        return "/profile/account/"
                    },
                    order: function(r) {
                        return "/premium/order/".concat(r, "/")
                    },
                    premiumPaymentSuccess: function() {
                        return "/premium/success"
                    },
                    premiumSurvey: function() {
                        return "/premium/survey/"
                    },
                    orderList: function() {
                        return "/order/"
                    },
                    serviceAgreement: function() {
                        return "/agreement/"
                    },
                    subscriptionAgreement: function() {
                        return "/subscription-agreement/"
                    },
                    store: function() {
                        return "/store/"
                    },
                    submissionDetail: function(r) {
                        return "/submissions/detail/".concat(r, "/")
                    },
                    home: function() {
                        return "/"
                    },
                    onboarding: function() {
                        return "/onboarding/start/"
                    },
                    company: function(r) {
                        return "/company/".concat(r, "/problemset")
                    },
                    companyTag: function(r) {
                        return "/company/".concat(r)
                    },
                    discussDetail: function(r) {
                        return "/circle/discuss/".concat(r, "/")
                    },
                    articleDetail: function(r) {
                        return "/circle/article/".concat(r, "/")
                    },
                    leetbookDetail: function(r) {
                        return "/leetbook/detail/".concat(r, "/")
                    },
                    globalRankings: function() {
                        return "/contest/globalranking"
                    },
                    feedback: function() {
                        return "".concat(n, "/issues/")
                    },
                    communityRules: function() {
                        return "/discuss/general-discussion/324861/LeetCode-Community-Rules"
                    },
                    contributeTestcase: function(r) {
                        return "".concat(n, "/issues/new?assignees=&labels=&template=bug-report--english-.md&title=").concat(r)
                    },
                    topicTag: function(r) {
                        return "/tag/".concat(r, "/")
                    },
                    favoriteList: function() {
                        return "/list/"
                    },
                    uploadImage: function() {
                        return "/storage/upload/image"
                    },
                    markdownGuide: function() {
                        return "https://leetcode.cn/circle/discuss/hipGkf/"
                    },
                    supportLink: function() {
                        return "https://support.leetcode.com/hc/en-us/requests/new"
                    },
                    earlyAccess: function() {
                        return "/new/"
                    }
                },
                i = "https://support.leetcode.cn/hc/request/new/",
                b = "https://support.leetcode.cn/hc/kb/section/1198435/",
                u = "https://support.leetcode.cn/hc/kb/article/1549360/",
                g = "https://support.leetcode.cn/hc/kb/article/1549360/"
        },
        40007: function(r, e, t) {
            "use strict";
            t.d(e, {
                Cj: function() {
                    return i
                },
                M$: function() {
                    return u
                },
                eq: function() {
                    return b
                },
                xy: function() {
                    return g
                },
                qV: function() {
                    return k
                },
                $e: function() {
                    return s
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var a = t(4676),
                o = {
                    label1: "text-label-1 dark:text-dark-label-1",
                    label2: "text-label-2 dark:text-dark-label-2",
                    label3: "text-label-3 dark:text-dark-label-3",
                    label4: "text-label-4 dark:text-dark-label-4",
                    labelGrey1: "text-gray-1 dark:text-dark-gray-1",
                    labelGrey3: "text-gray-3 dark:text-dark-gray-3",
                    labelGrey4: "text-gray-4 dark:text-dark-gray-4",
                    labelGrey5: "text-gray-5 dark:text-dark-gray-5",
                    labelGrey6: "text-gray-6 dark:text-dark-gray-6",
                    labelGrey6Hover: "hover:text-gray-6 dark:hover:text-dark-gray-6",
                    labelGrey7: "text-gray-7 dark:text-dark-gray-7",
                    labelGrey7Hover: "hover:text-gray-7 dark:hover:text-dark-gray-7",
                    labelGrey7GroupHover: "group-hover:text-gray-7 dark:group-hover:text-dark-gray-7",
                    labelGrey8: "text-gray-8 dark:text-dark-gray-8",
                    labelGrey8Hover: "hover:text-gray-8 dark:hover:text-dark-gray-8",
                    labelReverse: "text-label-r dark:text-dark-label-r",
                    labelReverseHover: "hover:text-label-r dark:hover:text-dark-label-r",
                    labelWhite: "text-white dark:text-dark-white",
                    labelBlack: "text-black dark:text-white",
                    labelBlueStandard: "text-blue-s dark:text-dark-blue-s",
                    labelBlueStandardHover: "hover:text-blue-s dark:hover:text-dark-blue-s",
                    labelBlueStandardGroupHover: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    labelBlue3Hover: "hover:text-blue-3 dark:hover:text-dark-blue-3",
                    labelBlue: "text-blue dark:text-blue",
                    labelBlueHover: "hover:text-blue dark:hover:text-blue",
                    labelPink1: "text-pink-1 dark:text-pink-1",
                    labelGreenStandard: "text-green-s dark:text-dark-green-s",
                    labelGreenStandardHover: "hover:text-green-s dark:hover:text-dark-green-s",
                    labelRedStandard: "text-red-s dark:text-dark-red-s",
                    labelRedStandardHover: "hover:text-red-s dark:hover:text-dark-red-s",
                    labelOlive: "text-olive dark:text-dark-olive",
                    labelPink: "text-pink dark:text-dark-pink",
                    labelRed: "text-red-s dark:text-red-s",
                    labelYellow: "text-yellow dark:text-dark-yellow",
                    labelYellowHover: "hover:text-yellow dark:hover:text-dark-yellow",
                    labelBrandOrange: "text-brand-orange dark:text-dark-brand-orange",
                    labelBrandOrangeHover: "hover:text-brand-orange dark:hover:text-dark-brand-orange",
                    labelTeal: "text-teal dark:text-dark-teal",
                    label1Hover: "hover:text-label-1 dark:hover:text-dark-label-1",
                    label2Hover: "hover:text-label-2 dark:hover:text-dark-label-2",
                    label3Hover: "hover:text-label-3 dark:hover:text-dark-label-3",
                    placeholderLabel4: "placeholder:text-label-4 dark:placeholder:text-dark-label-4",
                    label1GroupHover: "group-hover:text-label-1 dark:group-hover:text-dark-label-1",
                    label2GroupHover: "group-hover:text-label-2 dark:group-hover:text-dark-label-2",
                    bgPaper: "bg-paper dark:bg-dark-paper",
                    bgPaperHover: "hover:bg-paper dark:hover:bg-dark-paper",
                    bgOverlay1: "bg-overlay-1 dark:bg-dark-overlay-1",
                    bgOverlay2: "bg-overlay-2 dark:bg-dark-overlay-2",
                    bgOverlay3: "bg-overlay-3 dark:bg-dark-overlay-3",
                    bgOverlay4: "bg-overlay-4 dark:bg-dark-overlay-4",
                    bgBlue0: "bg-blue-0 dark:bg-dark-blue-0",
                    bgBlue1: "bg-blue-1 dark:bg-dark-blue-1",
                    bgBlue3: "bg-blue-3 dark:bg-dark-blue-3",
                    bgBlue0Hover: "hover:bg-blue-0 dark:hover:bg-dark-blue-0",
                    bgBlue1Hover: "hover:bg-blue-1 dark:hover:bg-dark-blue-1",
                    bgBlue3Hover: "hover:bg-blue-3 dark:hover:bg-dark-blue-3",
                    bgBlueSHover: "hover:bg-blue-s dark:hover:bg-dark-blue-s",
                    bgGreen3Hover: "hover:bg-green-3 dark:hover:bg-dark-green-3",
                    bgGreenStandard: "bg-green-s dark:bg-dark-green-s",
                    bgGreenSHover: "hover:bg-green-s dark:hover:bg-dark-green-s",
                    bgGreen0: "bg-green-0 dark:bg-dark-green-0",
                    bgGreen1: "bg-green-1 dark:bg-dark-green-1",
                    bgGreen2: "bg-green-2 dark:bg-dark-green-2",
                    bgBlueStandard: "bg-blue-s dark:bg-dark-blue-s",
                    bgRedStandard: "bg-red-s dark:bg-dark-red-s",
                    bgRedSHover: "hover:bg-red-s dark:hover:bg-dark-red-s",
                    bgRed3Hover: "hover:bg-red-3 dark:hover:bg-dark-red-3",
                    bgPurple: "bg-purple dark:bg-dark-purple",
                    bgYellow: "bg-yellow dark:bg-dark-yellow",
                    bgYellow0: "bg-yellow-0 dark:bg-dark-yellow-0",
                    bgOlive: "bg-olive dark:bg-dark-olive",
                    bgPink: "bg-pink dark:bg-dark-pink",
                    bgRed1: "bg-red-1 dark:bg-dark-red-1",
                    bgOrange1: "bg-orange-1 dark:bg-dark-orange-1",
                    bgOrange2: "bg-orange-2 dark:bg-dark-orange-2",
                    bgBrandOrange: "bg-brand-orange dark:bg-dark-brand-orange",
                    bgBrandOrangeHover: "hover:bg-brand-orange dark:hover:bg-brand-orange",
                    bgGray2Hover: "hover:bg-gray-2 dark:hover:bg-dark-gray-2",
                    bgGray4: "bg-gray-4 dark:bg-dark-gray-4",
                    bgGray5: "bg-gray-5 dark:bg-dark-gray-5",
                    bgGray6: "bg-gray-6 dark:bg-dark-gray-6",
                    bgGray7: "bg-gray-7 dark:bg-dark-gray-7",
                    bgGray8: "bg-gray-8 dark:bg-dark-gray-8",
                    bgWhite: "bg-white dark:bg-white",
                    bgBlack: "bg-black dark:bg-black",
                    bgPink2: "bg-pink-2 dark:bg-pink-2",
                    bg: "bg-layer-bg dark:bg-dark-layer-bg",
                    bgLayer1: "bg-layer-1 dark:bg-dark-layer-1",
                    bgLayer1Hover: "hover:bg-layer-1 dark:hover:bg-dark-layer-1",
                    bgLayer2: "bg-layer-2 dark:bg-dark-layer-2",
                    bgLayer3: "bg-layer-3 dark:bg-dark-layer-3",
                    bgTransparent: "bg-transparent dark:bg-dark-transparent",
                    bgTransparentFocus: "focus:bg-transparent dark:focus:bg-dark-transparent",
                    bgTransparentActive: "active:bg-transparent dark:active:bg-dark-transparent",
                    bgTransparentHover: "hover:bg-transparent dark:hover:bg-dark-transparent",
                    bgBlocker: "bg-blocker dark:bg-dark-blocker",
                    bgLabel2: "bg-label-2 dark:bg-dark-label-2",
                    fill1: "bg-fill-1 dark:bg-dark-fill-1",
                    fill2: "bg-fill-2 dark:bg-dark-fill-2",
                    fill3: "bg-fill-3 dark:bg-dark-fill-3",
                    fill4: "bg-fill-4 dark:bg-dark-fill-4",
                    fillBlueStandard: "bg-blue-s dark:bg-dark-blue-s",
                    fillRedStandard: "bg-red-s dark:bg-dark-red-s",
                    fill1Hover: "hover:bg-fill-1 dark:hover:bg-dark-fill-1",
                    fill2Hover: "hover:bg-fill-2 dark:hover:bg-dark-fill-2",
                    fill3Hover: "hover:bg-fill-3 dark:hover:bg-dark-fill-3",
                    fill4Hover: "hover:bg-fill-4 dark:hover:bg-dark-fill-4",
                    fill4Focus: "focus:bg-fill-4 dark:focus:bg-dark-fill-4",
                    fillRed1: "bg-red-1 dark:bg-red-1",
                    fillGray1: "bg-gray-1 dark:bg-dark-gray-1",
                    fillGray2: "bg-gray-2 dark:bg-dark-gray-2",
                    fillGray5: "bg-gray-5 dark:bg-dark-gray-5",
                    divider1: "border-divider-1 dark:border-dark-divider-1",
                    divider2: "border-divider-2 dark:border-gray-7",
                    divider3: "border-divider-3 dark:border-dark-divider-3",
                    divider4: "border-divider-4 dark:border-dark-divider-4",
                    bgDivider1: "bg-divider-1 dark:bg-dark-divider-1",
                    bgDivider2Hover: "hover:bg-divider-2 dark:hover:bg-dark-divider-2",
                    bgDivider3: "bg-divider-3 dark:bg-dark-divider-3",
                    bgDivider3Hover: "hover:bg-divider-3 dark:hover:bg-dark-divider-3",
                    bgDivider4: "bg-divider-4 dark:bg-dark-divider-4",
                    bgDivider4Hover: "hover:bg-divider-4 dark:hover:bg-dark-divider-4",
                    dividerBorder1Hover: "hover:border-divider-1 dark:hover:border-dark-divider-1",
                    dividerBorder2: "border-divider-border-2 dark:border-dark-divider-border-2",
                    dividerBlueStandard: "border-blue-s dark:border-dark-blue-s",
                    dividerGreenStandard: "border-green-s dark:border-dark-green-s",
                    dividerGreen2: "border-green-2 dark:border-dark-green-2",
                    dividerBrandOrange: "border-brand-orange",
                    dividerGray2: "border-gray-2 dark:border-dark-gray-2",
                    dividerGray4: "border-gray-4 dark:border-dark-gray-4",
                    borderLayer1: "border-layer-1 dark:border-dark-layer-1",
                    borderFill1: "border-fill-1 dark:border-dark-fill-1",
                    borderFill2: "border-fill-2 dark:border-dark-fill-2",
                    borderFill3: "border-fill-3 dark:border-dark-fill-3",
                    borderFill4: "border-fill-4 dark:border-dark-fill-4",
                    borderLabel1: "border-label-1 dark:border-dark-label-1",
                    borderLabel2: "border-label-2 dark:border-dark-label-2",
                    borderLabel3: "border-label-3 dark:border-dark-label-3",
                    borderLabel4: "border-label-4 dark:border-dark-label-4",
                    borderGray7: "border-gray-7 dark:border-dark-gray-7"
                },
                n = {
                    labelWhite: "hover:text-white dark:hover:text-white",
                    label1: "hover:text-label-1 dark:hover:text-dark-label-1",
                    groupLabelBlueS: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    label1Group: "group-hover:text-label-1 dark:group-hover:text-dark-label-1",
                    label2: "hover:text-label-2 dark:hover:text-dark-label-2",
                    label2Group: "group-hover:text-label-2 dark:group-hover:text-dark-label-2",
                    labelBlueS: "hover:text-blue-s dark:hover:text-dark-blue-s",
                    labelGray5Group: "group-hover:text-gray-5 dark:group-hover:text-dark-gray-5",
                    labelGray6: "hover:text-gray-6 dark:hover:text-dark-gray-6",
                    labelGray6Group: "group-hover:text-gray-6 dark:group-hover:text-dark-gray-6",
                    labelGrey7: "hover:text-gray-7 dark:hover:text-dark-gray-7",
                    labelGray7: "hover:text-gray-7 dark:hover:text-dark-gray-7",
                    labelGrey7Group: "group-hover:text-gray-7 dark:group-hover:text-dark-gray-7",
                    labelGrey8: "hover:text-gray-8 dark:hover:text-dark-gray-8",
                    labelGray8: "hover:text-gray-8 dark:hover:text-dark-gray-8",
                    labelGrey8Group: "group-hover:text-gray-8 dark:group-hover:text-dark-gray-8",
                    labelBlueSGroup: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    labelBlueStandardGroup: "group-hover:text-blue-s dark:group-hover:text-dark-blue-s",
                    labelGreenStandardGroup: "group-hover:text-green-s dark:group-hover:text-dark-green-s",
                    labelRedStandard: "hover:text-red-s dark:hover:text-dark-red-s",
                    labelBrandOrangeGroup: "group-hover:text-brand-orange dark:group-hover:text-dark-brand-orange",
                    bgLayer2: "hover:bg-layer-2 dark:hover:bg-dark-layer-2",
                    bgBlue0: "hover:bg-blue-0 dark:hover:bg-dark-blue-0",
                    bgBlue1: "hover:bg-blue-1 dark:hover:bg-dark-blue-1",
                    bgGray3: "hover:bg-gray-3 dark:hover:bg-dark-gray-3",
                    bgGray6: "hover:bg-gray-6 dark:hover:bg-dark-gray-6",
                    bgGray6Group: "group-hover:bg-gray-6 dark:group-hover:bg-dark-gray-6",
                    bgGreen3: "hover:bg-green-3 dark:hover:bg-dark-green-3",
                    bgTransparent: "hover:bg-transparent dark:hover:bg-transparent",
                    bgTransparentGroup: "group-hover:bg-transparent dark:group-hover:bg-transparent",
                    bgYellow0: "hover:bg-yellow-0 dark:hover:bg-dark-yellow-0",
                    bgRedStandardGroup: "group-hover:bg-red-s dark:group-hover:bg-dark-red-s",
                    bgBrandOrangeGroup: "group-hover:bg-brand-orange dark:group-hover:bg-dark-brand-orange",
                    bgFixedWhiteFocus: "focus:bg-white dark:focus:bg-white",
                    fill2: "hover:bg-fill-2 dark:hover:bg-dark-fill-2",
                    fill2Focus: "focus:bg-fill-2 dark:focus:bg-dark-fill-2",
                    fill3: "hover:bg-fill-3 dark:hover:bg-dark-fill-3",
                    fill4: "hover:bg-fill-4 dark:hover:bg-dark-fill-4",
                    bgLayer2Group: "group-hover:bg-layer-2 dark:group-hover:bg-dark-layer-3",
                    fill3Focus: "focus:bg-fill-3 dark:focus:bg-dark-fill-3",
                    bgBlueStandardFocus: "focus:bg-blue-s dark:focus:bg-dark-blue-s",
                    borderBlueStandardFocus: "focus:border-blue-s dark:focus:border-dark-blue-s"
                },
                d = {
                    card: "shadow-level1 dark:shadow-dark-level1",
                    commandBar: "shadow-level2 dark:shadow-dark-level2",
                    dropdown: "shadow-level3 dark:shadow-dark-level3",
                    modal: "shadow-level4 dark:shadow-dark-level4"
                };

            function l(r, e) {
                var t = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(r);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function c(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(t), !0).forEach((function(e) {
                        (0, a.Z)(r, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return r
            }
            var i = c({}, o),
                b = c({}, d),
                u = c({}, n),
                g = c({}, {
                    labelButtonPrimary: "text-lc-button-primary dark:text-dark-lc-button-primary",
                    labelButtonPrimaryActive: "text-lc-button-primary-active dark:text-dark-lc-button-primary-active",
                    labelButtonTheme: "text-lc-button-theme dark:text-dark-lc-button-theme",
                    labelButtonThemeActive: "text-lc-button-theme-active dark:text-dark-lc-button-theme-active",
                    labelButtonSecondary: "text-lc-button-secondary dark:text-dark-lc-button-secondary",
                    labelButtonSecondaryActive: "text-lc-button-secondary-active dark:text-dark-lc-button-secondary-active",
                    labelButtonDanger: "text-lc-button-danger dark:text-dark-lc-button-danger",
                    labelButtonDangerActive: "text-lc-button-danger-active dark:text-dark-lc-button-danger-active",
                    labelFixedBlack: "text-lc-fixed-black dark:text-dark-lc-fixed-black",
                    labelFixedWhite: "text-lc-fixed-white dark:text-dark-lc-fixed-white",
                    labelIconPrimary: "text-lc-icon-primary dark:text-dark-lc-icon-primary",
                    labelIconSecondary: "text-lc-icon-secondary dark:text-dark-lc-icon-secondary",
                    labelIconTertiary: "text-lc-icon-tertiary dark:text-dark-lc-icon-tertiary",
                    labelIconInverse: "text-lc-icon-inverse dark:text-dark-lc-icon-inverse",
                    labelSupportError: "text-lc-support-error dark:text-dark-lc-support-error",
                    labelSupportSuccess: "text-lc-support-success dark:text-dark-lc-support-success",
                    labelSupportWarning: "text-lc-support-warning dark:text-dark-lc-support-warning",
                    labelSupportInfo: "text-lc-support-info dark:text-dark-lc-support-info",
                    labelSystemPrimary: "text-lc-system-primary dark:text-dark-lc-system-primary",
                    labelSystemPrimaryActive: "text-lc-system-primary-active dark:text-dark-lc-system-primary-active",
                    labelTextPrimary: "text-lc-text-primary dark:text-dark-lc-text-primary",
                    labelTextSecondary: "text-lc-text-secondary dark:text-dark-lc-text-secondary",
                    labelTextTertiary: "text-lc-text-tertiary dark:text-dark-lc-text-tertiary",
                    labelTextQuaternary: "text-lc-text-quaternary dark:text-dark-lc-text-quaternary",
                    labelTextInverse: "text-lc-text-inverse dark:text-dark-lc-text-inverse",
                    labelTextError: "text-lc-text-error dark:text-dark-lc-text-error",
                    bgBackgroundIndex: "bg-lc-background-index dark:bg-dark-lc-background-index",
                    bgBackgroundInverse: "bg-lc-background-inverse dark:bg-dark-lc-background-inverse",
                    bgButtonPrimary: "bg-lc-button-primary dark:bg-dark-lc-button-primary",
                    bgButtonPrimaryActive: "bg-lc-button-primary-active dark:bg-dark-lc-button-primary-active",
                    bgButtonTheme: "bg-lc-button-theme dark:bg-dark-lc-button-theme",
                    bgButtonThemeActive: "bg-lc-button-theme-active dark:bg-dark-lc-button-theme-active",
                    bgButtonSecondary: "bg-lc-button-secondary dark:bg-dark-lc-button-secondary",
                    bgButtonSecondaryActive: "bg-lc-button-secondary-active dark:bg-dark-lc-button-secondary-active",
                    bgButtonDanger: "bg-lc-button-danger dark:bg-dark-lc-button-danger",
                    bgButtonDangerActive: "bg-lc-button-danger-active dark:bg-dark-lc-button-danger-active",
                    bgFill01: "bg-lc-fill-01 dark:bg-dark-lc-fill-01",
                    bgFill02: "bg-lc-fill-02 dark:bg-dark-lc-fill-02",
                    bgFill03: "bg-lc-fill-03 dark:bg-dark-lc-fill-03",
                    bgFixedBlack: "bg-lc-fixed-black dark:bg-dark-lc-fixed-black",
                    bgFixedWhite: "bg-lc-fixed-white dark:bg-dark-lc-fixed-white",
                    bgIconPrimary: "bg-lc-icon-primary dark:bg-dark-lc-icon-primary",
                    bgIconSecondary: "bg-lc-icon-secondary dark:bg-dark-lc-icon-secondary",
                    bgIconTertiary: "bg-lc-icon-tertiary dark:bg-dark-lc-icon-tertiary",
                    bgIconInverse: "bg-lc-icon-inverse dark:bg-dark-lc-icon-inverse",
                    bgLayer01: "bg-lc-layer-01 dark:bg-dark-lc-layer-01",
                    bgLayer02: "bg-lc-layer-02 dark:bg-dark-lc-layer-02",
                    bgLayer03: "bg-lc-layer-03 dark:bg-dark-lc-layer-03",
                    bgLayer04: "bg-lc-layer-04 dark:bg-dark-lc-layer-04",
                    bgSupportError: "bg-lc-support-error-background dark:bg-dark-lc-support-error-background",
                    bgSupportSuccess: "bg-lc-support-success-background dark:bg-dark-lc-support-success-background",
                    bgSupportWarning: "bg-lc-support-warning-background dark:bg-dark-lc-support-warning-background",
                    bgSupportInfo: "bg-lc-support-info-background dark:bg-dark-lc-support-info-background",
                    bgSystemPrimary: "bg-lc-system-primary dark:bg-dark-lc-system-primary",
                    bgSystemPrimaryActive: "bg-lc-system-primary-active dark:bg-dark-lc-system-primary-active",
                    borderFill01: "border-lc-fill-01 dark:border-dark-lc-fill-01",
                    borderFill02: "border-lc-fill-02 dark:border-dark-lc-fill-02",
                    borderFill03: "border-lc-fill-03 dark:border-dark-lc-fill-03",
                    borderFixedBlack: "border-lc-fixed-black dark:border-dark-lc-fixed-black",
                    borderFixedWhite: "border-lc-fixed-white dark:border-dark-lc-fixed-white",
                    borderLayer01: "border-lc-layer-01 dark:border-dark-lc-layer-01",
                    borderLayer02: "border-lc-layer-02 dark:border-dark-lc-layer-02",
                    borderLayer03: "border-lc-layer-03 dark:border-dark-lc-layer-03",
                    borderLayer04: "border-lc-layer-04 dark:border-dark-lc-layer-04",
                    borderSupportError: "border-lc-support-error-background dark:border-dark-lc-support-error-background",
                    borderSupportSuccess: "border-lc-support-success-background dark:border-dark-lc-support-success-background",
                    borderSupportWarning: "border-lc-support-warning-background dark:border-dark-lc-support-warning-background",
                    borderSupportInfo: "border-lc-support-info-background dark:border-dark-lc-support-info-background",
                    borderSystemPrimary: "border-lc-system-primary dark:border-dark-lc-system-primary",
                    borderSystemPrimaryActive: "border-lc-system-primary-active dark:border-dark-lc-system-primary-active",
                    borderButtonPrimary: "border-lc-button-primary dark:border-dark-lc-button-primary"
                }),
                k = c({}, {
                    labelButtonPrimaryHover: "hover:text-lc-button-primary-hover dark:hover:text-dark-lc-button-primary-hover",
                    labelButtonThemeHover: "hover:text-lc-button-theme-hover dark:hover:text-dark-lc-button-theme-hover",
                    labelButtonSecondaryHover: "hover:text-lc-button-secondary-hover dark:hover:text-dark-lc-button-secondary-hover",
                    labelButtonDangerHover: "hover:text-lc-button-danger-hover dark:hover:text-dark-lc-button-danger-hover",
                    labelFixedBlack: "hover:text-lc-fixed-black dark:hover:text-dark-lc-fixed-black",
                    labelFixedWhite: "hover:text-lc-fixed-white dark:hover:text-dark-lc-fixed-white",
                    labelIconPrimary: "hover:text-lc-icon-primary dark:hover:text-dark-lc-icon-primary",
                    labelIconSecondary: "hover:text-lc-icon-secondary dark:hover:text-dark-lc-icon-secondary",
                    labelIconTertiary: "hover:text-lc-icon-tertiary dark:hover:text-dark-lc-icon-tertiary",
                    labelIconInverse: "hover:text-lc-icon-inverse dark:hover:text-dark-lc-icon-inverse",
                    labelSupportError: "hover:text-lc-support-error dark:hover:text-dark-lc-support-error",
                    labelSupportSuccess: "hover:text-lc-support-success dark:hover:text-dark-lc-support-success",
                    labelSupportWarning: "hover:text-lc-support-warning dark:hover:text-dark-lc-support-warning",
                    labelSupportInfo: "hover:text-lc-support-info dark:hover:text-dark-lc-support-info",
                    labelSystemPrimary: "hover:text-lc-system-primary dark:hover:text-dark-lc-system-primary",
                    labelSystemPrimaryHover: "hover:text-lc-system-primary-hover dark:hover:text-dark-lc-system-primary-hover",
                    labelTextPrimary: "hover:text-lc-text-primary dark:hover:text-dark-lc-text-primary",
                    labelTextSecondary: "hover:text-lc-text-secondary dark:hover:text-dark-lc-text-secondary",
                    labelTextTertiary: "hover:text-lc-text-tertiary dark:hover:text-dark-lc-text-tertiary",
                    labelTextQuaternary: "hover:text-lc-text-quaternary dark:hover:text-dark-lc-text-quaternary",
                    labelTextInverse: "hover:text-lc-text-inverse dark:hover:text-dark-lc-text-inverse",
                    labelTextError: "hover:text-lc-text-error dark:hover:text-dark-lc-text-error",
                    labelButtonPrimaryHoverGroup: "group-hover:text-lc-button-primary-hover dark:group-hover:text-dark-lc-button-primary-hover",
                    labelButtonThemeHoverGroup: "group-hover:text-lc-button-theme-hover dark:group-hover:text-dark-lc-button-theme-hover",
                    labelButtonSecondaryHoverGroup: "group-hover:text-lc-button-secondary-hover dark:group-hover:text-dark-lc-button-secondary-hover",
                    labelButtonDangerHoverGroup: "group-hover:text-lc-button-danger-hover dark:group-hover:text-dark-lc-button-danger-hover",
                    labelFixedBlackGroup: "group-hover:text-lc-fixed-black dark:group-hover:text-dark-lc-fixed-black",
                    labelFixedWhiteGroup: "group-hover:text-lc-fixed-white dark:group-hover:text-dark-lc-fixed-white",
                    labelIconPrimaryGroup: "group-hover:text-lc-icon-primary dark:group-hover:text-dark-lc-icon-primary",
                    labelIconSecondaryGroup: "group-hover:text-lc-icon-secondary dark:group-hover:text-dark-lc-icon-secondary",
                    labelIconTertiaryGroup: "group-hover:text-lc-icon-tertiary dark:group-hover:text-dark-lc-icon-tertiary",
                    labelIconInverseGroup: "group-hover:text-lc-icon-inverse dark:group-hover:text-dark-lc-icon-inverse",
                    labelSupportErrorGroup: "group-hover:text-lc-support-error dark:group-hover:text-dark-lc-support-error",
                    labelSupportSuccessGroup: "group-hover:text-lc-support-success dark:group-hover:text-dark-lc-support-success",
                    labelSupportWarningGroup: "group-hover:text-lc-support-warning dark:group-hover:text-dark-lc-support-warning",
                    labelSupportInfoGroup: "group-hover:text-lc-support-info dark:group-hover:text-dark-lc-support-info",
                    labelSystemPrimaryGroup: "group-hover:text-lc-system-primary dark:group-hover:text-dark-lc-system-primary",
                    labelSystemPrimaryHoverGroup: "group-hover:text-lc-system-primary-hover dark:group-hover:text-dark-lc-system-primary-hover",
                    labelTextPrimaryGroup: "group-hover:text-lc-text-primary dark:group-hover:text-dark-lc-text-primary",
                    labelTextSecondaryGroup: "group-hover:text-lc-text-secondary dark:group-hover:text-dark-lc-text-secondary",
                    labelTextTertiaryGroup: "group-hover:text-lc-text-tertiary dark:group-hover:text-dark-lc-text-tertiary",
                    labelTextQuaternaryGroup: "group-hover:text-lc-text-quaternary dark:group-hover:text-dark-lc-text-quaternary",
                    labelTextInverseGroup: "group-hover:text-lc-text-inverse dark:group-hover:text-dark-lc-text-inverse",
                    labelTextErrorGroup: "group-hover:text-lc-text-error dark:group-hover:text-dark-lc-text-error",
                    bgBackgroundIndex: "hover:bg-lc-background-index dark:hover:bg-dark-lc-background-index",
                    bgBackgroundInverse: "hover:bg-lc-background-inverse dark:hover:bg-dark-lc-background-inverse",
                    bgButtonPrimaryHover: "hover:bg-lc-button-primary-hover dark:hover:bg-dark-lc-button-primary-hover",
                    bgButtonThemeHover: "hover:bg-lc-button-theme-hover dark:hover:bg-dark-lc-button-theme-hover",
                    bgButtonSecondaryHover: "hover:bg-lc-button-secondary-hover dark:hover:bg-dark-lc-button-secondary-hover",
                    bgButtonDangerHover: "hover:bg-lc-button-danger-hover dark:hover:bg-dark-lc-button-danger-hover",
                    bgFill01: "hover:bg-lc-fill-01 dark:hover:bg-dark-lc-fill-01",
                    bgFill02: "hover:bg-lc-fill-02 dark:hover:bg-dark-lc-fill-02",
                    bgFill03: "hover:bg-lc-fill-03 dark:hover:bg-dark-lc-fill-03",
                    bgFixedBlack: "hover:bg-lc-fixed-black dark:hover:bg-dark-lc-fixed-black",
                    bgFixedWhite: "hover:bg-lc-fixed-white dark:hover:bg-dark-lc-fixed-white",
                    bgIconPrimary: "hover:bg-lc-icon-primary dark:hover:bg-dark-lc-icon-primary",
                    bgIconSecondary: "hover:bg-lc-icon-secondary dark:hover:bg-dark-lc-icon-secondary",
                    bgIconTertiary: "hover:bg-lc-icon-tertiary dark:hover:bg-dark-lc-icon-tertiary",
                    bgIconInverse: "hover:bg-lc-icon-inverse dark:hover:bg-dark-lc-icon-inverse",
                    bgLayer01: "hover:bg-lc-layer-01 dark:hover:bg-dark-lc-layer-01",
                    bgLayer02: "hover:bg-lc-layer-02 dark:hover:bg-dark-lc-layer-02",
                    bgLayer03: "hover:bg-lc-layer-03 dark:hover:bg-dark-lc-layer-03",
                    bgLayer04: "hover:bg-lc-layer-04 dark:hover:bg-dark-lc-layer-04",
                    bgSupportError: "hover:bg-lc-support-error-background dark:hover:bg-dark-lc-support-error-background",
                    bgSupportSuccess: "hover:bg-lc-support-success-background dark:hover:bg-dark-lc-support-success-background",
                    bgSupportWarning: "hover:bg-lc-support-warning-background dark:hover:bg-dark-lc-support-warning-background",
                    bgSupportInfo: "hover:bg-lc-support-info-background dark:hover:bg-dark-lc-support-info-background",
                    bgSystemPrimaryHover: "hover:bg-lc-system-primary-hover dark:hover:bg-dark-lc-system-primary-hover",
                    bgBackgroundIndexGroup: "group-hover:bg-lc-background-index dark:group-hover:bg-dark-lc-background-index",
                    bgBackgroundInverseGroup: "group-hover:bg-lc-background-inverse dark:group-hover:bg-dark-lc-background-inverse",
                    bgButtonPrimaryHoverGroup: "group-hover:bg-lc-button-primary-hover dark:group-hover:bg-dark-lc-button-primary-hover",
                    bgButtonThemeHoverGroup: "group-hover:bg-lc-button-theme-hover dark:group-hover:bg-dark-lc-button-theme-hover",
                    bgButtonSecondaryHoverGroup: "group-hover:bg-lc-button-secondary-hover dark:group-hover:bg-dark-lc-button-secondary-hover",
                    bgButtonDangerHoverGroup: "group-hover:bg-lc-button-danger-hover dark:group-hover:bg-dark-lc-button-danger-hover",
                    bgFill01Group: "group-hover:bg-lc-fill-01 dark:group-hover:bg-dark-lc-fill-01",
                    bgFill02Group: "group-hover:bg-lc-fill-02 dark:group-hover:bg-dark-lc-fill-02",
                    bgFill03Group: "group-hover:bg-lc-fill-03 dark:group-hover:bg-dark-lc-fill-03",
                    bgFixedBlackGroup: "group-hover:bg-lc-fixed-black dark:group-hover:bg-dark-lc-fixed-black",
                    bgFixedWhiteGroup: "group-hover:bg-lc-fixed-white dark:group-hover:bg-dark-lc-fixed-white",
                    bgIconPrimaryGroup: "group-hover:bg-lc-icon-primary dark:group-hover:bg-dark-lc-icon-primary",
                    bgIconSecondaryGroup: "group-hover:bg-lc-icon-secondary dark:group-hover:bg-dark-lc-icon-secondary",
                    bgIconTertiaryGroup: "group-hover:bg-lc-icon-tertiary dark:group-hover:bg-dark-lc-icon-tertiary",
                    bgIconInverseGroup: "group-hover:bg-lc-icon-inverse dark:group-hover:bg-dark-lc-icon-inverse",
                    bgLayer01Group: "group-hover:bg-lc-layer-01 dark:group-hover:bg-dark-lc-layer-01",
                    bgLayer02Group: "group-hover:bg-lc-layer-02 dark:group-hover:bg-dark-lc-layer-02",
                    bgLayer03Group: "group-hover:bg-lc-layer-03 dark:group-hover:bg-dark-lc-layer-03",
                    bgLayer04Group: "group-hover:bg-lc-layer-04 dark:group-hover:bg-dark-lc-layer-04",
                    bgSupportErrorGroup: "group-hover:bg-lc-support-error-background dark:group-hover:bg-dark-lc-support-error-background",
                    bgSupportSuccessGroup: "group-hover:bg-lc-support-success-background dark:group-hover:bg-dark-lc-support-success-background",
                    bgSupportWarningGroup: "group-hover:bg-lc-support-warning-background dark:group-hover:bg-dark-lc-support-warning-background",
                    bgSupportInfoGroup: "group-hover:bg-lc-support-info-background dark:group-hover:bg-dark-lc-support-info-background",
                    bgSystemPrimaryHoverGroup: "group-hover:bg-lc-system-primary-hover dark:group-hover:bg-dark-lc-system-primary-hover"
                }),
                s = c({}, {
                    down01: "shadow-down-01 dark:shadow-dark-down-01",
                    down02: "shadow-down-02 dark:shadow-dark-down-02",
                    down03: "shadow-down-03 dark:shadow-dark-down-03",
                    up01: "shadow-up-01 dark:shadow-dark-up-01",
                    up02: "shadow-up-02 dark:shadow-dark-up-02",
                    up03: "shadow-up-03 dark:shadow-dark-up-03",
                    left01: "shadow-left-01 dark:shadow-dark-left-01",
                    left02: "shadow-left-02 dark:shadow-dark-left-02",
                    left03: "shadow-left-03 dark:shadow-dark-left-03",
                    right01: "shadow-right-01 dark:shadow-dark-right-01",
                    right02: "shadow-right-02 dark:shadow-dark-right-02",
                    right03: "shadow-right-03 dark:shadow-dark-right-03"
                });
            c({}, o), c({}, d), c({}, n)
        },
        77527: function(r, e, t) {
            "use strict";
            t.d(e, {
                V: function() {
                    return s
                }
            });
            var a, o = t(4676),
                n = t(27654),
                d = t(59006),
                l = t(59679),
                c = (t(91518), t(62217), t(83696), t(2979), t(8249), t(57027)),
                i = t(701),
                b = t(15898),
                u = (t(66128), t(11270), new(function() {
                    function r() {
                        var e, t = this;
                        (0, i.Z)(this, r), (0, o.Z)(this, "_timer", 0), (0, o.Z)(this, "_startTime", 0), (0, o.Z)(this, "_time_raf", 0), (0, o.Z)(this, "_hiddenProperty", null), (0, o.Z)(this, "_windowHidden", !1), (0, o.Z)(this, "visibilityChangeEvent", null === (e = this._hiddenProperty) || void 0 === e ? void 0 : e.replace(/hidden/i, "visibilitychange")), (0, o.Z)(this, "timeFunction", (function(r) {
                            0 === t._startTime && (t._startTime = r), r - t._startTime >= 1e3 && (t._time_raf += 1, t._startTime = r), t._timer = requestAnimationFrame(t.timeFunction)
                        }))
                    }
                    return (0, b.Z)(r, [{
                        key: "onVisibilityChange",
                        value: function() {
                            var r, e = null !== (r = this._hiddenProperty) && void 0 !== r ? r : "hidden";
                            document.visibilityState === e ? this._windowHidden = !0 : (this._startTime = 0, this._windowHidden = !1)
                        }
                    }, {
                        key: "getTimeRaf",
                        value: function() {
                            return this._time_raf
                        }
                    }, {
                        key: "initTimer",
                        value: function() {
                            var r;
                            this._timer && !this._windowHidden || (this._hiddenProperty = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null, document.addEventListener(null !== (r = this.visibilityChangeEvent) && void 0 !== r ? r : "visibilitychange", this.onVisibilityChange), this._timer = requestAnimationFrame(this.timeFunction))
                        }
                    }, {
                        key: "removeTimer",
                        value: function() {
                            var r;
                            this._timer && (cancelAnimationFrame(this._timer), document.removeEventListener(null !== (r = this.visibilityChangeEvent) && void 0 !== r ? r : "visibilitychange", this.onVisibilityChange), this._timer = this._startTime = this._time_raf = 0)
                        }
                    }]), r
                }())),
                g = function(r) {
                    return r = function(r) {
                        return window.location.pathname.startsWith("/problems/") ? (u.initTimer(), r.pageTimer = u.getTimeRaf()) : u.removeTimer(), r
                    }(r)
                },
                k = t(83815).XK ? function() {} : function(r) {
                    console.groupCollapsed("[track]", r.key), Object.entries(r.data).forEach((function(r) {
                        var e = (0, l.Z)(r, 2),
                            t = e[0],
                            a = e[1];
                        console.info("".concat(t, ": ").concat(a))
                    })), Object.entries(r.target || {}).forEach((function(r) {
                        var e = (0, l.Z)(r, 2),
                            t = e[0],
                            a = e[1];
                        console.info("".concat(t, ": ").concat(a))
                    })), console.groupEnd()
                },
                s = (a = {}, (0, o.Z)(a, n.X.GIO, (function(r) {
                    var e = window.gio;
                    r && (0, d.jU)() && e && e("track", r.key, r.data)
                })), (0, o.Z)(a, n.X.GA4, (function(r) {
                    var e = window.gtag;
                    if (r && (0, d.jU)() && e) {
                        var t = {};
                        Object.entries(r.data).forEach((function(r, e) {
                            var a = (0, l.Z)(r, 2),
                                o = a[0],
                                n = a[1];
                            t["event_param_".concat(e + 1)] = "".concat(o, ": ").concat(n)
                        })), e("event", r.key, t)
                    }
                })), (0, o.Z)(a, n.X.SELF_DB, (function(r) {
                    r && c.Z.report({
                        event_key: r.key,
                        type: r.key.split("_").pop(),
                        target: JSON.stringify(r.target),
                        extra: JSON.stringify(g(r.data))
                    })
                })), (0, o.Z)(a, n.X.CONSOLE, k), a)
        },
        27654: function(r, e, t) {
            "use strict";
            var a;
            t.d(e, {
                    X: function() {
                        return a
                    }
                }),
                function(r) {
                    r.GIO = "gio", r.GA4 = "ga4", r.CONSOLE = "console", r.SELF_DB = "self_db"
                }(a || (a = {}))
        },
        57027: function(r, e, t) {
            "use strict";
            t(78464), t(29092), t(70748), t(96543), t(63306);
            var a = t(19129),
                o = t(15898),
                n = t(701),
                d = t(4676),
                l = t(22980),
                c = t.n(l),
                i = (t(43969), t(87621), t(91518), t(62217), t(58935), t(2979), t(90921)),
                b = t.n(i),
                u = t(83815);

            function g(r, e) {
                var t = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(r);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function k(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(t), !0).forEach((function(e) {
                        (0, d.Z)(r, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return r
            }
            var s = ["leetcode.cn", "leetcode-cn.com"];
            var v = "abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=";

            function p(r, e, t) {
                var a = Math.floor(Math.random() * (e - r + 1) + r);
                return 0 === t && a >= v.length - 10 && (a = p(r, e, t)), a
            }
            var h = (0, o.Z)((function r() {
                var e = this;
                (0, n.Z)(this, r), (0, d.Z)(this, "reportCache", []), (0, d.Z)(this, "isSubmit", !1), (0, d.Z)(this, "reportUrl", u.TQ ? "/i/event" : s.includes(window.location.hostname) ? "https://analysis.leetcode.cn/i/event" : "https://analysis.lingkou.xyz/i/event"), (0, d.Z)(this, "sendTimer", void 0), (0, d.Z)(this, "report", (function(r) {
                    window.clearTimeout(e.sendTimer), Array.isArray(r) || (r = [r]);
                    var t = localStorage.getItem("report_random_id");
                    t || (t = function(r) {
                        var e = v.length - 1,
                            t = "";
                        r = r || 15;
                        for (var a, o = 0; o < r; o++) a = p(0, e, o), t += v[a];
                        return t
                    }(60), localStorage.setItem("report_random_id", t)), r.forEach((function(r) {
                        var a;
                        e.reportCache.push(k(k({}, r), {}, {
                            href: location.href,
                            anonymous_id: null !== (a = r.anonymous_id) && void 0 !== a ? a : t,
                            referer: document.referrer
                        }))
                    })), e.sendTimer = setTimeout(e.submitReport, 800)
                })), (0, d.Z)(this, "submitReport", (0, a.Z)(c().mark((function r() {
                    var t, a, o, n = arguments;
                    return c().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                t = n.length > 0 && void 0 !== n[0] && n[0], r.next = 4;
                                break;
                            case 4:
                                if (a = JSON.stringify(e.reportCache), !t) {
                                    r.next = 10;
                                    break
                                }
                                return e.reportCache = [], o = new window.Blob(["dataList=".concat(a)], {
                                    type: "application/x-www-form-urlencoded"
                                }), window.navigator.sendBeacon(e.reportUrl, o), r.abrupt("return");
                            case 10:
                                if (e.reportCache.length && !e.isSubmit) {
                                    r.next = 12;
                                    break
                                }
                                return r.abrupt("return");
                            case 12:
                                return e.reportCache = [], r.prev = 13, e.isSubmit = !0, b().defaults.withCredentials = !0, r.next = 18, b().post(e.reportUrl, "dataList=".concat(encodeURIComponent(a)), {
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded",
                                        "x-timezone": u.aB
                                    }
                                });
                            case 18:
                                r.next = 24;
                                break;
                            case 20:
                                r.prev = 20, r.t0 = r.catch(13), console.error("report err: ".concat(r.t0)), e.reportCache = e.reportCache.concat(JSON.parse(a));
                            case 24:
                                return r.prev = 24, e.isSubmit = !1, r.finish(24);
                            case 27:
                            case "end":
                                return r.stop()
                        }
                    }), r, null, [
                        [13, 20, 24, 27]
                    ])
                })))), setInterval((function() {
                    e.submitReport()
                }), 1e4), window.addEventListener("beforeunload", (function() {
                    e.submitReport(!0)
                }))
            }));
            e.Z = new h
        },
        24654: function() {}
    }
]);