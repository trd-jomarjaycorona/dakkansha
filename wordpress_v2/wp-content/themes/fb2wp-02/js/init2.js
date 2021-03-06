(function (b) {
    var a = {
            fadeInSpeed       : 1000,
            fullScreen        : true,
            sectionTransitions: true
        };
    skel.init({
        breakpoints: {
            max   : {
                containers: 1024,
                grid      : {
                    gutters: 40
                },
                href      : wp_template_directory + "/css/style.css",
                range     : "*",
                viewport  : {
                    scalable: false
                }
            },
            mobile: {
                containers: "100%",
                grid      : {
                    gutters: 20
                },
                href      : wp_template_directory + "/css/style-mobile.css",
                range     : "-1024"
            }
        },
        reset      : "full"
    });
    b(function () {
        var d = b(window),
            e = b("body"),
            g = b("#wrapper"),
            c = b("#header"),
            f = g.add(c),
            h = false;
        if (skel.vars.IEVersion < 10) {
            a.sectionTransitions = false
        }
        if (skel.vars.isTouch) {
            a.sectionTransitions = false;
            e.addClass("touch")
        }
        f.addClass("is-loading").fadeTo(0, 0.0001);
        d.load(function () {
            window.setTimeout(function () {
                f.fadeTo(a.fadeInSpeed, 1, function () {
                    f.fadeTo(0, 1)
                })
            }, a.fadeInSpeed)
        });
        var k = b("form");
        if (k.length > 0) {
            k.find(".form-button-submit").on("click", function () {
                b(this).parents("form").submit();
                return false
            });
            if (skel.vars.IEVersion < 10) {
                b.fn.n33_formerize = function () {
                    var m = new Array(),
                        l = b(this);
                    l.find("input[type=text],textarea").each(function () {
                        var n = b(this);
                        if (n.val() == "" || n.val() == n.attr("placeholder")) {
                            n.addClass("formerize-placeholder");
                            n.val(n.attr("placeholder"))
                        }
                    }).blur(function () {
                        var n = b(this);
                        if (n.attr("name").match(/_fakeformerizefield$/)) {
                            return
                        }
                        if (n.val() == "") {
                            n.addClass("formerize-placeholder");
                            n.val(n.attr("placeholder"))
                        }
                    }).focus(function () {
                        var n = b(this);
                        if (n.attr("name").match(/_fakeformerizefield$/)) {
                            return
                        }
                        if (n.val() == n.attr("placeholder")) {
                            n.removeClass("formerize-placeholder");
                            n.val("")
                        }
                    });
                    l.find("input[type=password]").each(function () {
                        var o = b(this);
                        var n = b(b("<div>").append(o.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, "type=text"));
                        if (o.attr("id") != "") {
                            n.attr("id", o.attr("id") + "_fakeformerizefield")
                        }
                        if (o.attr("name") != "") {
                            n.attr("name", o.attr("name") + "_fakeformerizefield")
                        }
                        n.addClass("formerize-placeholder").val(n.attr("placeholder")).insertAfter(o);
                        if (o.val() == "") {
                            o.hide()
                        } else {
                            n.hide()
                        }
                        o.blur(function (q) {
                            q.preventDefault();
                            var r = b(this);
                            var p = r.parent().find("input[name=" + r.attr("name") + "_fakeformerizefield]");
                            if (r.val() == "") {
                                r.hide();
                                p.show()
                            }
                        });
                        n.focus(function (q) {
                            q.preventDefault();
                            var p = b(this);
                            var r = p.parent().find("input[name=" + p.attr("name").replace("_fakeformerizefield", "") + "]");
                            p.hide();
                            r.show().focus()
                        });
                        n.keypress(function (p) {
                            p.preventDefault();
                            n.val("")
                        })
                    });
                    l.submit(function () {
                        b(this).find("input[type=text],input[type=password],textarea").each(function (n) {
                            var o = b(this);
                            if (o.attr("name").match(/_fakeformerizefield$/)) {
                                o.attr("name", "")
                            }
                            if (o.val() == o.attr("placeholder")) {
                                o.removeClass("formerize-placeholder");
                                o.val("")
                            }
                        })
                    }).bind("reset", function (n) {
                        n.preventDefault();
                        b(this).find("select").val(b("option:first").val());
                        b(this).find("input,textarea").each(function () {
                            var p = b(this);
                            var o;
                            p.removeClass("formerize-placeholder");
                            switch (this.type) {
                            case "submit":
                            case "reset":
                                break;
                            case "password":
                                p.val(p.attr("defaultValue"));
                                o = p.parent().find("input[name=" + p.attr("name") + "_fakeformerizefield]");
                                if (p.val() == "") {
                                    p.hide();
                                    o.show()
                                } else {
                                    p.show();
                                    o.hide()
                                }
                                break;
                            case "checkbox":
                            case "radio":
                                p.attr("checked", p.attr("defaultValue"));
                                break;
                            case "text":
                            case "textarea":
                                p.val(p.attr("defaultValue"));
                                if (p.val() == "") {
                                    p.addClass("formerize-placeholder");
                                    p.val(p.attr("placeholder"))
                                }
                                break;
                            default:
                                p.val(p.attr("defaultValue"));
                                break
                            }
                        });
                        window.setTimeout(function () {
                            for (x in m) {
                                m[x].trigger("formerize_sync")
                            }
                        }, 10)
                    });
                    return l
                };
                k.n33_formerize()
            }
            k.find(".select select").on("focus", function () {
                b(this).parent().addClass("focus")
            }).on("blur", function () {
                b(this).parent().removeClass("focus")
            })
        }
        if (skel.vars.IEVersion < 9) {
            b(":last-child").addClass("last-child")
        }
        b(".gallery").poptrox({
            baseZIndex            : 10001,
            overlayColor          : "#1f2328",
            overlayOpacity        : 0.65,
            popupLoaderText       : "",
            useBodyOverflow       : false,
            usePopupCaption       : true,
            usePopupDefaultStyling: false,
            usePopupEasyClose     : false,
            usePopupNav           : true,
            windowMargin          : (skel.isActive("mobile") ? 5 : 50)
        });
        if (a.sectionTransitions) {
            b(".main.style1").scrollwatch({
                anchor: "center",
                delay : 50,
                off   : function (l) {
                    l.addClass("inactive")
                },
                on    : function (l) {
                    l.removeClass("inactive")
                },
                range : 0.5
            });
            b(".main.style2").scrollwatch({
                anchor: "center",
                delay : 50,
                init  : function (l) {
                    l.addClass("inactive")
                },
                off   : function (l) {
                    l.addClass("inactive")
                },
                on    : function (l) {
                    l.removeClass("inactive")
                },
                range : 0.5
            });
            b("#work").scrollwatch({
                anchor: "center",
                delay : 25,
                init  : function (l) {
                    l.find(".row.images").addClass("inactive")
                },
                off   : function (l) {
                    var o = l.find(".row.images"),
                        m = o.length,
                        p = 0;
                    o.each(function () {
                        var n = b(this);
                        window.setTimeout(function () {
                            n.addClass("inactive")
                        }, 100 * (m - p++))
                    })
                },
                on    : function (l) {
                    var o = l.find(".row.images"),
                        m = o.length,
                        p = 0;
                    o.each(function () {
                        var n = b(this);
                        window.setTimeout(function () {
                            n.removeClass("inactive")
                        }, 100 * (m - p++))
                    })
                },
                range : 0.6
            });
            b("#contact").scrollwatch({
                anchor: "center",
                delay : 25,
                init  : function (l) {
                    l.addClass("inactive")
                },
                off   : function (l) {
                    l.addClass("inactive")
                },
                on    : function (l) {
                    l.removeClass("inactive")
                },
                range : 0.5
            })
        }
        skel.change(function () {
            if (skel.isActive("mobile")) {
                e.addClass("touch")
            } else {
                if (!skel.vars.isTouch) {
                    e.removeClass("touch")
                }
            }
            if (a.sectionTransitions) {
                if (skel.isActive("mobile")) {
                    b(".main.style1").scrollwatchSuspend();
                    b(".main.style2").scrollwatchSuspend();
                    b("#work").scrollwatchSuspend();
                    b("#contact").scrollwatchSuspend()
                } else {
                    b(".main.style1").scrollwatchResume();
                    b(".main.style2").scrollwatchResume();
                    b("#work").scrollwatchResume();
                    b("#contact").scrollwatchResume()
                }
            }
        });
        var j,
            i;
        d.resize(function () {
            window.clearTimeout(j);
            j = window.setTimeout(function () {
                b("a[href^=#]").fadeIn(1000);
                if (a.fullScreen && !skel.isActive("mobile")) {
                    b(".fullscreen").each(function () {
                        var n = b(this);
                        var m = n.children(".content");
                        var l = Math.max(100, Math.round((d.height() - m.outerHeight() - c.outerHeight()) / 2) + 1);
                    })
                } else {
                    b(".fullscreen").css("padding-top", "").css("padding-bottom", "")
                }
                window.setTimeout(function () {
                    d.trigger("scroll")
                }, 0)
            }, 100)
        });
        d.load(function () {
            d.trigger("resize").trigger("scroll")
        })
    })
})(jQuery);