"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3382], {
        88620: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return o
                }
            });
            var r = n(40682),
                o = function() {
                    var e, t, n, o = (0, r.U)({
                            notifyOnChangeProps: ["data"]
                        }),
                        i = o.data,
                        a = o.isLoading,
                        c = null === i || void 0 === i ? void 0 : i.userStatus,
                        s = null !== (e = null === c || void 0 === c ? void 0 : c.isPhoneVerified) && void 0 !== e && e,
                        u = null !== (t = null === c || void 0 === c ? void 0 : c.isVerified) && void 0 !== t && t;
                    return {
                        isLoading: a,
                        isSignedIn: null !== (n = null === c || void 0 === c ? void 0 : c.isSignedIn) && void 0 !== n && n,
                        isPhoneVerified: s,
                        isVerified: u,
                        isPrimaryVerified: s
                    }
                }
        },
        41002: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return a
                }
            });
            var r = n(64386),
                o = n(42456),
                i = !!window.localStorage;

            function a(e, t, n) {
                var a = (0, r.useState)((function() {
                        var n;
                        if (!i) return t;
                        var r = localStorage.getItem(e);
                        return null !== (n = (0, o.a)(r)) && void 0 !== n ? n : t
                    })),
                    c = a[0],
                    s = a[1],
                    u = (0, r.useState)(!1),
                    l = u[0],
                    d = u[1],
                    p = (0, r.useRef)(t),
                    f = (0, r.useCallback)((function(t, n) {
                        try {
                            s((function(r) {
                                var o = t instanceof Function ? t(r) : t;
                                return null !== n && void 0 !== n && n.skipStorage || !i || (void 0 === o ? localStorage.removeItem(e) : localStorage.setItem(e, JSON.stringify(o))), o
                            }))
                        } catch (r) {}
                    }), [e]);
                return (0, r.useEffect)((function() {
                    if (i) {
                        var t = localStorage.getItem(e),
                            r = (0, o.a)(t);
                        (null !== n && void 0 !== n && n.writeIfNotExists ? f : s)(null !== r && void 0 !== r ? r : p.current), d(!0)
                    }
                }), [e, null === n || void 0 === n ? void 0 : n.writeIfNotExists, s, f]), [c, f, l]
            }
        },
        22290: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return o
                }
            });
            var r = n(64386),
                o = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return (0, r.useEffect)((function() {
                        n(!0)
                    }), []), t
                }
        },
        59970: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return o
                }
            });
            var r = n(64386),
                o = function() {
                    var e = !0,
                        t = (0, r.useCallback)((function() {
                            return {
                                width: window.innerWidth,
                                height: window.innerHeight
                            }
                        }), [e]),
                        n = (0, r.useState)(t),
                        o = n[0],
                        i = n[1];
                    return (0, r.useEffect)((function() {
                        function e() {
                            i(t())
                        }
                        return window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }), [t, e]), o
                }
        },
        33440: function(e, t, n) {
            var r;
            n.d(t, {
                    D: function() {
                        return r
                    }
                }),
                function(e) {
                    e.LandingPagePremiumLink = "lp_pl", e.NavbarOldPremiumLink = "nb_opl", e.StoreOldPremiumLink = "sto_opl", e.NavbarNewPremiumLink = "nb_npl", e.StoreNewPremiumLink = "sto_npl", e.UserMenuPremiumLink = "um_pl", e.MockInterviewCompanyModal = "mi_cm", e.QuestionDetailPremiumQuestion = "qd3_pq", e.QuestionDetailPremiumSolution = "qd3_ps", e.QuestionDetailPremiumVideoSolution = "qd3_pvs", e.QuestionDetailCompanyModal = "qd3_cm", e.QuestionDetailLightningJudger = "qd3_lj", e.QuestionDetailSubmitRateLimit = "qd3_srl", e.QuestionDetailAutocomplete = "qd3_ac", e.QuestionDetailDebuggerTab = "qd3_dt", e.QuestionDetailAiHelper = "qd3_ai", e.QuestionDetailLayoutManager = "qd3_lm", e.QuestionDetailCloudStorage = "qd3_cs", e.ProblemsetFrequency = "ps_fq", e.ProblemsetPremiumQuestion = "ps_pq", e.ProblemsetCompanyTag = "ql_ct", e.ProblemsetFilterCompanyTag = "ql_fct", e.ExplorePremiumCardStartButton = "ex_pcs", e.ExplorePremiumItem = "ex_pi", e.ExplorePremiumSolution = "ex_ps", e.ExploreVACPremium = "ex_vac", e.StudyPlanV2PremiumPlan = "sp2_pp", e.StudyPlanV2PremiumGroup = "sp2_pg", e.StudyPlanV2PremiumGroupCalendar = "sp2_pc", e.PremiumBetaFeature = "pb_f", e.StudyPlanCard = "sp_cd"
                }(r || (r = {}))
        },
        42456: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return o
                }
            });
            var r = n(92009),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (void 0 === e || null === e) return null === e && t.allowNull ? null : void 0;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return void(0, r.$e)((function(t) {
                            t.setTag("source", "safeParseJson"), t.setExtra("jsonStr", e), (0, r.Tb)(n)
                        }))
                    }
                }
        },
        41986: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return m
                }
            });
            var r = n(4676),
                o = n(7831),
                i = (n(87621), n(51506), n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306), n(64386)),
                a = n(63029),
                c = n.n(a),
                s = n(44872),
                u = n(40007),
                l = n(11754),
                d = ["href", "children", "className", "isExternal"],
                p = ["noTruncate"];

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = function() {
                    return !1
                },
                m = (0, i.forwardRef)((function(e, t) {
                    var n = e.href,
                        r = e.children,
                        i = e.className,
                        a = e.isExternal,
                        f = (0, o.Z)(e, d),
                        m = a ? {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {},
                        h = f.noTruncate,
                        y = (0, o.Z)(f, p);
                    if (b(n)) return (0, l.jsx)("a", v(v(v({
                        ref: t,
                        href: n
                    }, y), m), {}, {
                        className: (0, s.yI)("no-underline", u.Cj.labelBlueStandardHover, h ? "" : "truncate", i),
                        children: r
                    }));
                    var O = (0, l.jsx)("a", v(v(v({
                        ref: t
                    }, y), m), {}, {
                        className: (0, s.yI)("no-underline", u.Cj.labelBlueStandardHover, h ? "" : "truncate", i),
                        children: r
                    }));
                    return n ? (0, l.jsx)(c(), {
                        ref: t,
                        href: n,
                        children: O
                    }) : O
                }))
        },
        79868: function(e, t, n) {
            n.d(t, {
                pe: function() {
                    return i
                }
            });
            var r = n(62590),
                o = n(56609),
                i = function() {
                    return (0, r.Hh)(o.K, {}, {
                        select: function(e) {
                            var t;
                            return {
                                currentTimestamp: new Date((null === (t = e.problemsetStreakCounter) || void 0 === t ? void 0 : t.today) || "").getTime() / 1e3
                            }
                        }
                    })
                }
        },
        84796: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return i
                }
            });
            var r = n(90074),
                o = n(11288),
                i = function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return (0, r.$co)(o.f6, {
                        year: e,
                        month: t
                    }, {
                        enabled: n,
                        select: function(e) {
                            return e.dailyQuestionMedal
                        }
                    })
                }
        },
        22277: function(e, t, n) {
            var r;
            n.d(t, {
                    _: function() {
                        return r
                    }
                }),
                function(e) {
                    e.NotStart = "NOT_START", e.Finish = "FINISH"
                }(r || (r = {}))
        },
        90814: function(e, t, n) {
            var r;
            n.d(t, {
                    P: function() {
                        return r
                    }
                }),
                function(e) {
                    e.AuthenticationAccountRecovery = "authentication_account_recovery", e.AuthenticationIgnoreBetaUserFlow = "authentication_ignore_beta_user_flow", e.AuthenticationMockUser = "authentication_mock_user", e.AuthenticationMutateArchiveUser = "authentication_mutate_archive_user", e.AuthenticationQueryArchivedUsers = "authentication_query_archived_users", e.AuthenticationQueryUserInfo = "authentication_query_user_info", e.AuthenticationSeeUserEmail = "authentication_see_user_email", e.AuthenticationSeeUserId = "authentication_see_user_id", e.AuthenticationSeeUserManagement = "authentication_see_user_management", e.AuthenticationUpdateSchoolInfo = "authentication_update_school_info", e.CommonChangeTag = "common_change_tag", e.ContestPrivateAccessDashboard = "contest_private_access_dashboard", e.ContestSeeAll = "contest_see_all", e.ContestSeePrivate = "contest_see_private", e.ContestSeePrivateRanking = "contest_see_private_ranking", e.ContestSeePrivateWithoutRegistration = "contest_see_private_without_registration", e.ContributionAcceptReject = "contribution_accept_reject", e.ContributionSeeDashboard = "contribution_see_dashboard", e.DangerZoneViewAdmin = "danger_zone_view_admin", e.DebuggerBetaAccess = "debugger_beta_access", e.DiscussChangeContestPost = "discuss_change_contest_post", e.DiscussChangePost = "discuss_change_post", e.DiscussDeleteContestPost = "discuss_delete_contest_post", e.DiscussDeletePost = "discuss_delete_post", e.DiscussGetAllPosts = "discuss_get_all_posts", e.DiscussHidePost = "discuss_hide_post", e.DiscussPinContestTopic = "discuss_pin_contest_topic", e.DiscussPinTopic = "discuss_pin_topic", e.DiscussReviewContestPost = "discuss_review_contest_post", e.DiscussReviewPost = "discuss_review_post", e.DiscussSeeContestUnpublishedPost = "discuss_see_contest_unpublished_post", e.DiscussSeeHiddenPost = "discuss_see_hidden_post", e.DiscussSeeUnpublishedPost = "discuss_see_unpublished_post", e.EmailBatch = "email_batch", e.EmailBatchCreateEvent = "email_batch_create_event", e.EmailBatchSendCustom = "email_batch_send_custom", e.LibraryChangeQuestion = "library_change_question", e.LibraryChangeQuestionCategory = "library_change_question_category", e.LibraryContentAccess = "library_content_access", e.LibraryContentEditor = "library_content_editor", e.LibrarySeeAllFields = "library_see_all_fields", e.LibrarySeeAllProblems = "library_see_all_problems", e.Manage = "manage", e.ManageBlacklistedWords = "manage_blacklisted_words", e.ManageDiscuss = "manage_discuss", e.ScoreMutateGiveLeetcoin = "score_mutate_give_leetcoin", e.ScoreSeeAdminPanel = "score_see_admin_panel", e.SubmissionSeeDetails = "submission_see_details", e.SolutionMoveToDiscussion = "solution_move_to_discussion"
                }(r || (r = {}))
        },
        49856: function(e, t, n) {
            n.d(t, {
                F9: function() {
                    return o
                },
                Gi: function() {
                    return i
                },
                lF: function() {
                    return a
                }
            });
            n(87621), n(51506), n(91518);
            var r = n(90814);

            function o(e, t) {
                return !(!e || !e.length) && e.includes(t)
            }

            function i(e, t) {
                return e.some((function(e) {
                    return t.includes(e)
                }))
            }
            var a = [r.P.AuthenticationSeeUserManagement, r.P.ScoreSeeAdminPanel, r.P.ContestPrivateAccessDashboard, r.P.LibrarySeeAllFields, r.P.LibrarySeeAllProblems]
        },
        86068: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(40473),
                i = n(90074),
                a = n(11288);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function() {
                var e = (0, o.NL)();
                return (0, i.DMn)(a.f6, {
                    onMutate: function(t) {
                        e.setQueryData(["globalData", {}], (function(e) {
                            return s(s({}, e), {}, {
                                userStatus: s(s({}, null === e || void 0 === e ? void 0 : e.userStatus), {}, {
                                    useTranslation: t.useTranslation
                                })
                            })
                        }))
                    }
                })
            }
        },
        87668: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return h
                }
            });
            var r = n(7831),
                o = n(19129),
                i = n(22980),
                a = n.n(i),
                c = (n(43969), n(91518), n(58935), n(8740)),
                s = n(64386),
                u = n(59787),
                l = n(6387),
                d = n(40682),
                p = n(40007),
                f = n(11754),
                v = n(57229),
                b = n(57027),
                m = ["target"],
                h = function(e) {
                    return {
                        jumpToPremiumPayment: function(e) {
                            var t = (0, d.U)().data;
                            return (0, s.useCallback)((function() {
                                var n, r;
                                null !== t && void 0 !== t && null !== (n = t.userStatus) && void 0 !== n && n.isSignedIn ? null !== t && void 0 !== t && null !== (r = t.userStatus) && void 0 !== r && r.isVerified ? e && e() : l.y.error((0, f.jsxs)("span", {
                                    children: ["\u8bf7\u9a8c\u8bc1\u624b\u673a\u6216\u90ae\u7bb1\u540e\u7ee7\u7eed\u64cd\u4f5c\uff0c", (0, f.jsx)("a", {
                                        className: p.Cj.labelBlueStandard,
                                        href: u.Hb.account(),
                                        children: "\u524d\u5f80\u9a8c\u8bc1"
                                    })]
                                })) : l.y.error((0, f.jsxs)("span", {
                                    children: ["\u8bf7\u767b\u5f55\u540e\u7ee7\u7eed\u64cd\u4f5c\uff0c", (0, f.jsx)("a", {
                                        className: p.Cj.labelBlueStandard,
                                        href: u.Hb.signIn(),
                                        children: "\u524d\u5f80\u767b\u5f55"
                                    })]
                                }))
                            }), [t, e])
                        }((0, s.useCallback)((0, o.Z)(a().mark((function t() {
                            var n, o, i, s, u;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        o = (n = e || {}).target, i = (0, r.Z)(n, m), s = (0, c.stringify)(i), u = "/premium-detail/" + (s ? "?" + s : ""), v.x.payPremiumJumpPremiumClick({
                                            pay_premium_source: "".concat(null === e || void 0 === e ? void 0 : e.source) || "".concat(null === e || void 0 === e ? void 0 : e.sourceType) || "unknown_path"
                                        }), b.Z.report({
                                            event_key: "premium_pay_web_jump_premium_click",
                                            extra: JSON.stringify({
                                                source: (null === e || void 0 === e ? void 0 : e.source) || (null === e || void 0 === e ? void 0 : e.sourceType) || "unknown_path"
                                            })
                                        }), o && "_blank" !== o ? location.href = u : window.open(u);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), [e]))
                    }
                }
        },
        90287: function(e, t, n) {
            n.d(t, {
                Ar: function() {
                    return u
                },
                Mw: function() {
                    return l
                }
            });
            var r = n(4676),
                o = (n(36615), n(91518), n(17519), n(72029), n(73384), n(78464), n(29092), n(70748), n(96543), n(62217), n(63306), n(11288)),
                i = n(90074);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = function(e, t) {
                    var n;
                    if (!e.advertisementAdsByPage) return null;
                    var r = null === (n = e.advertisementAdsByPage) || void 0 === n ? void 0 : n.find((function(e) {
                            return e.position.nameSlug === t
                        })),
                        o = ((null === r || void 0 === r ? void 0 : r.ads) || []).map((function(e) {
                            var t, n;
                            return {
                                identifier: e.name,
                                title: e.title,
                                imageLink: e.image,
                                targetLink: e.link,
                                isTagShown: e.isTagShown,
                                subtitle: null !== (t = e.subtitle) && void 0 !== t ? t : "",
                                extraInfo: null !== (n = e.extraInfo) && void 0 !== n ? n : ""
                            }
                        }));
                    return {
                        positionTitle: (null === r || void 0 === r ? void 0 : r.position.name) || "",
                        displayStyle: (null === r || void 0 === r ? void 0 : r.position.displayStyle) || i.KLD.Tiled,
                        ads: o
                    }
                },
                u = function(e, t, n, r, a) {
                    return (0, i.pvw)(o.f6, {
                        pageSlug: e,
                        customType: r,
                        customId: a
                    }, c(c({}, n), {}, {
                        select: function(e) {
                            return s(e, t)
                        }
                    }))
                },
                l = function(e, t, n) {
                    return (0, i.Qj3)(o.f6, {
                        pageSlug: e
                    }, c(c({}, n), {}, {
                        select: function(e) {
                            return s(e, t)
                        }
                    }))
                }
        },
        87142: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M18.586 13h-8.083c-.523 0-.947-.448-.947-1s.424-1 .947-1h8.083l-2.738-2.737a1 1 0 011.415-1.415l4.444 4.445a1 1 0 010 1.414l-4.444 4.445a1 1 0 01-1.415-1.415L18.586 13zM9 5H6a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 110 2H6a3 3 0 01-3-3V6a3 3 0 013-3h3a1 1 0 010 2z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        77403: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7.174 5.619a8.064 8.064 0 011.635-.946l.29-1.158A2 2 0 0111.039 2h1.922a2 2 0 011.94 1.515l.29 1.158c.584.252 1.132.57 1.635.946l1.15-.329a2 2 0 012.282.923l.961 1.665a2 2 0 01-.342 2.437l-.86.832a8.151 8.151 0 010 1.888l.86.83a2 2 0 01.342 2.438l-.96 1.665a2 2 0 01-2.283.923l-1.15-.329a8.063 8.063 0 01-1.635.946l-.29 1.158a2 2 0 01-1.94 1.515H11.04a2 2 0 01-1.94-1.515l-.29-1.158a8.064 8.064 0 01-1.635-.946l-1.15.329a2 2 0 01-2.282-.923l-.961-1.665a2 2 0 01.342-2.437l.86-.831a8.158 8.158 0 010-1.889l-.86-.83a2 2 0 01-.342-2.438l.96-1.665a2 2 0 012.283-.923l1.15.329zm-1.7 1.594l-.961 1.665 1.57 1.518-.114.982a6.157 6.157 0 000 1.425l.114.982-1.57 1.518.96 1.665 2.104-.601.794.593c.38.284.793.523 1.23.711l.908.392.53 2.118h1.922l.53-2.118.909-.392a6.07 6.07 0 001.23-.711l.793-.593 2.103.601.961-1.665-1.57-1.518.114-.982a6.172 6.172 0 000-1.425l-.114-.982 1.57-1.518-.96-1.665-2.104.601-.794-.593a6.067 6.067 0 00-1.23-.71l-.908-.392L12.96 4H11.04l-.53 2.119-.909.391a6.064 6.064 0 00-1.23.711l-.793.593-2.103-.601zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        67619: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M6.204 15.817a8.872 8.872 0 01-.066.115h11.724a8.535 8.535 0 01-.066-.115c-.92-1.627-1.463-3.806-1.463-6.6 0-2.279-1.932-4.142-4.333-4.142-2.401 0-4.333 1.863-4.333 4.143 0 2.793-.543 4.972-1.463 6.6zM20 17.932H4c-.998 0-1.38-1.301-.54-1.841.201-.13.586-.522 1.003-1.258.746-1.32 1.204-3.158 1.204-5.615 0-3.401 2.843-6.143 6.333-6.143s6.333 2.742 6.333 6.143c0 2.457.458 4.296 1.204 5.615.417.736.802 1.128 1.004 1.258.84.54.457 1.841-.541 1.841zm-7.063 1.346a1 1 0 111.714 1.031A3.09 3.09 0 0112 21.79a3.09 3.09 0 01-2.651-1.48 1 1 0 011.714-1.032c.188.314.545.512.937.512s.748-.198.937-.512z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        54600: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M13.414 12L19 17.586A1 1 0 0117.586 19L12 13.414 6.414 19A1 1 0 015 17.586L10.586 12 5 6.414A1 1 0 116.414 5L12 10.586 17.586 5A1 1 0 1119 6.414L13.414 12z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        22565: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4zm5.718 9.304a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 14.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 15a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 16h2l.117-.007A1 1 0 0017 15zm-5.282-7.696a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 8.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 9a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 10h2l.117-.007A1 1 0 0017 9z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        46023: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsxs)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.946 15l1.105 3.316a1 1 0 001.898-.632L9.423 4.107c-.456-1.368-2.39-1.368-2.846 0L2.051 17.684a1 1 0 101.898.632L5.054 15h5.892zm-.667-2L8 6.162 5.72 13h4.56z",
                        clipRule: "evenodd"
                    }), (0, i.jsx)("path", {
                        d: "M13 10a1 1 0 011-1h3V8a1 1 0 112 0v1h3a1 1 0 110 2h-.233l-.113.445v.002c-.319 1.26-.717 2.836-1.364 4.301-.172.389-.364.777-.58 1.158.803.906 1.718 1.69 2.737 2.2a1 1 0 11-.894 1.788c-1.157-.578-2.16-1.403-3.016-2.307a8.798 8.798 0 01-3.13 2.327 1 1 0 11-.813-1.828 6.86 6.86 0 002.644-2.066c-.946-1.289-1.657-2.601-2.136-3.58a1 1 0 011.796-.88c.361.738.852 1.654 1.47 2.585l.092-.205c.573-1.297.905-2.608 1.214-3.83l.028-.11H14a1 1 0 01-1-1z"
                    })]
                }))
            }))
        },
        51799: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M11.581 7H3a1 1 0 010-2h5V4a1 1 0 012 0v1h5a1 1 0 110 2h-1.37c-.566 2.69-1.671 5.05-3.307 7.07a14.419 14.419 0 002.274 2.128 1 1 0 01-1.194 1.604 16.292 16.292 0 01-2.439-2.249c-1.316 1.275-2.884 2.387-4.7 3.334a1 1 0 01-.925-1.774c1.71-.89 3.165-1.932 4.369-3.128-.96-1.326-1.831-2.85-2.617-4.57a1 1 0 011.819-.83c.659 1.441 1.377 2.725 2.152 3.85C10.26 10.85 11.098 9.04 11.582 7zM15.8 18.98l-.86 2.362a1 1 0 11-1.879-.684l4-11c.32-.877 1.56-.877 1.88 0l4 11a1 1 0 11-1.88.684l-.859-2.362c-.065.013-.132.02-.201.02h-4c-.069 0-.136-.007-.201-.02zM18 12.926L19.481 17H16.52L18 12.926z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        84071: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        58608: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14 20h3a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1v14a1 1 0 001 1h3v-2a1 1 0 011-1h2a1 1 0 011 1v2zM7 2h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm2.5 4h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm4-6h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        25093: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(64386),
                i = n(11754);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = o.forwardRef((function(e, t) {
                return (0, i.jsx)("svg", c(c({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M8.5 4.587v7.182c0 .575.184 1.463.707 2.18.487.665 1.312 1.251 2.793 1.251 1.48 0 2.306-.586 2.793-1.252.523-.716.707-1.604.707-2.179V4.587a10.732 10.732 0 00-7 0zm-1.557 9.371A5.957 5.957 0 016.5 11.77V8.6c-.536-.116-1.12-.158-1.587-.05-.312.073-.514.198-.644.358C4.14 9.064 4 9.357 4 9.923c0 1.399.848 2.694 2.361 3.687.186.122.38.238.582.348zM6.5 6.566V3.923a1 1 0 01.544-.89C7.779 2.656 9.674 2 12 2c2.325 0 4.221.656 4.956 1.033a1 1 0 01.544.89v2.643c.647-.101 1.364-.122 2.038.035.626.145 1.267.455 1.746 1.045.482.594.716 1.367.716 2.277 0 2.294-1.402 4.137-3.264 5.36-1.609 1.055-3.649 1.716-5.736 1.878V20h4.4a1 1 0 110 2H6.6a1 1 0 110-2H11v-2.839c-2.087-.162-4.127-.823-5.736-1.879C3.402 14.06 2 12.217 2 9.923c0-.91.234-1.683.716-2.277.48-.59 1.12-.9 1.746-1.045.674-.157 1.391-.136 2.038-.035zm11 2.033c.536-.116 1.12-.158 1.587-.05.312.073.515.198.645.358.127.157.268.45.268 1.016 0 1.399-.848 2.694-2.361 3.687-.186.122-.38.238-.582.348a5.956 5.956 0 00.443-2.189V8.6z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        74486: function(e, t, n) {
            n.d(t, {
                qe: function() {
                    return u
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = (n(73384), n(90074)),
                i = n(11288),
                a = n(22277);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function() {
                return (0, o.a3m)(i.f6, {}, {
                    select: function(e) {
                        var t, n = null === (t = e.todayRecord) || void 0 === t ? void 0 : t[0];
                        if (!n) return null;
                        var r = n.date,
                            i = n.userStatus,
                            c = n.question,
                            u = n.lastSubmission,
                            l = i === o.sM.Finish ? a._.Finish : a._.NotStart;
                        return {
                            link: "/problems/".concat(c.titleSlug),
                            status: l,
                            date: r,
                            question: s(s({}, c), {}, {
                                frontendQuestionId: c.frontendQuestionId
                            }),
                            lastSubmission: null !== u && void 0 !== u ? u : void 0
                        }
                    }
                })
            }
        },
        47162: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return p
                }
            });
            n(64386);
            var r = n(63029),
                o = n.n(r),
                i = n(92130),
                a = n.n(i),
                c = n(79216),
                s = n(22290),
                u = n(59787),
                l = n(98685),
                d = n(11754),
                p = function() {
                    var e = (0, c.$G)("common").t,
                        t = (0, s.s)(),
                        n = t ? u.Hb.register() : "",
                        r = t ? u.Hb.signIn() : "";
                    return (0, d.jsxs)("div", {
                        className: "flex items-center whitespace-nowrap",
                        children: [(0, d.jsx)(o(), {
                            href: n,
                            passHref: !0,
                            children: (0, d.jsx)("a", {
                                className: a()(l.nx.labelTextSecondary, l.rG.labelTextPrimary, "hidden lg:flex"),
                                children: e("pages.register")
                            })
                        }), (0, d.jsx)("span", {
                            className: a()("mx-3 hidden lg:inline-block", l.nx.labelTextSecondary),
                            children: e("conjunctions.or")
                        }), (0, d.jsx)(o(), {
                            href: r,
                            passHref: !0,
                            children: (0, d.jsx)("a", {
                                className: a()(l.nx.labelTextSecondary, l.rG.labelTextPrimary),
                                id: "navbar_sign_in_button",
                                children: e("pages.signIn")
                            })
                        })]
                    })
                }
        },
        17060: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(40007),
                o = {
                    navItem: "flex items-center pb-3 text-base leading-[22px]\n   cursor-pointer",
                    navItemPrimary: "".concat(r.Cj.label2),
                    navItemBrandOrange: "text-brand-orange border-brand-orange",
                    navItemHover: r.Cj.label1Hover,
                    navItemActive: "border-opacity-1 dark:border-opacity-1",
                    dropdownTransition: {
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95"
                    },
                    menuItems: "flex flex-col absolute top-8 z-dropdown rounded-lg p-2 overflow-auto focus:outline-none text-sm ".concat(r.eq.commandBar),
                    menuItemsBg: r.Cj.bgOverlay3,
                    menuItem: "cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-4 whitespace-nowrap",
                    menuItemText: r.Cj.label1,
                    menuItemHover: "".concat(r.Cj.fill4Hover, " rounded"),
                    navIcon: "rounded w-8 h-8 relative flex items-center justify-center",
                    menuButton: "flex items-center focus:outline-none",
                    popoverTransition: {
                        enter: "transition ease-in duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    },
                    drawerTransition: {
                        enter: "transition ease-out duration-200",
                        enterFrom: "transform translate-y-0",
                        enterTo: "transform translate-y-1",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform translate-y-1",
                        leaveTo: "transform translate-y-0"
                    }
                }
        },
        2074: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return g
                }
            });
            n(64386);
            var r = n(29090),
                o = (n(91518), n(58935), n(77500)),
                i = n.n(o),
                a = n(67619),
                c = (n(78464), n(29092), n(70748), n(96543), n(62217), n(63306), n(4676)),
                s = n(7831),
                u = n(92130),
                l = n.n(u),
                d = n(40007),
                p = n(98685),
                f = n(17060),
                v = n(11754),
                b = ["Component", "isActive", "hasUnread", "className"];

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, c.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = function(e) {
                    var t = e.Component,
                        n = e.isActive,
                        r = e.hasUnread,
                        o = e.className,
                        i = (0, s.Z)(e, b);
                    return (0, v.jsxs)("div", {
                        className: l()(n ? "text-blue-s dark:text-blue-s ".concat(d.Cj.fill3) : p.nx.labelTextSecondary, d.Cj.fill3Hover, f.W.navIcon, "focus:text-blue-s active:text-blue-s dark:focus:text-blue-s dark:active:text-blue-s group focus:outline-none", o),
                        children: [(0, v.jsx)(t, h(h({
                            height: 19,
                            width: 19
                        }, i), {}, {
                            className: "".concat(p.wo.labelTextPrimary)
                        })), r && (0, v.jsx)("div", {
                            className: l()(n ? "border-gray-2 dark:border-dark-gray-4" : "border-paper dark:border-dark-gray-3", "rounded-1/2 group-hover:border-gray-2 dark:group-hover:border-dark-gray-4 pointer-events-none absolute right-2 top-1.5 h-[7px] w-[7px] border"),
                            children: (0, v.jsx)("div", {
                                className: "rounded-1/2 bg-red-s dark:bg-dark-red-s h-full w-full"
                            })
                        })]
                    })
                },
                O = i()((function() {
                    return Promise.all([n.e(5214), n.e(7283), n.e(8617)]).then(n.bind(n, 32328)).then((function(e) {
                        return e.NotificationDropdown
                    }))
                }), {
                    loading: function() {
                        return (0, v.jsx)(y, {
                            Component: a.Y,
                            isActive: !1
                        })
                    },
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [32328]
                        }
                    }
                });
            var g = function() {
                return (0, v.jsx)(r.JB, {
                    children: (0, v.jsx)(O, {})
                })
            }
        },
        29090: function(e, t, n) {
            n.d(t, {
                $t: function() {
                    return b
                },
                JB: function() {
                    return m
                },
                lm: function() {
                    return h
                },
                ph: function() {
                    return f
                }
            });
            var r, o, i, a = n(4676),
                c = n(90574),
                s = n(64386),
                u = n(90074),
                l = n(49406),
                d = n(11754),
                p = (0, s.createContext)({
                    visible: !1,
                    tab: u.TbQ.NotificationI,
                    setTab: c.Z,
                    setVisible: c.Z
                }),
                f = (r = {}, (0, a.Z)(r, u.TbQ.NotificationI, "noty"), (0, a.Z)(r, u.TbQ.NotificationIi, "activity"), (0, a.Z)(r, u.TbQ.NotificationIii, "chat"), r),
                v = (o = {}, (0, a.Z)(o, u.TbQ.NotificationIii, l.E.imNavChatTabExposure), (0, a.Z)(o, u.TbQ.NotificationIi, l.E.imNavActivityTabExposure), (0, a.Z)(o, u.TbQ.NotificationI, l.E.imNavNotificationTabExposure), o),
                b = (i = {}, (0, a.Z)(i, u.TbQ.NotificationI, "\u65e0\u901a\u77e5\u6570\u636e"), (0, a.Z)(i, u.TbQ.NotificationIi, "\u65e0\u52a8\u6001\u6570\u636e"), (0, a.Z)(i, u.TbQ.NotificationIii, "\u6682\u65e0\u79c1\u4fe1"), i),
                m = function(e) {
                    var t = e.children,
                        n = (0, s.useState)(!1),
                        r = n[0],
                        o = n[1],
                        i = (0, s.useState)(u.TbQ.NotificationI),
                        a = i[0],
                        c = i[1];
                    return (0, s.useEffect)((function() {
                        var e;
                        r && (null === (e = v[a]) || void 0 === e || e.call(v))
                    }), [r, a]), (0, d.jsx)(p.Provider, {
                        value: {
                            tab: a,
                            setTab: c,
                            visible: r,
                            setVisible: o
                        },
                        children: t
                    })
                },
                h = function() {
                    return (0, s.useContext)(p)
                }
        },
        93e3: function(e, t, n) {
            n.d(t, {
                Tq: function() {
                    return m
                },
                yV: function() {
                    return y
                },
                v$: function() {
                    return h
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = (n(17519), n(72029), n(33677)),
                i = n(40682),
                a = n(87668),
                c = n(73889),
                s = n(84189),
                u = (n(63029), n(92130), n(24450)),
                l = (n(64386), n(77527)),
                d = n(27654),
                p = {
                    collectionUserDropdownExposure: function() {
                        var e = {
                            key: "collection_user_dropdown_exposure",
                            data: {}
                        };
                        l.V[d.X.GIO](e), l.V[d.X.GA4](e), l.V[d.X.CONSOLE](e), l.V[d.X.SELF_DB](e)
                    },
                    collectionUserDropdownCollectionClick: function() {
                        var e = {
                            key: "collection_user_dropdown_collection_click",
                            data: {}
                        };
                        l.V[d.X.GIO](e), l.V[d.X.GA4](e), l.V[d.X.CONSOLE](e), l.V[d.X.SELF_DB](e)
                    }
                },
                f = (n(11754), (0, u.default)((function(e) {
                    return [{
                        key: "myList",
                        img: "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/starred-2e4c5ddcac0ba3a09087d8ff98eff50c.png",
                        url: "/collection/",
                        track: p.collectionUserDropdownCollectionClick,
                        name: e("userMenu.categories.myList")
                    }, {
                        key: "notebook",
                        img: "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/notebook-92e90c87d33d7403f2f016c245b203a7.png",
                        url: "/notes",
                        name: e("userMenu.categories.notebook")
                    }, {
                        key: "submissions",
                        img: "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/answer-9dab99b273b399a43f8826c193d187d5.png",
                        url: e("links.profileArticles"),
                        name: e("userMenu.categories.submissions")
                    }, {
                        key: "progress",
                        img: "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/progress-106c8d8956a5f08d22006a6ea911e6c3.png",
                        url: "/progress",
                        name: e("userMenu.categories.progress")
                    }, {
                        key: "points",
                        img: "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/coin-9ed5754318458315a57c46abd2f431c1.png",
                        url: "/points",
                        name: e("userMenu.categories.points")
                    }, {
                        key: "session",
                        img: "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/session-8dc060863ecf9d6f77c4c9a2963ea6ff.png",
                        url: "/session",
                        name: e("userMenu.categories.session")
                    }]
                }), s.Z));

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = function(e) {
                    var t = (0, o.$)("common").t;
                    return f(t).map((function(t) {
                        return b(b({}, t), {}, {
                            track: function() {
                                t.track && t.track(), c.$.navbarElementClick({
                                    navbar_env: e,
                                    navbar_entry_key: t.name
                                })
                            }
                        })
                    }))
                },
                h = function() {
                    var e, t = (0, i.U)(),
                        n = t.data,
                        r = t.isInitialLoading,
                        o = null !== (e = null === n || void 0 === n ? void 0 : n.userStatus) && void 0 !== e ? e : {},
                        a = o.isPremium,
                        c = o.username,
                        s = o.name,
                        u = o.userSlug,
                        l = o.avatar,
                        d = o.isSignedIn;
                    return {
                        data: {
                            isPremium: a,
                            username: c,
                            name: s,
                            avatar: l,
                            userSlug: u,
                            premiumExpiredAt: o.premiumExpiredAt || 0,
                            isSignedIn: d
                        },
                        isLoadingGlobalData: r
                    }
                },
                y = function() {
                    return {
                        noPremiumClick: (0, a.A)({
                            source: "navbar-dropdown-context"
                        }).jumpToPremiumPayment
                    }
                }
        },
        3702: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return G
                }
            });
            n(78464), n(29092), n(70748), n(96543), n(62217), n(63306);
            var r = n(21484),
                o = n(4676),
                i = (n(22980), n(43969), n(8249), n(91518), n(58935), n(37872), n(29308), n(27115), n(21682), n(15084), n(66128), n(94546), n(72793), n(2979), n(38890), n(64386)),
                a = (n(46953), n(33677)),
                c = n(1308),
                s = n(28688),
                u = n(40682),
                l = n(86068),
                d = n(36867),
                p = n(59787),
                f = n(94194),
                v = n(21967),
                b = n(11754);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = i.forwardRef((function(e, t) {
                return (0, b.jsx)("svg", h(h({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, b.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M6.979 3.552a.9.9 0 01.9-.9h8.132a.9.9 0 110 1.8h-.391v6.125l4.293 6.201c1.454 2.1-.05 4.97-2.604 4.97H6.852c-2.532 0-4.04-2.824-2.632-4.929l4.173-6.234V4.452h-.514a.9.9 0 01-.9-.9zm3.214.9v1.45h1.397a.9.9 0 110 1.8h-1.397v1.545h1.397a.9.9 0 110 1.8h-1.397v.084l-4.477 6.69a1.367 1.367 0 001.136 2.127H17.31c1.103 0 1.752-1.239 1.124-2.145l-4.613-6.664V4.452h-3.627z",
                        clipRule: "evenodd"
                    })
                }))
            }));

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = i.forwardRef((function(e, t) {
                return (0, b.jsx)("svg", g(g({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: t
                }, e), {}, {
                    children: (0, b.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14 2a2 2 0 011.995 1.85L16 4v1a2 2 0 01-1.85 1.995L14 7h-4a2 2 0 01-1.995-1.85L8 5V4a2 2 0 011.85-1.995L10 2h4zm3.96 2H18a3 3 0 012.995 2.824L21 7v12a3 3 0 01-2.824 2.995L18 22H6a3 3 0 01-2.995-2.824L3 19V7a3 3 0 012.824-2.995L6.056 4a1 1 0 01.117 1.993L6.056 6H6a1 1 0 00-.993.883L5 7v12a1 1 0 00.883.993L6 20h12a1 1 0 00.993-.883L19 19V7a1 1 0 00-.883-.993L18 6h-.04a1 1 0 01-.116-1.993L17.961 4zM15 14a1 1 0 01.117 1.993L15 16H9a1 1 0 01-.117-1.993L9 14h6zm1-3a1 1 0 00-1-1H9l-.117.007A1 1 0 009 12h6l.117-.007A1 1 0 0016 11zm-6-7h4v1h-4V4z",
                        clipRule: "evenodd"
                    })
                }))
            }));

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var P = i.forwardRef((function(e, t) {
                    return (0, b.jsx)("svg", _(_({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: (0, b.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 18a1 1 0 110 2H5.7C3.663 20 2 18.383 2 16.375v-8.75C2 5.617 3.663 4 5.7 4h12.6C20.337 4 22 5.617 22 7.625v4.813a1 1 0 11-2 0V7.625C20 6.734 19.245 6 18.3 6H5.7C4.755 6 4 6.734 4 7.625v8.75C4 17.266 4.755 18 5.7 18H12zm5-2v-1.5a1 1 0 012 0V16h1.5a1 1 0 010 2H19v1.5a1 1 0 01-2 0V18h-1.5a1 1 0 010-2H17zm-7.973-4L6.906 9.879A1 1 0 018.32 8.464l2.475 2.475a1.5 1.5 0 010 2.122L8.32 15.536a1 1 0 11-1.414-1.415L9.027 12z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                k = n(77403);

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = i.forwardRef((function(e, t) {
                    return (0, b.jsxs)("svg", C(C({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: [(0, b.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.583 5.833a2.417 2.417 0 114.299 1.517A3.246 3.246 0 0113.25 10a.75.75 0 01-1.5 0 1.75 1.75 0 00-3.5 0 .75.75 0 01-1.5 0c0-1.094.54-2.061 1.368-2.65a2.407 2.407 0 01-.535-1.517zm3.334 0a.917.917 0 11-1.834 0 .917.917 0 011.834 0z",
                            clipRule: "evenodd"
                        }), (0, b.jsx)("path", {
                            d: "M6.75 12.917a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zM7.5 14.667a.75.75 0 000 1.5h2.917a.75.75 0 000-1.5H7.5z"
                        }), (0, b.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5 .833a2.5 2.5 0 00-2.5 2.5v13.334a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5V3.333a2.5 2.5 0 00-2.5-2.5H5zm-.833 2.5c0-.46.373-.833.833-.833h10c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833H5a.833.833 0 01-.833-.833V3.333z",
                            clipRule: "evenodd"
                        })]
                    }))
                })),
                D = n(46023),
                E = n(51799),
                V = n(87142),
                L = n(73889);

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var X = i.forwardRef((function(e, t) {
                return (0, b.jsxs)("svg", N(N({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "none",
                    ref: t
                }, e), {}, {
                    children: [(0, b.jsxs)("g", {
                        clipPath: "url(#clip0_5839_1731)",
                        children: [(0, b.jsx)("path", {
                            d: "M3 21.5593L10 14.5593",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }), (0, b.jsx)("path", {
                            d: "M19.4095 3.75954C19.7205 3.63593 20.0383 3.92263 19.9472 4.2447L18.7681 8.41386C18.7319 8.54175 18.761 8.67925 18.8458 8.78155L21.6119 12.1164C21.8255 12.374 21.6511 12.7648 21.3166 12.7777L16.9871 12.9447C16.8543 12.9498 16.7325 13.02 16.6615 13.1323L14.3446 16.7934C14.1656 17.0763 13.74 17.0311 13.6244 16.717L12.1277 12.651C12.0818 12.5263 11.9775 12.4321 11.8487 12.3993L7.65075 11.3271C7.32646 11.2443 7.23791 10.8256 7.50091 10.6186L10.9054 7.93868C11.0098 7.85647 11.0671 7.72814 11.0586 7.5955L10.781 3.27172C10.7596 2.93771 11.1304 2.72411 11.4086 2.91025L15.0094 5.31997C15.1198 5.39389 15.2596 5.40873 15.3831 5.35964L19.4095 3.75954Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinejoin: "round"
                        })]
                    }), (0, b.jsx)("defs", {
                        children: (0, b.jsx)("clipPath", {
                            id: "clip0_5839_1731",
                            children: (0, b.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "currentColor"
                            })
                        })
                    })]
                }))
            }));

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var T = function(e, t) {
                    return L.$.navbarElementClick({
                        navbar_env: e,
                        navbar_entry_key: t
                    })
                },
                B = "IS_FOLLOW_SYSTEM_MODE";

            function R(e) {
                localStorage.setItem(B, JSON.stringify(e))
            }
            var H = function(e) {
                    var t = e ? s.MO : s.xe,
                        n = {
                            "aria-braillelabel": void 0,
                            "aria-brailleroledescription": void 0,
                            "aria-colindextext": void 0,
                            "aria-description": void 0,
                            "aria-rowindextext": void 0
                        };
                    return (0, b.jsx)(t, I(I({
                        width: 18,
                        height: 18,
                        suppressHydrationWarning: void 0
                    }, n), {}, {
                        onResize: void 0,
                        onResizeCapture: void 0
                    }))
                },
                z = function(e) {
                    var t = (0, a.$)("common").t,
                        n = (0, c.F)(),
                        r = n.theme,
                        o = n.setTheme,
                        s = (0, i.useState)(!!(0, f.jU)() && "true" === localStorage.getItem(B)),
                        u = s[0],
                        l = s[1],
                        p = (0, d.a)("(prefers-color-scheme: dark)"),
                        b = (0, i.useCallback)((function(e) {
                            "system" === e ? o(p ? "dark" : "light") : o(e)
                        }), [p, o]);
                    (0, i.useEffect)((function() {
                        var e = function(e) {
                            if (e.key === B) b(p ? "dark" : "light");
                            else if (e.key === v.Fh) {
                                var t = "dark" === e.newValue ? "dark" : "light";
                                b(t)
                            }
                        };
                        return window.addEventListener("storage", e),
                            function() {
                                return window.removeEventListener("storage", e)
                            }
                    }), [p, b]), (0, i.useEffect)((function() {
                        u && (R(!0), b(p ? "dark" : "light"))
                    }), [u, p, b]);
                    var m = (0, i.useCallback)((function(t) {
                        b(t), l("system" === t), R("system" === t), T(e, t)
                    }), [e, b]);
                    return {
                        icon: H("dark" === r),
                        content: t("userMenu.appearance"),
                        useChildActive: !0,
                        child: [{
                            isActive: u,
                            content: t("userMenu.appearanceContent.auto"),
                            onClick: function() {
                                return m("system")
                            }
                        }, {
                            isActive: !u && "light" === r,
                            content: t("userMenu.appearanceContent.light"),
                            onClick: function() {
                                return m("light")
                            }
                        }, {
                            isActive: !u && "dark" === r,
                            content: t("userMenu.appearanceContent.dark"),
                            onClick: function() {
                                return m("dark")
                            }
                        }]
                    }
                },
                F = function(e, t) {
                    return [{
                        icon: (0, b.jsx)(y, {
                            height: 18,
                            width: 18
                        }),
                        content: e("userMenu.tryNewFeatures"),
                        href: e("links.tryNewFeatures"),
                        onClick: function() {
                            L.$.navbarNewFeatureClick(), T(t, e("userMenu.tryNewFeatures"))
                        }
                    }, {
                        icon: (0, b.jsx)(j, {
                            height: 18,
                            width: 18
                        }),
                        content: e("userMenu.orders"),
                        href: e("links.orders"),
                        onClick: function() {
                            return T(t, e("userMenu.orders"))
                        }
                    }, {
                        icon: (0, b.jsx)(P, {
                            height: 18,
                            width: 18
                        }),
                        content: e("playground.myPlaygrounds"),
                        href: e("links.playground"),
                        onClick: function() {
                            return T(t, e("userMenu.myPlaygrounds"))
                        }
                    }]
                },
                G = function(e) {
                    var t, n, o, c = (0, a.$)("common").t,
                        s = (0, f.jU)() && window.location.pathname.startsWith("/problems/"),
                        d = null === (t = null === (n = (0, u.U)().data) || void 0 === n || null === (o = n.userStatus) || void 0 === o ? void 0 : o.useTranslation) || void 0 === t || t,
                        v = (0, l.Y)().mutate,
                        m = (0, i.useCallback)((function() {
                            v({
                                useTranslation: !d
                            })
                        }), [v, d]),
                        h = (0, i.useCallback)((function() {
                            T(e, c("userMenu.revertToOldVersion"));
                            var t = location.pathname.split("/"),
                                n = "/classic/".concat(t[1], "/").concat(t[2]);
                            window.location.href = n
                        }), [e, c]),
                        y = z(e),
                        O = [].concat((0, r.Z)(F(c, e)), [{
                            icon: (0, b.jsx)(k.k, {
                                height: 18,
                                width: 18
                            }),
                            content: c("userMenu.account"),
                            href: c("links.account"),
                            onClick: function() {
                                return T(e, c("userMenu.account"))
                            }
                        }, {
                            icon: (0, b.jsx)(x, {
                                height: 18,
                                width: 18
                            }),
                            content: c("userMenu.resume"),
                            href: c("links.resume"),
                            onClick: function() {
                                return T(e, c("userMenu.resume"))
                            }
                        }, {
                            icon: d ? (0, b.jsx)(D.S, {
                                height: 18,
                                width: 18
                            }) : (0, b.jsx)(E.H, {
                                height: 18,
                                width: 18
                            }),
                            content: c(d ? "userMenu.translateQuestionsEn" : "userMenu.translateQuestions"),
                            onClick: function() {
                                T(e, c(d ? "userMenu.translateQuestionsEn" : "userMenu.translateQuestions")), m()
                            }
                        }, I({}, y), {
                            icon: (0, b.jsx)(V.i, {
                                height: 18,
                                width: 18
                            }),
                            content: c("pages.signOut"),
                            href: p.Hb.logOut(),
                            onClick: function() {
                                return T(e, c("pages.signOut"))
                            }
                        }]);
                    return s && O.splice(O.length - 2, 0, {
                        icon: (0, b.jsx)(X, {
                            height: 18,
                            width: 18
                        }),
                        content: c("userMenu.revertToOldVersion"),
                        onClick: h
                    }), O
                }
        },
        68408: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return L
                }
            });
            var r = n(4676),
                o = n(21484),
                i = (n(2979), n(70748), n(91518), n(62217), n(78464), n(29092), n(96543), n(63306), n(28688)),
                a = n(64386),
                c = n(33677),
                s = n(40682),
                u = n(87668),
                l = n(83815),
                d = n(11754);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = a.forwardRef((function(e, t) {
                    return (0, d.jsxs)("svg", f(f({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: [(0, d.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M13.183 13.68a1 1 0 00.365-.365l3.144-5.434c.1-.174-.09-.371-.267-.276l-5.57 2.97a1 1 0 00-.412.411l-2.97 5.57c-.095.178.102.369.276.268l5.434-3.144zm-.736-.934a.75.75 0 11-1.061-1.061.75.75 0 011.06 1.06z",
                            clipRule: "evenodd"
                        }), (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z",
                            clipRule: "evenodd"
                        })]
                    }))
                })),
                b = n(22565),
                m = n(84071),
                h = n(25093),
                y = n(58608);

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = a.forwardRef((function(e, t) {
                    return (0, d.jsxs)("svg", g(g({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {}, {
                        children: [(0, d.jsx)("path", {
                            d: "M4 4a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                        }), (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18 14H6v5h12v-5zM4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7H4z",
                            clipRule: "evenodd"
                        }), (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.766 8l-.5 4h15.468l-.5-4H4.766zm-.883-2a1 1 0 00-.993.876l-.75 6A1 1 0 003.133 14h17.734a1 1 0 00.992-1.124l-.75-6A1 1 0 0020.117 6H3.883z",
                            clipRule: "evenodd"
                        }), (0, d.jsx)("path", {
                            d: "M14 12h2v9h-2v-9z"
                        })]
                    }))
                })),
                w = n(77403),
                _ = n(73889),
                P = n(93e3),
                k = n(3702),
                S = n(54659);

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var D = {
                    IS_LCUS: l.Oo
                },
                E = function() {
                    var e = (0, c.$)("common").t;
                    return [{
                        icon: (0, d.jsx)(v, {
                            height: 18,
                            width: 18
                        }),
                        href: e("links.explore"),
                        content: e("pages.explore"),
                        onClick: function() {
                            return _.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: e("links.explore")
                            })
                        }
                    }, {
                        icon: (0, d.jsx)(b.w, {
                            height: 18,
                            width: 18
                        }),
                        href: "/problemset/all",
                        content: e("pages.problems"),
                        onClick: function() {
                            return _.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: "/problemset/all"
                            })
                        }
                    }, {
                        icon: (0, d.jsx)(m.h, {
                            height: 18,
                            width: 18
                        }),
                        href: e("links.discuss"),
                        content: e("pages.discuss"),
                        onClick: function() {
                            return _.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: e("links.discuss")
                            })
                        }
                    }, {
                        icon: (0, d.jsx)(h.Q, {
                            height: 18,
                            width: 18
                        }),
                        href: "/contest",
                        content: e("pages.contest"),
                        onClick: function() {
                            return _.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: "/contest"
                            })
                        }
                    }]
                },
                V = function() {
                    var e = (0, c.$)("common").t,
                        t = (0, u.A)({
                            source: "nav-premium"
                        }).jumpToPremiumPayment,
                        n = E(),
                        r = {
                            icon: (0, d.jsx)(y.U, {
                                height: 18,
                                width: 18
                            }),
                            hideHover: !0,
                            content: e("pages.interview.interview"),
                            href: e("links.interview"),
                            onClick: function() {
                                return _.$.navbarElementClick({
                                    navbar_env: "mobile",
                                    navbar_entry_key: e("links.interview")
                                })
                            }
                        },
                        i = {
                            icon: (0, d.jsx)(j, {
                                height: 18,
                                width: 18
                            }),
                            hideHover: !0,
                            content: e("pages.store.store"),
                            childMenus: [{
                                icon: null,
                                href: e("links.shop"),
                                content: e("pages.store.shop"),
                                secondary: !0,
                                onClick: function() {
                                    return _.$.navbarElementClick({
                                        navbar_env: "mobile",
                                        navbar_entry_key: e("pages.store.shop")
                                    })
                                }
                            }, {
                                icon: null,
                                href: "/store",
                                content: e("pages.store.redeem"),
                                secondary: !0,
                                onClick: function() {
                                    return _.$.navbarElementClick({
                                        navbar_env: "mobile",
                                        navbar_entry_key: e("pages.store.redeem")
                                    })
                                }
                            }, {
                                icon: null,
                                onClick: function() {
                                    t(), _.$.navbarElementClick({
                                        navbar_env: "mobile",
                                        navbar_entry_key: e("pages.store.premium")
                                    })
                                },
                                content: e("pages.store.premium"),
                                secondary: !0
                            }]
                        };
                    return [].concat((0, o.Z)(n), [r, i])
                },
                L = function(e) {
                    var t = e.pageReference,
                        n = (0, P.yV)(t),
                        r = (0, k.j)("mobile"),
                        o = (0, P.v$)().data,
                        a = function() {
                            var e = V(),
                                t = (0, c.$)("common").t,
                                n = (0, s.U)().data;
                            if (!(0, S.rB)(n)) return e;
                            var r = (0, S.lT)(n, t).filter((function(e) {
                                    return !0 === e.displayCondition
                                })),
                                o = {
                                    icon: (0, d.jsx)(w.k, {
                                        height: 18,
                                        width: 18
                                    }),
                                    hideHover: !0,
                                    content: t("pages.admin.admin"),
                                    childMenus: []
                                };
                            return r.forEach((function(e) {
                                var t;
                                null === (t = o.childMenus) || void 0 === t || t.push({
                                    icon: null,
                                    href: e.linkProps.to,
                                    content: e.display,
                                    secondary: !0
                                })
                            })), e.push(o), e
                        }(),
                        u = x(x({}, D), {}, {
                            userCategories: (0, P.Tq)("mobile"),
                            menuActions: r,
                            userData: o,
                            navLinkList: a
                        }, n);
                    return (0, d.jsx)(i.nn, x({}, u))
                }
        },
        42843: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return y
                }
            });
            n(36615), n(91518), n(83696), n(8249), n(28688);
            var r = n(64386),
                o = n(92130),
                i = n.n(o),
                a = n(57229),
                c = n(40682),
                s = n(59787),
                u = n(88620),
                l = n(6387),
                d = n(40007),
                p = n(41986),
                f = n(11754),
                v = function(e) {
                    var t = e.href,
                        n = e.children,
                        r = e.onClick,
                        o = e.className,
                        a = (0, f.jsx)("div", {
                            className: i()("mr-3 hidden cursor-pointer rounded bg-[#ffa1161f] px-3 py-1.5 transition-colors hover:bg-[#ffa11633] lg:block", o),
                            children: n
                        });
                    return t ? (0, f.jsx)(p.r, {
                        onClick: r,
                        href: t,
                        children: a
                    }) : (0, f.jsx)("a", {
                        onClick: r,
                        children: a
                    })
                },
                b = {
                    "/": "home_page_promote_button",
                    "/404/": "404_page_promote_button",
                    "/profile/": "personal_center_page_promote_button",
                    "/problemset/all/": "problems_page_promote_button"
                },
                m = {
                    "/study-plan/": "study_plan_page_promote_button",
                    "/problem-list/": "problem_list_page_promote_button",
                    "/problems/": "QD_page_promote_button",
                    "/leetbook/": "leetbook_page_promote_button",
                    "/circle/discuss/": "discussion_page_promote_button",
                    "/contest": "contest_page_promote_button",
                    "/company/": "company_page_promote_button",
                    "/u/": "profile_page_promote_button"
                },
                h = function() {
                    var e, t = location.pathname;
                    return b[t] ? b[t] : (null === (e = Object.entries(m).find((function(e) {
                        return t.startsWith(e[0])
                    }))) || void 0 === e ? void 0 : e[1]) || "others_page_promote_button"
                },
                y = function(e) {
                    var t, n = e.sourceInfo,
                        o = e.className,
                        p = (0, c.U)().data,
                        b = Boolean(null === p || void 0 === p || null === (t = p.userStatus) || void 0 === t ? void 0 : t.isSignedIn),
                        m = (0, u.r)().isVerified,
                        y = (0, r.useCallback)((function() {
                            a.x.payPremiumHeaderPromoteButtonClick({
                                pay_premium_source: (null === n || void 0 === n ? void 0 : n.sourceType) || h()
                            }), b ? m ? window.open("https://leetcode.cn/pay-redirect/?sourceType=".concat(h())) : l.y.error((0, f.jsxs)("span", {
                                children: ["\u8bf7\u9a8c\u8bc1\u624b\u673a\u6216\u90ae\u7bb1\u540e\u7ee7\u7eed\u64cd\u4f5c\uff0c", (0, f.jsx)("a", {
                                    className: d.Cj.labelBlueStandard,
                                    href: s.Hb.account(),
                                    children: "\u524d\u5f80\u9a8c\u8bc1"
                                })]
                            })) : location.href = s.Hb.signIn()
                        }), [b, m, n]);
                    return (0, f.jsx)(v, {
                        onClick: y,
                        className: i()("ml-2 mr-0 w-[81px] overflow-hidden whitespace-nowrap", o),
                        children: (0, f.jsxs)("span", {
                            className: i()("text-brand-orange"),
                            children: [(0, f.jsx)("span", {
                                className: "font-typo",
                                children: "Plus"
                            }), " \u4f1a\u5458"]
                        })
                    })
                }
        },
        69471: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return O
                }
            });
            n(91023), n(73384), n(2979);
            var r = n(64386),
                o = n(28688),
                i = n(59787),
                a = n(63282),
                c = n(73889),
                s = n(62590),
                u = n(56609),
                l = function() {
                    return (0, s.Hh)(u.K, {}, {
                        select: function(e) {
                            var t = e.problemsetStreakCounter;
                            return {
                                streakCounter: {
                                    streakCount: (null === t || void 0 === t ? void 0 : t.streakCount) || 0,
                                    daysSkipped: (null === t || void 0 === t ? void 0 : t.daysSkipped) || 0,
                                    currentDayCompleted: (null === t || void 0 === t ? void 0 : t.todayCompleted) || !1
                                }
                            }
                        }
                    })
                },
                d = n(84796),
                p = n(79868),
                f = n(83815),
                v = n(74486),
                b = n(59006),
                m = function(e) {
                    var t = (0, r.useState)(e && e.streakCount || 0),
                        n = t[0],
                        o = t[1],
                        i = (0, r.useState)(!(!e || !e.currentDayCompleted)),
                        a = i[0],
                        c = i[1],
                        s = (0, r.useState)(e && e.daysSkipped || 0),
                        u = s[0],
                        l = s[1],
                        d = (0, r.useCallback)((function(e) {
                            e && void 0 !== e.streakCount && o(e.streakCount || 0), e && void 0 !== e.currentDayCompleted && c(!!e.currentDayCompleted), e && void 0 !== e.daysSkipped && l(e.daysSkipped || 0)
                        }), [o, c, l]);
                    return (0, r.useEffect)((function() {
                            d(e)
                        }), [d, e]),
                        function(e, t) {
                            var n = "".concat("tab-communication", ":").concat(e);
                            (0, r.useEffect)((function() {
                                if ((0, b.jU)()) {
                                    var e = function(e) {
                                        if (e.key && e.newValue && e.key === n) {
                                            var r = JSON.parse(e.newValue);
                                            r && t(r)
                                        }
                                    };
                                    return window.addEventListener("storage", e),
                                        function() {
                                            return window.removeEventListener("storage", e)
                                        }
                                }
                            }), [t, n])
                        }("streak-counter", d), {
                            streakCount: n,
                            daysSkipped: u,
                            currentDayCompleted: a
                        }
                },
                h = n(11754),
                y = o.E,
                O = function(e) {
                    var t, n, s = e.iconClassName,
                        u = l(),
                        b = u.data,
                        O = u.isFetching,
                        g = m(null === b || void 0 === b ? void 0 : b.streakCounter),
                        j = g.streakCount,
                        w = g.currentDayCompleted,
                        _ = g.daysSkipped,
                        P = (0, p.pe)().data,
                        k = null === P || void 0 === P ? void 0 : P.currentTimestamp,
                        S = (0, r.useMemo)((function() {
                            var e = (0, a.B)(1e3 * Number(k)).tz(f.aB);
                            return {
                                year: parseInt(e.format("YYYY")),
                                month: parseInt(e.format("M")),
                                date: e.format("YYYY-MM-DD")
                            }
                        }), [k]),
                        C = S.year,
                        x = S.month,
                        D = S.date,
                        E = (0, d.C)(C, x, !!k),
                        V = E.isFetching,
                        L = null === (t = E.data) || void 0 === t || null === (n = t.config) || void 0 === n ? void 0 : n.icon,
                        A = (0, v.qe)(),
                        N = A.data,
                        X = A.isFetching,
                        M = (null === N || void 0 === N ? void 0 : N.link) && "".concat(null === N || void 0 === N ? void 0 : N.link, "?envType=daily-question&envId=").concat(D),
                        I = (0, r.useMemo)((function() {
                            return i.Hb.store()
                        }), []),
                        T = O || !k || V || X,
                        B = (0, r.useCallback)((function(e) {
                            e && c.$.navbarStreakHoverButtonExposure({
                                navbar_streak_count: String(j),
                                navbar_current_day_completed: String(w)
                            })
                        }), [j, w]),
                        R = (0, r.useCallback)((function(e) {
                            e.preventDefault(), window.open(I), c.$.navbarStreakTttLinkClick({
                                navbar_days_skipped: String(_)
                            })
                        }), [_, I]),
                        H = (0, r.useCallback)((function(e) {
                            return e.preventDefault(), M && window.open(M), c.$.navbarStreakLinkClick(), !0
                        }), [M]);
                    return (0, h.jsx)(o.c7, {
                        storePath: I,
                        streakCount: j,
                        daysSkipped: _,
                        iconClassName: s,
                        dailyQuestionLink: null !== M && void 0 !== M ? M : "",
                        currentDayCompleted: w,
                        dailyQuestionMedal: L,
                        isLoading: T,
                        onVisibilityChange: B,
                        onStreakCounterClick: H,
                        onTttClick: R,
                        customText: y,
                        panelClassName: "!p-0"
                    })
                }
        },
        78297: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return p
                }
            });
            n(78464), n(29092), n(70748), n(91518), n(96543), n(62217), n(63306);
            var r = n(4676),
                o = n(28688),
                i = (n(64386), n(83815)),
                a = n(93e3),
                c = n(3702),
                s = n(11754);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = {
                    IS_LCUS: i.Oo
                },
                p = function(e) {
                    var t = e.className,
                        n = e.useFullWidthMd,
                        r = e.pageReference,
                        i = (0, a.yV)(r),
                        u = (0, c.j)("web"),
                        p = (0, a.v$)().data,
                        f = (0, a.Tq)("web"),
                        v = l(l(l({}, d), {}, {
                            userCategories: f,
                            menuActions: u,
                            userData: p,
                            className: t
                        }, i), {}, {
                            useFullWidthMd: n
                        });
                    return (0, s.jsx)(o.oR, l({}, v))
                }
        },
        54659: function(e, t, n) {
            n.d(t, {
                lT: function() {
                    return a
                },
                rB: function() {
                    return c
                }
            });
            n(87621), n(51506);
            var r = n(49856),
                o = n(90074),
                i = n(59787),
                a = function(e, t) {
                    var n = e.userStatus,
                        r = n.isTranslator,
                        a = n.isSuperuser,
                        c = e.commonNojPermissionTypes;
                    return [{
                        key: "library",
                        linkProps: {
                            to: i.Hb.library()
                        },
                        display: t("pages.admin.library"),
                        displayCondition: !r
                    }, {
                        key: "translation",
                        linkProps: {
                            to: t("links.admin.translation")
                        },
                        display: t("pages.admin.translation"),
                        displayCondition: !(!r && !a)
                    }, {
                        key: "management",
                        linkProps: {
                            to: t("links.admin.operations")
                        },
                        display: t("pages.admin.operations"),
                        displayCondition: c.includes(o.Pm$.ManagementEntry)
                    }, {
                        key: "points",
                        linkProps: {
                            to: t("links.admin.scores")
                        },
                        display: t("pages.admin.scores"),
                        displayCondition: !!a
                    }, {
                        key: "contribution",
                        linkProps: {
                            to: i.Hb.contributeDashboard()
                        },
                        display: t("pages.admin.contribute"),
                        displayCondition: !0
                    }, {
                        key: "administration",
                        linkProps: {
                            to: i.Hb.adminBackend()
                        },
                        display: t("pages.admin.backend"),
                        displayCondition: !!a
                    }, {
                        key: "otp-manager",
                        linkProps: {
                            to: i.Hb.otpManager()
                        },
                        display: t("pages.admin.twoStepVerification"),
                        displayCondition: !!a
                    }]
                },
                c = function(e) {
                    var t, n, i = (null === e || void 0 === e || null === (t = e.userStatus) || void 0 === t ? void 0 : t.permissions) || [],
                        a = (null === e || void 0 === e || null === (n = e.userStatus) || void 0 === n ? void 0 : n.isAdmin) || (0, r.Gi)(i, r.lF),
                        c = null === e || void 0 === e ? void 0 : e.commonNojPermissionTypes.includes(o.Pm$.ColumnsReview);
                    return e && (c || a)
                }
        },
        51786: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return l
                }
            });
            n(72029);
            var r = n(79216),
                o = n(913),
                i = n.n(o),
                a = n(23329),
                c = n(44872),
                s = n(98685),
                u = n(11754),
                l = function() {
                    var e, t, n = (0, r.$G)("common").t;
                    return "SAFARI" !== (null !== (e = i().name) && void 0 !== e ? e : "").toUpperCase() || (0, a.q)(null !== (t = i().version) && void 0 !== t ? t : "16.0", "14.5", ">=") ? null : (0, u.jsx)("div", {
                        className: (0, c.yI)("h-10 w-full text-center leading-10", s.nx.bgYellow60, s.nx.labelTextReverse),
                        children: n("safariNotUse")
                    })
                }
        },
        92561: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return i
                }
            });
            var r = n(77527),
                o = n(27654),
                i = {
                    advertisementAdExposure: function(e) {
                        var t = {
                            key: "advertisement_ad_exposure",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    advertisementAdClick: function(e) {
                        var t = {
                            key: "advertisement_ad_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    advertisementAdFrequencyLimitExposure: function(e) {
                        var t = {
                            key: "advertisement_ad_frequency_limit_exposure",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    advertisementAdFrequencyLimitClick: function(e) {
                        var t = {
                            key: "advertisement_ad_frequency_limit_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    advertisementAcAfterAdClick: function(e) {
                        var t = {
                            key: "advertisement_ac_after_ad_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    advertisementAcAfterAdExposure: function(e) {
                        var t = {
                            key: "advertisement_ac_after_ad_exposure",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    }
                }
        },
        49406: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return i
                }
            });
            var r = n(77527),
                o = n(27654),
                i = {
                    imNotificationBellClick: function() {
                        var e = {
                            key: "im_notification_bell_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    imNavNotificationTabExposure: function() {
                        var e = {
                            key: "im_nav_notification_tab_exposure",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    imNavActivityTabExposure: function() {
                        var e = {
                            key: "im_nav_activity_tab_exposure",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    imNavChatTabExposure: function() {
                        var e = {
                            key: "im_nav_chat_tab_exposure",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    }
                }
        },
        73889: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return i
                }
            });
            var r = n(77527),
                o = n(27654),
                i = {
                    navbarInterviewerEditionEntranceButtonClick: function() {
                        var e = {
                            key: "navbar_interviewer_edition_entrance_button_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    navbarEeEntranceButtonClick: function() {
                        var e = {
                            key: "navbar_ee_entrance_button_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    navbarStreakHoverButtonExposure: function(e) {
                        var t = {
                            key: "navbar_streak_hover_button_exposure",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    navbarStreakTttLinkClick: function(e) {
                        var t = {
                            key: "navbar_streak_ttt_link_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    navbarStreakLinkClick: function() {
                        var e = {
                            key: "navbar_streak_link_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    navbarSearchClickClick: function(e) {
                        var t = {
                            key: "navbar_search_click_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    navbarNewFeatureClick: function() {
                        var e = {
                            key: "navbar_new_feature_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    navbarElementClick: function(e) {
                        var t = {
                            key: "navbar_element_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    }
                }
        },
        57229: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return i
                }
            });
            var r = n(77527),
                o = n(27654),
                i = {
                    payPremiumStudyPlanPremiumClick: function() {
                        var e = {
                            key: "pay_premium_study_plan_premium_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    payPremiumVideoSolutionPremiumButtonClick: function() {
                        var e = {
                            key: "pay_premium_video_solution_premium_button_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    payPremiumPremiumDetailButtonClick: function() {
                        var e = {
                            key: "pay_premium_premium_detail_button_click",
                            data: {}
                        };
                        r.V[o.X.GIO](e), r.V[o.X.GA4](e), r.V[o.X.CONSOLE](e), r.V[o.X.SELF_DB](e)
                    },
                    payPremiumHeaderPromoteButtonClick: function(e) {
                        var t = {
                            key: "pay_premium_header_promote_button_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    },
                    payPremiumJumpPremiumClick: function(e) {
                        var t = {
                            key: "pay_premium_jump_premium_click",
                            data: e
                        };
                        r.V[o.X.GIO](t), r.V[o.X.GA4](t), r.V[o.X.CONSOLE](t), r.V[o.X.SELF_DB](t)
                    }
                }
        }
    }
]);