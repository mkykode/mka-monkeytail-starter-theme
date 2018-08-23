/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_navigation__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_skip_link_focus_fix__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_skip_link_focus_fix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_skip_link_focus_fix__);
// import $ from 'jquery'



window.addEventListener('load', function () {
  return console.log('hi');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.s
 */
;(function () {
  var container, button, menu, links, i, len;

  container = document.getElementById('site-navigation');
  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];
  if (typeof button === 'undefined') {
    return;
  }

  menu = container.getElementsByTagName('ul')[0];

  // Hide menu toggle button if menu is empty and return early.
  if (typeof menu === 'undefined') {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');
  if (menu.className.indexOf('nav-menu') === -1) {
    menu.className += ' nav-menu';
  }

  button.onclick = function () {
    if (container.className.indexOf('toggled') !== -1) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };

  // Get all the link elements within the menu.
  links = menu.getElementsByTagName('a');

  // Each time a menu link is focused or blurred, toggle focus.
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    var self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (self.className.indexOf('nav-menu') === -1) {
      // On li elements toggle the class .focus.
      if (self.tagName.toLowerCase() === 'li') {
        if (self.className.indexOf('focus') !== -1) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */
  ;(function (container) {
    var touchStartFn = void 0;
    var i = void 0;
    var parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

    if ('ontouchstart' in window) {
      touchStartFn = function touchStartFn(e) {
        var menuItem = this.parentNode;
        var i = void 0;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();
          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove('focus');
          }
          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
;(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1);

      var element;

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzdjMDQxODMyODI2MmM1NTcyOGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3NyYy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9zcmMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzPzQwNTAiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJidXR0b24iLCJtZW51IiwibGlua3MiLCJpIiwibGVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsIm9uY2xpY2siLCJyZXBsYWNlIiwibGVuZ3RoIiwidG9nZ2xlRm9jdXMiLCJzZWxmIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyZW50RWxlbWVudCIsInRvdWNoU3RhcnRGbiIsInBhcmVudExpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsIm1lbnVJdGVtIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsInJlbW92ZSIsImFkZCIsImlzSWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaWQiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJlbGVtZW50IiwidGFiSW5kZXgiLCJmb2N1cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzdjMDQxODMyODI2MmM1NTcyOGMiLCIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vc3JjL25hdmlnYXRpb24nXG5pbXBvcnQgJy4vc3JjL3NraXAtbGluay1mb2N1cy1maXgnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gY29uc29sZS5sb2coJ2hpJykpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyIsIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLnNcbiAqL1xuOyhmdW5jdGlvbigpIHtcbiAgdmFyIGNvbnRhaW5lciwgYnV0dG9uLCBtZW51LCBsaW5rcywgaSwgbGVuXG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2aWdhdGlvbicpXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBidXR0b24gPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpWzBdXG4gIGlmICh0eXBlb2YgYnV0dG9uID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgbWVudSA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXVxuXG4gIC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cbiAgaWYgKHR5cGVvZiBtZW51ID09PSAndW5kZWZpbmVkJykge1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgcmV0dXJuXG4gIH1cblxuICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gIGlmIChtZW51LmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpID09PSAtMSkge1xuICAgIG1lbnUuY2xhc3NOYW1lICs9ICcgbmF2LW1lbnUnXG4gIH1cblxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChjb250YWluZXIuY2xhc3NOYW1lLmluZGV4T2YoJ3RvZ2dsZWQnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoJyB0b2dnbGVkJywgJycpXG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSAnIHRvZ2dsZWQnXG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnUuXG4gIGxpbmtzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpXG5cbiAgLy8gRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuICBmb3IgKGkgPSAwLCBsZW4gPSBsaW5rcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUpXG4gICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgb3IgcmVtb3ZlcyAuZm9jdXMgY2xhc3Mgb24gYW4gZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUZvY3VzKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgLy8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuICAgIHdoaWxlIChzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpID09PSAtMSkge1xuICAgICAgLy8gT24gbGkgZWxlbWVudHMgdG9nZ2xlIHRoZSBjbGFzcyAuZm9jdXMuXG4gICAgICBpZiAoc2VsZi50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaScpIHtcbiAgICAgICAgaWYgKHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xKSB7XG4gICAgICAgICAgc2VsZi5jbGFzc05hbWUgPSBzZWxmLmNsYXNzTmFtZS5yZXBsYWNlKCcgZm9jdXMnLCAnJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYgPSBzZWxmLnBhcmVudEVsZW1lbnRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBgZm9jdXNgIGNsYXNzIHRvIGFsbG93IHN1Ym1lbnUgYWNjZXNzIG9uIHRhYmxldHMuXG4gICAqL1xuICA7KGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIGxldCB0b3VjaFN0YXJ0Rm5cbiAgICBsZXQgaVxuICAgIGxldCBwYXJlbnRMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnXG4gICAgKVxuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgdG91Y2hTdGFydEZuID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGVcbiAgICAgICAgbGV0IGlcblxuICAgICAgICBpZiAoIW1lbnVJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMnKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAobWVudUl0ZW0gPT09IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJlbnRMaW5rLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHBhcmVudExpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnRGbiwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9KShjb250YWluZXIpXG59KSgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmlnYXRpb24uanMiLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuOyhmdW5jdGlvbigpIHtcbiAgdmFyIGlzSWUgPSAvKHRyaWRlbnR8bXNpZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cbiAgaWYgKGlzSWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdoYXNoY2hhbmdlJyxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKVxuXG4gICAgICAgIHZhciBlbGVtZW50XG5cbiAgICAgICAgaWYgKCEvXltBLXowLTlfLV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGlmICghL14oPzphfHNlbGVjdHxpbnB1dHxidXR0b258dGV4dGFyZWEpJC9pLnRlc3QoZWxlbWVudC50YWdOYW1lKSkge1xuICAgICAgICAgICAgZWxlbWVudC50YWJJbmRleCA9IC0xXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgfVxufSkoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3NyYy9za2lwLWxpbmstZm9jdXMtZml4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc3R5bGVzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==