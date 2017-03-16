;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jianpanqiehuandaxiaoxie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M959.12648 545.850969 529.556864 115.611088c-9.695826-9.720386-25.40767-9.720386-35.103496 0L64.884776 545.850969c-27.371394 27.421536-7.980765 74.259284 30.703279 74.259284l193.391569 0 0 229.962485c0 37.763069 30.604018 68.367087 68.367087 68.367087l310.759673 0c37.763069 0 68.367087-30.604018 68.367087-68.367087L736.473471 620.110253l191.94973 0C967.106222 620.110253 986.473315 573.247946 959.12648 545.850969z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jianpanshanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M762.215762 224.451982 441.650769 224.451982c-36.433794 0-71.322395 14.82873-96.613408 41.076534L155.201781 462.451514c-26.211988 26.232454-26.211988 68.771293 0 95.002724l189.835579 196.922998c25.306362 26.248827 60.179614 41.077557 96.612385 41.077557l320.564993 0c74.142627 0 134.25368-60.156078 134.25368-134.350894l0.001023-302.285674C896.469442 284.606013 836.357366 224.451982 762.215762 224.451982zM848.221578 661.089573c0 47.458895-38.581714 86.067214-86.005816 86.067214L441.650769 747.156788c-23.209608 0-45.782719-9.589402-61.891605-26.316366L189.923584 523.918447l-0.301875-0.319272-0.318248-0.302899c-4.816702-4.819772-5.538133-10.44591-5.538133-13.368472 0-2.922563 0.721431-8.547677 5.538133-13.366426l0.318248-0.302899 0.301875-0.319272 189.835579-196.921975c16.108886-16.72594 38.681998-26.316366 61.891605-26.316366l320.564993 0c47.425126 0 86.005816 38.60832 86.005816 86.067214L848.221578 661.089573zM712.050222 354.09976l-118.959346 119.043257L474.132554 354.09976l-41.986253 42.016953 118.959346 119.043257L432.146301 634.203226l41.986253 42.016953 118.959346-119.043257 118.959346 119.043257 41.986253-42.016953-118.959346-119.043257 118.959346-119.043257L712.050222 354.09976z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuzijianpanshanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M785.900158 385.48279l-14.251854-14.251854a20.311026 20.311026 0 0 0-28.589049 0L622.899908 491.048921 502.825902 371.230936a20.311026 20.311026 0 0 0-28.589049 0l-14.337195 14.251854a20.311026 20.311026 0 0 0 0 28.589049l120.074006 119.817985-119.476623 119.135261a20.311026 20.311026 0 0 0 0 28.58905l14.251855 14.337194a20.311026 20.311026 0 0 0 28.589049 0l119.476623-119.220601 119.476623 119.220601a20.311026 20.311026 0 0 0 28.589049 0l14.251854-14.337194a20.311026 20.311026 0 0 0 0-28.58905L665.655471 533.889824l120.074006-119.732644a20.055005 20.055005 0 0 0 0.170681-28.67439z m59.31161-229.139095l-387.018919 0.853405s-96.178682-9.302109-146.444203 43.608967L22.785899 489.768814c-28.162347 28.162347-29.442454 66.906909-1.365447 95.069256l292.035003 283.415618c38.232519 42.755563 143.115926 42.755563 143.115926 42.755563l388.555046 1.109426a177.849487 177.849487 0 0 0 177.849488-177.849488V334.193183a177.764147 177.764147 0 0 0-177.764147-177.849488z m111.113259 555.736978c0 71.941995-40.28069 133.387116-111.625302 133.387116-38.061838 0-365.171764-0.938745-365.171764-0.938745s-76.209017 9.131428-123.316943-43.523627L111.710643 578.693558C87.985999 555.736978 61.27444 546.690891 89.436786 512.04267L357.576465 266.176848c44.974415-44.974415 109.747812-43.096925 109.747812-43.096925h377.887491c64.176015 0 111.113259 63.578632 111.113259 133.387116v355.613634z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)