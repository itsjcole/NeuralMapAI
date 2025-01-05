import {r as l, a as Z, R as $} from "./vendor-CXoAby46.js";
import {l as G} from "./utils-Cj9cqibd.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity),
        r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const i = a(r);
        fetch(r.href, i)
    }
}
)();
var _ = {
    exports: {}
}
  , A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X = l
  , J = Symbol.for("react.element")
  , Q = Symbol.for("react.fragment")
  , ee = Object.prototype.hasOwnProperty
  , te = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , se = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function O(s, t, a) {
    var n, r = {}, i = null, o = null;
    a !== void 0 && (i = "" + a),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (n in t)
        ee.call(t, n) && !se.hasOwnProperty(n) && (r[n] = t[n]);
    if (s && s.defaultProps)
        for (n in t = s.defaultProps,
        t)
            r[n] === void 0 && (r[n] = t[n]);
    return {
        $$typeof: J,
        type: s,
        key: i,
        ref: o,
        props: r,
        _owner: te.current
    }
}
A.Fragment = Q;
A.jsx = O;
A.jsxs = O;
_.exports = A;
var e = _.exports, F, P = Z;
F = P.createRoot,
P.hydrateRoot;
const re = "v3.1.2"
  , ae = 50
  , H = {
    neurons: 12,
    layers: 2,
    connections: .4,
    speed: .5,
    colorScheme: "matrix",
    particleSize: 1.2,
    pattern: "wave",
    complexity: .5,
    depth: 1
}
  , V = {
    matrix: {
        primary: "text-green-500",
        secondary: "text-green-400",
        border: "border-green-500/30",
        glow: "#22c55e",
        fill: "fill-green-400",
        fillLight: "fill-green-500/10",
        stroke: "stroke-green-400/20",
        text: "text-green-500/70"
    },
    quantum: {
        primary: "text-purple-500",
        secondary: "text-purple-400",
        border: "border-purple-500/30",
        glow: "#a855f7",
        fill: "fill-purple-400",
        fillLight: "fill-purple-500/10",
        stroke: "stroke-purple-400/20",
        text: "text-purple-500/70"
    },
    cyber: {
        primary: "text-blue-500",
        secondary: "text-blue-400",
        border: "border-blue-500/30",
        glow: "#3b82f6",
        fill: "fill-blue-400",
        fillLight: "fill-blue-500/10",
        stroke: "stroke-blue-400/20",
        text: "text-blue-500/70"
    }
}
  , M = [{
    message: "NEURAL-OS v3.1.2 Initializing...",
    progress: 15
}, {
    message: "Loading core system components...",
    progress: 30
}, {
    message: "Initializing neural network modules...",
    progress: 45
}, {
    message: "Loading visualization engine...",
    progress: 60
}, {
    message: "Calibrating synaptic weights...",
    progress: 75
}, {
    message: "Establishing neural pathways...",
    progress: 90
}, {
    message: "System ready.",
    progress: 100
}];
function ne() {
    const [s,t] = l.useState([])
      , [a,n] = l.useState("")
      , [r,i] = l.useState(-1)
      , o = l.useRef([])
      , u = l.useCallback( (p, m) => {
        t(c => [...c.slice(-ae), {
            command: p,
            response: m
        }])
    }
    , [])
      , d = l.useCallback( () => {
        t([])
    }
    , [])
      , y = l.useCallback(p => {
        if (p.key === "ArrowUp") {
            if (p.preventDefault(),
            o.current.length > 0) {
                const m = r === -1 ? o.current.length - 1 : Math.max(0, r - 1);
                i(m),
                n(o.current[m].command)
            }
        } else if (p.key === "ArrowDown" && (p.preventDefault(),
        r > -1)) {
            const m = r + 1;
            m < o.current.length ? (i(m),
            n(o.current[m].command)) : (i(-1),
            n(""))
        }
    }
    , [r]);
    return {
        commandHistory: s,
        currentInput: a,
        commandHistoryIndex: r,
        commandHistoryRef: o,
        setCurrentInput: n,
        setCommandHistoryIndex: i,
        addCommand: u,
        clearHistory: d,
        handleKeyNavigation: y
    }
}
const z = {
    wave: (s, t, a) => {
        const n = t / a.neurons * Math.PI * 2
          , r = Math.sin(s + n) * Math.cos(s * .3)
          , i = Math.cos(s * .7 + n) * Math.sin(s * .2);
        return {
            wave1: r * a.depth,
            wave2: i * a.depth
        }
    }
    ,
    spiral: (s, t, a) => {
        const n = (s + t * .1) * a.complexity
          , r = Math.sin(s * .2) * 30 * a.depth;
        return {
            wave1: Math.cos(n) * r / 120,
            wave2: Math.sin(n) * r / 120
        }
    }
    ,
    pulse: (s, t, a) => {
        const n = t / a.neurons * Math.PI * 2
          , r = Math.sin(s + n) * a.depth;
        return {
            wave1: r * Math.cos(t * .1),
            wave2: r * Math.sin(t * .1)
        }
    }
};
function ie(s, t) {
    const [a,n] = l.useState([])
      , [r,i] = l.useState(0)
      , o = l.useRef(r)
      , u = l.useRef(t)
      , d = Math.floor(t.neurons * t.layers * 2)
      , y = l.useCallback(G.throttle( (p, m) => {
        const c = []
          , g = z[m.pattern] || z.wave;
        for (let f = 0; f < d; f++) {
            const N = Math.floor(f / (d / m.layers))
              , b = p * m.speed * .2
              , {wave1: h, wave2: x} = g(b, f, m);
            c.push({
                x: (N - m.layers / 2) * 60,
                y: h * 60,
                z: x * 60,
                size: .8,
                opacity: .5
            })
        }
        n(c)
    }
    , 60), [d]);
    return l.useEffect( () => {
        u.current = t
    }
    , [t]),
    l.useEffect( () => {
        let p, m = performance.now();
        const c = () => {
            const g = performance.now()
              , f = (g - m) / 1e3;
            m = g,
            o.current += f * .2,
            i(o.current),
            s && y(o.current, u.current),
            p = requestAnimationFrame(c)
        }
        ;
        return s && (p = requestAnimationFrame(c)),
        () => {
            p && cancelAnimationFrame(p)
        }
    }
    , [s, y]),
    {
        points: a,
        time: r
    }
}
const oe = `Welcome to NeuralMap Terminal Interface

Available Commands:
------------------
help        - Show all commands
status      - Display system status
set         - Modify parameters (set <param> <value>)
clear       - Clear terminal
visualize   - Toggle neural network visualization
params      - Show current parameters
theme       - Change theme (matrix|quantum|cyber)
pattern     - Change pattern (wave|spiral|pulse)
complexity  - Set pattern complexity (0.1-1.0)
depth       - Set visualization depth (0.5-2.0)
reset       - Reset all parameters
exit        - Exit system`;
function le(s, t, a, n, r) {
    l.useEffect( () => {
        let i = 0;
        const o = setInterval( () => {
            if (i < M.length) {
                const {message: u, progress: d} = M[i];
                s("[SYSTEM]", u),
                t(d),
                i++,
                i === M.length && (setTimeout( () => {
                    a(!0),
                    n(!0),
                    r(),
                    s("[SYSTEM]", oe)
                }
                , 1e3),
                clearInterval(o))
            }
        }
        , 800);
        return () => clearInterval(o)
    }
    , [s, r, a, t, n])
}
const ce = `Available Commands:
------------------
help        - Show all commands
status      - Display system status
clear       - Clear terminal
visualize   - Toggle neural network visualization
params      - Show current parameters
ca          - Show contract address
exit        - Exit system

Parameter Commands:
------------------
set         - Modify parameters:
  neurons     (5-30)      Current: {neurons}
  layers      (2-5)       Current: {layers}
  speed       (0.1-2.0)   Current: {speed}

theme       - Change theme (matrix|quantum|cyber)
pattern     - Change pattern (wave|spiral|pulse)
complexity  - Set pattern complexity (0.1-1.0)
depth       - Set visualization depth (0.5-2.0)
reset       - Reset all parameters

Examples:
------------------
set neurons 20
theme matrix
pattern wave
complexity 0.8`;
function de(s, t) {
    const {params: a, setParams: n, showVisualization: r, setShowVisualization: i, time: o, clearHistory: u, setBootComplete: d, bootComplete: y} = t
      , p = s.toLowerCase().trim().split(" ")
      , m = p[0]
      , c = p.slice(1);
    switch (m) {
    case "help":
        return ce.replace("{neurons}", a.neurons.toString()).replace("{layers}", a.layers.toString()).replace("{speed}", a.speed.toString());
    case "ca"://changeafter(contract)
        return `Contract Address (Solana):


Click the address in the header to copy.`;
    case "status":
        return `System Status:
Runtime: ${Math.floor(o)}s
Visualization: ${r ? "Active" : "Inactive"}
Pattern: ${a.pattern}
Theme: ${a.colorScheme}`;
    case "clear":
        return u(),
        "";
    case "visualize":
        return i(!r),
        `Visualization ${r ? "disabled" : "enabled"}.`;
    case "params":
        return `Current Parameters:
Neurons: ${a.neurons}
Layers: ${a.layers}
Connections: ${a.connections}
Speed: ${a.speed}
Pattern: ${a.pattern}
Theme: ${a.colorScheme}
Complexity: ${a.complexity}
Depth: ${a.depth}`;
    case "theme":
        return c[0] && V[c[0]] ? (n(x => ({
            ...x,
            colorScheme: c[0]
        })),
        `Theme set to ${c[0]}.`) : "Available themes: matrix, quantum, cyber";
    case "pattern":
        return c[0] && z[c[0]] ? (n(x => ({
            ...x,
            pattern: c[0]
        })),
        `Pattern set to ${c[0]}.`) : "Available patterns: wave, spiral, pulse";
    case "complexity":
        const g = parseFloat(c[0]);
        return g >= .1 && g <= 1 ? (n(x => ({
            ...x,
            complexity: g
        })),
        `Complexity set to ${g}.`) : "Complexity must be between 0.1 and 1.0";
    case "depth":
        const f = parseFloat(c[0]);
        return f >= .5 && f <= 2 ? (n(x => ({
            ...x,
            depth: f
        })),
        `Depth set to ${f}.`) : "Depth must be between 0.5 and 2.0";
    case "set":
        if (c.length !== 2)
            return "Usage: set <parameter> <value>";
        const [N,b] = c
          , h = parseFloat(b);
        switch (N) {
        case "neurons":
            return h >= 5 && h <= 30 ? (n(x => ({
                ...x,
                neurons: h
            })),
            `Neurons set to ${h}.`) : "Neurons must be between 5 and 30";
        case "layers":
            return h >= 2 && h <= 5 ? (n(x => ({
                ...x,
                layers: h
            })),
            `Layers set to ${h}.`) : "Layers must be between 2 and 5";
        case "speed":
            return h >= .1 && h <= 2 ? (n(x => ({
                ...x,
                speed: h
            })),
            `Speed set to ${h}.`) : "Speed must be between 0.1 and 2.0";
        default:
            return `Unknown parameter: ${N}`
        }
    case "reset":
        return n(H),
        "All parameters reset to default values.";
    case "exit":
        return d(!1),
        u(),
        "Exiting system...";
    default:
        return `Command not found: ${s}. Type 'help' for available commands.`
    }
}
class E extends l.Component {
    constructor(t) {
        super(t),
        this.state = {
            hasError: !1,
            error: null
        }
    }
    static getDerivedStateFromError(t) {
        return {
            hasError: !0,
            error: t
        }
    }
    componentDidCatch(t, a) {
        console.error("Error caught by boundary:", t, a)
    }
    render() {
        var t;
        return this.state.hasError ? e.jsxs("div", {
            className: "p-4 bg-red-500/10 border border-red-500/30 rounded-lg",
            children: [e.jsx("h2", {
                className: "text-red-500 font-bold mb-2",
                children: "Component Error"
            }), e.jsx("p", {
                className: "text-red-400",
                children: ((t = this.state.error) == null ? void 0 : t.message) || "An error occurred"
            }), e.jsx("button", {
                onClick: () => this.setState({
                    hasError: !1
                }),
                className: "mt-2 px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30",
                children: "Retry"
            })]
        }) : this.props.children
    }
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ue = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = s => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , j = (s, t) => {
    const a = l.forwardRef( ({color: n="currentColor", size: r=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: u="", children: d, ...y}, p) => l.createElement("svg", {
        ref: p,
        ...ue,
        width: r,
        height: r,
        stroke: n,
        strokeWidth: o ? Number(i) * 24 / Number(r) : i,
        className: ["lucide", `lucide-${me(s)}`, u].join(" "),
        ...y
    }, [...t.map( ([m,c]) => l.createElement(m, c)), ...Array.isArray(d) ? d : [d]]));
    return a.displayName = `${s}`,
    a
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = j("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = j("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = j("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = j("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = j("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , ge = () => e.jsx("div", {
    className: "w-20 h-20 relative",
    children: e.jsx("img", {//https://i.ibb.co/hMmSq69/artificilbrain-ai.gif
        src: "https://gifdb.com/images/high/ai-computer-face-scanning-x07xsyhmvz23yzrc.webp",
        alt: "NeuralMap Logo",
        className: "w-full h-full object-contain"
    }) 
})
  , ve = new Date("2025-01-06T19:00:00-08:00")
  , D = ({colors: s}) => {
    const [t,a] = l.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    return l.useEffect( () => {
        const n = () => {
            const i = ve.getTime() - new Date().getTime();
            i > 0 && a({
                days: Math.floor(i / 864e5),
                hours: Math.floor(i / 36e5 % 24),
                minutes: Math.floor(i / 1e3 / 60 % 60),
                seconds: Math.floor(i / 1e3 % 60)
            })
        }
        ;
        n();
        const r = setInterval(n, 1e3);
        return () => clearInterval(r)
    }
    , []),
    e.jsxs("div", {
        className: "flex items-center space-x-4",
        children: [e.jsx(k, {
            value: t.days,
            label: "d",
            colors: s
        }), e.jsx(k, {
            value: t.hours,
            label: "h",
            colors: s
        }), e.jsx(k, {
            value: t.minutes,
            label: "m",
            colors: s
        }), e.jsx(k, {
            value: t.seconds,
            label: "s",
            colors: s
        })]
    })
}
  , k = ({value: s, label: t, colors: a}) => e.jsxs("div", {
    className: `${a.primary} flex items-center text-xl`,
    children: [e.jsx("span", {
        className: "w-8 text-right font-bold",
        children: s.toString().padStart(2, "0")
    }), e.jsx("span", {
        className: `${a.secondary} ml-1`,
        children: t
    })]
})//changeafter(contract)
  , T = ""
  , K = $.memo( ({colors: s, onWhitepaper: t}) => {
    const a = () => {
        navigator.clipboard.writeText(T)
    }
    ;
    return e.jsx(E, {
        children: e.jsx("div", {
            className: `bg-black border-b ${s.border} p-4`,
            children: e.jsxs("div", {
                className: "container mx-auto",
                children: [e.jsxs("div", {
                    className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
                    children: [e.jsxs("div", {
                        className: "flex items-center space-x-4 lg:space-x-6",
                        children: [e.jsx(ge, {
                            colors: s
                        }), e.jsxs("div", {
                            children: [e.jsxs("h1", {
                                className: `text-3xl lg:text-4xl font-bold ${s.primary} font-mono tracking-wider`,
                                children: ["NeuralMap", e.jsx("span", {
                                    className: s.secondary,
                                    children: "AI"
                                })]
                            }), e.jsxs("div", {
                                className: `${s.text} text-xs lg:text-sm`,
                                children: ["Enhanced Neural Network Visualization System ", re]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:space-x-6",
                        children: [e.jsx("div", {
                            className: "hidden lg:block",
                            children: e.jsx(D, {
                                colors: s
                            })
                        }), e.jsxs("button", {
                            onClick: a,
                            className: `flex items-center space-x-2 ${s.primary} hover:opacity-80 transition-opacity`,
                            children: [e.jsx(he, {
                                className: "w-4 h-4"
                            }), e.jsxs("span", {
                                className: "text-sm font-mono",
                                children: [T.slice(0, 4), "check x (twitter) for offical drops", T.slice(-4)]
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [e.jsxs("button", {
                                onClick: t,
                                className: `flex items-center space-x-2 ${s.primary} hover:opacity-80 transition-opacity`,
                                children: [e.jsx(xe, {
                                    className: "w-5 h-5"
                                }), e.jsx("span", {
                                    className: "text-sm",
                                    children: "Whitepaper"
                                })]
                            }), e.jsx("a", {//Changeafter
                                href: "https://x.com/neuralmap_sol",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `${s.primary} hover:opacity-80 transition-opacity`,
                                children: e.jsx(ye, {
                                    className: "w-5 h-5"
                                })
                            }), , e.jsx("a", {//Changeafte
                                href: "https://t.me/NeuralMapAI",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `${s.primary} hover:opacity-80 transition-opacity`,
                                children: e.jsx(fe, {
                                    className: "w-5 h-5"
                                })
                            })]
                        })]
                    })]
                }), e.jsx("div", {
                    className: "lg:hidden mt-4",
                    children: e.jsx(D, {
                        colors: s
                    })
                })]
            })
        })
    })
}
);
K.displayName = "Header";
const R = $.memo( ({points: s, params: t, time: a, colors: n, onNodeClick: r}) => {
    const i = l.useMemo( () => {
        const o = []
          , u = Math.floor(s.length / t.layers);
        for (let d = 0; d < t.layers - 1; d++) {
            const y = d * u
              , p = (d + 1) * u;
            for (let m = y; m < y + u; m++)
                for (let c = p; c < p + u; c++)
                    Math.random() < t.connections && o.push({
                        source: s[m],
                        target: s[c],
                        strength: .4 + Math.random() * .3
                    })
        }
        return o
    }
    , [s, t]);
    return e.jsx(E, {
        children: e.jsx("div", {
            className: "w-full h-full",
            children: e.jsxs("div", {
                className: `rounded-lg border ${n.border} p-4 bg-black/30 backdrop-blur-sm h-full`,
                style: {
                    boxShadow: `0 0 30px ${n.glow}22`
                },
                children: [e.jsxs("div", {
                    className: `text-xs mb-2 ${n.secondary} flex justify-between items-center`,
                    children: [e.jsx("span", {
                        className: "font-mono",
                        children: "[NEURAL NETWORK VISUALIZATION]"
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [e.jsxs("span", {
                            children: ["Nodes: ", s.length]
                        }), e.jsxs("span", {
                            children: ["Connections: ", i.length]
                        }), e.jsxs("span", {
                            children: ["Runtime: ", Math.floor(a), "s"]
                        })]
                    })]
                }), e.jsxs("svg", {
                    className: "w-full h-[calc(100%-2rem)]",
                    viewBox: "-200 -150 400 300",
                    preserveAspectRatio: "xMidYMid meet",
                    style: {
                        filter: `drop-shadow(0 0 8px ${n.glow}44)`
                    },
                    children: [e.jsx("defs", {
                        children: e.jsxs("radialGradient", {
                            id: "nodeGradient",
                            children: [e.jsx("stop", {
                                offset: "0%",
                                stopColor: "currentColor",
                                stopOpacity: "0.6"
                            }), e.jsx("stop", {
                                offset: "100%",
                                stopColor: "currentColor",
                                stopOpacity: "0"
                            })]
                        })
                    }), i.map( (o, u) => e.jsx("line", {
                        x1: o.source.x,
                        y1: o.source.y,
                        x2: o.target.x,
                        y2: o.target.y,
                        className: `${n.stroke} transition-opacity duration-300`,
                        strokeWidth: o.strength * t.particleSize,
                        strokeOpacity: o.strength * .5,
                        style: {
                            animation: `pulse ${2 + Math.random() * 2}s infinite`
                        }
                    }, u)), s.map( (o, u) => e.jsxs("g", {
                        onClick: () => r(o, u),
                        className: "cursor-pointer transition-transform duration-300 hover:scale-150",
                        children: [e.jsx("circle", {
                            cx: o.x,
                            cy: o.y,
                            r: o.size * 4 * t.particleSize,
                            className: n.fillLight,
                            style: {
                                opacity: o.opacity * .3,
                                filter: "blur(4px)"
                            }
                        }), e.jsx("circle", {
                            cx: o.x,
                            cy: o.y,
                            r: o.size * 2 * t.particleSize,
                            className: n.fill,
                            style: {
                                opacity: o.opacity
                            }
                        })]
                    }, u))]
                })]
            })
        })
    })
}
);
R.displayName = "NetworkVisualization";
function be(s, t=30, a) {
    const [n,r] = l.useState("")
      , [i,o] = l.useState(0);
    return l.useEffect( () => {
        if (i < s.length) {
            const u = setTimeout( () => {
                r(d => d + s[i]),
                o(i + 1)
            }
            , t);
            return () => clearTimeout(u)
        } else
            a && a()
    }
    , [i, s, t, a]),
    n
}
const we = ({text: s, speed: t=10, onComplete: a}) => {
    const n = be(s, t, a);
    return e.jsx("span", {
        children: n
    })
}
  , W = $.memo( ({commandHistory: s, currentInput: t, onInputChange: a, onKeyDown: n, colors: r}) => {
    const i = l.useRef(null)
      , o = l.useRef(null);
    return l.useEffect( () => {
        o.current && o.current.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    }
    , [s, t]),
    e.jsx(E, {
        children: e.jsxs("div", {
            ref: i,
            className: "h-full flex flex-col",
            children: [e.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children: s.map( (u, d) => e.jsxs("div", {
                    className: "mb-2",
                    ref: d === s.length - 1 ? o : null,
                    children: [e.jsxs("div", {
                        children: [e.jsx("span", {
                            className: r.text,
                            children: u.command.startsWith("[") ? "" : "neural@network:~$ "
                        }), e.jsx("span", {
                            className: r.primary,
                            children: u.command
                        })]
                    }), e.jsx("div", {
                        className: `whitespace-pre-wrap ${r.secondary}`,
                        children: e.jsx(we, {
                            text: u.response,
                            speed: 1
                        })
                    })]
                }, d))
            }), e.jsxs("div", {
                className: "flex items-center mt-2",
                children: [e.jsx("span", {
                    className: r.text,
                    children: "neural@network:~$ "
                }), e.jsx("input", {
                    type: "text",
                    value: t,
                    onChange: a,
                    onKeyDown: n,
                    className: `flex-1 bg-transparent border-none outline-none ${r.primary} ml-2`,
                    autoFocus: !0
                }), e.jsx("span", {
                    className: `${r.primary} cursor-blink ml-0.5`,
                    children: "█"
                })]
            })]
        })
    })
}
);
W.displayName = "Terminal";
const q = $.memo( ({progress: s, colors: t}) => e.jsxs("div", {
    className: "my-2",
    children: [e.jsx("div", {
        className: `w-full bg-${t.primary}/30 h-1 rounded-full overflow-hidden`,
        children: e.jsx("div", {
            className: `h-full ${t.fill} rounded-full transition-all duration-300 ease-out relative`,
            style: {
                width: `${s}%`
            },
            children: e.jsx("div", {
                className: `absolute inset-0 bg-gradient-to-r from-${t.primary}/0 via-${t.secondary}/30 to-${t.primary}/0 animate-pulse`
            })
        })
    }), e.jsxs("div", {
        className: `text-right text-sm mt-1 ${t.secondary}`,
        children: ["System Initialization: ", s, "%"]
    })]
}));
q.displayName = "ProgressBar";
const Ne = `NeuralMapAI: Enhanced Neural Network Visualization System v3.1.2
Technical Whitepaper v1.0
=========================

1. Introduction
--------------
NeuralMapAI represents a breakthrough in neural network visualization technology, offering real-time insights into neural network architectures and behaviors.

2. System Architecture
---------------------
- Modular visualization engine
- Real-time pattern generation
- Dynamic network topology
- Adaptive connection mapping

3. Key Features
--------------
3.1 Visualization Patterns
  - Wave: Sinusoidal neural activation patterns
  - Spiral: Circular propagation visualization
  - Pulse: Temporal activation mapping

3.2 Network Parameters
  - Dynamic neuron count adjustment
  - Variable layer configuration
  - Adjustable connection density
  - Customizable animation speed

4. Technical Specifications
-------------------------
- Real-time rendering engine
- Optimized connection algorithms
- Advanced pattern generation
- Multi-threaded computation

5. Future Development
--------------------
5.1 Planned Features
  - Advanced topology mapping
  - Enhanced visualization patterns
  - Extended parameter controls
  - Performance optimizations

6. Conclusion
------------
NeuralMapAI sets new standards in neural network visualization, providing unprecedented insights into network behavior and structure.`
  , je = ({colors: s, onReturn: t}) => e.jsxs("div", {
    className: "min-h-screen bg-black",
    children: [e.jsx("div", {
        className: `bg-black border-b ${s.border} p-4 mb-4`,
        children: e.jsx("div", {
            className: "max-w-4xl mx-auto flex items-center justify-between",
            children: e.jsxs("button", {
                onClick: t,
                className: `flex items-center space-x-2 ${s.primary} hover:opacity-80 transition-opacity`,
                children: [e.jsx(pe, {
                    className: "w-5 h-5"
                }), e.jsx("span", {
                    children: "Return to Terminal"
                })]
            })
        })
    }), e.jsx("div", {
        className: "p-4",
        children: e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx("div", {
                className: `font-mono ${s.text} whitespace-pre-wrap`,
                children: Ne
            })
        })
    })]
})
  , Se = () => {
    const [s,t] = l.useState(0)
      , [a,n] = l.useState(!1)
      , [r,i] = l.useState(!1)
      , [o,u] = l.useState(!1)
      , [d,y] = l.useState(H)
      , [p] = l.useState(Date.now())
      , {commandHistory: m, currentInput: c, commandHistoryIndex: g, setCurrentInput: f, setCommandHistoryIndex: N, addCommand: b, clearHistory: h, handleKeyNavigation: x} = ne()
      , {points: L, time: I} = ie(a, d);
    le(b, t, i, n, h);
    const B = l.useCallback( (v, S) => {
        const C = `
Node Analysis:
-------------
Index: ${S}
Position: (${v.x.toFixed(2)}, ${v.y.toFixed(2)}, ${v.z.toFixed(2)})
Size: ${v.size.toFixed(2)}
Activation: ${v.opacity.toFixed(2)}
Layer: ${Math.floor(S / (d.neurons * 3))}`;
        b("[ANALYSIS]", C)
    }
    , [d.neurons, b])
      , U = l.useCallback(v => {
        if (v.key === "Enter" && c.trim()) {
            const S = (Date.now() - p) / 1e3
              , C = de(c, {
                params: d,
                setParams: y,
                showVisualization: a,
                setShowVisualization: n,
                time: S,
                clearHistory: h,
                setBootComplete: i,
                bootComplete: r
            });
            C && b(c, C),
            f(""),
            N(-1),
            c.toLowerCase().trim() === "exit" && setTimeout( () => {
                window.location.reload()
            }
            , 1e3)
        } else
            x(v)
    }
    , [c, d, a, I, x, b, h, f, N, r, p])
      , Y = l.useCallback( () => {
        r || (document.body.style.cursor = "default",
        i(!0),
        n(!0))
    }
    , [r])
      , w = V[d.colorScheme];
    return o ? e.jsx(je, {
        colors: w,
        onReturn: () => u(!1)
    }) : e.jsx("div", {
        className: "min-h-screen bg-black flex flex-col h-screen",
        children: e.jsx(E, {
            children: r ? e.jsxs(e.Fragment, {
                children: [e.jsx(K, {
                    colors: w,
                    onWhitepaper: () => u(!0)
                }), e.jsxs("div", {
                    className: "flex flex-1 h-[calc(100vh-4rem)] overflow-hidden flex-col lg:flex-row",
                    children: [e.jsxs("div", {
                        className: "w-full lg:w-1/2 flex flex-col p-4 h-full overflow-hidden",
                        children: [s < 100 && e.jsx(q, {
                            progress: s,
                            colors: w
                        }), e.jsx("div", {
                            className: "flex-1 overflow-auto",
                            children: e.jsx(W, {
                                commandHistory: m,
                                currentInput: c,
                                commandHistoryIndex: g,
                                onInputChange: v => f(v.target.value),
                                onKeyDown: U,
                                colors: w
                            })
                        })]
                    }), e.jsx("div", {
                        className: "w-full lg:w-1/2 p-4 h-full",
                        children: a && e.jsx(R, {
                            points: L,
                            params: d,
                            time: I,
                            colors: w,
                            onNodeClick: B
                        })
                    })]
                })]
            }) : e.jsxs("div", {
                className: "flex flex-col items-center justify-center h-screen cursor-pointer",
                onClick: Y,
                children: [e.jsx("div", {
                    className: `fixed inset-0 ${a ? "opacity-40" : "opacity-0"}`,
                    children: e.jsx(R, {
                        points: L,
                        params: d,
                        time: I,
                        colors: w,
                        onNodeClick: () => {}
                    })
                }), e.jsxs("div", {
                    className: "z-10 text-center",
                    children: [e.jsxs("h1", {
                        className: `text-6xl font-bold ${w.primary} font-mono tracking-wider mb-2`,
                        children: ["NeuralMap", e.jsx("span", {
                            className: w.secondary,
                            children: "AI"
                        })]
                    }), e.jsx("div", {
                        className: `${w.text} text-xl font-mono mt-4`,
                        children: "Click anywhere to start"
                    })]
                })]
            })
        })
    })
}
;
function Ce() {
    return e.jsx(Se, {})
}
F(document.getElementById("root")).render(e.jsx(l.StrictMode, {
    children: e.jsx(Ce, {})
}));
