"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7778], {
        7778: function(n, e, t) {
            t.d(e, {
                $: function() {
                    return g
                }
            });
            var i = t(64386),
                o = t(79216),
                u = t(11288),
                r = t(3135),
                s = function() {
                    return (0, r.m)(u.f6)
                },
                a = t(40682),
                l = t(6387),
                c = t(59564),
                d = t(11754),
                g = function() {
                    var n = (0, o.$G)("common").t,
                        e = (0, a.U)().data,
                        t = s().mutateAsync,
                        u = (null === e || void 0 === e ? void 0 : e.userStatus) || {},
                        r = u.isSignedIn,
                        g = u.checkedInToday;
                    return (0, i.useEffect)((function() {
                        r && !g && t({}).then((function(e) {
                            var t, i;
                            null !== e && void 0 !== e && null !== (t = e.checkin) && void 0 !== t && t.ok && null !== e && void 0 !== e && null !== (i = e.checkin) && void 0 !== i && i.checkedIn && l.y.plain((0, d.jsxs)("div", {
                                children: [(0, d.jsx)("img", {
                                    src: c.Z,
                                    width: "18px",
                                    height: "18px",
                                    className: "mr-2 inline-block",
                                    alt: n("dailyCheckIn")
                                }), (0, d.jsx)("span", {
                                    children: n("dailyCheckIn")
                                })]
                            }))
                        }))
                    }), [r, g]), null
                }
        },
        3135: function(n, e, t) {
            t.d(e, {
                DyG: function() {
                    return un
                },
                HbD: function() {
                    return ot
                },
                Kh6: function() {
                    return xu
                },
                Kt6: function() {
                    return Un
                },
                PXf: function() {
                    return Qu
                },
                THw: function() {
                    return Ro
                },
                VTO: function() {
                    return Bu
                },
                X_J: function() {
                    return Bo
                },
                c5Q: function() {
                    return O
                },
                j3L: function() {
                    return Gu
                },
                lZH: function() {
                    return Et
                },
                m: function() {
                    return Pn
                },
                mZI: function() {
                    return Y
                },
                oGk: function() {
                    return Xt
                },
                ohk: function() {
                    return Fu
                },
                qeS: function() {
                    return g
                },
                rbw: function() {
                    return Ru
                },
                sR7: function() {
                    return jt
                },
                ukg: function() {
                    return qn
                },
                xTF: function() {
                    return Ou
                },
                z$1: function() {
                    return Vt
                }
            });
            var i, o, u, r, s, a, l, c, d, g, m, y, f, A, S, p, _, v, T, I, P, C, $, q, b, h, D, E, N, L, k, R, K, O, M, B, G, U, Q, w, F, V, H, W, x, Y, J, Z, j, z, X, nn, en, tn, on, un, rn, sn, an, ln, cn, dn, gn, mn, yn = t(19129),
                fn = t(22980),
                An = t.n(fn),
                Sn = (t(43969), t(91518), t(58935), t(11651)),
                pn = t(87455);

            function _n(n, e, t, i) {
                return (0, yn.Z)(An().mark((function o() {
                    return An().wrap((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return o.abrupt("return", n.request({
                                    document: e,
                                    variables: t,
                                    requestHeaders: i
                                }));
                            case 1:
                            case "end":
                                return o.stop()
                        }
                    }), o)
                })))
            }! function(n) {
                n.AuthenticationAccountRecovery = "authentication_account_recovery", n.AuthenticationIgnoreBetaUserFlow = "authentication_ignore_beta_user_flow", n.AuthenticationMockUser = "authentication_mock_user", n.AuthenticationMutateArchiveUser = "authentication_mutate_archive_user", n.AuthenticationQueryArchivedUsers = "authentication_query_archived_users", n.AuthenticationQueryUserInfo = "authentication_query_user_info", n.AuthenticationSeeUserEmail = "authentication_see_user_email", n.AuthenticationSeeUserId = "authentication_see_user_id", n.AuthenticationSeeUserManagement = "authentication_see_user_management", n.AuthenticationUpdateSchoolInfo = "authentication_update_school_info", n.CommonChangeTag = "common_change_tag", n.ContestPrivateAccessDashboard = "contest_private_access_dashboard", n.ContestSeeAll = "contest_see_all", n.ContestSeePrivate = "contest_see_private", n.ContestSeePrivateRanking = "contest_see_private_ranking", n.ContestSeePrivateWithoutRegistration = "contest_see_private_without_registration", n.ContributionAcceptReject = "contribution_accept_reject", n.ContributionSeeDashboard = "contribution_see_dashboard", n.DangerZoneViewAdmin = "danger_zone_view_admin", n.DebuggerBetaAccess = "debugger_beta_access", n.DiscussChangeContestPost = "discuss_change_contest_post", n.DiscussChangePost = "discuss_change_post", n.DiscussDeleteContestPost = "discuss_delete_contest_post", n.DiscussDeletePost = "discuss_delete_post", n.DiscussGetAllPosts = "discuss_get_all_posts", n.DiscussHidePost = "discuss_hide_post", n.DiscussMarkSpammer = "discuss_mark_spammer", n.DiscussPinContestTopic = "discuss_pin_contest_topic", n.DiscussPinTopic = "discuss_pin_topic", n.DiscussReviewContestPost = "discuss_review_contest_post", n.DiscussReviewPost = "discuss_review_post", n.DiscussSeeContestUnpublishedPost = "discuss_see_contest_unpublished_post", n.DiscussSeeHiddenPost = "discuss_see_hidden_post", n.DiscussSeeUnpublishedPost = "discuss_see_unpublished_post", n.EmailBatch = "email_batch", n.EmailBatchCreateEvent = "email_batch_create_event", n.EmailBatchSendCustom = "email_batch_send_custom", n.LibraryChangeQuestion = "library_change_question", n.LibraryChangeQuestionCategory = "library_change_question_category", n.LibraryContentAccess = "library_content_access", n.LibraryContentEditor = "library_content_editor", n.LibrarySeeAllFields = "library_see_all_fields", n.LibrarySeeAllProblems = "library_see_all_problems", n.Manage = "manage", n.ManageBlacklistedWords = "manage_blacklisted_words", n.ManageDiscuss = "manage_discuss", n.ManageOfficialSolutionFeedback = "manage_official_solution_feedback", n.ManageTagCategories = "manage_tag_categories", n.ManageTagGroups = "manage_tag_groups", n.ManageTags = "manage_tags", n.ProblemsetUseTestMode = "problemset_use_test_mode", n.ScoreMutateGiveLeetcoin = "score_mutate_give_leetcoin", n.ScoreSeeAdminPanel = "score_see_admin_panel", n.SubmissionAccessDiffTool = "submission_access_diff_tool", n.SubmissionSeeDetails = "submission_see_details"
            }(i || (i = {})),
            function(n) {
                n.All = "ALL", n.Unviewed = "UNVIEWED", n.Viewed = "VIEWED"
            }(o || (o = {})),
            function(n) {
                n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7"
            }(u || (u = {})),
            function(n) {
                n.Annual = "ANNUAL", n.Competition = "COMPETITION", n.Dcc = "DCC", n.StudyPlan = "STUDY_PLAN"
            }(r || (r = {})),
            function(n) {
                n.Basic = "BASIC", n.Edge = "EDGE", n.Performance = "PERFORMANCE"
            }(s || (s = {})),
            function(n) {
                n.Daily = "DAILY", n.Weekly = "WEEKLY"
            }(a || (a = {})),
            function(n) {
                n.Best = "best", n.Hot = "hot", n.MostRelevant = "most_relevant", n.MostVotes = "most_votes", n.NewestToOldest = "newest_to_oldest", n.OldestToNewest = "oldest_to_newest"
            }(l || (l = {})),
            function(n) {
                n.OnlineAssessment = "ONLINE_ASSESSMENT", n.OnsiteInterview = "ONSITE_INTERVIEW", n.PhoneInterview = "PHONE_INTERVIEW"
            }(c || (c = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2"
            }(d || (d = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2"
            }(g || (g = {})),
            function(n) {
                n.Easy = "EASY", n.Hard = "HARD", n.Medium = "MEDIUM"
            }(m || (m = {})),
            function(n) {
                n.Easy = "EASY", n.Hard = "HARD", n.Medium = "MEDIUM"
            }(y || (y = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2"
            }(f || (f = {})),
            function(n) {
                n.Dummy = "DUMMY"
            }(A || (A = {})),
            function(n) {
                n.CodeAutocompleteTour = "CODE_AUTOCOMPLETE_TOUR", n.NewIdeDynamicLayout = "NEW_IDE_DYNAMIC_LAYOUT", n.NewQdDetailTour = "NEW_QD_DETAIL_TOUR", n.Other = "OTHER", n.QuestionDetailTour = "QUESTION_DETAIL_TOUR", n.QuestionDetailTourWithAutocomplete = "QUESTION_DETAIL_TOUR_WITH_AUTOCOMPLETE"
            }(S || (S = {})),
            function(n) {
                n.CreationDate = "CREATION_DATE", n.Rate = "RATE"
            }(p || (p = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3"
            }(_ || (_ = {})),
            function(n) {
                n.Approved = "APPROVED", n.EditRequested = "EDIT_REQUESTED", n.Flagged = "FLAGGED", n.Removed = "REMOVED"
            }(v || (v = {})),
            function(n) {
                n.FirstFlaggedTime = "FIRST_FLAGGED_TIME", n.FlaggedCount = "FLAGGED_COUNT"
            }(T || (T = {})),
            function(n) {
                n.ContestDiscussAdmin = "contest_discuss_admin", n.DiscussAdmin = "discuss_admin", n.Everyone = "everyone", n.InternalContestOrganizer = "internal_contest_organizer", n.InternalContestParticipant = "internal_contest_participant", n.LibraryAdmin = "library_admin"
            }(I || (I = {})),
            function(n) {
                n.Completed = "COMPLETED", n.Delayed = "DELAYED", n.NeedsData = "NEEDS_DATA", n.Processing = "PROCESSING", n.Skipped = "SKIPPED"
            }(P || (P = {})),
            function(n) {
                n.Attempted = "ATTEMPTED", n.Solved = "SOLVED", n.ToDo = "TO_DO"
            }(C || (C = {})),
            function(n) {
                n.IncorrectPassword = "INCORRECT_PASSWORD", n.MissingAlphaOrNumeric = "MISSING_ALPHA_OR_NUMERIC", n.PasswordTooCommon = "PASSWORD_TOO_COMMON", n.PasswordTooLong = "PASSWORD_TOO_LONG", n.PasswordTooShort = "PASSWORD_TOO_SHORT"
            }($ || ($ = {})),
            function(n) {
                n.Attempted = "ATTEMPTED", n.PastSolved = "PAST_SOLVED", n.Solved = "SOLVED", n.ToDo = "TO_DO"
            }(q || (q = {})),
            function(n) {
                n.Completed = "COMPLETED", n.Deleted = "DELETED", n.OnGoing = "ON_GOING", n.Quitted = "QUITTED"
            }(b || (b = {})),
            function(n) {
                n.History = "HISTORY", n.OnGoing = "ON_GOING"
            }(h || (h = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11", n.A_12 = "A_12", n.A_13 = "A_13", n.A_14 = "A_14", n.A_15 = "A_15", n.A_16 = "A_16", n.A_17 = "A_17", n.A_18 = "A_18", n.A_19 = "A_19", n.A_20 = "A_20", n.A_21 = "A_21", n.A_22 = "A_22", n.A_23 = "A_23", n.A_24 = "A_24", n.A_25 = "A_25", n.A_26 = "A_26", n.A_27 = "A_27", n.A_28 = "A_28"
            }(D || (D = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11", n.A_12 = "A_12", n.A_13 = "A_13", n.A_14 = "A_14", n.A_15 = "A_15", n.A_16 = "A_16", n.A_17 = "A_17", n.A_18 = "A_18", n.A_19 = "A_19", n.A_20 = "A_20", n.A_21 = "A_21", n.A_22 = "A_22", n.A_23 = "A_23", n.A_24 = "A_24", n.A_25 = "A_25", n.A_26 = "A_26", n.A_27 = "A_27", n.A_28 = "A_28"
            }(E || (E = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11", n.A_12 = "A_12", n.A_13 = "A_13", n.A_14 = "A_14", n.A_15 = "A_15", n.A_16 = "A_16", n.A_17 = "A_17", n.A_18 = "A_18", n.A_19 = "A_19", n.A_20 = "A_20", n.A_21 = "A_21", n.A_22 = "A_22", n.A_23 = "A_23", n.A_24 = "A_24", n.A_25 = "A_25", n.A_26 = "A_26", n.A_27 = "A_27", n.A_28 = "A_28"
            }(N || (N = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11", n.A_12 = "A_12", n.A_13 = "A_13", n.A_14 = "A_14", n.A_15 = "A_15", n.A_16 = "A_16", n.A_17 = "A_17", n.A_18 = "A_18", n.A_19 = "A_19", n.A_20 = "A_20", n.A_21 = "A_21", n.A_22 = "A_22", n.A_23 = "A_23", n.A_24 = "A_24", n.A_25 = "A_25", n.A_26 = "A_26", n.A_27 = "A_27", n.A_28 = "A_28"
            }(L || (L = {})),
            function(n) {
                n.All = "ALL", n.Deleted = "DELETED", n.Hidden = "HIDDEN", n.NeedUpdate = "NEED_UPDATE", n.Open = "OPEN", n.Pending = "PENDING", n.Reviewed = "REVIEWED"
            }(k || (k = {})),
            function(n) {
                n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11"
            }(R || (R = {})),
            function(n) {
                n.InvalidAboutMe = "INVALID_ABOUT_ME", n.InvalidBirthday = "INVALID_BIRTHDAY", n.InvalidCompany = "INVALID_COMPANY", n.InvalidGithubUrl = "INVALID_GITHUB_URL", n.InvalidJobTitle = "INVALID_JOB_TITLE", n.InvalidLinkedinUrl = "INVALID_LINKEDIN_URL", n.InvalidLocation = "INVALID_LOCATION", n.InvalidRealName = "INVALID_REAL_NAME", n.InvalidSchool = "INVALID_SCHOOL", n.InvalidSkillTags = "INVALID_SKILL_TAGS", n.InvalidWebsite = "INVALID_WEBSITE"
            }(K || (K = {})),
            function(n) {
                n.Difficulty = "DIFFICULTY", n.FrontendId = "FRONTEND_ID", n.LastSolved = "LAST_SOLVED", n.TotalSolves = "TOTAL_SOLVES", n.WrongAttempts = "WRONG_ATTEMPTS"
            }(O || (O = {})),
            function(n) {
                n.Accepted = "ACCEPTED", n.Attempted = "ATTEMPTED", n.Unattempted = "UNATTEMPTED"
            }(M || (M = {})),
            function(n) {
                n.Published = "PUBLISHED", n.Unknown = "UNKNOWN", n.Unpublished = "UNPUBLISHED"
            }(B || (B = {})),
            function(n) {
                n.AcRate = "AC_RATE", n.Difficulty = "DIFFICULTY", n.Frequency = "FREQUENCY", n.FrontendId = "FRONTEND_ID", n.SolutionNum = "SOLUTION_NUM"
            }(G || (G = {})),
            function(n) {
                n.LastCreate = "LAST_CREATE", n.LastModified = "LAST_MODIFIED"
            }(U || (U = {})),
            function(n) {
                n.Abuse = "ABUSE", n.Advertising = "ADVERTISING", n.All = "ALL", n.Fake = "FAKE", n.Illegal = "ILLEGAL", n.NonEnglish = "NON_ENGLISH", n.Other = "OTHER", n.Politics = "POLITICS", n.Sexual = "SEXUAL", n.Terrorism = "TERRORISM", n.Violent = "VIOLENT"
            }(Q || (Q = {})),
            function(n) {
                n.All = "ALL", n.ReportedHandled = "REPORTED_HANDLED", n.ReportedUnhandled = "REPORTED_UNHANDLED"
            }(w || (w = {})),
            function(n) {
                n.Dummy = "DUMMY"
            }(F || (F = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11", n.A_12 = "A_12", n.A_13 = "A_13", n.A_14 = "A_14", n.A_15 = "A_15", n.A_16 = "A_16", n.A_17 = "A_17", n.A_18 = "A_18", n.A_19 = "A_19", n.A_20 = "A_20", n.A_21 = "A_21", n.A_22 = "A_22", n.A_23 = "A_23", n.A_24 = "A_24", n.A_25 = "A_25", n.A_26 = "A_26", n.A_27 = "A_27", n.A_28 = "A_28", n.A_29 = "A_29", n.A_30 = "A_30", n.A_31 = "A_31", n.A_32 = "A_32", n.A_33 = "A_33", n.A_34 = "A_34", n.A_100 = "A_100"
            }(V || (V = {})),
            function(n) {
                n.Body = "BODY", n.Comment = "COMMENT", n.Reply = "REPLY", n.Title = "TITLE"
            }(H || (H = {})),
            function(n) {
                n.Accepted = "ACCEPTED", n.Exited = "EXITED", n.Started = "STARTED", n.Timeout = "TIMEOUT"
            }(W || (W = {})),
            function(n) {
                n.Ascending = "ASCENDING", n.Descending = "DESCENDING"
            }(x || (x = {})),
            function(n) {
                n.Ascending = "ASCENDING", n.Descending = "DESCENDING"
            }(Y || (Y = {})),
            function(n) {
                n.Blue = "BLUE", n.Green = "GREEN", n.Orange = "ORANGE", n.Purple = "PURPLE", n.Red = "RED", n.White = "WHITE"
            }(J || (J = {})),
            function(n) {
                n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11"
            }(Z || (Z = {})),
            function(n) {
                n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4", n.A_5 = "A_5", n.A_6 = "A_6", n.A_7 = "A_7", n.A_8 = "A_8", n.A_9 = "A_9", n.A_10 = "A_10", n.A_11 = "A_11"
            }(j || (j = {})),
            function(n) {
                n.A_0 = "A_0", n.A_1 = "A_1", n.A_2 = "A_2", n.A_3 = "A_3", n.A_4 = "A_4"
            }(z || (z = {})),
            function(n) {
                n.MockInterview = "MOCK_INTERVIEW"
            }(X || (X = {})),
            function(n) {
                n.Company = "COMPANY", n.Skill = "SKILL", n.Topic = "TOPIC"
            }(nn || (nn = {})),
            function(n) {
                n.Hot = "hot", n.MostPosts = "most_posts", n.MostRelevant = "most_relevant", n.MostVotes = "most_votes", n.NewestToOldest = "newest_to_oldest", n.OldestToNewest = "oldest_to_newest", n.RecentActivity = "recent_activity"
            }(en || (en = {})),
            function(n) {
                n.A_0 = "A_0"
            }(tn || (tn = {})),
            function(n) {
                n.Down = "DOWN", n.None = "NONE", n.Up = "UP"
            }(on || (on = {})),
            function(n) {
                n.AiHelper = "AI_HELPER", n.BetaUserFlow = "BETA_USER_FLOW", n.FrontendCategory = "FRONTEND_CATEGORY", n.LcIde = "LC_IDE", n.LcIdeV2 = "LC_IDE_V2", n.NewPlanRankBoardAccess = "NEW_PLAN_RANK_BOARD_ACCESS", n.NewProblemlistPage = "NEW_PROBLEMLIST_PAGE", n.NewProblemDetailPage = "NEW_PROBLEM_DETAIL_PAGE", n.NewProfilePage = "NEW_PROFILE_PAGE", n.NewStudyPlanAccess = "NEW_STUDY_PLAN_ACCESS", n.NewSubscribePage = "NEW_SUBSCRIBE_PAGE"
            }(un || (un = {})),
            function(n) {
                n.BasicInfo = "BASIC_INFO", n.DesiredJob = "DESIRED_JOB", n.InterviewPrepTime = "INTERVIEW_PREP_TIME"
            }(rn || (rn = {})),
            function(n) {
                n.Advanced = "ADVANCED", n.Beginner = "BEGINNER", n.Expert = "EXPERT", n.Intermediate = "INTERMEDIATE"
            }(sn || (sn = {})),
            function(n) {
                n.All = "ALL", n.Interview = "INTERVIEW", n.Study = "STUDY"
            }(an || (an = {})),
            function(n) {
                n.Finish = "Finish", n.NotStart = "NotStart"
            }(ln || (ln = {})),
            function(n) {
                n.Finish = "Finish", n.NotStart = "NotStart"
            }(cn || (cn = {})),
            function(n) {
                n.Ad = "AD", n.Ae = "AE", n.Af = "AF", n.Ag = "AG", n.Ai = "AI", n.Al = "AL", n.Am = "AM", n.Ao = "AO", n.Aq = "AQ", n.Ar = "AR", n.As = "AS", n.At = "AT", n.Au = "AU", n.Aw = "AW", n.Ax = "AX", n.Az = "AZ", n.Ba = "BA", n.Bb = "BB", n.Bd = "BD", n.Be = "BE", n.Bf = "BF", n.Bg = "BG", n.Bh = "BH", n.Bi = "BI", n.Bj = "BJ", n.Bl = "BL", n.Bm = "BM", n.Bn = "BN", n.Bo = "BO", n.Bq = "BQ", n.Br = "BR", n.Bs = "BS", n.Bt = "BT", n.Bv = "BV", n.Bw = "BW", n.By = "BY", n.Bz = "BZ", n.Ca = "CA", n.Cc = "CC", n.Cd = "CD", n.Cf = "CF", n.Cg = "CG", n.Ch = "CH", n.Ci = "CI", n.Ck = "CK", n.Cl = "CL", n.Cm = "CM", n.Cn = "CN", n.Co = "CO", n.Cr = "CR", n.Cu = "CU", n.Cv = "CV", n.Cw = "CW", n.Cx = "CX", n.Cy = "CY", n.Cz = "CZ", n.De = "DE", n.Dj = "DJ", n.Dk = "DK", n.Dm = "DM", n.Do = "DO", n.Dz = "DZ", n.Ec = "EC", n.Ee = "EE", n.Eg = "EG", n.Eh = "EH", n.Er = "ER", n.Es = "ES", n.Et = "ET", n.Fi = "FI", n.Fj = "FJ", n.Fk = "FK", n.Fm = "FM", n.Fo = "FO", n.Fr = "FR", n.Ga = "GA", n.Gb = "GB", n.Gd = "GD", n.Ge = "GE", n.Gf = "GF", n.Gg = "GG", n.Gh = "GH", n.Gi = "GI", n.Gl = "GL", n.Gm = "GM", n.Gn = "GN", n.Gp = "GP", n.Gq = "GQ", n.Gr = "GR", n.Gs = "GS", n.Gt = "GT", n.Gu = "GU", n.Gw = "GW", n.Gy = "GY", n.Hk = "HK", n.Hm = "HM", n.Hn = "HN", n.Hr = "HR", n.Ht = "HT", n.Hu = "HU", n.Id = "ID", n.Ie = "IE", n.Il = "IL", n.Im = "IM", n.In = "IN", n.Io = "IO", n.Iq = "IQ", n.Ir = "IR", n.Is = "IS", n.It = "IT", n.Je = "JE", n.Jm = "JM", n.Jo = "JO", n.Jp = "JP", n.Ke = "KE", n.Kg = "KG", n.Kh = "KH", n.Ki = "KI", n.Km = "KM", n.Kn = "KN", n.Kp = "KP", n.Kr = "KR", n.Kw = "KW", n.Ky = "KY", n.Kz = "KZ", n.La = "LA", n.Lb = "LB", n.Lc = "LC", n.Li = "LI", n.Lk = "LK", n.Lr = "LR", n.Ls = "LS", n.Lt = "LT", n.Lu = "LU", n.Lv = "LV", n.Ly = "LY", n.Ma = "MA", n.Mc = "MC", n.Md = "MD", n.Me = "ME", n.Mf = "MF", n.Mg = "MG", n.Mh = "MH", n.Mk = "MK", n.Ml = "ML", n.Mm = "MM", n.Mn = "MN", n.Mo = "MO", n.Mp = "MP", n.Mq = "MQ", n.Mr = "MR", n.Ms = "MS", n.Mt = "MT", n.Mu = "MU", n.Mv = "MV", n.Mw = "MW", n.Mx = "MX", n.My = "MY", n.Mz = "MZ", n.Na = "NA", n.Nc = "NC", n.Ne = "NE", n.Nf = "NF", n.Ng = "NG", n.Ni = "NI", n.Nl = "NL", n.No = "NO", n.Np = "NP", n.Nr = "NR", n.Nu = "NU", n.Nz = "NZ", n.Om = "OM", n.Pa = "PA", n.Pe = "PE", n.Pf = "PF", n.Pg = "PG", n.Ph = "PH", n.Pk = "PK", n.Pl = "PL", n.Pm = "PM", n.Pn = "PN", n.Pr = "PR", n.Ps = "PS", n.Pt = "PT", n.Pw = "PW", n.Py = "PY", n.Qa = "QA", n.Re = "RE", n.Ro = "RO", n.Rs = "RS", n.Ru = "RU", n.Rw = "RW", n.Sa = "SA", n.Sb = "SB", n.Sc = "SC", n.Sd = "SD", n.Se = "SE", n.Sg = "SG", n.Sh = "SH", n.Si = "SI", n.Sj = "SJ", n.Sk = "SK", n.Sl = "SL", n.Sm = "SM", n.Sn = "SN", n.So = "SO", n.Sr = "SR", n.Ss = "SS", n.St = "ST", n.Sv = "SV", n.Sx = "SX", n.Sy = "SY", n.Sz = "SZ", n.Tc = "TC", n.Td = "TD", n.Tf = "TF", n.Tg = "TG", n.Th = "TH", n.Tj = "TJ", n.Tk = "TK", n.Tl = "TL", n.Tm = "TM", n.Tn = "TN", n.To = "TO", n.Tr = "TR", n.Tt = "TT", n.Tv = "TV", n.Tw = "TW", n.Tz = "TZ", n.Ua = "UA", n.Ug = "UG", n.Um = "UM", n.Us = "US", n.Uy = "UY", n.Uz = "UZ", n.Va = "VA", n.Vc = "VC", n.Ve = "VE", n.Vg = "VG", n.Vi = "VI", n.Vn = "VN", n.Vu = "VU", n.Wf = "WF", n.Ws = "WS", n.Ye = "YE", n.Yt = "YT", n.Za = "ZA", n.Zm = "ZM", n.Zw = "ZW"
            }(dn || (dn = {})),
            function(n) {
                n.A_1 = "A_1", n.A_2 = "A_2"
            }(gn || (gn = {})),
            function(n) {
                n.Ac = "AC", n.NotStarted = "NOT_STARTED", n.Tried = "TRIED"
            }(mn || (mn = {}));
            var vn = "\n    fragment DiscussPost on PostNode {\n  id\n  voteCount\n  voteStatus\n  content\n  updationDate\n  creationDate\n  status\n  isHidden\n  coinRewards {\n    id\n    score\n    description\n    date\n  }\n  author {\n    isDiscussAdmin\n    isDiscussStaff\n    username\n    nameColor\n    activeBadge {\n      displayName\n      icon\n    }\n    profile {\n      userAvatar\n      reputation\n    }\n    isActive\n  }\n  authorIsModerator\n  isOwnPost\n}\n    ",
                Tn = "\n    query siteAnnouncements {\n  siteAnnouncements {\n    title\n    content\n    blacklistUrls\n    whitelistUrls\n    navbarItem\n  }\n}\n    ",
                In = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["siteAnnouncements"] : ["siteAnnouncements", e], _n(n, Tn, e, i), t)
                };
            In.document = Tn, In.getKey = function(n) {
                return void 0 === n ? ["siteAnnouncements"] : ["siteAnnouncements", n]
            };
            var Pn = function(n, e, t) {
                    return (0, pn.D)(["dailyCheckin"], (function(e) {
                        return _n(n, "\n    mutation dailyCheckin {\n  checkin {\n    checkedIn\n    ok\n    error\n  }\n}\n    ", e, t)()
                    }), e)
                },
                Cn = "\n    query currentTimestamp {\n  currentTimestamp\n}\n    ",
                $n = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["currentTimestamp"] : ["currentTimestamp", e], _n(n, Cn, e, i), t)
                };
            $n.document = Cn, $n.getKey = function(n) {
                return void 0 === n ? ["currentTimestamp"] : ["currentTimestamp", n]
            };
            var qn = function(n, e, t) {
                    return (0, pn.D)(["updateBetaParticipation"], (function(e) {
                        return _n(n, "\n    mutation updateBetaParticipation($optIn: Boolean!, $participationType: Type!) {\n  updateBetaParticipation(optIn: $optIn, participationType: $participationType) {\n    ok\n    error\n    userStatus {\n      optedIn\n    }\n  }\n}\n    ", e, t)()
                    }), e)
                },
                bn = "\n    query codingChallengeMedal($year: Int!, $month: Int!) {\n  dailyChallengeMedal(year: $year, month: $month) {\n    name\n    config {\n      icon\n    }\n  }\n}\n    ",
                hn = function(n, e, t, i) {
                    return (0, Sn.a)(["codingChallengeMedal", e], _n(n, bn, e, i), t)
                };
            hn.document = bn, hn.getKey = function(n) {
                return ["codingChallengeMedal", n]
            };
            var Dn = "\n    query dailyCodingQuestionRecords($year: Int!, $month: Int!) {\n  dailyCodingChallengeV2(year: $year, month: $month) {\n    challenges {\n      date\n      userStatus\n      link\n      question {\n        questionFrontendId\n        title\n        titleSlug\n      }\n    }\n    weeklyChallenges {\n      date\n      userStatus\n      link\n      question {\n        questionFrontendId\n        title\n        titleSlug\n      }\n    }\n  }\n}\n    ",
                En = function(n, e, t, i) {
                    return (0, Sn.a)(["dailyCodingQuestionRecords", e], _n(n, Dn, e, i), t)
                };
            En.document = Dn, En.getKey = function(n) {
                return ["dailyCodingQuestionRecords", n]
            };
            var Nn = "\n    query timeTravelTicketInfo {\n  validTimeTravelTicketCount\n  redeemedTimeTravelTicketCount\n}\n    ",
                Ln = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["timeTravelTicketInfo"] : ["timeTravelTicketInfo", e], _n(n, Nn, e, i), t)
                };
            Ln.document = Nn, Ln.getKey = function(n) {
                return void 0 === n ? ["timeTravelTicketInfo"] : ["timeTravelTicketInfo", n]
            };
            var kn = "\n    query getStreakCounter {\n  streakCounter {\n    streakCount\n    daysSkipped\n    currentDayCompleted\n  }\n}\n    ",
                Rn = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["getStreakCounter"] : ["getStreakCounter", e], _n(n, kn, e, i), t)
                };
            Rn.document = kn, Rn.getKey = function(n) {
                return void 0 === n ? ["getStreakCounter"] : ["getStreakCounter", n]
            };
            var Kn = "\n    query getUserProfile($username: String!) {\n  matchedUser(username: $username) {\n    activeBadge {\n      displayName\n      icon\n    }\n  }\n}\n    ",
                On = function(n, e, t, i) {
                    return (0, Sn.a)(["getUserProfile", e], _n(n, Kn, e, i), t)
                };
            On.document = Kn, On.getKey = function(n) {
                return ["getUserProfile", n]
            };
            var Mn = "\n    query fetchNotifications($first: Int!, $after: String) {\n  notifications(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        notificationId\n        modifiedDate\n        actioned\n        notificationData {\n          id\n          content\n          type\n          metadata\n        }\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n    ",
                Bn = function(n, e, t, i) {
                    return (0, Sn.a)(["fetchNotifications", e], _n(n, Mn, e, i), t)
                };
            Bn.document = Mn, Bn.getKey = function(n) {
                return ["fetchNotifications", n]
            };
            var Gn = "\n    query upcOnboardingStatus {\n  didCompleteUpc\n  user {\n    joinedTimestamp\n  }\n}\n    ",
                Un = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["upcOnboardingStatus"] : ["upcOnboardingStatus", e], _n(n, Gn, e, i), t)
                };
            Un.document = Gn, Un.getKey = function(n) {
                return void 0 === n ? ["upcOnboardingStatus"] : ["upcOnboardingStatus", n]
            };
            var Qn = "\n    query allLeetcodePlaygroundTemplates {\n  allLeetcodePlaygroundTemplates {\n    name\n    nameSlug\n  }\n}\n    ",
                wn = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["allLeetcodePlaygroundTemplates"] : ["allLeetcodePlaygroundTemplates", e], _n(n, Qn, e, i), t)
                };
            wn.document = Qn, wn.getKey = function(n) {
                return void 0 === n ? ["allLeetcodePlaygroundTemplates"] : ["allLeetcodePlaygroundTemplates", n]
            };
            var Fn = "\n    query myPlaygroundState {\n  myPlaygroundState {\n    createdNum\n    upperLimitToCreate\n  }\n}\n    ",
                Vn = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["myPlaygroundState"] : ["myPlaygroundState", e], _n(n, Fn, e, i), t)
                };
            Vn.document = Fn, Vn.getKey = function(n) {
                return void 0 === n ? ["myPlaygroundState"] : ["myPlaygroundState", n]
            };
            var Hn = "\n    query annualReport {\n  userStatus {\n    annualReport {\n      showPopup\n      content\n      badge {\n        displayName\n        medal {\n          slug\n          config {\n            iconGif\n          }\n        }\n      }\n    }\n  }\n}\n    ",
                Wn = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["annualReport"] : ["annualReport", e], _n(n, Hn, e, i), t)
                };
            Wn.document = Hn, Wn.getKey = function(n) {
                return void 0 === n ? ["annualReport"] : ["annualReport", n]
            };
            var xn = "\n    query learningContextName($currentQuestionSlug: String!, $envId: String, $envType: String) {\n  learningContextV2(\n    currentQuestionSlug: $currentQuestionSlug\n    envId: $envId\n    envType: $envType\n    needQuestion: false\n  ) {\n    name\n  }\n}\n    ",
                Yn = function(n, e, t, i) {
                    return (0, Sn.a)(["learningContextName", e], _n(n, xn, e, i), t)
                };
            Yn.document = xn, Yn.getKey = function(n) {
                return ["learningContextName", n]
            };
            var Jn = "\n    query learningContext($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput) {\n  learningContextV2(\n    currentQuestionSlug: $currentQuestionSlug\n    categorySlug: $categorySlug\n    envId: $envId\n    envType: $envType\n    filters: $filters\n  ) {\n    name\n    backLink\n    nextQuestion {\n      difficulty\n      title\n      titleSlug\n      questionFrontendId\n    }\n    previousQuestion {\n      difficulty\n      title\n      titleSlug\n      questionFrontendId\n    }\n  }\n}\n    ",
                Zn = function(n, e, t, i) {
                    return (0, Sn.a)(["learningContext", e], _n(n, Jn, e, i), t)
                };
            Zn.document = Jn, Zn.getKey = function(n) {
                return ["learningContext", n]
            };
            var jn = "\n    query premiumQuestion($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    isPaidOnly\n  }\n}\n    ",
                zn = function(n, e, t, i) {
                    return (0, Sn.a)(["premiumQuestion", e], _n(n, jn, e, i), t)
                };
            zn.document = jn, zn.getKey = function(n) {
                return ["premiumQuestion", n]
            };
            var Xn = "\n    query tabsStatus($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    solutionNum\n    discussionCount\n  }\n}\n    ",
                ne = function(n, e, t, i) {
                    return (0, Sn.a)(["tabsStatus", e], _n(n, Xn, e, i), t)
                };
            ne.document = Xn, ne.getKey = function(n) {
                return ["tabsStatus", n]
            };
            var ee = "\n    query enableAiHelper {\n  feature {\n    enableAiHelper\n  }\n}\n    ",
                te = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["enableAiHelper"] : ["enableAiHelper", e], _n(n, ee, e, i), t)
                };
            te.document = ee, te.getKey = function(n) {
                return void 0 === n ? ["enableAiHelper"] : ["enableAiHelper", n]
            };
            var ie = "\n    query codeWithMemory($questionId: Int!, $lang: String!, $memory: Int!, $skip: Int!) {\n  codeWithMemory(\n    questionId: $questionId\n    lang: $lang\n    memory: $memory\n    skip: $skip\n  ) {\n    code\n    hasPrevious\n    hasNext\n  }\n}\n    ",
                oe = function(n, e, t, i) {
                    return (0, Sn.a)(["codeWithMemory", e], _n(n, ie, e, i), t)
                };
            oe.document = ie, oe.getKey = function(n) {
                return ["codeWithMemory", n]
            };
            var ue = "\n    query codeWithRuntime($questionId: Int!, $lang: String!, $runtime: Int!, $skip: Int!) {\n  codeWithRuntime(\n    questionId: $questionId\n    lang: $lang\n    runtime: $runtime\n    skip: $skip\n  ) {\n    code\n    hasPrevious\n    hasNext\n  }\n}\n    ",
                re = function(n, e, t, i) {
                    return (0, Sn.a)(["codeWithRuntime", e], _n(n, ue, e, i), t)
                };
            re.document = ue, re.getKey = function(n) {
                return ["codeWithRuntime", n]
            };
            var se = "\n    query qdChallengeQuestion($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    challengeQuestion {\n      id\n      date\n      incompleteChallengeCount\n      streakCount\n      type\n    }\n  }\n}\n    ",
                ae = function(n, e, t, i) {
                    return (0, Sn.a)(["qdChallengeQuestion", e], _n(n, se, e, i), t)
                };
            ae.document = se, ae.getKey = function(n) {
                return ["qdChallengeQuestion", n]
            };
            var le = "\n    query usersForMention($topicId: Int!, $usernamePrefix: String!) {\n  topicUsers(topicId: $topicId, prefix: $usernamePrefix) {\n    username\n    profile {\n      realName\n      userSlug\n      userAvatar\n    }\n  }\n}\n    ",
                ce = function(n, e, t, i) {
                    return (0, Sn.a)(["usersForMention", e], _n(n, le, e, i), t)
                };
            ce.document = le, ce.getKey = function(n) {
                return ["usersForMention", n]
            };
            var de = "\n    query consolePanelConfig($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    questionTitle\n    enableDebugger\n    enableRunCode\n    enableSubmit\n    enableTestMode\n    exampleTestcaseList\n    metaData\n  }\n}\n    ",
                ge = function(n, e, t, i) {
                    return (0, Sn.a)(["consolePanelConfig", e], _n(n, de, e, i), t)
                };
            ge.document = de, ge.getKey = function(n) {
                return ["consolePanelConfig", n]
            };
            var me = "\n    query debuggerLanguageFeatures {\n  debuggerLanguageFeatures {\n    lang {\n      name\n    }\n    supportsExpressions\n    supportsDisablingBreakpoints\n    supportsDebugging\n  }\n}\n    ",
                ye = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["debuggerLanguageFeatures"] : ["debuggerLanguageFeatures", e], _n(n, me, e, i), t)
                };
            ye.document = me, ye.getKey = function(n) {
                return void 0 === n ? ["debuggerLanguageFeatures"] : ["debuggerLanguageFeatures", n]
            };
            var fe = "\n    query commonKeyword($slug: String!) {\n  commonKeyword(slug: $slug) {\n    title\n    content\n  }\n}\n    ",
                Ae = function(n, e, t, i) {
                    return (0, Sn.a)(["commonKeyword", e], _n(n, fe, e, i), t)
                };
            Ae.document = fe, Ae.getKey = function(n) {
                return ["commonKeyword", n]
            };
            var Se = "\n    query questionCompanyStats($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    companyTagStats\n  }\n}\n    ",
                pe = function(n, e, t, i) {
                    return (0, Sn.a)(["questionCompanyStats", e], _n(n, Se, e, i), t)
                };
            pe.document = Se, pe.getKey = function(n) {
                return ["questionCompanyStats", n]
            };
            var _e = "\n    query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n    mysqlSchemas\n    dataSchemas\n  }\n}\n    ",
                ve = function(n, e, t, i) {
                    return (0, Sn.a)(["questionContent", e], _n(n, _e, e, i), t)
                };
            ve.document = _e, ve.getKey = function(n) {
                return ["questionContent", n]
            };
            var Te = "\n    query questionDetailCompanyTags($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    companyTags {\n      name\n      slug\n      imgUrl\n    }\n  }\n}\n    ",
                Ie = function(n, e, t, i) {
                    return (0, Sn.a)(["questionDetailCompanyTags", e], _n(n, Te, e, i), t)
                };
            Ie.document = Te, Ie.getKey = function(n) {
                return ["questionDetailCompanyTags", n]
            };
            var Pe = "\n    query questionHints($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    hints\n  }\n}\n    ",
                Ce = function(n, e, t, i) {
                    return (0, Sn.a)(["questionHints", e], _n(n, Pe, e, i), t)
                };
            Ce.document = Pe, Ce.getKey = function(n) {
                return ["questionHints", n]
            };
            var $e = "\n    query questionInterviewOptions {\n  interviewed {\n    companies {\n      id\n      name\n      slug\n    }\n    timeOptions {\n      id\n      name\n    }\n    stageOptions {\n      id\n      name\n    }\n  }\n}\n    ",
                qe = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["questionInterviewOptions"] : ["questionInterviewOptions", e], _n(n, $e, e, i), t)
                };
            qe.document = $e, qe.getKey = function(n) {
                return void 0 === n ? ["questionInterviewOptions"] : ["questionInterviewOptions", n]
            };
            var be = "\n    query questionStats($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    stats\n  }\n}\n    ",
                he = function(n, e, t, i) {
                    return (0, Sn.a)(["questionStats", e], _n(n, be, e, i), t)
                };
            he.document = be, he.getKey = function(n) {
                return ["questionStats", n]
            };
            var De = "\n    query questionTitle($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    title\n    titleSlug\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n    categoryTitle\n  }\n}\n    ",
                Ee = function(n, e, t, i) {
                    return (0, Sn.a)(["questionTitle", e], _n(n, De, e, i), t)
                };
            Ee.document = De, Ee.getKey = function(n) {
                return ["questionTitle", n]
            };
            var Ne = "\n    query SimilarQuestions($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    similarQuestionList {\n      difficulty\n      titleSlug\n      title\n      translatedTitle\n      isPaidOnly\n    }\n  }\n}\n    ",
                Le = function(n, e, t, i) {
                    return (0, Sn.a)(["SimilarQuestions", e], _n(n, Ne, e, i), t)
                };
            Le.document = Ne, Le.getKey = function(n) {
                return ["SimilarQuestions", n]
            };
            var ke = "\n    query singleQuestionTopicTags($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    topicTags {\n      name\n      slug\n    }\n  }\n}\n    ",
                Re = function(n, e, t, i) {
                    return (0, Sn.a)(["singleQuestionTopicTags", e], _n(n, ke, e, i), t)
                };
            Re.document = ke, Re.getKey = function(n) {
                return ["singleQuestionTopicTags", n]
            };
            var Ke = "\n    query userFavorites {\n  favoritesLists {\n    allFavorites {\n      idHash\n      name\n      isPublicFavorite\n      questions {\n        titleSlug\n      }\n    }\n  }\n}\n    ",
                Oe = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["userFavorites"] : ["userFavorites", e], _n(n, Ke, e, i), t)
                };
            Oe.document = Ke, Oe.getKey = function(n) {
                return void 0 === n ? ["userFavorites"] : ["userFavorites", n]
            };
            var Me = "\n    query userQuestionAdminUrls($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    libraryUrl\n    adminUrl\n  }\n}\n    ",
                Be = function(n, e, t, i) {
                    return (0, Sn.a)(["userQuestionAdminUrls", e], _n(n, Me, e, i), t)
                };
            Be.document = Me, Be.getKey = function(n) {
                return ["userQuestionAdminUrls", n]
            };
            var Ge = "\n    query userQuestionLike($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    isLiked\n  }\n}\n    ",
                Ue = function(n, e, t, i) {
                    return (0, Sn.a)(["userQuestionLike", e], _n(n, Ge, e, i), t)
                };
            Ue.document = Ge, Ue.getKey = function(n) {
                return ["userQuestionLike", n]
            };
            var Qe = "\n    query userQuestionStatus($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    status\n  }\n}\n    ",
                we = function(n, e, t, i) {
                    return (0, Sn.a)(["userQuestionStatus", e], _n(n, Qe, e, i), t)
                };
            we.document = Qe, we.getKey = function(n) {
                return ["userQuestionStatus", n]
            };
            var Fe = "\n    query discussionAllQuestions {\n  allQuestions {\n    questionFrontendId\n    title\n    titleSlug\n  }\n}\n    ",
                Ve = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["discussionAllQuestions"] : ["discussionAllQuestions", e], _n(n, Fe, e, i), t)
                };
            Ve.document = Fe, Ve.getKey = function(n) {
                return void 0 === n ? ["discussionAllQuestions"] : ["discussionAllQuestions", n]
            };
            var He = "\n    query discussionTopic($questionSlug: String!) {\n  questionDiscussionTopic(questionSlug: $questionSlug) {\n    id\n    commentCount\n    topLevelCommentCount\n  }\n}\n    ",
                We = function(n, e, t, i) {
                    return (0, Sn.a)(["discussionTopic", e], _n(n, He, e, i), t)
                };
            We.document = He, We.getKey = function(n) {
                return ["discussionTopic", n]
            };
            var xe = "\n    query questionTopicAuthors($topicId: Int!) {\n  topic(id: $topicId) {\n    id\n    authors {\n      isDiscussAdmin\n      isDiscussStaff\n      isActive\n      username\n      profile {\n        userAvatar\n        reputation\n      }\n    }\n  }\n}\n    ",
                Ye = function(n, e, t, i) {
                    return (0, Sn.a)(["questionTopicAuthors", e], _n(n, xe, e, i), t)
                };
            Ye.document = xe, Ye.getKey = function(n) {
                return ["questionTopicAuthors", n]
            };
            var Je = "\n    query questionEditorData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    codeSnippets {\n      lang\n      langSlug\n      code\n    }\n    envInfo\n    enableRunCode\n    hasFrontendPreview\n    frontendPreviews\n  }\n}\n    ",
                Ze = function(n, e, t, i) {
                    return (0, Sn.a)(["questionEditorData", e], _n(n, Je, e, i), t)
                };
            Ze.document = Je, Ze.getKey = function(n) {
                return ["questionEditorData", n]
            };
            var je = "\n    query languageList {\n  languageList {\n    id\n    name\n  }\n}\n    ",
                ze = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["languageList"] : ["languageList", e], _n(n, je, e, i), t)
                };
            ze.document = je, ze.getKey = function(n) {
                return void 0 === n ? ["languageList"] : ["languageList", n]
            };
            var Xe = "\n    query nextChallengePairs($questionSlug: String!) {\n  question(titleSlug: $questionSlug) {\n    nextChallenges {\n      difficulty\n      title\n      titleSlug\n      questionFrontendId\n    }\n  }\n}\n    ",
                nt = function(n, e, t, i) {
                    return (0, Sn.a)(["nextChallengePairs", e], _n(n, Xe, e, i), t)
                };
            nt.document = Xe, nt.getKey = function(n) {
                return ["nextChallengePairs", n]
            };
            var et = "\n    query panelQuestionList($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput) {\n  panelQuestionList(\n    currentQuestionSlug: $currentQuestionSlug\n    categorySlug: $categorySlug\n    envId: $envId\n    envType: $envType\n    filters: $filters\n  ) {\n    hasViewPermission\n    panelName\n    finishedLength\n    totalLength\n    questions {\n      difficulty\n      id\n      paidOnly\n      questionFrontendId\n      status\n      title\n      titleSlug\n      topicTags {\n        name\n        slug\n      }\n    }\n  }\n}\n    ",
                tt = function(n, e, t, i) {
                    return (0, Sn.a)(["panelQuestionList", e], _n(n, et, e, i), t)
                };
            tt.document = et, tt.getKey = function(n) {
                return ["panelQuestionList", n]
            };
            var it = "\n    query questionNote($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    note\n  }\n}\n    ",
                ot = function(n, e, t, i) {
                    return (0, Sn.a)(["questionNote", e], _n(n, it, e, i), t)
                };
            ot.document = it, ot.getKey = function(n) {
                return ["questionNote", n]
            };
            var ut = "\n    query randomPanelQuestion($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput) {\n  randomPanelQuestion(\n    currentQuestionSlug: $currentQuestionSlug\n    categorySlug: $categorySlug\n    envId: $envId\n    envType: $envType\n    filters: $filters\n  )\n}\n    ",
                rt = function(n, e, t, i) {
                    return (0, Sn.a)(["randomPanelQuestion", e], _n(n, ut, e, i), t)
                };
            rt.document = ut, rt.getKey = function(n) {
                return ["randomPanelQuestion", n]
            };
            var st = "\n    query socketToken {\n  userStatus {\n    socketToken\n  }\n}\n    ",
                at = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["socketToken"] : ["socketToken", e], _n(n, st, e, i), t)
                };
            at.document = st, at.getKey = function(n) {
                return void 0 === n ? ["socketToken"] : ["socketToken", n]
            };
            var lt = "\n    query studyPlanMedalPolling($submissionId: Int!) {\n  studyPlanMedalPolling(submissionId: $submissionId) {\n    keepPolling\n    awards {\n      medal {\n        config {\n          icon\n          iconGif\n          iconGifBackground\n        }\n      }\n      badge {\n        name\n      }\n    }\n  }\n}\n    ",
                ct = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanMedalPolling", e], _n(n, lt, e, i), t)
                };
            ct.document = lt, ct.getKey = function(n) {
                return ["studyPlanMedalPolling", n]
            };
            var dt = "\n    query submissionCode($submissionId: Int!) {\n  submissionDetails(submissionId: $submissionId) {\n    code\n  }\n}\n    ",
                gt = function(n, e, t, i) {
                    return (0, Sn.a)(["submissionCode", e], _n(n, dt, e, i), t)
                };
            gt.document = dt, gt.getKey = function(n) {
                return ["submissionCode", n]
            };
            var mt = "\n    query submissionDetails($submissionId: Int!) {\n  submissionDetails(submissionId: $submissionId) {\n    runtime\n    runtimeDisplay\n    runtimePercentile\n    runtimeDistribution\n    memory\n    memoryDisplay\n    memoryPercentile\n    memoryDistribution\n    code\n    timestamp\n    statusCode\n    user {\n      username\n      profile {\n        realName\n        userAvatar\n      }\n    }\n    lang {\n      name\n      verboseName\n    }\n    question {\n      questionId\n      titleSlug\n      hasFrontendPreview\n    }\n    notes\n    flagType\n    topicTags {\n      tagId\n      slug\n      name\n    }\n    runtimeError\n    compileError\n    lastTestcase\n    totalCorrect\n    totalTestcases\n    fullCodeOutput\n    testDescriptions\n    testBodies\n    testInfo\n  }\n}\n    ",
                yt = function(n, e, t, i) {
                    return (0, Sn.a)(["submissionDetails", e], _n(n, mt, e, i), t)
                };
            yt.document = mt, yt.getKey = function(n) {
                return ["submissionDetails", n]
            };
            var ft = "\n    query submissionFilterTypes {\n  submittableLanguageList {\n    id\n    verboseName\n  }\n  statusList {\n    id\n    name\n  }\n}\n    ",
                At = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["submissionFilterTypes"] : ["submissionFilterTypes", e], _n(n, ft, e, i), t)
                };
            At.document = ft, At.getKey = function(n) {
                return void 0 === n ? ["submissionFilterTypes"] : ["submissionFilterTypes", n]
            };
            var St = "\n    query submissionList($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!, $lang: Int, $status: Int) {\n  questionSubmissionList(\n    offset: $offset\n    limit: $limit\n    lastKey: $lastKey\n    questionSlug: $questionSlug\n    lang: $lang\n    status: $status\n  ) {\n    lastKey\n    hasNext\n    submissions {\n      id\n      title\n      titleSlug\n      status\n      statusDisplay\n      lang\n      langName\n      runtime\n      timestamp\n      url\n      isPending\n      memory\n      hasNotes\n      notes\n      flagType\n      topicTags {\n        id\n      }\n    }\n  }\n}\n    ",
                pt = function(n, e, t, i) {
                    return (0, Sn.a)(["submissionList", e], _n(n, St, e, i), t)
                };
            pt.document = St, pt.getKey = function(n) {
                return ["submissionList", n]
            };
            var _t = "\n    query submissionTopicTags {\n  questionTopicTags {\n    edges {\n      node {\n        tagId\n        name\n        translatedName\n      }\n    }\n  }\n}\n    ",
                vt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["submissionTopicTags"] : ["submissionTopicTags", e], _n(n, _t, e, i), t)
                };
            vt.document = _t, vt.getKey = function(n) {
                return void 0 === n ? ["submissionTopicTags"] : ["submissionTopicTags", n]
            };
            var Tt = "\n    query submitModalInfo($submissionId: ID!) {\n  validTimeTravelTicketCount\n  dccSubmissionPolling(submissionId: $submissionId) {\n    keepPolling\n    dccSubmissionInfo {\n      showCompleteModal\n      showTttModal\n      discussLink\n      dailyChallengeMedal {\n        name\n        shortName\n        config {\n          iconGif\n        }\n      }\n      streakCounter {\n        streakCount\n        daysSkipped\n        currentDayCompleted\n        hasCompletedChallenge\n      }\n    }\n  }\n  showAnnualModalOnQd {\n    name\n    config {\n      iconGif\n    }\n  }\n}\n    ",
                It = function(n, e, t, i) {
                    return (0, Sn.a)(["submitModalInfo", e], _n(n, Tt, e, i), t)
                };
            It.document = Tt, It.getKey = function(n) {
                return ["submitModalInfo", n]
            };
            var Pt = "\n    query questionSatisfactionSurvey {\n  questionSatisfactionSurvey {\n    showSurvey\n    surveyJson\n    leetcoinAmount\n  }\n}\n    ",
                Ct = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["questionSatisfactionSurvey"] : ["questionSatisfactionSurvey", e], _n(n, Pt, e, i), t)
                };
            Ct.document = Pt, Ct.getKey = function(n) {
                return void 0 === n ? ["questionSatisfactionSurvey"] : ["questionSatisfactionSurvey", n]
            };
            var $t = "\n    query syncedCode($questionId: Int!, $lang: Int!) {\n  syncedCode(questionId: $questionId, lang: $lang) {\n    timestamp\n    code\n  }\n}\n    ",
                qt = function(n, e, t, i) {
                    return (0, Sn.a)(["syncedCode", e], _n(n, $t, e, i), t)
                };
            qt.document = $t, qt.getKey = function(n) {
                return ["syncedCode", n]
            };
            var bt = "\n    query userCanSeeQuestion($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    canSeeQuestion\n  }\n}\n    ",
                ht = function(n, e, t, i) {
                    return (0, Sn.a)(["userCanSeeQuestion", e], _n(n, bt, e, i), t)
                };
            ht.document = bt, ht.getKey = function(n) {
                return ["userCanSeeQuestion", n]
            };
            var Dt = "\n    query StripeData {\n  stripePublicKey\n}\n    ",
                Et = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["StripeData"] : ["StripeData", e], _n(n, Dt, e, i), t)
                };
            Et.document = Dt, Et.getKey = function(n) {
                return void 0 === n ? ["StripeData"] : ["StripeData", n]
            };
            var Nt = "\n    query btsReferral {\n  btsReferral {\n    link\n    referredCount\n  }\n}\n    ",
                Lt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["btsReferral"] : ["btsReferral", e], _n(n, Nt, e, i), t)
                };
            Lt.document = Nt, Lt.getKey = function(n) {
                return void 0 === n ? ["btsReferral"] : ["btsReferral", n]
            };
            var kt = "\n    query contestRootBanners {\n  contestRootBanners {\n    title\n    banner\n    aspectRatioType\n    backgroundColor\n    targetUrl\n  }\n}\n    ",
                Rt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["contestRootBanners"] : ["contestRootBanners", e], _n(n, kt, e, i), t)
                };
            Rt.document = kt, Rt.getKey = function(n) {
                return void 0 === n ? ["contestRootBanners"] : ["contestRootBanners", n]
            };
            var Kt = "\n    query featuredContests {\n  featuredContests {\n    title\n    titleSlug\n    startTime\n    cardImg\n    duration\n  }\n}\n    ",
                Ot = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["featuredContests"] : ["featuredContests", e], _n(n, Kt, e, i), t)
                };
            Ot.document = Kt, Ot.getKey = function(n) {
                return void 0 === n ? ["featuredContests"] : ["featuredContests", n]
            };
            var Mt = "\n    query userRankings {\n  globalRanking {\n    page\n    rankingNodes {\n      currentRating\n      currentGlobalRanking\n      ranking\n      dataRegion\n      user {\n        username\n        nameColor\n        profile {\n          userAvatar\n          countryCode\n          countryName\n        }\n        activeBadge {\n          displayName\n          icon\n        }\n        contestBadge {\n          displayName\n          icon\n        }\n      }\n    }\n  }\n}\n    ",
                Bt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["userRankings"] : ["userRankings", e], _n(n, Mt, e, i), t)
                };
            Bt.document = Mt, Bt.getKey = function(n) {
                return void 0 === n ? ["userRankings"] : ["userRankings", n]
            };
            var Gt = "\n    query myContests($pageNo: Int, $numPerPage: Int) {\n  myContests(pageNo: $pageNo, numPerPage: $numPerPage) {\n    pageNum\n    numPerPage\n    totalNum\n    currentPage\n    data {\n      contest {\n        title\n        titleSlug\n        unrated\n        rankingUpdated\n        startTime\n      }\n      penaltyCount\n      problemsSolved\n      totalProblems\n      afterContestRating\n      ratingDiff\n      ranking\n      totalParticipants\n      finishTimeInSeconds\n    }\n  }\n}\n    ",
                Ut = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["myContests"] : ["myContests", e], _n(n, Gt, e, i), t)
                };
            Ut.document = Gt, Ut.getKey = function(n) {
                return void 0 === n ? ["myContests"] : ["myContests", n]
            };
            var Qt = "\n    query myVirtualContests($pageNo: Int, $numPerPage: Int) {\n  allVirtualContestScoresPagified(pageNo: $pageNo, numPerPage: $numPerPage) {\n    pageNum\n    numPerPage\n    totalNum\n    currentPage\n    data {\n      contest {\n        title\n        titleSlug\n        originStartTime\n      }\n      startTime\n      score\n      totalScore\n      finishTime\n      totalAcQuestions\n      totalQuestions\n      ranking\n      totalUsers\n    }\n  }\n}\n    ",
                wt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["myVirtualContests"] : ["myVirtualContests", e], _n(n, Qt, e, i), t)
                };
            wt.document = Qt, wt.getKey = function(n) {
                return void 0 === n ? ["myVirtualContests"] : ["myVirtualContests", n]
            };
            var Ft = "\n    query ongoingVirtualContest {\n  ongoingVirtualContest {\n    titleSlug\n  }\n}\n    ",
                Vt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["ongoingVirtualContest"] : ["ongoingVirtualContest", e], _n(n, Ft, e, i), t)
                };
            Vt.document = Ft, Vt.getKey = function(n) {
                return void 0 === n ? ["ongoingVirtualContest"] : ["ongoingVirtualContest", n]
            };
            var Ht = "\n    query pastContests($pageNo: Int, $numPerPage: Int) {\n  pastContests(pageNo: $pageNo, numPerPage: $numPerPage) {\n    pageNum\n    currentPage\n    totalNum\n    numPerPage\n    data {\n      title\n      titleSlug\n      startTime\n      originStartTime\n      cardImg\n      sponsors {\n        name\n        lightLogo\n        darkLogo\n      }\n    }\n  }\n}\n    ",
                Wt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["pastContests"] : ["pastContests", e], _n(n, Ht, e, i), t)
                };
            Wt.document = Ht, Wt.getKey = function(n) {
                return void 0 === n ? ["pastContests"] : ["pastContests", n]
            };
            var xt = "\n    query topTwoContests {\n  topTwoContests {\n    title\n    titleSlug\n    startTime\n    cardImg\n    duration\n  }\n}\n    ",
                Yt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["topTwoContests"] : ["topTwoContests", e], _n(n, xt, e, i), t)
                };
            Yt.document = xt, Yt.getKey = function(n) {
                return void 0 === n ? ["topTwoContests"] : ["topTwoContests", n]
            };
            var Jt = "\n    query premiumBetaFeatures {\n  premiumBetaFeatures {\n    id\n    featureId\n    title\n    description\n    imageUrl\n    order\n    startsAt\n    endsAt\n    hasAccess\n    optedIn\n    feedbackUrl\n    featureUrl\n    imageHeight\n  }\n}\n    ",
                Zt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["premiumBetaFeatures"] : ["premiumBetaFeatures", e], _n(n, Jt, e, i), t)
                };
            Zt.document = Jt, Zt.getKey = function(n) {
                return void 0 === n ? ["premiumBetaFeatures"] : ["premiumBetaFeatures", n]
            };
            var jt = function(n, e, t) {
                    return (0, pn.D)(["collectContestEasterEgg"], (function(e) {
                        return _n(n, "\n    mutation collectContestEasterEgg {\n  collectContestEasterEgg {\n    ok\n  }\n}\n    ", e, t)()
                    }), e)
                },
                zt = "\n    query easterEgg {\n  isEasterEggCollected\n}\n    ",
                Xt = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["easterEgg"] : ["easterEgg", e], _n(n, zt, e, i), t)
                };
            Xt.document = zt, Xt.getKey = function(n) {
                return void 0 === n ? ["easterEgg"] : ["easterEgg", n]
            };
            var ni = "\n    query companies($search: String!) {\n  companies(search: $search) {\n    id\n    name\n  }\n}\n    ",
                ei = function(n, e, t, i) {
                    return (0, Sn.a)(["companies", e], _n(n, ni, e, i), t)
                };
            ei.document = ni, ei.getKey = function(n) {
                return ["companies", n]
            };
            var ti = "\n    query locations($search: String!) {\n  locations(search: $search) {\n    id\n    name\n  }\n}\n    ",
                ii = function(n, e, t, i) {
                    return (0, Sn.a)(["locations", e], _n(n, ti, e, i), t)
                };
            ii.document = ti, ii.getKey = function(n) {
                return ["locations", n]
            };
            var oi = "\n    query schools($search: String!) {\n  schools(search: $search) {\n    id\n    name\n  }\n}\n    ",
                ui = function(n, e, t, i) {
                    return (0, Sn.a)(["schools", e], _n(n, oi, e, i), t)
                };
            ui.document = oi, ui.getKey = function(n) {
                return ["schools", n]
            };
            var ri = "\n    query skillTags($search: String!) {\n  skillTags(search: $search) {\n    name\n  }\n}\n    ",
                si = function(n, e, t, i) {
                    return (0, Sn.a)(["skillTags", e], _n(n, ri, e, i), t)
                };
            si.document = ri, si.getKey = function(n) {
                return ["skillTags", n]
            };
            var ai = "\n    query userProfile {\n  user {\n    profile {\n      userAvatar\n      realName\n      birthday\n      location\n      aboutMe\n      websites\n      school\n      company\n      jobTitle\n      skillTags\n      rewardStats\n    }\n    githubUrl\n    linkedinUrl\n  }\n}\n    ",
                li = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["userProfile"] : ["userProfile", e], _n(n, ai, e, i), t)
                };
            li.document = ai, li.getKey = function(n) {
                return void 0 === n ? ["userProfile"] : ["userProfile", n]
            };
            var ci = "\n    query getUpcStudyPlans {\n  studyPlansV2ByUpc {\n    name\n    slug\n    highlight\n    cover\n  }\n}\n    ",
                di = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["getUpcStudyPlans"] : ["getUpcStudyPlans", e], _n(n, ci, e, i), t)
                };
            di.document = ci, di.getKey = function(n) {
                return void 0 === n ? ["getUpcStudyPlans"] : ["getUpcStudyPlans", n]
            };
            var gi = "\n    query getUpcTopicTags {\n  upcV2InterestTags {\n    name\n    slug\n  }\n}\n    ",
                mi = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["getUpcTopicTags"] : ["getUpcTopicTags", e], _n(n, gi, e, i), t)
                };
            mi.document = gi, mi.getKey = function(n) {
                return void 0 === n ? ["getUpcTopicTags"] : ["getUpcTopicTags", n]
            };
            var yi = "\n    query commentContext($topicId: Int!, $commentId: Int!, $orderBy: String!) {\n  commentContext(topicId: $topicId, commentId: $commentId, orderBy: $orderBy)\n}\n    ",
                fi = function(n, e, t, i) {
                    return (0, Sn.a)(["commentContext", e], _n(n, yi, e, i), t)
                };
            fi.document = yi, fi.getKey = function(n) {
                return ["commentContext", n]
            };
            var Ai = "\n    query commentReplies($commentId: Int!) {\n  commentReplies(commentId: $commentId) {\n    id\n    pinned\n    pinnedBy {\n      username\n    }\n    post {\n      ...DiscussPost\n    }\n  }\n}\n    ".concat(vn),
                Si = function(n, e, t, i) {
                    return (0, Sn.a)(["commentReplies", e], _n(n, Ai, e, i), t)
                };
            Si.document = Ai, Si.getKey = function(n) {
                return ["commentReplies", n]
            };
            var pi = "\n    query intentionTags {\n  intentionTags {\n    name\n    slug\n  }\n}\n    ",
                _i = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["intentionTags"] : ["intentionTags", e], _n(n, pi, e, i), t)
                };
            _i.document = pi, _i.getKey = function(n) {
                return void 0 === n ? ["intentionTags"] : ["intentionTags", n]
            };
            "\n    mutation createComment($topicId: Int!, $intentionTagSlug: String, $parentCommentId: Int!, $content: String!) {\n  createComment(\n    topicId: $topicId\n    intentionTagSlug: $intentionTagSlug\n    parentCommentId: $parentCommentId\n    content: $content\n  ) {\n    ok\n    commentId\n    error\n    comment {\n      id\n      pinned\n      pinnedBy {\n        username\n      }\n      post {\n        ...DiscussPost\n      }\n      intentionTag {\n        slug\n      }\n      numChildren\n    }\n  }\n}\n    ".concat(vn);
            var vi = '\n    query questionDiscussComments($topicId: Int!, $orderBy: String = "newest_to_oldest", $pageNo: Int = 1, $numPerPage: Int = 10) {\n  topicComments(\n    topicId: $topicId\n    orderBy: $orderBy\n    pageNo: $pageNo\n    numPerPage: $numPerPage\n  ) {\n    data {\n      id\n      pinned\n      pinnedBy {\n        username\n      }\n      post {\n        ...DiscussPost\n      }\n      intentionTag {\n        slug\n      }\n      numChildren\n    }\n    totalNum\n  }\n}\n    '.concat(vn),
                Ti = function(n, e, t, i) {
                    return (0, Sn.a)(["questionDiscussComments", e], _n(n, vi, e, i), t)
                };
            Ti.document = vi, Ti.getKey = function(n) {
                return ["questionDiscussComments", n]
            };
            var Ii = "\n    query frontendQuestionSubmissionResults($submissionId: String!) {\n  frontendQuestionSubmissionResults(submissionId: $submissionId) {\n    title\n    passed\n    stdout\n    errorMessage\n    testFn\n    shortError\n    failingLine\n    codePreview\n    showDiff\n    actual\n    expected\n  }\n}\n    ",
                Pi = function(n, e, t, i) {
                    return (0, Sn.a)(["frontendQuestionSubmissionResults", e], _n(n, Ii, e, i), t)
                };
            Pi.document = Ii, Pi.getKey = function(n) {
                return ["frontendQuestionSubmissionResults", n]
            };
            var Ci = "\n    query getIdeEnabled {\n  enableIdeDynamicLayoutFeature\n}\n    ",
                $i = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["getIdeEnabled"] : ["getIdeEnabled", e], _n(n, Ci, e, i), t)
                };
            $i.document = Ci, $i.getKey = function(n) {
                return void 0 === n ? ["getIdeEnabled"] : ["getIdeEnabled", n]
            };
            var qi = "\n    query getIdeLayouts {\n  ideDynamicLayouts {\n    layoutId\n    layoutJson\n    layoutName\n  }\n}\n    ",
                bi = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["getIdeLayouts"] : ["getIdeLayouts", e], _n(n, qi, e, i), t)
                };
            bi.document = qi, bi.getKey = function(n) {
                return void 0 === n ? ["getIdeLayouts"] : ["getIdeLayouts", n]
            };
            var hi = "\n    query communitySolution($topicId: Int!) {\n  topic(id: $topicId) {\n    id\n    viewCount\n    topLevelCommentCount\n    subscribed\n    title\n    pinned\n    solutionTags {\n      name\n      slug\n    }\n    hideFromTrending\n    commentCount\n    isFavorite\n    post {\n      id\n      voteCount\n      voteStatus\n      content\n      updationDate\n      creationDate\n      status\n      isHidden\n      author {\n        isDiscussAdmin\n        isDiscussStaff\n        username\n        nameColor\n        activeBadge {\n          displayName\n          icon\n        }\n        profile {\n          userAvatar\n          reputation\n        }\n        isActive\n      }\n      authorIsModerator\n      isOwnPost\n    }\n  }\n}\n    ",
                Di = function(n, e, t, i) {
                    return (0, Sn.a)(["communitySolution", e], _n(n, hi, e, i), t)
                };
            Di.document = hi, Di.getKey = function(n) {
                return ["communitySolution", n]
            };
            var Ei = "\n    query communitySolutions($questionSlug: String!, $skip: Int!, $first: Int!, $query: String, $orderBy: TopicSortingOption, $languageTags: [String!], $topicTags: [String!]) {\n  questionSolutions(\n    filters: {questionSlug: $questionSlug, skip: $skip, first: $first, query: $query, orderBy: $orderBy, languageTags: $languageTags, topicTags: $topicTags}\n  ) {\n    hasDirectResults\n    totalNum\n    solutions {\n      id\n      title\n      commentCount\n      topLevelCommentCount\n      viewCount\n      pinned\n      isFavorite\n      solutionTags {\n        name\n        slug\n      }\n      post {\n        id\n        status\n        voteStatus\n        voteCount\n        creationDate\n        isHidden\n        author {\n          username\n          isActive\n          nameColor\n          activeBadge {\n            displayName\n            icon\n          }\n          profile {\n            userAvatar\n            reputation\n          }\n        }\n      }\n      searchMeta {\n        content\n        contentType\n        commentAuthor {\n          username\n        }\n        replyAuthor {\n          username\n        }\n        highlights\n      }\n    }\n  }\n}\n    ",
                Ni = function(n, e, t, i) {
                    return (0, Sn.a)(["communitySolutions", e], _n(n, Ei, e, i), t)
                };
            Ni.document = Ei, Ni.getKey = function(n) {
                return ["communitySolutions", n]
            };
            var Li = "\n    query editorialMeta($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    solution {\n      paidOnly\n      hasVideoSolution\n      canSeeDetail\n    }\n  }\n}\n    ",
                ki = function(n, e, t, i) {
                    return (0, Sn.a)(["editorialMeta", e], _n(n, Li, e, i), t)
                };
            ki.document = Li, ki.getKey = function(n) {
                return ["editorialMeta", n]
            };
            var Ri = '\n    query feedbackMetaInfoBySlug {\n  feedbackMetaInfoBySlug(slug: "editorial-feedback") {\n    questionContent\n    options {\n      optionId\n      optionName\n      optionSlug\n    }\n  }\n}\n    ',
                Ki = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["feedbackMetaInfoBySlug"] : ["feedbackMetaInfoBySlug", e], _n(n, Ri, e, i), t)
                };
            Ki.document = Ri, Ki.getKey = function(n) {
                return void 0 === n ? ["feedbackMetaInfoBySlug"] : ["feedbackMetaInfoBySlug", n]
            };
            var Oi = "\n    query hasOfficialSolution($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    solution {\n      id\n    }\n  }\n}\n    ",
                Mi = function(n, e, t, i) {
                    return (0, Sn.a)(["hasOfficialSolution", e], _n(n, Oi, e, i), t)
                };
            Mi.document = Oi, Mi.getKey = function(n) {
                return ["hasOfficialSolution", n]
            };
            var Bi = "\n    query lastAcSubmissionCheck($questionSlug: String!) {\n  lastAcSubmission(questionSlug: $questionSlug) {\n    id\n    runtimePercentile\n    memoryPercentile\n  }\n}\n    ",
                Gi = function(n, e, t, i) {
                    return (0, Sn.a)(["lastAcSubmissionCheck", e], _n(n, Bi, e, i), t)
                };
            Gi.document = Bi, Gi.getKey = function(n) {
                return ["lastAcSubmissionCheck", n]
            };
            var Ui = "\n    query lastAcSubmission($questionSlug: String!) {\n  lastAcSubmission(questionSlug: $questionSlug) {\n    id\n    code\n    lang {\n      verboseName\n      name\n    }\n    topicTags {\n      slug\n      name\n    }\n    question {\n      hasFrontendPreview\n    }\n    runtimePercentile\n    memoryPercentile\n  }\n}\n    ",
                Qi = function(n, e, t, i) {
                    return (0, Sn.a)(["lastAcSubmission", e], _n(n, Ui, e, i), t)
                };
            Qi.document = Ui, Qi.getKey = function(n) {
                return ["lastAcSubmission", n]
            };
            var wi = "\n    query officialSolution($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    solution {\n      id\n      title\n      content\n      contentTypeId\n      paidOnly\n      hasVideoSolution\n      paidOnlyVideo\n      canSeeDetail\n      rating {\n        count\n        average\n        userRating {\n          score\n        }\n      }\n      topic {\n        id\n        commentCount\n        topLevelCommentCount\n        viewCount\n        subscribed\n        solutionTags {\n          name\n          slug\n        }\n        post {\n          id\n          status\n          creationDate\n          author {\n            username\n            isActive\n            profile {\n              userAvatar\n              reputation\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ",
                Fi = function(n, e, t, i) {
                    return (0, Sn.a)(["officialSolution", e], _n(n, wi, e, i), t)
                };
            Fi.document = wi, Fi.getKey = function(n) {
                return ["officialSolution", n]
            };
            var Vi = "\n    query prevNextSolution($topicId: Int!, $questionSlug: String!, $skip: Int!, $first: Int!, $query: String, $orderBy: TopicSortingOption, $languageTags: [String!], $topicTags: [String!]) {\n  prevSolution(\n    topicId: $topicId\n    filters: {questionSlug: $questionSlug, first: $first, skip: $skip, orderBy: $orderBy, query: $query, languageTags: $languageTags, topicTags: $topicTags}\n  ) {\n    id\n    title\n  }\n  nextSolution(\n    topicId: $topicId\n    filters: {questionSlug: $questionSlug, first: $first, skip: $skip, orderBy: $orderBy, query: $query, languageTags: $languageTags, topicTags: $topicTags}\n  ) {\n    id\n    title\n  }\n}\n    ",
                Hi = function(n, e, t, i) {
                    return (0, Sn.a)(["prevNextSolution", e], _n(n, Vi, e, i), t)
                };
            Hi.document = Vi, Hi.getKey = function(n) {
                return ["prevNextSolution", n]
            };
            var Wi = "\n    query solutionArticleInformation($topicId: Int!) {\n  topic(id: $topicId) {\n    title\n    post {\n      author {\n        username\n      }\n    }\n  }\n}\n    ",
                xi = function(n, e, t, i) {
                    return (0, Sn.a)(["solutionArticleInformation", e], _n(n, Wi, e, i), t)
                };
            xi.document = Wi, xi.getKey = function(n) {
                return ["solutionArticleInformation", n]
            };
            var Yi = "\n    query solutionTags($questionSlug: String!) {\n  solutionTopicTags(questionSlug: $questionSlug) {\n    name\n    slug\n    count\n  }\n  solutionLanguageTags(questionSlug: $questionSlug) {\n    name\n    slug\n    count\n  }\n}\n    ",
                Ji = function(n, e, t, i) {
                    return (0, Sn.a)(["solutionTags", e], _n(n, Yi, e, i), t)
                };
            Ji.document = Yi, Ji.getKey = function(n) {
                return ["solutionTags", n]
            };
            var Zi = "\n    query enableLcIde {\n  feature {\n    enableLcIde\n  }\n}\n    ",
                ji = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["enableLcIde"] : ["enableLcIde", e], _n(n, Zi, e, i), t)
                };
            ji.document = Zi, ji.getKey = function(n) {
                return void 0 === n ? ["enableLcIde"] : ["enableLcIde", n]
            };
            var zi = "\n    query featuredQuestionLists {\n  featuredQuestionLists {\n    publicId\n    idHash\n    name\n    coverUrl\n    isPaidOnly\n    creator\n    description\n    tags {\n      name\n      slug\n    }\n    questionCount\n    acStats {\n      difficulty\n      count\n    }\n  }\n}\n    ",
                Xi = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["featuredQuestionLists"] : ["featuredQuestionLists", e], _n(n, zi, e, i), t)
                };
            Xi.document = zi, Xi.getKey = function(n) {
                return void 0 === n ? ["featuredQuestionLists"] : ["featuredQuestionLists", n]
            };
            var no = "\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\n  problemsetQuestionList: questionList(\n    categorySlug: $categorySlug\n    limit: $limit\n    skip: $skip\n    filters: $filters\n  ) {\n    total: totalNum\n    questions: data {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      topicTags {\n        name\n        id\n        slug\n      }\n      hasSolution\n      hasVideoSolution\n    }\n  }\n}\n    ",
                eo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["problemsetQuestionList"] : ["problemsetQuestionList", e], _n(n, no, e, i), t)
                };
            eo.document = no, eo.getKey = function(n) {
                return void 0 === n ? ["problemsetQuestionList"] : ["problemsetQuestionList", n]
            };
            var to = "\n    query questionCompanyTags {\n  companyTags {\n    name\n    slug\n    questionCount\n  }\n}\n    ",
                io = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["questionCompanyTags"] : ["questionCompanyTags", e], _n(n, to, e, i), t)
                };
            io.document = to, io.getKey = function(n) {
                return void 0 === n ? ["questionCompanyTags"] : ["questionCompanyTags", n]
            };
            var oo = "\n    query questionOfToday {\n  activeDailyCodingChallengeQuestion {\n    date\n    userStatus\n    link\n    question {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      hasVideoSolution\n      hasSolution\n      topicTags {\n        name\n        id\n        slug\n      }\n    }\n  }\n}\n    ",
                uo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["questionOfToday"] : ["questionOfToday", e], _n(n, oo, e, i), t)
                };
            uo.document = oo, uo.getKey = function(n) {
                return void 0 === n ? ["questionOfToday"] : ["questionOfToday", n]
            };
            var ro = "\n    query questionTopicTags {\n  questionTopicTags {\n    edges {\n      node {\n        id\n        name\n        slug\n        translatedName\n        questionIds\n      }\n    }\n  }\n}\n    ",
                so = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["questionTopicTags"] : ["questionTopicTags", e], _n(n, ro, e, i), t)
                };
            so.document = ro, so.getKey = function(n) {
                return void 0 === n ? ["questionTopicTags"] : ["questionTopicTags", n]
            };
            var ao = "\n    query randomQuestion($categorySlug: String, $filters: QuestionListFilterInput) {\n  randomQuestion(categorySlug: $categorySlug, filters: $filters) {\n    titleSlug\n  }\n}\n    ",
                lo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["randomQuestion"] : ["randomQuestion", e], _n(n, ao, e, i), t)
                };
            lo.document = ao, lo.getKey = function(n) {
                return void 0 === n ? ["randomQuestion"] : ["randomQuestion", n]
            };
            var co = "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                go = function(n, e, t, i) {
                    return (0, Sn.a)(["userSessionProgress", e], _n(n, co, e, i), t)
                };
            go.document = co, go.getKey = function(n) {
                return ["userSessionProgress", n]
            };
            var mo = "\n    query activeBadge($username: String!) {\n  matchedUser(username: $username) {\n    activeBadge {\n      name\n      id\n      icon\n    }\n  }\n}\n    ",
                yo = function(n, e, t, i) {
                    return (0, Sn.a)(["activeBadge", e], _n(n, mo, e, i), t)
                };
            yo.document = mo, yo.getKey = function(n) {
                return ["activeBadge", n]
            };
            var fo = "\n    query contestRatingHistogram {\n  contestRatingHistogram {\n    userCount\n    ratingStart\n    ratingEnd\n    topPercentage\n  }\n}\n    ",
                Ao = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["contestRatingHistogram"] : ["contestRatingHistogram", e], _n(n, fo, e, i), t)
                };
            Ao.document = fo, Ao.getKey = function(n) {
                return void 0 === n ? ["contestRatingHistogram"] : ["contestRatingHistogram", n]
            };
            var So = "\n    query languageStats($username: String!) {\n  matchedUser(username: $username) {\n    languageProblemCount {\n      languageName\n      problemsSolved\n    }\n  }\n}\n    ",
                po = function(n, e, t, i) {
                    return (0, Sn.a)(["languageStats", e], _n(n, So, e, i), t)
                };
            po.document = So, po.getKey = function(n) {
                return ["languageStats", n]
            };
            var _o = "\n    query recentAcSubmissions($username: String!, $limit: Int!) {\n  recentAcSubmissionList(username: $username, limit: $limit) {\n    id\n    title\n    titleSlug\n    timestamp\n  }\n}\n    ",
                vo = function(n, e, t, i) {
                    return (0, Sn.a)(["recentAcSubmissions", e], _n(n, _o, e, i), t)
                };
            vo.document = _o, vo.getKey = function(n) {
                return ["recentAcSubmissions", n]
            };
            var To = "\n    query skillStats($username: String!) {\n  matchedUser(username: $username) {\n    tagProblemCounts {\n      advanced {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n      intermediate {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n      fundamental {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n    }\n  }\n}\n    ",
                Io = function(n, e, t, i) {
                    return (0, Sn.a)(["skillStats", e], _n(n, To, e, i), t)
                };
            Io.document = To, Io.getKey = function(n) {
                return ["skillStats", n]
            };
            var Po = "\n    query userBadges($username: String!) {\n  matchedUser(username: $username) {\n    badges {\n      id\n      name\n      shortName\n      displayName\n      icon\n      hoverText\n      medal {\n        slug\n        config {\n          iconGif\n          iconGifBackground\n        }\n      }\n      creationDate\n      category\n    }\n    upcomingBadges {\n      name\n      icon\n      progress\n    }\n  }\n}\n    ",
                Co = function(n, e, t, i) {
                    return (0, Sn.a)(["userBadges", e], _n(n, Po, e, i), t)
                };
            Co.document = Po, Co.getKey = function(n) {
                return ["userBadges", n]
            };
            var $o = "\n    query userContestRankingInfo($username: String!) {\n  userContestRanking(username: $username) {\n    attendedContestsCount\n    rating\n    globalRanking\n    totalParticipants\n    topPercentage\n    badge {\n      name\n    }\n  }\n  userContestRankingHistory(username: $username) {\n    attended\n    trendDirection\n    problemsSolved\n    totalProblems\n    finishTimeInSeconds\n    rating\n    ranking\n    contest {\n      title\n      startTime\n    }\n  }\n}\n    ",
                qo = function(n, e, t, i) {
                    return (0, Sn.a)(["userContestRankingInfo", e], _n(n, $o, e, i), t)
                };
            qo.document = $o, qo.getKey = function(n) {
                return ["userContestRankingInfo", n]
            };
            var bo = "\n    query getUserDiscussTopics($username: String!, $orderBy: TopicSortingOption, $first: Int, $skip: Int) {\n  userCategoryTopics(\n    username: $username\n    orderBy: $orderBy\n    first: $first\n    skip: $skip\n  ) {\n    pageInfo {\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        title\n        url\n        viewCount\n        post {\n          creationDate\n          voteCount\n        }\n      }\n    }\n  }\n}\n    ",
                ho = function(n, e, t, i) {
                    return (0, Sn.a)(["getUserDiscussTopics", e], _n(n, bo, e, i), t)
                };
            ho.document = bo, ho.getKey = function(n) {
                return ["getUserDiscussTopics", n]
            };
            var Do = "\n    query userProblemsSolved($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    problemsSolvedBeatsStats {\n      difficulty\n      percentage\n    }\n    submitStatsGlobal {\n      acSubmissionNum {\n        difficulty\n        count\n      }\n    }\n  }\n}\n    ",
                Eo = function(n, e, t, i) {
                    return (0, Sn.a)(["userProblemsSolved", e], _n(n, Do, e, i), t)
                };
            Eo.document = Do, Eo.getKey = function(n) {
                return ["userProblemsSolved", n]
            };
            var No = "\n    query userProfileCalendar($username: String!, $year: Int) {\n  matchedUser(username: $username) {\n    userCalendar(year: $year) {\n      activeYears\n      streak\n      totalActiveDays\n      dccBadges {\n        timestamp\n        badge {\n          name\n          icon\n        }\n      }\n      submissionCalendar\n    }\n  }\n}\n    ",
                Lo = function(n, e, t, i) {
                    return (0, Sn.a)(["userProfileCalendar", e], _n(n, No, e, i), t)
                };
            Lo.document = No, Lo.getKey = function(n) {
                return ["userProfileCalendar", n]
            };
            var ko = "\n    query userPublicProfile($username: String!) {\n  matchedUser(username: $username) {\n    contestBadge {\n      name\n      expired\n      hoverText\n      icon\n    }\n    username\n    githubUrl\n    twitterUrl\n    linkedinUrl\n    profile {\n      ranking\n      userAvatar\n      realName\n      aboutMe\n      school\n      websites\n      countryName\n      company\n      jobTitle\n      skillTags\n      postViewCount\n      postViewCountDiff\n      reputation\n      reputationDiff\n      solutionCount\n      solutionCountDiff\n      categoryDiscussCount\n      categoryDiscussCountDiff\n    }\n  }\n}\n    ",
                Ro = function(n, e, t, i) {
                    return (0, Sn.a)(["userPublicProfile", e], _n(n, ko, e, i), t)
                };
            Ro.document = ko, Ro.getKey = function(n) {
                return ["userPublicProfile", n]
            };
            var Ko = "\n    query userSolutionTopics($username: String!, $orderBy: TopicSortingOption, $skip: Int, $first: Int) {\n  userSolutionTopics(\n    username: $username\n    orderBy: $orderBy\n    skip: $skip\n    first: $first\n  ) {\n    pageInfo {\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        title\n        url\n        viewCount\n        questionTitle\n        post {\n          creationDate\n          voteCount\n        }\n      }\n    }\n  }\n}\n    ",
                Oo = function(n, e, t, i) {
                    return (0, Sn.a)(["userSolutionTopics", e], _n(n, Ko, e, i), t)
                };
            Oo.document = Ko, Oo.getKey = function(n) {
                return ["userSolutionTopics", n]
            };
            var Mo = "\n    query progressList($pageNo: Int, $numPerPage: Int, $filters: ProgressListFilterInput) {\n  isProgressCalculated\n  solvedQuestionsInfo(pageNo: $pageNo, numPerPage: $numPerPage, filters: $filters) {\n    currentPage\n    pageNum\n    totalNum\n    data {\n      totalSolves\n      question {\n        questionFrontendId\n        questionTitle\n        questionDetailUrl\n        difficulty\n        topicTags {\n          name\n          slug\n        }\n      }\n      lastAcSession {\n        time\n        wrongAttempts\n      }\n    }\n  }\n}\n    ",
                Bo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["progressList"] : ["progressList", e], _n(n, Mo, e, i), t)
                };
            Bo.document = Mo, Bo.getKey = function(n) {
                return void 0 === n ? ["progressList"] : ["progressList", n]
            };
            var Go = "\n    query planCompletedPlans {\n  plans: planCompletedPlans {\n    name\n    ordering\n    allowedLanguages\n    awarded\n    dailyQuestionNum\n    days\n    easy\n    medium\n    hard\n    hasPremiumQuestion\n    hint\n    ordering\n    premiumOnly\n    slug\n    group {\n      slug\n    }\n    medal {\n      name\n      config {\n        icon\n        iconGif\n        iconGifBackground\n        iconWearing\n      }\n    }\n  }\n}\n    ",
                Uo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["planCompletedPlans"] : ["planCompletedPlans", e], _n(n, Go, e, i), t)
                };
            Uo.document = Go, Uo.getKey = function(n) {
                return void 0 === n ? ["planCompletedPlans"] : ["planCompletedPlans", n]
            };
            var Qo = "\n    query planGroupCatalogs {\n  planGroupCatalogs: planGroupCatalogs {\n    name\n    ordering\n    slug\n  }\n}\n    ",
                wo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["planGroupCatalogs"] : ["planGroupCatalogs", e], _n(n, Qo, e, i), t)
                };
            wo.document = Qo, wo.getKey = function(n) {
                return void 0 === n ? ["planGroupCatalogs"] : ["planGroupCatalogs", n]
            };
            var Fo = "\n    query planGroup($slug: String!) {\n  planGroupDetail(slug: $slug) {\n    name\n    desc\n    cover\n    slug\n    tags {\n      name\n      slug\n      tagType\n    }\n    ongoingProgress {\n      id\n    }\n    creator {\n      username\n      profile {\n        userAvatar\n      }\n    }\n    plans {\n      allowedLanguages\n      awarded\n      dailyQuestionNum\n      days\n      easy\n      hard\n      hasPremiumQuestion\n      hint\n      medium\n      name\n      ordering\n      premiumOnly\n      slug\n      medal {\n        name\n        config {\n          icon\n          iconGif\n          iconGifBackground\n          iconWearing\n        }\n      }\n    }\n  }\n}\n    ",
                Vo = function(n, e, t, i) {
                    return (0, Sn.a)(["planGroup", e], _n(n, Fo, e, i), t)
                };
            Vo.document = Fo, Vo.getKey = function(n) {
                return ["planGroup", n]
            };
            var Ho = "\n    query planGroupsByCatalog($catalogSlug: String!) {\n  planGroupsByCatalog(catalogSlug: $catalogSlug, limit: 100, skip: 0) {\n    data {\n      cover\n      name\n      slug\n      plans {\n        awarded\n        slug\n        medal {\n          name\n          config {\n            icon\n          }\n        }\n      }\n    }\n  }\n}\n    ",
                Wo = function(n, e, t, i) {
                    return (0, Sn.a)(["planGroupsByCatalog", e], _n(n, Ho, e, i), t)
                };
            Wo.document = Ho, Wo.getKey = function(n) {
                return ["planGroupsByCatalog", n]
            };
            var xo = "\n    query planProgressOngoing {\n  planOngoingProgress: planOngoingProgresses(limit: 100) {\n    daysPassed\n    questionNum\n    completedNum\n    endAt\n    id\n    startedAt\n    plan {\n      name\n      slug\n      awarded\n      days\n      medal {\n        config {\n          icon\n          iconGif\n          iconGifBackground\n          iconWearing\n        }\n        name\n      }\n      group {\n        cover\n        slug\n        name\n      }\n    }\n  }\n}\n    ",
                Yo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["planProgressOngoing"] : ["planProgressOngoing", e], _n(n, xo, e, i), t)
                };
            Yo.document = xo, Yo.getKey = function(n) {
                return void 0 === n ? ["planProgressOngoing"] : ["planProgressOngoing", n]
            };
            var Jo = "\n    query planProgress($id: ID!) {\n  planProgressDetail: planProgressDetail(id: $id) {\n    hasCompleted\n    plan {\n      allowedLanguages\n      awarded\n      dailyQuestionNum\n      days\n      easy\n      hard\n      hasPremiumQuestion\n      hint\n      medium\n      name\n      ordering\n      premiumOnly\n      slug\n      tasks {\n        canComplete\n        day\n        desc\n        hasComplete\n        ordering\n        question {\n          topicTags {\n            translatedName\n            slug\n            name\n          }\n          questionTitle\n          questionTitleSlug\n          translatedTitle\n          isPaidOnly\n          difficulty\n          stats\n          questionFrontendId\n        }\n      }\n      medal {\n        name\n        config {\n          icon\n          iconGif\n          iconGifBackground\n          iconWearing\n        }\n      }\n    }\n    completedNum\n    completedQuestionsDifficultyDistribution\n    daysPassed\n    startedAt\n    endAt\n    id\n  }\n}\n    ",
                Zo = function(n, e, t, i) {
                    return (0, Sn.a)(["planProgress", e], _n(n, Jo, e, i), t)
                };
            Zo.document = Jo, Zo.getKey = function(n) {
                return ["planProgress", n]
            };
            var jo = "\n    query enableNewStudyPlan {\n  feature {\n    enableNewStudyPlan\n  }\n}\n    ",
                zo = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["enableNewStudyPlan"] : ["enableNewStudyPlan", e], _n(n, jo, e, i), t)
                };
            zo.document = jo, zo.getKey = function(n) {
                return void 0 === n ? ["enableNewStudyPlan"] : ["enableNewStudyPlan", n]
            };
            var Xo = "\n    query GetStudyPlanCatalogs {\n  studyPlanV2Catalogs {\n    name\n    recommendedStudyPlans\n    slug\n  }\n}\n    ",
                nu = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["GetStudyPlanCatalogs"] : ["GetStudyPlanCatalogs", e], _n(n, Xo, e, i), t)
                };
            nu.document = Xo, nu.getKey = function(n) {
                return void 0 === n ? ["GetStudyPlanCatalogs"] : ["GetStudyPlanCatalogs", n]
            };
            var eu = "\n    query GetEnableNewPlanRankBoardAccess {\n  feature {\n    enableNewPlanRankBoardAccess\n  }\n}\n    ",
                tu = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["GetEnableNewPlanRankBoardAccess"] : ["GetEnableNewPlanRankBoardAccess", e], _n(n, eu, e, i), t)
                };
            tu.document = eu, tu.getKey = function(n) {
                return void 0 === n ? ["GetEnableNewPlanRankBoardAccess"] : ["GetEnableNewPlanRankBoardAccess", n]
            };
            var iu = "\n    query GetMyStudyPlan($progressType: PlanUserProgressTypeEnum!, $offset: Int!, $limit: Int!) {\n  studyPlanV2UserProgresses(\n    progressType: $progressType\n    offset: $offset\n    limit: $limit\n  ) {\n    hasMore\n    total\n    planUserProgresses {\n      nextQuestionInfo {\n        inPremiumSubgroup\n        nextQuestion {\n          id\n          questionFrontendId\n          title\n          titleSlug\n          translatedTitle\n        }\n      }\n      nextQuestionInfo {\n        inPremiumSubgroup\n        nextQuestion {\n          id\n          questionFrontendId\n          title\n          titleSlug\n          translatedTitle\n        }\n      }\n      quittedAt\n      startedAt\n      plan {\n        questionNum\n        slug\n        premiumOnly\n        name\n        onGoing\n        highlight\n        cover\n      }\n      latestSubmissionAt\n      id\n      allCompletedAt\n      finishedQuestionNum\n    }\n  }\n}\n    ",
                ou = function(n, e, t, i) {
                    return (0, Sn.a)(["GetMyStudyPlan", e], _n(n, iu, e, i), t)
                };
            ou.document = iu, ou.getKey = function(n) {
                return ["GetMyStudyPlan", n]
            };
            var uu = "\n    query GetProblemSetStudyPlanAds {\n  studyPlansV2AdQuestionPage {\n    cover\n    highlight\n    name\n    onGoing\n    premiumOnly\n    questionNum\n    slug\n  }\n}\n    ",
                ru = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["GetProblemSetStudyPlanAds"] : ["GetProblemSetStudyPlanAds", e], _n(n, uu, e, i), t)
                };
            ru.document = uu, ru.getKey = function(n) {
                return void 0 === n ? ["GetProblemSetStudyPlanAds"] : ["GetProblemSetStudyPlanAds", n]
            };
            var su = "\n    query GetStudyPlanByCatalog($catalogSlug: String!, $offset: Int!, $limit: Int!) {\n  studyPlansV2ByCatalog(catalogSlug: $catalogSlug, offset: $offset, limit: $limit) {\n    hasMore\n    total\n    studyPlans {\n      slug\n      questionNum\n      premiumOnly\n      onGoing\n      name\n      highlight\n      cover\n    }\n  }\n}\n    ",
                au = function(n, e, t, i) {
                    return (0, Sn.a)(["GetStudyPlanByCatalog", e], _n(n, su, e, i), t)
                };
            au.document = su, au.getKey = function(n) {
                return ["GetStudyPlanByCatalog", n]
            };
            var lu = "\n    query GetStudyPlanListAds {\n  studyPlansV2AdFeature {\n    cover\n    coverBackgroundColor\n    name\n    highlight\n    onGoing\n    questionNum\n    premiumOnly\n    slug\n  }\n}\n    ",
                cu = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["GetStudyPlanListAds"] : ["GetStudyPlanListAds", e], _n(n, lu, e, i), t)
                };
            cu.document = lu, cu.getKey = function(n) {
                return void 0 === n ? ["GetStudyPlanListAds"] : ["GetStudyPlanListAds", n]
            };
            var du = "\n    query GetStudyPlanV2RankingBoard($planSlug: String!) {\n  studyPlanV2RankingBoard(planSlug: $planSlug, limit: 10, offset: 0) {\n    hasMore\n    total\n    userRankInfos {\n      currentRank\n      previousRank\n      finishedQuestionNum\n      userInfo {\n        avatar: userAvatar\n        realName\n        userSlug\n        userName\n      }\n    }\n  }\n}\n    ",
                gu = function(n, e, t, i) {
                    return (0, Sn.a)(["GetStudyPlanV2RankingBoard", e], _n(n, du, e, i), t)
                };
            gu.document = du, gu.getKey = function(n) {
                return ["GetStudyPlanV2RankingBoard", n]
            };
            var mu = "\n    query GetStudyPlanV2UserRank($planSlug: String!) {\n  studyPlanV2UserRank(planSlug: $planSlug) {\n    currentRank\n    finishedQuestionNum\n    hideOnBoard\n    previousRank\n    userInfo {\n      avatar: userAvatar\n      realName\n      userName\n      userSlug\n    }\n  }\n}\n    ",
                yu = function(n, e, t, i) {
                    return (0, Sn.a)(["GetStudyPlanV2UserRank", e], _n(n, mu, e, i), t)
                };
            yu.document = mu, yu.getKey = function(n) {
                return ["GetStudyPlanV2UserRank", n]
            };
            var fu = "\n    query GetStudyPlanV2WeeklyTaskRecords($month: Int!, $planSlug: String!, $year: Int!, $progressId: String) {\n  studyPlanV2WeeklyTaskRecords(\n    month: $month\n    planSlug: $planSlug\n    year: $year\n    progressId: $progressId\n  ) {\n    userWeeklyTaskRecords {\n      date\n      finishedQuestionNums\n      hasCompletedWeeklyTask\n      hasWeeklyTaskSchedule\n      expectedFinishedQuestionNums\n    }\n    planWeeklyTaskSetDate\n    planFinishDate\n  }\n}\n    ",
                Au = function(n, e, t, i) {
                    return (0, Sn.a)(["GetStudyPlanV2WeeklyTaskRecords", e], _n(n, fu, e, i), t)
                };
            Au.document = fu, Au.getKey = function(n) {
                return ["GetStudyPlanV2WeeklyTaskRecords", n]
            };
            var Su = "\n    query studyPlanAwardStatus($slug: String!) {\n  studyPlanV2Detail(planSlug: $slug) {\n    hasMedal\n  }\n}\n    ",
                pu = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanAwardStatus", e], _n(n, Su, e, i), t)
                };
            pu.document = Su, pu.getKey = function(n) {
                return ["studyPlanAwardStatus", n]
            };
            var _u = "\n    query studyPlanCover($slug: String!) {\n  studyPlanV2Detail(planSlug: $slug) {\n    cover\n  }\n}\n    ",
                vu = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanCover", e], _n(n, _u, e, i), t)
                };
            vu.document = _u, vu.getKey = function(n) {
                return ["studyPlanCover", n]
            };
            var Tu = "\n    query studyPlanDetail($slug: String!) {\n  studyPlanV2Detail(planSlug: $slug) {\n    slug\n    name\n    highlight\n    staticCoverPicture\n    colorPalette\n    threeDimensionUrl\n    description\n    premiumOnly\n    needShowTags\n    awardDescription\n    defaultLanguage\n    award {\n      name\n      config {\n        icon\n        iconGif\n        iconGifBackground\n      }\n    }\n    relatedStudyPlans {\n      cover\n      highlight\n      name\n      slug\n      premiumOnly\n    }\n    planSubGroups {\n      slug\n      name\n      premiumOnly\n      questionNum\n      questions {\n        translatedTitle\n        titleSlug\n        title\n        questionFrontendId\n        paidOnly\n        id\n        difficulty\n        hasOfficialSolution\n        topicTags {\n          slug\n          name\n        }\n        solutionInfo {\n          solutionSlug\n          solutionTopicId\n        }\n      }\n    }\n  }\n}\n    ",
                Iu = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanDetail", e], _n(n, Tu, e, i), t)
                };
            Iu.document = Tu, Iu.getKey = function(n) {
                return ["studyPlanDetail", n]
            };
            var Pu = "\n    query studyPlanPastSolved($slug: String!) {\n  studyPlanV2Detail(planSlug: $slug) {\n    planSubGroups {\n      slug\n      questions {\n        titleSlug\n        status\n      }\n    }\n  }\n}\n    ",
                Cu = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanPastSolved", e], _n(n, Pu, e, i), t)
                };
            Cu.document = Pu, Cu.getKey = function(n) {
                return ["studyPlanPastSolved", n]
            };
            var $u = "\n    query studyPlanProgress($slug: String!, $historyId: ID) {\n  studyPlanV2ProgressDetail(planSlug: $slug, id: $historyId) {\n    id\n    status\n    weeklyTaskScheduleResettable\n    finishedQuestionNum\n    studyPlanDetail {\n      questionNum\n      planSubGroups {\n        slug\n        questions {\n          titleSlug\n          status\n        }\n      }\n    }\n  }\n}\n    ",
                qu = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanProgress", e], _n(n, $u, e, i), t)
                };
            qu.document = $u, qu.getKey = function(n) {
                return ["studyPlanProgress", n]
            };
            var bu = "\n    query studyPlanV2CompletedStatus($submissionId: ID!, $planSlug: String!) {\n  studyPlanV2CompletedStatus(submissionId: $submissionId, planSlug: $planSlug) {\n    joinedStudyPlan\n    completedStudyPlan\n    planProgressDetail {\n      finishedQuestionNum\n      status\n      id\n    }\n  }\n}\n    ",
                hu = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanV2CompletedStatus", e], _n(n, bu, e, i), t)
                };
            hu.document = bu, hu.getKey = function(n) {
                return ["studyPlanV2CompletedStatus", n]
            };
            var Du = "\n    query studyPlanV2RecentCompletedProgress($planSlug: String!) {\n  studyPlanV2RecentCompletedProgress(planSlug: $planSlug) {\n    id\n    status\n  }\n}\n    ",
                Eu = function(n, e, t, i) {
                    return (0, Sn.a)(["studyPlanV2RecentCompletedProgress", e], _n(n, Du, e, i), t)
                };
            Eu.document = Du, Eu.getKey = function(n) {
                return ["studyPlanV2RecentCompletedProgress", n]
            };
            var Nu = "\n    query SurveyV2($surveySlug: String!) {\n  surveyV2(surveySlug: $surveySlug) {\n    showSurvey\n    surveyJson\n    leetcoinAmount\n  }\n}\n    ",
                Lu = function(n, e, t, i) {
                    return (0, Sn.a)(["SurveyV2", e], _n(n, Nu, e, i), t)
                };
            Lu.document = Nu, Lu.getKey = function(n) {
                return ["SurveyV2", n]
            };
            var ku = "\n    query activeDiscountEvent {\n  activeDiscountEvent {\n    couponCode\n    banners {\n      title\n      aspectRatioType\n      banner\n      backgroundColor\n      targetUrl\n    }\n    ogImage\n    seoDescription\n    seoTitle\n  }\n}\n    ",
                Ru = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["activeDiscountEvent"] : ["activeDiscountEvent", e], _n(n, ku, e, i), t)
                };
            Ru.document = ku, Ru.getKey = function(n) {
                return void 0 === n ? ["activeDiscountEvent"] : ["activeDiscountEvent", n]
            };
            var Ku = "\n    query currentSubscriptionInfo {\n  currentSubscriptionInfo {\n    currentPlan\n    cardCountryCode\n    paymentMethod\n    billingEmail\n  }\n}\n    ",
                Ou = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["currentSubscriptionInfo"] : ["currentSubscriptionInfo", e], _n(n, Ku, e, i), t)
                };
            Ou.document = Ku, Ou.getKey = function(n) {
                return void 0 === n ? ["currentSubscriptionInfo"] : ["currentSubscriptionInfo", n]
            };
            var Mu = "\n    query defaultSubscriptionPricing {\n  defaultSubscriptionPricing {\n    monthlyPrice {\n      originalPrice\n      discountedPrice\n      discount\n      discountPercent\n      proration\n      isEligibleForIndiaDiscount\n      isValidCode\n      couponCode\n    }\n    yearlyPrice {\n      originalPrice\n      discountedPrice\n      discount\n      discountPercent\n      proration\n      isEligibleForIndiaDiscount\n      isValidCode\n      couponCode\n    }\n  }\n}\n    ",
                Bu = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["defaultSubscriptionPricing"] : ["defaultSubscriptionPricing", e], _n(n, Mu, e, i), t)
                };
            Bu.document = Mu, Bu.getKey = function(n) {
                return void 0 === n ? ["defaultSubscriptionPricing"] : ["defaultSubscriptionPricing", n]
            };
            var Gu = function(n, e, t) {
                    return (0, pn.D)(["discountEventRegister"], (function(e) {
                        return _n(n, "\n    mutation discountEventRegister($discountEventReferral: String!) {\n  discountEventRegister(discountEventReferral: $discountEventReferral) {\n    ok\n    error\n  }\n}\n    ", e, t)()
                    }), e)
                },
                Uu = "\n    query subscriptionPricing($code: String) {\n  subscriptionPricing(code: $code) {\n    monthlyPrice {\n      originalPrice\n      discountedPrice\n      discount\n      discountPercent\n      proration\n      isEligibleForIndiaDiscount\n      isValidCode\n      couponCode\n    }\n    yearlyPrice {\n      originalPrice\n      discountedPrice\n      discount\n      discountPercent\n      proration\n      isEligibleForIndiaDiscount\n      isValidCode\n      couponCode\n    }\n  }\n}\n    ",
                Qu = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["subscriptionPricing"] : ["subscriptionPricing", e], _n(n, Uu, e, i), t)
                };
            Qu.document = Uu, Qu.getKey = function(n) {
                return void 0 === n ? ["subscriptionPricing"] : ["subscriptionPricing", n]
            };
            var wu = "\n    query subscriptionReferral {\n  subscriptionReferral {\n    link\n    referredCount\n  }\n}\n    ",
                Fu = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["subscriptionReferral"] : ["subscriptionReferral", e], _n(n, wu, e, i), t)
                };
            Fu.document = wu, Fu.getKey = function(n) {
                return void 0 === n ? ["subscriptionReferral"] : ["subscriptionReferral", n]
            };
            var Vu = "\n    query globalData {\n  userStatus {\n    userId\n    isSignedIn\n    isMockUser\n    isPremium\n    isVerified\n    username\n    avatar\n    isAdmin\n    isSuperuser\n    permissions\n    isTranslator\n    activeSessionId\n    checkedInToday\n    notificationStatus {\n      lastModified\n      numUnread\n    }\n  }\n}\n    ",
                Hu = function(n, e, t, i) {
                    return (0, Sn.a)(void 0 === e ? ["globalData"] : ["globalData", e], _n(n, Vu, e, i), t)
                };
            Hu.document = Vu, Hu.getKey = function(n) {
                return void 0 === n ? ["globalData"] : ["globalData", n]
            };
            var Wu = "\n    query surveyV2WithoutCheckFunc($surveySlug: String!) {\n  surveyV2WithoutCheckFunc(surveySlug: $surveySlug) {\n    showSurvey\n    surveyJson\n    leetcoinAmount\n  }\n}\n    ",
                xu = function(n, e, t, i) {
                    return (0, Sn.a)(["surveyV2WithoutCheckFunc", e], _n(n, Wu, e, i), t)
                };
            xu.document = Wu, xu.getKey = function(n) {
                return ["surveyV2WithoutCheckFunc", n]
            }
        },
        59564: function(n, e) {
            e.Z = "https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/coin-6275d6995221472db2a76f0931c086e3.gif"
        }
    }
]);