/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('china', {
        "type": "FeatureCollection",
        "UTF8Encoding": true,
        "features": [
            {
                "type": "Feature",
                "id": "110000",
                "properties": {
                    "cp": [
                        116.405285,
                        39.904989
                    ],
                    "id": "110000",
                    "name": "北京",
                    "childNum": 16
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@kgn]@@HG@@JI@@oM@@QZÕBYdéoaÉo@VKcĉ\\u»tI¤rđW@@ęBcfi@@E©W@@QG@@u@@ËC[r@@@@@@AJ@@[@@@EA@@@P@@GR@@ed@@@@@@@@ED@@WtÅA]|}oNV@@h@@a VJ@@Zr] XXj¯zV°¯^zâø°ŖT oKªôÐ|¾Gz³V@@÷âV\\hÄfPz¶PnlÄ[VqĘ¢~GZx ÂLjŘKZRyēîzÚSu¶PxÄ@@@¢X SBÐL]Voi¥ªÕ~O¬]È¹Am_ÈLİEþ~CÐtĞSJ©`@ood{[j×kmi^m­c°µ{uS¨BuyB@A@B@lVh¹Co±@@@B@@@A@@mFqVÑeV@@CAAA@@BB©]§{ÓtŧisÇriH»O¼Qp³¡]^{If±i©"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                119616,
                                40567
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "120000",
                "properties": {
                    "cp": [
                        117.190182,
                        39.125596
                    ],
                    "id": "120000",
                    "name": "天津",
                    "childNum": 16
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@ÅNukItćM¥`g¸VØuBØCljELeªN_ŀ_@@T]@@W@@DF@@BF@@u»]Yý¥ÅfċQ§ýËZukęeBĀWÕÓgcåYáFíõa«@[pdv@@m@@ÉnaZsvùaG@@@F@B@A@ÕSe¾ýBy\\yp]àÒD vB@@~@@@¸F´AB@@BAEJ@@SºRuÞpgheWrFClÛ^WnRA¢vplBª²jV`@@vQl§hI@@^Ģª|YÔ@@@\\£®¨d¢KspßtAÈ¢¢aÈLYdrUEn@@@B@@@A@@p²¼r°sLp]JrM¨¡@@AA@@pC@@Q@@]¯J\\q[ÓbÙ_x­@XgD}@@rÙ@@|ik¤{cgtmCrÃfyh`]Pj@@Xz°ZÂKÌm{K½yeBqEçO"
                        ],
                        [
                            "@@iFgrèPJyM"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                120592,
                                40347
                            ]
                        ],
                        [
                            [
                                120633,
                                40319
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "130000",
                "properties": {
                    "cp": [
                        114.502461,
                        38.045474
                    ],
                    "id": "130000",
                    "name": "河北",
                    "childNum": 11
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@÷þ|veV[¦lkĕð¥|¸d´Ajhqi}i©zVdÄ×n¤XĦ´LŌqSÎP~F¾n\\G°ŬŘFpÒWô¬XnFR¼n¬iŠLz~C©Elť`sak±kIĵƎVYnĄmR¤RXvVhÊV^r~zjêbø®äpDîdr~S¶d~¹¢³l©ê@||m|bvÔ@âÆxX|ÂX]oÊM|~zC¤èFf`ÊHb´G~x¢ZVÚÂsAĲSVŘpz@@dT@@DF@@@@@@PF@@PJ@@X@@P@@@RA@@D@@@LL@@F@@@BD@@XnÀH`p[@@^@@@ĮN@@Ê_æVFyF@@H|fE@@ìFòiþdºb{ŪīUª­ww½mLe´}²_heW»¸oØEvxOn¼Dr¹uÜO¡SÒµ¡ċQoÏLs{St}H°Il{ÜYR³²iÇW}hĚnƄEÄwz|ÖlDÖRň_ÎF[TµBfs¿·OAyÕXww^¾UYoO@@ÙDaõ{MÀqam°M£¾cLa¼D¨vhY¡dÌHUsYâPĞE\\fÎ_gB·YVaÉ `zZbËsoP@@BC@@D@@{@@Eg@@RWfy}IsnsuÅUgHsoLgi¥b{ÍDÏ¥óȉ ½@uókÁ»sµ}]qćÁ}b²ÙueZo­KĽr·wTm±aûyÅ½£AħÂWMÿtËĤév@@AE@@CE@@X@@S^@@Ŀ``©MKf NIzrFAzfL¾|ËnÁL¯YWy@@iO^g_ezÄqDsndh£|jl{@@qÚ@@C~Wh®@wÚ`Ôa\\[rI^°@@R@@Do@@BB@@§¢qNIo^K¯t»qDgºkUA@B@A@zAv§T|v¯¶®d]nnjØli\\c|p@pª_IĝTÏs}DýįFÇK`BnÇº^«}P©Öj¦Up^KAÏT¡W@@Ã@OwvµÙTyĔízYQŗLKiÁwY}Hė¡UrÃ\\mkµOOyÃeg [Uøá@@´UHy ½Ï{©óLpŕS¯÷yá°]U¯°yWiWq^Y@@IUb@@g@@UM~p{^ÆBXs@@FC@@@@@@@@fc@@HQ@@@O@@FB@@\\@@@BI@@@@@@\\qÌD@@v@@RH@@ªXF@@ jdeĚA@@ĒXqJ£¼svĊ[dLU@ÊpbêpZcÖARY@@pN@@IJ@@GH@@^mlhAokuB¡QXmÜ]kDqEXfhgovÝQT¹@@IFAB@@BA³·E@@}@@@uACÑ^ßzo[zþAf½ÖTB@A@E@@@H@úbtuYbmÊ@@n@@uc\\o¬@öbîâEæZAå KW§gL¦©ÆKúhX«ñÕ¿BwU¡ĳI¹åU×÷U¿hÛqïVeSÏTÏaċZ×U»RÁċ]cÃÅoÓÙiG{«¦CADBCAW}\\m_ùn@@HeeC^k¥Çn½_³AÇaB¡¹F{uU×ûëjoÇgsÕħPWgEyµa¯ÃULoÝaOf@@S¥]z±C´\\K}¦@@TYNćBÑkY{«UUoV¬h@@gfm¯SE¥£ç_X[¨¯H@aÙL¡n]_ŇS·«NÓ©LUtėI{nOwC@@NhbÏEcvZvÕ|hqiag©{wqBÃqEm¼Dv¡TÌ£J|µXSh~¦FQ\\j¨BæIÈjvoGh¼~g|b}`^Üº`j¢pbÒºX lnÐòĜOdp´UlÉrÉ_Pzxª{Fcöod¾yJHÆÇ¶`´yMÛZSQ{ráPuZÔXmvBÔzTºøLf¾°Ev¬IEh»gtQÖTx~FúàGKXx\\ZUX¤RpWÒrĀBpQvx²E¹vjbM¢¨S¸t|JzPö­QgÃLoBŊeJ¢ƛUqv|`chięriKuÚġj¤l~â|St^d|{Ì@@tt aúlh¢IºfIÀnh¹HqpµkÝlsªXnxvÞgDRÕ£òul"
                        ],
                        [
                            "@@ZcKbÇ¡¡BÇàsto¡L§c¤­[@@@ZÓ©{ġ]@@gJk¨uR@@U_e|J]¢^o´»RPG¼qjtÈŨjÔs¨|ª^AA@@BBDB@@UÒf"
                        ],
                        [
                            "@@k×DA×v·U_h¦ ĈNJsvlÆMhq"
                        ],
                        [
                            "@@WT¦"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                116874,
                                41716
                            ]
                        ],
                        [
                            [
                                120024,
                                41045
                            ]
                        ],
                        [
                            [
                                120612,
                                40322
                            ]
                        ],
                        [
                            [
                                121723,
                                40083
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "140000",
                "properties": {
                    "cp": [
                        112.549248,
                        37.857014
                    ],
                    "id": "140000",
                    "name": "山西",
                    "childNum": 11
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@ëT·ºK~zuÆBtC¬ÌäŦ\\ð`¨¤zð¸\\¦ºńÎKČmÜFLüqnEkkøTÀdj@º]pxÂ[º~]ÎPtďĂPjWRª·xztSbnTbÌ¾¾]oLÚÐApÚêW~bÃr\\¾Đ`tôrxozGªzd÷~]ÓY³æÑ]¸MîflUÔ´pXèìXZÚfZ¤[|\\G´|JjÈ²A~¦¨üBî}¸¦²TÒSdìŲAµ@z}Ad|`ƒEv ²lĄl~qbÄhĮ{xVÜ¾c¸]¬NQ¨tZĜÄ´PŎƒR¤¤B¬xr¸@ÖJ¬}ĸĈÉnAĂ¢ļŬÜXŖtuÉÒAƢ|ĸĄè~¾»R¸¤ÀB¨Z^ dr`øº^vk¤ñÖQhCuÝwWmt©Þk¶lroºGg¿mJ¹e¡Jgùkbss@@|Ëc{]s {T}á£kĢivÙjLĚqjdg{_ruƜVI¡fAŉpÄKh®RõyOIs{T·§N¡iaºu±FwRuoÿAÑqoX£QWVY[WwLHùß}ESwRÕhs¼gFJu«¯Fe½÷KS¹yAÓnuWYÓvâO|qRTÜYzN_³ÈµGÅzI½pcdõ|E©wOyÊ`ÊqVko³PcñěmÏkW¹aÑoi¡¹_]Û~_ah{}»gHpiuJÇå§A[iRE}¥Tg¶WI{¤Ë¢SuCn»JokHjS¼³IfYX±q[__Fbµa½pÙWfya»J~cBDpV£_µs­GZ[­ÃvGIkA]µme¹lÏRIÇ±W{óZ«¯Fû´RĽOĹjoeã@b½csfƃvh»qvGćZħVýcE{ÇyÑ_ZWÛăNsiÁR¥ob«q\\wëf}©é_¹tÏys·W¿xċFÝqx¿mZ"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                113029,
                                35432
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "150000",
                "properties": {
                    "cp": [
                        111.670801,
                        40.818311
                    ],
                    "id": "150000",
                    "name": "内蒙古",
                    "childNum": 12
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@\\ÍEŇ`ÕQCÕky{ÃxƃFęmg~XÈ±jQ´ÛZk|J¯Gs~Tt|ÐKpR¢ČÑ¶TP¢Ûºvq»CPmuw×F ·pX¼gf±`³~Kf¾nxx©®VũĬa|¹cýñjëEFeG{zEEåUÉ`ĭM]@\\_o¿GWmACE@KKC@QBO@WOIOE@@@@@@CEcSoyŗUıTtBÁUÙ¡Y}w³HaÉGe_çE£yD{}ÉNp^ÁWW{ÅwáÓ@aun{{{é@kª¡´}ºµc}TcqíCão­÷éayi}]qÉUguUW£QQănmZƍUJĶ ²lbl_tkŦFªDy}şK«j»mQmEW«óÑXEoūŗH¯m[½}EOTÍŋr³KĥW£ØmcÃyUªjj~rgiB³·c¦{Ėïl k\\¥fU{uøý¹]_÷cq]§Y¿A·£Q½¼ç}ķăơ{ÑBÊsvŕÛWū¡ĻāmBćÊķ«~IÕ@q·«wA££QōƑOÃ³YěsR§«M^·½dÛwUĭ|Ãgrak}kă±uƑF{_cRV|GI |X~ª~jNkbwëM·ÇSğĹKÏMyV_{pmmÃjI{§|ąèćg{´ęĝÉãG¹ºmüµÉ§zÑ`õÅ¹f¹åÙ¥zÉ§½Ãg[{¯tãÑcŃõJ¥ù\\mt«ĖÁehCi§OM}W¶m¦lC|µy±M½Rõ_gNÃ[a¡D}_ó_áûŗa}v¯Eso¹a×~CBUªćj³rñZµoózÍªÕGfªjÉØín­©Nas©H±eÍVƩzď|áÅ¦ĶÔà^Ŏ İ |æĊĮĀfîIzĝ®ð}jXĖs¬}TÉoçd­[eēlĹu^ćěj¥Ëc·Rgu]§ÉÃkP³U±l¡eoNu¥^}o[P[iÏq±om}MÅZºåÁJß½ÅsÕHM³aoōGË`ëQčyēñ¯ƁYÅyƫaǡSW¡đke]ēkċÀŕĄÛ}ƑŖɱàƨNªƒÊuľÐ¥®όȬŶǶľz¢K°b}ÌŉŪv°dÈŁŁJȳ×Ɠímſĭ¯mŁý¹Nȩ¢ędůêďoÑȗ£_đ[Ímþõz]úå|[ŏçËÙąÕć~ß¶ųªåZqvbKzûZI ~àģůyOº¹puwpK¤kþ@ǦŗCïaķ\\Dä³JįpsÀZÁàĹdó°ŕzéØűzƹYVfXÆSǄìøLð¨zò  Ɩä@ɜÖÞKĊŇƄ§ÑDʿpěñ͡XAġ¡o»d³öǍÝbK¥á¢iæĉu¶ËʃğǓéjÅ¤\\ƛĆ˽˼_Ȟưɗώɹ϶őȘքõ̪«̎_͠}Ș]˸sϲäʬW®®т]G̈́×˼ÓȆkÈÁǚǩpO̘ãüdƠQʺĿƼÅǰãϚãǰF˶²Ħ\\Mǳƒ_ȠPðÏȆƖ¼@Ā ǢúŸ¾ɬè˨ĲɤüƢ¦ɠxȄ¤ƌCÖƊDǢUè|ÊFŰr¼mȠJƄwĜ@ gŜ¬Tɠmǐn¶\\ŞòȆÜǞPǪÈö¶ƊĆ¸îE`¦¬T¦¦ǚƲ¦zĪƜ ²lĜGpǂƄĆDºfj²WØõİćÐÏpxēĢcO²ußr[XªĂfbvQÐÂŎÌæÒĠŀÜĨÌLoʂONĐÏºÏĦ©Śô@Čcào͜keú[æò¼À^ªƂ`ªvØâĺÐZÀ¼¦¼ÐhXÀǌ¨ƨ«®QƎbȒCȆ¢ĨhƐĨÖ¼øxRräI¸RLtztADÄ|úŤƘtHĆĂvZôÔDÊz\\rɪoŴTľKH²b ²Äw°ÚdĎFvMfÀÈjM´hCtÊNVb®@à ÌJvÞ~ĂWoŞW¬zoĢU@~¶°ÎFCUºp~èÇz^ĤQÀVba¶ºSÈJ_¶NjÀV~ĈBpcf_ÀN¨É\\]¢¥¢XÜÄÇçXO°ğ¦Wt«hI¦Ɖ«jcḷ̌ĚǣȆŁFch¥BÙUË«N_ÿYHQ÷C×\\ÕQʇȝqğįʏƶǹÐóHĹOǻ«ƽŽÃţĹ{M̝Ȩ©ȞʚĖoɌȺɚ{¨͊ҴʒΖf@˨ŵǮ¹ǦEź·ƞ­~fêF~tÜSxLªQ¤r®ÂZXnÚXN `UZäRzÒLN\\öGÖn\\KúdTRĸQJRrvDª@¤h|Njzrê~hmM\\aifua{j`Z£R¬OLxxN\\ôYâxU^Ê\\´ÌWXfc`I¢¾°¦RvÆhRbyvZUo||b_fÚ~CzPplr¼TTl`aÈ¢at¦XU~îD®ÈtHxO`ænB~ÌEAtĞfLt^~nZNªvj¤VªFi|ËGÄÈIpzap\\IhA½pgd¡P÷ ÁuĭLùĩN\\[ ¼®DhÀRnGÚvRzPX¢b¬Øh|Ă`~PAxĖgl T``¨MfVĀS¦f}vRâI¨V¾ÎMêdZiÂszDk]Ï®qBr{GywÏi§]«iV{y­oumMmå«ÁMcq±¯gk°T]x¸YJmà]ryHtc¦Bqg{´As°SÔsºC d|¸J¨^`tÀ¼ĔL½Þjh«Kê[taþVi¦Vv]kgF«u[½G^qetQ\\»hoHF¹o{jWN«mÈûJkuosiL¥uH{Ày@²TƢ@WÀ[fČCp`ĴP@ZâXCrª°ê¢NiÌnÞCfjLÂO JtSĠup|N¬RZdÆIWÊJ¸tæYr®svXr°Tjl@tpY¾|@DoHĨIvq\\|mŢězFCFAnsb_zsDCÖÍj]OìO»[YOxddua[wª]sP{x]£©oQ@|W±@xs]XU·iEyqbwÊuv«KilÙ±[bñ«kuRukFydSalsW@­e@}qMNiuHOw£OwÅF«|UGo¦Imgs\\cYaQU}DY_Ky½]}Gŉ{cµj`«hVGA±mHb­sOÉl_keJhaaÏ{Aeé~Dj­]ÛlcYkji³©­W@NeM@µsV¥mÍm·zi_in£mdeK£ziMmihaÇñf]Ç«£Q^TJ~µdPm¥lBv\\kjnyjX ¯ĹÕ·wǣŽŃéŃěmƵ±¯YÑħ¿³ĽėçqûÁƙÇ§©ÿõ©BgwJskºëi`wÂ}ŢyNKuËEylA²pAÅZóø|¨tvS¼JÂrfCzôXVÎCz³MEUð¯Äv_ĉpg´A\\Æ¤g¦[DíyŅCĝQ÷cF©ytéUihIN§IRŝàñ¬¥§¥AqCTMooɇwƇy±¡mË}S}ÏI}ÐN¡§QÐ¥¸éBT½Ha{½mtğrg¤zį ¹Einås ZI]ÅÃNYcÎ§Ĉ]Bd°`èQleÍOq{ExRlcŞb@áügQÍu£FTÕi¡q]Z­Q{CÆŕ°Mwa^Q¦NT_u]wząÄczH¶CRÉEči¯¢mƒH~\\ňFîêĂzƚĂĎbA©d{wu\\ÌkäýTÀeËmSH¯Ì¥}Q¶`¥roM}S¯ybÝuOB÷Ldi^ÿl¯_r[wÊm¹lzPjbÂ£ĂHM÷aZ_j{G©§©OH½ŷÁMÙÉJ}g¸yŧsgßRqafC½»¢«~ĝ[baŃdïYp±êAFe¹Ky±[]^ÅX±@©DãtSZsßSĳƁíMy\\Fl{ÇIq^k­@CmPqi¡ĉAaÁ«CguS_bájĉ{Loić£Zı¿xaL­{Tñ¹§ÅKk±­V»XU|xUeCèrE¨oVµĊq\\OdOđGqdáZÉ`~ÊÍz[ÕÉSÁÃ]ÉAyQÁ©³Z[VgÿpWc«P­ÔuAy«F³GoYCÇujU»³S"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                122102,
                                42307
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "210000",
                "properties": {
                    "cp": [
                        123.429096,
                        41.796767
                    ],
                    "id": "210000",
                    "name": "辽宁",
                    "childNum": 14
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@@@rODn®@lr]ÈJ|Ek[zNƂîĴàTtTYäsªC@ ²ÆW^]²\\LzºEféBo²ðZńcbaĞ\\¬}@@¼¡¾DberàQthŨ·zhI~ÚÊÂNŸ¾GP¨ªHªi|`YbNøN lEzpæmo@@Z}ÌkÌ¹ÆXbNØY@@¤QPÇèºûßq¬FjcUw©eQÄ@`¯À @@tKêØZr@xà¼f ĢZa{Ts¡zCÉetýpC~ alµ@@ym¨ÏOixa¸NO¯mrgm_QQ[ad½]POjZ¶oomP|UzU³¨@G®iªDqFH«N[Ñ{M_º}GO©@@CU@@Im@@@@x¿@@HK@@V¯Sòlcde~­xUYu{\\Û~G\\]cux­VR}´BR[k©°YáÓxKYQ¡UIÆpch¹My{ËKtuM£@mK}EHp]¥VaÕIÛă[}·RÁaQpá·ā©k©ć{ć¿M}Û¹]yk¿uA£Iq¿oS¿eHčo·hīXşo`Ew{kÇeS¹ëkSĝYkÁñ_cqpĉeTWá÷EĻqPi}¹y£aÝPiEsõ­Ŀ¯L[áU\\¡\\§¥~`ÅXQU¨y^y³u·z]ªFewÉX_ÁÂuU¡ùS«Z¯µçMËX¯E½ÃÁDoªbpcÀ\\x}JIzªBreÐÈRmª¼ÞPÖdpzzxªvE¦¤@YÀEpSA`lď¿I¥^´Ŀa] ¶¼cteqDÐ¨òFÆbDBf xZ]¶¦ĆÖ®ÄGºĔ¼bÜèjW|t¹°SðDZ`B¾XcxpwTrvbc rWBbĄāÌav^´émt×N_~Cò§HnC|{O£c³^¥K¥Zw|ŧXēW]{·n©G¥¯TaÙ[GnwXkDT±DuçCy[Pw]¥ā¯­Ë·[@g]F½}_iD¡·ßÿIĉģwkFŗµ¹@QX@@Fh@@|@@C@@AD@@OptaÌyY_bÊUZA¸hÍ`[eĝFáOZtVËGc¢gZ§u»CKb½d¤¯Nbn¿rN|böÚC@@pPZ½V]xxÖWzBPÀ¸etA¶S´T¼iVÈvDpZH´¬EBzÓvO®d¬oXĀUh\\Yª´RÂzBÊ^ ÄÂÊTÖ\\Îy}ÉÊ_âYrcĒHPcPr[¶ĉpUF§qçfDVwV{¼WU²®LlÆ¨òº|S®KbwĲÀYĈ¤pjK|Ċâi`aThvDÂ¬BbĊj¢"
                        ],
                        [
                            "@@ÍvP´}T kģP"
                        ],
                        [
                            "@@gxf@\\}^u"
                        ],
                        [
                            "@@I`ĖN\\]»{Rz½M"
                        ],
                        [
                            "@@}Uq|°e"
                        ],
                        [
                            "@@\\[£_"
                        ],
                        [
                            "@@Wb~xe"
                        ],
                        [
                            "@@~MGo"
                        ],
                        [
                            "@@aZD®°]Ji"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                124217,
                                43455
                            ]
                        ],
                        [
                            [
                                125509,
                                40217
                            ]
                        ],
                        [
                            [
                                125272,
                                40090
                            ]
                        ],
                        [
                            [
                                125585,
                                40168
                            ]
                        ],
                        [
                            [
                                125706,
                                39963
                            ]
                        ],
                        [
                            [
                                125976,
                                40496
                            ]
                        ],
                        [
                            [
                                123686,
                                41445
                            ]
                        ],
                        [
                            [
                                126041,
                                40374
                            ]
                        ],
                        [
                            [
                                126117,
                                39963
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "220000",
                "properties": {
                    "cp": [
                        125.3245,
                        43.886841
                    ],
                    "id": "220000",
                    "name": "吉林",
                    "childNum": 9
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@gdÅoJVR¢ZwLâÔ¯ZlªQ\\³AQ~Uw®dv^[}H[Ü|ZvwV}®fcdñkTU°@@GL@@wÀ@@@@Jn@@DV@@PªH¹~N`Ò|M\\¬ GEr©C­jH§@V´y{VOpnµpiYPO^c¾bR\\Rn`qhnP°·MwbPj§Ðzn@@k¶b}oDsþfDÊy¢Stb|ġY»ewßq@Yé×sL@@¿_°Ã@RªfVxid«Erüà¹çOÈ£R@@×ZMaÅWËºËlY~@@pnåoFykMāGÁ¤ia OkyºÉn\\xq°`Āk]@@cjøKAvPaÞzT°~Nqp_¦µ~RË¦G°nTÌ¿fSãþËl[xvc|BªčaƙāāyíéEŇ}[ƑG¡nj°FĎQÊµDGyÃdyĆ^xvS`¥MR]xb¯NÅŖ|DRY®r^j¢SÖ¤EvRÎûh@âaŝkdQw|FPrÎkfçR¯_Acć^Í¨ZdMÄÆ^JYætjmºFİyh£Ġqsn¾b|GS¾êA¦·RÏ¨¢M~ÏÐJT~~Ì¢nz²ƈɈxppNSrDB¦ÐtmF@@®}ll¸WvÊvĬF®RÐDl¡M}ug`~CMyj[molYO{¡Uxa¥iCz}ÄiTKv±_PFwDk_Q¥¶kdHWQ{p_ÈN^aa ±è`vYZB|aÆ`Q rV¬f YC¬ÄCpÅ[k}tCxSÎd¬_`ly¦lSp¨DleĄxtºOn}[}hgÓ|Y²uPwvBÆÞGLPĬml[¸jxQZp´VĚ´ĦFv\\àw A°yJoVŐ[HµèÏY©§Oms_¥f½M¡X»]WlxJjM A]e W\\xĲOƐ³Zsy©Nkq@@¦ª§@i{°i|Jć²wp^®oBrþ`n°ÆQfkrjp²ÄGèÔFd©´ÃT³¼¯QôHlWl¥eG¬ă\\¥Ò\\Ærd²N¦ntQ¾[®KŒof`[¼jXt¦~ǆEXOEjECtÈ@@VI@@zrÔU©N]wd¬a@@ÂVtÒPXn\\TTµs@@a[hKÏ{f§ÜF\\e´MaRMMJe²IĄµd¡Èi¶tBĜã@@Ā|NdºITdOs«d¥oMÑ[¥yZ÷E§Ce\\M«å\\aazÁShµozCeįLßqF{Å[¹¶àV¦yÉW©_I§gBqÃTH¦uTĈF|HmbeaWlp·G]zf¬R_xpƒāRQh¬\\çmÅXMµS¥kíe_K±wa±|s|uPUT{»Hgxq­¥¡¨z©PoHzwC¡b[í[Si|i©boO­ßcwãWAmíqB«qaǋ}ăTÓJ}hƧLǙG³mÖ§R«W­R¥[AwtĈ Ù_­¹DqÅO¯EzÏ@ilómcVHŋh³Ecv¯@]§J]³AG`YÇjKlYIhÝl£CXzª@rPpÁrbIF{|IRkRÏgjQ§Ó®AGmaÍ§bceZ·]§Õget§mÍËY[w¹½wÛ«BRywRq[`k}_ioT£¯@I~G·|Ý{"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                128725,
                                41848
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "230000",
                "properties": {
                    "cp": [
                        126.642464,
                        45.756967
                    ],
                    "id": "230000",
                    "name": "黑龙江",
                    "childNum": 13
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@S¹JMcÿ{@@ěäsAµÇjc¢ă¶±JIfNNQb³N[fÛEe¨|LÐgb\\@@tS¶S[mWÑOsUÁ@@«bc^xMªÓVyq@@UJ@@ÇsDFFiPWǅF¥}Ws»i\\e_pLő\\­½sR¥m±MqcÅÑ[ [¦«ĄHfk¦kXóGR»°S´Ä³cªEçÓÃHo±qielÅR¯mý_qA­po]±xIĈ{¯j|@j©¨¥@@r lªMzYtƏ´ıP[wX^fBNIiwk^XW¼N¢e¾`¦nt¨PZªçÐG¶ŏ\\UIp¯zBßxu[ĥEę³³UYowR·ik\\īnOKÝHÅuAOx±v{ZhÔg\\~m~¹Psăwkf§CTo¥kz_k«`ÍcTwsDl~\\oÆÃDD«Z«eUqRÅ_bA{YZuç_²bb]ÇMo`R|XGcµlR¦`ClxEO²`uLSÃjy~D¦jwb¢VP|kZnpi\\Nz}D_vh~Nk¢CÏ­QīEuÉu·Xkk­~@@EnÏs¨«¦ßòQŞ¨JMJjgêV sªzEødĞRņDzCî¥\\h£[Å³BohĊ`Ãuï°VF´NDyÍUóWDyqeÁ»IuT§s{÷YôBÆ±oBkFzÌLvMšzÁ~_xj¹ìlItxAhöªĀ¨ªƚÈüÂèrĘľÀ´ÒĨ°Zƶ²nńĜńêǤž¸xĺÖ@@°Wziiml[Au¦knO¶cI}S]¤RÈ¬e^ÈògbjNnyjL¤cf¤nm `jyj¸nnÎU¦t@¶NfM@X ª®j´ilZdÜk®^Ciê}f|BbÐgbIlfk`PÊta®nGB²HgU_¬¶i|dHŊ~¾^LzZ`CV~RbZdt[nh¥JHp{V¬ÆEx¤PPxvGjMrN@~®f@tXkTbcEzvlQlvò¬\\aÚ²kLju¬vÉxraFz¸jWV^wt²@X{@pR¤ªw^O|t©^xb\\cvwcP\\Z¼ëPPi^@@ÕÎ@@CD@@yt@@a`@@mt@@EB@@ED@@y@@šĜn{[urħJGCp{@½Zso@ik¯SWqtu­qåZ·sÉIXÅJYcQM«o{ğvsTIÁPKeiÝDËmj ¡Mé©¯DqáW@YĳOo_ċDe¿\\@Xơ±S@¿zG|vK¦jptvIlÇün¬MiXp|EºGgp[¼sRf]r¾H \\vE¬lhu^¥UjýUsbé\\L¬igÝ¾ēK¿»_s§]I·{c¹DÓt¯TBt³ h|r¥AsdGqzß^In·Zw^¯Sl°h²drÂNæ¬nNvn®p|zU¬j^¨ÐjxHzq|A­r^ÐlyCÁtYjĆ^Đ´G¾rºZȢB¨ÆMRêr}¼}¼\\IÐXÆKúHÀKÊL¦jĞnîOX¬\\Cìo¼Adw@gv`uuqCdF¢a~¢D¨UÌ@Ķ±z}@Ê±ÌtLö¡¢ÓUpq¼aÈKªPÎE]Q{l_ĊCfk è|ĪVĢK¶eÂx@ƈ¥BvS¶|tF|¸]I£Õ\\«ĀÄBfÌ§\\{¢yF¶}ASÏgx¡UcÇDwÀ¯zäÈ¡iZs¾Tº©xIw[LĘYÙµ{¸MĂq¶qPa¥çÁSdK¢u¡t¥_\\}CleSb½boŢN[yy¨ÖMlugÇJqz­[^TlüPE¥ud½JÝÂÈÅ¾s~wüŇºuVkcLÜçSk{»ÒwJÁÚsƀH»gïåK¿¢§[áDĄ]`]FÇvÒyê_ªdªGÎĪc¸pH´k ĢHTèUĄyz~¸[Vo·©NqQâhÞ}ÆIÙzmºEÒ¨E°¸PI¢`f¸PÎaz{băiÎd@ O£w²@bmD Kl{acfiìg°mĈ±BŎºB´I¦jÒ@TÉÅā­@oÊcTeJãvUÄv²ETy¯v¥¬tÛÅGù»K{¯UĶÑÐċJāÂðIÊZ®~LðOĆbòW Ù¨F°Eì{ÚPÎ[~ðQƼ^¬ FĈ°S J|hAªnÆ´sº¾fq¦CÄÆĠpht¢¾x¨PðUÀoĘlzSĎFphZrZĄO¢Ê¨LdªJÄh°BÖÀEÔ ĀD¬KŶÞ[ĲBÊ´LÈ¾\\ĞUfvkYÕ}ũýûMïÑãÇD§P¬QdåĂ³NăëB{µ³§wOS{kŻMWGiïiß®hyOÛáYq_¯wZ©cÛziiC¥gÑûyÑ¥Ds¨G §oQMq®OeãÅ¡qzsés_{°µIw¹½I»BDqrOcoGC[O^{MQuqna·[P£Dś¿mF©H¹u]Bs¥~\\ÑSsûïēh̵è̱òā[¨{F·}ÇJÓpg}³uÁµÃ{aZsM¯n¯HoWV±aGh^ÏoXumaĥwLK@q¢E¢Ûǘ֏ae×na[ÇL¿^o_wdÝcozQgQ«ÜxN"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                134456,
                                44547
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "310000",
                "properties": {
                    "cp": [
                        121.472644,
                        31.231706
                    ],
                    "id": "310000",
                    "name": "上海",
                    "childNum": 16
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@QÜ\\pvƆFl[Ġxrºcix_ÔVtÂÊ`_@@j@@\\¾ĮëÔeĴÉsÈñŘŋćFė`uYȉJã[ë}ùÃ§ñCE°­¬āK\\³{§LyXP¢QÐlSgP"
                        ],
                        [
                            "@@jĽ[{ûÑTŕ®µTß|ħºIoçÂŧŘuLæÜÆz¸J¾¢ÅÆ]ÈŴɔ±"
                        ],
                        [
                            "@@§ſæ½ ´Bf{ƀ¡¨[«"
                        ],
                        [
                            "@@Sj¬EĚƒaU·÷jë@ûZAz"
                        ],
                        [
                            "@@ÆL[»C_´"
                        ],
                        [
                            "@@M]u"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                123803,
                                31763
                            ]
                        ],
                        [
                            [
                                124903,
                                32377
                            ]
                        ],
                        [
                            [
                                124702,
                                32062
                            ]
                        ],
                        [
                            [
                                124726,
                                32110
                            ]
                        ],
                        [
                            [
                                124871,
                                31965
                            ]
                        ],
                        [
                            [
                                124808,
                                31991
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "320000",
                "properties": {
                    "cp": [
                        118.767413,
                        32.041544
                    ],
                    "id": "320000",
                    "name": "江苏",
                    "childNum": 13
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@ÉywÇH³Y^¿lyØqÆUæN]ĵGÚGªg±ÀKnÀŘ§~ŴuŢÉǪëD©ÛjóĲț^¤ĩÊýÈśpċ|}ªQC¹p{ĭE¾rĥpQĉgY gbeq¸KŐÛİèSÖrůgL©ìsc_ȠÝZuìÝõæŭJďɓ²ųÇÅ^¡Æ½·IÅyåÛvKŨŗèÁy[@@i@@_`ÉsÁU`Ójw¹dwq\\ğkƅEou[RÛ­yub§So£R`ï}EyÅN}m¯Õ¡²G®{Å_Z¾ÙeÍGÛXd¹¨§j±âqÂQ§\\[s|ďS¯oiÇ¤ÕCkjEGj@@ydj¶}SÓSÑnFj¥aÙ»ToWÛ\\ŏGiHOr¦pSê~ĚFhI o¸«K}ÂwKWûf®¶j]|ĝaNr¯VnÂbLlĝ¨t°VþČGxnĴj[°XP¨stZâ¿I\\b²xk´R|t@@`sx`nklpÄra~HB@A@B@²«ÂV¿¶ v_jÊhV~mFÊuİåB£¤U{GXZ»gfAWgRMÅÍGGßf£cµnÝmYTÛQnyHYªOsjBÀ§DcÈ¼£ªsĬDÌw¡ĥ¡[ CM^rÎtW|V®p´aTĴIp°MÔÏcÕAÏ{^ÃCk}|ddhńK²A´­»àĕ­¾iĳB¿GrďtÚmC·\\Ä[£hûc­Â©h»BÏjHb¡w@}~[`Gn¯YdÐ}\\PtNJĂĬ\\ŪvÜg@xNZAÄP_Z{wGd¬Y¢H×~T¢÷YxýèdrÜz|@@jT@@@@@@@N@@`gÀíńmdzD°ĲyUÂDÎĠONvPĒw~J~Ęsim{D×@Fv¶AZhöQtXæ]ò^EYî¤°Rw´QĀÃnp |Dì®ÆDèÆt^UÀ\\ĬHdâVp`Oh"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                122170,
                                35919
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "330000",
                "properties": {
                    "cp": [
                        120.153576,
                        30.287459
                    ],
                    "id": "330000",
                    "name": "浙江",
                    "childNum": 11
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@¬¯Örn`¸VWAJBIAJC¦@@Püyroè@@QrÃ\\ĂÛUÏb@@²Tln`hsª^~LJØ¸MÒÀ]¤°ÌQS¶KîG|\\H²^¢¢`pW²ÄGÜĎÜC ²@PúÖz£`ès\\uÈDØwØwzfeÚ]NT~@¦~nm®tV¼SòkzzuÖX¤jrzP°EÈ PtpNer¸H¢GÆhhst°ĐT{\\t¨[RrÁ²á¨iº§cÜWÎHÚfY½Æ`|H­¢±°Ö~nÆMz~F_ð¤Qp¨Tva®zOThkRÏO¡zW¨K´|[ĂL®«F¯Uû¡ŎģĔOƚřÄÙÖĩdBÌßÀBªì¤HwŐTFqc·»Ç[ēākd´]«Iu}rÁewIt_[§²I{J³K¦DmµçªqeápY´«ęPssC»®{Az³FMÏ`pcZ¥_ïėw²åWX© ē_mWëUa¢ÙZ§¯­WuRyÉíYTgĀ[\\£ĩoÄ¥IÀX@w~MA¥Y@@EO@A@@]]A@dzAjC­°Tñ×cF¿©q»§z·u¡E½ý¡yÃn[}õéW»ÌC`ßòU°ËUUŋaL]í¿Ukă{ÕLEçütpCª£t`PGdXĕsAçyam~I»}aÕEÕhMyeÅBq§TâxH¤¨KÈĪWÌó®J¼_¤XHfAX±¸uÛ_UxāgCs`U"
                        ],
                        [
                            "@@¯bÏ]»Î\\bAB±îdnĆV¶ŢYKw¸·u×EtÛt"
                        ],
                        [
                            "@@©¡S¬¾I"
                        ],
                        [
                            "@@DCs»`fX"
                        ],
                        [
                            "@@¨s¤DÁwT@"
                        ],
                        [
                            "@@Æ@hycËÛXă Ė"
                        ],
                        [
                            "@@J`îPS¡ãr"
                        ],
                        [
                            "@@Z~f¥MZv"
                        ],
                        [
                            "@@hl¢g\\XvÁe\\oFg¾"
                        ],
                        [
                            "@@ß\\ÏGG¬ÜMàgC"
                        ],
                        [
                            "@@®_Q¿õÆZ"
                        ],
                        [
                            "@@~bncU"
                        ],
                        [
                            "@@vZfßnÄk¸©L÷´{|qö"
                        ],
                        [
                            "@@Pla{u"
                        ],
                        [
                            "@@¥ds u[dr®¸dbÄµ{"
                        ],
                        [
                            "@@¢Rµ·{xhþlB"
                        ],
                        [
                            "@@oTVDi±"
                        ],
                        [
                            "@@eQr^Vi"
                        ],
                        [
                            "@@Qezx\\"
                        ],
                        [
                            "@@hjvPZi"
                        ],
                        [
                            "@@lQa|f"
                        ],
                        [
                            "@@CBC@XbOc"
                        ],
                        [
                            "@@Nr^jGQs"
                        ],
                        [
                            "@@B@AA@B"
                        ],
                        [
                            "@@ªg½[T"
                        ],
                        [
                            "@@frAgP"
                        ],
                        [
                            "@@ojRe{"
                        ],
                        [
                            "@@¹X¨Fs¯q"
                        ],
                        [
                            "@@XY©q"
                        ],
                        [
                            "@@D@DAGB"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                121277,
                                28968
                            ]
                        ],
                        [
                            [
                                125096,
                                30708
                            ]
                        ],
                        [
                            [
                                125148,
                                30911
                            ]
                        ],
                        [
                            [
                                125163,
                                30426
                            ]
                        ],
                        [
                            [
                                125366,
                                31477
                            ]
                        ],
                        [
                            [
                                125095,
                                31058
                            ]
                        ],
                        [
                            [
                                125254,
                                30976
                            ]
                        ],
                        [
                            [
                                124955,
                                29879
                            ]
                        ],
                        [
                            [
                                125267,
                                30657
                            ]
                        ],
                        [
                            [
                                125369,
                                31139
                            ]
                        ],
                        [
                            [
                                125200,
                                30562
                            ]
                        ],
                        [
                            [
                                124714,
                                29781
                            ]
                        ],
                        [
                            [
                                124871,
                                31516
                            ]
                        ],
                        [
                            [
                                124815,
                                29155
                            ]
                        ],
                        [
                            [
                                125115,
                                30363
                            ]
                        ],
                        [
                            [
                                124802,
                                30809
                            ]
                        ],
                        [
                            [
                                125329,
                                30690
                            ]
                        ],
                        [
                            [
                                124996,
                                30905
                            ]
                        ],
                        [
                            [
                                124968,
                                30474
                            ]
                        ],
                        [
                            [
                                124885,
                                31015
                            ]
                        ],
                        [
                            [
                                124868,
                                30838
                            ]
                        ],
                        [
                            [
                                125088,
                                30690
                            ]
                        ],
                        [
                            [
                                125223,
                                30438
                            ]
                        ],
                        [
                            [
                                124042,
                                28454
                            ]
                        ],
                        [
                            [
                                125199,
                                30997
                            ]
                        ],
                        [
                            [
                                125218,
                                30577
                            ]
                        ],
                        [
                            [
                                125728,
                                31431
                            ]
                        ],
                        [
                            [
                                124005,
                                28608
                            ]
                        ],
                        [
                            [
                                124095,
                                28635
                            ]
                        ],
                        [
                            [
                                125084,
                                30691
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "340000",
                "properties": {
                    "cp": [
                        117.283042,
                        31.86119
                    ],
                    "id": "340000",
                    "name": "安徽",
                    "childNum": 16
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@@@OK¢Åz¥NK¤OÊo²Ā°ZHm_\\~}x@¢GaÐi¼Aªg®Áüd¤g\\[Ã¸nDsÙĐHqÀĴAj®½Ė¼ß®B³±LgŃcc~{lÄD]Ð|ÖBÐdNÓ¯JoSĳ³boU­X{sqÍ]ND\\¢Ħx¢CËtī¤©»dÇ¨CA¿tiPZ©GzmÜRZSÞn¶m¤deHàÎHNÆhQX Be¼hYW|HV¤£æAvįEÉnU}Ég`iuµÀÁU±¬A@B@A@}GbÃqokmlw__t@@{s³Qlwa±[ÀJYátsO§W\\¯ĳiwmHċUýs¯Ğ§KkamÁ°UMqĞb^{i­µüeXxL~Á¬Lp·JeBU[vMęé}oTq¥PGjŐHÜ[pX¼SÚ¦bEiÒmÔTT~iµzc@@Hi FliÖDÈ£pjtsggHÅ¡Gq·foMsOFÇ¯yOq£iÕWvyy lTñ»U­smn¥}}@SMÙ^fye×xx×CvÇt[ç¤_yÕOù±@DčÛHÛ±ÃoX¡_¡]G±{[íHLTµËR¯³rCöéÍ{ÇCÅvċsy h·}T[¶ßD¼®bRy{cspZ_ÍL£uA­{Â³{oJÑDsw÷ËMi|IvÃzrPDPA@MVsFöüxMĀĈb´~mE wO±¼åhGuŗáWŉ¿¿}Em±XQOä­ÐdÈYtT¤ÐTpË¢WépZr}q\\ÌÂµ`I©¤jÆÌJ^ĜÈtÂvAY²AcrÃXBrbºkÕQQt¯¶¯R«Á\\eÎ¥\\_ÄÏFlg`be¤l¸ lW°²nGĺìº_r¤sĀ|aJ nWnj¼M hĮ{¾[ƎÊd|\\ÄÆgTđěa{{dëShqmlIj[rBB@B@BA@Wpõ´Fvęm]÷HJàmI@ļ\\ÊRağRiÅI»°R~EmĦ~rMr¨_ńDNnÖt¬LO¤H¾vFHouARòjO@®ljzcx¨T[´pÚPØ@¾ªfbY`ĄéH¼žJHrª@~bÜcÆ±äHYÃÒ`átB²Õ`ÆJ®ÞXfB nÖXRxÜWJÜxÌ@@C¦z`oFrÇ~¹wJ"
                        ],
                        [
                            "@@fAEguNV\\"
                        ],
                        [
                            "@@NUB@COqOM|tE"
                        ],
                        [
                            "@@B@@A@AAA@F"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                119204,
                                35097
                            ]
                        ],
                        [
                            [
                                121721,
                                32277
                            ]
                        ],
                        [
                            [
                                119500,
                                30421
                            ]
                        ],
                        [
                            [
                                118282,
                                33249
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "350000",
                "properties": {
                    "cp": [
                        119.306239,
                        26.075302
                    ],
                    "id": "350000",
                    "name": "福建",
                    "childNum": 9
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@@A¥whw{uBswĉ^yy`Õf[FŖOÙß\\Q³tVW³»¯³SA¼ËNåXŏqûÒÇ¯ġSM«BñGÕ¡AsÓ¿cÝOµ³]}g÷Si½Ru¡ÛËFYM½[RÛ}íIUjĉQ@ÊËbÑ¨I¾{M¬§NfhqlRJÌIĀÂªÅJ¾oLUèµº^y\\Jx®Ôtĭm}c^uaĪIÍĚhoO]w±SÃèy{íH­²ęd_\\kn°B©º°~¡PwIÖtn¸´v_°~¾c°pv¤mfRÄfOÂª`¥¤BèTlnHIpĚì_ºÝMWÒx¼  bj¤U@¢PN¶~¤wC°xvúI¬SÆ¤èĂŜQ¸tx_~ðO ¦´®n¨Ñ¤N°vzoMÚc~}klPzk´Anz´c|NB~J¨NÊqrnÆrQ¨_¬đÖpT ®@Ì¦°HrnW|ĈkE\\QrjWtĨ`fĆ¹ĞÌVEV_DtĂhVwÜ`v²·WBeGW£`I»ô­XËĩLÇ§G£wá¨Sr AÆzfNÖgÖFb¼~ Jn}zbèBĖtWcHO_¤sD©soèûFÖKĄ|l VîÀK^ŌbVÌVV¯àñ_D¼ËË½ėZP·kOķ§\\ÁGc¿WTEpwF¸k¯x¯­oe\\·Fg©ËRrÐ¦| @ĄÆMjğCG§NaKzhĳIw[¥u}¢tºG¼}¢ŇBm´ÛÌdÁÅ­^]SudđyG±»Z}^Å²]yęÉCůo¹AÏkLÀMM¬N|In@Abpì¨L«¬aWe¬É[TÉ¿T³r¢«¢Dkÿ©OgĤmapy{ÁClc¨uDq\\æ©@z_¥T»ÃAsdX¤eXsaBMÖi~¨M¢SIq©gLh}|Y· o{¶£eõwYÂx~·KtE¤lKjéS[jfNÐH{apïÞ¿tYÍW"
                        ],
                        [
                            "@@OtÍp«Ya}¯t~\\[®dT¸{²"
                        ],
                        [
                            "@@wJ@|lzÆMc£ß"
                        ],
                        [
                            "@@iPi"
                        ],
                        [
                            "@@Mv@u"
                        ],
                        [
                            "@@BI"
                        ],
                        [
                            "@@DWkh"
                        ],
                        [
                            "@@U§­TirÞ¤l¦sZ"
                        ],
                        [
                            "@@plj|k[m"
                        ],
                        [
                            "@@\\hkS"
                        ],
                        [
                            "@@²dB{³X"
                        ],
                        [
                            "@@¸RkaZ"
                        ],
                        [
                            "@@cd\\i"
                        ],
                        [
                            "@@pb~°c"
                        ],
                        [
                            "@@azlrYZTko©O"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                121890,
                                25562
                            ]
                        ],
                        [
                            [
                                121255,
                                25103
                            ]
                        ],
                        [
                            [
                                122339,
                                25802
                            ]
                        ],
                        [
                            [
                                122451,
                                26243
                            ]
                        ],
                        [
                            [
                                122857,
                                26820
                            ]
                        ],
                        [
                            [
                                121071,
                                24988
                            ]
                        ],
                        [
                            [
                                122785,
                                27331
                            ]
                        ],
                        [
                            [
                                121042,
                                25094
                            ]
                        ],
                        [
                            [
                                122515,
                                26757
                            ]
                        ],
                        [
                            [
                                122915,
                                27125
                            ]
                        ],
                        [
                            [
                                122534,
                                26263
                            ]
                        ],
                        [
                            [
                                122635,
                                27252
                            ]
                        ],
                        [
                            [
                                123019,
                                27189
                            ]
                        ],
                        [
                            [
                                123250,
                                27563
                            ]
                        ],
                        [
                            [
                                122541,
                                27268
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "360000",
                "properties": {
                    "cp": [
                        115.892151,
                        28.676493
                    ],
                    "id": "360000",
                    "name": "江西",
                    "childNum": 11
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@^£Ñ¿·NI×}K]t©_gmSk±@@Ða ÜVāÄ[Rq@@pçzqOû@@D¥BIAJBIXU_·qm°Õ«UFĝËºeąħ_sXiRq[Fćl{mXq¯GË¥@­oSÕ«Ē`§qRÅmqrMÉ§IA}{M³dmyB³lOyk~ld}NÙpuyM¯Ò£m§­¥³Pï}w`·sRśçā£TÅ«Juùw¯xD}£Mµ¡O@Vi£aw»XÑÞN`¹ęëoJGmkçSA¦£©_ÁePQÃenu£od¯}½`¯³um·ÕsJxO¢¯}ª¹¯AlmIjaaDxf­ęZEiÄč¹Ho±D_¸ÇlQcÈh¸Çe[£n©yÙeó|}oPÁ{}Xaáqime[r«GP¶³geu¯lęÓuVUÆnWenÉ^kĔXXv¦jPº¼ÐMÖ¼x@f¦F°àâGrxÒjA¥fIjf}ÝR¾·~ÁJQ£yÇngOŁbû·kpX°ljËÈjx·AdðpBEÐsZüNTº´¶@òivÎUfêp¤kªVãwYeÙ`§eZØ¨zQnv¤a°~rÜCĄõXixåC¯¦MĘg²¦ö`{®hc¾ENØĈh°e`fäųmcé\\]~jnK£~CøĀDlÄ¸M¼uxn Ò¢lUf¨[°¦Ef¯Ėh\\ĄPÂFØØGÔã¬Áncz§n¤QjŒgf^°Û@qÔq_oxJSqĐVî¾r¦İTÖjNĠ¢lĄ`d_À@ÎvzĈbĚzOtN¾«¡s~Wtxel¬zs¬\\AÊ_RöGl´yÈ}öHBöhĤþRÒ|ƀTYŌõÔq´@êð¶R²Wn~FÀ ŊÀâXŘvHæg²»xPFn}a³ÿćwNõûN{yÄJuj{ÌNøtxCÒI|pÁ´®|B¤vÎK`Yotdz|Qa ­C»à\\µS¸~gzČtÆuÈDÎ|êDõ´q"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                121030,
                                30101
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "370000",
                "properties": {
                    "cp": [
                        117.000923,
                        36.675807
                    ],
                    "id": "370000",
                    "name": "山东",
                    "childNum": 16
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@@@@M@@@@@@iS@@y{qÛçcwþZ¡ø}SGØ¡«ZcxHY|`OÃBYwM@Ûhũuī[IāMOs~[cÏÿ±p¿_ÁYnMuũkşv[½hÍK\\­°wôV~c¦ġ®»[cZzP\\¿Ey ­G{id½@oiµZx|Vbr¢l®^vØdA¤zbðĮ~EhØTÎEÐ´¨fW¤lĒŢØxÀBÒ`DlĐJR¦xªÖ\\ÄG\\¸êMÉ¹ÿgmRÛO«¿BÏORSEO]w[«·{ybzĈAàîBà@pMĈSZ@@¥L~³[Dy²^T¦@@ePbpÞVK°Äbz¶FXhOĨtÖhÈipüìVØvE|ºA¢bÈ´B¾`Èm¦]lDffG@@m`ún~[XDBCADB¬¥|jHÔÚpÄÆd^ÂČ¼QØVČYÐbÐSfTðUÜrÀgVØøVºæĴJ¢xVAÀòÖBkĺÝvXÊGÄoĨmØGv]ff°U¢µnT¨ĲrņB®_È~đĚÏdęöIP³¦[]ĹF·QçÃµėBk¼ƽgRØ@Po°z`ÚUb]B¯~wVľPòMĐ~j}PðúPv~Q N~êTnĖzøĒØN¶`Gn©bTfŠHĊ¼ªO¾T°nGÜČWXÖYH°{ĚH`oaV¡ÂôB¬^HÚGVºfðÐ°~kĜMŴNØjdØr¾Fh]}~ÕÌ~UT¢Wî@ÒhPi¸Mİnke§ZmFKrDÇ±eNyçA]eaùEÞhPaZqÉ_Kx£BpÕEĽjMBª±ClH[yQSúȭóKyg±QmtÃąfqG¦ÂnQ`¹s»]`_yqo`Ý_yóeŏßÕF{^OÆ§Ðky\\{iyBVyLB}ÍGÃÓ¦¹çBI±|DKīÿKgeķUó]«hÊĦJnmM^éDQjI}B{aPqOz{¨CF¸|Otp]U}M«¡MsA´õ·¡OÑbwÍ§@p§sWB¹¡uÙdCEUC«ġ«VqI©ts[ÅÛ[āuÓ­BgPo_áUcīG¿[]VÅsCç­Åë{CoÄmÿ³Rx¯Qí£ZF]^ñåsWõRYgµBEu@CØ|njėt}}IđxOMuğPCÍVÁız¯CcyŃn¿îh_"
                        ],
                        [
                            "@@qIvR|"
                        ],
                        [
                            "@@DNqn"
                        ],
                        [
                            "@@OªQ"
                        ],
                        [
                            "@@npN{b"
                        ],
                        [
                            "@@q|FI"
                        ],
                        [
                            "@@LzF"
                        ],
                        [
                            "@@@@D@@AA@AB"
                        ],
                        [
                            "@@B@@@AA@@@B"
                        ],
                        [
                            "@@B@@@A@"
                        ],
                        [
                            "@@TFPQsQP^"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                120138,
                                35404
                            ]
                        ],
                        [
                            [
                                123628,
                                38858
                            ]
                        ],
                        [
                            [
                                123590,
                                38896
                            ]
                        ],
                        [
                            [
                                123649,
                                39066
                            ]
                        ],
                        [
                            [
                                123043,
                                36624
                            ]
                        ],
                        [
                            [
                                123522,
                                38857
                            ]
                        ],
                        [
                            [
                                123702,
                                39203
                            ]
                        ],
                        [
                            [
                                124402,
                                38481
                            ]
                        ],
                        [
                            [
                                124404,
                                38481
                            ]
                        ],
                        [
                            [
                                124403,
                                38480
                            ]
                        ],
                        [
                            [
                                118268,
                                36758
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "410000",
                "properties": {
                    "cp": [
                        113.665412,
                        34.757975
                    ],
                    "id": "410000",
                    "name": "河南",
                    "childNum": 18
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@tRÐÀA¬ÜPQnĀhÊºNé[·ÃHÕ[w©Q¥ďIkCÑ_¿A×wđškX£§eÏ³ÍF×Sg}FïĭyaB£×c]u­¡kaqUw{¶Ypj¾@jc|®HzÀF[OYyd¼\\Ģ­d¥U}xó®¯[ÎL¾g\\ŠuŪlNv mÂZÀ`PÉ£L¦MÆyL¡P@@ IºxÈ}qEpy_D¥@@ËwIÛÛXQwÕWmAeÝW­ÅI_±ÖsA_âÑZÄãGÅ²Ûd}a©@GqI»ŽêG_ăZea©@½×ÙO³o\\Sw§ydki@­iPQñvBpGuEG½P£«KÕsMmŃC§`qN}qnĥFQ}¼¯ÆJjĠQbQ[É@ĻnJIßøG^ĚnEuö³Xo@E\\qiJnkrTgìc||bĒĜhSÃÅ[c{É\\ƍ|½gĭNi»XmmIbÿ{£tq¹`ĹëmH¯±Xkk·£faÓk§PD~HOÊp¾³pCj©@{ùÓjsµr]ÛMg_¯HhçJ±´ãkWènd^ĐHeoñ]ăx±E³æÅhS¡½ÓWwgDÀji{±PKÂuVV¡ZSn¿ MzOÎ~E´RHTNBd]xCºanÓX½ā}ĕ½£|uCaķĄ­kE{Ký¦sQQãXo[whëCgDÑVč[w§JµzKÑwvépJqÍe¢£qnw·[t£PăÐÓxÁg¢«¦d¿EÒñ~cigYÎóZf[ùÈWD¿¬ÚB}Ð~@Xo®@~÷v¯°Rv¥ä¯T]xf³Bqè¨Dx¥ÎWHÖªÂíKhģ[Þ¾}²Ï@@ìRZYÀnwÞrČE Àw¸XztÐsºê`~ªìex[¬ra¦pÂQtjMÜĄXYÒ`ÈzF|þdĨUYHĈurg¼Ƅute¾daä@pfĺiľPQü³E¬°ôY|²XJÈÐQºknf^¶lBJHÄu\\®Y®H¶t`¤UoCA}dIb¼ezÚXob¾a¶E``r\\W²eZ´J»TiGplIrFÄAxr|ªhjbgrÖ{YuduÐFaMg@@DPx|mĘJVsªKÔ¬M¸ňT^`¢mÚK@b°G\\§Wè`¤F¦°Tneh@@g«pUV¬VZ|ÒlA@oßAíBßyćza|¬¸x\\"
                        ],
                        [
                            "@@SMQGhzAc"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                118260,
                                36743
                            ]
                        ],
                        [
                            [
                                116499,
                                33059
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "420000",
                "properties": {
                    "cp": [
                        114.298572,
                        30.584355
                    ],
                    "id": "420000",
                    "name": "湖北",
                    "childNum": 17
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@XúÇ\\eôYÍZjhdò}ÑÀFc¬¥h¡ ÂÔwĄÏ¤Os¸\\xm¤rf¡ÎIrêoxuÒL¶y¨I\\xĎÒUPBTCDADìxgp\\äWRtRþ¥LF|®lĸăbvD¤{Ė¾Ă~¾ÔWbmD¹^wgyF³}ÍyPNÀTm¢YUvULÁ²Oj|iC¿xhÔX¢¾TÆg´å²FĄwò^fpG]ďmcXçäl²³èIGg°h`ÜN^qt¶Ôi|úª@Di´oo½PÉGC}¨OÔlh_kÐE`Ã¦[fÍ[¬Â°Q°µRsÖRl¹aAqÄWdqBZ±BÁuÇs]ěËIiÅª£J¶_Á[Ër~YqêoXÌ¡SoÏS£ZscÇ®ÏPãïµé³@ÓrŋöZſS{QÑģýõgAõGÇ~zk³HQõÉ`B«[t«yfkswX}t¬¢M½syPęćayÍu¿@c`ă_¡kMğÕiįSq¥í½UÃWJ~KSuwqJy°G|M¡|tÀzd@trFlYt½¤£RÞ~»¦_·a·RXªQÈS`ǍũŽƇÝÿTkkkìmDí§ŒH^øÔjâ§_IGÚLNwdOO@Ë¡I¯­cL}¹BÛ~mz¹H_¯³óKl¤ĿÒÉF§`kdċPďh­ ¥bU@@]W@@s[ũjYn¥QX__Sº­ǱRď^K¤Õ^ĕ[T·i½¥oĕ@IÆue§_X¦O¿QeÏ±ila¡ó}gISÍ¦¹N÷gŻJÿgmkN_[bkµ]OpÛLamfwÓw@Ew`JcuZmPíÿÅde]ZEÉ¾sWy°fJÔ«qF]}ÅM^ÒMP[znUUKht·sQqm½UĨ[ÃpÝāly[@kÉYØ«p¾]¢jD°r¸U®eL°Č_L|ü^}¯·bzeh^²ÀP°OroèÒMRT¥fjm|Z²¾àÀÌxØUQ[XYĔÀª ¾áo{dÂÖdþÊ^qPb RGlpâÆĨ¨¨kÂJX­z{AÎĦlÊPHi¸xxZƀJzkÜkhÃB¿À§LMÛpinħMaT¢utMÔbÓK`N¾`uÞohxV¨@~º°J¶Lk~dU Öİ¾cxXĄRøĀ`¼_ }ÈLÂo¬¥¦FìV^t|ĭ®µA×t£làRâę¦ĥM½~ÙXĊüÎOZ~oFoĴbĸvRiŐd®âNUbĆIÐìIbçnmXª»¦âVLÔD®zJÀ«W]CSXO"
                        ],
                        [
                            "@@MRD@JQ"
                        ],
                        [
                            "@@CWPDTX^"
                        ],
                        [
                            "@@hCCBSDOA"
                        ],
                        [
                            "@@xcKM{bPP"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                113711,
                                33967
                            ]
                        ],
                        [
                            [
                                111725,
                                31305
                            ]
                        ],
                        [
                            [
                                113713,
                                34000
                            ]
                        ],
                        [
                            [
                                115422,
                                33135
                            ]
                        ],
                        [
                            [
                                115612,
                                30507
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "430000",
                "properties": {
                    "cp": [
                        112.982279,
                        28.19409
                    ],
                    "id": "430000",
                    "name": "湖南",
                    "childNum": 14
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@}tE °IRuh@@UAúxÚwùm]tN]ldê®a^´aÊ¸qWªÒIºzAWNG@@KJsÖbªwjaĴ®w~\\mº}e`dÆcsçIÇiSnýíÁF~¬«KśÑXs©CqcMÝ¬òl¤°i¶~n®JH°ºLè¼°LF¨Ü¼ê~N°[ª`P³X\\¶qxgödº~w`ÌrD¢xÄj\\­ta_Z¼kXS¬b´@ aco\\kQàed~Jz·|IĘlt\\À¤ÔOp×jKFY^cfĀÆOînYvdIx_Fx@xÔebnÜKPo¶^al\\`MnlĀhżIøh ºMÎ¥TJhô~b¢k²jÐ RfÀ¥PW `f¨vÅJĖ@¦p¾jS¸Ė\\Ö]L£Đ]ǲQ®¹T``W¦RZmŪit\\@@^X@@V¦a®ĐgOČlc_¨ÊEŀÑk£ôL°´`ºGynÜ}A~ºdK®J°Ì¢@|aHÙJ`¨iá÷ÓG]őî¨nClëllSÞĀžƈǎŪT_ÇRW©¸Q¸b`¼¥Ý}¤Q¾£ZskEsq@ycs¿¢{NH{z¯IrxvTLI}ÄXrďTIpwr`rÓÜ@]¯heőRi£¨mdyÂm«äHÓ××EÁăOg[°ĕeF¯¥§\\ekVÑ¡mvwN»Ã·Ck÷ÿD}¤Lm}i^ê[ndŴeãf_g¯×ćMFd½g|­_¥õ±hNė°¥æDjwöWăDqÛ¯}bu£Rm§y×fY¨Ú_ZfäxUl©£éoeVÍju@ñ³µS¹MûtYFÏoAcïµIS³aa·DU|ÃSQeËO@@cBv±N}_F uME¢¿pŉËXe¥Ñ}EËQ|iPÏU¼`O¡»}Kw¨·£óysáBsÝIY®^CuxE¶«¤PÅ_ĕx_y Ã£FWvµGSÙs§H{Á²GÁ×Á±Q×~åWA\\ƯN©ÁJ«NeMsz¥@il~dÌ}ºAnnCzVTÆ½~iwH×ÛĉC÷ĝkĴ ĲĪ²QÊhÀtE °xÒGfAÚúrxQØºnhÑKr¡}KmViªpÈ®QþZÄnL[¦©Uo ĥAë|¤{WKõćwçQinF}mvqSt³Q«yãÃÃ¡ĩË[O¦¡°«VW]~êAÍCÁ|·§Q¥É§Z©p]h¿g`éSK¨Ìåx[~wÙm}"
                        ],
                        [
                            "@@MHBBLI"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                112111,
                                26655
                            ]
                        ],
                        [
                            [
                                112158,
                                27387
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "440000",
                "properties": {
                    "cp": [
                        113.280637,
                        23.125178
                    ],
                    "id": "440000",
                    "name": "广东",
                    "childNum": 22
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@FÆW¼v²Ö~pON¢HĠÄm¦\\fäE@@i¨\\Nv}¬D]d`rDò@@GV@@\\®trxĄÁ¢ª[v¤p¨vi|hÊ}PBÒ{¸Sl®[|zĞCR~KdxĆZ¢¦bĄGîÚÒÖ`¤U~ZOrA±RWÀpÆàpt[vtVĀ|E¨ÈPĀņZBt¨®PLÀDÞyA\\tW²`V°I|grĎTcjNª¾BhÒ|A ª|nÈjUvd]nÂfRÂ²ØHÂ±ÂG|t¨TÚ¶HXu¤EÄz`ĖwÆ`O¬£FµvwD]Z­ÞJtâAztô¤§¸Lx¼~¢P»_VOÐjR{ÌFÒ~¦WfŊÌÀoF¡vNE~`²MuAd@@ÌPRfÄTV{¸CbbT´¶J¸BiwÌÇkiW¯loü¸łaPhÈm¤zRIÂ¸}½ÞQ~eJi¦eBÑiqwáH¯ß¥E@e»wNÕ»ÏO¹¥iWuēWlÊ]mfXmVÅvUĚÔ°kfv´hµO¬Hqf\\nrjbâ~WÂ|pO~{ôÚfªz¤m\\fÈ·gdÇRÈk`·²CpºGÃĎjFYĚ®eCwbibJ`[Ěc®±îGz|Äç²Tx^PpgÎęJĩbv]~dĮns­ÓIw[z]¶¹VçpKI½ÆÁ©JÿIËkQreg¨MN«|J½Ò§Ìa@ÉěqJJr}[­@@E@AõďdÍlG_½^cċo]qtăeÃ±LÇcÅù©±ËrÛ_uç_¯¥JOÐxÁRh¯o³åÂMÅRď ù[Gªĝ@N¤MA|ßYÛăÉaoAÇaS¨ŇOgÎlĨpgiõP}ăÈLpm±`yYXak¿_[k§DaòµÈõYõ¡X@@ËqiPmJÓBgyqbYä­®ÍŦ±Uåpġ£goGµÃE`u«ćugLÉgqhÉJyHÑ{cģ¡U©«vÓèQ§®I¼¯­lËaÍ¡Åw¹TÌ£Bęģ¡«WÛVPqË¿yħIMzNG¬³Hċã§KÜeeñ_·¯@lxzûma»ab½wOb¿g^½eąÛyKtÔėuĭSō×OûNyS¯©­ÕqąUyZ¥{JÅû½áoM§okF÷tºgèBq^í_£ØEě¨ċQ«¥¿Ûmw{ŏQ¡§@õIÃgtNä±º¨O¢£^wªeØ£L]Ĉe²ôQÈfŞ@ÊøøMĸ\\ZĈLÄUXĝ`"
                        ],
                        [
                            "@@C¯Ǒloz¬Gtf`w"
                        ],
                        [
                            "@@¡¯`mfiu¦¨ªÛ\\f¸j¤Co"
                        ],
                        [
                            "@@HdQl~tÒlqx§\\"
                        ],
                        [
                            "@@RhÒLãs"
                        ],
                        [
                            "@@´PÌtmĠh©ĭS"
                        ],
                        [
                            "@@pvCk^"
                        ],
                        [
                            "@@ciÕGÃ{GÂĿDkĝsT¤Ä ~° Q¼\\}¸`"
                        ],
                        [
                            "@@mv~XO"
                        ],
                        [
                            "@@KLy"
                        ],
                        [
                            "@@L¤hcs"
                        ],
                        [
                            "@@ĮH£R§{³ÇKfČx°c°ģZRl"
                        ],
                        [
                            "@@cl\\i"
                        ],
                        [
                            "@@fTyH"
                        ],
                        [
                            "@@Ù£B]¢¼["
                        ],
                        [
                            "@@|®Ni"
                        ],
                        [
                            "@@nvâ[pÍwi©`¾"
                        ],
                        [
                            "@@zf§}{¾"
                        ],
                        [
                            "@@@BB@AA"
                        ],
                        [
                            "@@@@B@A@"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                112421,
                                21973
                            ]
                        ],
                        [
                            [
                                119957,
                                24019
                            ]
                        ],
                        [
                            [
                                115562,
                                22263
                            ]
                        ],
                        [
                            [
                                115232,
                                22103
                            ]
                        ],
                        [
                            [
                                116973,
                                22545
                            ]
                        ],
                        [
                            [
                                113199,
                                21591
                            ]
                        ],
                        [
                            [
                                115134,
                                22184
                            ]
                        ],
                        [
                            [
                                113171,
                                21585
                            ]
                        ],
                        [
                            [
                                116496,
                                22489
                            ]
                        ],
                        [
                            [
                                115859,
                                22356
                            ]
                        ],
                        [
                            [
                                116894,
                                22503
                            ]
                        ],
                        [
                            [
                                119573,
                                21271
                            ]
                        ],
                        [
                            [
                                115738,
                                22373
                            ]
                        ],
                        [
                            [
                                113055,
                                21175
                            ]
                        ],
                        [
                            [
                                113301,
                                21438
                            ]
                        ],
                        [
                            [
                                113211,
                                20816
                            ]
                        ],
                        [
                            [
                                118726,
                                21604
                            ]
                        ],
                        [
                            [
                                118709,
                                21485
                            ]
                        ],
                        [
                            [
                                118615,
                                23268
                            ]
                        ],
                        [
                            [
                                118615,
                                23269
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "450000",
                "properties": {
                    "cp": [
                        108.320004,
                        22.82402
                    ],
                    "id": "450000",
                    "name": "广西",
                    "childNum": 14
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@Áem^ucVimÇ{©B{Ñg½AM©diSčhq{¯JU_X±[sBÝzCK¿O§­AsŅYOÿ§Ç{FUÿs\\uosßoÅX¿²QBPqYV}_£ÑÕíÙăH¥a¡ąYcwLQ}ĝD{y\\k­·T|AÑ~OÉ{gju§£ou\\¡©ăÂwqs[­@@HU@@Cñqc_^«C~Mu§[j@@ãFe¥[ÃnGğ¡MoPÕ}u±X»ÅEåJ¥ÂQG¯wûoǟa¹C³AX´ÈjvnQ¥`ŻR³c^y¨©EEħŋå[¹Rĝ§g^²]{I£¡}ïWÝÛOy¢}P¶©Hýġiidy·VZbc¡oHOÐÆÁ£`ġòÛlNzBz»sÉf³Gav@£ctvRÌÞjQÐmNM ď`vzuôvVEzîy¸DrnS²x`]ª|jÍpąÊewqZu¤CpkùFOmãRaÁÒċDi`ÇKs«čA]iÒćcçbÉY_ĦaLUÄzR²´¦eu~dZ«¾E¸¶¢PTÜdĂZÔ¢^z°i|¼P¸kÒ²|ehd^wÀLhE«|ÃHqS·`MoSJb»M¯kĀĉFsïmqÛtQj¿|[l¡oY¹e¾ A\\wZ§ÖQjïJx^@@RsťěAssdãYeć²LE{Đ{`yĶÚÆm¥ÐYqjàfp°nŔLîJE\\Z@@tE¾}LÌGdäsVËÌUxVluôY¾¥¼axàIh¡¾n¦Ì¤jEúQ§ÀJpzøOǰà^jº^¦J^ahlWĠrX¤ÀSCàl]ÂLdªª\\E¦ĺhvH¡[ÔçyyTOddeWnµ¤VRoc¿IÂ pKºxLD³Å¢íu}²Jn[t²^ÖÜEbzºR°QÈ¦^}~\\¸ySdxVªf£®`ĨýH}wJx}ĆNºz|®X}dxFØ\\jQb©emwXpĺNÜÂbkÀÄFvß`£@@­IGtpMv¸X|[dz¤SH­¸B¡ösf[zXÖrFÀu®zj~Ún x\\}æw§ËLêT_hgÀo^ª¨YÊR¦¸¨Â{ÎDBé}X^¬U¢¯P¥Ì\\¢ĪÄÄäz R¬´ srTu~nEjmèRĈxLö|X£ì{ĦBpªV\\¥mKYÃRý­oÇj©ULn¢~qÒLg¹mR×wùqBÙeHwÑ¯sF¿gRÉĩ±ıĳĞlDøĊØÜ Gjx¾}SÅUDymmB~¹cË}jk¦@tyNf¬MIªÂưMB[æXØ}"
                        ],
                        [
                            "@@[YIFfT@@"
                        ],
                        [
                            "@@H TU«B"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                114714,
                                25334
                            ]
                        ],
                        [
                            [
                                107619,
                                25527
                            ]
                        ],
                        [
                            [
                                111707,
                                21520
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "460000",
                "properties": {
                    "cp": [
                        110.33119,
                        20.031971
                    ],
                    "id": "460000",
                    "name": "海南",
                    "childNum": 19
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@@@AAAAEBC@A@AB@BBBDBD@D@BABC"
                        ],
                        [
                            "@@@A@AEAG@AB@FH@HA"
                        ],
                        [
                            "@@DJTBjCHUAsUUME_@WRKZD\\\\V"
                        ],
                        [
                            "@@NBZS\\i[mASP@rrj"
                        ],
                        [
                            "@@TB^SFoeckJSbTlZN"
                        ],
                        [
                            "@@ ĈH¤ivªÎJŞĀr~z_xÙI¦YÎbzeƇ|ñzőÁsó§ÛđÁ¯§co·}³œɫMăáIďŃcVéĿąĩÉē`őũoaÃCÝ³t»Huví`Ë¦ħIP}²ƏS³Ċģ|óLGânĜUÊ¹ÌDÂªOà®MîdŖ°ĈĐv¦¤fØ°ÄÀ²Ð¬`nU®ĘĪZ¤e¾GôkzÐ¸ń|¤º\\UĢT[Ğ "
                        ],
                        [
                            "@@x¦²°JÖ]@§Ç½«°ØÝÉ"
                        ],
                        [
                            "@@U`øvbÅy~»u"
                        ],
                        [
                            "@@NÇRMnBJ@ÂY@@@@@@DCEGCÅ@YJM^AjAPFNRHRDNApoLSTYTOnOfSLGHIF[A[CACBOtiNwVKFORuIDO@KKIa"
                        ],
                        [
                            "@@´rA|ÕCØvv§uA"
                        ],
                        [
                            "@@rĞÆ¨ĮÆ´ìŬè¸bÊo^¯]{Û¥Wçákō±ĉqÑCËm"
                        ],
                        [
                            "@@Aé±Pkìã¯LTÒ "
                        ],
                        [
                            "@@dHÆ¹mq²"
                        ],
                        [
                            "@@nBCg¢"
                        ],
                        [
                            "@@ÖkkqÅMkb"
                        ],
                        [
                            "@@xk´¡É"
                        ],
                        [
                            "@@xjv»¡HK"
                        ],
                        [
                            "@@¼yÏOin~\\"
                        ],
                        [
                            "@@Ì\\[©}Sq¢"
                        ],
                        [
                            "@@Î²Fsġk}º"
                        ],
                        [
                            "@@x~Ok­v"
                        ],
                        [
                            "@@¸RYAI"
                        ],
                        [
                            "@@ÒĖİĢÎbĀEökySeŭjç[¯éė·­£I@|"
                        ],
                        [
                            "@@vakl"
                        ],
                        [
                            "@@¼ZÍE"
                        ],
                        [
                            "@@wH\\łvpyÿS"
                        ],
                        [
                            "@@ðÄPL©yi©XKn"
                        ],
                        [
                            "@@ĴpT{¿@ÙuR"
                        ],
                        [
                            "@@¨@^§"
                        ],
                        [
                            "@@dÂa¡¡z"
                        ],
                        [
                            "@@®pyÏľ`N{áĉJKx "
                        ],
                        [
                            "@@ôzOy{Çckb"
                        ],
                        [
                            "@@´@`k¥Gmt"
                        ],
                        [
                            "@@TĆs`]{ĕ~["
                        ],
                        [
                            "@@ZÕÇfS"
                        ],
                        [
                            "@@jn\\µg[]¤"
                        ],
                        [
                            "@@æXaÛa`"
                        ],
                        [
                            "@@LYq"
                        ],
                        [
                            "@@bnr«~"
                        ],
                        [
                            "@@Mlfvv["
                        ],
                        [
                            "@@DòFQíI"
                        ],
                        [
                            "@@pvS{©il"
                        ],
                        [
                            "@@bÐ¦°VJ«§¿©X@r"
                        ],
                        [
                            "@@\\²ÒKMyéÙ[F"
                        ],
                        [
                            "@@V\\ÍM_Ò"
                        ],
                        [
                            "@@VĒ`DMķgb"
                        ],
                        [
                            "@@j¥F^ "
                        ],
                        [
                            "@@vNNx"
                        ],
                        [
                            "@@ÀVJoi}"
                        ],
                        [
                            "@@OxÚXUá¹"
                        ],
                        [
                            "@@¨RyKh"
                        ],
                        [
                            "@@BB@AA@"
                        ],
                        [
                            "@@B|Ċ`\\aħy"
                        ],
                        [
                            "@@rdm¥yKv"
                        ],
                        [
                            "@@ny³oa¨V"
                        ],
                        [
                            "@@BsY"
                        ],
                        [
                            "@@ndy_"
                        ],
                        [
                            "@@ Üp_Ï»"
                        ],
                        [
                            "@@È~EF§yh"
                        ],
                        [
                            "@@¾ZRqÏX"
                        ],
                        [
                            "@@¦ªQÁiD"
                        ],
                        [
                            "@@¢\\Q½"
                        ],
                        [
                            "@@DXĚ_¿émW"
                        ],
                        [
                            "@@jRwN"
                        ],
                        [
                            "@@²AHk©uO¤"
                        ],
                        [
                            "@@brN"
                        ],
                        [
                            "@@|¸YLw­ep"
                        ],
                        [
                            "@@ĀbDoăN"
                        ],
                        [
                            "@@x¾[{£B"
                        ],
                        [
                            "@@hBn"
                        ],
                        [
                            "@@rxvkomwb"
                        ],
                        [
                            "@@J|FI½AY~"
                        ],
                        [
                            "@@pgmh"
                        ],
                        [
                            "@@\\~¬pbeB"
                        ],
                        [
                            "@@j¼fpu¯D"
                        ],
                        [
                            "@@ttywm|"
                        ],
                        [
                            "@@`¥Kª"
                        ],
                        [
                            "@@vÜP¤[řj"
                        ],
                        [
                            "@@pM³"
                        ],
                        [
                            "@@vB½"
                        ],
                        [
                            "@@d²UÕm"
                        ],
                        [
                            "@@LSHk[k"
                        ],
                        [
                            "@@tbXv"
                        ],
                        [
                            "@@\\Gh"
                        ],
                        [
                            "@@pCb"
                        ],
                        [
                            "@@PváyqĄ"
                        ],
                        [
                            "@@pz|[@se¤"
                        ],
                        [
                            "@@x^wwPI¨"
                        ],
                        [
                            "@@PrÌ\\[K§iN"
                        ],
                        [
                            "@@Zt¾KAÕj"
                        ],
                        [
                            "@@@®Fh¯k"
                        ],
                        [
                            "@@VRygW"
                        ],
                        [
                            "@@lBwL"
                        ],
                        [
                            "@@HTQ³B"
                        ],
                        [
                            "@@¾z`ep"
                        ],
                        [
                            "@@ÄbA}Q"
                        ],
                        [
                            "@@`B}^"
                        ],
                        [
                            "@@}f¢|c¡"
                        ],
                        [
                            "@@¦®`kË"
                        ],
                        [
                            "@@XÊJKoyh"
                        ],
                        [
                            "@@]¨cg"
                        ],
                        [
                            "@@Qwh¦P"
                        ],
                        [
                            "@@__@"
                        ],
                        [
                            "@@HD~"
                        ],
                        [
                            "@@Zd}E"
                        ],
                        [
                            "@@Du{cx"
                        ],
                        [
                            "@@°TD»RHf"
                        ],
                        [
                            "@@J§^"
                        ],
                        [
                            "@@@~F"
                        ],
                        [
                            "@@B{Tzr"
                        ],
                        [
                            "@@zNg£Q"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                120663,
                                15498
                            ]
                        ],
                        [
                            [
                                120646,
                                15484
                            ]
                        ],
                        [
                            [
                                114949,
                                4076
                            ]
                        ],
                        [
                            [
                                114724,
                                3980
                            ]
                        ],
                        [
                            [
                                114937,
                                4001
                            ]
                        ],
                        [
                            [
                                112749,
                                20508
                            ]
                        ],
                        [
                            [
                                115985,
                                8322
                            ]
                        ],
                        [
                            [
                                114139,
                                17488
                            ]
                        ],
                        [
                            [
                                120547,
                                15562
                            ]
                        ],
                        [
                            [
                                114416,
                                16586
                            ]
                        ],
                        [
                            [
                                116631,
                                7790
                            ]
                        ],
                        [
                            [
                                114329,
                                16646
                            ]
                        ],
                        [
                            [
                                116713,
                                9086
                            ]
                        ],
                        [
                            [
                                116691,
                                9053
                            ]
                        ],
                        [
                            [
                                114662,
                                16716
                            ]
                        ],
                        [
                            [
                                114421,
                                16848
                            ]
                        ],
                        [
                            [
                                116936,
                                8975
                            ]
                        ],
                        [
                            [
                                114927,
                                17405
                            ]
                        ],
                        [
                            [
                                117369,
                                10205
                            ]
                        ],
                        [
                            [
                                118618,
                                9943
                            ]
                        ],
                        [
                            [
                                117443,
                                10594
                            ]
                        ],
                        [
                            [
                                116500,
                                7821
                            ]
                        ],
                        [
                            [
                                112092,
                                7521
                            ]
                        ],
                        [
                            [
                                119064,
                                9093
                            ]
                        ],
                        [
                            [
                                115239,
                                9059
                            ]
                        ],
                        [
                            [
                                115176,
                                16386
                            ]
                        ],
                        [
                            [
                                117217,
                                11097
                            ]
                        ],
                        [
                            [
                                115108,
                                16687
                            ]
                        ],
                        [
                            [
                                115046,
                                17318
                            ]
                        ],
                        [
                            [
                                118273,
                                10136
                            ]
                        ],
                        [
                            [
                                119285,
                                10646
                            ]
                        ],
                        [
                            [
                                117257,
                                8315
                            ]
                        ],
                        [
                            [
                                117422,
                                8408
                            ]
                        ],
                        [
                            [
                                117932,
                                8588
                            ]
                        ],
                        [
                            [
                                116629,
                                8198
                            ]
                        ],
                        [
                            [
                                118207,
                                9620
                            ]
                        ],
                        [
                            [
                                116366,
                                9193
                            ]
                        ],
                        [
                            [
                                119253,
                                9395
                            ]
                        ],
                        [
                            [
                                114251,
                                16866
                            ]
                        ],
                        [
                            [
                                116674,
                                9089
                            ]
                        ],
                        [
                            [
                                117371,
                                11707
                            ]
                        ],
                        [
                            [
                                117669,
                                11124
                            ]
                        ],
                        [
                            [
                                112575,
                                8037
                            ]
                        ],
                        [
                            [
                                117450,
                                11269
                            ]
                        ],
                        [
                            [
                                119529,
                                11778
                            ]
                        ],
                        [
                            [
                                116579,
                                10260
                            ]
                        ],
                        [
                            [
                                117547,
                                8357
                            ]
                        ],
                        [
                            [
                                114372,
                                16986
                            ]
                        ],
                        [
                            [
                                114444,
                                16448
                            ]
                        ],
                        [
                            [
                                115208,
                                16862
                            ]
                        ],
                        [
                            [
                                118050,
                                10437
                            ]
                        ],
                        [
                            [
                                113886,
                                20360
                            ]
                        ],
                        [
                            [
                                117457,
                                16559
                            ]
                        ],
                        [
                            [
                                117418,
                                7773
                            ]
                        ],
                        [
                            [
                                118761,
                                9546
                            ]
                        ],
                        [
                            [
                                118025,
                                8714
                            ]
                        ],
                        [
                            [
                                117442,
                                11745
                            ]
                        ],
                        [
                            [
                                117241,
                                10975
                            ]
                        ],
                        [
                            [
                                120598,
                                11032
                            ]
                        ],
                        [
                            [
                                119438,
                                10757
                            ]
                        ],
                        [
                            [
                                116985,
                                10488
                            ]
                        ],
                        [
                            [
                                115940,
                                8269
                            ]
                        ],
                        [
                            [
                                113111,
                                8312
                            ]
                        ],
                        [
                            [
                                115043,
                                9141
                            ]
                        ],
                        [
                            [
                                114338,
                                8881
                            ]
                        ],
                        [
                            [
                                120073,
                                10569
                            ]
                        ],
                        [
                            [
                                114612,
                                8265
                            ]
                        ],
                        [
                            [
                                116954,
                                16426
                            ]
                        ],
                        [
                            [
                                114217,
                                7726
                            ]
                        ],
                        [
                            [
                                113264,
                                8204
                            ]
                        ],
                        [
                            [
                                113112,
                                7988
                            ]
                        ],
                        [
                            [
                                118282,
                                8695
                            ]
                        ],
                        [
                            [
                                116327,
                                7130
                            ]
                        ],
                        [
                            [
                                117350,
                                9059
                            ]
                        ],
                        [
                            [
                                114351,
                                7835
                            ]
                        ],
                        [
                            [
                                118831,
                                10338
                            ]
                        ],
                        [
                            [
                                117611,
                                7419
                            ]
                        ],
                        [
                            [
                                120082,
                                10949
                            ]
                        ],
                        [
                            [
                                117626,
                                8176
                            ]
                        ],
                        [
                            [
                                115229,
                                5934
                            ]
                        ],
                        [
                            [
                                117195,
                                16419
                            ]
                        ],
                        [
                            [
                                115224,
                                5792
                            ]
                        ],
                        [
                            [
                                120165,
                                10333
                            ]
                        ],
                        [
                            [
                                114939,
                                9088
                            ]
                        ],
                        [
                            [
                                115602,
                                8033
                            ]
                        ],
                        [
                            [
                                115286,
                                5695
                            ]
                        ],
                        [
                            [
                                119496,
                                16738
                            ]
                        ],
                        [
                            [
                                115355,
                                5230
                            ]
                        ],
                        [
                            [
                                116565,
                                19619
                            ]
                        ],
                        [
                            [
                                114319,
                                8098
                            ]
                        ],
                        [
                            [
                                115706,
                                19940
                            ]
                        ],
                        [
                            [
                                115259,
                                5232
                            ]
                        ],
                        [
                            [
                                115047,
                                5757
                            ]
                        ],
                        [
                            [
                                115617,
                                5113
                            ]
                        ],
                        [
                            [
                                118131,
                                14284
                            ]
                        ],
                        [
                            [
                                117708,
                                7690
                            ]
                        ],
                        [
                            [
                                118941,
                                9810
                            ]
                        ],
                        [
                            [
                                114928,
                                16073
                            ]
                        ],
                        [
                            [
                                114232,
                                7996
                            ]
                        ],
                        [
                            [
                                115315,
                                5497
                            ]
                        ],
                        [
                            [
                                114920,
                                17162
                            ]
                        ],
                        [
                            [
                                119552,
                                9274
                            ]
                        ],
                        [
                            [
                                117685,
                                16422
                            ]
                        ],
                        [
                            [
                                116674,
                                16216
                            ]
                        ],
                        [
                            [
                                115351,
                                16779
                            ]
                        ],
                        [
                            [
                                118537,
                                10713
                            ]
                        ],
                        [
                            [
                                115213,
                                9774
                            ]
                        ],
                        [
                            [
                                120115,
                                11344
                            ]
                        ],
                        [
                            [
                                120516,
                                11315
                            ]
                        ],
                        [
                            [
                                117361,
                                16026
                            ]
                        ],
                        [
                            [
                                116907,
                                9610
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "500000",
                "properties": {
                    "cp": [
                        106.504962,
                        29.533155
                    ],
                    "id": "500000",
                    "name": "重庆",
                    "childNum": 38
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@GJńbil@@¤gºv¨m@@{U@@A@@@@@@@@@v³mGxSAvºa\\@@öFjf|LD£N@CBAFFvjG~¨xøþ¬Ð¨¤jÐÊú¸¨ »¶l¢rUbĎ_~e °¢RrÉöoŢĬTMÒCb¦`ÊØàM]YxÜpúÎÀRª~ŲbC|HZ¨¦h[´z@zS|pÓpiv£hMxNëĘ¤sd``cpzd´adV¾nÜ[~hÚ{òË¾F°·¤SÄ­òKĆ¥]Ekäemz£ĒY^êCîT_ÔLaNÓvs¡bSĨNjmÜoN¨KÀ¿ÄAlglÛIyſYwwj·GOkÉÍĥBy|W®ÁI§lħ§áÅoHkQaO]rýÉcÁÕcp|½â©ē¿DJIRBBHJ@tR×VËwß¿±½{Yine¦SQNçÑqp¯P¿O]±fgy¸a°~]{û`K¯ċfKV­q·C¯¡i^½¬oZ×Ê@l\\kzÞĂÄo\\Vħ¾rnR¸tsgLVVm\\y ON]ÑÆN^~Er¬IÓe¯ztXÊ½LØiPo£Ó[¿ksJė¸{Iy}fcßRlp[db@ço¯AÇÑ{f§[[¹i³ÛvOxÉc£`W°rfÖkLdÍÚÏ¤Jw{WH£³SfGlk®UÔLK¨Ñÿśª^´BXEĲ}zkìPTW£½»gÇ¡ÿEwi¡µp\\¨\\vú»¼£µj©HeaeÌë~aRýEv§}ÜÉ³ă©KS½_Y}{VqÆG¨Yõfe¯YFµ@@usđ«ÃpBaËAomwgjQYf­]UvÅvÉeIx²Q~~g³ªDÕ®TP±kÇqUW½u_k[ókx`~ÊB®søbf­Ók{joYI¢hOå³SrÝpi b~{qÎPe¢VměB[[jLIwWQjfU ±FP@@]W®¶¶Ìz@R¤d´[D¨QPØx¶P[|¨¨þrG[LFr¹n@HCDKBnx½I`vTJèDhrpJk¦C@@KÐnHR¢døDXoGdÆGTÕªxVHZ"
                        ],
                        [
                            "@@GIAAC@MA\\@s"
                        ],
                        [
                            "@@ONLADC@G"
                        ],
                        [
                            "@@A@A@B@@@@@B@"
                        ],
                        [
                            "@@NQCIWZNB"
                        ],
                        [
                            "@@EEAB@DH@"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                108815,
                                30935
                            ]
                        ],
                        [
                            [
                                111725,
                                31320
                            ]
                        ],
                        [
                            [
                                108117,
                                30847
                            ]
                        ],
                        [
                            [
                                109547,
                                30810
                            ]
                        ],
                        [
                            [
                                111718,
                                31314
                            ]
                        ],
                        [
                            [
                                109628,
                                30765
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "510000",
                "properties": {
                    "cp": [
                        104.065735,
                        30.659462
                    ],
                    "id": "510000",
                    "name": "四川",
                    "childNum": 21
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@@@§Mp¯±wMJvR¢X¨n¹a°Vp \\b~sVBŉĖ¡G©¼M¤ªGxÚub¢Z£deYXËM¢ÒćhG¬FDpýRätü¥ZÁOÎGÀÏĂ]]XÊµĐwOj´ÅhM¨Ë¸X¶ÆQs³Á¥½^¿ó«·obBªgdpr[íP~vzÙèZ£ĐG¬°I^l®R|tévh¦ë¨E¢ËØGD»h]ń«J_L¿i{PµGE}»EM±~kQáhoħËqAhO±ªdþkÒ\\n¨o¼Pg|UâzĚoǆJèDbÜaĔPFmČPk¤PâpĢîļPt¯ÔFÂk`fg°PºS²Ôqƨ¬tE±h©ÄÛ¸ôÍ®wÎÑl|gäªGæë¶ÚÎ£¼¥×azćØS¾wAOÿäVvwvFîċÜîvXxm²Vrÿ¸^ŝÈ³HóÃL}PëªQxÃP»¹¦ØN¦]²}Vt¾ÊjêXu^s¼{T@¾ d\\Ð°N@`Ø~åÕH²\\°ÙLphÚyĬ||pSÐFtjSàxzU|M¦úĺV~ĖRY@@Ĭå NĜŤT¬MOgZ¡sqXisjP~«¥]^¼©SMàbsQËgāKD©°ËÞ~@nXÈ_°C²¿ē@ÜlÈĘmz®CÎPuH¢r´wrb_¤Hp¤@¬Ð¹RèeQ@¶·Mnß§¯¸CdolBx æo¼kµª¿z»Ď`ø¤KDkêt^ôoÆxà²¤qFÆÄ^Ċ[¡©`Jä°K@¶dt£òL´ ]æNĆĕO¦ffæBŞŃOxl®è}@yv\\¼¦Ø\\AúZb¦@Z mtG±£{Y}MÃĝ@g¸Z{_Åa°¦^¬\\ÊUvH¼E`¢cRp}ìd ÊgêLVj¸t_Üdďq²z°]S||^qz»Jlw¢©º|dÔgJjMxdvq¦BNÒ]\\Ĕ\\iN³¨l`vLCj¸CL¤Rk~KiTØE£¶¡YWzDXyT {yïªgf~OAÐ}îRp¤^fUjásMXzÀxÀöĀpĞWÈb´oÆ©XstÍuNª[j¯æRºgÉjqUjVÅāÏ°EqaIY·FWdÉÎY¸­iªLr{¢E\\{ ®XĘf«PČªYĖH~]ì~l~òtÃĈpò¬PeG|uT³jHRÍuèx¦RVchD°Ì\\Ypg^zÊi¹AK¢°mæGZiäCS~ UhhÊhàFÐ¤CDÖn¶gê^ÒUMmR¡w· »À[nªu¦òbt®UFÃd¡PÆz¦D_xÇ N¶ù¬t\\øËM¬j®_lpa^¾ÞrU°dqF}gÛ\\m½cU³bycdo_c_t£ìėMNw¤gjuÔo{oTyy@³g\\¥Y§GD{űa}Q©¿ùÍÛoZw^N×ßÉ¥_aDNÑSšīõpqÊ¡Q¯}fč`aV¡qkµ¼·§ÉùiÏ§£Ï«÷ý§wH}uiG@M¤ADABAAA@@@@@A@@BCABGe{iõE@@[¹buBwTHnu´@@@@@@@@B@@@|V@@§n¹u£h@@jkŃaIHGC@G@MwU© SÖÅHcHWp÷Cc¡ QGmLÏ@@¥DlIogqçCCBEFIQ_u¾JmwPMºmEqK\\Hq§ý{§\\µOwO×§RC³\\cQ£y@µËµX­^@@O²EVieRxXJK\\i\\ĜAnUf¡OrÍ|a}jÞoTqæ´PgJ¡pZ|iÔl®aet÷A­É_}wH¡F²DÏ¤g¢¿@m¦£P}¦dy×]MÝïPYOr³uQ«»cUáOPóYg¦YVðAl£ayá¦rİ°JäbgI¯o­imv]č¯¥YÓt³E}F³gIb±[kw½\\½YIq­Dce¤¯VËNïwcPF¸gr^@@ÁZWÖª[¼oZ½[ethŅßKÍ±ZsÛá_gdÉk{¹U£¤aW·¨£pÌ±ràPrlC¦ZExRh~Yz@oºJ{wwÆZĀI´BdRz¦\\Pz«nµdm~UsħAknĹqKhÇXstMÓ³½ ĝInęçKQuå¼É³Ë©§\\NzÉ\\©ËNÉk¡āïčÛHÃ×EßīA{iµPÃ£·ĥj¹VčęrsK¥¸ĝbGxÁ\\ăjaMÍËuERģwÝC[z¹M¡g§Y×¶Sz·vyqĕG©ēIsÅÉßwGÙv"
                        ],
                        [
                            "@@GY@N@HHD"
                        ],
                        [
                            "@@@AB@B@BBBABCKCAHDB"
                        ],
                        [
                            "@@DASIJRFE"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                104454,
                                26718
                            ]
                        ],
                        [
                            [
                                108815,
                                30935
                            ]
                        ],
                        [
                            [
                                109545,
                                30811
                            ]
                        ],
                        [
                            [
                                108093,
                                30910
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "520000",
                "properties": {
                    "cp": [
                        106.713478,
                        26.578343
                    ],
                    "id": "520000",
                    "name": "贵州",
                    "childNum": 9
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@lôl\\v`X¾rVÈlO²SÖ­C´©h}}R±JwÊfÆuVu^e®ZRixhnpBbÌoAÄĒ¬tv@@E¶°ZföeZH§rÅ|UZ~¾`TªL´ĄÛÊ~u¨FQþb}ìfËfbªGi¤¶¼»uù[[§¶oj¢xĀF¢È¼h¾X¤SOlë~yFıWA]³Ŝ©ĀÒL§KVÓl­kHe´TG¤|XIx£ÐÎÙclKeÕqX¯_¤ÊdPwÜuj´º\\\\e¨|ÒBÈ°èpa³T«lWY»b`®si[wÃC¡q_Ëx}¹chõrw[µW´_O\\©M¯é}Û»E§¯K»ç¹KG¯­Imµ}j£¯ñkÞ«NrdªDWtŜÒ¬L}«ÂEþîTmÈjèJtdcÅ_~fn¹[x}ĳ­b^}RAVÏB¹yÑJ ©rX·bÉ³b]­ékc^M^súnxwÙùVB@@vgQ¯JF~si­yv¿qEWÕ\\yeõtA¢·G®£Tcy{\\·WuoNsH®J@@ ¤à_EuÃl¿aÁÛĹMWoxfnaªiR×[Ew~c­Wy{M¹~ąIwxG~ħþ­_e¤©UwcT·z}[~¥]RÇQ¯y¹aÛFÕ±]sm\\±Iv~¡îÆC´wK¹oLÁJdÀQp£Um¶XfccPSzzÓè\\G¢uĹgF¥©[c©K^ÁkDß¿TW£ğqkXgb]I¥¹]]iǯß÷PoyI¨¿RùiF£Ëm¥½g¢ßJw»b½¦óZkvwUËVÌUãtcËHK½~sFeSKíœmo¯ßeirÏZ¦ÅnTê¬Èpz¼¦Ynz¾¦b®­fRMü»H£|ÇHL¶áoC\\ľD÷¯Aê[~íZs¨fĤyr|Ğwrdè]ÌM|Sf|ĀKv¦ÄÊdre´dNvwFPqnÉUynRÊÉûOmj½YÍvG½éRka«\\őQbIp§_pô¡tgªd¶´naXkX¡ð}D¤X` W`r¼JªìbBæÞhMR¦zbDx¸re¸HDÊ«|P¼ÙKA¢Z²¼ªès¤åÂoÐZL^ÎVqj¢m^żú®@ÀsCs¨ÌB¬vvwÔÈSjZÒðxÌM°Uf£d®CJr¾Z¾[lx²\\Ja´hE~´FÔs¦ZĎ°u^jnp®°JhaãIį¯¥qzâbk¤ïBUZ¥ZhOôPVâ¼dR¬´vPqZðONÞ ^zØc~¥¤On¥À@h¡Ð£C±¢EG "
                        ],
                        [
                            "@@QB]~xia©tÕAAXUÐ"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                108928,
                                29211
                            ]
                        ],
                        [
                            [
                                112104,
                                27475
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "530000",
                "properties": {
                    "cp": [
                        102.712251,
                        25.040609
                    ],
                    "id": "530000",
                    "name": "云南",
                    "childNum": 16
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@YÑTiÓÇxuuA«§ËDt¿t­@Żù]¡nirÍUK]ÏYÁp£æçt©±»Y¡BL»Ú{OÉ¬C·Gqfw·CyaQ¥gNåÝaA©ë»I_qXW_£~C¢ïlWWb³mcµh©¢soó`¨JoaŒR¬[lbQ¾êHÎu¾ZniPÊü ÉQzmÊVrmOxEMucf³qÉc¥ÃLu{ÿTe{N^Ëçqcxĝq{zeģt§îY\\}Béø°C[ĽpDâKµÈG¤{¼GNûeQ­®a¥y½mZ¥y»o«ÇSéÙzĵ|_|ďFKĈ±ZfcättĜBŦt Q@@]IwðRi¨ÕxY[Bf½ºZ¢p\\kÀ{RiÜsnrtðĊElÿ°¼NaITNp_T¸rÄG¬{FKgx¿]gcf±{lÑO·{»j¯]yÓ¡YāÛcS¡O·µ½F¬cYv}¥f³±yQVÃf³ø{QÔÅÓm­±^¹{\\őÓU¿dWÏ[bß»]×JuÁQā|uÛ©©R_d°ſgÓåC§ēA³[ŝĦ¯ÒŅĞÙą\\ÕsNÕĆJ²Å«ZC}I«ÇiJ¯pđ©Cµ¡O­HªW¬¥AğâW­e©[k½«gÁÓSÇą\\ùV]ívË{ÏRK«JB¹¤¥yEq×Boã»[c¤ÝNy{c¬ĝi¼HCkJ}e{ąj[XÙ¤q}XfÓ}PÕgÕ`WDB{»½C¤ÇmchbÓnñsµAć¡Ë²nÌ»Úª`C¤bêÃHnz_æfLêD×É×SÏqÇ¿]_m½ģjWÖëGçkysreÞÀjLP£¯¡ĲbðlVdªNč\\CęÇ@¡³ZÛ[{|ñyŃ@·ZJ¾ÂC¾wPĊĒkvŜqzÒr\\ÂÂfwÎjhÚzæVºñ\\»j|ý©Ënå[µzT¦±Gātep´NÃh¤QÆ¸]cÞÎJxZmĂ°÷Fu`_Ê^w^®T ªFþìq³ađKwLi½õBċcAWŕby_ïK¯_ÑécO¯CÍ·ÑodKħ®¨¼¦`LĄÆp¦slD³BK¶S¨śkpº`ĤCĲkhnvèt¦¨ÀenW|±[ÐtČÀŲaT´ºPr°N~BOjÜu¬\\vgªÞYÊÃXpÚxPÐ¢fhĀ¤¼zPòdzeÒ¥oCWòuÀ¸x{I{¶Svt|m¢TXÈ¦pŠGÊz¾Ü\\Ħyvxqľ|`H­tDÂeÒxTOtÖgÂdgnlÌ|ye¿P{Øcq½Z]­@Á«¹VMÄÜSlTyJ«e¤TSxĢklK¤P¤zµİþvb¹lM¿hgA¥S|SÆÊc¤jCºÙŊ¥rVÄĮÔdxÞ`vq®\\wÞO¸¦µXŃro¼DdBB³pRøê¬eÚonK^¤_ZfÜ\\IçpǅyęVáh{Op»§[mlÑcý²©PgBrÌĨgpâlR}N²¼FF~HO¶j|ÀK`¬I^Ń¼gCHÌ×F¡ì§g¥êus{­Q]k¯JH«¤ďYÚçuy}îO\\oqhcA©pa¬¸Àô¾]Â¦t´RÅWµÌ·N§Ægi³xP¶ďWÉ^^ÐāH¿ÍÂP¦YsûQãþCoEH«ĈgÑ¡ÌNWfZ¤cY¡vawÙ©HN£ª»¢HŊĕAtUa}[Uo¯ºb m§WQ¡uIxN°²o¨N@@ÚuxHÊàÆJtĔªHĖzr¸uTyµØZh¨¢ Nº\\yÞDxQĤFvÌNÎib[ĄwÂaH·ĞL¦qtĚUĎiº¸Ħ¤Ä¶OjB|àĬØFGÄĎÜĂðl¢MÊªÌ[yÊM[¨Ìª´Êæ»RvLĚèmJĞ´¾NÔtsÈWLgĺrlmĨBVtn}c¶¬mOy¥[Qyc³AJYÿxÅ|xIp¹@Zyg}QFwYD¥kqßO²q Ë¤o¸§bX¤£ºV|Êlhcâ`ÜYtÎ²Làņgfs¾\\pY\\»©XÕÂY@@]hqE·dO"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                107836,
                                28370
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "540000",
                "properties": {
                    "cp": [
                        91.132212,
                        29.660361
                    ],
                    "id": "540000",
                    "name": "西藏",
                    "childNum": 7
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@oC¥[ķ]µr[}~mIÝĨLoÖDWİ\\x[£\\[BùmY¡§a[µµÅsVÝñihkYç·n]ÕäE}ĳfÜW¬_deMrCz¯[u­ÉWMÑØk­sM×`gkÅ¼TiZgñ¹oCuP³BkQ~}n·ĜāF¼}u±Ü_rqÙx¹ÎmX½żðħÖ§æNĐ±ÚNÈwÜLhlàE@@c`Ä°zA¦¸OÆÀQ»ìufoK¼¬LhJ¸ñÂRjÀCvºilcL¡´zUXt°ab~gìY~ZqXfÐmmT°²nI²pLÙøfbtÂOpKP~S vªC\\©yĐ ¦ÊLĊ{~V E¦ljsªWlpO{jh¾®B]t|®MpÎrâ@ÜØpyČµr½tGhoRp³zWdĆò@¦XT_½]ēUaviĐpC~û®DCtLq^ăyu·KP}UCkÅÒåUÔƊÉzOn¬äì@L{¬­Ā\\aXíC¢Ć}Rb¯zA x`VqvÆtSĎ@fÕt{Ĝ³pts¬Tz¬[`r¦nÔvK¨µ¦Q°m^ĔMOzf wtl`f¸NjeĐIgfRvdfªD]ljVMĤhP¬}pTvĖ\\ ¼­Zp¦bcØ^qLŊg¼TÄKô´GŞÇ]Ā·Uqn±WwuíČÛEíuxUuĀãPxBT½Ĉ×byØ¦¤»ÙÍµåì©Hãhk{ÒxÍÎ­óÜ·ªÃ²gF«srƧÓT±O¹h¯_elEÁ°ÓOsĻíoġOál£OnċOEbēÛCaÛ[Ye£`]LpmfÙé«Q÷´oAAc»CqpWń¥¶·ÝPx[r­_uÝcwÓĭUÃ¦qÚŉD¹£iÉdÅ{TTB¦ghNÀkaºýu¶į£y£OLkrM|³QsxXĥĢC{@¿ÎCÎ§°§XavÁÏ`u·Jzc£qQ|s·CVQ©uc\\w`c´R@emgc¿Z¡½Ek¥kíãÅID[ÒK¬Åp·S`sÕviQ±W~§½hWUÜfwďnkòÝ[čCoeïH«yB²Cs¡JÅiũÑùkÇ©eÍqmßȁċ©WÉ½¥ėµ]¿ŕ¯LaƓIÉ«ÁÍƩŹķŗMĻsgÏSķ»µc˭ķu½Hş~ęgķ¬ģAƓĳSƩ`Ė£èVc´Lºzn~ÖR»Ĳ¯ìÁUětïwJ±DiddWªªhØ®ÇBb¶BMĿHsŽ²·óf­iOÓ¥óX»G®ÅMnGt»Zpġ±kp±dcf«CazÑÆÃSÅFk£}\\eµªÏOáfU·uĩQÃÕ}C£¯eÁËûãy³©­Ļ­Co·S¿}¨Ë}¯Ùi«åc}XRªeD°{G{xu¾`°c\\ÒH~CjOÎtoØe@EîX¡¦ó@qg±OU±ÙLSqËTē¡Wzq^bs[×¯c©tĕfI§³·NDnÓcO^ikáiJD³él«¯J¯nÐčRQ~TivSÑjXË©@U±iEq¡DSuGklërvEsĢdPÚ¿åHGÓāÑo«N©~~ áÎDc ¿pŦHû¥{BÛ|ÅRW}nß]¿²{]Çj`iìª|¬LàÍ¬ÍCÙóíBgë×pB}Reÿ×W|U¼u|ÝL¿MM¼jæ­\\ZØ^I¾Ó@[ ÃV¥KDlñXÇ{sDgßW»W¹Ne|yE³âyN[wzOºBµè¥FQÄ¥|«IzeÓÀÃCEÓcBUxXaÅHã[hd¡Î¿OïÄDmSÃËGJ®rle×fÞy]N}a]WÉzħZŇ¾cbS¹½X¡QtquSK§x[{ÃG·£ÇFr·U³±ÿV^s`E¦°Gl¿Aoÿfćþk@Ã¡J]·XajÓJ»Dj÷wV{ºpQî»zXkn±GÝð÷Oo¿}ÎáSK¦oB[b£ėgu´eRñm£`àlÉ¾Ãþoq¿zqJsAV°Z®XtQM³Ģ«X~Ø|MjµĕRxõÒSpgihgÆrÒ}lm¨^°ßĄ~Ú^ft¸RVpO¶¦²p@¡¡klëzÀĈÕÀLWĒ²¾Ljæz¨s¦©LRŀn§n oĘp¤y|½Xdng²­Ve«¥R}ºÙÔ\\ÐAyNlô²kºPGð{TX¾XJ²öNM¦ MÚpô IVjT\\ªzlQö|Êyn¬N]ÔhÎNltgĘIpvĐBº¤c|ðgzZQ¢¦ökzÐNNNNczh¨WZUĦèM|vĖLāîf¸°DXByÔsªAf´_{CsÒIìV¦k~NgÀBLÌnnJ¦@x HhnzO¤dtg°EªfµƌA¾zÊR¦YØZx¶FiĎǞÎzzÆVlª[´J¶H_NèaĔ¯´¢îHl]ÆEGtS©vÃÎiju¨SÄeð]ìIò¾Np_°tĞDXOôZhĐjÒmf `fgĄàTæ¤TnwĸBĈzvGǈê¬Zlx¸^ĘKĦÐ©Ŭk¤VähĲxŜ@¾¬¤^ÆîhÎ°iR²ºT|àC¾^¼_blÊIĒpİPpFÄ²Y^À[ªĨ^°²ÆNaT±ĎWƊUƴvĠEO¤tIfjľUZtS¼RxØ`LÈkÜÙdAhļv¤EötÒV²¹ôOĬÝĔqjaĆa"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                91865,
                                36960
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "610000",
                "properties": {
                    "cp": [
                        108.948024,
                        34.263161
                    ],
                    "id": "610000",
                    "name": "陕西",
                    "childNum": 10
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@~B@y¶BëűTcÑ±S·¥~Aíû¥§B}±iÇ{IH³{[£\\eYÙYëWWç³oVÓekNí^·Ò´åZÔ^}øycH©pyqwsóď_[½ÄqaX}ÙéBoÙÏKp½^½aËS maTys¸wQ©XOiĐāOs^Í}\\¹wÁ^o@¹ciS¿l÷lFrmKûEnÛLċÍ¹Ń[¥·yï§£_[ïťËãD«sAvÅyL}¸¹ìSYQë@@Ð~±Ý½\\ĤLgî©ÁGÕX¦ÍCwç§r´Ae^w°S¦ãQu°¯øu}@p­ICAKLG}~ÏAÙyI­ÓCKáU¥©¼WmnaèJÏëąJaVáM­ŏcjuQķĳapE}pYÍPĉûÚW¾}ĦNĚ¥Qákß¤Øs¶BĮ­{]sUEë¦¥«ÁpKÇ~»`ÿ_÷ăQWdw½ÕįVc}lKIµ¯}¹@§UwpgvÝ_M½íSéD]đZy¤nãfFl^ą¦ñLÃ®£T¯¸½EñÌÙ|Er¯cqVÝ½]obk­`«iN÷Ìs[« µúMwÈ`¥CÅyOc¢EÄ­Vsa¥ñ©vm¿\\¼x¸Q¢NnÑVé]µhÕmCDÏ£ßEÉgggV}TãDYjåH¯n¡JB@HGBjºÉ]yhoZË[C¯gUd¥QçwvQÎiGS´{vHÈIr}Ū|úW²°jľMºuC®·MÁr©P~¦ZZĚQZĜ¶Ä´@pĜQn\\[kL{¨dÆc¶z®ATåîgÀI²º¹rRw´e|QcÂÄC¬G¤¸Jtwæen[~¬¦UZwL~_²_x«V~]µąÃm³RN¦wVĘÄ¨Qy¢fArsºLy`ÄBÆ@@¨À|jeúVHfņiÂ^¤wDjÒYN¡~uKv§ÂW¨Ě@Ōm´Ô_O¤ňL¸]l¡ZÓðW¤}¦lØhĺ±þNRkäZtätOf´X®FaŖU¸~[IvlÂqöX¦á¤mĢPļsf`t|ÂCP|~M~ìÇĬGĖTv¤±H«_©B«_ ©®ßSlk°½Ïp[veky\\wAÃwB´ƽ¨£}]§d§OM±ĥE{ju[kĄ@@gúV|xy|ÆezR¬_ tČB¸~ÆHgtCÖ¶tM®n^ºül|WÌSjp¶òY´qĈiV©ADØ}ºbtp°F~uŘbüâô`~`¢C\\bMÄ`hQöN¾z²{¶Dkn¥µXN~Pj¨DgfĕÂs¬[nú¦IńödäÒ°s|\\Äh¾Ê¨yÚ¦ºæeºöÆÒ_yÊ¨û¶nº¹äHÊĞ³Ě|hĈĆç¨{|JÄinn|o`zUÐNLĠĺÈT¸ìNxlaM}i}©{WJHU{Q"
                        ],
                        [
                            "@@@WKHBLJD"
                        ],
                        [
                            "@@@GIABLHA"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                113793,
                                40312
                            ]
                        ],
                        [
                            [
                                113692,
                                34283
                            ]
                        ],
                        [
                            [
                                108623,
                                33550
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "620000",
                "properties": {
                    "cp": [
                        103.823557,
                        36.058039
                    ],
                    "id": "620000",
                    "name": "甘肃",
                    "childNum": 14
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@òQnZ Zj¾\\²_`MDzYtÓî~²lNª¶mN|ä£Hn­¬@@snqeH¿ta}a­CC©JrB¤gjâÅf­¤}Fvt cxrw HA¶HUf@@ÎwTâbT£ÌO«pQ°@|¢Mp°¹ĦÈe²Vlmv¶@@Ī·¤ÊI@Èsìz°¡Fhù@@lăv\\|iĦF²N¨P¨c~^¤ƾ§³AÄxBxz[fl\\uÐo¾l¯kàTª­`¬A`ª¬²G£SuHĕÈī}ëN{}OÁDs{_etOĻnġâ£W¥rõkÁJu\\·}ŕVEb­³WePãssãYQlýMĹ²g×k~¥X£Ôï¢Y^k·ŇK£PÓ`³ŋnę@§ÁXu¨L}vM¢ÑZiC£xÁ]ŅjGeùUf{i§¿@@AÅÃz_Kt¹qBez¡§RėÃxUM¥´QÄnĆ¶^}¬Uw`±}`KYx¥V}«\\fmxås·IH£D«ÁÃd Rf{³xQºq¹J±¿íhSæ­BµydÅ§c|Kl\\m[ěR@o³µÃYěęRYY¥O}ªÂqN¸D­vN¹iĽ±¯Xùũ{q~ÇJf«OoñÄćñsk}ë}^G}ĕ©ZċO¬ėe­W[|¡Fq|©Kj·®ÍZcÊX¸EZJbr¯FÐĂUÆirVÊi¹håQi°©\\MvsÎtWÅª³pÇaĝXÿoõ¿¿wWyNtiâeV£]oíQÏ~B}Pe©hzð|SWzyCX¢ZµF¤×SjL}l£QK·DiDK_u§k´Mjē[[^ÑM¥AurwcNIiÓh{cª¹x¡k¼Iry{]T{^y¯r±Đc`Û·sUiéKhÉc~ëQo¡d_FG»uÉV«[]¯¥b`ÆY|·@hĞ NÄ~|Z¤H²snY¥@YaħLIĈE~åxÏeM{SåZÅxÑuI¼v|FHdďhgOÃĎ¯ S kLÆrÌS^n²¤br²PQÊ©NÔUpdUKuMÆF¢iÒYHg^þªÉCp{vîRChĞV¶Ixxc~¤PLÆèkê WB@A@B@lX£@@¸[¤¿|÷BË¦]T¾]JîX_ÎvêWin ÜæDNpSp^´Bz|Jxãx¤rP´pTøs|^ÎlNjÎüČU¦YPrÀ^ªBmNkÊ|Ì YĄI~_VYÈ|Ìeh`|H°\\P âTzDtďs»ZFDOfC@¹Ĝnxx_tCŋæqL²vIÆºÅ¼©bu¦½£\\²¨c¼Ăt¸IØiCL¿î¹hÏDlē|gÓt¤yÇB¶©F«wUqōVlÕØř¥k«éãZ£z¡Î{EÏWs\\OM|nuf§}TÝæŉtoo£JÑiCOßZP¨aUÐÛfč¶SqjÒqÄćtó³T¤Fħ¶ġ|Ëĉoxã¤I·I{ªrgÏ¢ÍnåÄÓFrt¯~đV£razËrAjÕBçý£aXc{µtÍEÕÞÉV[GÁ`wſėïÖyDėŃm ǁØ³z}M{zwGÿzãNåCV±S¦³Gåu½D¡HÙ[«¤}UeR¹ã¥Já«RVeqgo×BkqSÏÅz»TÇǝ¢íA}ÁVicrIiħ[ŇÈ¦Ieº»XÙý½eJÓ£}fm[hUõj·gÃG|©jgt£]±pH÷_S_Á[åHő_oq`@¼afşˌ÷EʷiSÇLí|´\\\\ĪL@¥@ė´ɳQƯgj·PhĸbV¬buóOv¥SmičCęwħD³W}µ£GjAk¦IútŢĚĨŪ¤Ŧ¶Ǯ¨ʊĢƂ\\æPƲӠÜɈ`¼ňUðĊĖĐŌƤź̎ȨǺ¸ä¬¦Ĝ¨Nŀ z_Iq¬å¢ZJxÎ¸¤Ɗöb^ĘƬfƸÚà¾nÌ¿ĄĐÌřĞtôñnN¼¢vÀhȂĖ̚|ȎAǤŒȗɺϵɘύȝƯ`˾˻Ɯą[Æ£êiV̋ʄĠµÌĊvjåâ¡L¦aǎÞ´õ¼cp¢BĢ͢WĜòˀoÒC¨ňƃLĉÕÝ@ɛƕãyñï§÷KǃëÅTeW UƺZŲyê×Ŗyô¯ĺcÂßYt¿İo´ICãĸ[ðbŘD@ǥlýL£ovxºoP¹ŰzĤ}ßJüYLyaruæYŴ©µàĈ}ĆÖÌÚŐè{\\ùæy^ýöÎnĒ\\`Ș¤ÒĐpŰéĚcȪ¡ºMłþ°nƀĮînƔȴØłIłcÇu¯Ŋũ~ËaL¯y¡Ľŵǵϋȫ¦­ÏvĽƑÉM©Ƨɲßƒŕ~ÜŖăČ¿ĔlX[ÈFÖzjsÀ^pW¼FÚeS« IGiå}³âNºâRp[v»iB¦Iyf`ÒuAj­M¥ÆFwpgNkkďWcyxOu^oS|}ZD±WF½t Y×hY½m£¹FñÏWBĥºmmk`uAª÷ĪWÚêeuGvwsSoS²Ù`Tël¤ŮcDw|FBQųEĠtzl_dRCIDQBCIWJ]VBx»¼ØtuAF¥àÿuJ¬J¨z°F¦¿ĤhªbDcÂq¶L@LFDB"
                        ],
                        [
                            "@@O@@MucQKAR"
                        ],
                        [
                            "@@PeECMjD@"
                        ],
                        [
                            "@@VsUAI^JX"
                        ],
                        [
                            "@@KEK@\\HCA"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                109063,
                                36595
                            ]
                        ],
                        [
                            [
                                108593,
                                36350
                            ]
                        ],
                        [
                            [
                                105300,
                                37238
                            ]
                        ],
                        [
                            [
                                108619,
                                36299
                            ]
                        ],
                        [
                            [
                                109061,
                                36594
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "630000",
                "properties": {
                    "cp": [
                        101.778916,
                        36.623178
                    ],
                    "id": "630000",
                    "name": "青海",
                    "childNum": 8
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@Ni¼YtĐCsyáSO¯[G_{fg{ËZÇU}`ăJZË{lÉnMA©¿]OqZ¥ċVûiÍkM]Í{÷toSO³qw£äIwy{A]³oTMoCåÛjméXÍu`WIí^S½^Ì¥øAÀ{\\£·@@¤kWA@B@A@XéçlKÅ£Od}wwJUµĝDgíQuo|D©Êý]GhÑZ¡jEÅ NLvVocÓVMÉªR±Oq£am±T]ËqÅlKT°ÄčhPĐgGcEu{J»ÒvÆwæYTN|ÐfæwF}JćĨKBù×[¥[»zu@~­çkPwŝńåAeeP¥ąĖåM^³K¤ñsc@µ¯LIãª_¢\\]ĉÅÃE£rß±Åwóps]élC£L_÷čy¼À©l¶»åpwAkcp·D¨°màNµ¸@RçfQÏº@«o££Ga`qxq³G¡OvÍ­Dy ėnÇÛk@Ĕ±À¯DÇ`mW}@Ý¯ÌCªLhĂRÌatßNT»ª]^¦}¬iOtjWtrY¢Ph«NţSěMīæ@@ZĕQU}Ĺù¥N{yVßwiTsÏET{o{zīgÙoÚK[¯±ÖGæ}×@_¯M[Ïc@½|St»]véWÉis½~U^±M¥×º¥¼ÄORwì©~O»SŉhKr]×ado¥®Y» [ĕSuo«~gOģNUi^k©CceuQehďJif·M_eskxePyēNn]R¯¶¥§LuÓ¥m_q«\\y«Sstoě´|s eÖč@TÅsruUw_B°yQa~¡ąDWî[bÿ«®K|ë@«ãPmyÊƉÓVÑæÆDlVO~¸Lvz]ĄrKDs­C}üDoďujbĔV¾^`S¥Wñ@ącyXo´QpgsHq¾ċ¶ozÛ×á@qoÍ­Ns{^­Ag½i|Pko©Xit¥kFU}ĉ|ÉK¥ďz[ª©Du}TOLoÁPas÷eÚK±oJ±m¯SnÏneWr}YëZ}ha¯bWsVy³K¢dk¹ju¿DiÁQ·òIg «K»Lepëv¼R¿Å·P¥B¯yÃ_d@@ßFkgÛKÇxMÙď²åMÕ¨ïĨŻW¾ÍnwºrÚqÛ`v²»~EěĂm¸}~lRA´ODvºphòY Sj»lÆ_hNØtl®×NÒÊXv®\\y°qDNfc`«ÛXe~ĴFãÖm^è¸ZlgòjÞtU¶Æ¶\\¨b¢nZAú\\[¤w\\į[XÕCKpħJÞ}n\\~¶qĸ^\\¦pDêmÄVè]GÂÀzöĲgc}ÊiuĄGČq¤A¢b¤eòHĪ¡ÄËèV²àĨexJ¸^bÆrrĢoRXG°Ň~õHIl×DaRqJ^¢`yPÒ°dÄÐÐLºO¬b^ÚVN|¢d]òDWXalM¸õBÔ³¢ĺ³Va¡^fėÚċelMp»VEА^ĦŃOWQÇÓJťĐ´¥FevBªZƚViÌV~CÀHNhà`u|TÆaĚVŖ|EǄÀn¶CŜÀ°Dư\\\\ĤLÖXB^ðŞÊCnnÌhĶCTIz¤H~¶´XĨCĚxĎDnj¦TuôPvaU«agķ¸OiưhɴRĘ³¦@@ĩK[[³î{ÈKjTʸøFŠˋbe@»r_pŒ`æGÂ\\T`ø`G²o¤^hsªiH{Ä¸höiV\\gn~eÔ¤fIþ¾Ú¼Wf¹J¥ňÇ\\ĨJjq dUjÂ~îBǞ¡SÈy¼ÐÆTrlØAhprfU¬Qâ¦IäQºVf£~\\¬GÚC¢v¾Hæ¥´²TUæDäMĀyxH|y~N´yǂ×nń ĘzCðÕƀĘ_xHÂ\\ÊUÖÝÎF¶s|Wd¤bèþÖABiÌqby¤qĒU°}sEqÔæÃÎmÐ¡hq|©¸JJ£äpwĊÌĢ{ĨµE£´SsôÃĈÑrirTĎµÜeVÏb§YOàPDjÒ¤IppŊsÞåS¨~vemN{Pt[XÐ|F¢Í¤yäYê ¬¦lŚÖ×UkŎrV¬xªEAµÈzs£ÔhĔ{CkÐºgÀíK jD×·Jāsd»±§¤[¾v¥ªaÆ»Å¹uJK±rŌåsD`wmwºě"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                105298,
                                37238
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "640000",
                "properties": {
                    "cp": [
                        106.278179,
                        38.46637
                    ],
                    "id": "640000",
                    "name": "宁夏回族自治区",
                    "childNum": 5
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@E¯¢ëyÇt@ÉJ£ĩ¸@@uµkn±UÇfºĥo¯¡N@{¯R¬oP¤ËaSSáxÍ@@VeGBµGxwqdus~E®£ÆeáhiA£qªIDD®~bbÀsGrftm@@®«Gm¤{ãnM©µM±k}ÔísyZCN_±`[½YimYñR[GµrdÁaCg©ÀģE¥y¯§«IIvßĀE¦Bsv»×w¼UtADBBBJGFDJNv@@P{ECxŭdk£ì_S±ÚTTptxHuvéfÙĩX©øB_vnl¹nAĦXòÐºEn¤¾gZZØsE¾XC²Y{~pT]PvwdzĐXllMho xÅEN¦i®BÑve_z¥JAju¼o\\Qá¹áM´æ~HjJT¬Ùf»EoX¿]itÕyÇEW\\f^ĒlX¢ǢTƬbÆzƂZò°ĔĎzìRÌ_ŎHbpN´ÖGÆt¾IàÂ¹æYNÆn~pr²Ð\\jOp\\]~v¦Mfpk¢²VO´lÊÄ¨^vQhd¸¦ÌĜi]ĈĺvĔkf\\®ècÊp~St«Wĕ~iïĞ­Jyeíĭÿåĉ{į]ōßĵÓÆ¥âĐ{yƪÎU²fªGbtªM®îmÊ×ie©ÖHÎ©ôyTiË{Xûk]¹­mNsÕµDhsG}Å·Asċ`«Q yf{ÅwzU{"
                        ],
                        [
                            "@@Lk`yğsFŴ"
                        ],
                        [
                            "@@AIAACRHE"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                109844,
                                37990
                            ]
                        ],
                        [
                            [
                                108594,
                                36341
                            ]
                        ],
                        [
                            [
                                108620,
                                36307
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "650000",
                "properties": {
                    "cp": [
                        87.617733,
                        43.792818
                    ],
                    "id": "650000",
                    "name": "新疆",
                    "childNum": 23
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@ȁĕ¿g¡uM»òmsóŚĝďËÀămËß½ƷÙƫeėa]Ɖõ·£wÍYI¡«æJr`yĿMě§«¥·ãǹ̍ȧƣŹďŋĉĕVï»Ňɇ_ӟÛOƱ[åġƁ§ʉµǭ£ťħũšęsJùl¥BiJySĵDËgmmÉDŝïA]ÕWģK[[Ư¯Cś¿µD¿mǃFŕ{ęUÅbSv{ß_Mg¿GD}ËUjƙUYA©fu¦E³ŦďÔIRÈXńP]ĥFЏ¼UoNfkČĘÙe¢] b´UĹ´¡AÓöN·bkWXñC^¡cM{ÙU]«a¹PÏKÃÏ¯cOÑz_]¡rIQbØCJköGň}H¯WpQqġqaÅ]I·wħf±ßçUÃÌĩ¢ñG£f¡a£BċrăHvÉjd~ıhyõ¿HÁç^ÃUénąbibērīÞóP±ºÑUsõ£FĻugcBÛÚÇlK×_w»QTYsĽVeiJ£sPğFƳuVƉčXS²bÅM¯±ħ]©¿\\]±ZÃEoįOđoÉJak»`½]ßD{¹SQ±j¯gÍÅí£]½«ś@ıwgã£UūlªÏĥėL·]kw«YǇéuHćyAķxmSå£ßSăeh_eÑnďigóYWPĝC¯so`½MñëJï^fÃ§TviÍjuÄTªsHÅFk^íG³¡ē°çbM`Gµ³I\\k©ÅUyyǝÍjčµEw×Y¥ZÉQ½yƋBe¶©¯Fsh£cyPgmGw ¥@ImmKË¿Ah}M¥lëUÑJDt|³`e©BÓtAzW¯Ce·ĂíĕKuN{ĥçVXYg§dyMMMÏMly¥õR¡Yhyïd{¹£ďAouėJshkÍMÓg^«MmÉzõ{Ryk©S[Çz]p·kÍÇl^z£Õ`­ePi¾¥H³Q¨åTÅh_xD°­Zd¶NĚTqhdxuO_^EÆ¢HòO¨ĀÒ|²óCYmsp·[ZEsĉ¬ewNmYzek½h·NÉk¯PõÔĥkđ¨ilÙh}e¥bã¬ÛKSr«Ktĉry llT²£p§@{¿XGÉdÏGK]ÙVfÚ£ÈYõA­eòtj¤NKÂ¦GKx³ºQzÌĆÉ¼ln×àŭì÷lS§VA\\m¶HĂd¦ĿjWÛzia]ËI}VumáaXE¥ÖFE]u­@}´Ûc]o¥U¦SCn^UTejxFps¾ xC`Ădbú`¼r J^]xvo»®Wā¶£Ġz`Fê®axÓ hcQº`¦HµècÂZ¤o²\\^cââKäN{ÙNÝ¶uMÇ^|§GßlŭDçjÅul±AmaïVwJ«vTp©ðX²¼}lTtN¸ohuâÛWo@ }Xc®¹dXæ©úzd®PĊYļlæDn\\sĔmÃ\\HÚ¾H¾ÎÎXÄ`ÆKtŘjn}vZeð¢Ð~h°Ar@ĪF¨iZħĖhdHt`¢[æ¤NæwpĜ]vp@Â®Üvè¤¦VIÙ^ò³a­fglÁÜjvøV¢°¾s@ĄHW\\ÈHoqL¡¤¢P[ª\\zPdà®ºfCn}Ä hTĀjülª²B¾j]ÌHbq¾{ÊfºoÈĤcDoÄN¨]Âr~O¬rS¤mPø¨ĊEüHN¨z¾Càdì_¸TR\\ÈLÜÎ]¶°Uh\\òJÈÊ²ÀHlrÆb|tâDĞìY° Vö]¬`êZªG ÐlC~ÆvƞL¬Y¨ q`y®pBJ¤ÄT®nLvmz\\¯Vh´b³Ā`¢nCj®ŀ¤OæJvĺthģõ¢gtÈZÖzÔ^ÈajbUT_ÄgnPëZMZ¦²t¶K¢ȝ˔Uøk¦Gô±¦ZnK¤ZÆ]eĜ}Ò¾ĶWpñÜ×fmT|eh­}wDõoOf`zå´|ĤÖJ^ì¨y¢B¢H|{ RzDj¢|teäEòpvîEs@øD²j¸OJd¾h¢Ql°E~p]âh nNzªlĆL´h´Ýk©ÒL¼dM\\ĆtôV¨yŢÜprh\\ĺ¯äćƕÞ_ænB¼¨´T¦[ºN¬¸ºP´ƤúŢĲǘ Ę^àĂ¤rCv Ğ^è²ªĒI èN\\¬m^u[¤LvWX¤»\\ĦÕŀwA_ÈVĶ Wfb¨HìsÂXvĂQ VW®`æ´fĘFä^{Êmd}ÊÁhNĂll|Ô|Âx¤qĬhĖKD ČâfÈs|vÈaÏÌF¬ÏϪefp°AÄVX~dÎÀÊbŀfŚFƠQjÜDWƎ´`¬ª^TnàÄu®`t¤lFdÁyÄFÈrXª|ÀA¤VôOrlČ_vsÈEì[¢oÚx[ÄBļd^`ĶC@stCloeZkoe¦uB}x[aJ]¿G§eiQ¤}Oe@ÈnbÊoxPCs¿BsÇyXoÌwÊEô©JögeCwêºlB»v³¾£RbiÜuxwĪR^sÖfoôTÆa¦\\vzÂVT\\İcÐR~mG¨sJîav½êCĦRFłg_Jº¯¶ApaĬq¬M~l±Ð¥L]oRIdk½ÝfQØñÚóÂFÒjkPz[_­Ü¹£ceó¦EXiµYµ{q[é¿²ßO]·M¯Zƫœ§«íęūIāĐ±BuÝOvLgj^cäT bSäParkĀOeªh@ª«¾yŐUĞdĒGŜL²EŠÅÚZ]ÆHòabŘPĄrÌWP¤{ÎMºPUØPŞB`¾S¸}ØZĖĒPy˼őðÂaÄÃ¦k|ÉNäYð¤[Ê©¦³@¸iĴw¬ŊbɨrYgci¿GÙs½¨E¤aĎCĆŵlË¼ĭ~×ĺƯnŗ§ϊˡnơ"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                98700,
                                43754
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "810000",
                "properties": {
                    "cp": [
                        114.173355,
                        22.320048
                    ],
                    "id": "810000",
                    "name": "香港",
                    "childNum": 18
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@nIjOÌr@@ W@U~ZB@PMdWfsNù¹L^q²R¦z¨C@@u^kFI·y@AEÃVd×¡SowM®np×psQÑ}q]rsV¥oNÂ`RĲp@păXC¨Ĩð"
                        ],
                        [
                            "@@X@L¦b["
                        ],
                        [
                            "@@HPB@IO"
                        ],
                        [
                            "@@@B@@HDGE"
                        ],
                        [
                            "@@@@@A@B"
                        ],
                        [
                            "@@@BDAC@"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                116769,
                                23045
                            ]
                        ],
                        [
                            [
                                116883,
                                22747
                            ]
                        ],
                        [
                            [
                                117096,
                                22795
                            ]
                        ],
                        [
                            [
                                117064,
                                22919
                            ]
                        ],
                        [
                            [
                                117064,
                                22920
                            ]
                        ],
                        [
                            [
                                117118,
                                22859
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "820000",
                "properties": {
                    "cp": [
                        113.54909,
                        22.198951
                    ],
                    "id": "820000",
                    "name": "澳门",
                    "childNum": 8
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@gÊrã¥s"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                116280,
                                22638
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "100000",
                "properties": {
                    "cp": null,
                    "id": "100000",
                    "name": "",
                    "childNum": null
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@CECCECE@E@EBCDCFAFBFɼनDFDDFDFBFAFADCDEBEAEɻध"
                        ],
                        [
                            "@@ECEAE@E@EDCDAF@H@FDDئݐDDFBH@F@DCFEBE@EAEAEإݍ"
                        ],
                        [
                            "@@CEECEAEBEBEDCDAF@FDHҪࡢDDDDFBH@FADCDEBE@EAEҩࡡ"
                        ],
                        [
                            "@@@@A@ECECCEAEAEBEBCDCF@F@@ࡄBHBDFFFBFBFAFADEBCBG@ࡅ"
                        ],
                        [
                            "@@ƜΤĪ͆BFDDFDF@F@FCFCBEBEAEĩͅ@AƛΧAAƉɱCEECE@E@EBEDAFAF@FBFƊɲ"
                        ],
                        [
                            "@@CCECE@EBEDCDCF@FBFDFפ۪FDFBF@FAFADEBE@E@ECEץۧ"
                        ],
                        [
                            "@@ǪÀˠźFBH@FADCDEBE@EAECEEAˡŹCAǫÁ@@ѩıE@EBEDCDAFAFBFDFDDFBѪĲ"
                        ],
                        [
                            "@@@DoŐABʾ@BDΎ@DtŀDFDFDDF@H@FADCDEBE@EsĽCΉʽpō|Ù@E@EAECEEAEAE@EDEDAD}Þ"
                        ],
                        [
                            "@@¼ĸ¨ĸƨpƊLǎCĈBFBFDFFBFBFAFAFCBEBEDĉ@AKǍ@AqƋ@AƫAA§ĹAA»ķAAÓĭCCECEAEBEBEDAFAF@FBFÖĬ"
                        ],
                        [
                            "@@·ǺĉȄćƈ·îȇʆCF@F@FBFDDFDFBHADAFCȈʅ@Aºí@AĊƉBAĊȇ@Aºǻ@A`Û@EAEACECECE@EBEDCDAF_Ü"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                125460,
                                24024
                            ]
                        ],
                        [
                            [
                                124081,
                                21305
                            ]
                        ],
                        [
                            [
                                122342,
                                18440
                            ]
                        ],
                        [
                            [
                                121931,
                                15402
                            ]
                        ],
                        [
                            [
                                121535,
                                11459
                            ]
                        ],
                        [
                            [
                                118318,
                                7319
                            ]
                        ],
                        [
                            [
                                115003,
                                3620
                            ]
                        ],
                        [
                            [
                                110859,
                                6236
                            ]
                        ],
                        [
                            [
                                112772,
                                11642
                            ]
                        ],
                        [
                            [
                                112466,
                                15595
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "710000",
                "properties": {
                    "cp": [
                        121.509062,
                        25.044332
                    ],
                    "id": "710000",
                    "name": "台湾",
                    "childNum": 0
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            "@@IUaVabLVbF|aL_OKWP"
                        ],
                        [
                            "@@EPRCfQ\\[FeamhEVF"
                        ],
                        [
                            "@@UL@D@XQaOO£EmLLV"
                        ],
                        [
                            "@@ūøo|ÕƊ©ƨcĘďUtÀǾv¦\\ƎuêNĨÖĚÐòĪǈºÄhº¦ÎÌĶ®¸ĢÖ¶¾|ÌänĆ Ú¢®` ĞÜ¤Ģ\\ªfâøöY«]N{ĆuÚD|ėA{á¿óđGđ¨īMõc§¯cïĵƏU`÷ñƅÃȇA±qÁcą§qÛ^·ic_×}ÃñğwÅ¡řÓcÇ±ÇȏWƧJý£Lñ{Y½ãF§ĚVCòeôÑĶÃ°½r"
                        ],
                        [
                            "@@¡xJ®QPzÌGZ«H"
                        ],
                        [
                            "@@@AG@@DCF@BA@DB@DDAAABABCDA@A@A"
                        ],
                        [
                            "@@fAKÃYÆ"
                        ],
                        [
                            "@@@@CAEBKD@@BDD@FBDCDA@ABA"
                        ],
                        [
                            "@@¸KQ¥¢"
                        ],
                        [
                            "@@ @CZM"
                        ],
                        [
                            "@@ÂAjùñ¬F"
                        ],
                        [
                            "@@Ac}]"
                        ]
                    ],
                    "encodeOffsets": [
                        [
                            [
                                126660,
                                26534
                            ]
                        ],
                        [
                            [
                                126431,
                                26375
                            ]
                        ],
                        [
                            [
                                127539,
                                26540
                            ]
                        ],
                        [
                            [
                                123335,
                                22980
                            ]
                        ],
                        [
                            [
                                122518,
                                24117
                            ]
                        ],
                        [
                            [
                                126515,
                                26342
                            ]
                        ],
                        [
                            [
                                122375,
                                24193
                            ]
                        ],
                        [
                            [
                                126526,
                                26336
                            ]
                        ],
                        [
                            [
                                122427,
                                24235
                            ]
                        ],
                        [
                            [
                                124384,
                                23221
                            ]
                        ],
                        [
                            [
                                124427,
                                22618
                            ]
                        ],
                        [
                            [
                                122288,
                                23775
                            ]
                        ]
                    ]
                }
            }
        ]
    });
}));
