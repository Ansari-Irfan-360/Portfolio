(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[753], {
    7753: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            default: function() {
                return v
            }
        });
        var r = t(5893)
          , o = t(980)
          , i = t(3306)
          , a = t(4003)
          , s = t(7086)
          , l = t(3762)
          , c = t(2751)
          , u = t(4115)
          , m = t(4496)
          , d = t.n(m)
          , f = t(7735)
          , p = {
            backend: [{
                name: "Node",
                icon: f.tsj
            }, {
                name: "Javascript (ES6+)",
                icon: f.vl3
            }, {
                name: "Typescript",
                icon: f.WZi
            }],
            frontend: [{
                name: "React",
                icon: f.pNp
            }, {
                name: "NextJS",
                icon: f._T8
            }, {
                name: "Redux",
                icon: f.PoL
            }],
            database: [{
                name: "MySQL",
                icon: f.uJt
            }, {
                name: "MongoDb",
                icon: f.t$b
            }, {
                name: "SocketIO",
                icon: f.c0T
            }],
            cicd: [{
                name: "GCP",
                icon: f.tkX
            }, {
                name: "CPanel",
                icon: f.tIM
            }],
            "ui frameworks": [{
                name: "Styled Components",
                icon: f.BQQ
            }, {
                name: "MaterialUI",
                icon: f.EOq
            }, {
                name: "Framer Motion",
                icon: f.HA2
            }],
            "productivity boost": [{
                name: "VSCode",
                icon: f.RZF
            }, {
                name: "Git",
                icon: f.zS0
            }, {
                name: "Bash",
                icon: f.CEe
            }]
        }
          , x = function(n) {
            var e = n.length
              , t = 4;
            e % 2 === 0 ? t = e / 2 : e <= 5 && e > 2 && (t = 3);
            var r, o = 0, i = [];
            for (o = 0,
            r = n.length; o < r; o += t)
                i.push(n.slice(o, o + t));
            return i
        };
        function h(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, r = new Array(e); t < e; t++)
                r[t] = n[t];
            return r
        }
        function j(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (t = t.call(n); !(a = (r = t.next()).done) && (i.push(r.value),
                        !e || i.length !== e); a = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return h(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === t && n.constructor && (t = n.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return h(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var y = function(n) {
            var e = n.title
              , t = n.columns
              , c = (0,
            o.useColorModeValue)("teal.500", "cyan.200")
              , u = j(t, 2)
              , m = u[0]
              , d = u[1]
              , f = void 0 === d ? [] : d;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(i.X, {
                    as: "div",
                    size: "sm",
                    paddingBottom: 1,
                    variant: "description",
                    children: e
                }), (0,
                r.jsx)(a.i, {
                    marginBottom: 4
                }), (0,
                r.jsxs)(s.M, {
                    columns: 2,
                    spacing: 4,
                    paddingBottom: 6,
                    children: [(0,
                    r.jsx)(l.aV, {
                        spacing: 3,
                        children: m.map((function(n) {
                            return (0,
                            r.jsxs)(l.HC, {
                                fontSize: "small",
                                display: "flex",
                                alignItems: "center",
                                children: [(0,
                                r.jsx)(l.DE, {
                                    as: n.icon,
                                    color: c,
                                    fontSize: "2em"
                                }), n.name]
                            }, n.name)
                        }
                        ))
                    }), (0,
                    r.jsx)(l.aV, {
                        spacing: 3,
                        children: f.map((function(n) {
                            return (0,
                            r.jsxs)(l.HC, {
                                fontSize: "small",
                                display: "flex",
                                alignItems: "center",
                                children: [(0,
                                r.jsx)(l.DE, {
                                    as: n.icon,
                                    color: c,
                                    fontSize: "2em"
                                }), n.name]
                            }, n.name)
                        }
                        ))
                    })]
                })]
            })
        }
          , v = function(n) {
            var e = n.isOpen
              , t = n.onClose
              , o = x(p.backend)
              , i = x(p.frontend)
              , a = x(p.cicd)
              , s = x(p.database)
              , l = x(p["ui frameworks"])
              , m = x(p["productivity boost"]);
            return (0,
            r.jsxs)(c.u_, {
                isOpen: e,
                onClose: t,
                motionPreset: "slideInBottom",
                scrollBehavior: "inside",
                children: [(0,
                r.jsx)(c.ZA, {}), (0,
                r.jsxs)(c.hz, {
                    children: [(0,
                    r.jsx)(c.xB, {
                        children: "Full Skill Set List"
                    }), (0,
                    r.jsx)(c.ol, {}), (0,
                    r.jsxs)(c.fe, {
                        className: d().skillModal,
                        children: [(0,
                        r.jsx)(y, {
                            title: "Backend Centric",
                            columns: o
                        }), (0,
                        r.jsx)(y, {
                            title: "Frontend Centric",
                            columns: i
                        }), (0,
                        r.jsx)(y, {
                            title: "CICD centric",
                            columns: a
                        }), (0,
                        r.jsx)(y, {
                            title: "Database and Streams",
                            columns: s
                        }), (0,
                        r.jsx)(y, {
                            title: "Ui Frameworks",
                            columns: l
                        }), (0,
                        r.jsx)(y, {
                            title: "Productivity boosts",
                            columns: m
                        })]
                    }), (0,
                    r.jsx)(c.mz, {
                        children: (0,
                        r.jsx)(u.x, {
                            fontSize: "x-small",
                            children: "*Some micro frameworks not included "
                        })
                    })]
                })]
            })
        }
    },
    4496: function(n) {
        n.exports = {
            skillModal: "styles_skillModal__FdspN"
        }
    }
}]);
