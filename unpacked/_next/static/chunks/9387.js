"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9387],
  {
    39387: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var s = n(18008),
        i = n(3125),
        r = n(36112),
        a = n(19841),
        l = n(5397),
        o = n.n(l),
        c = n(70079),
        d = n(35236),
        u = n(84589),
        f = n.n(u),
        x = n(97296),
        h = n(1454),
        m = n(32004),
        g = n(70671),
        p = n(94968),
        j = n(91559),
        w = n(90166),
        y = n(10936),
        b = n(68113),
        v = n(35250);
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var k = {
          padding: 20,
          zIndex: 1e3,
          xOffset: 300,
          yOffset: 200,
          normal: { width: 600, height: 585 },
          small: { width: 600, height: 335 },
        },
        C = o()(
          function () {
            return Promise.all([n.e(5823), n.e(1994)]).then(n.bind(n, 1994));
          },
          {
            ssr: !1,
            loading: function () {
              return (0, v.jsx)("div", {
                className: "p-3",
                children: (0, v.jsx)("p", {
                  className:
                    "flex items-center justify-center bg-gray-50 text-center font-mono text-sm uppercase text-gray-800",
                  style: { height: 200 },
                  children: (0, v.jsx)(m.Z, z({}, W.loading)),
                }),
              });
            },
            loadableGenerated: {
              webpack: function () {
                return [1994];
              },
            },
          }
        );
      function O() {
        var e = (0, c.useRef)(null),
          t = f()(),
          n = (0, i.Z)(t, 2),
          r = n[0],
          l = r.width,
          o = r.height,
          u = n[1],
          g = (0, y.gj)().targetLatencyData,
          p = (0, s.tN)(s.bM.isLatencyDevtoolsVisible);
        (0, c.useEffect)(function () {
          if (e.current) {
            var t = window.innerWidth,
              n = window.innerHeight;
            e.current.updatePosition({
              x: t - (k.normal.width + k.xOffset) - k.padding,
              y: n - (k.normal.height + k.yOffset) - k.padding,
            }),
              e.current.updateSize({
                width: k.normal.width,
                height: k.normal.height,
              });
          }
        }, []);
        var w = (0, c.useState)(!1),
          N = w[0],
          O = w[1],
          T = function () {
            N || O(!0);
          },
          B = function () {
            N && O(!1);
          },
          Z = (0, b.AA)(),
          L = (0, b.JP)(),
          R = (0, c.useState)(!1),
          S = R[0],
          E = R[1],
          I = (0, c.useMemo)(
            function () {
              return Z ? (0, b.j7)(Z) + 1 : 0;
            },
            [Z]
          ),
          q = (0, c.useMemo)(
            function () {
              return Z ? (0, b.BC)() : 0;
            },
            [Z]
          );
        (0, c.useEffect)(
          function () {
            E(!1);
          },
          [Z, E]
        );
        var A = function () {
          p ? s.vm.hideLatencyDevTools() : s.vm.showLatencyDevTools();
        };
        if (!p) return null;
        var F = Object.keys(L).length > 1;
        return (0, v.jsx)(x.E.div, {
          initial: { opacity: 0 },
          transition: { delay: 1, duration: 0.2 },
          animate: {
            opacity: 1,
            transition: { duration: 0.2, ease: "easeIn" },
          },
          exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
          children: (0, v.jsx)(d.s, {
            disableDragging: N,
            ref: e,
            style: {
              zIndex: k.zIndex,
              width: k.normal.width,
              height: k.normal.height,
            },
            className: (0, a.default)(
              "transition-delay group relative flex h-full flex-col overflow-hidden rounded-md border-2 border-gray-500 bg-gray-50 opacity-80 shadow-md transition-opacity delay-100 hover:opacity-100 hover:delay-0 dark:border-white dark:bg-gray-900"
            ),
            children: Z
              ? (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)("div", {
                      className:
                        "flex flex-row items-center border-b border-gray-700 py-1 dark:border-gray-300",
                      children: (0, v.jsxs)("div", {
                        className:
                          "flex w-full flex-row items-center justify-end",
                        children: [
                          (0, v.jsxs)("div", {
                            className:
                              "flex w-full flex-row items-center justify-between px-3 ",
                            children: [
                              (0, v.jsx)(j.z, {
                                disabled: !F,
                                className:
                                  "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                loading: S,
                                color: "neutral",
                                size: "small",
                                as: "button",
                                onClick: function () {
                                  E(!0), (0, b.WD)((0, b.iZ)(Z));
                                },
                                children: (0, v.jsx)(h.YFh, {
                                  className: "icon-sm",
                                }),
                              }),
                              (0, v.jsxs)("span", {
                                className:
                                  "flex flex-row items-center justify-center space-x-2 truncate whitespace-nowrap text-xs font-medium uppercase text-gray-800 dark:text-gray-200",
                                children: [
                                  (0, v.jsxs)("span", {
                                    className:
                                      "inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800",
                                    children: [
                                      (0, v.jsx)("svg", {
                                        className:
                                          "h-1.5 w-1.5 fill-yellow-500",
                                        viewBox: "0 0 6 6",
                                        "aria-hidden": "true",
                                        children: (0, v.jsx)("circle", {
                                          cx: 3,
                                          cy: 3,
                                          r: 3,
                                        }),
                                      }),
                                      "".concat(I, " / ").concat(q),
                                    ],
                                  }),
                                  (0, v.jsx)(
                                    m.Z,
                                    z(
                                      z({}, W.node),
                                      {},
                                      { values: { focusedNodeId: Z } }
                                    )
                                  ),
                                ],
                              }),
                              (0, v.jsx)(j.z, {
                                disabled: !F,
                                className:
                                  "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                loading: S,
                                color: "neutral",
                                size: "small",
                                as: "button",
                                onClick: function () {
                                  E(!0), (0, b.WD)((0, b.Q7)(Z));
                                },
                                children: (0, v.jsx)(h.Tfp, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, v.jsx)(j.z, {
                            color: "none",
                            size: "small",
                            as: "button",
                            onClick: function () {
                              return A();
                            },
                            className: "whitespace-nowrap !pr-2",
                            children: (0, v.jsx)(h.q5L, {
                              className: "icon-sm",
                            }),
                          }),
                        ],
                      }),
                    }),
                    g &&
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)("div", {
                            ref: u,
                            className:
                              "min-w-20 h-full w-full space-y-2 overflow-scroll p-1 pb-12",
                            children: (0, v.jsxs)("div", {
                              className: (0, a.default)(
                                "col-span-1 grid gap-1"
                              ),
                              children: [
                                (0, v.jsx)("div", {
                                  onMouseMove: T,
                                  onMouseEnter: T,
                                  onMouseLeave: B,
                                  onMouseOut: B,
                                  onMouseUp: B,
                                  children: (0, v.jsx)(C, {
                                    parentDimensions: { width: l, height: o },
                                    targetLatencyData: g,
                                  }),
                                }),
                                (0, v.jsx)(M, {}),
                                (0, v.jsx)(D, {}),
                              ],
                            }),
                          }),
                          (0, v.jsx)(P, { resizableRef: e }),
                        ],
                      }),
                  ],
                })
              : (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)("div", {
                      className:
                        "font-lg flex h-full flex-col items-center justify-center text-lg",
                      children: (0, v.jsx)(
                        m.Z,
                        z({}, W.initiateCompletionRequest)
                      ),
                    }),
                    (0, v.jsx)(P, { resizableRef: e }),
                  ],
                }),
          }),
        });
      }
      var D = function () {
          return (0, v.jsx)("div", {});
        },
        M = function () {
          var e = (0, y.gj)().stats;
          return (0, v.jsxs)("div", {
            className: "space-y-3 overflow-scroll px-3",
            children: [
              (0, v.jsx)("div", {
                className: "border-b pb-3",
                children: (0, v.jsx)(T, {
                  size: "large",
                  stats: e.filter(function (e) {
                    return "summary" == e.category;
                  }),
                }),
              }),
              (0, v.jsx)(T, {
                stats: e.filter(function (e) {
                  return "token" == e.category;
                }),
              }),
              (0, v.jsx)(T, {
                stats: e.filter(function (e) {
                  return "aggregate" == e.category;
                }),
              }),
            ],
          });
        },
        T = function (e) {
          var t = e.stats,
            n = e.size,
            s = void 0 === n ? "normal" : n;
          return (0, v.jsx)("div", {
            className: "flex flex-wrap gap-3",
            children: t.map(function (e) {
              return (
                e.stat &&
                (0, v.jsx)(
                  "div",
                  {
                    className: "col-span-1",
                    children: (0, v.jsxs)("div", {
                      className: (0, a.default)(
                        "overflow-hidden bg-white shadow dark:bg-gray-800 ",
                        {
                          "rounded px-2 py-1 sm:p-2": "normal" == s,
                          "rounded-lg px-2 py-3 sm:p-3": "large" == s,
                        }
                      ),
                      children: [
                        (0, v.jsx)("dt", {
                          className: (0, a.default)(
                            "truncate  text-gray-500 dark:text-gray-100",
                            {
                              "text-xs font-medium": "normal" == s,
                              "text-sm font-medium": "large" == s,
                            }
                          ),
                          children: e.name,
                        }),
                        (0, v.jsx)("dd", {
                          className: (0, a.default)(
                            "mt-1  text-gray-900 dark:text-blue-200",
                            {
                              "text-base font-semibold tracking-tight":
                                "normal" == s,
                              "text-xl font-semibold tracking-tight":
                                "large" == s,
                            }
                          ),
                          children: e.stat,
                        }),
                      ],
                    }),
                  },
                  e.name
                )
              );
            }),
          });
        },
        P = function (e) {
          var t = e.resizableRef,
            n = (0, g.Z)(),
            i = function (e) {
              var n = window.innerWidth,
                s = window.innerHeight,
                i = {
                  "up-left": { x: 0, y: 0 },
                  "down-right": {
                    x: n - k.normal.width - k.padding,
                    y: s - k.normal.height - k.padding,
                  },
                  "down-left": { x: 0, y: s - k.normal.height - k.padding },
                  "up-right": { x: n - k.normal.width - k.padding, y: 0 },
                };
              t.current &&
                (t.current.updatePosition({ x: i[e].x, y: i[e].y }),
                t.current.updateSize({
                  width: k.normal.width,
                  height: k.normal.height,
                }));
            },
            r = function () {
              s.vm.hideLatencyDevTools();
            };
          return (0, v.jsxs)("div", {
            className:
              "sticky bottom-0 z-50 flex w-full flex-row justify-between border-t border-gray-400 bg-white p-2 dark:bg-gray-900",
            children: [
              (0, v.jsxs)("div", {
                className: "flex flex-row gap-3",
                children: [
                  (0, v.jsx)(w.u, {
                    label: n.formatMessage(W.dragAndResizeTooltip),
                    className:
                      "item-center flex flex-col justify-center pl-2 pr-1",
                    children: (0, v.jsx)(h.uWH, { className: "icon-sm" }),
                  }),
                  (0, v.jsxs)("div", {
                    className: "flex flex-row space-x-1",
                    children: [
                      (0, v.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("down-left");
                        },
                        children: (0, v.jsx)(h.hr3, { className: "icon-sm" }),
                      }),
                      (0, v.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("up-left");
                        },
                        children: (0, v.jsx)(h.Zuc, { className: "icon-sm" }),
                      }),
                      (0, v.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("up-right");
                        },
                        children: (0, v.jsx)(h.TKU, { className: "icon-sm" }),
                      }),
                      (0, v.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("down-right");
                        },
                        children: (0, v.jsx)(h.Gx, { className: "icon-sm" }),
                      }),
                    ],
                  }),
                  (0, v.jsxs)("div", {
                    className: "flex flex-row space-x-1",
                    children: [
                      (0, v.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          var e;
                          null === (e = t.current) ||
                            void 0 === e ||
                            e.updateSize({
                              width: k.small.width,
                              height: k.small.height,
                            });
                        },
                        children: (0, v.jsx)(m.Z, z({}, W.shrinkButton)),
                      }),
                      (0, v.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          var e;
                          null === (e = t.current) ||
                            void 0 === e ||
                            e.updateSize({
                              width: k.normal.width,
                              height: k.normal.height,
                            });
                        },
                        children: (0, v.jsx)(m.Z, z({}, W.growButton)),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)("div", {
                className: "flex flex-row justify-end gap-3",
                children: (0, v.jsx)(j.z, {
                  color: "none",
                  size: "small",
                  as: "button",
                  onClick: function () {
                    return r();
                  },
                  className: "whitespace-nowrap !pr-2",
                  children: (0, v.jsx)(m.Z, z({}, W.closeButton)),
                }),
              }),
            ],
          });
        },
        W = (0, p.vU)({
          loading: {
            id: "CompletionDevToolsWidget.loading",
            defaultMessage: "Loading...",
          },
          node: {
            id: "CompletionDevToolsWidget.node",
            defaultMessage: "Node: {focusedNodeId}",
          },
          initiateCompletionRequest: {
            id: "CompletionDevToolsWidget.initiateCompletionRequest",
            defaultMessage: "Initiate a completion request to use this feature",
          },
          shrinkButton: {
            id: "CompletionDevToolsWidget.shrinkButton",
            defaultMessage: "Shrink",
          },
          growButton: {
            id: "CompletionDevToolsWidget.growButton",
            defaultMessage: "Grow",
          },
          closeButton: {
            id: "CompletionDevToolsWidget.closeButton",
            defaultMessage: "Close",
          },
          dragAndResizeTooltip: {
            id: "CompletionDevToolsWidget.dragAndResizeTooltip",
            defaultMessage: "This widget can be dragged and resized",
          },
        }),
        B = function () {
          return (0, s.tN)(s.bM.isLatencyDevtoolsVisible)
            ? (0, v.jsx)(O, {})
            : null;
        };
    },
  },
]);
//# sourceMappingURL=9387.218c2da8808ec9c3.js.map
