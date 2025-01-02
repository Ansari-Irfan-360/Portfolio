(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(8505);
        },
      ]);
    },
    8505: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return rt;
          },
          default: function () {
            return ot;
          },
        });
      var n = i(5893),
        a = i(5629),
        r = i(9345),
        o = i(5079),
        s = i(8017),
        l = i(5152),
        c = i(9008),
        d = function () {
          return (0, n.jsxs)(c.default, {
            children: [
              (0, n.jsx)("title", {
                children: "Ansari Irfan",
              }),
              (0, n.jsx)("meta", {
                name: "description",
                content: "My personal solace place on web-earth.",
              }),
              (0, n.jsx)("meta", {
                property: "og:title",
                content: "Ansari Irfan",
              }),
              (0, n.jsx)("meta", {
                property: "og:site_name",
                content: "Ansari Irfan",
              }),
              (0, n.jsx)("meta", {
                property: "og:url",
                content: "/",
              }),
              (0, n.jsx)("meta", {
                property: "og:description",
                content:
                  "Ohh you found me? Hello there! I am Ansari Irfan.I am a self-taught passionate full stack developer from India, currently in my final year of bachelors in computer science and engineering",
              }),
              (0, n.jsx)("meta", {
                property: "og:type",
                content: "profile",
              }),
              (0, n.jsx),
            ],
          });
        },
        h = i(7294),
        p = i(131),
        u = i(8638),
        x = i(132),
        g = 0.3,
        m = 0.6,
        f = 1.8,
        b = [0.6, -0.05, 0.01, 0.99],
        j = {
          initial: {
            y: 60,
            opacity: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: m,
              ease: b,
            },
          },
        },
        y = {
          initial: {
            y: 80,
            opacity: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: b,
            },
          },
        },
        v = {
          initial: {
            opacity: 0,
          },
          animate: {
            letterSpacing: ["0px", "-10px", "0px"],
            opacity: 1,
            transition: {
              duration: 1.2,
              ease: b,
            },
          },
        },
        w = {
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              duration: m,
              ease: b,
            },
          },
        },
        S = {
          initial: {
            scale: 0,
            opacity: 0,
          },
          animate: {
            opacity: [0, 1],
            scale: [1, 1.05, 1],
            transition: {
              duration: f,
              ease: b,
            },
          },
          lightMode: {
            opacity: [0, 1],
            scale: [0.99, 1.05, 1],
            transition: {
              duration: f,
              ease: b,
            },
          },
        },
        k = {
          show: {
            y: 0,
            opacity: 1,
            transition: {
              ease: b,
              duration: g,
            },
          },
          hide: {
            opacity: 0,
            y: -100,
            transition: {
              ease: b,
              duration: g,
            },
          },
        },
        C = {
          initial: {
            opacity: 0,
            y: 60,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: m,
              ease: b,
            },
          },
          exit: {
            opacity: 0,
          },
        },
        _ = {
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        },
        M = {
          animate: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        };
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function I(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                a,
                r = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (r.push(n.value), !t || r.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (a = l);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw a;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return z(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(i);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var D = function (e) {
          var t = e.children,
            i = (0, u._)(),
            a = I(
              (0, p.YD)({
                threshold: 0.3,
              }),
              2
            ),
            r = a[0],
            o = a[1];
          return (
            (0, h.useEffect)(
              function () {
                o && i.start("animate");
              },
              [i, o]
            ),
            (0, n.jsx)(x.E.div, {
              style: {
                margin: 0,
              },
              ref: r,
              animate: i,
              initial: "initial",
              variants: y,
              children: t,
            })
          );
        },
        E = i(980),
        T = i(3850),
        A = i(8322),
        H = i(5063),
        O = i(4441),
        N = i(7284),
        W = i.n(N),
        L = i(1027),
        P = function () {
          var e = (0, E.useColorMode)().colorMode,
            t = (0, h.useState)(!1),
            i = t[0],
            r = t[1],
            o = (0, x.E)(A.E),
            s = (0, a.S)(L.RH);
          return (0, n.jsx)(O.M, {
            children: (0, n.jsx)(H.default, {
              href: "/",
              passHref: !0,
              children:
                e === L.hY.Dark
                  ? (0, n.jsx)(o, {
                      className: s ? "" : W().logo,
                      boxSize: s ? "30px" : "50px",
                      objectFit: "cover",
                      src: "./IMG/logo.png",
                      alt: "KL Lawingco Logo",
                      fallbackSrc: "./IMG/logo.png",
                      variants: w,
                      initial: "initial",
                      animate: i && "animate",
                      onLoad: function () {
                        return r(!0);
                      },
                      zIndex: 2,
                    })
                  : (0, n.jsx)(o, {
                      className: s ? "" : W().logo,
                      boxSize: s ? "30px" : "50px",
                      objectFit: "cover",
                      src: "./IMG/logo.png",
                      fallbackSrc: "./IMG/logo.png",
                      alt: "KL Lawingco Logo",
                      variants: w,
                      initial: "initial",
                      animate: i && "animate",
                      onLoad: function () {
                        return r(!0);
                      },
                      zIndex: 2,
                    }),
            }),
          });
        },
        U = (0, h.memo)(P),
        B = i(6507),
        F = i.n(B),
        R = i(8420),
        V = i(4096),
        J = i(1729),
        X = i(9950),
        Y = i(6755),
        G = i(4777);
      function K(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var q,
        Q = function (e) {
          return (0, n.jsx)(
            x.E.path,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(i).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(i, e).enumerable;
                    })
                  )),
                  n.forEach(function (t) {
                    K(e, t, i[t]);
                  });
              }
              return e;
            })(
              {
                fill: "transparent",
                strokeWidth: "3",
                stroke: (null === e || void 0 === e ? void 0 : e.isDarkMode)
                  ? "hsl(240, 100%, 94%)"
                  : "hsl(0, 0%, 7%)",
                strokeLinecap: "round",
              },
              e
            )
          );
        },
        $ = function (e) {
          var t = e.toggle,
            i = e.isDarkMode,
            a = void 0 !== i && i;
          return (0, n.jsx)("button", {
            onClick: t,
            style: {
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            children: (0, n.jsxs)("svg", {
              width: "23",
              height: "23",
              viewBox: "0 0 23 18",
              children: [
                (0, n.jsx)(Q, {
                  isDarkMode: a,
                  variants: {
                    closed: {
                      d: "M 2 2.5 L 20 2.5",
                    },
                    open: {
                      d: "M 3 16.5 L 17 2.5",
                    },
                  },
                }),
                (0, n.jsx)(Q, {
                  isDarkMode: a,
                  d: "M 2 9.423 L 20 9.423",
                  variants: {
                    closed: {
                      opacity: 1,
                    },
                    open: {
                      opacity: 0,
                    },
                  },
                  transition: {
                    duration: 0.1,
                  },
                }),
                (0, n.jsx)(Q, {
                  isDarkMode: a,
                  variants: {
                    closed: {
                      d: "M 2 16.346 L 20 16.346",
                    },
                    open: {
                      d: "M 3 2.5 L 17 16.346",
                    },
                  },
                }),
              ],
            }),
          });
        },
        Z = function (e) {
          var t = e.isOpen,
            i = e.toggle,
            a = e.isDarkMode,
            r = void 0 !== a && a;
          return (0, n.jsx)(x.E.nav, {
            initial: !1,
            animate: t ? "open" : "closed",
            style: {
              display: "flex",
              alignItems: "center",
            },
            children: (0, n.jsx)($, {
              toggle: function () {
                return i();
              },
              isDarkMode: r,
            }),
          });
        };
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"),
          (e[(e.Down = 1)] = "Down"),
          (e[(e.Up = 2)] = "Up");
      })(q || (q = {}));
      var ee = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          n = (0, h.useState)(q.Initial),
          a = n[0],
          r = n[1],
          o = (0, h.useState)(!1),
          s = o[0],
          l = o[1];
        return (
          (0, h.useEffect)(
            function () {
              var n = document.querySelector("#klAvatar"),
                o =
                  (null === n || void 0 === n ? void 0 : n.offsetTop) +
                  n.clientHeight -
                  100,
                c = window.scrollY || 0,
                d = !1,
                h = function () {
                  var n = window.scrollY || 0;
                  if (Math.abs(n - c) < 10) d = !1;
                  else {
                    var s = !(!e && i) || n > o;
                    q.Initial;
                    ((n > c && s) || (s && !t) ? q.Down : q.Up) !== a &&
                      r(n > c ? q.Down : q.Up),
                      (c = n > 0 ? n : 0),
                      (d = !1);
                  }
                },
                p = function () {
                  d || (window.requestAnimationFrame(h), (d = !0));
                };
              return (
                ((e && t) || !e) &&
                  (null === window ||
                    void 0 === window ||
                    window.addEventListener("scroll", p)),
                !t && !s && c > o && (r(q.Down), l(!0)),
                function () {
                  null === window ||
                    void 0 === window ||
                    window.removeEventListener("scroll", p);
                }
              );
            },
            [a, e, t, s, i]
          ),
          a
        );
      };
      function te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function ie(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                a,
                r = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (r.push(n.value), !t || r.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (a = l);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw a;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return te(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(i);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return te(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var ne = function () {
          var e = (0, E.useColorMode)(),
            t = e.toggleColorMode,
            i = e.colorMode,
            r = (0, x.E)(T.W),
            o = ie((0, G.n)(!1, !0), 2),
            l = o[0],
            c = o[1],
            d = (0, a.S)(L.RH),
            p = (0, a.S)({
              base: "xl",
              md: "sm",
            }),
            u = (0, E.useColorModeValue)(
              "rgba(237, 242, 247, 0.95)",
              "rgba(18, 18, 18, 0.9)"
            ),
            g = (0, E.useColorModeValue)("teal.500", "cyan.200"),
            m = i === L.hY.Dark,
            f = "".concat(F().blogBtn, " ").concat(!m && F().dark),
            j = m ? X.N : Y.k,
            y = (0, h.useCallback)(
              function (e) {
                e.stopPropagation(), d && c();
              },
              [d, c]
            ),
            v = ee();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(s.xu, {
                display: {
                  base: "flex",
                  xl: "none",
                },
                alignItems: "center",
                paddingTop: 1,
                className: F().menuBar,
                zIndex: 100,
                top: "3%",
                children: [
                  (0, n.jsx)(R.h, {
                    "aria-label": "Color Mode",
                    variant: "ghost",
                    icon: (0, n.jsx)(j, {}),
                    boxShadow: "none",
                    onClick: t,
                    padding: 0,
                  }),
                  (0, n.jsx)(Z, {
                    isDarkMode: m,
                    toggle: c,
                    isOpen: l,
                  }),
                ],
              }),
              (0, n.jsx)(r, {
                width: "100%",
                backgroundColor: u,
                maxWidth: {
                  base: "100%",
                  sm: "100%",
                  lg: "50%",
                  xl: "60%",
                },
                className: F().menu,
                right: {
                  lg: d || v !== q.Down ? "3.5%" : "2%",
                },
                initial: "hide",
                animate: (!d || l) && "show",
                style: {
                  width: d || v !== q.Down ? "100%" : "12%",
                  top: !l && d && "-100vh",
                  opacity: !l && d && "0",
                  left: l && d && 0,
                },
                borderColor: l && d && g,
                borderBottomWidth: l && d && "1px",
                paddingBottom: l && d && "1px",
                ease: b,
                variants: k,
                marginTop: 0,
                paddingTop: 1,
                as: "nav",
                children: (0, n.jsxs)(V.k, {
                  justifyContent: {
                    base: "center",
                    lg: "flex-end",
                  },
                  direction: {
                    base: "column",
                    lg: v === q.Down ? "column" : "row",
                  },
                  paddingX: {
                    base: "",
                    sm: "10",
                    lg: "0",
                  },
                  paddingY: {
                    base: "10",
                    lg: v === q.Down ? "10" : "3",
                  },
                  height: {
                    base: "100vh",
                    lg: "auto",
                  },
                  paddingRight: "0",
                  paddingBottom: d ? 10 : "0",
                  onClick: function () {
                    return d && c();
                  },
                  children: [
                    (0, n.jsx)(s.xu, {
                      width: {
                        base: "100%",
                        lg: "auto",
                      },
                      textAlign: {
                        base: "center",
                        lg: "left",
                      },
                      children: (0, n.jsx)(J.z, {
                        fontWeight: "light",
                        variant: "ghost",
                        fontSize: p,
                        letterSpacing: 2,
                        className: f,
                        padding: 2,
                        marginX: 2,
                        as: "a",
                        href: d ? "#aboutMe" : "#",
                        rel: "noreferrer",
                        onClick: y,
                        children: "About",
                      }),
                    }),
                    (0, n.jsx)(s.xu, {
                      width: {
                        base: "100%",
                        lg: "auto",
                      },
                      textAlign: {
                        base: "center",
                        lg: "left",
                      },
                      marginY: {
                        base: 2,
                        lg: 0,
                      },
                      children: (0, n.jsx)(J.z, {
                        fontWeight: "light",
                        variant: "ghost",
                        fontSize: p,
                        letterSpacing: 2,
                        className: f,
                        padding: 2,
                        marginX: 2,
                        as: "a",
                        href: "#jobs",
                        rel: "noreferrer",
                        onClick: y,
                        children: "Experience",
                      }),
                    }),
                    (0, n.jsx)(s.xu, {
                      width: {
                        base: "100%",
                        lg: "auto",
                      },
                      textAlign: {
                        base: "center",
                        lg: "left",
                      },
                      marginY: {
                        base: 2,
                        lg: 0,
                      },
                      children: (0, n.jsx)(J.z, {
                        fontWeight: "light",
                        variant: "ghost",
                        fontSize: p,
                        letterSpacing: 2,
                        className: f,
                        padding: 2,
                        marginX: 2,
                        as: "a",
                        href: "#works",
                        rel: "noreferrer",
                        onClick: y,
                        children: "Projects",
                      }),
                    }),
                    (0, n.jsx)(s.xu, {
                      width: {
                        base: "100%",
                        lg: "auto",
                      },
                      textAlign: {
                        base: "center",
                        lg: "left",
                      },
                      marginY: {
                        base: 2,
                        lg: 0,
                      },
                      children: (0, n.jsx)(J.z, {
                        fontWeight: "light",
                        variant: "ghost",
                        fontSize: p,
                        letterSpacing: 2,
                        className: f,
                        padding: 2,
                        marginX: 2,
                        as: "a",
                        href: "#contact",
                        rel: "noreferrer",
                        onClick: y,
                        children: "Contact",
                      }),
                    }),
                    !d &&
                      (0, n.jsx)(s.xu, {
                        children: (0, n.jsx)(R.h, {
                          marginX: 1,
                          "aria-label": "Color Mode",
                          variant: "ghost",
                          icon: (0, n.jsx)(j, {}),
                          boxShadow: "none",
                          onClick: t,
                        }),
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        ae = (0, h.memo)(ne),
        re = {
          hidden: {
            opacity: [1, 0.85, 0],
            y: -80,
            transition: {
              ease: "easeInOut",
              duration: 0.35,
            },
          },
          show: {
            opacity: [0, 0.85, 1],
            y: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.28,
            },
          },
        },
        oe = function () {
          var e = (0, E.useColorModeValue)("gray.100", "black"),
            t = (0, u._)(),
            i = (0, a.S)(L.RH),
            r = ee(!0, i);
          return (
            (0, h.useEffect)(
              function () {
                r === q.Down && i ? t.start("hidden") : t.start("show");
              },
              [i, t, r]
            ),
            (0, n.jsx)(x.E.div, {
              initial: !!i && "hidden",
              variants: re,
              animate: t,
              className: i ? F().mobileMenuContainer : "",
              children: (0, n.jsxs)(T.W, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: {
                  base: 5,
                  lg: 0,
                },
                paddingY: {
                  base: 5,
                  lg: 0,
                },
                backgroundColor: i ? e : "transparent",
                width: "100vw",
                maxWidth: "100vw",
                margin: 0,
                children: [(0, n.jsx)(U, {}), (0, n.jsx)(ae, {})],
              }),
            })
          );
        },
        se = i(3306),
        le = i(4115),
        ce = i(9444),
        de = i(58),
        he = i(970),
        pe = i.n(he),
        ue = i(9583),
        xe = [
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ansari-irfan-/",
            icon: ue.ltd,
          },
          {
            label: "Github",
            href: "https://github.com/Ansari-Irfan-360",
            icon: ue.hJX,
          },
          {
            label: "Twitter",
            href: "https://x.com/AnsariIrfan360",
            icon: ue.fWC,
          },
          {
            label: "Leetcode",
            href: "https://leetcode.com/u/Ansari_Irfan/",
            icon: ue.Vlo,
          },
        ],
        ge = function () {
          var e = (0, E.useColorMode)().colorMode,
            t = (0, a.S)({
              base: "none",
              lg: "block",
            }),
            i = (0, a.S)({
              base: "3xl",
              md: "4xl",
            }),
            r = (0, x.E)(se.X),
            l = (0, x.E)(le.x),
            c = (0, x.E)(o.Kq),
            d = (0, x.E)(J.z),
            h = (0, x.E)(s.xu);
          return (0, n.jsxs)(h, {
            initial: "initial",
            animate: "animate",
            position: {
              xl: "fixed",
            },
            maxWidth: {
              xl: "34%",
            },
            top: {
              lg: 0,
            },
            children: [
              (0, n.jsx)(x.E.div, {
                id: "sidebarCircle",
                className: ""
                  .concat(pe().sidebar, " ")
                  .concat("light" === e ? pe().dark : ""),
                variants: S,
                style: {
                  display: t,
                },
                animate: "dark" === e ? "animate" : "lightMode",
              }),
              (0, n.jsx)(T.W, {
                padding: 0,
                margin: 0,
                height: {
                  xl: "100vh",
                },
                display: {
                  xl: "flex",
                },
                alignItems: {
                  xl: "center",
                },
                children: (0, n.jsxs)(c, {
                  variants: _,
                  spacing: 6,
                  w: "100",
                  children: [
                    (0, n.jsx)(l, {
                      variants: j,
                      delay: 1,
                      variant: "accent",
                      fontWeight: "light",
                      children: "Ohh you found me? Hello there! I am",
                    }),
                    (0, n.jsx)(r, {
                      as: "h1",
                      size: "2xl",
                      paddingRight: {
                        lg: "20",
                      },
                      textTransform: "uppercase",
                      variants: j,
                      children: "Ansari",
                    }),
                    (0, n.jsx)(r, {
                      as: "h2",
                      size: i,
                      variant: "emphasis",
                      className: pe().marginTopForce,
                      textTransform: "uppercase",
                      variants: v,
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.9,
                      },
                      children: "Irfan",
                    }),
                    (0, n.jsxs)(l, {
                      colorScheme: "gray",
                      fontSize: "smaller",
                      className: pe().marginTopForce,
                      variants: j,
                      children: ["   ", "A full stack web developer"],
                    }),
                    (0, n.jsx)(r, {
                      as: "h3",
                      size: "md",
                      variant: "emphasis",
                      className: pe().marginTopSmall,
                      variants: j,
                      children: "Computer Science Undergrad",
                    }),
                    (0, n.jsxs)(l, {
                      variant: "description",
                      fontSize: "small",
                      paddingRight: {
                        lg: "12",
                      },
                      variants: j,
                      maxWidth: {
                        base: "100%",
                        lg: "80%",
                      },
                      children: [
                        "Hey! How nice of you to look at my personal site,",
                        (0, n.jsxs)(le.x, {
                          variant: "emphasis",
                          as: "span",
                          children: [" ", "Thank you!"],
                        }),
                        (0, n.jsx)("br", {}),
                        "I am a self-taught passionate full stack developer from India, currently in my final year of",
                        " ",
                        (0, n.jsx)(le.x, {
                          as: "span",
                          variant: "emphasis",
                          children: (0, n.jsx)("b", {
                            children:
                              "bachelors in computer science and engineering ",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(d, {
                      size: "lg",
                      variant: "outline",
                      borderWidth: "1px",
                      borderRadius: "0",
                      fontWeight: "normal",
                      fontSize: "sm",
                      width: "120px",
                      variants: w,
                      as: "a",
                      href: "mailto:ansarimdirfan2004@gmail.com",
                      target: "_blank",
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.9,
                      },
                      children: "Get in touch!",
                    }),
                    (0, n.jsx)(h, {
                      d: "flex",
                      variants: w,
                      children: xe.map(function (e) {
                        return (0, n.jsx)(
                          ce.r,
                          {
                            variant: "description",
                            "aria-label": e.label,
                            rel: "noreferrer",
                            width: 8,
                            href: e.href,
                            target: "_blank",
                            _focus: {
                              boxShadow: "none",
                            },
                            children: (0, n.jsx)(de.J, {
                              w: 6,
                              h: 6,
                              as: e.icon,
                              color: "currentColor",
                            }),
                          },
                          e.label
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        me = i(6389),
        fe = "./IMG/Profile_Photo.png",
        be = "./IMG/Profile_Photo.png",
        je = function () {
          var e = (0, x.E)(s.xu),
            t = (0, E.useColorModeValue)(be, fe);
          return (
            (0, h.useEffect)(function () {
              var e = [fe, be].map(function (e) {
                var t = new Image();
                return (t.src = e), t;
              });
              window.preloadedPictures = e;
            }, []),
            (0, n.jsx)(O.M, {
              children: (0, n.jsx)(e, {
                id: "klAvatar",
                boxSize: {
                  base: 64,
                  lg: "sm",
                },
                padding: {
                  base: 8,
                },
                marginBottom: {
                  base: 10,
                  md: 0,
                  lg: 0,
                },
                initial: "initial",
                animate: "animate",
                variants: C,
                exit: {
                  opacity: 0,
                },
                children: (0, n.jsx)(A.E, {
                  src: t,
                  alt: "Ansari Irfan Avatar",
                  htmlWidth: "250",
                  htmlHeight: "250",
                  margin: "auto",
                  fallback: (0, n.jsx)(me.s7, {
                    height: "100%",
                    width: "100%",
                  }),
                }),
              }),
            })
          );
        },
        ye = i(4860),
        ve = i(8101),
        we = i(7086),
        Se = i(3762),
        ke = i(7735),
        Ce = i(2585),
        _e = i(1649),
        Me = function (e) {
          var t = e.onOpen,
            i = (0, E.useColorModeValue)("teal.500", "cyan.200");
          return (0, n.jsxs)(o.Kq, {
            width: {
              base: "100%",
              lg: "70%",
            },
            spacing: {
              base: 6,
              xl: 8,
            },
            as: "section",
            children: [
              (0, n.jsx)(se.X, {
                as: "h4",
                size: "2xl",
                letterSpacing: 1.8,
                style: {
                  fontVariantCaps: "small-caps",
                },
                children: "What i do.",
              }),
              (0, n.jsxs)(le.x, {
                variant: "description",
                children: [
                  "I have been building projects on the web since when I was in my first year of college, I have made many dynamic side projects that I have depoyed on my ",
                  (0, n.jsxs)(ce.r, {
                    href: "https://github.com/Ansari-Irfan-360/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: ["Github"],
                  }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("br", {}),
                  "I like solving DSA problems and actively participates in competitive coding on platforms like ",
                  (0, n.jsxs)(ce.r, {
                    href: "https://leetcode.com/u/Ansari_Irfan/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: ["Leetcode"],
                  }),
                  " & ",
                  (0, n.jsxs)(ce.r, {
                    href: "https://www.codechef.com/users/ansariirfan",
                    target: "_blank",
                    rel: "noreferrer",
                    children: ["CodeChef"],
                  }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("br", {}),
                  "Here are few technologies that are cup of my",
                  " ",
                  (0, n.jsx)(ve.u, {
                    label: "I love to drink tea too!",
                    "aria-label": "I love Tea!",
                    hasArrow: !0,
                    children: (0, n.jsx)(le.x, {
                      as: "span",
                      variant: "emphasis",
                      textDecorationLine: "line-through",
                      children: "tea",
                    }),
                  }),
                  " ",
                  "coffee ",
                  (0, n.jsx)(de.J, {
                    as: Ce.o5n,
                    color: i,
                  }),
                  ".",
                ],
              }),
              (0, n.jsxs)(we.M, {
                columns: 2,
                spacing: 4,
                children: [
                  (0, n.jsxs)(Se.aV, {
                    spacing: 3,
                    children: [
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.vl3,
                            color: i,
                            fontSize: "2em",
                          }),
                          "Javascript",
                        ],
                      }),
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.pNp,
                            color: i,
                            fontSize: "2em",
                          }),
                          "React",
                        ],
                      }),
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.c0T,
                            color: i,
                            fontSize: "2em",
                          }),
                          "SocketIO",
                        ],
                      }),
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.PoL,
                            color: i,
                            fontSize: "2em",
                          }),
                          "Redux",
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)(Se.aV, {
                    spacing: 3,
                    children: [
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.t$b,
                            color: i,
                            fontSize: "2em",
                          }),
                          "MongoDB",
                        ],
                      }),
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.uJt,
                            color: i,
                            fontSize: "2em",
                          }),
                          "MySQL",
                        ],
                      }),
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.zS0,
                            color: i,
                            fontSize: "2em",
                          }),
                          "Git",
                        ],
                      }),
                      (0, n.jsxs)(Se.HC, {
                        fontSize: "small",
                        display: "flex",
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(Se.DE, {
                            as: ke.tsj,
                            color: i,
                            fontSize: "2em",
                          }),
                          "Node",
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(s.xu, {
                    children: (0, n.jsxs)(le.x, {
                      as: "button",
                      variant: "emphasis",
                      fontSize: "smaller",
                      textAlign: "left",
                      onClick: () => {
                        window.location.href =
                          "https://github.com/Ansari-Irfan-360";
                      },
                      children: [
                        "See all my familier skills ",
                        (0, n.jsx)(de.J, {
                          as: _e.yxV,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ze = (0, h.memo)(Me),
        Ie = (0, l.default)(
          function () {
            return Promise.all([i.e(751), i.e(753)]).then(i.bind(i, 7753));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7753];
              },
            },
          }
        ),
        De = function () {
          var e = (0, ye.q)(),
            t = e.isOpen,
            i = e.onOpen,
            a = e.onClose;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(ze, {
                onOpen: i,
              }),
              (0, n.jsx)(Ie, {
                isOpen: t,
                onClose: a,
              }),
            ],
          });
        },
        Ee = (0, h.memo)(De),
        Te = i(1545),
        Ae = i(454),
        He = i(7516),
        Oe = i(6301),
        Ne = i.n(Oe),
        We = {
          Deloitte: {
            name: "Unicorniz",
            longName: "Unicorniz Innovation",
            subDetail:
              "Unicorniz Innovation is a company that offers IT services",
            url: "https://unicorniz.com/",
            position: "Web Development Intern",
            duration: "Jan 2024 - Apr 2024",
            logo: {
              light: "./IMG/Unicorniz-logo.png",
              dark: "./IMG/Unicorniz-logo-dark.png",
            },
            roles: [
              (0, n.jsxs)(n.Fragment, {
                children: [
                  "Developed a driver's data input section with ",
                  (0, n.jsx)("b", {
                    children: "ReactJs ",
                  }),
                  " and",
                  " ",
                  (0, n.jsx)("b", {
                    children: "MaterialUI",
                  }),
                  ".",
                  " ",
                ],
              }),
              (0, n.jsxs)(n.Fragment, {
                children: [
                  "Created REST APIs to fetch and insert data into the database.",
                ],
              }),
              (0, n.jsxs)(n.Fragment, {
                children: [
                  "Converted initially hardcoded data into dynamic data by creating a database schema and APIs for integration.",
                ],
              }),
            ],
          },
          Blotocol: {
            name: "Infotrixs",
            longName: "Accenture",
            subDetail: "IT Company",
            url: "/",
            position: "Full Stack Developer Intern",
            duration: "July 2023 - Aug 2023",
            logo: {
              light: "./IMG/infotrixs-light.png",
              dark: "./IMG/infotrixs-light.png",
            },
            roles: [
              (0, n.jsx)(n.Fragment, {
                children:
                  "Completed practical tasks which were based on the web development.",
              }),
              (0, n.jsx)(n.Fragment, {
                children: "Implemented and Debugged web projects.",
              }),
              (0, n.jsx)(n.Fragment, {
                children: "Was appointed as a Team Leader",
              }),
            ],
          },
        },
        Le = [We.Deloitte, We.Blotocol],
        Pe = function () {
          var e,
            t = (0, E.useColorMode)().colorMode,
            i = (0, E.useColorModeValue)("teal.500", "cyan.200"),
            r = (0, E.useColorModeValue)("gray.300", "gray.600"),
            s = (0, E.useColorModeValue)("teal.500", "#97DFFC"),
            l = (0, a.S)(L.RH),
            c =
              null !==
                (e = (0, a.S)({
                  base: "horizontal",
                  sm: "horizontal",
                  md: "vertical",
                  lg: "vertical",
                  xl: "vertical",
                })) && void 0 !== e
                ? e
                : "vertical",
            d = (0, a.S)({
              base: "160px",
              sm: "160px",
              md: "auto",
              lg: "auto",
              xl: "auto",
            });
          return (0, n.jsxs)(Te.mQ, {
            id: "experienceTabs",
            orientation: c,
            isLazy: !0,
            children: [
              (0, n.jsx)(Te.td, {
                width: l ? "auto" : "30%",
                borderColor: "transparent",
                overflowX: l ? "scroll" : "auto",
                overflowY: "hidden",
                className: Ne().experienceTabs,
                children: Le.map(function (e) {
                  return (0, n.jsx)(
                    Te.OK,
                    {
                      fontSize: "smaller",
                      h: "120px",
                      minWidth: d,
                      boxShadow: "none",
                      borderColor: r,
                      borderLeftWidth: "vertical" === c ? "4px" : "0",
                      _selected: {
                        borderColor: s,
                        boxShadow: "none",
                        borderLeftWidth: "vertical" === c ? "4px" : "0",
                        borderBottomWidth: "horizontal" === c ? "4px" : "0",
                        background: "whiteAlpha.100",
                      },
                      borderBottomWidth: "horizontal" === c ? "4px" : "0",
                      children: (0, n.jsx)(A.E, {
                        src: "dark" === t ? e.logo.dark : e.logo.light,
                        alt: e.longName,
                        maxWidth: "88px",
                        fallback: (0, n.jsx)(me.Od, {
                          height: "100%",
                          width: "100%",
                        }),
                      }),
                    },
                    "Tab-".concat(e.name)
                  );
                }),
              }),
              (0, n.jsx)(Te.nP, {
                children: Le.map(function (e) {
                  var t;
                  return (0, n.jsx)(
                    Te.x4,
                    {
                      children: (0, n.jsxs)(Ae.R, {
                        offsetY: "20px",
                        in: !0,
                        children: [
                          (0, n.jsxs)(o.Kq, {
                            spacing: 0,
                            children: [
                              (0, n.jsx)(le.x, {
                                as: "span",
                                fontSize: "lg",
                                fontWeight: "bold",
                                variant: "description",
                                children: e.position,
                              }),
                              (0, n.jsxs)(le.x, {
                                as: "span",
                                children: [
                                  (0, n.jsxs)(ce.r, {
                                    href: e.url,
                                    "aria-label": "scentregroup",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    fontSize: "lg",
                                    fontWeight: "bold",
                                    children: ["#", e.name],
                                  }),
                                  (0, n.jsxs)(le.x, {
                                    as: "span",
                                    textTransform: "none",
                                    fontSize: "x-small",
                                    variant: "description",
                                    children: [" ", e.subDetail],
                                  }),
                                ],
                              }),
                              (0, n.jsx)(le.x, {
                                fontSize: "smaller",
                                children: e.duration,
                              }),
                            ],
                          }),
                          (0, n.jsx)(Se.aV, {
                            spacing: 3,
                            pt: 5,
                            children:
                              null === (t = e.roles) || void 0 === t
                                ? void 0
                                : t.map(function (t, a) {
                                    return (0, n.jsxs)(
                                      Se.HC,
                                      {
                                        fontSize: "smaller",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        children: [
                                          (0, n.jsx)(Se.DE, {
                                            as: He.U6L,
                                            color: i,
                                            display: "block",
                                          }),
                                          (0, n.jsx)(le.x, {
                                            as: "span",
                                            display: "block",
                                            variant: "description",
                                            children: t,
                                          }),
                                        ],
                                      },
                                      "".concat(e.name, "-desc-").concat(a)
                                    );
                                  }),
                          }),
                        ],
                      }),
                    },
                    "TabPanel-".concat(e.name)
                  );
                }),
              }),
            ],
          });
        },
        Ue = function () {
          return (0, n.jsxs)(o.Kq, {
            width: {
              base: "99%",
              lg: "60%",
              xl: "75%",
            },
            height: "100%",
            spacing: {
              base: 6,
              xl: 8,
            },
            children: [
              (0, n.jsx)(se.X, {
                size: "2xl",
                style: {
                  fontVariantCaps: "small-caps",
                },
                children: "My Experience",
              }),
              (0, n.jsx)(Pe, {}),
            ],
          });
        },
        Be = (0, h.memo)(Ue),
        Fe = i(4003),
        Re = i(3032),
        Ve = i.n(Re),
        Je = {
          normal: {
            opacity: 0.85,
          },
          hover: {
            scale: 1.1,
            opacity: 1,
            transition: {
              duration: m,
              ease: "backOut",
            },
          },
          tap: {
            scale: 0.85,
            opacity: 1,
            transition: {
              duration: m,
              ease: b,
            },
          },
        },
        Xe = (0, x.E)(A.E),
        Ye = function (e) {
          var t = e.idx,
            i = e.title,
            a = e.description,
            r = e.ctaUrl,
            r2 = e.ctaUrl2,
            s = e.isLeft;
          return (0, n.jsxs)(T.W, {
            paddingX: 5,
            paddingY: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            children: [
              (0, n.jsxs)(o.Kq, {
                spacing: 1,
                width: "100%",
                children: [
                  (0, n.jsxs)(le.x, {
                    fontSize: {
                      base: "md",
                      md: "large",
                      "2xl": "xx-large",
                    },
                    fontWeight: "bold",
                    letterSpacing: 2,
                    width: "90%",
                    alignSelf: s ? "flex-end" : "flex-start",
                    textTransform: "uppercase",
                    as: "span",
                    children: [
                      (0, n.jsxs)(le.x, {
                        variant: "accentAlternative",
                        fontSize: "md",
                        as: "span",
                        children: ["#0", t, "  "],
                      }),
                      i,
                    ],
                  }),
                  (0, n.jsx)(Fe.i, {
                    borderColor: "#A6A6A6",
                    width: "90%",
                    marginLeft: 0,
                    alignSelf: s ? "flex-end" : "flex-start",
                  }),
                ],
              }),
              (0, n.jsx)(le.x, {
                fontSize: "smaller",
                variant: "accentAlternative",
                width: "90%",
                alignSelf: s ? "flex-end" : "flex-start",
                wordBreak: "break-word",
                paddingY: {
                  base: 3,
                  md: 0,
                },
                children: a,
              }),
              (0, n.jsx)(J.z, {
                variant: "outlineAlternative",
                fontWeight: "light",
                fontSize: {
                  base: "sm",
                  "2xl": "md",
                },
                size: "sm",
                as: "a",
                href: r,
                rel: "noreferrer",
                target: "_blank",
                marginY: {
                  base: 3,
                  md: 0,
                },
                children: "Live Link",
              }),
              (0, n.jsx)(J.z, {
                variant: "outlineAlternative",
                fontWeight: "light",
                fontSize: {
                  base: "sm",
                  "2xl": "md",
                },
                size: "sm",
                as: "a",
                href: r2,
                rel: "noreferrer",
                target: "_blank",
                marginY: {
                  base: 3,
                  md: 0,
                },
                children: "Github Link",
              }),
            ],
          });
        },
        Ge = function (e) {
          var t = e.idx,
            i = e.height,
            a = e.src,
            r = e.title,
            o = e.description,
            l = e.objectPosition,
            c = e.ctaUrl,
            c2 = e.ctaUrl2,
            d = !e.isMobile && t % 2 === 0,
            h = (0, E.useColorModeValue)("blackAlpha.50", "whiteAlpha.200"),
            p = function () {
              return (0, n.jsx)(Xe, {
                height: i,
                width: "100%",
                src: a,
                alt: r,
                objectFit: "cover",
                objectPosition: l,
                loading: "lazy",
                opacity: 0.75,
                whileHover: Je.hover,
                whileTap: Je.tap,
                fallback: (0, n.jsx)(me.Od, {
                  height: i,
                  width: "100%",
                }),
              });
            };
          return (0, n.jsx)(s.xu, {
            height: "auto",
            bg: h,
            borderRadius: "1em",
            className: Ve().featureCard,
            borderColor: h,
            borderWidth: "1px",
            children: (0, n.jsxs)(we.M, {
              columns: {
                base: 1,
                md: 2,
              },
              spacing: {
                base: 3,
                md: 0,
              },
              display: {
                base: "flex",
                md: "grid",
              },
              flexDirection: {
                base: "column-reverse",
                md: "initial",
              },
              children: [
                d && (0, n.jsx)(p, {}),
                (0, n.jsx)(Ye, {
                  idx: t,
                  title: r,
                  description: o,
                  ctaUrl: c,
                  ctaUrl2: c2,
                  isLeft: d,
                }),
                !d && (0, n.jsx)(p, {}),
              ],
            }),
          });
        },
        Ke = (0, x.E)(r.r),
        qe = (0, x.E)(r.P),
        Qe = function () {
          var e = (0, a.S)(L.RH);
          return (0, n.jsxs)(o.Kq, {
            width: {
              base: "99%",
              lg: "60%",
              xl: "75%",
            },
            height: "100%",
            spacing: {
              base: 6,
              xl: 8,
            },
            children: [
              (0, n.jsx)(se.X, {
                size: "2xl",
                style: {
                  fontVariantCaps: "small-caps",
                },
                children: "My Projects",
              }),
              (0, n.jsx)(le.x, {
                variant: "description",
                children: "Some of my featured projects",
              }),
              (0, n.jsxs)(Ke, {
                templateRows: "repeat(1, 1fr)",
                templateColumns: "repeat(6, 1fr)",
                gap: {
                  base: 5,
                  md: 6,
                },
                variants: M,
                children: [
                  
                  (0, n.jsx)(qe, {
                    colSpan: 6,
                    variants: y,
                    children: (0, n.jsx)(Ge, {
                      idx: 1,
                      title: "Reflect Code",
                      description:
                        "A Collabrative Code Editor, Whiteboard, Chat System, Code Compiler And Room Support",
                      src: "./IMG/Reflect-Code.png",
                      height: {
                        base: "130px",
                        md: "225px",
                        "2xl": "300px",
                      },
                      ctaUrl: "https://reflect-code.vercel.app/",
                      ctaUrl2:
                        "https://github.com/Ansari-Irfan-360/Reflect-Code",
                      isMobile: e,
                    }),
                  }),
                  
                  
                  (0, n.jsx)(qe, {
                    colSpan: 6,
                    variants: y,
                    children: (0, n.jsx)(Ge, {
                      idx: 2,
                      title: "ShoeMart",
                      description:
                        "A Full-Stack E-Commerce Website Specialized in Selling Sneakers with Admin Panel", 
                      src: "./IMG/ShoeMart.png",
                      height: {
                        base: "130px",
                        md: "225px",
                        "2xl": "300px",
                      },
                      ctaUrl: "https://shoemart-360.vercel.app/",
                      ctaUrl2:
                        "https://github.com/Ansari-Irfan-360/ShoeMart",
                      objectPosition: "right 20%",
                      isMobile: e,
                    }),
                  }),
                  (0, n.jsx)(qe, {
                    colSpan: 6,
                    variants: y,
                    children: (0, n.jsx)(Ge, {
                      idx: 3,
                      title: "NPM Package",
                      description:
                        "poll-server-check is a NPM Package that wakes the server and sends server status to the client",
                      src: "./IMG/npm.png",
                      height: {
                        base: "130px",
                        md: "225px",
                        "2xl": "300px",
                      },
                      ctaUrl: "https://www.npmjs.com/package/poll-server-check",
                      ctaUrl2:
                        "https://github.com/Ansari-Irfan-360/poll-server-check",
                      isMobile: e,
                    }),
                  }),
                  (0, n.jsx)(qe, {
                    colSpan: 6,
                    variants: y,
                    children: (0, n.jsx)(Ge, {
                      idx: 4,
                      title: "Reflect Blog",
                      description:
                        "A Blog website created with MERN stack allows to view, write, edit, publish, and comment on blogs",
                      src: "./IMG/Reflect-Blog.png",
                      height: {
                        base: "130px",
                        md: "225px",
                        "2xl": "300px",
                      },
                      ctaUrl: "https://reflect-blog.vercel.app/",
                      ctaUrl2:
                        "https://github.com/Ansari-Irfan-360/Reflect-Blog",
                      objectPosition: "right 20%",
                      isMobile: e,
                    }),
                  }),
                  (0, n.jsx)(qe, {
                    colSpan: 6,
                    variants: y,
                    children: (0, n.jsx)(Ge, {
                      idx: 5,
                      title: "Chat Detective",
                      src: "./IMG/Chat-Detective.png",
                      description:
                        "A Full-Stack web game utilizing WebSocket technology for real-time multiplayer gaming",
                      height: {
                        base: "130px",
                        md: "225px",
                        "2xl": "300px",
                      },
                      ctaUrl: "https://chat-detective.vercel.app/",
                      ctaUrl2:
                        "https://github.com/Ansari-Irfan-360/Chat-Detective",
                      objectPosition: "right 20%",
                      isMobile: e,
                    }),
                  }),
                  (0, n.jsx)(qe, {
                    colSpan: 6,
                    variants: y,
                    children: (0, n.jsx)(Ge, {
                      idx: 6,
                      title: "URL Shortener",
                      description:
                        "A Full Stack URL shortener using MERN stack [Fun Fact: I Created This Project in 2 Hours]",
                      src: "./IMG/URL-Shortner.png",
                      height: {
                        base: "130px",
                        md: "225px",
                        "2xl": "300px",
                      },
                      ctaUrl: "https://url-360.vercel.app/",
                      ctaUrl2:
                        "https://github.com/Ansari-Irfan-360/URL-shortener",
                      isMobile: e,
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(le.x, {
                variant: "description",
                children: [
                  "For more ",
                  (0, n.jsx)("b", {
                    children: "projects",
                  }),
                  " you can checkout my",
                  " ",
                  (0, n.jsxs)(ce.r, {
                    href: "https://github.com/Ansari-Irfan-360/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [" ", "github profile", " "],
                  }),
                  " ",
                ],
              }),
            ],
          });
        },
        $e = (0, h.memo)(Qe),
        Ze = i(9352),
        et = {
          initial: {
            opacity: 0,
            y: 50,
          },
          hidden: {
            opacity: [0, 1],
            transition: {
              duration: 0.5,
              delay: 1,
              ease: "easeIn",
            },
          },
          bounce: {
            y: [0, -18, 0],
            transition: {
              duration: 1.6,
              ease: "easeInOut",
              loop: 1 / 0,
            },
          },
        },
        tt = {
          hidden: {
            opacity: 0,
            y: 250,
          },
          show: {
            opacity: 1,
            y: 0,
          },
          exit: {
            opacity: [1, 0],
            y: [0, 250],
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
        },
        it = function () {
          var e = (0, a.S)(L.RH),
            t = ee(!1, e),
            i = (0, E.useColorModeValue)("gray.800", "gray.400"),
            r = (0, E.useColorModeValue)("teal.500", "cyan.200");
          return (0, n.jsxs)(s.xu, {
            position: "fixed",
            bottom: "1em",
            right: "3%",
            display: e ? "none" : "block",
            children: [
              (0, n.jsx)(O.M, {
                children:
                  [q.Initial, q.Up].includes(t) &&
                  (0, n.jsx)(x.E.div, {
                    initial: "initial",
                    animate: ["hidden", "bounce"],
                    variants: et,
                    children: (0, n.jsx)(de.J, {
                      w: 6,
                      h: 6,
                      as: Ze.C_Q,
                      color: "currentColor",
                      opacity: "0.75",
                    }),
                  }),
              }),
              (0, n.jsx)(O.M, {
                children:
                  t === q.Down &&
                  (0, n.jsx)(x.E.div, {
                    initial: "hidden",
                    animate: "show",
                    exit: "exit",
                    variants: tt,
                    whileHover: {
                      y: -50,
                    },
                    style: {
                      writingMode: "vertical-rl",
                      position: "fixed",
                      right: "8%",
                      bottom: "-8%",
                    },
                    children: (0, n.jsxs)(le.x, {
                      as: "a",
                      paddingY: 3,
                      fontFamily: "monospace",
                      href: "mailto:ansarimdirfan2004@gmail.com",
                      target: "_blank",
                      rel: "noreferrer",
                      color: i,
                      _hover: {
                        color: r,
                        _after: {
                          backgroundColor: r,
                          opacity: 1,
                        },
                      },
                      position: "relative",
                      letterSpacing: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      _after: {
                        backgroundColor: r,
                        width: "2px",
                        opacity: 0.5,
                        content: '""',
                        flex: 1,
                        height: {
                          base: "5em",
                          xl: "8em",
                        },
                        margin: "auto",
                        marginTop: "10px",
                      },
                      children: ["Gmail: ansarimdirfan2004", " "],
                    }),
                  }),
              }),
            ],
          });
        },
        nt = (0, l.default)(
          function () {
            return i.e(508).then(i.bind(i, 1508));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1508];
              },
            },
          }
        ),
        at = (0, l.default)(
          function () {
            return i.e(165).then(i.bind(i, 8165));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8165];
              },
            },
          }
        ),
        rt = !0,
        ot = function (e) {
          var t = e.articles,
            i = (0, a.S)({
              base: "5",
              md: "8",
              lg: "14",
            }),
            l = (0, a.S)({
              base: "5",
              md: "14",
              lg: "14",
              xl: 0,
            }),
            c = (0, a.S)({
              base: "20",
              sm: 20,
              md: 20,
            });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(d, {}),
              (0, n.jsx)(oe, {}),
              (0, n.jsxs)(r.r, {
                id: "mainGrid",
                templateColumns: {
                  base: "repeat(1, 1fr)",
                  lg: "repeat(3, 1fr)",
                  xl: "repeat(5, 1fr)",
                },
                templateRows: {
                  sm: "repeat(1, 0)",
                  lg: "repeat(2, 1fr)",
                },
                gap: 4,
                children: [
                  (0, n.jsx)(r.P, {
                    padding: i,
                    marginTop: c,
                    rowSpan: 2,
                    colSpan: {
                      base: 1,
                      sm: 1,
                      md: 1,
                      lg: 1,
                      xl: 2,
                    },
                    display: "flex",
                    alignContent: "center",
                    as: "div",
                    flexDirection: "row",
                    children: (0, n.jsx)(ge, {}),
                  }),
                  (0, n.jsx)(r.P, {
                    as: "main",
                    padding: l,
                    rowSpan: 2,
                    colSpan: {
                      base: 1,
                      sm: 2,
                      md: 2,
                      lg: 3,
                      xl: 3,
                    },
                    overflow: "hidden",
                    children: (0, n.jsxs)(o.Kq, {
                      w: "100",
                      spacing: 24,
                      children: [
                        (0, n.jsx)(D, {
                          children: (0, n.jsxs)(s.xu, {
                            id: "aboutMe",
                            className: "contentRow",
                            minH: {
                              lg: "100vh",
                            },
                            display: "flex",
                            alignItems: "center",
                            paddingTop: {
                              base: 0,
                              lg: 20,
                              xl: 0,
                            },
                            paddingBottom: {
                              base: 12,
                              lg: 0,
                            },
                            flexDirection: {
                              base: "column-reverse",
                              lg: "row",
                            },
                            children: [(0, n.jsx)(Ee, {}), (0, n.jsx)(je, {})],
                          }),
                        }),
                        (0, n.jsx)(D, {
                          children: (0, n.jsx)(s.xu, {
                            id: "jobs",
                            className: "contentRow",
                            paddingTop: {
                              base: 0,
                              lg: 20,
                              xl: 0,
                            },
                            paddingBottom: {
                              base: 12,
                              lg: 10,
                            },
                            paddingX: 0,
                            flexDirection: "row",
                            children: (0, n.jsx)(Be, {}),
                          }),
                        }),
                        (0, n.jsx)(D, {
                          children: (0, n.jsx)(s.xu, {
                            id: "works",
                            className: "contentRow",
                            paddingTop: {
                              base: 0,
                              lg: 20,
                              xl: 20,
                            },
                            paddingBottom: {
                              base: 12,
                              lg: 10,
                            },
                            paddingX: 0,
                            flexDirection: "row",
                            children: (0, n.jsx)($e, {}),
                          }),
                        }),
                        (0, n.jsx)(D, {
                          children: (0, n.jsx)(s.xu, {
                            id: "blog",
                            className: "contentRow",
                            paddingTop: {
                              base: 0,
                              lg: 20,
                              xl: 20,
                            },
                            paddingBottom: {
                              base: 12,
                              lg: 10,
                            },
                            paddingX: 0,
                            flexDirection: "row",
                            children: (0, n.jsx)(nt, {
                              articles: t,
                            }),
                          }),
                        }),
                        (0, n.jsx)(D, {
                          children: (0, n.jsx)(s.xu, {
                            id: "contact",
                            className: "contentRow",
                            paddingTop: {
                              base: 0,
                              lg: 20,
                              xl: 20,
                            },
                            paddingX: 0,
                            flexDirection: "row",
                            children: (0, n.jsx)(at, {}),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(it, {}),
            ],
          });
        };
    },
    7284: function (e) {
      e.exports = {
        logo: "styles_logo__zMYCs",
        sidebar: "styles_sidebar__w3hue",
      };
    },
    6507: function (e) {
      e.exports = {
        menu: "styles_menu__3YOCP",
        mobileMenuContainer: "styles_mobileMenuContainer__I7bRx",
        blogBtn: "styles_blogBtn__F68nP",
        dark: "styles_dark__FGyw6",
      };
    },
    6301: function (e) {
      e.exports = {
        experienceTabs: "styles_experienceTabs__vABId",
      };
    },
    3032: function (e) {
      e.exports = {
        featureCard: "styles_featureCard__oTVLQ",
      };
    },
    970: function (e) {
      e.exports = {
        sidebar: "styles_sidebar__mN5g9",
        dark: "styles_dark__uJm9q",
        marginTopForce: "styles_marginTopForce__h6iA4",
        marginTopSmall: "styles_marginTopSmall__5I90B",
      };
    },
  },
  function (e) {
    e.O(0, [415, 937, 866, 980, 445, 874, 449, 774, 888, 179], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
