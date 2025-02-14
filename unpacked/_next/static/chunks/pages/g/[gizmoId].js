(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    78801: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return y;
          },
          default: function () {
            return O;
          },
        });
      var r = t(36112),
        i = t(91559),
        c = t(74318),
        s = t(85528),
        o = t(37097),
        l = t(67404),
        u = t(61305),
        a = t(36638),
        f = t(85958),
        d = t(7144),
        h = t(67311),
        x = t(10721),
        m = t.n(x),
        j = t(70079),
        g = t(35250);
      function p(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function v(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? p(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      var y = !0;
      function O(e) {
        var n = (0, x.useRouter)().query.gizmoId;
        switch (e.kind) {
          case "anon_gizmo":
            return (0, g.jsx)(s.X, { gizmo: e.gizmo }, n);
          case "chat_page":
            return (0, j.createElement)(
              b,
              v(v({}, e), {}, { key: n, gizmoId: n })
            );
          default:
            (0, h.Z)(e);
        }
      }
      function b(e) {
        var n = (0, o.b9)(e.gizmoId),
          t = n.data,
          r = n.error,
          i = (0, d.t)(),
          s = null == i ? void 0 : i.canInteractWithGizmos();
        return ((0, j.useEffect)(
          function () {
            null == t && null != r && m().push((0, f.M5)(f.LT.GIZMO_NOT_FOUND));
          },
          [t, r]
        ),
        null != r && s)
          ? (0, g.jsx)(w, {})
          : !1 === s
            ? (0, g.jsx)(N, { gizmo: t })
            : (0, j.createElement)(c.ZP, v(v({}, e), {}, { key: e.gizmoId }));
      }
      function w() {
        return (0, g.jsx)(u.Z, {
          children: (0, g.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center",
            children: [
              (0, g.jsx)("div", {
                className: "font-bold",
                children: "We're having trouble loading this GPT.",
              }),
              (0, g.jsx)("div", {
                children: "Please refresh the page, or try again later",
              }),
            ],
          }),
        });
      }
      function N(e) {
        var n = e.gizmo;
        return (0, g.jsx)(u.Z, {
          children: (0, g.jsx)(l.r, {
            gizmo: n,
            isOwner: !1,
            children: (0, g.jsxs)(i.z, {
              className: "mt-6",
              onClick: function () {
                return (0, a.MG)();
              },
              children: [
                "Sign up for ChatGPT Plus to chat with ",
                null == n ? void 0 : n.gizmo.display.name,
              ],
            }),
          }),
        });
      }
    },
    85528: function (e, n, t) {
      "use strict";
      t.d(n, {
        S: function () {
          return h;
        },
        X: function () {
          return d;
        },
      });
      var r = t(37097),
        i = t(29703),
        c = t(14972),
        s = t(19841),
        o = t(73040),
        l = t.n(o),
        u = t(2454),
        a = t(67404),
        f = t(35250);
      function d(e) {
        var n = e.gizmo,
          t = (0, r.i6)(n);
        return (0, f.jsxs)("div", {
          className: "flex h-full flex-col",
          children: [
            (0, f.jsx)(i.N, { gizmo: n }),
            (0, f.jsx)(h, { redirectUrl: t }),
            (0, f.jsx)("div", {
              className: "flex grow flex-col items-center justify-center p-2",
              children: (0, f.jsx)(a.r, {
                gizmo: n,
                isOwner: !1,
                isAnon: !0,
                children: (0, f.jsxs)("div", {
                  className: "mt-7 flex flex-col gap-4",
                  children: [
                    (0, f.jsx)(u.p, {
                      href: "/auth/login?next=".concat(t),
                      children: "Sign up to chat",
                    }),
                    (0, f.jsx)("div", {
                      className: "text-sm text-token-text-tertiary",
                      children: "Requires ChatGPT Plus",
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function h(e) {
        var n = e.redirectUrl,
          t = e.className;
        return (0, f.jsxs)("div", {
          className: (0, s.default)(
            "flex items-center justify-between px-7 py-4",
            t
          ),
          children: [
            (0, f.jsx)(x, {}),
            (0, f.jsx)(l(), {
              href: null != n ? "/auth/login?next=".concat(n) : "/auth/login",
              className:
                "flex items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:opacity-70",
              children: "Sign up",
            }),
          ],
        });
      }
      function x() {
        return (0, f.jsx)(l(), {
          href: "/",
          children: (0, f.jsx)(c.nI, { className: "h-8 w-8" }),
        });
      }
    },
    61305: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(49516),
        i = t(83562),
        c = t(35212),
        s = t(10721),
        o = t(8024),
        l = t(5813),
        u = t(35250);
      function a(e) {
        var n = e.children,
          t = (0, s.useRouter)();
        return (0, u.jsx)(c.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, u.jsxs)(i.ZP, {
            onNewThread: function () {
              t.push("/");
            },
            children: [
              (0, u.jsx)(l.Dy, {}),
              (0, u.jsx)(r.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, u.jsx)(o.Z, { children: n }),
        });
      }
    },
    80052: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]",
        function () {
          return t(78801);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 80052));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[gizmoId]-e3d749bd503b4fc4.js.map
