(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [106],
  {
    42199: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return f;
          },
        });
      var n = t(94734),
        i = t(29124),
        o = t.n(i),
        r = {
          src: "https://cdn.oaistatic.com/_next/static/media/gpts-og.772bef1f.jpg",
          height: 315,
          width: 600,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAnQF//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQQSQQD/2gAIAQEAAT8AxiZMNmai+wk3ItuCrPPf/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAxEhUf/aAAgBAwEBPwBqwZ1f/9k=",
          blurWidth: 8,
          blurHeight: 4,
        },
        s = t(35250);
      function a() {
        var A = "Explore GPTs",
          e =
            "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.",
          t = r.src;
        return (0, s.jsxs)(o(), {
          children: [
            (0, s.jsx)("title", { children: A }),
            (0, s.jsx)("meta", { name: "title", content: A }, "title"),
            (0, s.jsx)(
              "meta",
              { property: "og:site_name", content: "ChatGPT" },
              "og:site_name"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:type", content: "website" },
              "og:type"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:title", content: A },
              "og:title"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:url", content: "/gpts" },
              "og:url"
            ),
            (0, s.jsx)(
              "meta",
              { name: "description", content: e },
              "description"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:description", content: e },
              "og:description"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:image", content: t },
              "og:image"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:image:width", content: "1200" },
              "og:image:width"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:image:height", content: "630" },
              "og:image:height"
            ),
          ],
        });
      }
      var c = t(61305),
        g = t(7144),
        l = t(1890),
        u = t(25349),
        p = t(99893),
        h = t(70079),
        m = t(56276),
        x = !0;
      function f(A) {
        var e = "store_anon" === A.kind;
        return ((0, h.useEffect)(
          function () {
            u.A.publicEvent(p.M.pageView, {
              page: "gpts/discovery",
              isAnon: e,
              referrer: A.referrer,
            });
          },
          [e, A.referrer]
        ),
        e)
          ? (0, s.jsxs)("div", {
              className: "relative h-full w-full flex-1 flex-col overflow-auto",
              children: [(0, s.jsx)(a, {}), (0, s.jsx)(n.fN, { anon: !0 })],
            })
          : (0, s.jsx)(d, {});
      }
      function d() {
        var A = (0, g.hz)();
        return null == A
          ? null
          : null != A && A.includes(l.L0.GizmoStore)
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(o(), {
                    children: (0, s.jsx)("meta", {
                      name: "viewport",
                      content:
                        "width=device-width, initial-scale=1, maximum-scale=1",
                    }),
                  }),
                  (0, s.jsx)(c.Z, { children: (0, s.jsx)(n.fN, {}) }),
                ],
              })
            : (0, s.jsx)(m.default, {});
      }
    },
    5599: function (A, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts",
        function () {
          return t(42199);
        },
      ]);
    },
  },
  function (A) {
    A.O(0, [6276, 9774, 2888, 179], function () {
      return A((A.s = 5599));
    }),
      (_N_E = A.O());
  },
]);
//# sourceMappingURL=gpts-feac991ac32a51df.js.map
