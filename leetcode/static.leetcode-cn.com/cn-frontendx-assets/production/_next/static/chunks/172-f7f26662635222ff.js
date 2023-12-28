(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [172], {
        84956: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "followCompany"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "tagSlug"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "followCompanyResult"
                            },
                            name: {
                                kind: "Name",
                                value: "followCompany"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "tagSlug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "tagSlug"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "ok"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 124
                }
            };
            n.loc.source = {
                body: "mutation followCompany($tagSlug: String!) {\n  followCompanyResult: followCompany(tagSlug: $tagSlug) {\n    ok\n    error\n  }\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function t(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var o = e.type;
                    "NamedType" === o.kind && n.add(o.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }))
            }
            var o = {};

            function r(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var o = e.definitions[t];
                    if (o.name && o.name.value == n) return o
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n), o[e.name.value] = n
                }
            })), e.exports = n, e.exports.followCompany = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var i = o[n] || new Set,
                    l = new Set,
                    u = new Set;
                for (i.forEach((function(e) {
                        u.add(e)
                    })); u.size > 0;) {
                    var a = u;
                    u = new Set, a.forEach((function(e) {
                        l.has(e) || (l.add(e), (o[e] || new Set).forEach((function(e) {
                            u.add(e)
                        })))
                    }))
                }
                return l.forEach((function(n) {
                    var o = r(e, n);
                    o && t.definitions.push(o)
                })), t
            }(n, "followCompany")
        },
        95408: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "followUser"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "userSlug"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "followUserResult"
                            },
                            name: {
                                kind: "Name",
                                value: "followUser"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userSlug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "userSlug"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "ok"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 119
                }
            };
            n.loc.source = {
                body: "mutation followUser($userSlug: String!) {\n  followUserResult: followUser(userSlug: $userSlug) {\n    ok\n    error\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function t(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var o = e.type;
                    "NamedType" === o.kind && n.add(o.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }))
            }
            var o = {};

            function r(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var o = e.definitions[t];
                    if (o.name && o.name.value == n) return o
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n), o[e.name.value] = n
                }
            })), e.exports = n, e.exports.followUser = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var i = o[n] || new Set,
                    l = new Set,
                    u = new Set;
                for (i.forEach((function(e) {
                        u.add(e)
                    })); u.size > 0;) {
                    var a = u;
                    u = new Set, a.forEach((function(e) {
                        l.has(e) || (l.add(e), (o[e] || new Set).forEach((function(e) {
                            u.add(e)
                        })))
                    }))
                }
                return l.forEach((function(n) {
                    var o = r(e, n);
                    o && t.definitions.push(o)
                })), t
            }(n, "followUser")
        },
        73754: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "unfollowCompany"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "tagSlug"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "unfollowCompanyResult"
                            },
                            name: {
                                kind: "Name",
                                value: "unfollowCompany"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "tagSlug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "tagSlug"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "ok"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            n.loc.source = {
                body: "mutation unfollowCompany($tagSlug: String!) {\n  unfollowCompanyResult: unfollowCompany(tagSlug: $tagSlug) {\n    ok\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function t(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var o = e.type;
                    "NamedType" === o.kind && n.add(o.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }))
            }
            var o = {};

            function r(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var o = e.definitions[t];
                    if (o.name && o.name.value == n) return o
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n), o[e.name.value] = n
                }
            })), e.exports = n, e.exports.unfollowCompany = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var i = o[n] || new Set,
                    l = new Set,
                    u = new Set;
                for (i.forEach((function(e) {
                        u.add(e)
                    })); u.size > 0;) {
                    var a = u;
                    u = new Set, a.forEach((function(e) {
                        l.has(e) || (l.add(e), (o[e] || new Set).forEach((function(e) {
                            u.add(e)
                        })))
                    }))
                }
                return l.forEach((function(n) {
                    var o = r(e, n);
                    o && t.definitions.push(o)
                })), t
            }(n, "unfollowCompany")
        },
        2962: function(e) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "unfollowUser"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "userSlug"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "followUserResult"
                            },
                            name: {
                                kind: "Name",
                                value: "unfollowUser"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userSlug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "userSlug"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "ok"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 123
                }
            };
            n.loc.source = {
                body: "mutation unfollowUser($userSlug: String!) {\n  followUserResult: unfollowUser(userSlug: $userSlug) {\n    ok\n    error\n  }\n}\n",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };

            function t(e, n) {
                if ("FragmentSpread" === e.kind) n.add(e.name.value);
                else if ("VariableDefinition" === e.kind) {
                    var o = e.type;
                    "NamedType" === o.kind && n.add(o.name.value)
                }
                e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                    t(e, n)
                })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                    t(e, n)
                })), e.definitions && e.definitions.forEach((function(e) {
                    t(e, n)
                }))
            }
            var o = {};

            function r(e, n) {
                for (var t = 0; t < e.definitions.length; t++) {
                    var o = e.definitions[t];
                    if (o.name && o.name.value == n) return o
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var n = new Set;
                    t(e, n), o[e.name.value] = n
                }
            })), e.exports = n, e.exports.unfollowUser = function(e, n) {
                var t = {
                    kind: e.kind,
                    definitions: [r(e, n)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var i = o[n] || new Set,
                    l = new Set,
                    u = new Set;
                for (i.forEach((function(e) {
                        u.add(e)
                    })); u.size > 0;) {
                    var a = u;
                    u = new Set, a.forEach((function(e) {
                        l.has(e) || (l.add(e), (o[e] || new Set).forEach((function(e) {
                            u.add(e)
                        })))
                    }))
                }
                return l.forEach((function(n) {
                    var o = r(e, n);
                    o && t.definitions.push(o)
                })), t
            }(n, "unfollowUser")
        },
        79247: function(e, n, t) {
            "use strict";
            t.d(n, {
                D: function() {
                    return u
                }
            });
            var o = t(18854),
                r = t(40682),
                i = t(18071),
                l = function(e) {
                    var n, t, o = (0, i.i)(e || "", {
                        enabled: !!e
                    }).data;
                    return null === o || void 0 === o || null === (n = o.userProfilePublicProfile) || void 0 === n || null === (t = n.profile) || void 0 === t ? void 0 : t.userSlug
                },
                u = function() {
                    var e = (0, o.useRouter)().query,
                        n = l(e.username),
                        t = (0, r.U)().data;
                    if (!n || !t) return !1;
                    var i = t.userStatus;
                    return !(!i || !i.isSignedIn) && i.userSlug === n
                }
        },
        54151: function(e, n, t) {
            "use strict";
            t.d(n, {
                a: function() {
                    return l
                }
            });
            var o = t(4383),
                r = t(59006),
                i = (0, r.vx)(),
                l = new o.GraphQLClient("/graphql/noty", {
                    credentials: "same-origin",
                    headers: {
                        "X-CSRFToken": (0, r._V)(),
                        Authorization: i ? "Bearer ".concat(i) : "",
                        "random-uuid": (0, r.Zx)()
                    }
                })
        },
        67975: function(e, n, t) {
            "use strict";
            t.d(n, {
                Ij: function() {
                    return m
                },
                X7: function() {
                    return c
                },
                be: function() {
                    return y
                },
                tQ: function() {
                    return b
                },
                vc: function() {
                    return w
                }
            });
            var o, r, i, l, u, a, s, c, f = t(19129),
                d = t(22980),
                v = t.n(d),
                p = (t(43969), t(91518), t(58935), t(11651));

            function g(e, n, t, o) {
                return (0, f.Z)(v().mark((function r() {
                    return v().wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.abrupt("return", e.request({
                                    document: n,
                                    variables: t,
                                    requestHeaders: o
                                }));
                            case 1:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))
            }! function(e) {
                e.Html = "HTML", e.Markdown = "MARKDOWN", e.QuizQuestion = "QUIZ_QUESTION"
            }(o || (o = {})),
            function(e) {
                e.CounterNotificationI = "COUNTER_NOTIFICATION_I", e.CounterNotificationIi = "COUNTER_NOTIFICATION_II", e.CounterNotificationIii = "COUNTER_NOTIFICATION_III"
            }(r || (r = {})),
            function(e) {
                e.AllUser = "ALL_USER", e.AnyArticle = "ANY_ARTICLE", e.CircleArticle = "CIRCLE_ARTICLE", e.Company = "COMPANY", e.Contest = "CONTEST", e.GeneralComment = "GENERAL_COMMENT", e.GeneralContent = "GENERAL_CONTENT", e.JobPosition = "JOB_POSITION", e.Leetbook = "LEETBOOK", e.Page = "PAGE", e.Premium = "PREMIUM", e.Prize = "PRIZE", e.Problem = "PROBLEM", e.QaAnswer = "QA_ANSWER", e.QaQuestion = "QA_QUESTION", e.Site = "SITE", e.Solution = "SOLUTION", e.User = "USER"
            }(i || (i = {})),
            function(e) {
                e.NotificationI = "NOTIFICATION_I", e.NotificationIi = "NOTIFICATION_II", e.NotificationIii = "NOTIFICATION_III"
            }(l || (l = {})),
            function(e) {
                e.Announce = "ANNOUNCE", e.Comment = "COMMENT", e.ContestSponsor = "CONTEST_SPONSOR", e.Contribute = "CONTRIBUTE", e.Emegency = "EMEGENCY", e.Follow = "FOLLOW", e.JobsInvite = "JOBS_INVITE", e.JobPublish = "JOB_PUBLISH", e.Mention = "MENTION", e.Notify = "NOTIFY", e.Promote = "PROMOTE", e.Receive = "RECEIVE", e.Reply = "REPLY", e.Reward = "REWARD", e.Update = "UPDATE", e.Upvote = "UPVOTE"
            }(u || (u = {})),
            function(e) {
                e.Chapter = "CHAPTER", e.IcpcQuestion = "ICPC_QUESTION", e.Mixed = "MIXED", e.MixedWithVideo = "MIXED_WITH_VIDEO", e.ProgramingQuestion = "PROGRAMING_QUESTION"
            }(a || (a = {})),
            function(e) {
                e.AdditionalTopic = "ADDITIONAL_TOPIC", e.Company = "COMPANY", e.Language = "LANGUAGE", e.Topic = "TOPIC"
            }(s || (s = {})),
            function(e) {
                e.AnyVerb = "ANY_VERB", e.ArticleCommentRefer = "ARTICLE_COMMENT_REFER", e.ArticleRefer = "ARTICLE_REFER", e.CommentArticle = "COMMENT_ARTICLE", e.Follow = "FOLLOW", e.JobInvite = "JOB_INVITE", e.LeetcodeNotify = "LEETCODE_NOTIFY", e.ProblemAddArticle = "PROBLEM_ADD_ARTICLE", e.ProblemCommentRefer = "PROBLEM_COMMENT_REFER", e.ReplyArticleComment = "REPLY_ARTICLE_COMMENT", e.ReplyProblemComment = "REPLY_PROBLEM_COMMENT", e.SubmitCode = "SUBMIT_CODE", e.UpvoteArticle = "UPVOTE_ARTICLE", e.UpvoteArticleComment = "UPVOTE_ARTICLE_COMMENT", e.UpvoteProblemComment = "UPVOTE_PROBLEM_COMMENT", e.UserAddArticle = "USER_ADD_ARTICLE"
            }(c || (c = {}));
            var m = function(e, n, t, o) {
                return (0, p.a)(["followCounts", n], g(e, "\n    query followCounts($userSlug: String!) {\n  followers(userSlug: $userSlug) {\n    allNum\n  }\n  followingEntities(userSlug: $userSlug) {\n    allNum\n  }\n}\n    ", n, o), t)
            };
            m.getKey = function(e) {
                return ["followCounts", e]
            };
            var w = "\n    query followerUsers($userSlug: String!, $pageNumber: Int, $resultPerPage: Int) {\n  followers(\n    userSlug: $userSlug\n    pageNumber: $pageNumber\n    resultPerPage: $resultPerPage\n  ) {\n    users {\n      realName\n      userAvatar\n      userSlug\n      aboutMe\n      isMutualFollowing\n      isFollowingMe\n      isFollowedByMe\n    }\n  }\n}\n    ",
                y = "\n    query followingEntities($userSlug: String!, $pageNumber: Int, $resultPerPage: Int) {\n  followingEntities(\n    userSlug: $userSlug\n    pageNumber: $pageNumber\n    resultPerPage: $resultPerPage\n  ) {\n    allNum\n    entities {\n      ... on FollowTagNode {\n        isFollowedByMe\n        name\n        slug\n        imgUrl\n        tagType\n        desc\n      }\n      ... on FollowUserNode {\n        realName\n        userAvatar\n        userSlug\n        aboutMe\n        isMutualFollowing\n        isFollowingMe\n        isFollowedByMe\n      }\n    }\n  }\n}\n    ",
                b = function(e, n, t, o) {
                    return (0, p.a)(["notyActivityConfig", n], g(e, "\n    query notyActivityConfig($userSlug: String!, $verb: VerbType) {\n  activityConfig(userSlug: $userSlug, verb: $verb) {\n    verb\n    allowDisplay\n  }\n}\n    ", n, o), t)
                };
            b.getKey = function(e) {
                return ["notyActivityConfig", e]
            }
        },
        51200: function(e, n, t) {
            "use strict";
            t.d(n, {
                S: function() {
                    return a
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var o = t(4676),
                r = t(64386),
                i = t(11754);

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(t), !0).forEach((function(n) {
                        (0, o.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var a = r.forwardRef((function(e, n) {
                return (0, i.jsx)("svg", u(u({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: n
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M13 11h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 112 0v7z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        67533: function(e, n, t) {
            "use strict";
            t.d(n, {
                z: function() {
                    return a
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var o = t(4676),
                r = t(64386),
                i = t(11754);

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(t), !0).forEach((function(n) {
                        (0, o.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var a = r.forwardRef((function(e, n) {
                return (0, i.jsx)("svg", u(u({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: n
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        36111: function(e, n, t) {
            "use strict";
            t.d(n, {
                D: function() {
                    return a
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var o = t(4676),
                r = t(64386),
                i = t(11754);

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(t), !0).forEach((function(n) {
                        (0, o.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var a = r.forwardRef((function(e, n) {
                return (0, i.jsxs)("svg", u(u({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: n
                }, e), {}, {
                    children: [(0, i.jsx)("path", {
                        d: "M6.486 5.5a.986.986 0 00-.986.986v7.596a.986.986 0 101.972 0V6.486a.986.986 0 00-.986-.986z"
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M9.472 5.5a1 1 0 00-1 1v7.576a.992.992 0 101.984 0v-2.512h2.008c1.045 0 1.924-.225 2.545-.758.637-.546.919-1.34.919-2.286 0-.94-.279-1.729-.913-2.27-.62-.529-1.496-.75-2.539-.75H9.472zm.984 4.212v-2.36h1.96c.635 0 .995.125 1.199.3l.012.01.013.01c.166.124.304.364.304.848 0 .474-.134.734-.313.888-.21.172-.58.304-1.215.304h-1.96z",
                        clipRule: "evenodd"
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z",
                        clipRule: "evenodd"
                    })]
                }))
            }))
        },
        63441: function(e, n, t) {
            "use strict";
            t.d(n, {
                i: function() {
                    return s
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var o = t(7831),
                r = t(4676),
                i = (t(64386), t(81757)),
                l = ["setAppState"];

            function u(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var s = function(e) {
                var n = (0, i.Ue)((function(n) {
                    return a(a({}, e), {}, {
                        setAppState: function(e) {
                            return n(e)
                        }
                    })
                }));
                return function() {
                    var t = n(),
                        i = t.setAppState;
                    return {
                        appState: (0, o.Z)(t, l),
                        setAppState: i,
                        resetAppState: function(n) {
                            i(n ? (0, r.Z)({}, n, e[n]) : e)
                        },
                        defaultAppState: e
                    }
                }
            }({
                isFollowersTab: !1,
                modalVisible: !1,
                followingCount: 0,
                followersCount: 0,
                followerUsers: [],
                followingUsers: [],
                checkingUser: void 0
            })
        },
        1836: function(e, n, t) {
            "use strict";
            t.d(n, {
                f: function() {
                    return i
                },
                x: function() {
                    return l
                }
            });
            t(72029);
            var o = t(90074),
                r = t(11288),
                i = function(e, n) {
                    e.invalidateQueries(o.JL1.getKey({
                        slugs: [n]
                    }))
                },
                l = function(e) {
                    return (0, o.JL1)(r.f6, {
                        slugs: [e]
                    }, {
                        select: function(e) {
                            var n = e.userProfileUserPendants[0];
                            return {
                                matchedUser: {
                                    activeBadge: {
                                        id: (null === n || void 0 === n ? void 0 : n.id) || "",
                                        name: (null === n || void 0 === n ? void 0 : n.name) || "",
                                        icon: (null === n || void 0 === n ? void 0 : n.config.iconWearing) || "",
                                        color: e.userProfileUserColors[0] || void 0,
                                        category: (null === n || void 0 === n ? void 0 : n.category) || void 0
                                    }
                                }
                            }
                        }
                    })
                }
        },
        11879: function(e, n, t) {
            "use strict";
            t.d(n, {
                y: function() {
                    return a
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var o = t(4676),
                r = t(90074),
                i = t(11288);

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(t), !0).forEach((function(n) {
                        (0, o.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var a = function(e, n) {
                return (0, r.ObB)(i.f6, {
                    size: 2,
                    userSlug: e
                }, u(u({}, n), {}, {
                    select: function(e) {
                        if (!e.profileCommunityAchievement || e.profileCommunityAchievement.length < 2) return {
                            viewCount: 0,
                            viewCountDiff: 0,
                            voteCount: 0,
                            voteCountDiff: 0,
                            favoriteCount: 0,
                            favoriteCountDiff: 0
                        };
                        var n = e.profileCommunityAchievement[0],
                            t = e.profileCommunityAchievement[1],
                            o = n.viewCount - t.viewCount,
                            r = n.voteCount - t.voteCount,
                            i = n.favoriteCount - t.favoriteCount;
                        return {
                            viewCount: n.viewCount,
                            viewCountDiff: o,
                            voteCount: n.voteCount,
                            voteCountDiff: r,
                            favoriteCount: n.favoriteCount,
                            favoriteCountDiff: i
                        }
                    }
                }))
            }
        },
        86598: function(e, n, t) {
            "use strict";
            t.d(n, {
                H: function() {
                    return i
                }
            });
            var o = t(67975),
                r = t(54151),
                i = function(e, n) {
                    return (0, o.Ij)(r.a, {
                        userSlug: e
                    }, n)
                }
        },
        24464: function(e, n, t) {
            "use strict";
            t.d(n, {
                e: function() {
                    return a
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var o = t(4676),
                r = t(90074),
                i = t(11288);

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(t), !0).forEach((function(n) {
                        (0, o.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var a = function(e, n) {
                return (0, r.o$e)(i.f6, {
                    userSlugs: [e]
                }, u(u({}, n), {}, {
                    select: function(e) {
                        var n = {
                            level: 1,
                            reputation: 0
                        };
                        return e.reputationUserReputations ? 0 === e.reputationUserReputations.length ? n : e.reputationUserReputations[0] ? {
                            level: e.reputationUserReputations[0].level,
                            reputation: e.reputationUserReputations[0].reputation
                        } : n : n
                    }
                }))
            }
        },
        11848: function(e, n, t) {
            "use strict";
            t.d(n, {
                c: function() {
                    return k
                }
            });
            t(78464), t(29092), t(70748), t(96543), t(62217), t(63306);
            var o = t(21484),
                r = t(4676),
                i = t(19129),
                l = t(22980),
                u = t.n(l),
                a = (t(43969), t(91518), t(58935), t(17519), t(36615), t(2979), t(2962)),
                s = t.n(a),
                c = t(95408),
                f = t.n(c),
                d = t(73754),
                v = t.n(d),
                p = t(84956),
                g = t.n(p),
                m = t(11288),
                w = t(6387),
                y = t(79247),
                b = t(63441);

            function O(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function S(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? O(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var k = function(e, n, t, r, l) {
                var a = (0, b.i)(),
                    c = a.appState,
                    d = c.followingUsers,
                    p = c.followingCount,
                    O = c.followersCount,
                    k = c.followerUsers,
                    C = c.isFollowersTab,
                    h = c.checkingUser,
                    E = a.setAppState,
                    N = (0, y.D)();
                return {
                    mutateAsync: function() {
                        var e = (0, i.Z)(u().mark((function e(r) {
                            var i, a, c, y, b, P, U, R, j, M, D, T, I, F, x, A, _, B, L, V, q, $, Q, Z, z, G, H, J, Y, W, K, X, ee, ne, te, oe, re, ie, le, ue, ae, se, ce, fe, de, ve, pe, ge, me, we, ye, be, Oe;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = r.userSlug, t) {
                                            e.next = 15;
                                            break
                                        }
                                        if (!n) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 5, m.f6.request(s(), {
                                            userSlug: i
                                        });
                                    case 5:
                                        c = e.sent, null !== (a = c.followUserResult) && void 0 !== a && a.ok ? E({
                                            checkingUser: h ? S(S({}, h), {}, {
                                                haveFollowed: !1
                                            }) : void 0,
                                            followersCount: O - 1
                                        }) : w.y.error(null === (y = c.followUserResult) || void 0 === y ? void 0 : y.error), e.next = 13;
                                        break;
                                    case 9:
                                        return e.next = 11, m.f6.request(f(), {
                                            userSlug: i
                                        });
                                    case 11:
                                        P = e.sent, null !== (b = P.followUserResult) && void 0 !== b && b.ok ? E({
                                            checkingUser: h ? S(S({}, h), {}, {
                                                haveFollowed: !0
                                            }) : void 0,
                                            followersCount: O + 1
                                        }) : w.y.error(null === (U = P.followUserResult) || void 0 === U ? void 0 : U.error);
                                    case 13:
                                        e.next = 124;
                                        break;
                                    case 15:
                                        if (!N) {
                                            e.next = 71;
                                            break
                                        }
                                        if (!C) {
                                            e.next = 44;
                                            break
                                        }
                                        if (!n) {
                                            e.next = 31;
                                            break
                                        }
                                        if (!l) {
                                            e.next = 25;
                                            break
                                        }
                                        return e.next = 21, m.f6.request(v(), {
                                            tagSlug: i
                                        });
                                    case 21:
                                        j = e.sent, null !== (R = j.unfollowCompanyResult) && void 0 !== R && R.ok && E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            })),
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            })),
                                            followingCount: p - 1
                                        }), e.next = 29;
                                        break;
                                    case 25:
                                        return e.next = 27, m.f6.request(s(), {
                                            userSlug: i
                                        });
                                    case 27:
                                        D = e.sent, null !== (M = D.followUserResult) && void 0 !== M && M.ok ? E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            })),
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug !== i || e.isCompany ? e : S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                })
                                            })),
                                            followingCount: p - 1
                                        }) : w.y.error(null === (T = D.followUserResult) || void 0 === T ? void 0 : T.error);
                                    case 29:
                                        e.next = 42;
                                        break;
                                    case 31:
                                        if (!l) {
                                            e.next = 38;
                                            break
                                        }
                                        return e.next = 34, m.f6.request(g(), {
                                            tagSlug: i
                                        });
                                    case 34:
                                        F = e.sent, null !== (I = F.followCompanyResult) && void 0 !== I && I.ok ? (x = k.map((function(e) {
                                            return e.userSlug === i ? S(S({}, e), {}, {
                                                isFollowedByMe: !0,
                                                isMutualFollowing: !0
                                            }) : e
                                        })), E({
                                            followerUsers: x,
                                            followingUsers: d.find((function(e) {
                                                return e.userSlug === i
                                            })) ? d.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0,
                                                    isMutualFollowing: !0
                                                }) : e
                                            })) : [x.find((function(e) {
                                                return e.userSlug === i
                                            }))].concat((0, o.Z)(d)),
                                            followingCount: p + 1
                                        })) : w.y.error(null === (A = F.followCompanyResult) || void 0 === A ? void 0 : A.error), e.next = 42;
                                        break;
                                    case 38:
                                        return e.next = 40, m.f6.request(f(), {
                                            userSlug: i
                                        });
                                    case 40:
                                        B = e.sent, null !== (_ = B.followUserResult) && void 0 !== _ && _.ok ? (L = k.map((function(e) {
                                            return e.userSlug === i ? S(S({}, e), {}, {
                                                isFollowedByMe: !0,
                                                isMutualFollowing: !0
                                            }) : e
                                        })), E({
                                            followerUsers: L,
                                            followingUsers: d.find((function(e) {
                                                return e.userSlug === i
                                            })) ? d.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0,
                                                    isMutualFollowing: !0
                                                }) : e
                                            })) : [L.find((function(e) {
                                                return e.userSlug === i
                                            }))].concat((0, o.Z)(d)),
                                            followingCount: p + 1
                                        })) : w.y.error(null === (V = B.followUserResult) || void 0 === V ? void 0 : V.error);
                                    case 42:
                                        e.next = 69;
                                        break;
                                    case 44:
                                        if (!n) {
                                            e.next = 58;
                                            break
                                        }
                                        if (!l) {
                                            e.next = 52;
                                            break
                                        }
                                        return e.next = 48, m.f6.request(v(), {
                                            tagSlug: i
                                        });
                                    case 48:
                                        $ = e.sent, null !== (q = $.unfollowCompanyResult) && void 0 !== q && q.ok && E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            })),
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug === i && e.isCompany ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            })),
                                            followingCount: p - 1
                                        }), e.next = 56;
                                        break;
                                    case 52:
                                        return e.next = 54, m.f6.request(s(), {
                                            userSlug: i
                                        });
                                    case 54:
                                        Z = e.sent, null !== (Q = Z.followUserResult) && void 0 !== Q && Q.ok ? E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            })),
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug !== i || e.isCompany ? e : S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                })
                                            })),
                                            followingCount: p - 1
                                        }) : w.y.error(null === (z = Z.followUserResult) || void 0 === z ? void 0 : z.error);
                                    case 56:
                                        e.next = 69;
                                        break;
                                    case 58:
                                        if (!l) {
                                            e.next = 65;
                                            break
                                        }
                                        return e.next = 61, m.f6.request(g(), {
                                            tagSlug: i
                                        });
                                    case 61:
                                        H = e.sent, null !== (G = H.followCompanyResult) && void 0 !== G && G.ok ? E({
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug === i && e.isCompany ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0
                                                }) : e
                                            })),
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0,
                                                    isMutualFollowing: !0
                                                }) : e
                                            })),
                                            followingCount: p + 1
                                        }) : w.y.error(null === (J = H.followCompanyResult) || void 0 === J ? void 0 : J.error), e.next = 69;
                                        break;
                                    case 65:
                                        return e.next = 67, m.f6.request(f(), {
                                            userSlug: i
                                        });
                                    case 67:
                                        W = e.sent, null !== (Y = W.followUserResult) && void 0 !== Y && Y.ok ? E({
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug !== i || e.isCompany ? e : S(S({}, e), {}, {
                                                    isFollowedByMe: !0
                                                })
                                            })),
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0,
                                                    isMutualFollowing: !0
                                                }) : e
                                            })),
                                            followingCount: p + 1
                                        }) : w.y.error(null === (K = W.followUserResult) || void 0 === K ? void 0 : K.error);
                                    case 69:
                                        e.next = 124;
                                        break;
                                    case 71:
                                        if (!C) {
                                            e.next = 99;
                                            break
                                        }
                                        if (!n) {
                                            e.next = 86;
                                            break
                                        }
                                        if (!l) {
                                            e.next = 80;
                                            break
                                        }
                                        return e.next = 76, m.f6.request(v(), {
                                            tagSlug: i
                                        });
                                    case 76:
                                        ee = e.sent, null !== (X = ee.unfollowCompanyResult) && void 0 !== X && X.ok && E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            }))
                                        }), e.next = 84;
                                        break;
                                    case 80:
                                        return e.next = 82, m.f6.request(s(), {
                                            userSlug: i
                                        });
                                    case 82:
                                        te = e.sent, null !== (ne = te.followUserResult) && void 0 !== ne && ne.ok ? E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            }))
                                        }) : w.y.error(null === (oe = te.followUserResult) || void 0 === oe ? void 0 : oe.error);
                                    case 84:
                                        e.next = 97;
                                        break;
                                    case 86:
                                        if (!l) {
                                            e.next = 93;
                                            break
                                        }
                                        return e.next = 89, m.f6.request(g(), {
                                            tagSlug: i
                                        });
                                    case 89:
                                        ie = e.sent, null !== (re = ie.followCompanyResult) && void 0 !== re && re.ok ? E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0
                                                }) : e
                                            }))
                                        }) : w.y.error(null === (le = ie.followCompanyResult) || void 0 === le ? void 0 : le.error), e.next = 97;
                                        break;
                                    case 93:
                                        return e.next = 95, m.f6.request(f(), {
                                            userSlug: i
                                        });
                                    case 95:
                                        ae = e.sent, null !== (ue = ae.followUserResult) && void 0 !== ue && ue.ok ? E({
                                            followerUsers: k.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0
                                                }) : e
                                            }))
                                        }) : w.y.error(null === (se = ae.followUserResult) || void 0 === se ? void 0 : se.error);
                                    case 97:
                                        e.next = 124;
                                        break;
                                    case 99:
                                        if (!n) {
                                            e.next = 113;
                                            break
                                        }
                                        if (!l) {
                                            e.next = 107;
                                            break
                                        }
                                        return e.next = 103, m.f6.request(v(), {
                                            tagSlug: i
                                        });
                                    case 103:
                                        fe = e.sent, null !== (ce = fe.unfollowCompanyResult) && void 0 !== ce && ce.ok && E({
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug === i && e.isCompany ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            }))
                                        }), e.next = 111;
                                        break;
                                    case 107:
                                        return e.next = 109, m.f6.request(s(), {
                                            userSlug: i
                                        });
                                    case 109:
                                        ve = e.sent, null !== (de = ve.followUserResult) && void 0 !== de && de.ok ? E({
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !1,
                                                    isMutualFollowing: !1
                                                }) : e
                                            }))
                                        }) : w.y.error(null === (pe = ve.followUserResult) || void 0 === pe ? void 0 : pe.error);
                                    case 111:
                                        e.next = 124;
                                        break;
                                    case 113:
                                        if (!l) {
                                            e.next = 120;
                                            break
                                        }
                                        return e.next = 116, m.f6.request(g(), {
                                            tagSlug: i
                                        });
                                    case 116:
                                        me = e.sent, null !== (ge = me.followCompanyResult) && void 0 !== ge && ge.ok ? E({
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug === i && e.isCompany ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0
                                                }) : e
                                            }))
                                        }) : w.y.error(null === (we = me.followCompanyResult) || void 0 === we ? void 0 : we.error), e.next = 124;
                                        break;
                                    case 120:
                                        return e.next = 122, m.f6.request(f(), {
                                            userSlug: i
                                        });
                                    case 122:
                                        be = e.sent, null !== (ye = be.followUserResult) && void 0 !== ye && ye.ok ? E({
                                            followingUsers: d.map((function(e) {
                                                return e.userSlug === i ? S(S({}, e), {}, {
                                                    isFollowedByMe: !0
                                                }) : e
                                            }))
                                        }) : w.y.error(null === (Oe = be.followUserResult) || void 0 === Oe ? void 0 : Oe.error);
                                    case 124:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
            }
        },
        18071: function(e, n, t) {
            "use strict";
            t.d(n, {
                G: function() {
                    return c
                },
                i: function() {
                    return s
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var o = t(4676),
                r = (t(72029), t(3135)),
                i = t(90074),
                l = t(11288);

            function u(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(t), !0).forEach((function(n) {
                        (0, o.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var s = function(e, n) {
                    return (0, i.HU$)(l.f6, {
                        userSlug: e
                    }, n)
                },
                c = function(e, n) {
                    return (0, r.THw)(l.f6, {
                        username: e
                    }, a(a({}, n), {}, {
                        select: function(e) {
                            if (!e.matchedUser) return null;
                            var n = e.matchedUser,
                                t = n.profile,
                                o = n.username,
                                r = n.contestBadge;
                            return {
                                username: o,
                                githubUrl: n.githubUrl || "",
                                twitterUrl: n.twitterUrl || "",
                                linkedinUrl: n.linkedinUrl || "",
                                contestBadge: {
                                    name: (null === r || void 0 === r ? void 0 : r.name) || "",
                                    icon: (null === r || void 0 === r ? void 0 : r.icon) || "",
                                    expired: Boolean(null === r || void 0 === r ? void 0 : r.expired),
                                    hoverText: (null === r || void 0 === r ? void 0 : r.hoverText) || ""
                                },
                                userAvatar: (null === t || void 0 === t ? void 0 : t.userAvatar) || "",
                                ranking: (null === t || void 0 === t ? void 0 : t.ranking) || 0,
                                realName: (null === t || void 0 === t ? void 0 : t.realName) || "",
                                aboutMe: (null === t || void 0 === t ? void 0 : t.aboutMe) || "",
                                school: (null === t || void 0 === t ? void 0 : t.school) || "",
                                websites: (null === t || void 0 === t ? void 0 : t.websites) || [],
                                countryName: (null === t || void 0 === t ? void 0 : t.countryName) || "",
                                company: (null === t || void 0 === t ? void 0 : t.company) || "",
                                jobTitle: (null === t || void 0 === t ? void 0 : t.jobTitle) || "",
                                skillTags: (null === t || void 0 === t ? void 0 : t.skillTags) || [],
                                postViewCount: (null === t || void 0 === t ? void 0 : t.postViewCount) || 0,
                                postViewCountDiff: (null === t || void 0 === t ? void 0 : t.postViewCountDiff) || 0,
                                reputation: (null === t || void 0 === t ? void 0 : t.reputation) || 0,
                                reputationDiff: (null === t || void 0 === t ? void 0 : t.reputationDiff) || 0,
                                solutionCount: (null === t || void 0 === t ? void 0 : t.solutionCount) || 0,
                                solutionCountDiff: (null === t || void 0 === t ? void 0 : t.solutionCountDiff) || 0,
                                categoryDiscussCount: (null === t || void 0 === t ? void 0 : t.categoryDiscussCount) || 0,
                                categoryDiscussCountDiff: (null === t || void 0 === t ? void 0 : t.categoryDiscussCountDiff) || 0
                            }
                        }
                    }))
                }
        }
    }
]);