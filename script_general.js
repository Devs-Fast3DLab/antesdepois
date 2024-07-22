(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"propagateClick":false,"gap":10,"scrollBarMargin":2,"minHeight":0,"class":"Player","id":"rootPlayer","start":"this.init(); this.playList_D5E24741_DADC_BAD6_41E4_3777057E539B.set('selectedIndex', 0); this.playList_D5E2A741_DADC_BAD6_41D4_ACF4803464CE.set('selectedIndex', 0)","minWidth":0,"backgroundColor":["#FFFFFF"],"data":{"defaultLocale":"pt","textToSpeechConfig":{"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"pitch":1,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false},"name":"Player619","locales":{"pt":"locale/pt.txt"},"history":{}},"hash": "77292f99d8c2f86eeaafcdf855ced5b2e69478b76dda21210264d81cc978be54", "definitions": [{"horizontalAlign":"center","propagateClick":false,"gap":10,"scrollBarMargin":2,"minHeight":0,"class":"Container","id":"Container_DBE3F93E_CB2F_C9C8_41CB_5672700B2BE7","overflow":"scroll","minWidth":0,"backgroundColor":[],"left":"47%","data":{"name":"Separator"},"top":0,"bottom":0,"width":"6%","scrollBarColor":"#000000","children":["this.Container_DBE2093E_CB2F_C9C8_41DC_FA0C70FADACE"],"backgroundColorRatios":[],"contentOpaque":true,"layout":"horizontal","cursor":"hand"},{"propagateClick":false,"gap":10,"scrollBarMargin":2,"minHeight":0,"class":"Container","id":"SplitViewer_DBA61237_CB2F_DBD8_4192_98E596FC7B41","overflow":"scroll","minWidth":0,"backgroundColor":[],"left":"0%","data":{"name":"SplitViewer"},"top":"0%","init":"this._initSplitViewer(event.source)","width":"100%","scrollBarColor":"#000000","children":["this.Container_DB87B936_CB2F_C9D8_41E5_8E1D548BB68A","this.Container_DB941937_CB2F_C9D8_41CD_962D620C9E65","this.Container_DBE3F93E_CB2F_C9C8_41CB_5672700B2BE7"],"height":"100%","backgroundColorRatios":[],"layout":"absolute"},{"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"minHeight":50,"class":"ViewerArea","toolTipFontSize":"1.11vmin","playbackBarBottom":5,"minWidth":100,"toolTipPaddingBottom":4,"playbackBarBorderSize":0,"left":0,"toolTipPaddingTop":4,"firstTransitionDuration":0,"toolTipFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"data":{"name":"LeftViewer"},"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","progressBottom":10,"subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressHeight":2,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","progressRight":"33%","progressOpacity":0.7,"toolTipPaddingRight":6,"progressBorderRadius":2,"progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","id":"ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386","subtitlesTop":0,"toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"subtitlesGap":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"top":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"height":"100%","playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","width":"100%","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadow":true},{"class":"PhotoAlbumPlayer","viewerArea":"this.ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FB","id":"ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FBPhotoAlbumPlayer"},{"data":{"label":"Photo Album album_C738B08C_CB16_58C8_41E2_01038D759BCA_0"},"playList":"this.album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_AlbumPlayList","label":trans('album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5.label'),"id":"album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5","class":"PhotoAlbum","thumbnailUrl":"media/album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_t.png"},{"class":"PlayList","items":[{"class":"PhotoAlbumPlayListItem","media":"this.album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5","player":"this.ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FBPhotoAlbumPlayer"}],"id":"playList_D5E2A741_DADC_BAD6_41D4_ACF4803464CE"},{"maxWidth":40,"scrollBarMargin":2,"minHeight":0,"class":"Container","backgroundImageUrl":"skin/Container_DBE2093E_CB2F_C9C8_41DC_FA0C70FADACE.png","minWidth":2,"id":"Container_DBE2093E_CB2F_C9C8_41DC_FA0C70FADACE","data":{"name":"SeparatorVisible"},"width":"40%","scrollBarColor":"#000000","height":"100%","gap":10,"layout":"absolute","cursor":"hand","overflow":"scroll"},{"data":{"label":"album_C738B08C_CB16_58C8_41E2_01038D759BCA_0"},"width":3599,"height":2000,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_0.png"}]},"label":trans('album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_0.label'),"class":"Photo","thumbnailUrl":"media/album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_0_t.png","id":"album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_0"},{"propagateClick":false,"paddingBottom":10,"scrollBarMargin":2,"minHeight":0,"class":"HTMLText","id":"HTMLText_DB9A4939_CB2F_C9C8_41D4_CA4A2AACF6E0","minWidth":0,"backgroundColor":["#FFFFFF"],"left":20,"data":{"name":"LeftDescription"},"paddingLeft":10,"paddingRight":10,"top":20,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","width":100,"scrollBarColor":"#000000","height":70,"backgroundColorRatios":[0],"visible":false,"backgroundOpacity":0.6,"html":trans('HTMLText_DB9A4939_CB2F_C9C8_41D4_CA4A2AACF6E0.html'),"paddingTop":10},{"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"minHeight":50,"class":"ViewerArea","toolTipFontSize":"1.11vmin","playbackBarBottom":5,"minWidth":100,"toolTipPaddingBottom":4,"playbackBarBorderSize":0,"data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"firstTransitionDuration":0,"toolTipFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","progressBottom":10,"subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressHeight":2,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","progressRight":"33%","progressOpacity":0.7,"toolTipPaddingRight":6,"progressBorderRadius":2,"progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","toolTipTextShadowColor":"#000000","subtitlesTop":0,"id":"MainViewer","toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"subtitlesGap":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"subtitlesBottom":50,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"height":"100%","playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","width":"100%","playbackBarHeadShadow":true},{"class":"PlayList","id":"mainPlayList"},{"propagateClick":false,"paddingBottom":10,"scrollBarMargin":2,"minHeight":0,"class":"HTMLText","id":"HTMLText_DBE3A93C_CB2F_C9C8_41E4_B30B5852086B","minWidth":0,"backgroundColor":["#FFFFFF"],"data":{"name":"RightDescription"},"right":20,"paddingLeft":10,"paddingRight":10,"top":20,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","width":100,"scrollBarColor":"#000000","height":70,"backgroundColorRatios":[0],"visible":false,"backgroundOpacity":0.6,"html":trans('HTMLText_DBE3A93C_CB2F_C9C8_41E4_B30B5852086B.html'),"paddingTop":10},{"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"minHeight":50,"class":"ViewerArea","toolTipFontSize":"1.11vmin","playbackBarBottom":5,"minWidth":100,"toolTipPaddingBottom":4,"playbackBarBorderSize":0,"data":{"name":"RightViewer"},"toolTipPaddingTop":4,"firstTransitionDuration":0,"toolTipFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"right":0,"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","progressBottom":10,"subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressHeight":2,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","progressRight":"33%","progressOpacity":0.7,"toolTipPaddingRight":6,"progressBorderRadius":2,"progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","id":"ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FB","subtitlesTop":0,"toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"subtitlesGap":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"top":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"height":"100%","playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","width":"100%","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadow":true},{"class":"PhotoAlbumPlayer","viewerArea":"this.ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386","id":"ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386PhotoAlbumPlayer"},{"class":"PlayList","items":[{"class":"PhotoAlbumPlayListItem","media":"this.album_C7AFC88F_CB16_48C8_41AC_6E489C326245","player":"this.ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386PhotoAlbumPlayer"}],"id":"playList_D5E24741_DADC_BAD6_41E4_3777057E539B"},{"data":{"label":"Antes.d01ac54696b2888ee06e"},"width":1062,"height":630,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0.png"}]},"label":trans('album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0.label'),"class":"Photo","thumbnailUrl":"media/album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0_t.png","id":"album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0"},{"data":{"label":"Photo Album Antes.d01ac54696b2888ee06e"},"playList":"this.album_C7AFC88F_CB16_48C8_41AC_6E489C326245_AlbumPlayList","label":trans('album_C7AFC88F_CB16_48C8_41AC_6E489C326245.label'),"id":"album_C7AFC88F_CB16_48C8_41AC_6E489C326245","class":"PhotoAlbum","thumbnailUrl":"media/album_C7AFC88F_CB16_48C8_41AC_6E489C326245_t.png"},{"propagateClick":false,"gap":10,"scrollBarMargin":2,"minHeight":0,"class":"Container","id":"Container_DB87B936_CB2F_C9D8_41E5_8E1D548BB68A","overflow":"hidden","minWidth":0,"backgroundColor":[],"left":0,"data":{"name":"LeftContainer"},"top":0,"bottom":0,"width":"50%","scrollBarColor":"#000000","children":["this.ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386","this.HTMLText_DB9A4939_CB2F_C9C8_41D4_CA4A2AACF6E0"],"backgroundColorRatios":[],"layout":"absolute"},{"propagateClick":false,"gap":10,"scrollBarMargin":2,"minHeight":0,"class":"Container","id":"Container_DB941937_CB2F_C9D8_41CD_962D620C9E65","overflow":"hidden","minWidth":0,"backgroundColor":[],"data":{"name":"RightContainer"},"right":0,"top":0,"bottom":0,"width":"50%","scrollBarColor":"#000000","children":["this.ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FB","this.HTMLText_DBE3A93C_CB2F_C9C8_41E4_B30B5852086B"],"backgroundColorRatios":[],"layout":"absolute"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_outside"},"media":"this.album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_0"}],"id":"album_D5ABB51B_DAD4_BE6A_41AA_D97B75846AD5_AlbumPlayList"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_outside"},"media":"this.album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0"}],"id":"album_C7AFC88F_CB16_48C8_41AC_6E489C326245_AlbumPlayList"}],"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"getMediaByTags":TDV.Tour.Script.getMediaByTags,"translate":TDV.Tour.Script.translate,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openLink":TDV.Tour.Script.openLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"clone":TDV.Tour.Script.clone,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"isPanorama":TDV.Tour.Script.isPanorama,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupImage":TDV.Tour.Script.showPopupImage,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPixels":TDV.Tour.Script.getPixels,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"registerKey":TDV.Tour.Script.registerKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleVR":TDV.Tour.Script.toggleVR,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"disableVR":TDV.Tour.Script.disableVR,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"initQuiz":TDV.Tour.Script.initQuiz,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"shareSocial":TDV.Tour.Script.shareSocial,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"enableVR":TDV.Tour.Script.enableVR,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeJS":TDV.Tour.Script.executeJS,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getOverlays":TDV.Tour.Script.getOverlays,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"mixObject":TDV.Tour.Script.mixObject,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getKey":TDV.Tour.Script.getKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizFinish":TDV.Tour.Script.quizFinish,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"createTween":TDV.Tour.Script.createTween,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizStart":TDV.Tour.Script.quizStart,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startMeasurement":TDV.Tour.Script.startMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"setLocale":TDV.Tour.Script.setLocale,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaByName":TDV.Tour.Script.getMediaByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeech":TDV.Tour.Script.textToSpeech},"children":["this.MainViewer","this.SplitViewer_DBA61237_CB2F_DBD8_4192_98E596FC7B41"],"width":"100%","scrollBarColor":"#000000","height":"100%","backgroundColorRatios":[0],"layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Mon Jul 22 2024