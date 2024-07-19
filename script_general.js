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
var script = {"propagateClick":false,"gap":10,"class":"Player","minHeight":0,"id":"rootPlayer","minWidth":0,"backgroundColor":["#FFFFFF"],"data":{"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false},"name":"Player619","locales":{"pt":"locale/pt.txt"},"history":{}},"children":["this.MainViewer","this.SplitViewer_DBA61237_CB2F_DBD8_4192_98E596FC7B41"],"hash": "1cfd55010e167730e95c3bbf335b8d3f372700323d903c5644776ae1c70aefec", "definitions": [{"id":"playList_D967812C_CB36_59C8_41DC_8B3F6A983D12","items":[{"media":"this.album_C7AFC88F_CB16_48C8_41AC_6E489C326245","class":"PhotoAlbumPlayListItem","player":"this.ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386PhotoAlbumPlayer"}],"class":"PlayList"},{"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","minHeight":50,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"minWidth":100,"toolTipPaddingBottom":4,"left":0,"toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"data":{"name":"LeftViewer"},"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"progressBottom":10,"playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarHeadWidth":6,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressHeight":2,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","progressRight":"33%","progressOpacity":0.7,"toolTipPaddingRight":6,"progressBorderRadius":2,"progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","id":"ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386","subtitlesTop":0,"toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorRatios":[0],"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"top":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"height":"100%","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","width":"100%","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadow":true},{"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","minHeight":50,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"minWidth":100,"toolTipPaddingBottom":4,"data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"progressBottom":10,"playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarHeadWidth":6,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressHeight":2,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","progressRight":"33%","progressOpacity":0.7,"toolTipPaddingRight":6,"progressBorderRadius":2,"progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","toolTipTextShadowColor":"#000000","subtitlesTop":0,"id":"MainViewer","toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorRatios":[0],"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"subtitlesBottom":50,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"height":"100%","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","width":"100%","playbackBarHeadShadow":true},{"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","minHeight":50,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"minWidth":100,"toolTipPaddingBottom":4,"data":{"name":"RightViewer"},"toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"right":0,"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"progressBottom":10,"playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarHeadWidth":6,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressHeight":2,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","progressRight":"33%","progressOpacity":0.7,"toolTipPaddingRight":6,"progressBorderRadius":2,"progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","id":"ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FB","subtitlesTop":0,"toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorRatios":[0],"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"top":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"height":"100%","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","width":"100%","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadow":true},{"propagateClick":false,"gap":10,"class":"Container","minHeight":0,"id":"SplitViewer_DBA61237_CB2F_DBD8_4192_98E596FC7B41","overflow":"scroll","minWidth":0,"backgroundColor":[],"left":"0%","data":{"name":"SplitViewer"},"scrollBarColor":"#000000","scrollBarMargin":2,"top":"0%","init":"this._initSplitViewer(event.source)","width":"100%","children":["this.Container_DB87B936_CB2F_C9D8_41E5_8E1D548BB68A","this.Container_DB941937_CB2F_C9D8_41CD_962D620C9E65","this.Container_DBE3F93E_CB2F_C9C8_41CB_5672700B2BE7"],"height":"100%","backgroundColorRatios":[],"layout":"absolute"},{"propagateClick":false,"gap":10,"class":"Container","minHeight":0,"id":"Container_DB941937_CB2F_C9D8_41CD_962D620C9E65","overflow":"hidden","minWidth":0,"backgroundColor":[],"data":{"name":"RightContainer"},"right":0,"scrollBarColor":"#000000","scrollBarMargin":2,"top":0,"bottom":0,"width":"50%","children":["this.ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FB","this.HTMLText_DBE3A93C_CB2F_C9C8_41E4_B30B5852086B"],"backgroundColorRatios":[],"layout":"absolute"},{"propagateClick":false,"paddingBottom":10,"class":"HTMLText","minHeight":0,"id":"HTMLText_DBE3A93C_CB2F_C9C8_41E4_B30B5852086B","minWidth":0,"backgroundColor":["#FFFFFF"],"data":{"name":"RightDescription"},"right":20,"paddingLeft":10,"scrollBarColor":"#000000","paddingRight":10,"scrollBarMargin":2,"top":20,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","width":100,"height":70,"backgroundColorRatios":[0],"visible":false,"backgroundOpacity":0.6,"html":trans('HTMLText_DBE3A93C_CB2F_C9C8_41E4_B30B5852086B.html'),"paddingTop":10},{"data":{"label":"Antes.d01ac54696b2888ee06e"},"width":1062,"height":630,"image":{"class":"ImageResource","levels":[{"url":"media/album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0.png","class":"ImageResourceLevel"}]},"label":trans('album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0.label'),"class":"Photo","thumbnailUrl":"media/album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0_t.png","id":"album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0"},{"data":{"label":"Photo Album Depois.3d0b184968866c7e07b8"},"playList":"this.album_C738B08C_CB16_58C8_41E2_01038D759BCA_AlbumPlayList","label":trans('album_C738B08C_CB16_58C8_41E2_01038D759BCA.label'),"id":"album_C738B08C_CB16_58C8_41E2_01038D759BCA","class":"PhotoAlbum","thumbnailUrl":"media/album_C738B08C_CB16_58C8_41E2_01038D759BCA_t.png"},{"propagateClick":false,"gap":10,"class":"Container","minHeight":0,"id":"Container_DB87B936_CB2F_C9D8_41E5_8E1D548BB68A","overflow":"hidden","minWidth":0,"backgroundColor":[],"left":0,"data":{"name":"LeftContainer"},"scrollBarColor":"#000000","scrollBarMargin":2,"top":0,"bottom":0,"width":"50%","children":["this.ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386","this.HTMLText_DB9A4939_CB2F_C9C8_41D4_CA4A2AACF6E0"],"backgroundColorRatios":[],"layout":"absolute"},{"data":{"label":"Photo Album Antes.d01ac54696b2888ee06e"},"playList":"this.album_C7AFC88F_CB16_48C8_41AC_6E489C326245_AlbumPlayList","label":trans('album_C7AFC88F_CB16_48C8_41AC_6E489C326245.label'),"id":"album_C7AFC88F_CB16_48C8_41AC_6E489C326245","class":"PhotoAlbum","thumbnailUrl":"media/album_C7AFC88F_CB16_48C8_41AC_6E489C326245_t.png"},{"data":{"label":"Depois.3d0b184968866c7e07b8"},"width":1170,"height":630,"image":{"class":"ImageResource","levels":[{"url":"media/album_C738B08C_CB16_58C8_41E2_01038D759BCA_0.png","class":"ImageResourceLevel"}]},"label":trans('album_C738B08C_CB16_58C8_41E2_01038D759BCA_0.label'),"class":"Photo","thumbnailUrl":"media/album_C738B08C_CB16_58C8_41E2_01038D759BCA_0_t.png","id":"album_C738B08C_CB16_58C8_41E2_01038D759BCA_0"},{"id":"mainPlayList","class":"PlayList"},{"maxWidth":6,"class":"Container","minHeight":0,"id":"Container_DBE2093E_CB2F_C9C8_41DC_FA0C70FADACE","overflow":"scroll","minWidth":2,"shadow":true,"backgroundColor":["#FFFFFF"],"data":{"name":"SeparatorVisible"},"shadowSpread":1,"shadowVerticalLength":0,"shadowColor":"#000000","scrollBarColor":"#000000","scrollBarMargin":2,"shadowOpacity":0.3,"width":"8%","shadowBlurRadius":10,"height":"100%","backgroundColorRatios":[0],"gap":10,"layout":"absolute","cursor":"hand"},{"id":"playList_D966712C_CB36_59C8_41E6_EE2FA7EAA3DA","items":[{"media":"this.album_C738B08C_CB16_58C8_41E2_01038D759BCA","class":"PhotoAlbumPlayListItem","player":"this.ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FBPhotoAlbumPlayer"}],"class":"PlayList"},{"propagateClick":false,"gap":10,"horizontalAlign":"center","class":"Container","minHeight":0,"id":"Container_DBE3F93E_CB2F_C9C8_41CB_5672700B2BE7","overflow":"scroll","minWidth":0,"backgroundColor":[],"left":"47%","data":{"name":"Separator"},"scrollBarColor":"#000000","scrollBarMargin":2,"top":0,"bottom":0,"width":"6%","children":["this.Container_DBE2093E_CB2F_C9C8_41DC_FA0C70FADACE"],"backgroundColorRatios":[],"contentOpaque":true,"layout":"horizontal","cursor":"hand"},{"viewerArea":"this.ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386","class":"PhotoAlbumPlayer","id":"ViewerAreaLabeled_DB99D938_CB2F_C9C8_41D0_99383F1DE386PhotoAlbumPlayer"},{"propagateClick":false,"paddingBottom":10,"class":"HTMLText","minHeight":0,"id":"HTMLText_DB9A4939_CB2F_C9C8_41D4_CA4A2AACF6E0","minWidth":0,"backgroundColor":["#FFFFFF"],"left":20,"data":{"name":"LeftDescription"},"paddingLeft":10,"paddingRight":10,"scrollBarColor":"#000000","scrollBarMargin":2,"top":20,"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","width":100,"height":70,"backgroundColorRatios":[0],"visible":false,"backgroundOpacity":0.6,"html":trans('HTMLText_DB9A4939_CB2F_C9C8_41D4_CA4A2AACF6E0.html'),"paddingTop":10},{"viewerArea":"this.ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FB","class":"PhotoAlbumPlayer","id":"ViewerAreaLabeled_DB986939_CB2F_C9C8_41D8_26C0061639FBPhotoAlbumPlayer"},{"id":"album_C738B08C_CB16_58C8_41E2_01038D759BCA_AlbumPlayList","items":[{"camera":{"class":"PhotoCamera","scaleMode":"fit_outside"},"media":"this.album_C738B08C_CB16_58C8_41E2_01038D759BCA_0","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"},{"id":"album_C7AFC88F_CB16_48C8_41AC_6E489C326245_AlbumPlayList","items":[{"camera":{"class":"PhotoCamera","scaleMode":"fit_outside"},"media":"this.album_C7AFC88F_CB16_48C8_41AC_6E489C326245_0","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"}],"start":"this.init(); this.playList_D967812C_CB36_59C8_41DC_8B3F6A983D12.set('selectedIndex', 0); this.playList_D966712C_CB36_59C8_41E6_EE2FA7EAA3DA.set('selectedIndex', 0)","defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scripts":{"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"clone":TDV.Tour.Script.clone,"setLocale":TDV.Tour.Script.setLocale,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"disableVR":TDV.Tour.Script.disableVR,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initQuiz":TDV.Tour.Script.initQuiz,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playAudioList":TDV.Tour.Script.playAudioList,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"openLink":TDV.Tour.Script.openLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPixels":TDV.Tour.Script.getPixels,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMapLocation":TDV.Tour.Script.setMapLocation,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showPopupImage":TDV.Tour.Script.showPopupImage,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"translate":TDV.Tour.Script.translate,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"init":TDV.Tour.Script.init,"startMeasurement":TDV.Tour.Script.startMeasurement,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"historyGoBack":TDV.Tour.Script.historyGoBack,"executeJS":TDV.Tour.Script.executeJS,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getKey":TDV.Tour.Script.getKey,"existsKey":TDV.Tour.Script.existsKey,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"registerKey":TDV.Tour.Script.registerKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"downloadFile":TDV.Tour.Script.downloadFile,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"toggleVR":TDV.Tour.Script.toggleVR,"unregisterKey":TDV.Tour.Script.unregisterKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"createTween":TDV.Tour.Script.createTween,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"enableVR":TDV.Tour.Script.enableVR,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits},"scrollBarMargin":2,"width":"100%","height":"100%","backgroundColorRatios":[0],"layout":"absolute"};
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
//Generated with v2024.0.4, Fri Jul 19 2024