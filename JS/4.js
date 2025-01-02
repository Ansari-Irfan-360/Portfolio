"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[165], {
    8165: function(e, t, r) {
        r.r(t);
        var n = r(5893)
          , a = r(7294)
          , i = r(5079)
          , s = r(3306)
          , o = r(4115)
          , l = r(9444)
          , c = r(8017)
          , u = r(58)
          , f = r(132)
          , h = r(131)
          , d = r(9352);
        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function p(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, a, i = [], s = !0, o = !1;
                    try {
                        for (r = r.call(e); !(s = (n = r.next()).done) && (i.push(n.value),
                        !t || i.length !== t); s = !0)
                            ;
                    } catch (l) {
                        o = !0,
                        a = l
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return m(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return m(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var y = {
            shake: {
                rotate: [0, 15, 0, -15, 0],
                transition: {
                    delay: 1.2,
                    duration: .5,
                    repeat: 2,
                    ease: "easeInOut"
                }
            },
            jump: {
                y: [0, -35, 0],
                transition: {
                    delay: 1.8,
                    duration: .5,
                    repeat: 3,
                    ease: "easeInOut"
                }
            }
        }
          , x = function() {
            var e = p((0,
            h.YD)(), 2)
              , t = e[0]
              , r = e[1];
            return (0,
            n.jsxs)(i.Kq, {
                width: {
                    base: "99%",
                    lg: "60%",
                    xl: "75%"
                },
                height: "100%",
                spacing: {
                    base: 6,
                    xl: 8
                },
                as: "footer",
                children: [(0,
                n.jsxs)(s.X, {
                    size: "2xl",
                    style: {
                        fontVariantCaps: "small-caps"
                    },
                    children: ["Say hi!", " ", (0,
                    n.jsx)(o.x, {
                        as: "span",
                        fontSize: "2xl",
                        variant: "emphasis",
                        children: (0,
                        n.jsx)(f.E.div, {
                            style: {
                                display: "inline-block"
                            },
                            variants: y,
                            ref: t,
                            animate: !!r && ["shake", "jump"],
                            children: "(\u2040\u15e2\u2040)"
                        })
                    })]
                }), (0,
                n.jsxs)(o.x, {
                    variant: "description",
                    children: ["I love coding and working on various projects, so feel free to reach out to me anytime. Whether it's about a coding problem, a new project idea, or just to chat, I'm here. You can message me on social media or shoot me an ",(0,
                    n.jsx)(l.r, {
                        href: "mailto:ansarimdirfan2004@gmail.com",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "email"
                    })," whenever you want."]
                }), (0,
                n.jsx)(c.xu, {
                    spacing: .5,
                    textAlign: "center",
                    fontFamily: "monospace",
                    paddingTop: {
                        base: 10,
                        lg: 20,
                        xl: 20
                    },
                    paddingBottom: {
                        base: 5,
                        lg: 18
                    },
                    children: (0,
                    n.jsx)(l.r, {
                        variant: "description",
                        textDecoration: "none",
                        rel: "noreferrer",
                        href: "https://github.com/Ansari-Irfan-360",
                        target: "_blank",
                        _focus: {
                            boxShadow: "none"
                        },
                        children: (0,
                        n.jsxs)(o.x, {
                            as: "span",
                            children: [(0,
                            n.jsx)(u.J, {
                                as: d.q7V,
                                h: 6,
                                w: 6
                            }), " ", (0,
                            n.jsx)("br", {}), "Designed and Made with ", (0,
                            n.jsx)(u.J, {
                                as: d.kHP
                            }), " ", (0,
                            n.jsx)("br", {})]
                        })
                    })
                })]
            })
        };
        t.default = (0,
        a.memo)(x)
    }
}]);
