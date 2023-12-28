(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [667], {
        14322: function(e, n, t) {
            var r = t(4635),
                o = t(16370)(r);
            o.push([e.id, ".zsTil{border-radius:5px;box-shadow:0 1px 3px #00000026;position:relative}.zsTil .prism-player{background-color:#f7f7f7!important;border-radius:5px;height:100%!important;left:0;position:absolute;top:0;width:100%!important}.zsTil .prism-player>video{border-radius:5px}.zsTil .prism-player .prism-liveshift-progress .prism-progress-loaded{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#3232321a}.zsTil .prism-player .prism-liveshift-progress .prism-progress-played{background-color:#fea115}.zsTil .prism-player .prism-progress .prism-progress-loaded{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#3232321a}.zsTil .prism-player .prism-progress .prism-progress-played{background-color:#fea115}.zsTil .prism-player .prism-controlbar{z-index:11!important}.zsTil .prism-player .prism-controlbar .prism-cc-btn{display:none}.zsTil .prism-player .prism-controlbar .prism-controlbar-bg{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#000c;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.zsTil .prism-player .prism-controlbar .prism-volume{margin-right:15px!important;transform:scale(.8)}.zsTil .prism-player .prism-controlbar .prism-setting-btn{transform:scale(.8)}.zsTil .prism-player .prism-cover{border-radius:5px;pointer-events:none;z-index:10!important}.zsTil .prism-player .prism-big-play-btn.pause{border-radius:100%;box-shadow:0 5px 15px #00000026}.zsTil .prism-player .prism-big-play-btn{z-index:11!important}.zsTil .prism-player .prism-tooltip{border-radius:10px;box-shadow:0 3px 5px #0003;height:20px;line-height:19px;padding:0 8px}.zsTil .prism-player .prism-thumbnail img~span{border-radius:10px;box-shadow:0 3px 5px #0003;height:20px;line-height:19px;padding:0 8px}.zsTil[data-has-size=true] .prism-player{height:100%!important;left:0;position:absolute;top:0;width:100%!important}.zsTil[data-has-size=false] .prism-player[data-is-ready=true]{display:inline-block;height:auto!important;width:auto!important}.zsTil[data-has-size=false] .prism-player[data-is-ready=true]>video{display:block;height:auto!important;max-width:100%;position:static!important;transform:none!important;width:auto!important}.dark .zsTil .prism-player{background-color:#383838!important}", "", {
                version: 3,
                sources: ["webpack://./components/markdown/components/LCAliPlayerVideo/AliPlayerReact.iso.css"],
                names: [],
                mappings: "AAAA,OAGI,iBAAkB,CADlB,8BAAyC,CADzC,iBAGJ,CAEA,qBACI,kCAAgD,CAChD,iBAAkB,CAKlB,qBAAuB,CAHvB,MAAO,CADP,iBAAkB,CAElB,KAAM,CACN,oBAEJ,CAEA,2BACI,iBACJ,CAEA,sEAEI,iCAAkC,CAClC,yBAA0B,CAF1B,oBAGJ,CAEA,sEACI,wBACJ,CAEA,4DAEI,iCAAkC,CAClC,yBAA0B,CAF1B,oBAGJ,CAEA,4DACI,wBACJ,CAEA,uCACI,oBACJ,CAEA,qDACI,YACJ,CAEA,4DAII,iCAA0B,CAA1B,yBAA0B,CAD1B,gBAA8B,CAF9B,6BAA8B,CAC9B,8BAGJ,CAEA,qDACI,2BAA6B,CAC7B,mBACJ,CAEA,0DAKI,mBAHJ,CAMA,kCAGI,iBAAkB,CADlB,mBAAoB,CADpB,oBAGJ,CAEA,+CACI,kBAAmB,CACnB,+BACJ,CAEA,yCACI,oBACJ,CAEA,oCACI,kBAAmB,CAInB,0BAAwC,CAFxC,WAAY,CADZ,gBAAiB,CAEjB,aAEJ,CAEA,+CACI,kBAAmB,CAInB,0BAAwC,CAFxC,WAAY,CADZ,gBAAiB,CAEjB,aAEJ,CAEA,yCAKI,qBAAuB,CAFvB,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAEN,oBAEJ,CAEA,8DACI,oBAAqB,CAErB,qBAAuB,CADvB,oBAEJ,CAEA,oEAMI,aAAc,CAHd,qBAAuB,CAEvB,cAAe,CAJf,yBAA2B,CAG3B,wBAA0B,CAF1B,oBAKJ,CAEA,2BACI,kCACJ",
                sourcesContent: ['.prismPlayerContainer {\n    position: relative;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n    border-radius: 5px;\n}\n\n.prismPlayerContainer :global(.prism-player) {\n    background-color: rgba(247,247,247,1) !important;\n    border-radius: 5px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.prismPlayerContainer :global(.prism-player) > video {\n    border-radius: 5px;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-liveshift-progress) :global(.prism-progress-loaded) {\n    background: rgba(50,50,50,0.1);\n    -webkit-backdrop-filter: blur(2px);\n    backdrop-filter: blur(2px);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-liveshift-progress) :global(.prism-progress-played) {\n    background-color: #fea115;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-progress) :global(.prism-progress-loaded) {\n    background: rgba(50,50,50,0.1);\n    -webkit-backdrop-filter: blur(2px);\n    backdrop-filter: blur(2px);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-progress) :global(.prism-progress-played) {\n    background-color: #fea115;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) {\n    z-index: 11 !important;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-cc-btn) {\n    display: none;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-controlbar-bg) {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    background: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(2px);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-volume) {\n    margin-right: 15px !important;\n    transform: scale(0.8);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-setting-btn) {\n    transform: scale(0.8);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-setting-btn) {\n    transform: scale(0.8);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-cover) {\n    z-index: 10 !important;\n    pointer-events: none;\n    border-radius: 5px;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-big-play-btn.pause) {\n    border-radius: 100%;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-big-play-btn) {\n    z-index: 11 !important;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-tooltip) {\n    border-radius: 10px;\n    line-height: 19px;\n    height: 20px;\n    padding: 0 8px;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-thumbnail) img ~ span {\n    border-radius: 10px;\n    line-height: 19px;\n    height: 20px;\n    padding: 0 8px;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n}\n\n.prismPlayerContainer[data-has-size="true"] :global(.prism-player) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.prismPlayerContainer[data-has-size="false"] :global(.prism-player)[data-is-ready="true"] {\n    display: inline-block;\n    width: auto !important;\n    height: auto !important;\n}\n\n.prismPlayerContainer[data-has-size="false"] :global(.prism-player)[data-is-ready="true"] > video {\n    position: static !important;\n    width: auto !important;\n    height: auto !important;\n    transform: none !important;\n    max-width: 100%;\n    display: block;\n}\n\n:global(.dark) .prismPlayerContainer :global(.prism-player) {\n    background-color: rgba(56,56,56,1) !important;\n}'],
                sourceRoot: ""
            }]), o.locals = {
                prismPlayerContainer: "zsTil"
            }, e.exports = o
        },
        89270: function(e, n, t) {
            var r = t(4635),
                o = t(16370)(r);
            o.push([e.id, '.EoHqa~.EoHqa:before{background-color:#0000000d;content:" ";height:12px;left:0;position:absolute;top:50%;transform:translate(-50%,-50%);width:1px}.dark .EoHqa~.EoHqa:before{background-color:#f7faff1f}', "", {
                version: 3,
                sources: ["webpack://./components/markdown/components/LCGroupedCodeFence/TabBarItem.iso.css"],
                names: [],
                mappings: "AAAA,qBAKI,0BAAmB,CAHnB,WAAY,CACZ,WAAY,CAGZ,MAAO,CALP,iBAAkB,CAMlB,OAAQ,CACR,8BAAgC,CAJhC,SAKJ,CAGI,2BAAA,0BAAwB",
                sourcesContent: ['.item ~ .item::before {\n    position: absolute;\n    content: " ";\n    height: 12px;\n    width: 1px;\n    @apply bg-divider-3;\n    left: 0;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n:global(.dark) .item ~ .item::before {\n    @apply bg-dark-divider-3;\n}'],
                sourceRoot: ""
            }]), o.locals = {
                item: "EoHqa"
            }, e.exports = o
        },
        79403: function(e, n, t) {
            var r = t(4635),
                o = t(16370)(r);
            o.push([e.id, ".uoZgS{background:url(https://leetcode.com/static/images/articles/video-preview.png)}", "", {
                version: 3,
                sources: ["webpack://./components/markdown/components/PremiumOnlyVideo/PremiumOnlyVideo.iso.css"],
                names: [],
                mappings: "AAAA,OAEE,6EACF",
                sourcesContent: ['.background {\n  /* FIXME: use local file rather than hardcoded URL. Using local PNG file causes webpack file-loader error */\n  background: url("https://leetcode.com/static/images/articles/video-preview.png")\n}\n'],
                sourceRoot: ""
            }]), o.locals = {
                background: "uoZgS"
            }, e.exports = o
        },
        97045: function(e, n, t) {
            var r = t(4635),
                o = t(16370)(r);
            o.push([e.id, ".FN9Jv{overflow-wrap:break-word;word-break:normal}.FN9Jv img,.FN9Jv video{margin-bottom:1rem}.FN9Jv>:last-child{margin-bottom:0}.FN9Jv>:first-child{margin-top:0}.FN9Jv>div:first-child{margin-top:5px}.FN9Jv iframe{margin-bottom:1rem;max-width:100%}.FN9Jv h1{font-size:1.5rem;line-height:2rem}.FN9Jv h1,.FN9Jv h2{font-weight:700;margin-bottom:1rem;margin-top:1.5rem}.FN9Jv h2{font-size:1.25rem;line-height:1.75rem}.FN9Jv h3{font-size:1.125rem;line-height:1.75rem}.FN9Jv h3,.FN9Jv h4{font-weight:700;margin-bottom:1rem;margin-top:1.5rem}.FN9Jv h4{font-size:17px}.FN9Jv h5{font-weight:700}.FN9Jv h5,.FN9Jv h6{font-size:1rem;line-height:1.5rem;margin-bottom:1rem;margin-top:1.5rem}.FN9Jv h1,.FN9Jv h2,.FN9Jv h3,.FN9Jv h4{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity))}.dark .FN9Jv h1,.dark .FN9Jv h2,.dark .FN9Jv h3,.dark .FN9Jv h4{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.FN9Jv p{font-size:.875rem;line-height:1.25rem;line-height:22px;margin-bottom:1rem;overflow-x:auto;overflow-y:hidden}.FN9Jv p:first-child{margin-top:0}.FN9Jv h5,.FN9Jv h6,.FN9Jv p,.FN9Jv>div{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity))}.dark .FN9Jv h5,.dark .FN9Jv h6,.dark .FN9Jv p,.dark .FN9Jv>div{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.FN9Jv a{--tw-text-opacity:1;color:rgb(0 122 255/var(--tw-text-opacity));margin-bottom:1rem}.FN9Jv a:hover{text-decoration-line:underline}.dark .FN9Jv a{--tw-text-opacity:1;color:rgb(10 132 255/var(--tw-text-opacity))}.FN9Jv strong{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity));font-weight:700}.dark .FN9Jv strong{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.FN9Jv blockquote{--tw-border-opacity:1;border-color:rgb(229 229 229/var(--tw-border-opacity));border-left-width:6px;margin-bottom:1rem}.dark .FN9Jv blockquote{--tw-border-opacity:1;border-color:rgb(66 66 66/var(--tw-border-opacity))}.FN9Jv blockquote>*{margin-left:1rem}.FN9Jv blockquote *{color:#3c3c4399!important}.dark .FN9Jv blockquote *{color:#eff2f699!important}.FN9Jv hr{border-bottom-width:2px;border-color:#0000000d;margin-bottom:1.5rem;margin-top:1.5rem}.dark .FN9Jv hr{border-color:#f7faff1f}.FN9Jv ins,.FN9Jv u{color:#3c3c4399;text-decoration-line:underline}.dark .FN9Jv ins,.dark .FN9Jv u{color:#eff2f699}.FN9Jv ul{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity));font-size:1rem;line-height:1.5rem;list-style-type:disc;margin-bottom:1rem}.dark .FN9Jv ul{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.FN9Jv ol ol,.FN9Jv ul ul{margin-bottom:0;margin-top:.25rem}.FN9Jv ul ul{list-style-type:circle}.FN9Jv ol ol{list-style-type:lower-alpha}.FN9Jv li{margin-bottom:.25rem;margin-left:2rem}.FN9Jv li:last-child{margin-bottom:0}.FN9Jv li p:first-child{overflow:visible}.FN9Jv ol{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity));font-size:1rem;line-height:1.5rem;list-style-type:decimal;margin-bottom:1rem}.dark .FN9Jv ol{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.FN9Jv code,.FN9Jv pre{color:#262626bf}.dark .FN9Jv code,.dark .FN9Jv pre{color:#eff1f6bf}.FN9Jv code,.FN9Jv pre{background-color:#000a200d;border-radius:.5rem;font-family:Menlo,sans-serif;font-size:.75rem;line-height:1.5rem}.FN9Jv pre{border-radius:0;margin-bottom:1rem;padding:.625rem .75rem}.FN9Jv>pre{border-radius:.5rem}.FN9Jv code{margin:1rem .25rem;padding:.25rem}.dark .FN9Jv code,.dark .FN9Jv pre{background-color:#ffffff1a}.FN9Jv pre code{background-color:initial;border-radius:0;margin:0;padding:0}.dark .FN9Jv pre code{background-color:initial}.FN9Jv table{--tw-text-opacity:1;border-radius:.5rem;border-style:hidden;box-shadow:0 0 0 1px #e5e5e5;color:rgb(38 38 38/var(--tw-text-opacity));margin-bottom:1.5rem}.dark .FN9Jv table{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgb(74 74 74/var(--tw-border-opacity));box-shadow:0 0 0 1px #424242;color:rgb(255 255 255/var(--tw-text-opacity))}.FN9Jv table th{--tw-border-opacity:1;background-color:#000a200d;border-color:rgb(223 223 223/var(--tw-border-opacity));border-width:1px;font-size:1rem;font-weight:500;line-height:1.5rem;padding:1rem 1.25rem}.FN9Jv table th:first-child{border-top-left-radius:.5rem}.FN9Jv table th:last-child{border-top-right-radius:.5rem}.dark .FN9Jv table th{--tw-border-opacity:1;background-color:#ffffff1a;border-color:rgb(74 74 74/var(--tw-border-opacity))}.FN9Jv table td{--tw-border-opacity:1;border-color:rgb(223 223 223/var(--tw-border-opacity));border-width:1px;font-size:1rem;line-height:1.5rem;padding:1rem 1.25rem}.dark .FN9Jv table td{--tw-border-opacity:1;border-color:rgb(74 74 74/var(--tw-border-opacity))}.FN9Jv .language-md .table{display:inline!important}.FN9Jv .katex-html{overflow-x:auto}.FN9Jv .katex{color:#262626bf;font-size:1rem!important;line-height:1.5rem!important;margin-left:2px;margin-right:2px}.dark .FN9Jv .katex{color:#eff1f6bf}.FN9Jv .video-container{height:0;margin-bottom:10px;padding-bottom:56.25%;position:relative}.FN9Jv .video-container iframe{height:100%;left:0;margin:0;position:absolute;top:0;width:100%}", "", {
                version: 3,
                sources: ["webpack://./components/markdown/markdown-content.iso.css"],
                names: [],
                mappings: "AAAA,OAEE,wBAAyB,CADzB,iBAEF,CAIE,wBAAA,kBAAW,CAGb,mBACE,eACF,CAEA,oBACE,YACF,CAEA,uBACE,cACF,CAEA,cAEE,kBAAW,CADX,cAEF,CAGE,UAAA,gBAAmC,CAAnC,gBAAmC,CAInC,oBAJA,eAAmC,CAAnC,kBAAmC,CAAnC,iBAIkC,CAAlC,UAAA,iBAAkC,CAAlC,mBAAkC,CAIlC,UAAA,kBAAkC,CAAlC,mBAAkC,CAIlC,oBAJA,eAAkC,CAAlC,kBAAkC,CAAlC,iBAIsC,CAAtC,UAAA,cAAsC,CAItC,UAAA,eAAoC,CAIpC,oBAJA,cAAoC,CAApC,kBAAoC,CAApC,kBAAoC,CAApC,iBAI0B,CAO1B,wCAAA,mBAAmB,CAAnB,0CAAmB,CAOnB,gEAAA,mBAAwB,CAAxB,6CAAwB,CAIxB,SAAA,iBAAoE,CAApE,mBAAoE,CAApE,gBAAoE,CAApE,kBAAoE,CAApE,eAAoE,CAApE,iBAAoE,CAIpE,qBAAA,YAAW,CAOX,wCAAA,mBAAmB,CAAnB,0CAAmB,CAOnB,gEAAA,mBAAwB,CAAxB,6CAAwB,CAIxB,SAAA,mBAAuB,CAAvB,2CAAuB,CAAvB,kBAAuB,CAIvB,eAAA,8BAAgB,CAIhB,eAAA,mBAAuB,CAAvB,4CAAuB,CAIvB,cAAA,mBAA6B,CAA7B,0CAA6B,CAA7B,eAA6B,CAI7B,oBAAA,mBAAwB,CAAxB,6CAAwB,CAIxB,kBAAA,qBAAwC,CAAxC,sDAAwC,CAAxC,qBAAwC,CAAxC,kBAAwC,CAIxC,wBAAA,qBAAyB,CAAzB,mDAAyB,CAIzB,oBAAA,gBAAW,CAIX,oBAAA,yBAAoB,CAIpB,0BAAA,yBAAyB,CAIzB,UAAA,uBAAuC,CAAvC,sBAAuC,CAAvC,oBAAuC,CAAvC,iBAAuC,CAIvC,gBAAA,sBAA4B,CAK5B,oBAAA,eAA6B,CAA7B,8BAA6B,CAK7B,gCAAA,eAAwB,CAIxB,UAAA,mBAA4C,CAA5C,0CAA4C,CAA5C,cAA4C,CAA5C,kBAA4C,CAA5C,oBAA4C,CAA5C,kBAA4C,CAI5C,gBAAA,mBAAwB,CAAxB,6CAAwB,CAKxB,0BAAA,eAAgB,CAAhB,iBAAgB,CAGlB,aACE,sBACF,CAEA,aACE,2BACF,CAGE,UAAA,oBAAgB,CAAhB,gBAAgB,CAIhB,qBAAA,eAAW,CAIX,wBAAA,gBAAuB,CAIvB,UAAA,mBAA+C,CAA/C,0CAA+C,CAA/C,cAA+C,CAA/C,kBAA+C,CAA/C,uBAA+C,CAA/C,kBAA+C,CAI/C,gBAAA,mBAAwB,CAAxB,6CAAwB,CAKxB,uBAAA,eAAmB,CAKnB,mCAAA,eAAwB,CAKxB,uBAAA,0BAAwD,CAAxD,mBAAwD,CAAxD,4BAAwD,CAAxD,gBAAwD,CAAxD,kBAAwD,CAIxD,WAAA,eAAoC,CAApC,kBAAoC,CAApC,sBAAoC,CAIpC,WAAA,mBAAiB,CAIjB,YAAA,kBAAoB,CAApB,cAAoB,CAKpB,mCAAA,0BAAqB,CAIrB,gBAAA,wBAAgD,CAAhD,eAAgD,CAAhD,QAAgD,CAAhD,SAAgD,CAIhD,sBAAA,wBAAqB,CAGvB,aAEE,mBAAiD,CAAjD,mBAAiD,CAAjD,mBAAiD,CADjD,4BAA6B,CAC7B,0CAAiD,CAAjD,oBACF,CAEA,mBAEE,qBAA2C,CAA3C,mBAA2C,CAA3C,mDAA2C,CAD3C,4BAA6B,CAC7B,6CACF,CAGE,gBAAA,qBAA2E,CAA3E,0BAA2E,CAA3E,sDAA2E,CAA3E,gBAA2E,CAA3E,cAA2E,CAA3E,eAA2E,CAA3E,kBAA2E,CAA3E,oBAA2E,CAI3E,4BAAA,4BAAoB,CAIpB,2BAAA,6BAAoB,CAIpB,sBAAA,qBAAwC,CAAxC,0BAAwC,CAAxC,mDAAwC,CAIxC,gBAAA,qBAAqD,CAArD,sDAAqD,CAArD,gBAAqD,CAArD,cAAqD,CAArD,kBAAqD,CAArD,oBAAqD,CAIrD,sBAAA,qBAAyB,CAAzB,mDAAyB,CAG3B,2BAKE,wBACF,CAEA,mBACE,eACF,CAGE,cAAA,eAAuC,CAAvC,wBAAuC,CAAvC,4BAAuC,CAAvC,eAAuC,CAAvC,gBAAuC,CAIvC,oBAAA,eAAwB,CAG1B,wBAGE,QAAS,CACT,kBAAmB,CAFnB,qBAAsB,CADtB,iBAIF,CAEA,+BAKE,WAAY,CAFZ,MAAO,CAGP,QAAS,CALT,iBAAkB,CAClB,KAAM,CAEN,UAGF",
                sourcesContent: [".markdown {\n  word-break: normal;\n  overflow-wrap: break-word;\n}\n\n.markdown img,\n.markdown video {\n  @apply mb-4;\n}\n\n.markdown > *:last-child {\n  margin-bottom: 0;\n}\n\n.markdown > *:first-child {\n  margin-top: 0;\n}\n\n.markdown > div:first-child {\n  margin-top: 5px;\n}\n\n.markdown iframe {\n  max-width: 100%;\n  @apply mb-4;\n}\n\n.markdown h1 {\n  @apply mb-4 mt-6 text-2xl font-bold;\n}\n\n.markdown h2 {\n  @apply mb-4 mt-6 text-xl font-bold;\n}\n\n.markdown h3 {\n  @apply mb-4 mt-6 text-lg font-bold;\n}\n\n.markdown h4 {\n  @apply mb-4 mt-6 text-[17px] font-bold;\n}\n\n.markdown h5 {\n  @apply mb-4 mt-6 text-base font-bold;\n}\n\n.markdown h6 {\n  @apply mb-4 mt-6 text-base;\n}\n\n.markdown h1,\n.markdown h2,\n.markdown h3,\n.markdown h4 {\n  @apply text-label-1;\n}\n\n:global(.dark) .markdown h1,\n:global(.dark) .markdown h2,\n:global(.dark) .markdown h3,\n:global(.dark) .markdown h4 {\n  @apply text-dark-label-1;\n}\n\n.markdown p {\n  @apply mb-4 overflow-x-auto overflow-y-hidden text-sm leading-[22px];\n}\n\n.markdown p:first-child {\n  @apply mt-0;\n}\n\n.markdown h5,\n.markdown h6,\n.markdown p,\n.markdown > div {\n  @apply text-label-1;\n}\n\n:global(.dark) .markdown h5,\n:global(.dark) .markdown h6,\n:global(.dark) .markdown p,\n:global(.dark) .markdown > div {\n  @apply text-dark-label-1;\n}\n\n.markdown a {\n  @apply text-blue-s mb-4;\n}\n\n.markdown a:hover {\n  @apply underline;\n}\n\n:global(.dark) .markdown a {\n  @apply text-dark-blue-s;\n}\n\n.markdown strong {\n  @apply text-label-1 font-bold;\n}\n\n:global(.dark) .markdown strong {\n  @apply text-dark-label-1;\n}\n\n.markdown blockquote {\n  @apply border-gray-3 mb-4 border-l-[6px];\n}\n\n:global(.dark) .markdown blockquote {\n  @apply border-dark-gray-3;\n}\n\n.markdown blockquote > * {\n  @apply ml-4;\n}\n\n.markdown blockquote * {\n  @apply !text-label-3;\n}\n\n:global(.dark) .markdown blockquote * {\n  @apply !text-dark-label-3;\n}\n\n.markdown hr {\n  @apply border-divider-3 my-6 border-b-2;\n}\n\n:global(.dark) .markdown hr {\n  @apply border-dark-divider-3;\n}\n\n.markdown ins,\n.markdown u {\n  @apply text-label-3 underline;\n}\n\n:global(.dark) .markdown ins,\n:global(.dark) .markdown u {\n  @apply text-dark-label-3;\n}\n\n.markdown ul {\n  @apply text-label-1 mb-4 list-disc text-base;\n}\n\n:global(.dark) .markdown ul {\n  @apply text-dark-label-1;\n}\n\n.markdown ul ul,\n.markdown ol ol {\n  @apply mb-0 mt-1;\n}\n\n.markdown ul ul {\n  list-style-type: circle;\n}\n\n.markdown ol ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown li {\n  @apply mb-1 ml-8;\n}\n\n.markdown li:last-child {\n  @apply mb-0;\n}\n\n.markdown li p:first-child {\n  @apply overflow-visible;\n}\n\n.markdown ol {\n  @apply text-label-1 mb-4 list-decimal text-base;\n}\n\n:global(.dark) .markdown ol {\n  @apply text-dark-label-1;\n}\n\n.markdown code,\n.markdown pre {\n  @apply text-label-2;\n}\n\n:global(.dark) .markdown code,\n:global(.dark) .markdown pre {\n  @apply text-dark-label-2;\n}\n\n.markdown code,\n.markdown pre {\n  @apply bg-fill-3 font-menlo rounded-lg text-xs leading-6;\n}\n\n.markdown pre {\n  @apply mb-4 rounded-none px-3 py-2.5;\n}\n\n.markdown > pre {\n  @apply rounded-lg;\n}\n\n.markdown code {\n  @apply mx-1 my-4 p-1;\n}\n\n:global(.dark) .markdown code,\n:global(.dark) .markdown pre {\n  @apply bg-dark-fill-3;\n}\n\n.markdown pre code {\n  @apply m-0 rounded-none bg-transparent px-0 py-0;\n}\n\n:global(.dark) .markdown pre code {\n  @apply bg-transparent;\n}\n\n.markdown table {\n  box-shadow: 0 0 0 1px #e5e5e5;\n  @apply text-label-1 mb-6 rounded-lg border-hidden;\n}\n\n:global(.dark) .markdown table {\n  box-shadow: 0 0 0 1px #424242;\n  @apply border-dark-gray-4 text-dark-label-1;\n}\n\n.markdown table th {\n  @apply border-gray-4 bg-fill-3 border-[1px] px-5 py-4 text-base font-medium;\n}\n\n.markdown table th:first-child {\n  @apply rounded-tl-lg;\n}\n\n.markdown table th:last-child {\n  @apply rounded-tr-lg;\n}\n\n:global(.dark) .markdown table th {\n  @apply border-dark-gray-4 bg-dark-fill-3;\n}\n\n.markdown table td {\n  @apply border-gray-4 border-[1px] px-5 py-4 text-base;\n}\n\n:global(.dark) .markdown table td {\n  @apply border-dark-gray-4;\n}\n\n.markdown :global(.language-md .table) {\n  /*\n    FIXME: tailwind-css `.table` conflict with highlight.js `.table`,\n           which just have different meanings but with the same name\n     */\n  display: inline !important;\n}\n\n.markdown :global(.katex-html) {\n  overflow-x: auto;\n}\n\n.markdown :global(.katex) {\n  @apply text-label-2 mx-[2px] !text-base;\n}\n\n:global(.dark) .markdown :global(.katex) {\n  @apply text-dark-label-2;\n}\n\n.markdown :global(.video-container) {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  margin-bottom: 10px;\n}\n\n.markdown :global(.video-container) iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n"],
                sourceRoot: ""
            }]), o.locals = {
                markdown: "FN9Jv"
            }, e.exports = o
        },
        71492: function(e, n, t) {
            "use strict";
            t.d(n, {
                zo: function() {
                    return v
                }
            });
            t(87621);
            var r = t(12798),
                o = t(43182),
                i = t(66629),
                a = t(8740),
                s = t.n(a),
                c = ["nav-premium", "nav-shop-premium", "problem-judging-upgrade", "problem-editor-lsp", "problem-related-company", "goods-premium", "problem-list-frequency-lock", "problem-list-premium-title", "problem-list-num-lock", "playground-upgrade", "debugger", "interview-item-plus", "interview-custom-mock", "problem-custom-mock", "wiki-frequency-lock", "navbar-dropdown-context", "interview-premium-question", "profile"],
                l = ["problem-detail-upgrade"],
                u = ["company-start", "company-upgrade", "interview-item-start", "company-search"],
                d = ["competition-history-problem"],
                p = ["plan"],
                f = ["leetbook"];
            var m = {
                source: "premium_source",
                questionSlug: "premium_question_slug",
                companySlug: "premium_company_slug",
                exploreCardSlug: "premium_explore_card_slug",
                contestSlug: "premium_contest_slug",
                contestQuestionSlug: "premium_contest_question_slug",
                planSlug: "premium_study_plan_slug"
            };

            function v(e) {
                var n = function(e) {
                        var n = s().parse(e, {
                            ignoreQueryPrefix: !0
                        });
                        if ((0, r.Z)(n) && n.source) switch (!0) {
                            case c.includes(n.source):
                                return (0, o.Z)(n, "source");
                            case f.includes(n.source):
                                return (0, o.Z)(n, ["source", "leetbookId"]);
                            case l.includes(n.source):
                                return (0, o.Z)(n, ["source", "questionSlug"]);
                            case u.includes(n.source):
                                return (0, o.Z)(n, ["source", "companySlug"]);
                            case d.includes(n.source):
                                return (0, o.Z)(n, ["source", "contestSlug", "contestQuestionSlug"]);
                            case p.includes(n.source):
                                var t = n.source,
                                    i = n.planSlug;
                                return {
                                    source: t,
                                    planSlug: i,
                                    sourceType: t,
                                    sourceId: i
                                };
                            default:
                                return null
                        }
                        return null
                    }(e),
                    t = function(e) {
                        var n = s().parse(e, {
                            ignoreQueryPrefix: !0
                        });
                        return (0, r.Z)(n) && n.promoChannel && "string" === typeof n.promoChannel ? (0, o.Z)(n, "promoChannel") : null
                    }(e),
                    a = t ? {
                        source: t.promoChannel
                    } : n;
                return a ? function(e) {
                    return (0, i.Z)(e, (function(e, n) {
                        return m[n]
                    }))
                }(a) : {}
            }
        },
        78559: function(e, n, t) {
            "use strict";
            t.d(n, {
                L: function() {
                    return o
                }
            });
            var r = t(64386),
                o = r.useLayoutEffect
        },
        36419: function(e, n, t) {
            "use strict";
            t.d(n, {
                z: function() {
                    return i
                }
            });
            t(2979);
            var r = t(64386),
                o = t(78559);

            function i(e) {
                var n = (0, r.useRef)(e);
                return (0, o.L)((function() {
                    n.current = e
                })), (0, r.useCallback)((function() {
                    for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return null === (e = n.current) || void 0 === e ? void 0 : e.call.apply(e, [n].concat(r))
                }), [])
            }
        },
        86878: function(e, n, t) {
            "use strict";
            t.d(n, {
                y: function() {
                    return c
                }
            });
            var r = t(64386),
                o = t(78559),
                i = t(59679),
                a = (t(37872), t(86003), t(91518), t(29308), t(27115), t(6755), t(17519), t(11754), new Map),
                s = (0, r.createContext)({
                    insertCss: function(e) {
                        if (e) {
                            var n = (0, i.Z)(e._getContent()[0], 1)[0],
                                t = a.get(n) || 0;
                            if (a.set(n, t + 1), !t && !document.getElementById(n)) {
                                var r = document.createElement("style");
                                r.id = n, r.textContent = e._getCss(), document.head.appendChild(r)
                            }
                            return function() {
                                var e = a.get(n) || 0;
                                if (e > 1) a.set(n, e - 1);
                                else {
                                    var t = document.getElementById(n);
                                    t && document.head.removeChild(t), a.delete(n)
                                }
                            }
                        }
                    }
                }),
                c = function(e) {
                    var n = (0, r.useContext)(s).insertCss;
                    (0, o.L)((function() {
                        return e && n(e)
                    }), [n, e])
                }
        },
        55725: function(e, n, t) {
            "use strict";
            t.d(n, {
                O: function() {
                    return r
                }
            });
            t(91518);
            var r = {};
            [{
                slug: "cpp",
                lang: "C++"
            }, {
                slug: "java",
                lang: "Java"
            }, {
                slug: "python",
                lang: "Python"
            }, {
                slug: "mysql",
                lang: "MySQL"
            }, {
                slug: "c",
                lang: "C"
            }, {
                slug: "csharp",
                lang: "C#"
            }, {
                slug: "javascript",
                lang: "JavaScript"
            }, {
                slug: "ruby",
                lang: "Ruby"
            }, {
                slug: "bash",
                lang: "Bash"
            }, {
                slug: "swift",
                lang: "Swift"
            }, {
                slug: "golang",
                lang: "Go"
            }, {
                slug: "python3",
                lang: "Python3"
            }, {
                slug: "scala",
                lang: "Scala"
            }, {
                slug: "kotlin",
                lang: "Kotlin"
            }, {
                slug: "rust",
                lang: "Rust"
            }, {
                slug: "php",
                lang: "PHP"
            }, {
                slug: "typescript",
                lang: "TypeScript"
            }, {
                slug: "racket",
                lang: "Racket"
            }].forEach((function(e) {
                r[e.slug] = e.lang
            }))
        },
        99663: function(e, n, t) {
            "use strict";
            t.d(n, {
                t: function() {
                    return Ti
                }
            });
            var r = t(4676),
                o = t(7831),
                i = (t(1743), t(91518), t(78464), t(29092), t(70748), t(96543), t(62217), t(63306), t(64386)),
                a = t(1253),
                s = t(86878),
                c = t(44872),
                l = (t(8249), t(60544)),
                u = t(17660),
                d = t(59679),
                p = (t(81248), t(82544), t(78673)),
                f = t.n(p),
                m = t(67563),
                v = t(5882);
            t(5348), t(52799), t(29308), t(37872), t(27115), t(3500), t(72029), t(56806), t(66128), t(33407);

            function h(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return g(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var b = function(e) {
                    var n = e.length;
                    if (n < 2) return e;
                    var t = e.charAt(0);
                    return t !== e.charAt(n - 1) || '"' !== t && "'" !== t ? e : e.substring(1, n - 1)
                },
                A = function(e) {
                    if (!e.startsWith("{:")) return [null, e];
                    var n = e.indexOf("}", 2);
                    if (n < 0) return [null, e];
                    var t = e.substring(2, n),
                        r = e.substring(n + 1),
                        o = function(e) {
                            var n, t = {},
                                r = h(e.split(" "));
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var o = n.value;
                                    if (o) {
                                        var i = o.indexOf("=");
                                        if (i < 0) t[o] = !0;
                                        else {
                                            var a = o.substring(0, i).trim(),
                                                s = b(o.substring(i + 1).trim());
                                            t[a] = s
                                        }
                                    }
                                }
                            } catch (c) {
                                r.e(c)
                            } finally {
                                r.f()
                            }
                            return t
                        }(t);
                    return [o, r]
                },
                y = function(e) {
                    return !!e.shouldBeRemoved
                },
                x = function() {
                    return function(e) {
                        (0, m.Vn)(e, "image", (function(e, n, t) {
                            var r, o = null === t || void 0 === t || null === (r = t.children) || void 0 === r ? void 0 : r[n + 1];
                            if (o && function(e) {
                                    return "text" === e.type
                                }(o)) {
                                var i = o.value.trim();
                                if (i) {
                                    var a = A(i),
                                        s = (0, d.Z)(a, 2),
                                        c = s[0],
                                        l = s[1],
                                        u = function(e) {
                                            var n = e.width,
                                                t = e.height,
                                                r = e.align;
                                            if (!n && !t && !r) return e;
                                            var o = Object.assign({}, e),
                                                i = e.style,
                                                a = [];
                                            i && "string" === typeof i && a.push(i);
                                            var s = n && parseInt(n, 10) || 0;
                                            s && (a.push("width:".concat(s, "px")), delete o.width);
                                            var c = t && parseInt(t, 10) || 0;
                                            return c && (a.push("height:".concat(c, "px")), delete o.height), "center" === r && (a.push("margin-left: auto"), a.push("margin-right: auto"), delete o.align), o.style = a.join(";"), o
                                        }(Object.assign({}, e, c)),
                                        p = u.style;
                                    "string" === typeof p && (e.style = p), l ? o.value = l : o.shouldBeRemoved = 1
                                }
                            }
                        })), (0, v.O)(e, {}, y)
                    }
                },
                C = function(e, n) {
                    var t = n.title,
                        r = n.url,
                        o = n.alt,
                        i = n.style,
                        a = {
                            src: f()(r)
                        };
                    return o && (a.alt = o), t && (a.title = t), i && (a.style = i), e(n, "img", a)
                },
                w = t(11754),
                j = function(e) {
                    var n = e.onClick;
                    return (0, w.jsx)("svg", {
                        className: "h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, w.jsx)("path", {
                            d: "m18 18-8.5-6 8.5-6zm-10-12v12h-2v-12z",
                            fill: "currentColor"
                        })
                    })
                },
                k = function(e) {
                    var n = e.onClick;
                    return (0, w.jsx)("svg", {
                        className: "h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, w.jsx)("path", {
                            d: "m6 18 8.5-6-8.5-6zm10-12v12h2v-12z",
                            fill: "currentColor"
                        })
                    })
                },
                _ = function(e) {
                    var n = e.onClick;
                    return (0, w.jsx)("svg", {
                        className: "mr-auto h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, w.jsx)("path", {
                            d: "m6 19h4v-14h-4zm8-14v14h4v-14z",
                            fill: "currentColor"
                        })
                    })
                },
                O = function(e) {
                    var n = e.onClick;
                    return (0, w.jsx)("svg", {
                        className: "mr-auto h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, w.jsx)("path", {
                            d: "m8 5v14l11-7z",
                            fill: "currentColor"
                        })
                    })
                },
                B = function(e) {
                    var n = e.isAutoPlaying,
                        t = e.setIsAutoPlaying,
                        r = e.toggleAutoPlay,
                        o = e.setNextIndex,
                        a = e.setPrevIndex,
                        s = e.currentIndex,
                        c = e.maxIndex,
                        l = (0, i.useCallback)((function() {
                            a(), t(!1)
                        }), [a, t]),
                        u = (0, i.useCallback)((function() {
                            o(), t(!1)
                        }), [o, t]),
                        d = n ? _ : O;
                    return (0, w.jsxs)("div", {
                        className: "flex items-center justify-between bg-black px-2.5 py-2 text-white dark:bg-white dark:text-black",
                        children: [(0, w.jsx)(d, {
                            onClick: r
                        }), (0, w.jsx)(j, {
                            onClick: l
                        }), (0, w.jsxs)("span", {
                            className: "mx-5 text-xs",
                            children: [s + 1, " / ", c + 1]
                        }), (0, w.jsx)(k, {
                            onClick: u
                        })]
                    })
                },
                N = (t(17519), function(e) {
                    var n = e.metas,
                        t = e.currentIndex,
                        r = e.toggleAutoPlay;
                    return (0, w.jsx)("div", {
                        className: "cursor-pointer overflow-hidden whitespace-nowrap",
                        onClick: r,
                        children: n.map((function(e, n) {
                            var r = e.url;
                            return (0, w.jsx)("img", {
                                className: "no-preview w-full",
                                hidden: n !== t,
                                src: r,
                                alt: ""
                            }, n)
                        }))
                    })
                });

            function P(e) {
                var n = e.metas,
                    t = (0, i.useState)(0),
                    r = t[0],
                    o = t[1],
                    a = (0, i.useState)(!1),
                    s = a[0],
                    c = a[1],
                    l = n.length - 1,
                    u = (0, i.useCallback)((function() {
                        o((function(e) {
                            var n = e - 1;
                            return n < 0 ? l : n
                        }))
                    }), [l]),
                    d = (0, i.useCallback)((function() {
                        o((function(e) {
                            var n = e + 1;
                            return n > l ? 0 : n
                        }))
                    }), [l]),
                    p = (0, i.useCallback)((function() {
                        c((function(e) {
                            return !e
                        }))
                    }), []);
                return (0, i.useEffect)((function() {
                    if (s) {
                        var e = setTimeout((function() {
                            o((function(e) {
                                var t = e + 1;
                                return t === n.length ? 0 : t
                            }))
                        }), n[r].duration);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [s, r, n]), (0, w.jsxs)("div", {
                    className: "select-none",
                    children: [(0, w.jsx)(N, {
                        metas: n,
                        currentIndex: r,
                        toggleAutoPlay: p
                    }), (0, w.jsx)(B, {
                        currentIndex: r,
                        maxIndex: l,
                        isAutoPlaying: s,
                        setNextIndex: d,
                        setPrevIndex: u,
                        setIsAutoPlaying: c,
                        toggleAutoPlay: p
                    })]
                })
            }

            function I(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return E(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function E(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var S = (0, i.memo)((function(e) {
                var n = e.value,
                    t = (0, i.useMemo)((function() {
                        return function(e) {
                            var n, t = [],
                                r = I(JSON.parse(e));
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var o = (0, d.Z)(n.value, 2),
                                        i = o[0],
                                        a = o[1],
                                        s = +i || 1e3;
                                    t.push({
                                        duration: s,
                                        url: a
                                    })
                                }
                            } catch (c) {
                                r.e(c)
                            } finally {
                                r.f()
                            }
                            return t
                        }(n)
                    }), [n]);
                return (0, w.jsx)(P, {
                    metas: t
                })
            }), (function(e, n) {
                return e.value === n.value
            }));

            function D(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return Z(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Z(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function Z(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var T = "lc_slides",
                F = function() {
                    return function(e) {
                        var n, t = D(e.children);
                        try {
                            for (t.s(); !(n = t.n()).done;) {
                                var r = n.value;
                                if ("paragraph" === r.type) {
                                    var o = r.children,
                                        i = o.length;
                                    if (!(i < 3 || i % 2 === 0)) {
                                        var a = o[0],
                                            s = o[i - 1];
                                        if ("text" === a.type && "<" === a.value && "text" === s.type && ">" === s.value) {
                                            for (var c = !0, l = 1; l < i - 1; l++) {
                                                var u = o[l];
                                                if (l % 2) {
                                                    if ("image" !== u.type) {
                                                        c = !1;
                                                        break
                                                    }
                                                } else if ("text" !== u.type || "," !== u.value) {
                                                    c = !1;
                                                    break
                                                }
                                            }
                                            if (c) {
                                                for (var d = [], p = 1; p < i - 1; p += 2) {
                                                    var f = o[p];
                                                    d.push([f.alt, f.url])
                                                }
                                                r.type = T, r.value = JSON.stringify(d), delete r.children
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (m) {
                            t.e(m)
                        } finally {
                            t.f()
                        }
                    }
                },
                J = function(e, n) {
                    return e(n, T, {
                        value: n.value
                    })
                },
                L = function(e) {
                    var n = e.url,
                        t = (0, i.useState)(!1),
                        r = t[0],
                        o = t[1],
                        a = (0, i.useCallback)((function() {
                            o(!0)
                        }), []);
                    return r ? (0, w.jsxs)("div", {
                        className: "flex h-[360px] w-full max-w-[640px] flex-col items-center justify-center overflow-hidden bg-gray-2 text-gray-6 dark:bg-dark-gray-2 dark:text-dark-gray-6",
                        children: ["\u65e0\u6548\u7684\u89c6\u9891\u5730\u5740", (0, w.jsx)("br", {}), n]
                    }) : (0, w.jsx)("div", {
                        className: "flex justify-center ",
                        children: (0, w.jsxs)("video", {
                            className: "max-h-[640px] w-[640px] max-w-full",
                            controls: !0,
                            children: [(0, w.jsx)("source", {
                                src: n,
                                type: "video/mp4",
                                onError: a
                            }), "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8be5\u89c6\u9891\u683c\u5f0f\u7684\u64ad\u653e"]
                        })
                    })
                },
                R = (0, i.memo)((function(e) {
                    var n = e.url;
                    return (0, w.jsx)(L, {
                        url: n
                    }, n)
                }), (function(e, n) {
                    return e.url === n.url
                })),
                M = "lc_normal_video",
                z = function() {
                    return function(e) {
                        (0, m.Vn)(e, "image", (function(e) {
                            if (t = e.url, /^.*\.mp4$/.test(t)) {
                                var n = e;
                                n.type = M, delete n.title, delete n.alt
                            }
                            var t
                        }))
                    }
                },
                q = function(e, n) {
                    return e(n, M, {
                        url: n.url
                    })
                },
                V = (t(77661), t(72793), t(90074)),
                H = t(11288);

            function W(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function G(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? W(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var U = [5e3, 15e3, 3e4],
                $ = function(e) {
                    var n = (0, i.useState)(0),
                        t = n[0],
                        r = n[1],
                        o = (0, V.LiE)(H.f6, {
                            uuid: e
                        }),
                        a = (0, i.useRef)(),
                        s = o.isFetching,
                        c = o.data,
                        l = o.error,
                        u = o.refetch,
                        d = !s && !(null !== c && void 0 !== c && c.videosVideoInfo) && t < 3;
                    return (0, i.useEffect)((function() {
                        d && (a.current = setTimeout((function() {
                            a.current = void 0, r(t + 1), u()
                        }), U[t]))
                    }), [d, u, t]), (0, i.useEffect)((function() {
                        return function() {
                            a.current && (clearTimeout(a.current), a.current = void 0)
                        }
                    }), []), G(G({}, o), {}, {
                        isLoading: s || d,
                        data: !d && c || void 0,
                        error: !d && l || void 0
                    })
                },
                K = function(e) {
                    var n = e.message;
                    return (0, w.jsx)("div", {
                        className: "flex h-[360px] w-full max-w-[640px] flex-col items-center justify-center overflow-hidden bg-gray-2 text-gray-6 dark:bg-dark-gray-2 dark:text-dark-gray-6",
                        children: n
                    })
                },
                Q = t(65828);
            var X, Y = t(51874),
                ee = t.n(Y),
                ne = function(e, n, t, r) {
                    (0, i.useEffect)((function() {
                        var o = e.current;
                        if (o) {
                            var i = document.createElement("div"),
                                a = (0, Q.Z)("aliPlayer");
                            i.setAttribute("id", a), o.appendChild(i);
                            var s = new(0, window.Aliplayer)({
                                id: a,
                                vid: r,
                                playauth: t,
                                encryptType: 1,
                                cover: n,
                                autoplay: !1,
                                preload: !0,
                                playsinline: !0,
                                keyShortCuts: !0
                            });
                            return function(e) {
                                    e.on("ready", (function() {
                                        var n = e._el;
                                        n.tabIndex = 1, n.onkeydown = function(n) {
                                            var t = n.code;
                                            "Tab" !== t && (n.preventDefault(), n.stopPropagation()), "Space" !== t ? "ArrowLeft" !== t ? "ArrowRight" === t && e.seek(e.getCurrentTime() + 3) : e.seek(e.getCurrentTime() - 3) : "playing" === e.getStatus() ? e.pause() : e.play()
                                        }
                                    }))
                                }(s), s.on("ready", (function() {
                                    var e;
                                    i.setAttribute("data-is-ready", "true"), null === (e = i.querySelector("video")) || void 0 === e || e.addEventListener("click", (function() {
                                        "playing" === s.getStatus() ? s.pause() : s.play()
                                    }))
                                })),
                                function() {
                                    s.dispose(), o.removeChild(i)
                                }
                        }
                    }), [e, n, t, r])
                },
                te = (0, i.memo)((function(e) {
                    var n = e.videoId,
                        t = e.playAuth,
                        r = e.coverUrl,
                        o = e.width,
                        a = e.height;
                    (0, s.y)(ee());
                    var c = !(!o || !a),
                        l = (0, i.useRef)(null),
                        u = (0, i.useMemo)((function() {
                            if (o) return {
                                maxWidth: o + "px"
                            }
                        }), [o]),
                        d = (0, i.useMemo)((function() {
                            if (o && a) return {
                                padding: "".concat(a / o * 50, "% 50%")
                            }
                        }), [o, a]);
                    return ne(l, r, t, n), (0, w.jsx)("div", {
                        className: ee().prismPlayerContainer,
                        style: u,
                        ref: l,
                        children: (0, w.jsx)("div", {
                            "data-has-size": "".concat(c),
                            style: d
                        })
                    })
                })),
                re = (t(58935), function(e) {
                    return new Promise((function(n, t) {
                        var r = document.createElement("link");
                        r.rel = "stylesheet", r.href = e, r.onload = function() {
                            n()
                        }, r.onerror = function(e) {
                            t(e)
                        }, document.head.appendChild(r)
                    }))
                }),
                oe = function() {
                    return X || (X = function() {
                        return Promise.all([(e = "https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js", new Promise((function(n, t) {
                            var r = document.createElement("script");
                            r.type = "text/javascript", r.src = e, r.onload = function() {
                                n()
                            }, r.onerror = function(e) {
                                t(e)
                            }, document.head.appendChild(r)
                        }))), re("https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css")]).then((function() {}));
                        var e
                    }()), X
                },
                ie = t(19129),
                ae = t(22980),
                se = t.n(ae),
                ce = (t(43969), function() {}),
                le = {
                    setVisible: ce
                },
                ue = t(39157),
                de = (t(86003), t(36615), t(94546), t(71492)),
                pe = t(18112),
                fe = t.n(pe),
                me = (t(2979), t(88077)),
                ve = t(75141),
                he = t.n(ve),
                ge = function(e) {
                    var n = e.className;
                    return (0, w.jsx)("svg", {
                        className: n,
                        width: "137",
                        height: "100",
                        viewBox: "0 0 137 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsxs)("g", {
                            opacity: "0.16",
                            children: [(0, w.jsx)("path", {
                                d: "M98.3757 102.353C102.01 98.8485 107.892 98.8576 111.514 102.373C115.137 105.889 115.127 111.58 111.493 115.084L95.3566 130.646C80.4693 145.003 56.193 145.211 41.0546 131.129C40.9671 131.048 34.2263 124.665 11.989 103.606C-2.80494 89.597 -4.27877 67.1802 9.64271 52.7847L35.5992 25.9433C49.416 11.6546 74.8854 10.0929 90.683 22.431L114.258 40.844C118.25 43.9622 118.874 49.6211 115.65 53.4835C112.427 57.3459 106.578 57.9492 102.586 54.831L79.0112 36.4182C70.7494 29.9656 56.2971 30.8517 49.1681 38.2243L23.2112 65.066C16.4339 72.0741 17.1762 83.3639 24.9865 90.76C41.3158 106.224 53.9006 118.141 53.9152 118.155C61.7855 125.476 74.5114 125.367 82.2389 117.914L98.3757 102.353Z",
                                fill: "white"
                            }), (0, w.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M59.1753 86.7802C54.0443 86.7802 49.8848 82.7561 49.8848 77.7921C49.8848 72.8281 54.0443 68.804 59.1753 68.804H127.693C132.824 68.804 136.983 72.8281 136.983 77.7921C136.983 82.7561 132.824 86.7802 127.693 86.7802H59.1753Z",
                                fill: "white"
                            }), (0, w.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M72.007 -11.7058C75.5125 -15.3308 81.3916 -15.5202 85.1385 -12.1289C88.8854 -8.73753 89.0812 -3.04971 85.5758 0.575255L23.2115 65.0664C16.434 72.0739 17.1762 83.3637 24.9861 90.7601L53.7868 118.035C57.4535 121.508 57.5162 127.198 53.927 130.746C50.3377 134.293 44.4557 134.354 40.789 130.881L11.9881 103.606C-2.80495 89.596 -4.27878 67.1792 9.64332 52.7847L72.007 -11.7058Z",
                                fill: "white"
                            })]
                        })
                    })
                },
                be = t(20052),
                Ae = (t(80504), function(e) {
                    var n = "MultiContextProvider",
                        t = Object.keys(e),
                        r = t.reduceRight((function(t, r) {
                            var o = (0, i.createContext)(e[r]);
                            return Object.defineProperty(o, "displayName", {
                                get: function() {
                                    return "".concat(n, "(").concat(r, ")")
                                }
                            }), t[r] = o, t
                        }), {}),
                        o = function(e) {
                            var n = e.value,
                                o = e.children;
                            return t.reduceRight((function(e, t) {
                                return (0, i.createElement)(r[t].Provider, {
                                    value: n[t]
                                }, e)
                            }), o)
                        };
                    Object.defineProperty(o, "displayName", {
                        get: function() {
                            return n
                        }
                    });
                    return {
                        Provider: o,
                        useSubContext: function(e) {
                            return (0, i.useContext)(r[e])
                        },
                        get displayName() {
                            return n
                        },
                        set displayName(e) {
                            n = e
                        }
                    }
                }({
                    setIsConsecutive: ce,
                    setSelection: ce,
                    setSelectedCoupon: ce,
                    close: ce,
                    user: null,
                    subscriptionPlanId: "",
                    isConsecutive: !0,
                    selection: 365,
                    skuInfo: null,
                    coupons: null,
                    gifts: [],
                    selectedCoupon: null,
                    sourceInfo: null
                })),
                ye = function(e) {
                    return function(e, n) {
                        return e.useSubContext(n)
                    }(Ae, e)
                },
                xe = function() {
                    var e = ye("close"),
                        n = ye("user"),
                        t = null === n || void 0 === n ? void 0 : n.nickName,
                        r = null === n || void 0 === n ? void 0 : n.isPremium,
                        o = (null === n || void 0 === n ? void 0 : n.avatar) || me.tU;
                    return (0, w.jsxs)("div", {
                        className: he().header,
                        children: [(0, w.jsx)(ge, {
                            className: he().logo
                        }), (0, w.jsxs)("div", {
                            className: he().user,
                            children: [(0, w.jsx)("div", {
                                className: he().avatar,
                                style: {
                                    backgroundImage: 'url("'.concat(o, '")')
                                }
                            }), (0, w.jsxs)("div", {
                                className: he().userInner,
                                children: [(0, w.jsx)("div", {
                                    className: he().nick,
                                    children: t
                                }), (0, w.jsxs)("div", {
                                    className: he().tag,
                                    children: [(0, w.jsx)("div", {
                                        className: "".concat(he().icon, " ").concat(r ? he().premium : he().free)
                                    }), (0, w.jsx)("span", {
                                        children: r ? "\u5df2\u5f00\u901a" : "\u672a\u5f00\u901a"
                                    })]
                                })]
                            })]
                        }), (0, w.jsx)(be.b, {
                            className: he().close,
                            onClick: e
                        })]
                    })
                },
                Ce = (t(11270), t(73384), t(4353)),
                we = t.n(Ce),
                je = t(32601),
                ke = "/premium-detail",
                _e = function() {
                    var e = ye("close"),
                        n = (0, i.useCallback)((function(n) {
                            (0, je.z)() || location.pathname.replace(/\/$/, "") !== ke || (e(), n.preventDefault())
                        }), [e]);
                    return (0, w.jsxs)("div", {
                        className: we().box,
                        children: [(0, w.jsx)("div", {
                            className: we().title,
                            children: "\u70ed\u95e8\u7279\u6743"
                        }), (0, w.jsxs)("div", {
                            className: we().more,
                            children: [(0, w.jsx)("a", {
                                className: we().link,
                                onClick: n,
                                href: ke,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "\u4e86\u89e3\u66f4\u591a"
                            }), (0, w.jsx)("div", {
                                className: we().line
                            }), (0, w.jsx)("a", {
                                className: we().link,
                                href: "https://support.leetcode.cn/hc/kb/section/1198435/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "\u5e38\u89c1\u95ee\u9898"
                            })]
                        }), (0, w.jsxs)("div", {
                            className: we().items,
                            children: [(0, w.jsxs)("div", {
                                className: we().item,
                                children: [(0, w.jsx)("div", {
                                    className: "".concat(we().icon, " ").concat(we().right1)
                                }), (0, w.jsx)("div", {
                                    children: "\u540d\u4f01\u9762\u8bd5\u9898\u5e93"
                                })]
                            }), (0, w.jsxs)("div", {
                                className: we().item,
                                children: [(0, w.jsx)("div", {
                                    className: "".concat(we().icon, " ").concat(we().right2)
                                }), (0, w.jsx)("div", {
                                    children: "\u4f01\u4e1a\u6a21\u62df\u9762\u8bd5"
                                })]
                            }), (0, w.jsxs)("div", {
                                className: we().item,
                                children: [(0, w.jsx)("div", {
                                    className: "".concat(we().icon, " ").concat(we().right3)
                                }), (0, w.jsx)("div", {
                                    children: "\u9898\u76ee\u9762\u8bd5\u70ed\u5ea6"
                                })]
                            }), (0, w.jsxs)("div", {
                                className: we().item,
                                children: [(0, w.jsx)("div", {
                                    className: "".concat(we().icon, " ").concat(we().right4)
                                }), (0, w.jsx)("div", {
                                    children: "\u6781\u901f\u5224\u9898\u901a\u9053"
                                })]
                            })]
                        })]
                    })
                },
                Oe = t(9121),
                Be = t.n(Oe),
                Ne = t(71919),
                Pe = t.n(Ne),
                Ie = t(18034),
                Ee = t.n(Ie),
                Se = (t(91023), t(7502), function(e) {
                    if (!e) return e;
                    for (var n = e.toString(), t = new RegExp(/^[-+]?((\d+)([.,](\d{3}))*([.](\d+))?|([.,](\d+))?)$/), r = ",", o = new RegExp(r); o.test(n);) n = n.replace(o, "");
                    if (!t.test(n)) return e;
                    n = (n = n.replace(/^(\d*)$/, "$1.")).replace(".", r);
                    for (var i = new RegExp("(\\d)(\\d{3}".concat(r, ")")); i.test(n);) n = n.replace(i, "$1,$2");
                    var a = n.lastIndexOf(r),
                        s = n.substring(0, a),
                        c = a === n.length - 1 ? "" : n.substring(a).replace(o, ".");
                    return n = s + c
                }),
                De = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return Se(Number((e / 100).toFixed(n))).toString()
                },
                Ze = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        t = De(e, n),
                        r = t.split("."),
                        o = (0, d.Z)(r, 2),
                        i = o[0],
                        a = o[1],
                        s = void 0 === a ? "" : a;
                    return Number(s) ? t : i
                },
                Te = function(e) {
                    var n = e.value,
                        t = e.isActive;
                    return (0, w.jsxs)("div", {
                        className: "".concat(Ee().price, " ").concat(t ? Ee().on : Ee().off),
                        children: [(0, w.jsx)("span", {
                            className: Ee().unit,
                            children: "\xa5"
                        }), (0, w.jsx)("span", {
                            className: Ee().value,
                            children: Ze(n)
                        })]
                    })
                },
                Fe = function() {
                    var e = ye("skuInfo"),
                        n = ye("selection"),
                        t = ye("setSelection"),
                        r = 365 === n,
                        o = e.sku365.price,
                        a = (0, i.useCallback)((function() {
                            t(365)
                        }), [t]);
                    return (0, w.jsx)("div", {
                        className: "".concat(Be().item, " ").concat(Be().sku365, " ").concat(r ? Be().active : ""),
                        children: (0, w.jsxs)("div", {
                            className: Be().content,
                            onClick: a,
                            children: [(0, w.jsx)("div", {
                                className: Pe().best,
                                children: "\u6700\u4f18\u60e0"
                            }), (0, w.jsx)("div", {
                                className: Be().days,
                                children: "365 \u5929"
                            }), (0, w.jsx)(Te, {
                                value: o,
                                isActive: r
                            }), (0, w.jsxs)("div", {
                                className: Be().average,
                                children: ["\u4ec5 \xa5", Ze(o / 365), "/\u5929"]
                            })]
                        })
                    })
                },
                Je = function() {
                    var e = ye("skuInfo"),
                        n = ye("selection"),
                        t = ye("setSelection"),
                        r = 90 === n,
                        o = e.sku90.price,
                        a = (0, i.useCallback)((function() {
                            t(90)
                        }), [t]);
                    return (0, w.jsx)("div", {
                        className: "".concat(Be().item, " ").concat(Be().sku90, " ").concat(r ? Be().active : ""),
                        children: (0, w.jsxs)("div", {
                            className: Be().content,
                            onClick: a,
                            children: [(0, w.jsx)("div", {
                                className: Be().days,
                                children: "90 \u5929"
                            }), (0, w.jsx)(Te, {
                                value: o,
                                isActive: r
                            }), (0, w.jsxs)("div", {
                                className: Be().average,
                                children: ["\u4ec5 \xa5", Ze(o / 90), "/\u5929"]
                            })]
                        })
                    })
                },
                Le = t(83161),
                Re = t.n(Le),
                Me = t(45508),
                ze = t.n(Me),
                qe = t(29082),
                Ve = t.n(qe),
                He = function(e) {
                    var n = e.value,
                        t = e.disabled,
                        r = e.onChange,
                        o = (0, i.useCallback)((function() {
                            r(!n)
                        }), [n, r]);
                    return (0, w.jsx)("button", {
                        className: "".concat(Ve().box, " ").concat(n ? Ve().on : "", " ").concat(t ? Ve().disabled : ""),
                        onClick: t ? void 0 : o,
                        children: (0, w.jsx)("div", {
                            className: Ve().inner
                        })
                    })
                },
                We = function() {
                    var e = ye("isConsecutive"),
                        n = ye("setIsConsecutive"),
                        t = function() {
                            var e = ye("subscriptionPlanId"),
                                n = ye("skuInfo");
                            return !!(n && e && n.subscription && n.subscription.planId === e)
                        }();
                    return (0, w.jsxs)("div", {
                        className: "".concat(ze().box, " ").concat(e ? ze().on : ze().off),
                        children: [(0, w.jsx)("span", {
                            className: ze().title,
                            children: "\u8fde\u7eed\u5305\u6708"
                        }), (0, w.jsx)(He, {
                            value: e,
                            disabled: t,
                            onChange: n
                        })]
                    })
                },
                Ge = function() {
                    var e = 30 === ye("selection"),
                        n = ye("skuInfo").subscription,
                        t = (0, d.Z)(n.details, 2),
                        r = t[0],
                        o = t[1];
                    return (0, w.jsxs)("div", {
                        className: Re().multi,
                        children: [(0, w.jsxs)("div", {
                            className: Re().child,
                            children: [(0, w.jsxs)("div", {
                                className: Be().days,
                                children: [r.cycleDesc, "\u6bcf\u6708"]
                            }), (0, w.jsx)(Te, {
                                value: r.price,
                                isActive: e
                            }), (0, w.jsxs)("div", {
                                className: Be().average,
                                children: ["\u4ec5 \xa5", Ze(r.price / 30), "/\u5929"]
                            })]
                        }), (0, w.jsx)("div", {
                            className: Re().line
                        }), (0, w.jsxs)("div", {
                            className: Re().child,
                            children: [(0, w.jsx)("div", {
                                className: Be().days,
                                children: o.cycleDesc
                            }), (0, w.jsx)(Te, {
                                value: o.price,
                                isActive: e
                            }), (0, w.jsxs)("div", {
                                className: Be().average,
                                children: ["\u4ec5 \xa5", Ze(o.price / 30), "/\u5929"]
                            })]
                        })]
                    })
                },
                Ue = function() {
                    var e = ye("selection"),
                        n = ye("skuInfo"),
                        t = 30 === e;
                    return (0, w.jsxs)(w.Fragment, {
                        children: [(0, w.jsx)("div", {
                            className: Be().days,
                            children: "30 \u5929"
                        }), (0, w.jsx)(Te, {
                            value: n.sku30.price,
                            isActive: t
                        }), (0, w.jsxs)("div", {
                            className: Be().average,
                            children: ["\u4ec5 \xa5", Ze(n.sku30.price / 30), "/\u5929"]
                        })]
                    })
                },
                $e = function() {
                    var e = ye("skuInfo").subscription,
                        n = ye("isConsecutive"),
                        t = ye("selection"),
                        r = ye("setSelection"),
                        o = 30 === t,
                        a = n && e ? Ge : Ue,
                        s = (0, i.useCallback)((function() {
                            r(30)
                        }), [r]);
                    return (0, w.jsxs)("div", {
                        className: "".concat(Be().item, " ").concat(Be().sku30, " ").concat(o ? Be().active : ""),
                        children: [(0, w.jsx)("div", {
                            className: Be().content,
                            onClick: s,
                            children: (0, w.jsx)(a, {})
                        }), !!e && (0, w.jsx)(We, {})]
                    })
                },
                Ke = function() {
                    return (0, w.jsxs)("div", {
                        className: Be().box,
                        children: [(0, w.jsx)(Fe, {}), (0, w.jsx)(Je, {}), (0, w.jsx)($e, {})]
                    })
                },
                Qe = t(79688),
                Xe = t.n(Qe),
                Ye = t(15852),
                en = t.n(Ye),
                nn = t(14816),
                tn = t.n(nn),
                rn = function() {
                    var e = ye("coupons"),
                        n = ye("skuInfo"),
                        t = ye("selection"),
                        r = ye("isConsecutive");
                    return (0, i.useMemo)((function() {
                        if (r && 30 === t) return [];
                        if (!e) return [];
                        var o = 365 === t ? n.sku365 : 90 === t ? n.sku90 : n.sku30;
                        return (e.get(o.productId) || []).filter((function(e) {
                            return e.minExpense <= o.originalPrice
                        }))
                    }), [e, r, t, n])
                },
                on = function(e) {
                    var n = e.coupon,
                        t = e.onClick,
                        r = (0, i.useCallback)((function() {
                            t(n)
                        }), [n, t]);
                    return (0, w.jsxs)("div", {
                        className: tn().item,
                        onClick: r,
                        children: [n.name, "\uff0c", "\u6ee1 ".concat(Ze(n.minExpense), " \u51cf ").concat(Ze(n.value), " \u5143")]
                    })
                },
                an = function(e) {
                    var n = e.onClose,
                        t = (0, i.useRef)(null);
                    ! function(e, n) {
                        (0, i.useEffect)((function() {
                            var t = e.current;
                            if (t) {
                                var r = function(e) {
                                    var r = e.target;
                                    (function(e, n) {
                                        for (var t = n; t;) {
                                            if (t === e) return !0;
                                            t = t.parentNode
                                        }
                                        return !1
                                    })(t, r) || n()
                                };
                                return document.addEventListener("click", r),
                                    function() {
                                        document.removeEventListener("click", r)
                                    }
                            }
                        }), [e, n])
                    }(t, n);
                    var r = rn(),
                        o = ye("selectedCoupon"),
                        a = ye("setSelectedCoupon"),
                        s = (0, i.useCallback)((function(e) {
                            n(), a(e)
                        }), [n, a]),
                        c = (0, i.useCallback)((function() {
                            n(), a(null)
                        }), [n, a]);
                    return (0, w.jsxs)("div", {
                        className: tn().box,
                        ref: t,
                        children: [r.map((function(e, n) {
                            return (0, w.jsx)(on, {
                                coupon: e,
                                onClick: s,
                                isActive: e === o
                            }, n)
                        })), (0, w.jsx)("div", {
                            className: tn().item,
                            onClick: c,
                            children: "\u6682\u4e0d\u4f7f\u7528\u4f18\u60e0\u5238"
                        })]
                    })
                },
                sn = function(e) {
                    var n = e.className;
                    return (0, w.jsxs)("svg", {
                        className: n,
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, w.jsxs)("g", {
                            clipPath: "url(#clip0_345_13705)",
                            children: [(0, w.jsx)("path", {
                                d: "M0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12H0Z",
                                fill: "#FFA116"
                            }), (0, w.jsx)("path", {
                                opacity: "0.5",
                                d: "M19.71 11.9699C19.38 11.9999 19.05 11.8499 18.87 11.5799C18.57 11.1899 18.66 10.6199 19.05 10.3499L19.08 10.3199C19.35 10.1399 19.44 9.7799 19.35 9.4799L19.05 8.6999C18.69 7.7699 17.64 7.2899 16.71 7.6499H16.68L10.59 9.9899C9.66001 10.3499 9.18001 11.3999 9.54001 12.3299L9.84001 13.1099C9.96001 13.4099 10.26 13.5899 10.59 13.5599C10.92 13.5299 11.25 13.6799 11.43 13.9499C11.73 14.3399 11.64 14.9099 11.25 15.1799L11.22 15.2099C10.95 15.3899 10.86 15.7499 10.95 16.0499L11.25 16.8299C11.61 17.7599 12.66 18.2399 13.59 17.8799L19.68 15.5399C20.61 15.1799 21.09 14.1299 20.73 13.1999L20.43 12.4199C20.31 12.1199 20.01 11.9099 19.71 11.9699Z",
                                fill: "white"
                            }), (0, w.jsx)("path", {
                                d: "M16.95 13.74C16.53 13.62 16.23 13.32 16.11 12.9C15.93 12.3 16.29 11.67 16.89 11.49H16.95C17.34 11.4 17.64 11.04 17.64 10.62V9.56998C17.64 8.27998 16.59 7.22998 15.3 7.22998H6.87C5.58 7.22998 4.53 8.27998 4.53 9.53998V10.59C4.53 11.01 4.83 11.37 5.22 11.46C5.64 11.58 5.94 11.88 6.06 12.3C6.24 12.9 5.88 13.53 5.28 13.71H5.22C4.83 13.8 4.53 14.16 4.53 14.58V15.63C4.53 16.92 5.58 17.97 6.84 17.97H15.24C16.53 17.97 17.58 16.92 17.58 15.66V14.61C17.64 14.19 17.34 13.83 16.95 13.74Z",
                                fill: "white"
                            }), (0, w.jsx)("path", {
                                d: "M8.49001 11.0699C8.49001 11.5499 8.88001 11.9699 9.39001 11.9699C9.90001 11.9699 10.29 11.5799 10.29 11.0699C10.29 10.5599 9.90001 10.1699 9.39001 10.1699C8.88001 10.1699 8.49001 10.5899 8.49001 11.0699ZM11.97 14.0699C11.97 14.5499 12.36 14.9699 12.87 14.9699C13.35 14.9699 13.77 14.5799 13.77 14.0699C13.77 13.5899 13.38 13.1699 12.87 13.1699C12.36 13.1699 11.97 13.5899 11.97 14.0699ZM9.06001 15.1499C8.91001 15.1499 8.73001 15.0899 8.61001 14.9699C8.37001 14.7299 8.37001 14.3399 8.64001 14.0999L12.66 10.2599C12.9 10.0199 13.32 10.0199 13.56 10.2899C13.8 10.5299 13.8 10.9199 13.53 11.1599L9.48001 14.9699C9.39001 15.0899 9.21001 15.1499 9.06001 15.1499Z",
                                fill: "#FFA116"
                            })]
                        }), (0, w.jsx)("defs", {
                            children: (0, w.jsx)("clipPath", {
                                id: "clip0_345_13705",
                                children: (0, w.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                },
                cn = function(e) {
                    var n = e.className;
                    return (0, w.jsx)("svg", {
                        className: n,
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.87521 4.61584L7.0041 8.73258L11.1248 4.61584C11.3526 4.38803 11.7219 4.38803 11.9498 4.61584C12.1776 4.84364 12.1776 5.21299 11.9498 5.44079L7.41658 9.97001C7.18877 10.1978 6.81942 10.1978 6.59162 9.97001L2.05026 5.44079C1.82245 5.21299 1.82245 4.84364 2.05026 4.61584C2.27806 4.38803 2.64741 4.38803 2.87521 4.61584Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                ln = function(e) {
                    var n = e.className;
                    return (0, w.jsx)("svg", {
                        className: n,
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.1248 9.38685L6.9959 5.27011L2.87521 9.38685C2.6474 9.61465 2.27805 9.61465 2.05025 9.38685C1.82244 9.15904 1.82244 8.7897 2.05025 8.56189L6.58342 4.03267C6.81123 3.80486 7.18058 3.80486 7.40838 4.03267L11.9497 8.56189C12.1775 8.7897 12.1775 9.15904 11.9497 9.38685C11.7219 9.61465 11.3526 9.61465 11.1248 9.38685Z",
                            fill: "#8C8C8C"
                        })
                    })
                };
            t(6755);

            function un(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return dn(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return dn(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function dn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var pn = function() {
                    var e = (0, i.useState)(!1),
                        n = e[0],
                        t = e[1],
                        r = n ? ln : cn,
                        o = function() {
                            var e = ye("coupons");
                            return (0, i.useMemo)((function() {
                                if (!e) return 0;
                                var n, t = new Set,
                                    r = un(e);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var o, i = un((0, d.Z)(n.value, 2)[1]);
                                        try {
                                            for (i.s(); !(o = i.n()).done;) {
                                                var a = o.value;
                                                t.add(a.code)
                                            }
                                        } catch (s) {
                                            i.e(s)
                                        } finally {
                                            i.f()
                                        }
                                    }
                                } catch (s) {
                                    r.e(s)
                                } finally {
                                    r.f()
                                }
                                return t.size
                            }), [e])
                        }(),
                        a = rn().length,
                        s = ye("selectedCoupon"),
                        c = (0, i.useCallback)((function() {
                            t(!0)
                        }), []),
                        l = (0, i.useCallback)((function() {
                            t(!1)
                        }), []);
                    return (0, w.jsxs)("div", {
                        className: en().box,
                        children: [(0, w.jsx)(sn, {
                            className: en().icon
                        }), (0, w.jsx)("span", {
                            className: en().title,
                            children: "\u4f18\u60e0\u5238"
                        }), (0, w.jsxs)("button", {
                            className: en().count,
                            onClick: n ? void 0 : c,
                            children: [s ? (0, w.jsxs)("span", {
                                children: [s.name, "\uff0c", "\u6ee1 ".concat(Ze(s.minExpense), " \u51cf ").concat(Ze(s.value), " \u5143")]
                            }) : (0, w.jsxs)("span", {
                                children: ["\u5171 ", o, " \u5f20\uff0c", a, " \u5f20\u53ef\u7528"]
                            }), (0, w.jsx)(r, {
                                className: en().icon
                            })]
                        }), n && (0, w.jsx)(an, {
                            onClose: l
                        })]
                    })
                },
                fn = t(32674),
                mn = t.n(fn),
                vn = function() {
                    return (0, w.jsx)("div", {
                        className: mn().line
                    })
                },
                hn = t(67136),
                gn = t.n(hn),
                bn = t(69707),
                An = t.n(bn),
                yn = t(8740);

            function xn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function Cn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? xn(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var wn, jn, kn = t(79547),
                _n = function() {
                    var e = (0, i.useState)(0),
                        n = e[0],
                        t = e[1],
                        r = function() {
                            var e = ye("sourceInfo"),
                                n = ye("selection"),
                                t = ye("selectedCoupon"),
                                r = ye("isConsecutive"),
                                o = ye("user"),
                                a = ye("skuInfo"),
                                s = e || {},
                                c = s.sourceId,
                                l = s.sourceType;
                            return (0, i.useMemo)((function() {
                                var e = o.token;
                                if (r && 30 === n) return {
                                    planId: a.subscription.planId,
                                    userToken: e,
                                    sourceId: c,
                                    sourceType: l
                                };
                                var i = 365 === n ? a.sku365 : 90 === n ? a.sku90 : a.sku30;
                                return {
                                    userToken: e,
                                    productId: i.productId,
                                    discountId: i.discountId,
                                    couponCode: null === t || void 0 === t ? void 0 : t.code,
                                    event: null === t || void 0 === t ? void 0 : t.event,
                                    sourceId: c,
                                    sourceType: l
                                }
                            }), [r, n, t, a, c, l, o])
                        }();
                    return (0, i.useEffect)((function() {
                        var e = function() {
                            var e = (0, ie.Z)(se().mark((function e() {
                                var n;
                                return se().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, kn.I)();
                                        case 2:
                                            n = e.sent, t(n + 6e4);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e();
                        var n = setInterval(e, 6e4);
                        return function() {
                            clearInterval(n)
                        }
                    }), [r]), (0, i.useMemo)((function() {
                        return n ? function(e, n) {
                            var t = (0, yn.stringify)(Cn(Cn({}, e), {}, {
                                expires: n
                            }));
                            return "https://".concat("leetcode.cn", "/premium-pay?") + t
                        }(r, n) : ""
                    }), [r, n])
                },
                On = function() {
                    var e = _n();
                    return (0, w.jsx)(An(), {
                        size: 120,
                        value: e,
                        level: "H",
                        renderAs: "svg"
                    })
                },
                Bn = (t(66348), t(64745)),
                Nn = t.n(Bn),
                Pn = function(e) {
                    var n = e.className;
                    return (0, w.jsx)("svg", {
                        className: n,
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            d: "M15.8571 11.4762L11.4457 9.99277C11.4457 9.99277 11.7847 9.48529 12.1466 8.49034C12.5086 7.49531 12.5604 6.94893 12.5604 6.94893L9.70476 6.92539V5.95003L13.1631 5.92565V5.23612H9.70407V3.66657H8.01028V5.23619H4.78357V5.92572L8.01028 5.9028V6.94893H5.42208V7.49524H10.7494C10.7494 7.49524 10.6907 7.93861 10.4865 8.49027C10.2823 9.04187 10.072 9.52495 10.072 9.52495C10.072 9.52495 7.57063 8.64949 6.25254 8.64949C4.93444 8.64949 3.33137 9.179 3.17594 10.7158C3.02126 12.2518 3.92268 13.0839 5.19265 13.3901C6.46277 13.698 7.63534 13.3871 8.65624 12.8873C9.6773 12.3882 10.6791 11.2537 10.6791 11.2537L15.8205 13.7505C15.6108 14.9686 14.5537 15.8583 13.3176 15.8571H4.68226C3.28104 15.8585 2.14412 14.7236 2.14282 13.3225V4.68234C2.14152 3.28101 3.27649 2.14407 4.67768 2.14282H13.3177C14.7189 2.14154 15.8559 3.27644 15.8571 4.67764V11.4762H15.8571ZM9.42774 10.6167C9.42774 10.6167 7.82283 12.6428 5.93182 12.6428C4.04001 12.6428 3.64284 11.6801 3.64284 10.9878C3.64284 10.2962 4.03611 9.54383 5.64574 9.43504C7.25447 9.32641 9.42855 10.6167 9.42855 10.6167H9.42773H9.42774Z",
                            fill: "#02A9F1"
                        })
                    })
                },
                In = function(e) {
                    var n = e.className;
                    return (0, w.jsx)("svg", {
                        className: n,
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            d: "M6.95824 10.6099C6.88931 10.6447 6.81874 10.6613 6.73306 10.6613C6.54146 10.6613 6.38517 10.5585 6.29776 10.4043L6.26249 10.3363L4.88954 7.38475C4.87273 7.34994 4.87273 7.31681 4.87273 7.28201C4.87273 7.14437 4.97694 7.04154 5.11642 7.04154C5.16854 7.04154 5.22062 7.05813 5.27274 7.09293L6.88931 8.22549C7.01032 8.29342 7.14982 8.34485 7.30605 8.34485C7.39345 8.34485 7.4792 8.32824 7.5666 8.29342L15.1473 4.96549C13.7911 3.3869 11.5493 2.35718 9.01011 2.35718C4.87273 2.35718 1.5 5.11972 1.5 8.53227C1.5 10.3844 2.5083 12.0658 4.08966 13.1983C4.2106 13.2845 4.298 13.4388 4.298 13.593C4.298 13.6444 4.28118 13.6958 4.26274 13.7472C4.14178 14.2098 3.93172 14.966 3.93172 14.9992C3.91488 15.0505 3.89634 15.1185 3.89634 15.1881C3.89634 15.3258 4.00056 15.4286 4.14006 15.4286C4.19214 15.4286 4.24426 15.412 4.27954 15.3772L5.91294 14.4337C6.03396 14.3657 6.17344 14.3143 6.31294 14.3143C6.38178 14.3143 6.4692 14.3309 6.53812 14.3491C7.3027 14.5713 8.13794 14.6924 8.98992 14.6924C13.1273 14.6924 16.5 11.9298 16.5 8.51729C16.5 7.48756 16.1875 6.51087 15.648 5.652L7.01032 10.5751L6.95824 10.6099V10.6099Z",
                            fill: "#09BB07"
                        })
                    })
                },
                En = function() {
                    var e = ye("selection"),
                        n = ye("isConsecutive") && 30 === e;
                    return (0, w.jsx)("div", {
                        className: Nn().box,
                        children: n ? (0, w.jsxs)(w.Fragment, {
                            children: [(0, w.jsx)(Pn, {
                                className: Nn().icon
                            }), (0, w.jsxs)("span", {
                                className: Nn().text,
                                children: ["\u4f7f\u7528", (0, w.jsx)("span", {
                                    className: Nn().bold,
                                    children: "\u652f\u4ed8\u5b9d"
                                }), "\u626b\u7801\u652f\u4ed8"]
                            })]
                        }) : (0, w.jsxs)(w.Fragment, {
                            children: [(0, w.jsx)(In, {
                                className: Nn().icon
                            }), (0, w.jsx)(Pn, {
                                className: Nn().icon
                            }), (0, w.jsxs)("span", {
                                className: Nn().text,
                                children: ["\u4f7f\u7528", (0, w.jsx)("span", {
                                    className: Nn().bold,
                                    children: "\u5fae\u4fe1/\u652f\u4ed8\u5b9d"
                                }), "\u626b\u7801\u652f\u4ed8"]
                            })]
                        })
                    })
                },
                Sn = t(46167),
                Dn = t.n(Sn),
                Zn = function() {
                    var e = ye("selection"),
                        n = ye("isConsecutive"),
                        t = 30 === e && n;
                    return (0, w.jsxs)("div", {
                        className: Dn().box,
                        children: ["\u652f\u4ed8\u5373\u89c6\u4e3a\u60a8\u540c\u610f", (0, w.jsx)("a", {
                            className: Dn().link,
                            href: "https://leetcode.cn/agreement/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "\u300a\u529b\u6263\u670d\u52a1\u534f\u8bae\u300b"
                        }), t && (0, w.jsx)("a", {
                            className: Dn().link,
                            href: "https://leetcode.cn/subscription-agreement/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "\u300a\u8fde\u7eed\u8ba2\u9605\u670d\u52a1\u534f\u8bae \u300b"
                        })]
                    })
                },
                Tn = t(3887),
                Fn = t.n(Tn),
                Jn = t(93885),
                Ln = t.n(Jn),
                Rn = t(64477),
                Mn = t.n(Rn),
                zn = function() {
                    var e = ye("selection"),
                        n = ye("isConsecutive"),
                        t = ye("skuInfo");
                    return (0, i.useMemo)((function() {
                        return 365 === e ? t.sku365.price : 90 === e ? t.sku90.price : n ? t.subscription.details[0].price : t.sku30.price
                    }), [n, e, t])
                },
                qn = function() {
                    var e = ye("selectedCoupon"),
                        n = zn();
                    return (0, i.useMemo)((function() {
                        return e ? n - e.value : n
                    }), [n, e])
                },
                Vn = {
                    d: 1,
                    m: 30,
                    y: 365
                },
                Hn = function(e) {
                    try {
                        var n = JSON.parse(e || "{}").premiumRange;
                        return n ? function(e) {
                            var n = /^(\d+)([dmy])$/.exec(e);
                            if (n) {
                                var t = (0, d.Z)(n, 3),
                                    r = t[1],
                                    o = t[2];
                                return Number(r) * Vn[o]
                            }
                            return 30
                        }(n) : 0
                    } catch (t) {
                        return 0
                    }
                },
                Wn = function(e) {
                    var n = e.onClose,
                        t = ye("selection"),
                        r = function() {
                            var e = ye("user"),
                                n = e.premiumExpiredAt,
                                t = e.isPremium,
                                r = ye("gifts"),
                                o = ye("selection"),
                                a = (0, i.useMemo)((function() {
                                    return r.reduce((function(e, n) {
                                        return e + Hn(n.meta)
                                    }), 0)
                                }), [r]);
                            return (0, i.useMemo)((function() {
                                return (t && n || Date.now()) + o + a
                            }), [t, n, o, a])
                        }(),
                        o = qn();
                    return (0, w.jsxs)("div", {
                        className: Mn().box,
                        onMouseLeave: n,
                        children: [(0, w.jsx)("div", {
                            className: Mn().cursor
                        }), (0, w.jsxs)("div", {
                            className: Mn().content,
                            children: [(0, w.jsx)("div", {
                                className: Mn().arrow,
                                children: (0, w.jsx)("span", {
                                    className: Mn().arrowContent
                                })
                            }), (0, w.jsxs)("div", {
                                className: Mn().inner,
                                children: [(0, w.jsx)("div", {
                                    className: Mn().title,
                                    children: "\u4ed8\u6b3e\u660e\u7ec6"
                                }), (0, w.jsxs)("div", {
                                    className: Mn().main,
                                    children: [(0, w.jsxs)("div", {
                                        children: [(0, w.jsxs)("span", {
                                            className: Mn().days,
                                            children: [t, "\u5929"]
                                        }), (0, w.jsxs)("span", {
                                            className: Mn().price,
                                            children: ["\xa5", Ze(o)]
                                        })]
                                    }), (0, w.jsxs)("div", {
                                        className: Mn().endTime,
                                        children: ["\u5230\u671f\u65f6\u95f4 ", Ln()(r).format("YYYY/MM/DD")]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Gn = function(e) {
                    var n = e.className;
                    return (0, w.jsx)("svg", {
                        className: n,
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.34571 4.31813L8.78494 6.91917C8.87938 7.01988 8.87431 7.17809 8.77359 7.27254C8.72725 7.31599 8.66611 7.34018 8.60258 7.34018H3.39697C3.2589 7.34018 3.14697 7.22825 3.14697 7.09018C3.14697 7.02732 3.17065 6.96677 3.2133 6.92058L5.61364 4.32097C5.80097 4.11808 6.1173 4.10547 6.32019 4.29281C6.32899 4.30094 6.33751 4.30939 6.34571 4.31813Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                Un = function(e) {
                    var n = e.className;
                    return (0, w.jsx)("svg", {
                        className: n,
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.34571 7.68196C6.33751 7.69071 6.32899 7.69915 6.32019 7.70729C6.1173 7.89462 5.80097 7.88201 5.61364 7.67913L3.2133 5.07951C3.17065 5.03333 3.14697 4.97277 3.14697 4.90991C3.14697 4.77184 3.2589 4.65991 3.39697 4.65991H8.60258C8.66611 4.65991 8.72725 4.6841 8.77359 4.72755C8.87431 4.822 8.87938 4.98021 8.78494 5.08093L6.34571 7.68196Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                $n = function() {
                    var e = (0, i.useState)(!1),
                        n = e[0],
                        t = e[1],
                        r = n ? Gn : Un,
                        o = zn(),
                        a = qn(),
                        s = (0, i.useCallback)((function() {
                            t(!0)
                        }), []),
                        c = (0, i.useCallback)((function() {
                            t(!1)
                        }), []);
                    return (0, w.jsxs)("div", {
                        className: Fn().box,
                        children: [(0, w.jsx)("span", {
                            children: "\u5e94\u4ed8\u91d1\u989d\uff1a"
                        }), (0, w.jsx)("span", {
                            className: Fn().unit,
                            children: "\xa5"
                        }), (0, w.jsx)("span", {
                            className: Fn().money,
                            children: Ze(a)
                        }), a < o && (0, w.jsxs)("span", {
                            className: Fn().originalPrice,
                            children: ["\xa5", Ze(o)]
                        }), (0, w.jsxs)("button", {
                            className: Fn().detail,
                            onMouseEnter: n ? void 0 : s,
                            children: [(0, w.jsx)("span", {
                                children: "\u660e\u7ec6"
                            }), (0, w.jsx)(r, {
                                className: Fn().detailIcon
                            })]
                        }), n && (0, w.jsx)("span", {
                            className: Fn().locator,
                            children: (0, w.jsx)(Wn, {
                                onClose: c
                            })
                        })]
                    })
                },
                Kn = function() {
                    return (0, w.jsxs)("div", {
                        className: gn().box,
                        children: [(0, w.jsx)("div", {
                            className: gn().left,
                            children: (0, w.jsx)(On, {})
                        }), (0, w.jsxs)("div", {
                            className: gn().right,
                            children: [(0, w.jsx)($n, {}), (0, w.jsx)(En, {}), (0, w.jsx)(Zn, {})]
                        })]
                    })
                },
                Qn = t(29247),
                Xn = t.n(Qn),
                Yn = function() {
                    return (0, w.jsx)("svg", {
                        className: Xn().icon,
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.99999 9.16675C10.4602 9.16675 10.8333 9.53984 10.8333 10.0001V13.3334C10.8333 13.7937 10.4602 14.1667 9.99999 14.1667C9.53975 14.1667 9.16666 13.7937 9.16666 13.3334V10.0001C9.16666 9.53984 9.53975 9.16675 9.99999 9.16675ZM9.99999 6.66675C10.4602 6.66675 10.8333 7.03984 10.8333 7.50008C10.8333 7.96032 10.4602 8.33341 9.99999 8.33341C9.53975 8.33341 9.16666 7.96032 9.16666 7.50008C9.16666 7.03984 9.53975 6.66675 9.99999 6.66675ZM9.99999 18.3334C5.39762 18.3334 1.66666 14.6025 1.66666 10.0001C1.66666 5.39771 5.39762 1.66675 9.99999 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 9.99999 18.3334ZM9.99999 16.6667C13.6819 16.6667 16.6667 13.682 16.6667 10.0001C16.6667 6.31818 13.6819 3.33341 9.99999 3.33341C6.31809 3.33341 3.33332 6.31818 3.33332 10.0001C3.33332 13.682 6.31809 16.6667 9.99999 16.6667Z"
                        })
                    })
                },
                et = function() {
                    return (0, w.jsxs)("div", {
                        className: Xn().box,
                        children: [(0, w.jsx)(Yn, {}), (0, w.jsx)("span", {
                            children: "\u652f\u4ed8\u6210\u529f\u540e\uff0c\u8bf7\u7acb\u5373\u300c\u5237\u65b0\u300d\u9875\u9762"
                        })]
                    })
                },
                nt = t(72197),
                tt = t.n(nt),
                rt = function() {
                    var e = ye("gifts");
                    return e.length ? (0, w.jsxs)("div", {
                        className: tt().box,
                        children: [(0, w.jsx)("div", {
                            className: tt().title,
                            children: "\u6d3b\u52a8\u8d60\u54c1"
                        }), (0, w.jsx)("div", {
                            className: tt().list,
                            children: e.map((function(e, n) {
                                var t, r, o, i, a = (null === (t = e.images) || void 0 === t || null === (r = t.light) || void 0 === r ? void 0 : r[0]) || (null === (o = e.images) || void 0 === o || null === (i = o.dark) || void 0 === i ? void 0 : i[0]) || "";
                                return (0, w.jsx)("div", {
                                    className: tt().item,
                                    style: {
                                        backgroundImage: 'url("'.concat(a, '")')
                                    },
                                    children: (0, w.jsx)("div", {
                                        className: tt().name,
                                        children: e.name
                                    })
                                }, n)
                            }))
                        })]
                    }) : null
                },
                ot = function() {
                    return (0, w.jsxs)("div", {
                        className: Xe().box,
                        children: [(0, w.jsx)(rt, {}), (0, w.jsxs)("div", {
                            className: Xe().right,
                            children: [(0, w.jsx)(pn, {}), (0, w.jsx)(vn, {}), (0, w.jsx)(Kn, {}), (0, w.jsx)(et, {})]
                        })]
                    })
                },
                it = t(33745),
                at = t.n(it),
                st = function() {
                    return (0, w.jsx)("svg", {
                        className: at().icon,
                        width: "25",
                        height: "27",
                        viewBox: "0 0 25 27",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.jsx)("path", {
                            d: "M9.46526 0.861929C8.55632 0.327248 7.43339 0.309062 6.50761 0.814031L-8.72318 9.12174C-9.41819 9.50083 -9.41801 10.4988 -8.72288 10.8777L-3.66666 13.6333V24.7033C-3.66666 25.293 -3.40858 25.8512 -2.9355 26.2033C-1.18706 27.5046 3.43128 30.5825 8 30.5825C12.5687 30.5825 17.1871 27.5046 18.9355 26.2033C19.4086 25.8512 19.6667 25.293 19.6667 24.7033V13.6333L21.9997 12V19.8333C21.9997 20.6618 22.6713 21.3333 23.4997 21.3333C24.3281 21.3333 24.9997 20.6618 24.9997 19.8333V10.5719C24.9997 10.2176 24.8121 9.88968 24.5067 9.71001L9.46526 0.861929ZM19.3667 10L8.95771 15.6776C8.36075 16.0032 7.63926 16.0032 7.0423 15.6776L-3.36666 10L7.0423 4.32238C7.63926 3.99677 8.36075 3.99677 8.95771 4.32239L19.3667 10ZM16.3333 23.1468C16.3333 23.4633 16.1855 23.7597 15.924 23.9381C14.7138 24.7642 11.0471 27.0819 8 27.0819C4.95293 27.0819 1.28617 24.7642 0.0760117 23.9381C-0.185452 23.7597 -0.333329 23.4633 -0.333329 23.1468V15.45L6.56234 19.215C7.45835 19.7043 8.54165 19.7043 9.43767 19.215L16.3333 15.45V23.1468Z"
                        })
                    })
                },
                ct = ["\u6559\u80b2\u4f18\u60e0\uff1a\xa5365/365 \u5929 \u52a0\u8d60\u793c\u54c1", "\u65b0\u7528\u6237\u6559\u80b2\u4f18\u60e0\uff1a\xa549/30 \u5929"],
                lt = function() {
                    var e = (0, i.useState)(0),
                        n = e[0],
                        t = e[1];
                    return (0, i.useEffect)((function() {
                        var e = setInterval((function() {
                            t((function(e) {
                                return (e + 1) % ct.length
                            }))
                        }), 4e3);
                        return function() {
                            clearInterval(e)
                        }
                    }), []), (0, w.jsxs)("div", {
                        className: at().box,
                        children: [(0, w.jsx)(st, {}), (0, w.jsxs)("div", {
                            className: at().content,
                            children: [(0, w.jsx)("div", {
                                className: at().title,
                                children: "\u5b66\u751f\u4e13\u4eab"
                            }), (0, w.jsx)("div", {
                                className: at().desc,
                                children: ct[n]
                            }), (0, w.jsx)("a", {
                                className: at().link,
                                href: "https://leetcode.cn/premium/edu-auth/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "\u7acb\u5373\u8ba4\u8bc1"
                            })]
                        })]
                    })
                },
                ut = function() {
                    return (0, i.useEffect)((function() {
                        return document.body.style.overflow = "hidden",
                            function() {
                                document.body.style.overflow = ""
                            }
                    }), []), (0, ue.createPortal)((0, w.jsxs)(w.Fragment, {
                        children: [(0, w.jsx)("div", {
                            className: fe().mask
                        }), (0, w.jsxs)("div", {
                            className: fe().box,
                            children: [(0, w.jsx)(xe, {}), (0, w.jsx)(Ke, {}), (0, w.jsx)(lt, {}), (0, w.jsx)(ot, {}), (0, w.jsx)(_e, {})]
                        })]
                    }), document.body)
                },
                dt = t(61193),
                pt = t(4383),
                ft = t(46953),
                mt = function() {
                    return ft.Z.get("__appToken__") || ""
                },
                vt = function() {
                    return ft.Z.get("csrftoken") || ""
                },
                ht = function() {
                    if (!wn) {
                        var e = mt(),
                            n = vt();
                        wn = new pt.GraphQLClient("/graphql/noj-go/", {
                            credentials: "same-origin",
                            headers: {
                                "X-CSRFToken": n,
                                Authorization: e ? "Bearer ".concat(e) : ""
                            }
                        })
                    }
                    return wn
                };

            function gt(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return bt(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return bt(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function bt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var At, yt, xt, Ct = {
                    d: 1,
                    m: 30,
                    y: 365
                },
                wt = function(e) {
                    var n, t, r = null === (n = e.product) || void 0 === n || null === (t = n.discounts) || void 0 === t ? void 0 : t[0],
                        o = e.product.price;
                    return {
                        productId: e.product.id,
                        price: (null === r || void 0 === r ? void 0 : r.price) || o,
                        originalPrice: o,
                        event: null === r || void 0 === r ? void 0 : r.event,
                        discountId: null === r || void 0 === r ? void 0 : r.id
                    }
                },
                jt = function(e) {
                    if (!e) throw Error("wrong data");
                    var n, t, r, o, i, a = gt(e);
                    try {
                        var s = function() {
                            var e = i.value,
                                a = function(e) {
                                    try {
                                        return e()
                                    } catch (n) {
                                        return
                                    }
                                }((function() {
                                    return function(e) {
                                        var n = /^(\d+)([dmy])$/.exec(e);
                                        if (!n) return 0;
                                        var t = (0, d.Z)(n, 3),
                                            r = t[1],
                                            o = t[2];
                                        return Number(r) * Ct[o]
                                    }(JSON.parse(e.product.spu.meta).premiumRange)
                                }));
                            if (!a) return "continue";
                            if (30 === a) {
                                if (!n) {
                                    n = wt(e);
                                    var s = e.subscriptionPlan;
                                    if (s) {
                                        var c = s.details;
                                        if (2 !== c.length) throw Error("wrong subscriptionPlan.details");
                                        o = {
                                            planId: s.id,
                                            details: c.map((function(e) {
                                                return {
                                                    cycleDesc: e.cycleDesc,
                                                    price: e.price
                                                }
                                            }))
                                        }
                                    }
                                }
                            } else 90 === a ? t || (t = wt(e)) : 365 === a && (r || (r = wt(e)))
                        };
                        for (a.s(); !(i = a.n()).done;) s()
                    } catch (c) {
                        a.e(c)
                    } finally {
                        a.f()
                    }
                    if (!n || !t || !r) throw Error("wrong data");
                    return {
                        sku30: n,
                        sku90: t,
                        sku365: r,
                        subscription: o
                    }
                },
                kt = function() {
                    var e = (0, ie.Z)(se().mark((function e(n) {
                        var t, r;
                        return se().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.userToken, e.next = 3, ht().request((0, pt.gql)(jn || (jn = (0, dt.Z)(["\n      query premiumProducts($slug: String!, $clusterKey: String, $token: String) {\n        premiumProduct(slug: $slug, clusterKey: $clusterKey, token: $token) {\n          product {\n            id\n            meta\n            discounts {\n              event\n              id\n              kind\n              price\n            }\n            name\n            price\n            spu {\n              id\n              virtual\n              meta\n            }\n          }\n          subscriptionPlan {\n            id\n            name\n            planType\n            signedHint\n            unsignHint\n            details {\n              cycleDesc\n              endCycle\n              fromCycle\n              price\n              startCycle\n            }\n          }\n        }\n      }\n    "]))), {
                                        slug: "premium",
                                        clusterKey: "official_premium_shop",
                                        token: t
                                    });
                                case 3:
                                    return r = e.sent, e.abrupt("return", jt(r.premiumProduct));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                _t = function() {
                    if (!At) {
                        var e = mt(),
                            n = vt();
                        At = new pt.GraphQLClient("/graphql/", {
                            credentials: "same-origin",
                            headers: {
                                "X-CSRFToken": n,
                                Authorization: e ? "Bearer ".concat(e) : ""
                            }
                        })
                    }
                    return At
                },
                Ot = function() {
                    var e = (0, ie.Z)(se().mark((function e(n) {
                        var t, r, o;
                        return se().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.userToken, e.next = 3, _t().request((0, pt.gql)(yt || (yt = (0, dt.Z)(["\n      query mySubscription($userToken: String) {\n        subscriptionMySignedContract(userToken: $userToken) {\n          plan {\n            id\n          }\n        }\n      }\n    "]))), {
                                        userToken: r
                                    });
                                case 3:
                                    return o = e.sent, e.abrupt("return", (null === (t = o.subscriptionMySignedContract[0]) || void 0 === t ? void 0 : t.plan.id) || null);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();

            function Bt(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return Nt(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Nt(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function Nt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var Pt, It, Et, St = function() {
                    var e = (0, ie.Z)(se().mark((function e(n) {
                        var t, r, o, i, a, s, c;
                        return se().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.productIds, r = n.userToken, e.next = 3, _t().request((0, pt.gql)(xt || (xt = (0, dt.Z)(["\n      query couponsByProducts($productIds: [ID]!, $userToken: String) {\n        userCouponsByProducts(productIds: $productIds, userToken: $userToken) {\n          productId\n          userCoupons {\n            ...userCoupon\n          }\n        }\n      }\n      ", "\n    "])), "\n    fragment userCoupon on UserCouponNode {\n  id\n  code\n  startAt\n  expiredAt\n  coupon {\n    id\n    name\n    event\n    minExpense\n    value\n    description\n  }\n}\n    "), {
                                        productIds: t,
                                        userToken: r
                                    });
                                case 3:
                                    o = e.sent, i = new Map, a = Bt(o.userCouponsByProducts), e.prev = 6, c = function() {
                                        var e = s.value,
                                            n = e.productId,
                                            t = e.userCoupons;
                                        if (!t) return "continue";
                                        i.set(n, t.map((function(e) {
                                            return {
                                                id: e.coupon.id,
                                                productId: n,
                                                code: e.code,
                                                startAt: e.startAt,
                                                expiredAt: e.expiredAt,
                                                name: e.coupon.name,
                                                event: e.coupon.event,
                                                minExpense: e.coupon.minExpense,
                                                value: e.coupon.value,
                                                description: e.coupon.description
                                            }
                                        })))
                                    }, a.s();
                                case 9:
                                    if ((s = a.n()).done) {
                                        e.next = 15;
                                        break
                                    }
                                    if ("continue" !== c()) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("continue", 13);
                                case 13:
                                    e.next = 9;
                                    break;
                                case 15:
                                    e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(6), a.e(e.t0);
                                case 20:
                                    return e.prev = 20, a.f(), e.finish(20);
                                case 23:
                                    return e.abrupt("return", i);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 17, 20, 23]
                        ])
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Dt = function() {
                    var e = (0, ie.Z)(se().mark((function e() {
                        var n, t, r, o, i, a, s, c, l, u, d, p, f;
                        return se().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, _t().request((0, pt.gql)(Pt || (Pt = (0, dt.Z)(["\n      query globalData {\n        userStatus {\n          isSignedIn\n          isPremium\n          realName\n          avatar\n          premiumExpiredAt\n        }\n        myTokens {\n          paymentUserToken\n        }\n      }\n    "]))));
                                case 3:
                                    s = e.sent, e.next = 13;
                                    break;
                                case 6:
                                    if (e.prev = 6, e.t0 = e.catch(0), !(e.t0 instanceof pt.ClientError)) {
                                        e.next = 12;
                                        break
                                    }
                                    s = e.t0.response, e.next = 13;
                                    break;
                                case 12:
                                    throw e.t0;
                                case 13:
                                    return c = !(null === (n = s.userStatus) || void 0 === n || !n.isSignedIn), l = !(null === (t = s.userStatus) || void 0 === t || !t.isPremium), u = (null === (r = s.userStatus) || void 0 === r ? void 0 : r.realName) || "", d = (null === (o = s.userStatus) || void 0 === o ? void 0 : o.avatar) || "", p = (null === (i = s.myTokens) || void 0 === i ? void 0 : i.paymentUserToken) || "", f = (null === (a = s.userStatus) || void 0 === a ? void 0 : a.premiumExpiredAt) || 0, e.abrupt("return", {
                                        isSignedIn: c,
                                        isPremium: l,
                                        nickName: u,
                                        avatar: d,
                                        token: p,
                                        premiumExpiredAt: f
                                    });
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Zt = function() {
                    var e = (0, ie.Z)(se().mark((function e(n) {
                        var t, r, o;
                        return se().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.productId, r = n.event, e.next = 3, ht().request((0, pt.gql)(It || (It = (0, dt.Z)(["\n      query giftsByEvent($productId: String!, $event: String!) {\n        giftByEvent(productId: $productId, event: $event) {\n          images {\n            dark\n            light\n          }\n          meta\n          name\n        }\n      }\n    "]))), {
                                        productId: t,
                                        event: r
                                    });
                                case 3:
                                    return o = e.sent, e.abrupt("return", o.giftByEvent || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Tt = t(59787),
                Ft = function() {
                    (window.top || window).location.replace(Tt.Hb.signIn())
                };

            function Jt(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var Lt, Rt = function(e) {
                    var n = e.onReady,
                        t = e.initVisible,
                        o = e.defaultSourceInfo,
                        a = (0, i.useState)(null),
                        s = a[0],
                        c = a[1],
                        l = (0, i.useState)(o),
                        u = l[0],
                        d = l[1],
                        p = (0, i.useState)(null),
                        f = p[0],
                        m = p[1],
                        v = (0, i.useState)(null),
                        h = v[0],
                        g = v[1],
                        b = (0, i.useState)(""),
                        A = b[0],
                        y = b[1],
                        x = (0, i.useState)(!1),
                        C = x[0],
                        j = x[1],
                        k = (0, i.useState)(365),
                        _ = k[0],
                        O = k[1],
                        B = (0, i.useState)(null),
                        N = B[0],
                        P = B[1],
                        I = (0, i.useState)(!!t),
                        E = I[0],
                        S = I[1],
                        D = (0, i.useState)([]),
                        Z = D[0],
                        T = D[1];
                    (0, i.useEffect)((function() {
                        Et = d
                    }), []), (0, i.useEffect)((function() {
                        (0, ie.Z)(se().mark((function e() {
                            var n;
                            return se().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Dt();
                                    case 2:
                                        n = e.sent, P(n);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), []), (0, i.useEffect)((function() {
                        var e = null === N || void 0 === N ? void 0 : N.token;
                        e && (0, ie.Z)(se().mark((function n() {
                            var t;
                            return se().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Ot({
                                            userToken: e
                                        });
                                    case 2:
                                        (t = n.sent) && y(t);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }), [N]), (0, i.useEffect)((function() {
                        s && s.subscription && A && s.subscription.planId === A && j(!1)
                    }), [A, s]), (0, i.useEffect)((function() {
                        var e = null === N || void 0 === N ? void 0 : N.token;
                        e && (0, ie.Z)(se().mark((function n() {
                            var t;
                            return se().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, kt({
                                            userToken: e
                                        });
                                    case 2:
                                        t = n.sent, c(t), t.subscription && j(!0);
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }), [N]), (0, i.useEffect)((function() {
                        if (s) {
                            var e = null === N || void 0 === N ? void 0 : N.token;
                            e && (0, ie.Z)(se().mark((function n() {
                                var t, r;
                                return se().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, t = [s.sku30.productId, s.sku90.productId, s.sku365.productId], n.next = 4, St({
                                                productIds: t,
                                                userToken: e
                                            });
                                        case 4:
                                            r = n.sent, m(r), n.next = 11;
                                            break;
                                        case 8:
                                            n.prev = 8, n.t0 = n.catch(0), m(new Map);
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 8]
                                ])
                            })))()
                        }
                    }), [s, N, _]);
                    var F = (0, i.useMemo)((function() {
                        if (s && (30 !== _ || !C)) return 365 === _ ? s.sku365 : 90 === _ ? s.sku90 : s.sku30
                    }), [C, _, s]);
                    (0, i.useEffect)((function() {
                        var e = function() {
                            if (!f || !F) return null;
                            var e = f.get(F.productId);
                            if (!e) return null;
                            var n = F.originalPrice;
                            return e.find((function(e) {
                                return e.minExpense <= n
                            })) || null
                        }();
                        g(e)
                    }), [f, F]), (0, i.useEffect)((function() {
                        if (h && F) {
                            var e = h.event;
                            e ? (T([]), (0, ie.Z)(se().mark((function n() {
                                var t;
                                return se().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, Zt({
                                                productId: F.productId,
                                                event: e
                                            });
                                        case 3:
                                            t = n.sent, T(t), n.next = 9;
                                            break;
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0);
                                        case 9:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 7]
                                ])
                            })))()) : T([])
                        } else T([])
                    }), [F, h]), (0, i.useEffect)((function() {
                        N && !N.isSignedIn && Ft()
                    }), [N]), (0, i.useEffect)((function() {
                        le.setVisible = S, null === n || void 0 === n || n()
                    }), [n]);
                    var J = (0, i.useCallback)((function() {
                        var e = window.gio;
                        e && e("page.set", function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {};
                                n % 2 ? Jt(Object(t), !0).forEach((function(n) {
                                    (0, r.Z)(e, n, t[n])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Jt(Object(t)).forEach((function(n) {
                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                }))
                            }
                            return e
                        }({}, (0, de.zo)(location.search)))
                    }), []);
                    if ((0, i.useEffect)((function() {
                            if ((0, je.z)()) {
                                if (!E) return;
                                J()
                            }
                        }), [E, J]), (0, i.useEffect)((function() {
                            (0, je.z)() || J()
                        }), [J]), !E) return null;
                    if (!s || !N || !f || !N.isSignedIn) return null;
                    var L = {
                        skuInfo: s,
                        user: N,
                        coupons: f,
                        gifts: Z,
                        subscriptionPlanId: A,
                        isConsecutive: C,
                        setIsConsecutive: j,
                        selection: _,
                        setSelection: O,
                        selectedCoupon: h,
                        setSelectedCoupon: g,
                        sourceInfo: u,
                        close: function() {
                            var e, n;
                            (0, je.z)() ? null === (e = (n = window.top).LC_HIDE_PREMIUM_BOX) || void 0 === e || e.call(n): S(!1)
                        }
                    };
                    return (0, w.jsx)(Ae.Provider, {
                        value: L,
                        children: (0, w.jsx)(ut, {})
                    })
                },
                Mt = function(e) {
                    return Lt ? null === Et || void 0 === Et || Et(e) : Lt = new Promise((function(n) {
                        var t = document.createElement("div");
                        document.body.appendChild(t), (0, ue.render)((0, w.jsx)(Rt, {
                            onReady: n,
                            defaultSourceInfo: e
                        }), t)
                    })), Lt
                },
                zt = function() {
                    var e = (0, ie.Z)(se().mark((function e(n) {
                        return se().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Mt(n);
                                case 2:
                                    le.setVisible(!0);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                qt = t(57229),
                Vt = t(57027),
                Ht = function(e) {
                    var n = e.coverUrl;
                    return (0, w.jsxs)("div", {
                        className: "relative inline-block overflow-hidden rounded-sm",
                        children: [(0, w.jsx)("img", {
                            src: n || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E",
                            alt: "video cover",
                            className: "w-full max-w-[640px] blur-xxs"
                        }), (0, w.jsxs)("div", {
                            className: "absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-dark-gray-8 bg-opacity-80 text-sm text-gray-1 dark:bg-gray-8 dark:text-dark-gray-1",
                            children: ["\u5f53\u524d\u89c6\u9891\u4e3a\u529b\u6263 Plus \u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u5347\u7ea7\u529b\u6263 Plus \u4f1a\u5458\u5373\u53ef\u89e3\u9501", (0, w.jsx)("button", {
                                onClick: function() {
                                    qt.x.payPremiumVideoSolutionPremiumButtonClick(), Vt.Z.report({
                                        event_key: "premium_pay_web_video_solution_premium_button_click",
                                        type: "click"
                                    }), zt({
                                        sourceType: "video_solution_premium_button"
                                    })
                                },
                                className: "mt-5 cursor-pointer rounded-sm bg-brand-orange px-1 py-2 text-xs text-dark-gray-1 no-underline dark:text-gray-1",
                                children: "\u5347\u7ea7 Plus \u4f1a\u5458"
                            })]
                        })]
                    })
                },
                Wt = (0, i.memo)((function(e) {
                    var n = e.uuid,
                        t = (0, i.useState)(!0),
                        r = t[0],
                        o = t[1];
                    (0, i.useEffect)((function() {
                        oe().then((function() {
                            o(!1)
                        }))
                    }), []);
                    var a = $(n),
                        s = a.isFetching,
                        c = a.data;
                    if (r || s) return (0, w.jsx)(K, {
                        message: "\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u4e2d..."
                    });
                    var l = null === c || void 0 === c ? void 0 : c.videosVideoInfo;
                    if (!l) return (0, w.jsx)(K, {
                        message: "\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d..."
                    });
                    var u = l.videoInfo;
                    if (!u) return (0, w.jsx)(K, {
                        message: "\u89c6\u9891\u4fe1\u606f\u52a0\u8f7d\u5931\u8d25"
                    });
                    var d = u.coverUrl;
                    if (!l.canSee && l.articleChargeType !== V.MbN.Free) return (0, w.jsx)(Ht, {
                        coverUrl: d
                    });
                    switch (l.status) {
                        case V.hpD.Approved:
                            break;
                        case V.hpD.Pending:
                            return (0, w.jsx)(K, {
                                message: "\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d..."
                            });
                        case V.hpD.Rejected:
                            return (0, w.jsx)(K, {
                                message: "\u89c6\u9891\u5ba1\u6838\u4e0d\u901a\u8fc7"
                            });
                        case V.hpD.Transcoding:
                            return (0, w.jsx)(K, {
                                message: "\u89c6\u9891\u6b63\u5728\u8f6c\u7801\u4e2d..."
                            });
                        case V.hpD.TranscodeFailed:
                            return (0, w.jsx)(K, {
                                message: "\u89c6\u9891\u8f6c\u7801\u5931\u8d25"
                            });
                        default:
                            return (0, w.jsx)(K, {
                                message: "\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u5931\u8d25"
                            })
                    }
                    var p = u.videoId,
                        f = l.playAuth;
                    if (!p || !f) return (0, w.jsx)(K, {
                        message: "\u89c6\u9891\u4fe1\u606f\u52a0\u8f7d\u5931\u8d25"
                    });
                    var m = l.videoSize,
                        v = m && m.width || 0,
                        h = m && m.height || 0;
                    return (0, w.jsx)(te, {
                        videoId: p,
                        playAuth: f,
                        coverUrl: d,
                        width: v,
                        height: h
                    }, [d, f, p].join("$$"))
                }), (function(e, n) {
                    return e.uuid === n.uuid
                })),
                Gt = "lc_ali_player_video",
                Ut = function() {
                    return function(e) {
                        (0, m.Vn)(e, "image", (function(e) {
                            var n = e.url;
                            if (function(e) {
                                    return new RegExp("^".concat("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}", "$")).test(e)
                                }(n)) {
                                var t = e;
                                t.type = Gt, t.uuid = n, delete t.title, delete t.alt, delete t.url
                            }
                        }))
                    }
                },
                $t = function(e, n) {
                    return e(n, Gt, {
                        uuid: n.uuid
                    })
                },
                Kt = (t(76361), t(87621), t(51506), t(52104)),
                Qt = t(33319),
                Xt = (t(3125), [{
                    regex: /begin\{align\}/g,
                    replacer: "begin{aligned}"
                }, {
                    regex: /end\{align\}/g,
                    replacer: "end{aligned}"
                }, {
                    regex: /\&le\;|\&leq\;/g,
                    replacer: "\u2264"
                }, {
                    regex: /\&ge\;|\&geq\;/g,
                    replacer: "\u2265"
                }, {
                    regex: /\&lt\;/g,
                    replacer: "<"
                }, {
                    regex: /\&gt\;/g,
                    replacer: ">"
                }, {
                    regex: /\&amp\;|\\\&|\&/g,
                    replacer: "\\&",
                    skipIf: function(e) {
                        var n = e.match(/\\begin\{[\s\S]+?\\end\{/g);
                        return !!n && n.some((function(e) {
                            return e.includes("&")
                        }))
                    }
                }, {
                    regex: /\s+\$\s+|^\$$/g,
                    replacer: "\\$"
                }, {
                    regex: /\\\#|\#/g,
                    replacer: "\\#"
                }]),
                Yt = function(e) {
                    return Xt.reduce((function(n, t) {
                        var r = t.regex,
                            o = t.replacer,
                            i = t.skipIf;
                        return i && i(e) ? n : n.replace(r, o)
                    }), e)
                },
                er = function() {
                    var e = function e(n, t) {
                        n.forEach((function(n) {
                            "element" === n.type && e(n.children, t), "text" === n.type && (n.value = t(n.value))
                        }))
                    };
                    return function(n) {
                        (0, m.Vn)(n, ["math", "inlineMath"], (function(n) {
                            var t, r = null === n || void 0 === n || null === (t = n.data) || void 0 === t ? void 0 : t.hChildren;
                            r && e(r, Yt)
                        }))
                    }
                },
                nr = function(e) {
                    var n = {};
                    return e.replace(/```[\s\S]+?```/g, (function(e) {
                        var t = "__CODE__BLOCK__".concat(Object.keys(n).length, "__");
                        return n[t] = e, t
                    })).replace(/__CODE__BLOCK__\d+__/g, (function(e) {
                        return n[e]
                    }))
                },
                tr = function(e) {
                    e.preprocessors.push(nr), e.remarkPlugins.push(Kt.Z), e.remarkPlugins.push(er), e.rehypePlugins.push(Qt.Z)
                },
                rr = t(16482),
                or = (t(38890), t(18620)),
                ir = t(37856),
                ar = t(57261),
                sr = t.n(ar),
                cr = (t(8419), t(45061)),
                lr = t(65766);

            function ur(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function dr(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? ur(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ur(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var pr, fr = i.forwardRef((function(e, n) {
                    return (0, w.jsx)("svg", dr(dr({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {}, {
                        children: (0, w.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6 3a1 1 0 00-1 1v16a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1H6zm8 0a1 1 0 00-1 1v16a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1h-4z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                mr = t(55156),
                vr = t(40007),
                hr = (t(21682), t(15084), t(6387)),
                gr = function(e) {
                    return fetch(e).then((function(e) {
                        return e.blob()
                    })).then((function(e) {
                        return window.URL.createObjectURL(e)
                    }))
                },
                br = function(e) {
                    var n = e.data,
                        t = e.children,
                        r = (0, i.useState)(!1),
                        o = r[0],
                        a = r[1],
                        s = (0, i.useState)(null),
                        c = s[0],
                        l = s[1];
                    return (0, i.useEffect)((function() {
                        if (!o && !c) {
                            a(!0);
                            var e = n.timeline.map((function(e) {
                                return e.image
                            })).map(gr);
                            Promise.all(e).then((function(e) {
                                l(e), a(!1)
                            })).catch((function(e) {
                                hr.y.error("Error - failed to load solution diaporama", e)
                            }))
                        }
                    }), [n, o]), o || !c ? null : (0, w.jsx)(w.Fragment, {
                        children: t({
                            imageBlobUrls: c
                        })
                    })
                },
                Ar = function(e) {
                    var n = e.data,
                        t = e.width,
                        r = e.height,
                        o = e.imageBlobUrls,
                        a = i.useState(0),
                        s = (0, d.Z)(a, 2),
                        l = s[0],
                        u = s[1],
                        p = i.useState(!1),
                        f = (0, d.Z)(p, 2),
                        m = f[0],
                        v = f[1],
                        h = i.useState(!1),
                        g = (0, d.Z)(h, 2),
                        b = g[0],
                        A = g[1],
                        y = i.useRef(),
                        x = function() {
                            return n.timeline[l].duration
                        },
                        C = function(e) {
                            u(function(e) {
                                var t = n.timeline;
                                return (e %= t.length) < 0 && (e = t.length + e), e
                            }(e(l)))
                        },
                        j = function() {
                            v(!0), A(!0), y.current && clearTimeout(y.current), y.current = window.setTimeout((function() {
                                return C((function(e) {
                                    return e + 1
                                }))
                            }), x())
                        },
                        k = function() {
                            m ? (clearTimeout(y.current), y.current = void 0, v(!1)) : j()
                        };
                    (0, i.useEffect)((function() {
                        y.current && clearTimeout(y.current), m && (y.current = window.setTimeout((function() {
                            C((function(e) {
                                return e + 1
                            }))
                        }), x()))
                    }), [m, l]);
                    var _ = (0, c.yI)("w-4 cursor-pointer", vr.Cj.labelGrey6, vr.Cj.labelGrey7Hover);
                    return (0, w.jsxs)("div", {
                        className: "relative mx-auto mb-6 flex flex-col overflow-hidden rounded-lg border-[1px] border-label-1",
                        style: {
                            maxWidth: t
                        },
                        children: [(0, w.jsx)("div", {
                            onClick: k,
                            className: "rounded-lg",
                            style: {
                                maxHeight: r
                            },
                            children: (0, w.jsx)("img", {
                                alt: "Current",
                                className: "object-fit-contain !mb-0 max-h-full max-w-full",
                                src: o[l]
                            })
                        }), !b && (0, w.jsx)("div", {
                            onClick: k,
                            className: "absolute top-[50%] left-[50%] flex h-12 w-12 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-black/30",
                            children: (0, w.jsx)("div", {
                                className: "flex h-4 w-4 cursor-pointer items-center justify-center text-[35px]",
                                children: (0, w.jsx)(cr.A, {
                                    className: "h-full w-full text-white"
                                })
                            })
                        }), (0, w.jsxs)("div", {
                            className: "relative flex h-8 select-none items-center justify-around bg-black",
                            children: [(0, w.jsxs)("div", {
                                className: "flex items-center space-x-7",
                                children: [(0, w.jsx)(lr.e, {
                                    onClick: function() {
                                        return C((function(e) {
                                            return e - 1
                                        }))
                                    },
                                    className: _
                                }), m ? (0, w.jsx)(fr, {
                                    onClick: k,
                                    className: _
                                }) : (0, w.jsx)(cr.A, {
                                    onClick: k,
                                    className: _
                                }), (0, w.jsx)(mr.V, {
                                    onClick: function() {
                                        return C((function(e) {
                                            return e + 1
                                        }))
                                    },
                                    className: _
                                })]
                            }), (0, w.jsx)("div", {
                                className: "absolute right-0 mr-5 text-xs font-medium text-white",
                                children: "".concat(l + 1, " / ").concat(n.timeline.length)
                            })]
                        })]
                    })
                },
                yr = function(e) {
                    var n = e.link,
                        t = e.width,
                        r = e.height,
                        o = i.useState(),
                        a = (0, d.Z)(o, 2),
                        s = a[0],
                        c = a[1];
                    return (0, i.useEffect)((function() {
                        var e = function() {
                            var e = (0, ie.Z)(se().mark((function e() {
                                var t, r;
                                return se().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, fetch(n);
                                        case 2:
                                            return t = e.sent, e.prev = 3, e.next = 6, t.json();
                                        case 6:
                                            r = e.sent, c(r), e.next = 12;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(3);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 10]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [n]), s ? (0, w.jsx)(br, {
                        data: s,
                        children: function(e) {
                            var n = e.imageBlobUrls;
                            return (0, w.jsx)(Ar, {
                                data: s,
                                width: t,
                                height: r,
                                imageBlobUrls: n
                            })
                        }
                    }) : null
                },
                xr = "diaporama",
                Cr = function(e) {
                    var n = e.split("!?!");
                    return e = n.map((function(e, n) {
                        if (n % 2 === 0) return "".concat(e);
                        var t, r, o, i = e,
                            a = function(e, n, t) {
                                var r, o = e.split(n);
                                if (t) {
                                    var i = [o.slice(0, -t).join(n)],
                                        a = o.slice(-t);
                                    r = i.concat(a)
                                } else r = o;
                                return r
                            }(i, ":", 1),
                            s = (0, d.Z)(a, 2),
                            c = s[0],
                            l = s[1];
                        if (/\d+,\d+/.test(l)) {
                            o = c;
                            var u = l.split(",").map((function(e) {
                                    return parseInt(e, 10)
                                })),
                                p = (0, d.Z)(u, 2);
                            t = p[0], r = p[1]
                        } else o = i, t = 640, r = Math.round(.75 * t);
                        return "<".concat(xr, ' link="').concat(o, '" width="').concat(t, '" height="').concat(r, '"></').concat(xr, ">")
                    })).join("")
                },
                wr = function(e, n) {
                    return e(n, xr, n.value)
                },
                jr = (t(32504), t(34897)),
                kr = t(66455),
                _r = t(81710),
                Or = t(44487),
                Br = function(e) {
                    var n = e.description,
                        t = e.onChange,
                        r = e.index,
                        o = e.selected,
                        i = e.useCheckbox;
                    return (0, w.jsxs)("div", {
                        onClick: t,
                        "data-idx": r,
                        className: "flex cursor-pointer items-center",
                        children: [(0, w.jsx)(Or.I, {
                            type: i ? "checkbox" : "radio",
                            checked: o,
                            className: "cursor-pointer"
                        }), (0, w.jsx)("label", {
                            className: (0, c.yI)("ml-6 cursor-pointer", vr.Cj.label2),
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        })]
                    })
                },
                Nr = function(e) {
                    var n = e.isCorrect,
                        t = e.explanation;
                    return (0, w.jsxs)("div", {
                        children: [(0, w.jsx)(jr.b, {
                            color: n ? "green" : "red",
                            children: n ? "Correct." : "Wrong Answer."
                        }), (0, w.jsx)("div", {
                            className: (0, c.yI)("mt-4", vr.Cj.label2),
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })]
                    })
                },
                Pr = function(e) {
                    var n = e.data,
                        t = n.description,
                        r = n.choices,
                        o = n.checkbox,
                        a = n.answer,
                        s = n.explanation,
                        l = (0, i.useState)(Array(r.length).fill(!1)),
                        u = l[0],
                        d = l[1],
                        p = (0, i.useState)(null),
                        f = p[0],
                        m = p[1],
                        v = (0, i.useCallback)((function(e) {
                            var n = e.currentTarget.dataset.idx;
                            if (n) {
                                var t, r = Number(n);
                                o ? (t = u.slice())[r] = !t[r] : t = u.map((function(e, n) {
                                    return n === r
                                })), d(t)
                            }
                        }), [u, d, o]),
                        h = (0, i.useCallback)((function() {
                            d(Array(r.length).fill(!1)), m(null)
                        }), [d, m]),
                        g = (0, i.useCallback)((function() {
                            o && Array.isArray(a) ? m(u.every((function(e, n) {
                                return !(!e || -1 === a.indexOf(n)) || !e && -1 === a.indexOf(n)
                            }))) : m(u.indexOf(!0) === a)
                        }), [m, r, u, a, o]),
                        b = (0, i.useMemo)((function() {
                            return u.some((function(e) {
                                return e
                            }))
                        }), [u]);
                    return (0, w.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, w.jsxs)("div", {
                            className: "flex",
                            children: [(0, w.jsx)("div", {
                                className: (0, c.yI)("mr-4 flex h-[20px] items-center whitespace-nowrap rounded px-2 py-0.5", vr.Cj.bgBlue0, vr.Cj.labelBlueStandard),
                                children: "Multiple Choice Question"
                            }), (0, w.jsx)("div", {
                                className: vr.Cj.label2,
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            })]
                        }), (0, w.jsx)("div", {
                            className: "ml-8 flex flex-col space-y-4",
                            children: r.map((function(e, n) {
                                return (0, w.jsx)(Br, {
                                    description: e.description,
                                    index: n,
                                    onChange: v,
                                    selected: u[n],
                                    useCheckbox: o
                                }, n)
                            }))
                        }), (0, w.jsxs)("div", {
                            className: "my-0 flex-col space-y-4",
                            children: [(0, w.jsxs)("div", {
                                className: "flex justify-end space-x-4",
                                children: [(0, w.jsxs)(kr.z, {
                                    className: "rounded-lg",
                                    onClick: h,
                                    children: [(0, w.jsx)(_r.t, {
                                        className: "mr-1.5 h-4 w-4"
                                    }), "Redo"]
                                }), (0, w.jsx)(kr.z, {
                                    className: "rounded-lg",
                                    onClick: g,
                                    disabled: !b,
                                    variant: "primary",
                                    children: "Submit"
                                })]
                            }), (0, w.jsx)("div", {
                                children: null === f ? null : (0, w.jsx)(Nr, {
                                    isCorrect: f,
                                    explanation: s
                                })
                            })]
                        })]
                    })
                },
                Ir = function(e) {
                    var n = e.data,
                        t = (0, i.useState)(null),
                        r = t[0],
                        o = t[1];
                    return (0, i.useEffect)((function() {
                        var e = function() {
                            var e = (0, ie.Z)(se().mark((function e() {
                                var t, r;
                                return se().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = JSON.parse(n), e.next = 12;
                                            break;
                                        case 4:
                                            return e.prev = 4, e.t0 = e.catch(0), e.next = 8, fetch(n);
                                        case 8:
                                            return r = e.sent, e.next = 11, r.json();
                                        case 11:
                                            t = e.sent;
                                        case 12:
                                            o(t);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 4]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [n]), r ? (0, w.jsx)(Pr, {
                        data: r
                    }) : null
                },
                Er = "lc_mcqs",
                Sr = /^\!mcq\!(.+)\!mcq\!$/,
                Dr = function() {
                    return function(e) {
                        (0, m.Vn)(e, "paragraph", (function(e) {
                            var n = e.children[0];
                            if (n && "text" === n.type) {
                                var t = String(n.value);
                                if (t) {
                                    var r = t.match(Sr);
                                    if (r) {
                                        var o = e;
                                        o.type = Er, o.value = r[1], delete o.children
                                    }
                                }
                            }
                        }))
                    }
                },
                Zr = function(e, n) {
                    return e(n, Er, {
                        data: n.value
                    })
                },
                Tr = t(18854),
                Fr = t(33440),
                Jr = t(31945),
                Lr = t(11421),
                Rr = t.n(Lr);

            function Mr(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function zr(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Mr(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Mr(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }! function(e) {
                e.QuestionDetail = "/problems/[slug]/"
            }(pr || (pr = {}));
            var qr = function() {
                    var e = (0, Tr.useRouter)();
                    return e.pathname.startsWith(pr.QuestionDetail) ? function(e) {
                        var n, t = e.query,
                            r = {},
                            o = null !== (n = new URLSearchParams(window.location.search).get("source")) && void 0 !== n ? n : void 0;
                        return o && (r.source = o), r.eventName = "question_slug", r.event = t.slug, r
                    }(e) : {}
                },
                Vr = function() {
                    (0, s.y)(Rr());
                    var e = qr();
                    return (0, w.jsx)("div", {
                        className: "mb-6 flex w-full justify-center text-center",
                        children: (0, w.jsxs)("div", {
                            className: "relative flex min-h-[300px] max-w-[680px] flex-col justify-center overflow-hidden rounded-[13px] ",
                            children: [(0, w.jsx)("div", {
                                className: (0, c.yI)("z-base-negative-1 absolute h-full w-full opacity-10", Rr().background)
                            }), (0, w.jsxs)("div", {
                                className: "flex flex-col items-center justify-center px-[10%] py-5",
                                children: [(0, w.jsx)("div", {
                                    className: "h-[44px] w-[42px]",
                                    children: (0, w.jsx)(Jr.d, {
                                        className: (0, c.yI)("h-full w-full", vr.Cj.labelBrandOrange)
                                    })
                                }), (0, w.jsx)("div", {
                                    className: (0, c.yI)("mt-3 text-xl font-medium", vr.Cj.label1),
                                    children: "Subscribe to unlock"
                                }), (0, w.jsx)("div", {
                                    className: (0, c.yI)("text-md mt-2", vr.Cj.label2),
                                    children: "Thanks for using LeetCode! To view this solution video you must subscribe to premium."
                                }), (0, w.jsx)("div", {
                                    className: "mt-9 flex flex-row space-x-2.5",
                                    children: (0, w.jsx)(kr.z, {
                                        variant: "premium",
                                        className: "inline-block px-4 py-[5px]",
                                        children: (0, w.jsx)("a", {
                                            className: "!text-white !no-underline",
                                            href: Tt.Hb.premium(Fr.D.QuestionDetailPremiumVideoSolution, zr({}, e)),
                                            children: "Subscribe"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                Hr = "lc_premium_only_video",
                Wr = function() {
                    return function(e) {
                        (0, m.Vn)(e, "element", (function(e, n, t) {
                            var r;
                            if ("div" === e.tagName) {
                                var o = ((null === (r = e.properties) || void 0 === r ? void 0 : r.className) || []).join(" ");
                                if (o && o.includes("video-preview")) {
                                    t.children.splice(n, 1, {
                                        type: "element",
                                        tagName: "lc_premium_only_video",
                                        children: []
                                    })
                                }
                            }
                        }))
                    }
                },
                Gr = t(19769),
                Ur = function(e) {
                    var n = e.lang,
                        t = e.code;
                    return (0, w.jsx)("div", {
                        className: (0, c.yI)("mb-6 rounded-lg px-3 py-2.5 font-menlo text-sm", vr.Cj.fill3),
                        children: (0, w.jsx)(Gr.B, {
                            lang: n,
                            code: t,
                            showCopyIcon: !0
                        })
                    })
                },
                $r = t(4604),
                Kr = t(81383),
                Qr = t(8390),
                Xr = t(61930),
                Yr = t(72916),
                eo = t(72647),
                no = t(63266),
                to = t(69772),
                ro = t(5958),
                oo = t(15574),
                io = t(59401),
                ao = t(14709),
                so = t(68023),
                co = t(14195),
                lo = t(39102),
                uo = t(77130),
                po = t(22588),
                fo = t(32570),
                mo = t(37980),
                vo = t(39110),
                ho = t(33105),
                go = {
                    javascript: Kr.Z,
                    python: Qr.Z,
                    cpp: Xr.Z,
                    c: Yr.Z,
                    java: eo.Z,
                    json: no.Z,
                    sql: ho.Z,
                    csharp: to.Z,
                    ruby: ro.Z,
                    swift: oo.Z,
                    go: io.Z,
                    scala: ao.Z,
                    kotlin: so.Z,
                    rust: co.Z,
                    php: lo.Z,
                    typescript: uo.Z,
                    lisp: po.Z,
                    erlang: fo.Z,
                    elixir: mo.Z,
                    dart: vo.Z
                },
                bo = Object.keys(go);
            bo.forEach((function(e) {
                $r.Z.registerLanguage(e, go[e])
            }));
            var Ao = "lc_code_snippet",
                yo = function() {
                    return function(e) {
                        (0, m.Vn)(e, "", (function(e, n, t) {
                            var r;
                            if ("code" === e.type && null != n && t) {
                                var o = e.value || "",
                                    i = null !== (r = e.lang) && void 0 !== r ? r : function(e) {
                                        return $r.Z.highlightAuto(e, bo).language
                                    }(o),
                                    a = e;
                                a.type = Ao, a.lang = i, a.code = o, delete a.children
                            }
                        }))
                    }
                },
                xo = function(e, n) {
                    return e(n, Ao, {
                        code: n.code,
                        lang: n.lang
                    })
                },
                Co = t(55725),
                wo = t(46294),
                jo = t.n(wo),
                ko = function(e) {
                    var n = e.index,
                        t = e.selected,
                        o = e.title,
                        a = e.onClick;
                    (0, s.y)(jo());
                    var l = (0, i.useCallback)((function() {
                        a(n)
                    }), [n, a]);
                    return (0, w.jsx)("div", {
                        className: (0, c.Wy)("relative cursor-pointer px-3 py-3", (0, r.Z)({}, vr.Cj.label1, t), (0, r.Z)({}, vr.Cj.label4, !t), (0, r.Z)({}, vr.Cj.label1Hover, !t), {
                            "font-medium": t
                        }, jo().item),
                        onClick: t ? void 0 : l,
                        children: o
                    })
                };

            function _o(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var Oo = (0, i.memo)((function(e) {
                    var n = e.lang,
                        t = e.code,
                        r = e.visible;
                    return (0, w.jsx)("div", {
                        className: (0, c.yI)("px-3 py-2.5", vr.Cj.fill3, {
                            hidden: !r
                        }),
                        children: (0, w.jsx)(Gr.B, {
                            lang: n,
                            code: t,
                            showCopyIcon: !0
                        })
                    })
                })),
                Bo = (0, i.memo)((function(e) {
                    var n = e.visible,
                        t = (0, i.useState)(n),
                        o = t[0],
                        a = t[1];
                    return (0, i.useEffect)((function() {
                        n && a(!0)
                    }), [n]), o ? (0, w.jsx)(Oo, function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2 ? _o(Object(t), !0).forEach((function(n) {
                                (0, r.Z)(e, n, t[n])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _o(Object(t)).forEach((function(n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                            }))
                        }
                        return e
                    }({}, e)) : null
                })),
                No = (0, i.memo)((function(e) {
                    var n = e.codes,
                        t = (0, i.useState)(0),
                        r = t[0],
                        o = t[1],
                        a = n.length;
                    return (0, i.useEffect)((function() {
                        r >= a && o(0)
                    }), [r, a]), (0, w.jsxs)("div", {
                        className: "border-gray-3 dark:border-dark-gray-3 mb-6 overflow-hidden rounded-lg border",
                        children: [(0, w.jsx)("div", {
                            className: (0, c.yI)("flex select-none", vr.Cj.bgLayer2),
                            children: n.map((function(e, n) {
                                var t = e.name;
                                return (0, w.jsx)(ko, {
                                    index: n,
                                    selected: n === r,
                                    title: t,
                                    onClick: o
                                }, n)
                            }))
                        }), n.map((function(e, n) {
                            var t = e.lang,
                                o = e.code;
                            return (0, w.jsx)(Bo, {
                                lang: t,
                                code: o,
                                visible: n === r
                            }, n)
                        }))]
                    })
                }), (function(e, n) {
                    return function(e, n) {
                        if (e === n) return !0;
                        if (e.length !== n.length) return !1;
                        for (var t = e.length, r = 0; r < t; r++)
                            if (e[r] !== n[r]) return !1;
                        return !0
                    }(e.codes, n.codes)
                }));

            function Po(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var Io = "lc_grouped_code",
                Eo = /^\[([^\[\]]*)\]$/,
                So = function(e) {
                    return !!e.shouldBeRemoved
                },
                Do = function() {
                    return function(e) {
                        var n = {
                            name: "",
                            codes: [],
                            length: 0,
                            startIndex: null,
                            prevIndex: null
                        };

                        function t(e) {
                            if (null !== n.startIndex) {
                                e.children.splice(n.startIndex, 1, {
                                    type: Io,
                                    codes: JSON.stringify(n.codes),
                                    name: n.name
                                });
                                for (var t = n.length - 1; t > 0; t--) e.children[n.startIndex + t].shouldBeRemoved = 1
                            }
                        }
                        return (0, m.Vn)(e, "", (function(e, o, i) {
                            if ("code" === e.type && e.meta && null != o && i) {
                                var a = e.meta.match(Eo);
                                if (a) {
                                    var s = e.lang || "",
                                        c = a[1],
                                        l = c.indexOf("-"),
                                        u = l < 0 ? c : c.substring(0, l).trim(),
                                        d = l > 0 && c.substring(l + 1).trim() || "",
                                        p = function(e) {
                                            for (var n = 1; n < arguments.length; n++) {
                                                var t = null != arguments[n] ? arguments[n] : {};
                                                n % 2 ? Po(Object(t), !0).forEach((function(n) {
                                                    (0, r.Z)(e, n, t[n])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Po(Object(t)).forEach((function(n) {
                                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                                }))
                                            }
                                            return e
                                        }({}, e);
                                    p.meta = "[".concat(d, "]");
                                    var f = function() {
                                        n.name = u, n.codes.push({
                                            lang: s,
                                            code: e.value,
                                            name: d || s && Co.O[s] || s || "\u672a\u547d\u540d"
                                        }), n.length++, n.prevIndex = o, null === n.startIndex && (n.startIndex = o)
                                    };
                                    n.prevIndex !== o - 1 || n.name && n.name !== u ? (t(i), n = {
                                        name: "",
                                        codes: [],
                                        length: 0,
                                        startIndex: null,
                                        prevIndex: null
                                    }, f()) : f()
                                }
                            }
                        })), n.length && t(e), (0, v.O)(e, {}, So), e
                    }
                },
                Zo = function(e, n) {
                    return e(n, Io, {
                        codes: n.codes
                    })
                },
                To = t(79216),
                Fo = t(72102),
                Jo = t(19602),
                Lo = t(7705),
                Ro = t(50277),
                Mo = t(98685),
                zo = function(e) {
                    var n = e.reason,
                        t = (0, To.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        r = (0, i.useMemo)((function() {
                            switch (n) {
                                case "missing":
                                    return [t("invalidSubmissionIdLabel"), t("missingSubmissionIdTooltip")];
                                case "non-fe":
                                    return [t("invalidSubmissionIdLabel"), t("nonFeSubmissionIdTooltip")];
                                default:
                                    return ["Unknown error", "Something went wrong"]
                            }
                        }), [n, t]),
                        o = r[0],
                        a = r[1];
                    return (0, w.jsx)("div", {
                        className: "flex w-full items-center justify-start",
                        children: (0, w.jsx)(Fo.u, {
                            label: a,
                            placement: "top",
                            children: (0, w.jsx)("div", {
                                className: (0, c.yI)(Mo.nx.bgFillTertiary, Mo.nx.labelRed60, "rounded px-2 py-1 text-xs"),
                                children: o
                            })
                        })
                    })
                },
                qo = t(53936);

            function Vo(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function Ho(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Vo(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vo(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Wo, Go = "lc_custom_component",
                Uo = {
                    submission_preview: {
                        component: function(e) {
                            var n, t = e.submissionId,
                                r = e.inEditingMode,
                                o = (0, Ro.P)(null !== t && void 0 !== t ? t : 0, {
                                    enabled: !!t
                                }).data,
                                i = null !== (n = null === o || void 0 === o ? void 0 : o.questionSlug) && void 0 !== n ? n : "",
                                a = (0, Jo.o)(i);
                            return t ? a ? (0, w.jsx)(Lo.Q, {
                                submissionId: t,
                                className: "rounded-lg",
                                dynamicallyResizeIframe: !0,
                                showNavbar: !0,
                                canOpenInNewTab: !0,
                                canOpenInPanel: !r,
                                showCopyEmbedCode: !r
                            }) : (0, w.jsx)(zo, {
                                reason: "non-fe"
                            }) : (0, w.jsx)(zo, {
                                reason: "missing"
                            })
                        },
                        propNames: ["submissionId"]
                    },
                    submission_preview_only: {
                        component: function(e) {
                            var n = e.submissionId;
                            return n ? (0, w.jsx)(qo.x, {
                                submissionId: n,
                                className: "rounded-lg"
                            }) : null
                        },
                        propNames: ["submissionId"]
                    }
                },
                $o = /{{(.*?):(.*?)}}/,
                Ko = function() {
                    return function(e) {
                        (0, m.Vn)(e, "paragraph", (function(e) {
                            var n, t = null === (n = e.children) || void 0 === n ? void 0 : n[0];
                            if (t && "text" === t.type) {
                                var r = String(t.value);
                                if (r) {
                                    var o = r.match($o);
                                    if (o && !(o.length < 3)) {
                                        var i = o[1];
                                        if (Uo[i]) {
                                            var a = e;
                                            a.type = Go, a.componentName = i, a.args = o[2], delete a.children
                                        }
                                    }
                                }
                            }
                        }))
                    }
                },
                Qo = function(e, n) {
                    var t = n.componentName,
                        r = n.args;
                    return e(n, Go, {
                        componentName: t,
                        args: r
                    })
                },
                Xo = new RegExp("//(?:".concat(["(?:www.|player.)?vimeo.com", "(?:www.)?youtube.com", "(?:www.)?leetcode.com", "(?:www.|jobs.)?leetcode-cn.com", "(?:www.|jobs.)?lingkou.com"].join("|"), ")")),
                Yo = function() {
                    if (!Wo) {
                        var e, n = {
                            tagNames: ["dd", "del", "details", "div", "dl", "dt", "h1", "h2", "iframe", "img", "input", "ins", "meta", "path", "pre", "s", "span", "sub", "summary", "sup", "svg", xr, Er, Hr, Ao, Io, Gt, T, Go],
                            attributes: (e = {
                                h1: ["id", "align"],
                                h2: ["id", "align"],
                                h3: ["id", "align"],
                                h4: ["id", "align"],
                                h5: ["id", "align"],
                                h6: ["id", "align"],
                                a: ["href", "id", "name", "target", "title", "aria-hidden", "rel"],
                                img: ["alt", "id", "src", "width", "height", "align", "valign", "title", "style"],
                                p: ["align"],
                                meta: ["name", "content"],
                                iframe: ["src", "frameborder", "allowfullscreen", "width", "height", "translate"],
                                input: ["checked", "class", "disabled", "type"],
                                div: ["id", "className", "math", "math-display"],
                                span: ["class", "style", "className", "math", "math-inline"],
                                pre: ["style"],
                                code: ["class", "style"],
                                td: ["colspan", "rowspan", "style"],
                                th: ["colspan", "rowspan", "style"],
                                del: ["cite", "datetime"],
                                ins: ["cite", "datetime"],
                                path: ["d"],
                                svg: ["aria-hidden", "height", "version", "width", "viewBox", "preserveAspectRatio"],
                                ol: ["start"]
                            }, (0, r.Z)(e, xr, ["width", "height", "link"]), (0, r.Z)(e, Er, ["data"]), (0, r.Z)(e, Ao, ["code", "lang"]), (0, r.Z)(e, Io, ["codes"]), (0, r.Z)(e, Gt, ["uuid"]), (0, r.Z)(e, T, ["value"]), (0, r.Z)(e, Go, ["componentName", "args"]), e)
                        };
                        Wo = sr()(ir.R, n)
                    }
                    return Wo
                },
                ei = function() {
                    return function(e) {
                        (0, m.Vn)(e, "element", (function(e, n, t) {
                            var r;
                            "iframe" === e.tagName && null !== n && (String(null === (r = e.properties) || void 0 === r ? void 0 : r.src).match(Xo) || t.children.splice(n, 1))
                        }))
                    }
                },
                ni = function() {
                    return function(e) {
                        (0, m.Vn)(e, "element", (function(e, n) {
                            var t, r, o;
                            "iframe" === e.tagName && null !== n && e.properties && (e.properties.allowfullscreen = null === (t = e.properties.allowfullscreen) || void 0 === t || t, e.properties.width = null !== (r = e.properties.width) && void 0 !== r ? r : 560, e.properties.height = null !== (o = e.properties.height) && void 0 !== o ? o : 315, e.properties.translate = "no")
                        }))
                    }
                },
                ti = /^http(?!s):\/\/.*$/,
                ri = function() {
                    return function(e) {
                        (0, m.Vn)(e, "element", (function(e, n, t) {
                            var r;
                            if ("img" === e.tagName) {
                                var o = String(null === (r = e.properties) || void 0 === r ? void 0 : r.src);
                                if (o.match(ti)) {
                                    var i = {
                                        type: "element",
                                        tagName: "p",
                                        children: [{
                                            type: "text",
                                            value: o
                                        }]
                                    };
                                    t.children.splice(n, 1, i)
                                }
                            }
                        }))
                    }
                },
                oi = function() {
                    return function(e) {
                        (0, m.Vn)(e, "element", (function(e) {
                            if ("img" === e.tagName && e.properties) {
                                var n = String(e.properties.src);
                                (n.startsWith("/assets/uploads/") || n.startsWith("/post/")) && (e.properties.src = "https://discuss.leetcode.com".concat(n))
                            }
                        }))
                    }
                },
                ii = t(21484),
                ai = t(97002),
                si = t.n(ai),
                ci = t(43614),
                li = t(31227),
                ui = [/http(?:s)?:\/\/(?:www.)?youtube.com\/watch\?v=[a-zA-Z0-9]+/g, /http(?:s)?:\/\/(?:www.)?vimeo.com\/(?:\d)+/g, /http(?:s)?:\/\/(?:www.)?dailymotion.com\/video\/(?:\S)+/g, /http(?:s)?:\/\/(?:www.)?youtu.be\/(?:\S)+/g].map((function(e) {
                    return "(?:".concat(e.source, ")")
                })),
                di = new RegExp(ui.join("|"), "g"),
                pi = function() {
                    return function(e) {
                        (0, m.Vn)(e, "element", (function(e) {
                            if (["a", "p"].includes(e.tagName)) {
                                var n = e.children;
                                if (n) {
                                    for (var t, r = [], o = 0; o < n.length; o++) {
                                        var i = n[o];
                                        if ("text" === i.type) {
                                            var a = i.value.match(di);
                                            if (a) {
                                                var s = a.map((function(e) {
                                                    var n = si()(e);
                                                    return n ? (0, li.b)(n, {
                                                        fragment: !0
                                                    }).children[0] : null
                                                }));
                                                r.push([o, (t = s, t.filter((function(e) {
                                                    return Boolean(e)
                                                })))])
                                            }
                                        }
                                    }
                                    ci.Z.reverse(r), r.forEach((function(e) {
                                        var t = (0, d.Z)(e, 2),
                                            r = t[0],
                                            o = t[1];
                                        o.length && n.splice.apply(n, [r, 1].concat((0, ii.Z)(o)))
                                    }))
                                }
                            }
                        }))
                    }
                },
                fi = [/^https?:\/\/(?!(leetcode\.com))/, /^https?:\/\/(?!(leetcode\.cn))/].map((function(e) {
                    return "(?:".concat(e.source, ")")
                })),
                mi = new RegExp(fi.join("|"), "g"),
                vi = function() {
                    return function(e) {
                        (0, m.Vn)(e, "element", (function(e) {
                            var n;
                            if ("a" === e.tagName) {
                                var t = null === (n = e.properties) || void 0 === n ? void 0 : n.href;
                                t && "string" === typeof t && ("/" === t.charAt(0) && "/" !== t.charAt(1) || t.match(mi) || (e.properties = e.properties || {}, e.properties.rel = "noopener noreferrer nofollow ugc"))
                            }
                        }))
                    }
                },
                hi = ["leetcode.cn", "leetcode.com", "leetcode-cn.com", "lingkou.xyz", "lingkou.com", "lingkou.work"];

            function gi(e) {
                if (!e.startsWith("http") && !e.startsWith("www")) return e;
                if (hi.find((function(n) {
                        return e.match(n)
                    }))) return e;
                var n = encodeURIComponent(decodeURIComponent(e));
                return "/link/?target=".concat(n)
            }
            var bi = t(4499),
                Ai = ["onError", "src", "alt"];

            function yi(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var xi = function(e) {
                    var n = e.onError,
                        t = e.src,
                        a = e.alt,
                        s = (0, o.Z)(e, Ai),
                        c = (0, i.useState)(!1),
                        l = c[0],
                        u = c[1],
                        d = (0, i.useCallback)((function(e) {
                            u(!0), null === n || void 0 === n || n(e)
                        }), [n]);
                    return (0, w.jsx)("img", function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2 ? yi(Object(t), !0).forEach((function(n) {
                                (0, r.Z)(e, n, t[n])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yi(Object(t)).forEach((function(n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                            }))
                        }
                        return e
                    }({
                        onError: l ? void 0 : d,
                        src: l ? "data:image/svg+xml,%3Csvg height='150' viewBox='0 0 150 150' width='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2465 2286.42347-18.95363-18.92555-50.0112 43.79935-24.62708-24.5906-33.41155 24.5906-22.99654-17.22567v-73.0716c0-2.20914 1.79086-4 4-4h142c2.20914 0 4 1.79086 4 4zm-122-25.59081c5.52285 0 10-4.47052 10-9.98518 0-5.51467-4.47715-9.98519-10-9.98519s-10 4.47052-10 9.98519c0 5.51466 4.47715 9.98518 10 9.98518zm122 40.89296v61.27438c0 2.20914-1.79086 4-4 4h-142c-2.20914 0-4-1.79086-4-4v-53.62625l22.99654 17.22567 33.41155-24.5906 24.62708 24.5906 50.0112-43.79935z' fill='%23eee' fill-rule='evenodd' transform='translate(-2315 -2217)'/%3E%3C/svg%3E" : t,
                        alt: a || ""
                    }, (0, bi.Z)(s, "node")))
                },
                Ci = t(24165),
                wi = t(444),
                ji = t(16725);

            function ki(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return _i(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _i(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function _i(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var Oi = function(e) {
                    var n = e.heading;
                    return function(e) {
                        var t, r = ki(e.children || []);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var o = t.value;
                                if ("paragraph" === o.type && !(o.children.length > 1)) {
                                    var i = o.children[0];
                                    if ("text" === i.type) {
                                        var a = (i.value || "").trim();
                                        if (a && "[TOC]" === a.toLocaleUpperCase()) {
                                            o.type = "heading", o.depth = 4, i.value = n, o.toc_temp_heading = !0;
                                            break
                                        }
                                    }
                                }
                            }
                        } catch (s) {
                            r.e(s)
                        } finally {
                            r.f()
                        }
                    }
                },
                Bi = function() {
                    return function(e) {
                        (0, m.Vn)(e, "heading", (function(e, n, t) {
                            if (e.toc_temp_heading) return e.type = "hr", e.children[0].value = "", t.children.splice(n, 1), t.children.splice(n + 1, 0, e), ji.BK
                        }))
                    }
                },
                Ni = t(14244),
                Pi = function(e) {
                    var n = {
                        remarkPlugins: [],
                        rehypePlugins: [],
                        remarkRehypeOptions: {
                            handlers: {}
                        },
                        components: {},
                        preprocessors: []
                    };
                    return e.linkSift && (n.transformLinkUri = gi), e.linkTargetBlank && (n.linkTarget = function(e) {
                        return e.startsWith("#") ? "_self" : "_blank"
                    }), e.mcqs && function(e) {
                        e.remarkPlugins.push(Dr), e.remarkRehypeOptions.handlers.lc_mcqs = Zr, e.components.lc_mcqs = Ir
                    }(n), e.customComponent && function(e, n) {
                        e.remarkPlugins.push(Ko), e.remarkRehypeOptions.handlers.lc_custom_component = Qo, e.components.lc_custom_component = function(e) {
                            var t = e.node.properties,
                                o = t.componentName,
                                i = t.args,
                                a = Uo[o].component,
                                s = i.split(":"),
                                c = Uo[o].propNames.reduce((function(e, n, t) {
                                    return Ho(Ho({}, e), {}, (0, r.Z)({}, n, null === s || void 0 === s ? void 0 : s[t]))
                                }), {});
                            return (0, w.jsx)(a, Ho(Ho({}, c), {}, {
                                inEditingMode: n
                            }))
                        }
                    }(n, e.inEditingMode), e.diaporama && function(e) {
                        e.preprocessors.push(Cr), e.remarkRehypeOptions.handlers.diaporama = wr, e.components.diaporama = yr
                    }(n), e.imageSize && function(e) {
                        e.remarkPlugins.push(x), e.remarkRehypeOptions.handlers.image = C
                    }(n), e.slides && function(e) {
                        e.remarkPlugins.push(F), e.remarkRehypeOptions.handlers.lc_slides = J, e.components.lc_slides = S
                    }(n), e.normalVideo && function(e) {
                        e.remarkPlugins.push(z), e.remarkRehypeOptions.handlers.lc_normal_video = q, e.components.lc_normal_video = R
                    }(n), e.aliPlayerVideo && function(e) {
                        e.remarkPlugins.push(Ut), e.remarkRehypeOptions.handlers.lc_ali_player_video = $t, e.components.lc_ali_player_video = Wt
                    }(n), e.math && tr(n), e.groupedCode && function(e) {
                        e.remarkPlugins.push(Do), e.remarkRehypeOptions.handlers.lc_grouped_code = Zo, e.components.lc_grouped_code = function(e) {
                            var n = e.node,
                                t = JSON.parse(n.properties.codes);
                            return (0, w.jsx)(No, {
                                codes: t
                            })
                        }
                    }(n), e.preserveLineBreaks && n.remarkPlugins.push(l.Z), e.gfm && n.remarkPlugins.push(u.Z), e.highlight && function(e) {
                        e.remarkPlugins.push(yo), e.remarkRehypeOptions.handlers[Ao] = xo, e.components[Ao] = function(e) {
                            var n = e.node;
                            return (0, w.jsx)(Ur, {
                                lang: n.properties.lang,
                                code: n.properties.code
                            })
                        }
                    }(n), e.html && (! function(e) {
                        e.rehypePlugins.push(rr.Z)
                    }(n), e.keyword && (0, Ni.Q)(n)), e.premiumOnlyVideo && function(e) {
                        e.rehypePlugins.push(Wr), e.components.lc_premium_only_video = Vr
                    }(n), e.embedVideos && function(e) {
                        e.rehypePlugins.push(pi)
                    }(n), e.httpsImagesOnly && function(e) {
                        e.rehypePlugins.push(ri)
                    }(n), e.nodebbImageTransformation && function(e) {
                        e.rehypePlugins.push(oi)
                    }(n), e.relAttribute && function(e) {
                        e.rehypePlugins.push(vi)
                    }(n), e.htmlSanitization && function(e) {
                        e.rehypePlugins.push([or.Z, Yo()]), e.rehypePlugins.push(ei), e.rehypePlugins.push(ni)
                    }(n), e.brokenImageHolder && function(e) {
                        e.components.img = xi
                    }(n), e.toc && function(e) {
                        var n = "LC_TOC_PLACEHOLDER_".concat(Math.floor(1e5 * Math.random()));
                        e.remarkPlugins.push([Oi, {
                            heading: n
                        }]), e.remarkPlugins.push([Ci.Z, {
                            heading: n,
                            ordered: !0
                        }]), e.remarkPlugins.push(Bi), e.rehypePlugins.push(wi.Z)
                    }(n), n
                },
                Ii = t(26991),
                Ei = t.n(Ii),
                Si = ["preprocessors"];

            function Di(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function Zi(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Di(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Di(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Ti = function(e) {
                var n = Pi(e),
                    t = n.preprocessors,
                    r = (0, o.Z)(n, Si),
                    l = t.length ? function(e) {
                        return t.reduce((function(e, n) {
                            return n(e)
                        }), e)
                    } : function(e) {
                        return e
                    },
                    u = function(e) {
                        var n = e.content,
                            t = e.customStyles;
                        (0, s.y)(Ei()), (0, s.y)(t);
                        var o = (0, i.useMemo)((function() {
                            return l(n)
                        }), [n]);
                        return (0, w.jsx)(a.D, Zi(Zi({}, r), {}, {
                            className: (0, c.yI)(Ei().markdown, null === t || void 0 === t ? void 0 : t.markdown),
                            children: o
                        }))
                    };
                return (0, i.memo)(u)
            }
        },
        14244: function(e, n, t) {
            "use strict";
            t.d(n, {
                Q: function() {
                    return Z
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var r = t(4676),
                o = t(7831),
                i = (t(82544), t(64386)),
                a = t(44872),
                s = t(59970),
                c = t(36419),
                l = t(88077),
                u = t(46239),
                d = t(98410),
                p = t(62590),
                f = t(56609),
                m = t(40682);

            function v(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? v(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var g, b = function(e) {
                    if (!e.problemsetCommonKeyword) return null;
                    var n = e.problemsetCommonKeyword,
                        t = n.title,
                        r = n.titleCn,
                        o = n.content;
                    return {
                        title: r || t || "",
                        content: n.contentCn || o || ""
                    }
                },
                A = function(e) {
                    if (!e.problemsetCommonKeyword) return null;
                    var n = e.problemsetCommonKeyword;
                    return {
                        title: n.title || "",
                        content: n.content || ""
                    }
                },
                y = function(e, n) {
                    var t, r = (0, m.U)().data,
                        o = !(null === r || void 0 === r || null === (t = r.userStatus) || void 0 === t || !t.useTranslation),
                        i = (0, p.DG)(f.K, {
                            slug: e
                        }, h(h({}, n), {}, {
                            select: b,
                            enabled: o
                        })),
                        a = (0, p.DG)(f.K, {
                            slug: e
                        }, h(h({}, n), {}, {
                            select: A,
                            enabled: !o
                        }));
                    return o ? i : a
                },
                x = t(40007),
                C = t(79927),
                w = t(99663),
                j = t(11754),
                k = ["dataKeyword"];

            function _(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? _(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var B = function() {
                    return g || (g = (0, w.t)({
                        math: !0,
                        html: !0,
                        htmlSanitization: !0,
                        brokenImageHolder: !0,
                        gfm: !0,
                        linkSift: !0,
                        linkTargetBlank: !0
                    })), g
                },
                N = (0, i.memo)((function(e) {
                    var n = e.title,
                        t = e.content,
                        r = B();
                    return (0, j.jsxs)("div", {
                        className: (0, a.yI)(x.Cj.bgLayer3, x.Cj.divider4, "w-full cursor-default rounded-lg border border-opacity-5"),
                        children: [(0, j.jsx)("div", {
                            className: (0, a.yI)(x.Cj.divider3, x.Cj.label1, "text-md border-b border-opacity-5 px-4 py-3 font-medium"),
                            children: n
                        }), (0, j.jsx)("div", {
                            className: "px-4 py-3",
                            children: (0, j.jsx)(r, {
                                content: t
                            })
                        })]
                    })
                })),
                P = function(e) {
                    var n, t, r = e.dataKeyword,
                        a = (0, o.Z)(e, k),
                        p = (0, i.useState)(!1),
                        f = p[0],
                        m = p[1],
                        v = y(r, {
                            enabled: f
                        }).data,
                        h = (0, s.i)().width,
                        g = (0, i.useMemo)((function() {
                            return Math.min(h || 0, 385)
                        }), [h]);
                    (0, i.useEffect)((function() {
                        var e = setTimeout((function() {
                            m(!0)
                        }), 1e3);
                        return function() {
                            clearTimeout(e)
                        }
                    }), []);
                    var b = (0, i.useCallback)((function() {
                            m(!0)
                        }), []),
                        A = "".concat(null !== (n = a.className) && void 0 !== n ? n : "", " cursor-pointer relative text-dark-blue-s text-sm"),
                        x = null !== (t = a.children) && void 0 !== t ? t : null,
                        w = Object.assign({}, a);
                    delete w.children;
                    var _ = (0, u.v)((function(e) {
                            return e.questionSlug
                        })),
                        B = (0, c.z)((function(e) {
                            e && C.d.qdKeywordExposure({
                                qd_version: (0, l.in)(),
                                qd_question_slug: _
                            })
                        }));
                    return (0, j.jsx)("span", O(O({}, w), {}, {
                        onMouseEnter: b,
                        className: A,
                        children: (0, j.jsx)(d.J, {
                            contentClassName: "p-0",
                            useHover: !0,
                            showArrow: !1,
                            onVisibilityChange: B,
                            content: v && (0, j.jsx)("div", {
                                style: {
                                    maxWidth: g
                                },
                                children: (0, j.jsx)(N, {
                                    content: (null === v || void 0 === v ? void 0 : v.content) || "",
                                    title: (null === v || void 0 === v ? void 0 : v.title) || ""
                                })
                            }),
                            children: x
                        })
                    }))
                },
                I = ["node"];

            function E(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function S(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? E(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var D = function(e) {
                    var n, t, r = e.node,
                        i = (0, o.Z)(e, I);
                    return "element" !== r.type || "string" !== typeof(null === r || void 0 === r || null === (n = r.properties) || void 0 === n ? void 0 : n.dataKeyword) ? (0, j.jsx)("span", S({}, i)) : (0, j.jsx)(P, S(S({}, i), {}, {
                        dataKeyword: null === r || void 0 === r || null === (t = r.properties) || void 0 === t ? void 0 : t.dataKeyword
                    }))
                },
                Z = function(e) {
                    e.components.span = D
                }
        },
        20052: function(e, n, t) {
            "use strict";
            t.d(n, {
                b: function() {
                    return o
                }
            });
            var r = t(11754),
                o = function(e) {
                    var n = e.className,
                        t = e.onClick;
                    return (0, r.jsx)("svg", {
                        className: n,
                        onClick: t,
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.4141 11.9999L18.9999 17.5857C19.3904 17.9762 19.3904 18.6094 18.9999 18.9999C18.6094 19.3904 17.9762 19.3904 17.5857 18.9999L11.9999 13.4141L6.41414 18.9999C6.02361 19.3904 5.39045 19.3904 4.99992 18.9999C4.6094 18.6094 4.6094 17.9762 4.99992 17.5857L10.5857 11.9999L4.99992 6.41414C4.6094 6.02361 4.6094 5.39045 4.99992 4.99992C5.39045 4.6094 6.02361 4.6094 6.41414 4.99992L11.9999 10.5857L17.5857 4.99992C17.9762 4.6094 18.6094 4.6094 18.9999 4.99992C19.3904 5.39045 19.3904 6.02361 18.9999 6.41414L13.4141 11.9999V11.9999Z",
                            fill: "#8C8C8C"
                        })
                    })
                }
        },
        79547: function(e, n, t) {
            "use strict";
            t.d(n, {
                I: function() {
                    return c
                }
            });
            var r = t(19129),
                o = t(22980),
                i = t.n(o),
                a = (t(43969), t(91518), t(58935), function(e) {
                    return new Promise((function(n, t) {
                        var r = new XMLHttpRequest;
                        r.open("GET", e, !0), r.onload = function() {
                            200 === r.status ? n(r.responseText) : t(Error())
                        }, r.onerror = function(e) {
                            t(e)
                        }, setTimeout((function() {
                            t(Error())
                        }), 2e3), r.send()
                    }))
                }),
                s = function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        var n, t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, a("".concat("https://leetcode.cn", "/timestamp/"));
                                case 2:
                                    return n = e.sent, t = JSON.parse(n), e.abrupt("return", Math.round(1e3 * t.timestamp));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, s();
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", Date.now());
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        32601: function(e, n, t) {
            "use strict";
            t.d(n, {
                z: function() {
                    return r
                }
            });
            var r = function() {
                var e = window.top;
                return !(!e || e === window)
            }
        },
        19602: function(e, n, t) {
            "use strict";
            t.d(n, {
                o: function() {
                    return s
                }
            });
            var r = t(64386),
                o = t(18336),
                i = t(99540),
                a = t(81693),
                s = function(e) {
                    var n = (0, a.Q)(e).data,
                        t = null === n || void 0 === n ? void 0 : n.metaData;
                    return (0, r.useMemo)((function() {
                        var e = t ? (0, i.Ii)(t) : void 0;
                        return (null === e || void 0 === e ? void 0 : e.type) === o.tn.Frontend
                    }), [t])
                }
        },
        61806: function(e, n, t) {
            "use strict";
            t.d(n, {
                DB: function() {
                    return c
                },
                TY: function() {
                    return f
                },
                aD: function() {
                    return s
                },
                hg: function() {
                    return p
                },
                k_: function() {
                    return o
                },
                rf: function() {
                    return l
                },
                rm: function() {
                    return m
                },
                sH: function() {
                    return d
                },
                sh: function() {
                    return u
                }
            });
            var r, o, i = t(4676),
                a = t(18336);
            ! function(e) {
                e[e.Limit = 800] = "Limit", e[e.NonPremium = 100] = "NonPremium", e[e.Premium = 50] = "Premium"
            }(o || (o = {}));
            var s, c = "QD_CONSOLE_PANEL_POSITION";
            ! function(e) {
                e.Left = "left", e.Right = "right"
            }(s || (s = {}));
            var l, u = "QD_CONSOLE_SHOWN_SOURCE_POPOVER";
            ! function(e) {
                e.Testcase = "testcase", e.Result = "result", e.Debugger = "debugger"
            }(l || (l = {}));
            var d, p = (r = {}, (0, i.Z)(r, a.tn.Shell, !1), (0, i.Z)(r, a.tn.SystemDesign, !0), (0, i.Z)(r, a.tn.Algorithm, !0), (0, i.Z)(r, a.tn.Database, !1), (0, i.Z)(r, a.tn.Frontend, !1), r);
            ! function(e) {
                e.LinkedList = "ListNode", e.Tree = "TreeNode"
            }(d || (d = {}));
            var f = [d.Tree],
                m = "https://support.leetcode.cn/hc/kb/article/1194344/"
        },
        30135: function(e, n, t) {
            "use strict";
            t.d(n, {
                s8: function() {
                    return u
                },
                _c: function() {
                    return d
                },
                eC: function() {
                    return p
                }
            });
            var r = t(59679),
                o = (t(17519), t(70748), t(91518), t(18336)),
                i = (t(5348), t(81248), t(66128), t(11270), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e.split("\n")
                }),
                a = t(92292),
                s = function(e) {
                    return e.split("\n")
                },
                c = function(e) {
                    return e.map((function(e) {
                        return e.replace(/\n/g, "").trim()
                    })).join("\n")
                },
                l = t(4521),
                u = function(e, n) {
                    return e === o.tn.Algorithm ? function(e) {
                        return e.map(i)
                    }(n) : e === o.tn.Database ? (0, a.hu)(n) : e === o.tn.SystemDesign ? function(e) {
                        return e.map(s)
                    }(n) : e === o.tn.Frontend ? (0, l.e3)(n) : []
                },
                d = function(e, n, t) {
                    return e === o.tn.Algorithm ? n.map((function(e) {
                        return function(e, n) {
                            return n ? e.join("\n") : e.map((function(e) {
                                return e.replace(/\n/g, "").trim()
                            })).join("\n")
                        }(e, t)
                    })) : e === o.tn.Database ? n.map(a.dl) : e === o.tn.SystemDesign ? n.map(c) : e === o.tn.Frontend ? n.map(l.J$) : []
                },
                p = function(e, n) {
                    var t;
                    return e === o.tn.Frontend && null !== (t = n.map(l.pj).filter((function(e) {
                        return !(0, r.Z)(e, 1)[0]
                    }))[0]) && void 0 !== t ? t : [!0, null]
                }
        },
        97846: function(e, n, t) {
            "use strict";
            t.d(n, {
                Fr: function() {
                    return p
                },
                Ir: function() {
                    return l
                },
                Qr: function() {
                    return s
                },
                X$: function() {
                    return u
                },
                Xo: function() {
                    return c
                },
                dd: function() {
                    return o
                },
                gG: function() {
                    return d
                }
            });
            var r, o, i = t(4676),
                a = t(18336),
                s = 1,
                c = 8,
                l = 0,
                u = -1,
                d = "QD_CONSOLE_TESTCASE_MODE";
            ! function(e) {
                e.Tab = "tab", e.Text = "text"
            }(o || (o = {}));
            var p = (r = {}, (0, i.Z)(r, a.tn.Shell, !0), (0, i.Z)(r, a.tn.SystemDesign, !0), (0, i.Z)(r, a.tn.Algorithm, !0), (0, i.Z)(r, a.tn.Database, !1), (0, i.Z)(r, a.tn.Frontend, !0), r)
        },
        92292: function(e, n, t) {
            "use strict";
            t.d(n, {
                dl: function() {
                    return A
                },
                hu: function() {
                    return b
                },
                qW: function() {
                    return y
                }
            });
            var r = t(21484),
                o = (t(66128), t(3500), t(17519), t(78464), t(91518), t(62217), t(2979), t(81248), t(11270), t(56806), t(29308), t(37872), t(27115), t(33111)),
                i = t(27335),
                a = t(4896),
                s = t.n(a),
                c = t(4499),
                l = t(42456),
                u = t(6387),
                d = t(96267),
                p = function(e) {
                    return /^".*"$/.test(e) ? e.slice(1, -1) : e
                },
                f = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = n ? p(e) : e;
                    return "null" === t ? null : "true" === t || "false" !== t && (s()(t) ? parseFloat(t) : t)
                },
                m = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null === e ? "null" : !0 === e ? "true" : !1 === e ? "false" : "number" === typeof e ? String(e) : n ? '"'.concat(e, '"') : String(e)
                },
                v = function(e) {
                    return e.map((function(e) {
                        return m(e)
                    }))
                },
                h = function(e, n) {
                    return e.map((function(e, t) {
                        return r = e, (o = n[t]) ? "null" === r ? null : "string" === o ? r : "number" === o ? s()(r) ? parseFloat(r) : r : "boolean" === o ? "true" === r || "false" !== r && r : r : f(r);
                        var r, o
                    }))
                },
                g = function(e) {
                    try {
                        var n = {},
                            t = (0, l.a)(e);
                        if (!t) return u.y.error("Something went wrong with the testcase"), {
                            tables: {}
                        };
                        Object.keys(t.headers || {}).forEach((function(e) {
                            n[e] = [t.headers[e]].concat((0, r.Z)(t.rows[e].map((function(e) {
                                return v(e)
                            }))))
                        }));
                        var i = {};
                        Object.keys(n).forEach((function(e) {
                            i[e] = (0, o.x)(n[e])
                        }));
                        var a = (0, c.Z)(t, ["headers", "rows"]);
                        return Object.keys(a).forEach((function(e) {
                            a[e] = m(a[e], !0)
                        })), Object.keys(a).length > 0 ? {
                            tables: i,
                            variables: a
                        } : {
                            tables: i
                        }
                    } catch (s) {
                        return {
                            tables: {}
                        }
                    }
                },
                b = function(e) {
                    return e.map(g)
                },
                A = function(e) {
                    var n = d.n.getState().dbTestcaseSchema,
                        t = {
                            headers: {},
                            rows: {}
                        };
                    try {
                        Object.keys(e.tables).forEach((function(r) {
                            var o = (0, i.B0)(e.tables[r].replace(/\n(\n\s*)*/g, "\n").trim());
                            t.headers[r] = Array.from(o.headers), t.rows[r] = Array.from(o.rows).map((function(e) {
                                var t = o.headers.map((function(e) {
                                    var t;
                                    return null === n || void 0 === n || null === (t = n[r]) || void 0 === t ? void 0 : t[e]
                                }));
                                return h(e, t)
                            }))
                        })), Object.keys(e.variables || {}).forEach((function(n) {
                            var r;
                            t[n] = f((null === (r = e.variables) || void 0 === r ? void 0 : r[n]) || "", !0)
                        }))
                    } catch (r) {
                        t.headers = {}, t.rows = {}
                    }
                    return JSON.stringify(t)
                },
                y = function(e) {
                    var n = (0, l.a)(e);
                    return n ? {
                        output: (0, o.x)([n.headers].concat((0, r.Z)(n.values.map((function(e) {
                            return v(e)
                        })))))
                    } : (u.y.error("Something went wrong with the output"), {
                        output: ""
                    })
                }
        },
        96267: function(e, n, t) {
            "use strict";
            t.d(n, {
                a: function() {
                    return f
                },
                n: function() {
                    return m
                }
            });
            t(78464), t(29092), t(96543), t(62217), t(63306);
            var r = t(59679),
                o = t(21484),
                i = t(4676),
                a = (t(1743), t(2979), t(70748), t(91518), t(83696), t(8249), t(75881)),
                s = t(81757),
                c = t(90226),
                l = t(97846);

            function u(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function d(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var p = function(e, n, t) {
                    return n >= t ? Math.min(Math.max(0, n - 1), e.length - 2) : n
                },
                f = {
                    activeTestcase: l.Ir,
                    activeTestcaseParam: l.X$,
                    testcaseList: [],
                    dbTestcaseSchema: {},
                    failedFrontendTestLines: [],
                    failedFrontendTests: [],
                    limitErrorVisible: !1,
                    lineNumber: 1
                },
                m = (0, s.Ue)((0, c.$e)(f, (function(e, n) {
                    return {
                        canAddTestcase: function() {
                            return n().testcaseList.length < l.Xo
                        },
                        canDeleteTestcase: function() {
                            return n().testcaseList.length > l.Qr
                        },
                        addTestcase: function(t) {
                            var r = (0, a.Z)(t),
                                i = n().testcaseList.length;
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    testcaseList: [].concat((0, o.Z)(e.testcaseList), [r]),
                                    activeTestcase: i
                                })
                            }))
                        },
                        deleteTestcase: function(t) {
                            var r = n(),
                                o = r.testcaseList,
                                i = r.activeTestcase,
                                a = p(o, i, t),
                                s = o.filter((function(e, n) {
                                    return n !== t
                                }));
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    testcaseList: s,
                                    activeTestcase: a
                                })
                            }))
                        },
                        setTestcaseList: function(t) {
                            return e((function(e) {
                                var r = n().activeTestcase,
                                    o = t.length,
                                    i = p(t, r, o);
                                return d(d({}, e), {}, {
                                    testcaseList: t,
                                    activeTestcase: i
                                })
                            }))
                        },
                        setDbTestcaseSchema: function(n) {
                            return e((function(e) {
                                var t = Object.entries(n).reduce((function(e, n) {
                                    var t = (0, r.Z)(n, 2),
                                        o = t[0],
                                        a = t[1],
                                        s = Object.entries(a).reduce((function(e, n) {
                                            var t = (0, r.Z)(n, 2),
                                                o = t[0],
                                                a = t[1];
                                            return d(d({}, e), {}, (0, i.Z)({}, o, function(e) {
                                                var n, t = null !== (n = null === e || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : "";
                                                switch (!0) {
                                                    case t.startsWith("char"):
                                                    case t.startsWith("varchar"):
                                                    case t.startsWith("tinytext"):
                                                    case t.startsWith("text"):
                                                    case t.startsWith("mediumtext"):
                                                    case t.startsWith("longtext"):
                                                    case t.startsWith("enum"):
                                                    case t.startsWith("set"):
                                                    case t.startsWith("date"):
                                                    case t.startsWith("time"):
                                                    case t.startsWith("datetime"):
                                                    case t.startsWith("timestamp"):
                                                    case t.startsWith("year"):
                                                        return "string";
                                                    case t.startsWith("tinyint"):
                                                    case t.startsWith("smallint"):
                                                    case t.startsWith("mediumint"):
                                                    case t.startsWith("int"):
                                                    case t.startsWith("bigint"):
                                                    case t.startsWith("float"):
                                                    case t.startsWith("double"):
                                                    case t.startsWith("decimal"):
                                                        return "number";
                                                    case t.startsWith("bit"):
                                                    case t.startsWith("bool"):
                                                    case t.startsWith("boolean"):
                                                        return "boolean";
                                                    default:
                                                        return null
                                                }
                                            }(a)))
                                        }), {});
                                    return d(d({}, e), {}, (0, i.Z)({}, o, s))
                                }), {});
                                return d(d({}, e), {}, {
                                    dbTestcaseSchema: t
                                })
                            }))
                        },
                        setActiveTestcase: function(n) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    activeTestcase: n,
                                    activeTestcaseParam: l.X$
                                })
                            }))
                        },
                        setActiveTestcaseParam: function(n) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    activeTestcaseParam: n
                                })
                            }))
                        },
                        setLimitErrorVisible: function(n) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    limitErrorVisible: n
                                })
                            }))
                        },
                        setLineNumber: function(n) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    lineNumber: n
                                })
                            }))
                        },
                        setActiveTestcaseWithParam: function(n, t) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    activeTestcase: n,
                                    activeTestcaseParam: t
                                })
                            }))
                        },
                        setFailedFrontendTestLines: function(n) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    failedFrontendTestLines: n
                                })
                            }))
                        },
                        setFailedFrontendTests: function(n) {
                            return e((function(e) {
                                return d(d({}, e), {}, {
                                    failedFrontendTests: n
                                })
                            }))
                        }
                    }
                })))
        },
        99540: function(e, n, t) {
            "use strict";
            t.d(n, {
                B1: function() {
                    return x
                },
                Fq: function() {
                    return f
                },
                Hs: function() {
                    return A
                },
                Ii: function() {
                    return d
                },
                Zl: function() {
                    return h
                },
                __: function() {
                    return v
                },
                jz: function() {
                    return b
                },
                kV: function() {
                    return p
                },
                oO: function() {
                    return g
                },
                wg: function() {
                    return m
                }
            });
            var r = t(21484),
                o = (t(91518), t(70748), t(17519), t(72029), t(62217), t(78464), t(87621), t(51506), t(5348), t(66128), t(76361), t(42456)),
                i = t(6387),
                a = t(18336),
                s = t(32724),
                c = t(61806),
                l = t(30135),
                u = t(97846),
                d = function(e) {
                    var n = (0, o.a)(e);
                    return n ? (n.type = function(e) {
                        return e.shell ? a.tn.Shell : e.systemdesign ? a.tn.SystemDesign : e.database ? a.tn.Database : e.frontend ? a.tn.Frontend : a.tn.Algorithm
                    }(n), n.type === a.tn.Algorithm && (n.params = n.params || []), n) : (i.y.error("Something went wrong with the metadata"), {
                        type: a.tn.Algorithm,
                        name: "",
                        params: []
                    })
                },
                p = function(e) {
                    return c.TY.some((function(n) {
                        return n === e
                    }))
                },
                f = function(e) {
                    var n = e.type;
                    return !!c.hg[n] && (n == a.tn.Algorithm && e.params.some((function(e) {
                        return p(e.type)
                    })))
                },
                m = function(e) {
                    return e.type === a.tn.Algorithm && e.params.some((function(e) {
                        return e.type === c.sH.Tree
                    }))
                },
                v = function(e) {
                    var n = e.type;
                    return !!u.Fr[n]
                },
                h = function(e, n) {
                    var t = [],
                        o = [],
                        i = [],
                        s = [];
                    if (e.type === a.tn.Algorithm) {
                        var u = e;
                        o.push.apply(o, (0, r.Z)(n.split("\n"))), u.manual || (t.push.apply(t, (0, r.Z)(u.params.map((function(e) {
                            return e.name
                        })).filter((function(e) {
                            return e
                        })))), i.push.apply(i, (0, r.Z)(u.params.map((function(e) {
                            return e.type
                        })))), s.push.apply(s, (0, r.Z)(u.params.map((function(n) {
                            return c.hg[e.type] && p(n.type)
                        })))))
                    } else if (e.type === a.tn.Database) {
                        (0, l.s8)(a.tn.Database, [n]).forEach((function(e) {
                            Object.keys(e.tables).forEach((function(n) {
                                t.push(n), o.push(e.tables[n])
                            })), Object.keys(e.variables || {}).forEach((function(n) {
                                var r;
                                t.push(n), o.push((null === (r = e.variables) || void 0 === r ? void 0 : r[n]) || "")
                            }))
                        }))
                    } else o.push.apply(o, (0, r.Z)(n.split("\n")));
                    return [t, o, i, s]
                },
                g = function(e) {
                    return [s.$.PENDING, s.$.JUDGING].includes(e)
                },
                b = function(e) {
                    return e.map((function(e) {
                        return Array.isArray(e) ? e.join("\n") : e
                    })).join("\n")
                },
                A = function(e, n) {
                    return function(e, n) {
                        for (var t = [], r = 0; r < e.length; r++) r % n === 0 ? t.push([e[r]]) : t[t.length - 1].push(e[r]);
                        return t
                    }(e.split("\n"), n)
                },
                y = /^(.*?) is not a valid value/,
                x = function(e) {
                    var n = e.match(y);
                    return n && n[1] ? n[1] : ""
                }
        },
        34897: function(e, n, t) {
            "use strict";
            t.d(n, {
                b: function() {
                    return m
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var r = t(4676),
                o = t(7831),
                i = t(92130),
                a = t.n(i),
                s = t(64386),
                c = t(93141),
                l = t(40007),
                u = t(11754),
                d = ["color", "iconVisible", "rounded"];

            function p(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? p(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var m = s.forwardRef((function(e, n) {
                var t, i = e.color,
                    s = e.iconVisible,
                    p = void 0 === s || s,
                    m = e.rounded,
                    v = void 0 === m || m,
                    h = (0, o.Z)(e, d);
                return (0, u.jsxs)("div", f(f({
                    ref: n
                }, h), {}, {
                    className: a()("flex items-start p-2.5 leading-[20px]", (t = {}, (0, r.Z)(t, a()(l.Cj.labelBlueStandard, l.Cj.bgBlue0), "blue" === i), (0, r.Z)(t, a()(l.Cj.labelRedStandard, l.Cj.bgRed1), "red" === i), (0, r.Z)(t, a()(l.Cj.labelGreenStandard, l.Cj.bgGreen0), "green" === i), (0, r.Z)(t, "rounded", v), t), e.className),
                    children: [p && (0, u.jsx)(c.L, {
                        className: "relative top-[1px] mr-[6px] shrink-0",
                        height: 18,
                        width: 18
                    }), e.children]
                }))
            }))
        },
        98410: function(e, n, t) {
            "use strict";
            t.d(n, {
                J: function() {
                    return p
                }
            });
            var r = t(64386),
                o = t(48485),
                i = t(50048),
                a = t(90574),
                s = t(40007),
                c = t(44872),
                l = function(e) {
                    var n = e.open,
                        t = e.onVisibilityChange,
                        o = (0, r.useRef)(n);
                    return (0, r.useEffect)((function() {
                        n !== o.current && (o.current = n, t && t(n))
                    }), [n, t]), null
                },
                u = t(11754),
                d = {
                    top: "top",
                    left: "left",
                    right: "right",
                    bottom: "bottom",
                    topLeft: "top-start",
                    topRight: "top-end",
                    bottomLeft: "bottom-start",
                    bottomRight: "bottom-end",
                    leftTop: "left-start",
                    leftBottom: "left-end",
                    rightTop: "right-start",
                    rightBottom: "right-end"
                },
                p = function(e) {
                    var n = e.className,
                        t = e.buttonClassName,
                        p = e.panelClassName,
                        f = e.arrowClassName,
                        m = e.contentClassName,
                        v = e.disabled,
                        h = e.mobileEnable,
                        g = e.useHover,
                        b = void 0 === g || g,
                        A = e.content,
                        y = e.children,
                        x = e.placement,
                        C = e.timeoutDuration,
                        w = void 0 === C ? 200 : C,
                        j = e.inset,
                        k = void 0 === j ? 10 : j,
                        _ = e.arrowSize,
                        O = void 0 === _ ? 8 : _,
                        B = e.showArrow,
                        N = void 0 === B || B,
                        P = e.onVisibilityChange,
                        I = e.canCloseContent,
                        E = void 0 !== I && I,
                        S = e.transform,
                        D = void 0 === S || S,
                        Z = e.portal,
                        T = e.controlledOpen,
                        F = e.setControlledOpen,
                        J = (0, r.useRef)(),
                        L = (0, r.useRef)(null),
                        R = (0, r.useRef)(!1),
                        M = (0, r.useCallback)((function(e) {
                            R.current = e, P && P(e)
                        }), [R, P]),
                        z = (0, r.useRef)(!1),
                        q = (0, r.useCallback)((function() {
                            var e, n;
                            null === (e = L.current) || void 0 === e || null === (n = e.parentElement) || void 0 === n || n.click(), null === F || void 0 === F || F((function(e) {
                                return !e
                            }))
                        }), [F]),
                        V = (0, r.useCallback)((function(e, n) {
                            b && (J.current && clearTimeout(J.current), e !== n && (J.current = setTimeout((function() {
                                e === R.current && (z.current = !0, q())
                            }), w)))
                        }), [w, q, b, R]),
                        H = (0, r.useCallback)((function() {
                            b && (z.current || q(), z.current = !1)
                        }), [q, b]);
                    return v ? (0, u.jsx)(u.Fragment, {
                        children: y
                    }) : (0, u.jsx)(o.J, {
                        className: (0, c.yI)("popover-wrapper inline-block", n),
                        children: function(e) {
                            var n = e.open,
                                r = e.close,
                                v = null !== T && void 0 !== T ? T : n,
                                g = F ? function() {
                                    return F(!1)
                                } : r;
                            return (0, u.jsxs)(i.bv, {
                                composable: !0,
                                placement: d[null !== x && void 0 !== x ? x : "top"],
                                strategy: "fixed",
                                zIndex: 40,
                                portal: Z,
                                transform: D,
                                show: v,
                                enter: "transition-all ease-out duration-200",
                                enterFrom: D ? "opacity-0 translate-y-1" : "opacity-0 top-1",
                                enterTo: D ? "opacity-100 translate-y-0" : "opacity-100 top-0",
                                leave: "transition-all ease-out duration-200",
                                leaveFrom: D ? "opacity-100 translate-y-0" : "opacity-100 top-0",
                                leaveTo: D ? "opacity-0 translate-y-1" : "opacity-0 top-1",
                                offset: k,
                                shift: k,
                                flip: {
                                    crossAxis: !1,
                                    padding: k
                                },
                                arrow: k,
                                children: [(0, u.jsx)(l, {
                                    open: v,
                                    onVisibilityChange: M
                                }), (0, u.jsxs)("div", {
                                    onMouseEnter: function() {
                                        return V(v, !0)
                                    },
                                    onMouseLeave: function() {
                                        return V(v, !1)
                                    },
                                    children: [(0, u.jsx)(i.bv.Reference, {
                                        children: (0, u.jsx)(o.J.Button, {
                                            as: "div",
                                            className: t,
                                            onClick: H,
                                            children: (0, u.jsx)("div", {
                                                ref: L,
                                                children: y
                                            })
                                        })
                                    }), (0, u.jsx)(i.bv.Content, {
                                        children: (0, u.jsxs)(o.J.Panel, {
                                            as: "div",
                                            className: (0, c.yI)("z-modal relative w-max rounded md:block", s.Cj.bgPaper, s.eq.dropdown, {
                                                hidden: !h
                                            }, p),
                                            onClick: E ? g : a.Z,
                                            children: [N && O > 0 && (0, u.jsx)(i.bv.Arrow, {
                                                className: "absolute",
                                                offset: O / 2 + .5,
                                                children: (0, u.jsx)("div", {
                                                    className: (0, c.yI)("rotate-45 rounded-[1px]", s.Cj.bgPaper, f),
                                                    style: {
                                                        width: O,
                                                        height: O
                                                    }
                                                })
                                            }), (0, u.jsx)("div", {
                                                className: (0, c.yI)("relative rounded px-4 py-3", m),
                                                children: A
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }
                    })
                }
        },
        81693: function(e, n, t) {
            "use strict";
            t.d(n, {
                Q: function() {
                    return a
                }
            });
            t(70748), t(91518), t(81248), t(17519), t(5348);
            var r = t(80388),
                o = t(90074),
                i = t(11288),
                a = function(e) {
                    return (0, o.MUk)(i.f6, {
                        titleSlug: e
                    }, {
                        enabled: !!e,
                        select: function(e) {
                            if (!e.question) return null;
                            var n = e.question,
                                t = n.questionId,
                                r = n.questionFrontendId,
                                o = n.questionTitle,
                                i = n.enableRunCode,
                                a = n.enableTestMode,
                                s = n.sampleTestCase,
                                l = n.exampleTestcases,
                                u = n.jsonExampleTestcases,
                                d = n.metaData;
                            return {
                                questionId: t || "",
                                questionFrontendId: r || "",
                                questionTitle: o || "",
                                enableDebugger: !0,
                                enableRunCode: i || !1,
                                enableSubmit: !0,
                                enableTestMode: a || !1,
                                exampleTestcaseList: c(s || "", d || "", l || "", u),
                                metaData: d || ""
                            }
                        }
                    })
                };

            function s(e, n) {
                try {
                    return JSON.parse(e || "")
                } catch (t) {
                    return n
                }
            }

            function c(e, n, t, o) {
                var i, a = s(n, {});
                if (o) {
                    var c = s(o, []);
                    if (c.length > 0) return c
                }
                t || (t = e);
                var l = a.systemdesign ? 2 : (null === (i = a.params) || void 0 === i ? void 0 : i.length) || 1,
                    u = t.trim().split("\n");
                return (0, r.Z)(u, l).map((function(e) {
                    return e.join("\n")
                }))
            }
        },
        31945: function(e, n, t) {
            "use strict";
            t.d(n, {
                d: function() {
                    return c
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var r = t(4676),
                o = t(64386),
                i = t(11754);

            function a(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? a(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var c = o.forwardRef((function(e, n) {
                return (0, i.jsx)("svg", s(s({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: n
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        45061: function(e, n, t) {
            "use strict";
            t.d(n, {
                A: function() {
                    return c
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var r = t(4676),
                o = t(64386),
                i = t(11754);

            function a(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? a(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var c = o.forwardRef((function(e, n) {
                return (0, i.jsx)("svg", s(s({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: n
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M18.97 12.871l-12.96 7.29a1 1 0 01-1.49-.87V4.71a1 1 0 011.49-.872l12.96 7.29a1 1 0 010 1.743z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        81710: function(e, n, t) {
            "use strict";
            t.d(n, {
                t: function() {
                    return c
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var r = t(4676),
                o = t(64386),
                i = t(11754);

            function a(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? a(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var c = o.forwardRef((function(e, n) {
                return (0, i.jsx)("svg", s(s({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: n
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4 7.987l2.09-1.995a8.274 8.274 0 017.76-2.282c2.801.644 5.081 2.704 6.04 5.456.183.529-.09 1.11-.61 1.297a.996.996 0 01-1.276-.619 6.4 6.4 0 00-4.595-4.151c-2.131-.49-4.36.165-5.928 1.758l-1.956 1.87h2.384c.552 0 1 .454 1 1.016 0 .561-.448 1.016-1 1.016H3c-.552 0-1-.455-1-1.016v-4.99c0-.562.448-1.017 1-1.017s1 .455 1 1.016v2.64zm16 8.026l-2.09 1.995a8.274 8.274 0 01-7.76 2.282c-2.801-.644-5.081-2.704-6.04-5.456-.183-.529.09-1.11.61-1.297a.996.996 0 011.276.619c.73 2.094 2.464 3.661 4.595 4.151 2.131.49 4.36-.165 5.928-1.758l1.956-1.87h-2.384c-.552 0-1-.454-1-1.016 0-.561.448-1.016 1-1.016H21c.552 0 1 .455 1 1.016v4.99c0 .562-.448 1.017-1 1.017s-1-.455-1-1.016v-2.64z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        93141: function(e, n, t) {
            "use strict";
            t.d(n, {
                L: function() {
                    return c
                }
            });
            t(78464), t(29092), t(70748), t(91518), t(96543), t(62217), t(63306);
            var r = t(4676),
                o = t(64386),
                i = t(11754);

            function a(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? a(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var c = o.forwardRef((function(e, n) {
                return (0, i.jsx)("svg", s(s({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    ref: n
                }, e), {}, {
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M12 13.5a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1zm0 3a1 1 0 110-2 1 1 0 010 2zm0 5.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z",
                        clipRule: "evenodd"
                    })
                }))
            }))
        },
        32724: function(e, n, t) {
            "use strict";
            var r;
            t.d(n, {
                    $: function() {
                        return r
                    }
                }),
                function(e) {
                    e.INIT = "Init", e.NETWORK_ERROR = "Network Error", e.SERVER_ERROR = "Server Error", e.PENDING = "Pending", e.JUDGING = "Judging", e.SLOWDOWN = "Slowdown", e.RUNCODE = "RunCode", e.SUBMIT = "Submit"
                }(r || (r = {}))
        },
        18336: function(e, n, t) {
            "use strict";
            var r;
            t.d(n, {
                    r: function() {
                        return r
                    },
                    tn: function() {
                        return o
                    }
                }),
                function(e) {
                    e.Description = "description", e.Discussion = "discussion", e.Editorial = "editorial", e.Solutions = "solutions", e.Submissions = "submissions"
                }(r || (r = {}));
            var o;
            r.Description, r.Editorial, r.Solutions, r.Submissions, r.Description, r.Discussion, r.Solutions, r.Submissions;
            ! function(e) {
                e.Shell = "shell", e.SystemDesign = "system-design", e.Algorithm = "algorithm", e.Database = "database", e.Frontend = "frontend"
            }(o || (o = {}))
        },
        18112: function(e) {
            e.exports = {
                box: "Box_box__0mKsf",
                mask: "Box_mask__07luv"
            }
        },
        75141: function(e) {
            e.exports = {
                header: "Header_header__CtwcI",
                logo: "Header_logo__frF2X",
                user: "Header_user__4fzjf",
                avatar: "Header_avatar__Ga5nV",
                userInner: "Header_userInner__PEbt0",
                nick: "Header_nick__O_C6d",
                tag: "Header_tag__BCh02",
                icon: "Header_icon__H_hJI",
                premium: "Header_premium__PVj15",
                free: "Header_free__0h4bR",
                close: "Header_close__JeVCt"
            }
        },
        4353: function(e) {
            e.exports = {
                box: "Intro_box__42UhS",
                title: "Intro_title__XkBzy",
                more: "Intro_more__pZa3Q",
                line: "Intro_line__66BYP",
                link: "Intro_link__JLJkY",
                items: "Intro_items__l9axd",
                item: "Intro_item__y0ea6",
                icon: "Intro_icon__U0kiN",
                right1: "Intro_right1__RpfQ2",
                right2: "Intro_right2__K3mZt",
                right3: "Intro_right3__hwUCK",
                right4: "Intro_right4__NvQ8i"
            }
        },
        46167: function(e) {
            e.exports = {
                box: "Agreement_box__ZZ5ib",
                link: "Agreement_link__Crlfj"
            }
        },
        15852: function(e) {
            e.exports = {
                box: "Coupon_box__EkqgP",
                icon: "Coupon_icon___H7ys",
                title: "Coupon_title__S0nZJ",
                count: "Coupon_count__TI1b5"
            }
        },
        14816: function(e) {
            e.exports = {
                box: "CouponDialogue_box__TwQeY",
                item: "CouponDialogue_item__hxL8m"
            }
        },
        64477: function(e) {
            e.exports = {
                box: "DetailTip_box__1jAeX",
                content: "DetailTip_content__9gZ4H",
                arrow: "DetailTip_arrow__V3iZE",
                arrowContent: "DetailTip_arrowContent__h_iuo",
                cursor: "DetailTip_cursor__xJ7aE",
                inner: "DetailTip_inner__vwkim",
                title: "DetailTip_title__ck8nu",
                main: "DetailTip_main__D4rsT",
                days: "DetailTip_days___O7Gx",
                price: "DetailTip_price__9H0Gl",
                endTime: "DetailTip_endTime__lgK_Q"
            }
        },
        72197: function(e) {
            e.exports = {
                box: "Gift_box__UjbI8",
                title: "Gift_title__oEDmn",
                list: "Gift_list__7W_wS",
                item: "Gift_item__MFW75",
                name: "Gift_name__Ym8WC"
            }
        },
        32674: function(e) {
            e.exports = {
                line: "Line_line__9GBBH"
            }
        },
        3887: function(e) {
            e.exports = {
                box: "MoneyDetail_box___68s5",
                unit: "MoneyDetail_unit__gRJO3",
                money: "MoneyDetail_money__2Gtj7",
                originalPrice: "MoneyDetail_originalPrice__xpeVb",
                detail: "MoneyDetail_detail__gtQkI",
                locator: "MoneyDetail_locator__Hqj46"
            }
        },
        67136: function(e) {
            e.exports = {
                box: "OrderDetail_box__Np5_x",
                left: "OrderDetail_left__Bu6iw",
                right: "OrderDetail_right__AeVLd"
            }
        },
        79688: function(e) {
            e.exports = {
                box: "Pay_box__tHAzH",
                right: "Pay_right__fVimP"
            }
        },
        64745: function(e) {
            e.exports = {
                box: "PayMethod_box__1bSbc",
                text: "PayMethod_text__naSH5",
                bold: "PayMethod_bold__yGI_n"
            }
        },
        29247: function(e) {
            e.exports = {
                box: "TipRefresh_box___BgyH",
                icon: "TipRefresh_icon__1y8K_"
            }
        },
        45508: function(e) {
            e.exports = {
                box: "Consecutive_box__iT8S2",
                off: "Consecutive_off__pcOMj",
                on: "Consecutive_on__VAaEE",
                title: "Consecutive_title__K__B_"
            }
        },
        83161: function(e) {
            e.exports = {
                multi: "Item30_multi__WSeb0",
                child: "Item30_child__jjMpp",
                line: "Item30_line__kSs3B"
            }
        },
        71919: function(e) {
            e.exports = {
                best: "Item365_best__koJug"
            }
        },
        18034: function(e) {
            e.exports = {
                price: "Price_price__jeYkN",
                on: "Price_on__3_cKW",
                off: "Price_off__zum0b",
                unit: "Price_unit__VNpaj",
                value: "Price_value__WagVa"
            }
        },
        9121: function(e) {
            e.exports = {
                box: "Sku_box__3c1Sb",
                item: "Sku_item__Obmax",
                active: "Sku_active__qHxVv",
                content: "Sku_content__61ob8",
                sku365: "Sku_sku365__atT2G",
                sku90: "Sku_sku90__qXtX3",
                sku30: "Sku_sku30__BFLPT",
                days: "Sku_days__JAhuu",
                average: "Sku_average__vICFW"
            }
        },
        29082: function(e) {
            e.exports = {
                box: "Toggle_box__DHiW_",
                disabled: "Toggle_disabled__GnESS",
                inner: "Toggle_inner__49M_c",
                on: "Toggle_on__yH5Iq"
            }
        },
        33745: function(e) {
            e.exports = {
                box: "Student_box__sOiKU",
                icon: "Student_icon__fBh3X",
                content: "Student_content__NSamf",
                title: "Student_title__nFxlg",
                desc: "Student_desc__ZT2LL",
                link: "Student_link__4_dOF"
            }
        },
        51874: function(e, n, t) {
            var r = t(14322),
                o = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (n = e.exports = r.locals || {})._getContent = function() {
                return o
            }, n._getCss = function() {
                return "" + r
            }
        },
        46294: function(e, n, t) {
            var r = t(89270),
                o = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (n = e.exports = r.locals || {})._getContent = function() {
                return o
            }, n._getCss = function() {
                return "" + r
            }
        },
        11421: function(e, n, t) {
            var r = t(79403),
                o = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (n = e.exports = r.locals || {})._getContent = function() {
                return o
            }, n._getCss = function() {
                return "" + r
            }
        },
        26991: function(e, n, t) {
            var r = t(97045),
                o = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (n = e.exports = r.locals || {})._getContent = function() {
                return o
            }, n._getCss = function() {
                return "" + r
            }
        }
    }
]);