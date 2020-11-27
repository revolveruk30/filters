(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        338: function(e, t, r) {
            var n;
            ! function(r) {
                function a(e) {
                    return ["li", "p", "h1", "h2", "h3", "h4", "h5", "h6", "dd"].forEach((function(t) {
                        e = e.replace("</" + t + ">", ".")
                    })), "." != (e = e.replace(/<[^>]+>/g, "").replace(/[,:;()\/&+]|\-\-/g, " ").replace(/[\.!?]/g, ".").replace(/^\s+/, "").replace(/[\.]?(\w+)[\.]?(\w+)@(\w+)[\.](\w+)[\.]?/g, "$1$2@$3$4").replace(/[ ]*(\n|\r\n|\r)[ ]*/g, ".").replace(/([\.])[\.]+/g, ".").replace(/[ ]*([\.])/g, ". ").replace(/\s+/g, " ").replace(/\s+$/, "")).slice(-1) && (e += "."), e
                }
                var i = function(e) {
                    this.text = e ? a(e) : this.text
                };

                function o(e) {
                    return new i(e)
                }
                i.prototype.fleschKincaidReadingEase = function(e) {
                    return e = e ? a(e) : this.text, Math.round(10 * (206.835 - 1.015 * this.averageWordsPerSentence(e) - 84.6 * this.averageSyllablesPerWord(e))) / 10
                }, i.prototype.fleschKincaidGradeLevel = function(e) {
                    return e = e ? a(e) : this.text, Math.round(10 * (.39 * this.averageWordsPerSentence(e) + 11.8 * this.averageSyllablesPerWord(e) - 15.59)) / 10
                }, i.prototype.gunningFogScore = function(e) {
                    return e = e ? a(e) : this.text, Math.round(.4 * (this.averageWordsPerSentence(e) + this.percentageWordsWithThreeSyllables(e, !1)) * 10) / 10
                }, i.prototype.colemanLiauIndex = function(e) {
                    return e = e ? a(e) : this.text, Math.round(10 * (this.letterCount(e) / this.wordCount(e) * 5.89 - this.sentenceCount(e) / this.wordCount(e) * .3 - 15.8)) / 10
                }, i.prototype.smogIndex = function(e) {
                    return e = e ? a(e) : this.text, Math.round(1.043 * Math.sqrt(this.wordsWithThreeSyllables(e) * (30 / this.sentenceCount(e)) + 3.1291) * 10) / 10
                }, i.prototype.automatedReadabilityIndex = function(e) {
                    return e = e ? a(e) : this.text, Math.round(10 * (this.letterCount(e) / this.wordCount(e) * 4.71 + this.wordCount(e) / this.sentenceCount(e) * .5 - 21.43)) / 10
                }, i.prototype.textLength = function(e) {
                    return (e = e ? a(e) : this.text).length
                }, i.prototype.letterCount = function(e) {
                    return (e = (e = e ? a(e) : this.text).replace(/[^a-z]+/gi, "")).length
                }, i.prototype.sentenceCount = function(e) {
                    e = (e = e ? a(e) : this.text) ? a(e) : this.text;
                    var t = 0;
                    return e.split(/[\.!?]/).forEach((function(e) {
                        /\w/g.test(e.trim()) && t++
                    })), t
                }, i.prototype.wordCount = function(e) {
                    return (e = e ? a(e) : this.text).split(/[^a-z0-9']+/i).filter((function(e) {
                        return e.length > 0
                    })).length || 1
                }, i.prototype.averageWordsPerSentence = function(e) {
                    return e = e ? a(e) : this.text, this.wordCount(e) / this.sentenceCount(e)
                }, i.prototype.averageSyllablesPerWord = function(e) {
                    e = e ? a(e) : this.text;
                    var t = 0,
                        r = this.wordCount(e),
                        n = this;
                    return e.split(/\s+/).forEach((function(e) {
                        t += n.syllableCount(e)
                    })), (t || 1) / (r || 1)
                }, i.prototype.wordsWithThreeSyllables = function(e, t) {
                    e = e ? a(e) : this.text;
                    var r = 0,
                        n = this;
                    return t = !1 !== t, e.split(/\s+/).forEach((function(e) {
                        e.match(/^[A-Z]/) && !t || n.syllableCount(e) > 2 && r++
                    })), r
                }, i.prototype.percentageWordsWithThreeSyllables = function(e, t) {
                    return e = e ? a(e) : this.text, this.wordsWithThreeSyllables(e, t) / this.wordCount(e) * 100
                }, i.prototype.syllableCount = function(e) {
                    var t, r = 0,
                        n = 0;
                    e = e.toLowerCase().replace(/[^a-z]/g, "");
                    var a = {
                        simile: 3,
                        forever: 3,
                        shoreline: 2
                    };
                    if (a.hasOwnProperty(e)) return a[e];
                    return [/^un/, /^fore/, /ly$/, /less$/, /ful$/, /ers?$/, /ings?$/].forEach((function(t) {
                        e.match(t) && (e = e.replace(t, ""), n++)
                    })), t = e.split(/[^aeiouy]+/gi).filter((function(e) {
                        return !!e.replace(/\s+/gi, "").length
                    })).length, r = t + n, [/cial/, /tia/, /cius/, /cious/, /giu/, /ion/, /iou/, /sia$/, /[^aeiuoyt]{2,}ed$/, /.ely$/, /[cg]h?e[rsd]?$/, /rved?$/, /[aeiouy][dt]es?$/, /[aeiouy][^aeiouydt]e[rsd]?$/, /^[dr]e[aeiou][^aeiou]+$/, /[aeiouy]rse$/].forEach((function(t) {
                        e.match(t) && r--
                    })), [/ia/, /riet/, /dien/, /iu/, /io/, /ii/, /[aeiouym]bl$/, /[aeiou]{3}/, /^mc/, /ism$/, /([^aeiouy])\1l$/, /[^l]lien/, /^coa[dglx]./, /[^gq]ua[^auieo]/, /dnt$/, /uity$/, /ie(r|st)$/].forEach((function(t) {
                        e.match(t) && r++
                    })), r || 1
                }, e.exports ? e.exports = o : void 0 === (n = function() {
                    return o
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        442: function(e, t, r) {
            var n = r(443),
                a = r(444),
                i = r(445),
                o = r(446),
                s = r(447),
                u = r(90)().tokenize,
                l = function(e, t, r, n, a) {
                    let i = 0,
                        o = 0;
                    if (r && (i = e / r), n) {
                        o = t / n;
                        const e = 15;
                        o /= Math.sqrt(a > e ? a / e : 1)
                    }
                    return i && o ? (i + o) / 2 : o || i
                };
            e.exports = function(e) {
                if ("string" != typeof e) throw Error("wink-sentiment: input phrase must be a string, instead found: " + typeof e);
                var t = u(e);
                if (0 === t.length) return {
                    score: 0,
                    normalizedScore: 0
                };
                var r, c, d, h, g, p, m = 0,
                    f = 0,
                    v = 0,
                    b = 0,
                    y = 0;
                for (r = 0, c = t.length; r < c; r += 1) switch (d = (h = t[r]).value, h.tag) {
                    case "emoji":
                        (g = n[d]) && (m += g, h.score = g, b += 1), y += 1;
                        break;
                    case "emoticon":
                        (g = i[d]) && (m += g, h.score = g, b += 1), y += 1;
                        break;
                    case "hashtag":
                        (g = a[d.slice(1).toLowerCase()]) && (h.score = g, f += g, v += 1);
                        break;
                    case "word":
                        d = d.toLowerCase(), p = 1, r < c - 1 && s[d] && void 0 !== s[d][t[r + 1].value.toLowerCase()] ? (g = s[d][t[r + 1].value.toLowerCase()], h.grouped = 1, p = 2) : g = a[d] || 0, (r > 0 && o[t[r - 1].value.toLowerCase()] || r > 1 && o[t[r - 2].value.toLowerCase()]) && (g = -g, h.negation = !0), m += g, r += p - 1, g && (h.score = g, b += 1), y += p
                }
                return {
                    score: m + f,
                    normalizedScore: +l(f, m, v, b, y).toFixed(4),
                    tokenizedPhrase: t
                }
            }
        },
        443: function(e, t) {
            e.exports = {
                "ߘ": 1,
                "❤": 4,
                "♥": 3,
                "ߘ": 3,
                "ߘ": 0,
                "ߘ": 4,
                "ߘ": 3,
                "ߑ": 3,
                "ߒ": 3,
                "ߑ": 3,
                "ߘ": 2,
                "☺": 3,
                "♡": 3,
                "ߑ": 3,
                "ߘ": -2,
                "ߙ": 2,
                "✌": 2,
                "ߘ": 2,
                "ߘ": 2,
                "ߙ": 3,
                "ߙ": 2,
                "ߒ": 3,
                "ߘ": 2,
                "ߘ": -2,
                "ߒ": 4,
                "ߒ": 4,
                "ߘ": 3,
                "ߘ": -1,
                "ߘ": 1,
                "ߎ": 4,
                "ߘ": 2,
                "☯": 0,
                "ߌ": 3,
                "ߒ": 3,
                "ߒ": 4,
                "✨": 2,
                "ߘ": 0,
                "ߒ": 3,
                "★": 1,
                "█": 0,
                "☀": 2,
                "ߘ": -1,
                "ߘ": 2,
                "ߘ": 0,
                "ߒ": 3,
                "ߘ": 3,
                "ߙ": 2,
                "ߘ": 0,
                "ߎ": 3,
                "ߒ": 4,
                "ߘ": 2,
                "ߔ": 1,
                "ߒ": 1,
                "ߔ": -1,
                "ߒ": 4,
                "ߒ": 2,
                "ߒ": 3,
                "♫": 1,
                "ߘ": -1,
                "ߘ": 2,
                "ߘ": 2,
                "ߘ": 0,
                "ߘ": -1,
                "ߘ": 1,
                "ߑ": 1,
                "ߒ": -1,
                "ߘ": 3,
                "ߘ": 4,
                "ߘ": 3,
                "©": 1,
                "ߑ": 0,
                "ߒ": 3,
                "ߐ": 0,
                "☕": 1,
                "ߑ": 2,
                "✋": 1,
                "ߎ": 4,
                "ߍ": 2,
                "❄": 3,
                "ߘ": 1,
                "ߘ": -2,
                "ߒ": 1,
                "ߒ": -1,
                "ߘ": -1,
                "ߘ": 1,
                "►": 1,
                "✈": 2,
                "ߔ": 2,
                "ߘ": 0,
                "⚽": 3,
                "ߘ": -2,
                "ߑ": 4,
                "ߘ": 1,
                "ߑ": 2,
                "ߍ": 2,
                "ߎ": 4,
                "ߘ": -2,
                "ߐ": 2,
                "☆": 2,
                "ߍ": 1,
                "ߎ": 4,
                "ߎ": 2,
                "ߘ": 0,
                "ߘ": -1,
                "ߘ": -2,
                "✊": 2,
                "ߘ": -1,
                "ߘ": -1,
                "ߒ": 2,
                "ߒ": 3,
                "ߑ": -1,
                "ߒ": 2,
                "✔": 1,
                "ߘ": -1,
                "⚡": 1,
                "ߙ": 2,
                "ߎ": 3,
                "ߒ": -1,
                "ߎ": 3,
                "➡": 1,
                "ߘ": 3,
                "ߘ": 1,
                "ߑ": 2,
                "ߒ": 3,
                "ߌ": 2,
                "ߎ": 3,
                "ߌ": 2,
                "ߔ": 1,
                "❗": 1,
                "ߑ": 1,
                "ߏ": 4,
                "✖": 2,
                "☝": 2,
                "ߘ": 4,
                "⛄": 3,
                "ߑ": 2,
                "♪": 3,
                "ߍ": 3,
                "ߒ": 2,
                "ߔ": 0,
                "ߌ": 3,
                "ߑ": 2,
                "ߌ": 3,
                "ߙ": 3,
                "➜": 1,
                "ߑ": 1,
                "ߒ": 1,
                "ߍ": 3,
                "ߙ": -1,
                "ߌ": 3,
                "ߍ": 2,
                "⭐": 3,
                "▪": 1,
                "ߎ": 3,
                "━": 1,
                "☷": 0,
                "ߐ": 2,
                "ߙ": 2,
                "ߌ": 3,
                "ߒ": 2,
                "ߐ": 3,
                "ߌ": 2,
                "ߑ": 2,
                "ߎ": 2,
                "ߑ": 2,
                "ߎ": 2,
                "ߑ": 2,
                "ߍ": 3,
                "ߍ": 2,
                "®": 1,
                "ߍ": 3,
                "ߘ": 3,
                "☑": 1,
                "ߏ": 2,
                "ߘ": -2,
                "│": 2,
                "ߒ": 0,
                "ߍ": 3,
                "▶": 1,
                "ߘ": 0,
                "ߎ": 3,
                "ߍ": 3,
                "ߒ": 3,
                "ߓ": 2,
                "ߘ": -1,
                "ߌ": 3,
                "ߒ": 3,
                "ߒ": 2,
                "ߏ": 3,
                "ߒ": 2,
                "☔": 1,
                "ߑ": 3,
                "߇": 3,
                "░": 0,
                "ߍ": 2,
                "ߑ": 2,
                "☁": 2,
                "ߌ": 3,
                "ߘ": 0,
                "ߓ": 0,
                "↿": 3,
                "ߐ": 2,
                "ߑ": 2,
                "ߍ": 1,
                "ߘ": 2,
                "ߑ": 2,
                "↾": 3,
                "ߒ": 4,
                "ߌ": 3,
                "ߍ": 2,
                "ߍ": 3,
                "ߑ": 1,
                "ߒ": 1,
                "ߍ": 3,
                "ߘ": 0,
                "߇": 3,
                "ߘ": 1,
                "▓": 0,
                "ߚ": -2,
                "ߘ": 3,
                "ߌ": 3,
                "ߙ": 2,
                "⚠": 0,
                "ߎ": 2,
                "╯": 0,
                "ߍ": 2,
                "ߍ": 2,
                "✓": 1,
                "ߑ": 0,
                "ߙ": 1,
                "ߍ": 2,
                "ߍ": 2,
                "ߒ": 3,
                "ߑ": 0,
                "ߐ": 2,
                "ߎ": 3,
                "▬": 2,
                "ߘ": 0,
                "ߐ": 3,
                "ߎ": 3,
                "ߏ": 3,
                "ߍ": 1,
                "ߓ": 2,
                "ߑ": 2,
                "ߌ": 4,
                "ߚ": -1,
                "ߐ": 3,
                "║": 1,
                "ߐ": 0,
                "߇": 3,
                "ߑ": -3,
                "ߚ": 3,
                "✿": 2,
                "ߓ": 1,
                "ߐ": 3,
                "ߌ": 3,
                "┊": 5,
                "ߐ": 3,
                "ߌ": 1,
                "ߐ": 1,
                "ߎ": 2,
                "ߒ": 2,
                "ߒ": 1,
                "⛔": 3,
                "●": 1,
                "ߏ": 1,
                "ߒ": 2,
                "ߒ": 4,
                "ߚ": 1,
                "ߘ": 1,
                "ߓ": 1,
                "═": 0,
                "♦": 2,
                "ߒ": 1
            }
        },
        444: function(e, t) {
            e.exports = {
                abandon: -2,
                abandoned: -2,
                abandons: -2,
                abducted: -2,
                abduction: -2,
                abductions: -2,
                abhor: -3,
                abhorred: -3,
                abhorrent: -3,
                abhors: -3,
                abilities: 2,
                ability: 2,
                aboard: 1,
                aborted: -1,
                aborts: -1,
                absentee: -1,
                absentees: -1,
                absolve: 2,
                absolved: 2,
                absolves: 2,
                absolving: 2,
                absorbed: 1,
                abuse: -3,
                abused: -3,
                abuses: -3,
                abusing: -3,
                abusive: -3,
                accept: 1,
                acceptable: 1,
                acceptance: 1,
                accepted: 1,
                accepting: 1,
                accepts: 1,
                accessible: 1,
                accident: -2,
                accidental: -2,
                accidentally: -2,
                accidents: -2,
                acclaim: 2,
                acclaimed: 2,
                accolade: 2,
                accomplish: 2,
                accomplished: 2,
                accomplishes: 2,
                accomplishment: 2,
                accomplishments: 2,
                accusation: -2,
                accusations: -2,
                accuse: -2,
                accused: -2,
                accuses: -2,
                accusing: -2,
                ache: -2,
                achievable: 1,
                aching: -2,
                acquit: 2,
                acquits: 2,
                acquitted: 2,
                acquitting: 2,
                acrimonious: -3,
                active: 1,
                adequate: 1,
                admire: 3,
                admired: 3,
                admires: 3,
                admiring: 3,
                admit: -1,
                admits: -1,
                admitted: -1,
                admonish: -2,
                admonished: -2,
                adopt: 1,
                adopts: 1,
                adorable: 3,
                adoration: 3,
                adore: 3,
                adored: 3,
                adores: 3,
                adoring: 3,
                adoringly: 3,
                advanced: 1,
                advantage: 2,
                advantageous: 2,
                advantageously: 2,
                advantages: 2,
                adventure: 2,
                adventures: 2,
                adventurous: 2,
                adversary: -1,
                advisable: 1,
                affected: -1,
                affection: 3,
                affectionate: 3,
                affectionateness: 3,
                afflicted: -1,
                affordable: 2,
                affronted: -1,
                aficionados: 2,
                afraid: -2,
                aggravate: -2,
                aggravated: -2,
                aggravates: -2,
                aggravating: -2,
                aggression: -2,
                aggressions: -2,
                aggressive: -2,
                aggressiveness: -2,
                aghast: -2,
                agog: 2,
                agonise: -3,
                agonised: -3,
                agonises: -3,
                agonising: -3,
                agonize: -3,
                agonized: -3,
                agonizes: -3,
                agonizing: -3,
                agree: 1,
                agreeable: 2,
                agreed: 1,
                agreement: 1,
                agrees: 1,
                alarm: -2,
                alarmed: -2,
                alarmist: -2,
                alarmists: -2,
                alas: -1,
                alert: -1,
                alienation: -2,
                alive: 1,
                allegation: -2,
                allegations: -2,
                allergic: -2,
                allow: 1,
                ally: 2,
                alone: -2,
                altruistic: 2,
                amaze: 2,
                amazed: 2,
                amazes: 2,
                amazing: 4,
                ambitious: 2,
                ambivalent: -1,
                amicable: 2,
                amuse: 3,
                amused: 3,
                amusement: 3,
                amusements: 3,
                anger: -3,
                angered: -3,
                angers: -3,
                angry: -3,
                anguish: -3,
                anguished: -3,
                animosity: -2,
                annoy: -2,
                annoyance: -2,
                annoyed: -2,
                annoying: -2,
                annoys: -2,
                antagonistic: -2,
                anti: -1,
                anticipation: 1,
                anxiety: -2,
                anxious: -2,
                apathetic: -3,
                apathy: -3,
                apeshit: -3,
                apocalyptic: -2,
                apologise: -1,
                apologised: -1,
                apologises: -1,
                apologising: -1,
                apologize: -1,
                apologized: -1,
                apologizes: -1,
                apologizing: -1,
                apology: -1,
                appalled: -2,
                appalling: -2,
                appealing: 2,
                appease: 2,
                appeased: 2,
                appeases: 2,
                appeasing: 2,
                applaud: 2,
                applauded: 2,
                applauding: 2,
                applauds: 2,
                applause: 2,
                appreciate: 2,
                appreciated: 2,
                appreciates: 2,
                appreciating: 2,
                appreciation: 2,
                apprehensive: -2,
                appropriate: 2,
                appropriately: 2,
                approval: 2,
                approved: 2,
                approves: 2,
                ardent: 1,
                arrest: -2,
                arrested: -3,
                arrests: -2,
                arrogant: -2,
                arsehole: -4,
                ashame: -2,
                ashamed: -2,
                ass: -4,
                assassination: -3,
                assassinations: -3,
                assault: -2,
                assaults: -2,
                asset: 2,
                assets: 2,
                assfucking: -4,
                asshole: -4,
                astonished: 2,
                astound: 3,
                astounded: 3,
                astounding: 3,
                astoundingly: 3,
                astounds: 3,
                atrocious: -3,
                atrocity: -3,
                attack: -1,
                attacked: -1,
                attacking: -1,
                attacks: -1,
                attract: 1,
                attracted: 1,
                attracting: 2,
                attraction: 2,
                attractions: 2,
                attractive: 2,
                attractively: 2,
                attractiveness: 2,
                attracts: 1,
                audacious: 3,
                aura: 1,
                authority: 1,
                avenge: -2,
                avenged: -2,
                avenger: -2,
                avengers: -2,
                avenges: -2,
                avenging: -2,
                avert: -1,
                averted: -1,
                averts: -1,
                avid: 2,
                avoid: -1,
                avoided: -1,
                avoids: -1,
                await: -1,
                awaited: -1,
                awaits: -1,
                award: 3,
                awarded: 3,
                awards: 3,
                awesome: 4,
                awful: -3,
                awkward: -2,
                axe: -1,
                axed: -1,
                backed: 1,
                backing: 2,
                backs: 1,
                bad: -3,
                badass: -3,
                badly: -3,
                badness: -3,
                bailout: -2,
                balanced: 1,
                bamboozle: -2,
                bamboozled: -2,
                bamboozles: -2,
                ban: -2,
                banish: -1,
                bankrupt: -3,
                bankruptcy: -3,
                bankster: -3,
                banned: -2,
                barbarian: -2,
                barbaric: -2,
                barbarous: -2,
                bargain: 2,
                barrier: -2,
                bastard: -5,
                bastards: -5,
                battle: -1,
                battled: -1,
                battles: -1,
                battling: -2,
                beaten: -2,
                beatific: 3,
                beating: -1,
                beauties: 3,
                beautiful: 3,
                beautifully: 3,
                beautify: 3,
                beauty: 3,
                befit: 2,
                befitting: 2,
                belittle: -2,
                belittled: -2,
                beloved: 3,
                benefactor: 2,
                benefactors: 2,
                benefit: 2,
                benefits: 2,
                benefitted: 2,
                benefitting: 2,
                benevolent: 3,
                bereave: -2,
                bereaved: -2,
                bereaves: -2,
                bereaving: -2,
                best: 3,
                betray: -3,
                betrayal: -3,
                betrayed: -3,
                betraying: -3,
                betrays: -3,
                better: 2,
                bias: -1,
                biased: -2,
                big: 1,
                bitch: -5,
                bitches: -5,
                bitter: -2,
                bitterest: -2,
                bitterly: -2,
                bizarre: -2,
                blackmail: -3,
                blackmailed: -3,
                blackmailing: -3,
                blackmails: -3,
                blah: -2,
                blame: -2,
                blamed: -2,
                blames: -2,
                blaming: -2,
                bless: 2,
                blesses: 2,
                blessing: 3,
                blessings: 3,
                blind: -1,
                bliss: 3,
                blissful: 3,
                blithe: 2,
                bloated: -1,
                block: -1,
                blockade: -2,
                blockbuster: 3,
                blocked: -1,
                blocking: -1,
                blocks: -1,
                bloody: -3,
                blurry: -2,
                boastful: -2,
                bold: 2,
                boldly: 2,
                bomb: -1,
                boost: 1,
                boosted: 1,
                boosting: 1,
                boosts: 1,
                bore: -2,
                bored: -2,
                boring: -3,
                bother: -2,
                bothered: -2,
                bothers: -2,
                bothersome: -2,
                boycott: -2,
                boycotted: -2,
                boycotting: -2,
                boycotts: -2,
                brainwashing: -3,
                brave: 2,
                braveness: 2,
                bravery: 2,
                bravura: 3,
                breach: -2,
                breached: -2,
                breaches: -2,
                breaching: -2,
                breakthrough: 3,
                breathtaking: 5,
                bribe: -3,
                bribed: -3,
                bribes: -3,
                bribing: -3,
                bright: 1,
                brightest: 2,
                brightness: 1,
                brilliant: 4,
                brilliance: 3,
                brilliances: 3,
                brisk: 2,
                broke: -1,
                broken: -1,
                brooding: -2,
                brutal: -3,
                brutally: -3,
                bullied: -2,
                bullshit: -4,
                bully: -2,
                bullying: -2,
                bummer: -2,
                buoyant: 2,
                burden: -2,
                burdened: -2,
                burdening: -2,
                burdens: -2,
                burglar: -2,
                burglary: -2,
                calm: 2,
                calmed: 2,
                calming: 2,
                calms: 2,
                stand: -3,
                cancel: -1,
                cancelled: -1,
                cancelling: -1,
                cancels: -1,
                cancer: -1,
                capabilities: 1,
                capability: 1,
                capable: 1,
                captivated: 3,
                care: 2,
                carefree: 1,
                careful: 2,
                carefully: 2,
                carefulness: 2,
                careless: -2,
                cares: 2,
                caring: 2,
                casualty: -2,
                catastrophe: -3,
                catastrophic: -4,
                cautious: -1,
                celebrate: 3,
                celebrated: 3,
                celebrates: 3,
                celebrating: 3,
                celebration: 3,
                celebrations: 3,
                censor: -2,
                censored: -2,
                censors: -2,
                certain: 1,
                chagrin: -2,
                chagrined: -2,
                challenge: -1,
                champion: 2,
                championed: 2,
                champions: 2,
                chance: 2,
                chances: 2,
                chaos: -2,
                chaotic: -2,
                charged: -3,
                charges: -2,
                charisma: 2,
                charitable: 2,
                charm: 3,
                charming: 3,
                charmingly: 3,
                charmless: -3,
                chastise: -3,
                chastised: -3,
                chastises: -3,
                chastising: -3,
                cheat: -3,
                cheated: -3,
                cheater: -3,
                cheaters: -3,
                cheating: -3,
                cheats: -3,
                cheer: 2,
                cheered: 2,
                cheerful: 2,
                cheerfully: 2,
                cheering: 2,
                cheerless: -2,
                cheers: 2,
                cheery: 3,
                cherish: 2,
                cherished: 2,
                cherishes: 2,
                cherishing: 2,
                chic: 2,
                chide: -3,
                chided: -3,
                chides: -3,
                chiding: -3,
                childish: -2,
                chilling: -1,
                choke: -2,
                choked: -2,
                chokes: -2,
                choking: -2,
                clarifies: 2,
                clarity: 2,
                clash: -2,
                classy: 3,
                clean: 2,
                cleaner: 2,
                clear: 1,
                cleared: 1,
                clearly: 1,
                clears: 1,
                clever: 2,
                clouded: -1,
                clueless: -2,
                cock: -5,
                cocksucker: -5,
                cocksuckers: -5,
                cocky: -2,
                coerced: -2,
                coercion: -2,
                collapse: -2,
                collapsed: -2,
                collapses: -2,
                collapsing: -2,
                collide: -1,
                collides: -1,
                colliding: -1,
                collision: -2,
                collisions: -2,
                colluding: -3,
                combat: -1,
                combats: -1,
                comedy: 1,
                comfort: 2,
                comfortable: 2,
                comfortably: 2,
                comforting: 2,
                comforts: 2,
                comic: 1,
                commend: 2,
                commended: 2,
                commit: 1,
                commitment: 2,
                commits: 1,
                committed: 1,
                committing: 1,
                compassion: 2,
                compassionate: 2,
                compelled: 1,
                competencies: 1,
                competent: 2,
                competitive: 2,
                complacent: -2,
                complain: -2,
                complained: -2,
                complaining: -2,
                complains: -2,
                complaint: -2,
                complaints: -2,
                complicating: -2,
                compliment: 2,
                complimented: 2,
                compliments: 2,
                comprehensive: 2,
                concerned: -2,
                conciliate: 2,
                conciliated: 2,
                conciliates: 2,
                conciliating: 2,
                condemn: -2,
                condemnation: -2,
                condemned: -2,
                condemns: -2,
                confidence: 2,
                confident: 2,
                confidently: 2,
                conflict: -2,
                conflicting: -2,
                conflictive: -2,
                conflicts: -2,
                confuse: -2,
                confused: -2,
                confusing: -2,
                congrats: 2,
                congratulate: 2,
                congratulation: 2,
                congratulations: 2,
                consent: 2,
                consents: 2,
                consolable: 2,
                conspiracy: -3,
                constipation: -2,
                constrained: -2,
                contagion: -2,
                contagions: -2,
                contagious: -1,
                contaminant: -2,
                contaminants: -2,
                contaminate: -2,
                contaminated: -2,
                contaminates: -2,
                contaminating: -2,
                contamination: -2,
                contaminations: -2,
                contempt: -2,
                contemptible: -2,
                contemptuous: -2,
                contemptuously: -2,
                contend: -1,
                contender: -1,
                contending: -1,
                contentious: -2,
                contestable: -2,
                controversial: -2,
                controversially: -2,
                controversies: -2,
                controversy: -2,
                convicted: -2,
                convince: 1,
                convinced: 1,
                convinces: 1,
                convivial: 2,
                cool: 1,
                cornered: -2,
                corpse: -1,
                corrupt: -3,
                corrupted: -3,
                corrupting: -3,
                corruption: -3,
                corrupts: -3,
                costly: -2,
                courage: 2,
                courageous: 2,
                courageously: 2,
                courageousness: 2,
                courteous: 2,
                courtesy: 2,
                coward: -2,
                cowardly: -2,
                coziness: 2,
                cramp: -1,
                crap: -3,
                crappy: -3,
                crash: -2,
                crazier: -2,
                craziest: -2,
                crazy: -2,
                creative: 2,
                crestfallen: -2,
                cried: -2,
                cries: -2,
                crime: -3,
                crimes: -3,
                criminal: -3,
                criminals: -3,
                criminate: -3,
                criminated: -3,
                criminates: -3,
                crisis: -3,
                critic: -2,
                criticise: -2,
                criticised: -2,
                criticises: -2,
                criticising: -2,
                criticism: -2,
                criticize: -2,
                criticized: -2,
                criticizes: -2,
                criticizing: -2,
                critics: -2,
                critique: -2,
                crowding: -1,
                crude: -1,
                cruel: -3,
                cruelty: -3,
                crush: -1,
                crushed: -2,
                crushes: -1,
                crushing: -1,
                cry: -1,
                crying: -2,
                cumbersome: -2,
                cunning: 2,
                cunt: -5,
                curious: 1,
                curse: -1,
                cut: -1,
                cutback: -2,
                cutbacks: -2,
                cute: 2,
                cuts: -1,
                cutting: -1,
                cynic: -2,
                cynical: -2,
                cynicism: -2,
                damage: -3,
                damaged: -3,
                damages: -3,
                damaging: -3,
                damn: -2,
                damned: -4,
                damnit: -4,
                danger: -2,
                dangerous: -2,
                dangerously: -2,
                daredevil: 2,
                daring: 2,
                darkest: -2,
                darkness: -1,
                dauntless: 2,
                dazzling: 3,
                dead: -3,
                deadening: -2,
                deadlock: -2,
                deadly: -3,
                deafening: -1,
                dear: 2,
                dearly: 3,
                death: -2,
                deaths: -2,
                debonair: 2,
                debt: -2,
                deceit: -3,
                deceitful: -3,
                deceive: -3,
                deceived: -3,
                deceives: -3,
                deceiving: -3,
                deception: -3,
                deceptive: -3,
                decisive: 1,
                dedicated: 2,
                dedication: 2,
                defeat: -2,
                defeated: -2,
                defect: -3,
                defective: -3,
                defects: -3,
                defender: 2,
                defenders: 2,
                defenseless: -2,
                defer: -1,
                deferring: -1,
                defiant: -1,
                deficient: -2,
                deficiency: -2,
                deficiencies: -2,
                deficit: -2,
                deformed: -2,
                deformities: -2,
                deformity: -2,
                defraud: -3,
                defrauds: -3,
                deft: 2,
                defunct: -2,
                degrade: -2,
                degraded: -2,
                degrades: -2,
                dehumanize: -2,
                dehumanized: -2,
                dehumanizes: -2,
                dehumanizing: -2,
                deject: -2,
                dejected: -2,
                dejecting: -2,
                dejects: -2,
                delay: -1,
                delayed: -1,
                delectable: 3,
                delicious: 3,
                delight: 3,
                delighted: 3,
                delightful: 3,
                delightfully: 3,
                delighting: 3,
                delights: 3,
                demand: -1,
                demanded: -1,
                demanding: -1,
                demands: -1,
                demonstration: -1,
                demoralize: -2,
                demoralized: -2,
                demoralizes: -2,
                demoralizing: -2,
                denial: -2,
                denials: -2,
                denied: -2,
                denier: -2,
                deniers: -2,
                denies: -2,
                denounce: -2,
                denounces: -2,
                dent: -2,
                deny: -2,
                denying: -2,
                deplore: -3,
                deplored: -3,
                deplores: -3,
                deploring: -3,
                deport: -2,
                deported: -2,
                deporting: -2,
                deports: -2,
                deportation: -2,
                deportations: -2,
                depressed: -2,
                depressing: -2,
                deprivation: -3,
                derail: -2,
                derailed: -2,
                derails: -2,
                derelict: -2,
                deride: -2,
                derided: -2,
                derides: -2,
                deriding: -2,
                derision: -2,
                desirable: 2,
                desire: 1,
                desired: 2,
                desirous: 2,
                despair: -3,
                despairing: -3,
                despairs: -3,
                desperate: -3,
                desperately: -3,
                despondent: -3,
                destroy: -3,
                destroyed: -3,
                destroying: -3,
                destroys: -3,
                destruction: -3,
                destructive: -3,
                detached: -1,
                detain: -2,
                detained: -2,
                detention: -2,
                deteriorate: -2,
                deteriorated: -2,
                deteriorates: -2,
                deteriorating: -2,
                determined: 2,
                deterrent: -2,
                detract: -1,
                detracted: -1,
                detracts: -1,
                devastate: -2,
                devastated: -2,
                devastating: -2,
                devastation: -2,
                devastations: -2,
                devoted: 3,
                devotion: 2,
                devotional: 2,
                diamond: 1,
                dick: -4,
                dickhead: -4,
                die: -3,
                died: -3,
                difficult: -1,
                diffident: -2,
                dignity: 2,
                dilemma: -1,
                dilligence: 2,
                dipshit: -3,
                dire: -3,
                direful: -3,
                dirt: -2,
                dirtier: -2,
                dirtiest: -2,
                dirty: -2,
                disabilities: -2,
                disability: -2,
                disabling: -1,
                disadvantage: -2,
                disadvantaged: -2,
                disagree: -2,
                disagreeable: -2,
                disagreement: -2,
                disappear: -1,
                disappeared: -1,
                disappears: -1,
                disappoint: -2,
                disappointed: -2,
                disappointing: -2,
                disappointment: -2,
                disappointments: -2,
                disappoints: -2,
                disapproval: -2,
                disapprovals: -2,
                disapprove: -2,
                disapproved: -2,
                disapproves: -2,
                disapproving: -2,
                disaster: -2,
                disasters: -2,
                disastrous: -3,
                disbelieve: -2,
                discard: -1,
                discarded: -1,
                discarding: -1,
                discards: -1,
                discernment: 2,
                discomfort: -2,
                disconsolate: -2,
                disconsolation: -2,
                discontented: -2,
                discord: -2,
                discounted: -1,
                discouraged: -2,
                discredited: -2,
                discriminate: -2,
                discriminated: -2,
                discriminates: -2,
                discriminating: -2,
                discriminatory: -2,
                disdain: -2,
                disease: -1,
                diseases: -1,
                disgrace: -2,
                disgraced: -2,
                disguise: -1,
                disguised: -1,
                disguises: -1,
                disguising: -1,
                disgust: -3,
                disgusted: -3,
                disgustful: -3,
                disgusting: -3,
                disheartened: -2,
                dishonest: -2,
                disillusioned: -2,
                disinclined: -2,
                disjointed: -2,
                dislike: -2,
                disliked: -2,
                dislikes: -2,
                dismal: -2,
                dismayed: -2,
                dismissed: -2,
                disorder: -2,
                disorders: -2,
                disorganized: -2,
                disoriented: -2,
                disparage: -2,
                disparaged: -2,
                disparages: -2,
                disparaging: -2,
                displeased: -2,
                displeasure: -2,
                disproportionate: -2,
                dispute: -2,
                disputed: -2,
                disputes: -2,
                disputing: -2,
                disqualified: -2,
                disquiet: -2,
                disregard: -2,
                disregarded: -2,
                disregarding: -2,
                disregards: -2,
                disrespect: -2,
                disrespected: -2,
                disrupt: -2,
                disrupted: -2,
                disrupting: -2,
                disruption: -2,
                disruptions: -2,
                disruptive: -2,
                disrupts: -2,
                dissatisfied: -2,
                distasteful: -2,
                distinguished: 2,
                distort: -2,
                distorted: -2,
                distorting: -2,
                distorts: -2,
                distract: -2,
                distracted: -2,
                distraction: -2,
                distracts: -2,
                distress: -2,
                distressed: -2,
                distresses: -2,
                distressing: -2,
                distrust: -3,
                distrustful: -3,
                disturb: -2,
                disturbed: -2,
                disturbing: -2,
                disturbs: -2,
                dithering: -2,
                diverting: -1,
                dizzy: -1,
                dodging: -2,
                dodgy: -2,
                dolorous: -2,
                donate: 2,
                donated: 2,
                donates: 2,
                donating: 2,
                donation: 2,
                doom: -2,
                doomed: -2,
                doubt: -1,
                doubted: -1,
                doubtful: -1,
                doubting: -1,
                doubts: -1,
                douche: -3,
                douchebag: -3,
                dour: -2,
                downcast: -2,
                downer: -2,
                downhearted: -2,
                downside: -2,
                drag: -1,
                dragged: -1,
                drags: -1,
                drained: -2,
                dread: -2,
                dreaded: -2,
                dreadful: -3,
                dreading: -2,
                dream: 1,
                dreams: 1,
                dreary: -2,
                droopy: -2,
                drop: -1,
                dropped: -1,
                drown: -2,
                drowned: -2,
                drowns: -2,
                drudgery: -2,
                drunk: -2,
                dubious: -2,
                dud: -2,
                dull: -2,
                dumb: -3,
                dumbass: -3,
                dump: -1,
                dumped: -2,
                dumps: -1,
                dupe: -2,
                duped: -2,
                dupery: -2,
                durable: 2,
                dying: -3,
                dysfunction: -2,
                eager: 2,
                earnest: 2,
                ease: 2,
                easy: 1,
                ecstatic: 4,
                eerie: -2,
                eery: -2,
                effective: 2,
                effectively: 2,
                effectiveness: 2,
                effortlessly: 2,
                elated: 3,
                elation: 3,
                elegant: 2,
                elegantly: 2,
                embarrass: -2,
                embarrassed: -2,
                embarrasses: -2,
                embarrassing: -2,
                embarrassment: -2,
                embezzlement: -3,
                embittered: -2,
                embrace: 1,
                emergency: -2,
                empathetic: 2,
                empower: 2,
                empowerment: 2,
                emptiness: -1,
                empty: -1,
                enchanted: 2,
                encourage: 2,
                encouraged: 2,
                encouragement: 2,
                encourages: 2,
                encouraging: 2,
                endorse: 2,
                endorsed: 2,
                endorsement: 2,
                endorses: 2,
                enemies: -2,
                enemy: -2,
                energetic: 2,
                engage: 1,
                engages: 1,
                engrossed: 1,
                engrossing: 3,
                enjoy: 2,
                enjoyable: 2,
                enjoyed: 2,
                enjoying: 2,
                enjoys: 2,
                enlighten: 2,
                enlightened: 2,
                enlightening: 2,
                enlightens: 2,
                ennui: -2,
                enrage: -2,
                enraged: -2,
                enrages: -2,
                enraging: -2,
                enrapture: 3,
                enslave: -2,
                enslaved: -2,
                enslaves: -2,
                ensure: 1,
                ensuring: 1,
                enterprising: 1,
                entertaining: 2,
                enthral: 3,
                enthusiastic: 3,
                entitled: 1,
                entrusted: 2,
                envies: -1,
                envious: -2,
                envy: -1,
                envying: -1,
                erroneous: -2,
                error: -2,
                errors: -2,
                escape: -1,
                escapes: -1,
                escaping: -1,
                esteem: 2,
                esteemed: 2,
                ethical: 2,
                euphoria: 3,
                euphoric: 4,
                evacuate: -1,
                evacuated: -1,
                evacuates: -1,
                evacuating: -1,
                evacuation: -1,
                evergreen: 2,
                evergreens: 2,
                evergreening: -3,
                eviction: -1,
                evil: -3,
                exacerbate: -2,
                exacerbated: -2,
                exacerbates: -2,
                exacerbating: -2,
                exaggerate: -2,
                exaggerated: -2,
                exaggerates: -2,
                exaggerating: -2,
                exasparate: -2,
                exasperated: -2,
                exasperates: -2,
                exasperating: -2,
                excellence: 3,
                excellent: 3,
                excite: 3,
                excited: 3,
                excitement: 3,
                exciting: 3,
                exclude: -1,
                excluded: -2,
                exclusion: -1,
                exclusive: 2,
                excruciatingly: -1,
                excuse: -1,
                exempt: -1,
                exhausted: -2,
                exhilarated: 3,
                exhilarates: 3,
                exhilarating: 3,
                exonerate: 2,
                exonerated: 2,
                exonerates: 2,
                exonerating: 2,
                expand: 1,
                expands: 1,
                expel: -2,
                expelled: -2,
                expelling: -2,
                expels: -2,
                expertly: 2,
                exploit: -2,
                exploited: -2,
                exploiting: -2,
                exploits: -2,
                exploration: 1,
                explorations: 1,
                expose: -1,
                exposed: -1,
                exposes: -1,
                exposing: -1,
                exquisite: 3,
                extend: 1,
                extends: 1,
                extremist: -2,
                extremists: -2,
                exuberant: 4,
                exultant: 3,
                exultantly: 3,
                fabulous: 4,
                fabulously: 4,
                fad: -2,
                fag: -3,
                faggot: -3,
                faggots: -3,
                fail: -2,
                failed: -2,
                failing: -2,
                fails: -2,
                failure: -2,
                failures: -2,
                fainthearted: -2,
                fair: 2,
                fairness: 2,
                faith: 1,
                faithful: 3,
                fake: -3,
                faker: -3,
                fakes: -3,
                faking: -3,
                fallen: -2,
                falling: -1,
                false: -1,
                falsely: -2,
                falsified: -3,
                falsify: -3,
                fame: 1,
                famine: -2,
                famous: 2,
                fan: 3,
                fantastic: 4,
                farce: -1,
                fascinate: 3,
                fascinated: 3,
                fascinates: 3,
                fascinating: 3,
                fascination: 3,
                fascist: -2,
                fascists: -2,
                fatal: -3,
                fatalities: -3,
                fatality: -3,
                fatigue: -2,
                fatigued: -2,
                fatigues: -2,
                fatiguing: -2,
                favor: 2,
                favorable: 2,
                favorably: 2,
                favored: 2,
                favorite: 2,
                favorited: 2,
                favorites: 2,
                favors: 2,
                favour: 2,
                favourable: 2,
                favourably: 2,
                favoured: 2,
                favourite: 2,
                favourited: 2,
                favourites: 2,
                favours: 2,
                fear: -2,
                fearful: -2,
                fearfully: -2,
                fearing: -2,
                fearless: 2,
                fearlessness: 2,
                fearsome: -2,
                feeble: -2,
                feeling: 1,
                felonies: -3,
                felony: -3,
                fertile: 2,
                fervent: 2,
                fervid: 2,
                festive: 2,
                fever: -2,
                fiasco: -3,
                fidgety: -2,
                fight: -1,
                fighting: -2,
                fine: 2,
                fines: -2,
                finest: 3,
                fire: -2,
                fired: -2,
                firing: -2,
                fit: 1,
                fitness: 1,
                filth: -2,
                filthy: -2,
                flagship: 2,
                flaw: -2,
                flawed: -3,
                flawless: 2,
                flawlessly: 2,
                flaws: -2,
                flees: -1,
                flop: -2,
                flops: -2,
                flu: -2,
                flustered: -2,
                focused: 2,
                fond: 2,
                fondness: 2,
                fool: -2,
                foolish: -2,
                fools: -2,
                forbid: -1,
                forbidden: -2,
                forbidding: -2,
                forced: -1,
                foreclosure: -2,
                foreclosures: -2,
                forefront: 1,
                forget: -1,
                forgetful: -2,
                forgettable: -1,
                forgive: 1,
                forgiving: 1,
                forgot: -1,
                forgotten: -1,
                fortune: 2,
                fortunate: 2,
                fortunately: 2,
                foul: -3,
                frantic: -1,
                fraud: -4,
                frauds: -4,
                fraudster: -4,
                fraudsters: -4,
                fraudulence: -4,
                fraudulent: -4,
                freak: -2,
                free: 1,
                freedom: 2,
                freedoms: 2,
                frenzy: -3,
                fresh: 1,
                friend: 1,
                friendliness: 2,
                friendly: 2,
                friendship: 2,
                fright: -2,
                frightened: -2,
                frightening: -3,
                frikin: -2,
                frisky: 2,
                frowning: -1,
                fruitless: -2,
                frustrate: -2,
                frustrated: -2,
                frustrates: -2,
                frustrating: -2,
                frustration: -2,
                ftw: 3,
                fuck: -4,
                fucked: -4,
                fucker: -4,
                fuckers: -4,
                fuckface: -4,
                fuckhead: -4,
                fuckin: -4,
                fucking: -4,
                fucktard: -4,
                fud: -3,
                fuked: -4,
                fuking: -4,
                fulfill: 2,
                fulfilled: 2,
                fulfillment: 2,
                fulfills: 2,
                fuming: -2,
                fun: 4,
                funeral: -1,
                funerals: -1,
                funky: 2,
                funnier: 4,
                funny: 4,
                furious: -3,
                futile: -2,
                gag: -2,
                gagged: -2,
                gain: 2,
                gained: 2,
                gaining: 2,
                gains: 2,
                gallant: 3,
                gallantly: 3,
                gallantry: 3,
                garbage: -1,
                gem: 3,
                generous: 2,
                generously: 2,
                genial: 3,
                ghastly: -2,
                ghost: -1,
                giddy: -2,
                gift: 2,
                glad: 3,
                glamorous: 3,
                glamourous: 3,
                glee: 3,
                gleeful: 3,
                gloom: -1,
                gloomy: -2,
                glorious: 2,
                glory: 2,
                glum: -2,
                god: 1,
                goddamn: -3,
                godsend: 4,
                gold: 2,
                good: 3,
                goodlooking: 3,
                goodmorning: 1,
                goodness: 3,
                goodwill: 3,
                goofiness: -2,
                goofy: -2,
                grace: 1,
                graceful: 2,
                gracious: 3,
                grand: 3,
                grant: 1,
                granted: 1,
                granting: 1,
                grants: 1,
                grateful: 3,
                gratification: 2,
                grave: -2,
                gray: -1,
                grisly: -2,
                gr8: 3,
                great: 3,
                greater: 3,
                greatest: 3,
                greed: -3,
                greedy: -2,
                greenwash: -3,
                greenwasher: -3,
                greenwashers: -3,
                greenwashing: -3,
                greet: 1,
                greeted: 1,
                greeting: 1,
                greetings: 2,
                greets: 1,
                grey: -1,
                grief: -2,
                grieved: -2,
                grim: -2,
                gripping: 2,
                groan: -2,
                groaned: -2,
                groaning: -2,
                groans: -2,
                gross: -2,
                growing: 1,
                growth: 2,
                growths: 2,
                gruesome: -3,
                guarantee: 1,
                guilt: -3,
                guilty: -3,
                gullibility: -2,
                gullible: -2,
                gun: -1,
                ha: 2,
                hacked: -1,
                haha: 3,
                hahaha: 3,
                hahahah: 3,
                hail: 2,
                hailed: 2,
                hallelujah: 3,
                handpicked: 1,
                handsome: 3,
                hapless: -2,
                haplessness: -2,
                happiest: 3,
                happiness: 3,
                happy: 3,
                harass: -3,
                harassed: -3,
                harasses: -3,
                harassing: -3,
                harassment: -3,
                hard: -1,
                hardier: 2,
                hardship: -2,
                hardy: 2,
                harm: -2,
                harmed: -2,
                harmful: -2,
                harming: -2,
                harmony: 2,
                harmonious: 2,
                harmoniously: 2,
                harms: -2,
                harried: -2,
                harsh: -2,
                harsher: -2,
                harshest: -2,
                harshly: -2,
                hate: -3,
                hated: -3,
                hater: -3,
                haters: -3,
                hates: -3,
                hating: -3,
                hatred: -3,
                haunt: -1,
                haunted: -2,
                haunting: 1,
                haunts: -1,
                havoc: -2,
                hazardous: -3,
                headache: -2,
                healthy: 2,
                heartbreaking: -3,
                heartbroken: -3,
                heartfelt: 3,
                heartless: -2,
                heartwarming: 3,
                heaven: 2,
                heavenly: 4,
                heavyhearted: -2,
                hehe: 2,
                hell: -4,
                hellish: -2,
                help: 2,
                helpful: 2,
                helping: 2,
                helpless: -2,
                helps: 2,
                hero: 2,
                heroes: 2,
                heroic: 3,
                hesitant: -2,
                hesitate: -2,
                hid: -1,
                hide: -1,
                hideous: -3,
                hides: -1,
                hiding: -1,
                highlight: 2,
                hilarious: 2,
                hinder: -2,
                hindrance: -2,
                hoax: -2,
                hollow: -1,
                homeless: -2,
                homesick: -2,
                homicide: -2,
                homicides: -2,
                honest: 2,
                honor: 2,
                honored: 2,
                honoring: 2,
                honour: 2,
                honoured: 2,
                honouring: 2,
                hooligan: -2,
                hooliganism: -2,
                hooligans: -2,
                hope: 2,
                hopeful: 2,
                hopefully: 2,
                hopeless: -2,
                hopelessness: -2,
                hopes: 2,
                hoping: 2,
                horrendous: -3,
                horrid: -3,
                horrible: -3,
                horrific: -3,
                horrified: -3,
                hospitalized: -2,
                hostile: -2,
                huckster: -2,
                hug: 2,
                huge: 1,
                hugs: 2,
                humane: 2,
                humble: 1,
                humbug: -2,
                humerous: 3,
                humiliated: -3,
                humiliation: -3,
                humor: 2,
                humorous: 2,
                humour: 2,
                humourous: 2,
                hunger: -2,
                hurrah: 5,
                hurt: -2,
                hurting: -2,
                hurts: -2,
                hypocritical: -2,
                hysteria: -3,
                hysterical: -3,
                hysterics: -3,
                icky: -3,
                idiocy: -3,
                idiot: -3,
                idiotic: -3,
                ignorance: -2,
                ignorant: -2,
                ignore: -1,
                ignored: -2,
                ignores: -1,
                ill: -2,
                illegal: -3,
                illegally: -3,
                illegitimate: -3,
                illiteracy: -2,
                illness: -2,
                illnesses: -2,
                illogical: -2,
                imaginative: 2,
                imbecile: -3,
                immobilized: -1,
                immortal: 2,
                immune: 1,
                impair: -2,
                impaired: -2,
                impairing: -2,
                impairment: -2,
                impairs: -2,
                impatient: -2,
                impeachment: -3,
                impeachments: -3,
                impede: -2,
                impeded: -2,
                impedes: -2,
                impeding: -2,
                impedingly: -2,
                imperfect: -2,
                importance: 2,
                important: 2,
                impose: -1,
                imposed: -1,
                imposes: -1,
                imposing: -1,
                imposter: -2,
                impotent: -2,
                impress: 3,
                impressed: 3,
                impresses: 3,
                impressive: 3,
                imprisoned: -2,
                imprisonment: -2,
                improper: -2,
                improperly: -2,
                improve: 2,
                improved: 2,
                improvement: 2,
                improves: 2,
                improving: 2,
                inability: -2,
                inaction: -2,
                inadequate: -2,
                inadvertently: -2,
                inappropriate: -2,
                incapable: -2,
                incapacitated: -2,
                incapacitates: -2,
                incapacitating: -2,
                incense: -2,
                incensed: -2,
                incenses: -2,
                incensing: -2,
                incoherent: -2,
                incompetence: -2,
                incompetent: -2,
                incomplete: -1,
                incomprehensible: -2,
                inconsiderate: -2,
                inconvenience: -2,
                inconvenient: -2,
                increase: 1,
                increased: 1,
                incredible: 1,
                indecisive: -2,
                indestructible: 2,
                indicted: -2,
                indifference: -2,
                indifferent: -2,
                indignant: -2,
                indignation: -2,
                indoctrinate: -2,
                indoctrinated: -2,
                indoctrinates: -2,
                indoctrinating: -2,
                inediable: -2,
                inexorable: -3,
                inexcusable: -3,
                ineffective: -2,
                ineffectively: -2,
                ineffectual: -2,
                inefficiency: -2,
                inefficient: -2,
                inefficiently: -2,
                inept: -2,
                ineptitude: -2,
                infantile: -2,
                infantilized: -2,
                infatuated: 2,
                infatuation: 2,
                infect: -2,
                infected: -2,
                infecting: -2,
                infection: -2,
                infections: -2,
                infectious: -2,
                infects: -2,
                inferior: -2,
                infest: -2,
                infested: -2,
                infesting: -2,
                infests: -2,
                inflamed: -2,
                inflict: -2,
                inflicted: -2,
                inflicting: -2,
                inflicts: -2,
                influential: 2,
                infract: -2,
                infracted: -2,
                infracting: -2,
                infracts: -2,
                infringement: -2,
                infuriate: -2,
                infuriated: -2,
                infuriates: -2,
                infuriating: -2,
                inhibit: -1,
                inhuman: -2,
                injured: -2,
                injuries: -2,
                injury: -2,
                injustice: -2,
                innovate: 1,
                innovates: 1,
                innovation: 1,
                innovative: 2,
                inoperative: -2,
                inquisition: -2,
                inquisitive: 2,
                insane: -2,
                insanity: -2,
                insecure: -2,
                insensitive: -2,
                insensitivity: -2,
                insignificant: -2,
                insipid: -2,
                insolvent: -2,
                insomnia: -2,
                inspiration: 2,
                inspirational: 2,
                inspire: 2,
                inspired: 2,
                inspires: 2,
                inspiring: 3,
                insufficiency: -2,
                insufficient: -2,
                insufficiently: -2,
                insult: -2,
                insulted: -2,
                insulting: -2,
                insults: -2,
                intact: 2,
                integrity: 2,
                intelligent: 2,
                intense: 1,
                interest: 1,
                interested: 2,
                interesting: 2,
                interests: 1,
                interrogated: -2,
                interrupt: -2,
                interrupted: -2,
                interrupting: -2,
                interruption: -2,
                interrupts: -2,
                intimacy: 2,
                intimidate: -2,
                intimidated: -2,
                intimidates: -2,
                intimidating: -2,
                intimidation: -2,
                intransigence: -2,
                intransigency: -2,
                intricate: 2,
                intrigues: 1,
                invasion: -1,
                invincible: 2,
                invite: 1,
                inviting: 1,
                invulnerable: 2,
                irate: -3,
                ironic: -1,
                irony: -1,
                irrational: -1,
                irreparable: -2,
                irreproducible: -2,
                irresistible: 2,
                irresistibly: 2,
                irresolute: -2,
                irresponsible: -2,
                irresponsibly: -2,
                irreversible: -1,
                irreversibly: -1,
                irritate: -3,
                irritated: -3,
                irritates: -3,
                irritating: -3,
                isolated: -1,
                itchy: -2,
                jackass: -4,
                jackasses: -4,
                jailed: -2,
                jaunty: 2,
                jealous: -2,
                jealousy: -2,
                jeopardy: -2,
                jerk: -3,
                jesus: 1,
                jewel: 1,
                jewels: 1,
                jocular: 2,
                join: 1,
                joke: 2,
                jokes: 2,
                jolly: 2,
                jovial: 2,
                joy: 3,
                joyful: 3,
                joyfully: 3,
                joyless: -2,
                joyous: 3,
                jubilant: 3,
                jumpy: -1,
                junk: -2,
                justice: 2,
                justifiably: 2,
                justified: 2,
                keen: 1,
                kickback: -3,
                kickbacks: -3,
                kidnap: -2,
                kidnapped: -2,
                kidnapping: -2,
                kidnappings: -2,
                kidnaps: -2,
                kill: -3,
                killed: -3,
                killing: -3,
                kills: -3,
                kind: 2,
                kinder: 2,
                kindness: 2,
                kiss: 2,
                kudos: 3,
                lack: -2,
                lackadaisical: -2,
                lag: -1,
                lagged: -2,
                lagging: -2,
                lags: -2,
                lame: -2,
                landmark: 2,
                lapse: -1,
                lapsed: -1,
                laugh: 1,
                laughed: 1,
                laughing: 1,
                laughs: 1,
                laughting: 1,
                launched: 1,
                lawl: 3,
                lawsuit: -2,
                lawsuits: -2,
                lazy: -1,
                leadership: 1,
                leading: 2,
                leak: -1,
                leaked: -1,
                leave: -1,
                legal: 1,
                legally: 1,
                lenient: 1,
                lethal: -2,
                lethality: -2,
                lethargic: -2,
                lethargy: -2,
                liar: -3,
                liars: -3,
                libelous: -2,
                lied: -2,
                lifeless: -1,
                lifesaver: 4,
                lighthearted: 1,
                likable: 2,
                like: 2,
                likeable: 2,
                liked: 2,
                likers: 2,
                likes: 2,
                liking: 2,
                limitation: -1,
                limited: -1,
                limits: -1,
                litigation: -1,
                litigious: -2,
                lively: 2,
                livid: -2,
                lmao: 4,
                lmfao: 4,
                loathe: -3,
                loathed: -3,
                loathes: -3,
                loathing: -3,
                loathsome: -3,
                lobbied: -2,
                lobby: -2,
                lobbying: -2,
                lobbyist: -2,
                lobbyists: -2,
                lol: 3,
                lolol: 4,
                lololol: 4,
                lolololol: 4,
                lonely: -2,
                lonesome: -2,
                longing: -1,
                lool: 3,
                loom: -1,
                loomed: -1,
                looming: -1,
                looms: -1,
                loool: 3,
                looool: 3,
                loose: -3,
                looses: -3,
                loser: -3,
                losing: -3,
                loss: -3,
                losses: -3,
                lost: -3,
                lousy: -2,
                lovable: 3,
                love: 3,
                loved: 3,
                lovelies: 3,
                lovely: 3,
                loves: 3,
                loving: 2,
                lowest: -1,
                loyal: 3,
                loyalty: 3,
                luck: 3,
                luckily: 3,
                lucky: 3,
                lucrative: 3,
                ludicrous: -3,
                lugubrious: -2,
                lunatic: -3,
                lunatics: -3,
                lurk: -1,
                lurking: -1,
                lurks: -1,
                luxury: 2,
                macabre: -2,
                mad: -3,
                maddening: -3,
                madly: -3,
                madness: -3,
                magnificent: 3,
                maladaption: -2,
                maldevelopment: -2,
                maltreatment: -2,
                mandatory: -1,
                manipulated: -1,
                manipulating: -1,
                manipulation: -1,
                manslaughter: -3,
                marvel: 3,
                marvelous: 3,
                marvels: 3,
                masterpiece: 4,
                masterpieces: 4,
                matter: 1,
                matters: 1,
                mature: 2,
                meaningful: 2,
                meaningless: -2,
                medal: 3,
                mediocrity: -3,
                meditative: 1,
                melancholy: -2,
                memorable: 1,
                memoriam: -2,
                menace: -2,
                menaced: -2,
                menaces: -2,
                mercy: 2,
                merry: 3,
                mesmerizing: 3,
                mess: -2,
                messed: -2,
                methodical: 2,
                methodically: 2,
                mindless: -2,
                miracle: 4,
                mirth: 3,
                mirthful: 3,
                mirthfully: 3,
                misbehave: -2,
                misbehaved: -2,
                misbehaves: -2,
                misbehaving: -2,
                misbranding: -3,
                miscast: -2,
                mischief: -1,
                mischiefs: -1,
                misclassified: -2,
                misclassifies: -2,
                misclassify: -2,
                misconduct: -2,
                misconducted: -2,
                misconducting: -2,
                misconducts: -2,
                miserable: -3,
                miserably: -3,
                misery: -2,
                misfire: -2,
                misfortune: -2,
                misgiving: -2,
                misinformation: -2,
                misinformed: -2,
                misinterpreted: -2,
                mislead: -3,
                misleaded: -3,
                misleading: -3,
                misleads: -3,
                misplace: -2,
                misplaced: -2,
                misplaces: -2,
                misplacing: -2,
                mispricing: -3,
                misread: -1,
                misreport: -2,
                misreported: -2,
                misreporting: -2,
                misreports: -2,
                misrepresent: -2,
                misrepresentation: -2,
                misrepresentations: -2,
                misrepresented: -2,
                misrepresenting: -2,
                misrepresents: -2,
                miss: -2,
                missed: -2,
                missing: -2,
                mistake: -2,
                mistaken: -2,
                mistakes: -2,
                mistaking: -2,
                misunderstand: -2,
                misunderstanding: -2,
                misunderstands: -2,
                misunderstood: -2,
                misuse: -2,
                misused: -2,
                misuses: -2,
                misusing: -2,
                moan: -2,
                moaned: -2,
                moaning: -2,
                moans: -2,
                mock: -2,
                mocked: -2,
                mocking: -2,
                mocks: -2,
                modernize: 2,
                modernized: 2,
                modernizes: 2,
                modernizing: 2,
                mongering: -2,
                monopolize: -2,
                monopolized: -2,
                monopolizes: -2,
                monopolizing: -2,
                monotone: -1,
                moody: -1,
                mope: -1,
                moping: -1,
                moron: -3,
                motherfucker: -5,
                motherfucking: -5,
                motivate: 1,
                motivated: 2,
                motivating: 2,
                motivation: 1,
                mourn: -2,
                mourned: -2,
                mournful: -2,
                mourning: -2,
                mourns: -2,
                muddy: -2,
                mumpish: -2,
                murder: -2,
                murderer: -2,
                murdering: -3,
                murderous: -3,
                murders: -2,
                murky: -2,
                myth: -1,
                n00b: -2,
                naive: -2,
                narcissism: -2,
                nasty: -3,
                natural: 1,
                "naïve": -2,
                needy: -2,
                negative: -2,
                negativity: -2,
                neglect: -2,
                neglected: -2,
                neglecting: -2,
                neglects: -2,
                nerves: -1,
                nervous: -2,
                nervously: -2,
                nice: 3,
                nifty: 2,
                niggas: -5,
                nigger: -5,
                no: -1,
                noble: 2,
                noblest: 2,
                noisy: -1,
                nonsense: -2,
                noob: -2,
                nosey: -2,
                notable: 2,
                noticeable: 2,
                notorious: -2,
                novel: 2,
                numb: -1,
                nurturing: 2,
                nuts: -3,
                obliterate: -2,
                obliterated: -2,
                obnoxious: -3,
                obscene: -2,
                obscenity: -2,
                obsessed: 2,
                obsolete: -2,
                obstacle: -2,
                obstacles: -2,
                obstinate: -2,
                obstruct: -2,
                obstructed: -2,
                obstructing: -2,
                obstruction: -2,
                obstructs: -2,
                odd: -2,
                offence: -2,
                offences: -2,
                offend: -2,
                offended: -2,
                offender: -2,
                offending: -2,
                offends: -2,
                offense: -2,
                offenses: -2,
                offensive: -2,
                offensively: -2,
                offline: -1,
                oks: 2,
                ominous: 3,
                oops: -2,
                opportunities: 2,
                opportunity: 2,
                oppressed: -2,
                oppression: -2,
                oppressions: -2,
                oppressive: -2,
                optimism: 2,
                optimistic: 2,
                optionless: -2,
                ostracize: -2,
                ostracized: -2,
                ostracizes: -2,
                ouch: -2,
                outage: -2,
                outages: -2,
                outbreak: -2,
                outbreaks: -2,
                outcry: -2,
                outmaneuvered: -2,
                outnumbered: -2,
                outrage: -3,
                outraged: -3,
                outrageous: -3,
                outreach: 2,
                outstanding: 5,
                overjoyed: 4,
                overload: -1,
                overlooked: -1,
                overprotective: -2,
                overran: -2,
                overreact: -2,
                overreacted: -2,
                overreacting: -2,
                overreaction: -2,
                overreacts: -2,
                oversell: -2,
                overselling: -2,
                oversells: -2,
                oversight: -1,
                oversimplification: -2,
                oversimplified: -2,
                oversimplifies: -2,
                oversimplify: -2,
                oversold: -2,
                overstatement: -2,
                overstatements: -2,
                overweight: -1,
                overwrought: -3,
                oxymoron: -1,
                pain: -2,
                pained: -2,
                painful: -2,
                panic: -3,
                panicked: -3,
                panics: -3,
                paradise: 3,
                paradox: -1,
                pardon: 2,
                pardoned: 2,
                pardoning: 2,
                pardons: 2,
                parley: -1,
                passion: 1,
                passionate: 2,
                passive: -1,
                passively: -1,
                pathetic: -2,
                pay: -1,
                peace: 2,
                peaceful: 2,
                peacefully: 2,
                penalize: -2,
                penalized: -2,
                penalizes: -2,
                penalizing: -2,
                penalty: -2,
                pensive: -1,
                perfect: 3,
                perfected: 2,
                perfection: 3,
                perfectly: 3,
                perfects: 2,
                peril: -2,
                perjury: -3,
                perpetrated: -2,
                perpetrator: -2,
                perpetrators: -2,
                perplexed: -2,
                persecute: -2,
                persecuted: -2,
                persecutes: -2,
                persecuting: -2,
                perturbed: -2,
                pervert: -3,
                pesky: -2,
                pessimism: -2,
                pessimistic: -2,
                petrified: -2,
                philanthropy: 2,
                phobic: -2,
                picturesque: 2,
                pileup: -1,
                pillage: -2,
                pique: -2,
                piqued: -2,
                piss: -4,
                pissed: -4,
                pissing: -3,
                piteous: -2,
                pitied: -1,
                pity: -2,
                plague: -3,
                plagued: -3,
                plagues: -3,
                plaguing: -3,
                playful: 2,
                pleasant: 3,
                please: 1,
                pleased: 3,
                pleasurable: 3,
                pleasure: 3,
                plodding: -2,
                poignant: 2,
                pointless: -2,
                poised: -2,
                poison: -2,
                poisoned: -2,
                poisons: -2,
                polished: 2,
                polite: 2,
                politeness: 2,
                pollutant: -2,
                pollute: -2,
                polluted: -2,
                polluter: -2,
                polluters: -2,
                pollutes: -2,
                pollution: -2,
                poor: -2,
                poorer: -2,
                poorest: -2,
                poorly: -2,
                popular: 3,
                popularity: 3,
                positive: 2,
                positively: 2,
                possessive: -2,
                postpone: -1,
                postponed: -1,
                postpones: -1,
                postponing: -1,
                poverty: -1,
                powerful: 2,
                powerless: -2,
                praise: 3,
                praised: 3,
                praises: 3,
                praising: 3,
                pray: 1,
                praying: 1,
                prays: 1,
                prblm: -2,
                prblms: -2,
                predatory: -2,
                prepared: 1,
                pressure: -1,
                pressured: -2,
                pretend: -1,
                pretending: -1,
                pretends: -1,
                pretty: 1,
                prevent: -1,
                prevented: -1,
                preventing: -1,
                prevents: -1,
                prick: -5,
                prison: -2,
                prisoner: -2,
                prisoners: -2,
                privileged: 2,
                proactive: 2,
                problem: -2,
                problems: -2,
                profit: 2,
                profitable: 2,
                profiteer: -2,
                profits: 2,
                progress: 2,
                prohibit: -1,
                prohibits: -1,
                prominent: 2,
                promise: 1,
                promised: 1,
                promises: 1,
                promote: 1,
                promoted: 1,
                promotes: 1,
                promoting: 1,
                promptly: 1,
                propaganda: -2,
                prosecute: -1,
                prosecuted: -2,
                prosecutes: -1,
                prosecution: -1,
                prospect: 1,
                prospects: 1,
                prosperity: 3,
                prosperous: 3,
                protect: 1,
                protected: 1,
                protects: 1,
                protest: -2,
                protesters: -2,
                protesting: -2,
                protests: -2,
                proud: 2,
                proudly: 2,
                provoke: -1,
                provoked: -1,
                provokes: -1,
                provoking: -1,
                prudence: 2,
                pseudoscience: -3,
                psychopathic: -2,
                punish: -2,
                punished: -2,
                punishes: -2,
                punishing: -2,
                punitive: -2,
                pure: 1,
                purest: 1,
                purposeful: 2,
                pushy: -1,
                puzzled: -2,
                quaking: -2,
                qualities: 2,
                quality: 2,
                questionable: -2,
                questioned: -1,
                questioning: -1,
                racism: -3,
                racist: -3,
                racists: -3,
                rage: -2,
                rageful: -2,
                rainy: -1,
                rant: -3,
                ranter: -3,
                ranters: -3,
                rants: -3,
                rape: -4,
                raped: -4,
                rapist: -4,
                rapture: 2,
                raptured: 2,
                raptures: 2,
                rapturous: 4,
                rash: -2,
                ratified: 2,
                reach: 1,
                reached: 1,
                reaches: 1,
                reaching: 1,
                reassure: 1,
                reassured: 1,
                reassures: 1,
                reassuring: 2,
                rebel: -2,
                rebellion: -2,
                rebels: -2,
                recession: -2,
                reckless: -2,
                recognition: 2,
                recommend: 2,
                recommended: 2,
                recommends: 2,
                redeemed: 2,
                refine: 1,
                refined: 1,
                refines: 1,
                refreshingly: 2,
                refuse: -2,
                refused: -2,
                refuses: -2,
                refusing: -2,
                regret: -2,
                regretful: -2,
                regrets: -2,
                regretted: -2,
                regretting: -2,
                reigning: 1,
                reject: -1,
                rejected: -1,
                rejecting: -1,
                rejection: -2,
                rejects: -1,
                rejoice: 4,
                rejoiced: 4,
                rejoices: 4,
                rejoicing: 4,
                relaxed: 2,
                relentless: -1,
                reliability: 2,
                reliable: 2,
                reliably: 2,
                reliant: 2,
                relieve: 1,
                relieved: 2,
                relieves: 1,
                relieving: 2,
                relishing: 2,
                remarkable: 2,
                remorse: -2,
                repellent: -2,
                repercussion: -2,
                repercussions: -2,
                reprimand: -2,
                reprimanded: -2,
                reprimanding: -2,
                reprimands: -2,
                repulse: -1,
                repulsed: -2,
                repulsive: -2,
                rescue: 2,
                rescued: 2,
                rescues: 2,
                resentful: -2,
                resign: -1,
                resigned: -1,
                resigning: -1,
                resigns: -1,
                resolute: 2,
                resolution: 2,
                resolve: 2,
                resolved: 2,
                resolves: 2,
                resolving: 2,
                respect: 2,
                respected: 2,
                respects: 2,
                responsibility: 1,
                responsible: 2,
                responsive: 2,
                restful: 2,
                restless: -2,
                restore: 1,
                restored: 1,
                restores: 1,
                restoring: 1,
                restrict: -2,
                restricted: -2,
                restricting: -2,
                restriction: -2,
                restrictive: -1,
                restricts: -2,
                retained: -1,
                retard: -2,
                retarded: -2,
                retreat: -1,
                revenge: -2,
                revengeful: -2,
                revered: 2,
                revive: 2,
                revives: 2,
                revolting: -2,
                reward: 2,
                rewarded: 2,
                rewarding: 2,
                rewards: 2,
                rich: 2,
                richly: 2,
                ridiculous: -3,
                rig: -1,
                rigged: -1,
                righteousness: 2,
                rightful: 2,
                rightfully: 2,
                rigorous: 3,
                rigorously: 3,
                riot: -2,
                riots: -2,
                rise: 1,
                rises: 1,
                risk: -2,
                risks: -2,
                risky: -2,
                riveting: 3,
                rob: -2,
                robber: -2,
                robed: -2,
                robing: -2,
                robs: -2,
                robust: 2,
                rocks: 2,
                rofl: 4,
                roflcopter: 4,
                roflmao: 4,
                romance: 2,
                romantical: 2,
                romantically: 2,
                rose: 1,
                rotfl: 4,
                rotflmfao: 4,
                rotflol: 4,
                rotten: -3,
                rude: -2,
                ruin: -2,
                ruined: -2,
                ruining: -2,
                ruins: -2,
                sabotage: -2,
                sad: -2,
                sadden: -2,
                saddened: -2,
                sadly: -2,
                safe: 1,
                safely: 1,
                safer: 2,
                safety: 1,
                salient: 1,
                salute: 2,
                saluted: 2,
                salutes: 2,
                saluting: 2,
                salvation: 2,
                sappy: -1,
                sarcastic: -2,
                satisfied: 2,
                savange: -2,
                savanges: -2,
                save: 2,
                saved: 2,
                savings: 1,
                scam: -2,
                scams: -2,
                scandal: -3,
                scandalous: -3,
                scandals: -3,
                scapegoat: -2,
                scapegoats: -2,
                scare: -2,
                scared: -2,
                scar: -2,
                scars: -2,
                scary: -2,
                sceptical: -2,
                scold: -2,
                scoop: 3,
                scorn: -2,
                scornful: -2,
                scream: -2,
                screamed: -2,
                screaming: -2,
                screams: -2,
                screwed: -2,
                scum: -3,
                scumbag: -4,
                seamless: 2,
                seamlessly: 2,
                secure: 2,
                secured: 2,
                secures: 2,
                sedition: -2,
                seditious: -2,
                seduced: -1,
                selfish: -3,
                selfishness: -3,
                sentence: -2,
                sentenced: -2,
                sentences: -2,
                sentencing: -2,
                serene: 2,
                settlement: 1,
                settlements: 1,
                severe: -2,
                severely: -2,
                sexist: -2,
                sexistic: -2,
                sexy: 3,
                shaky: -2,
                shame: -2,
                shamed: -2,
                shameful: -2,
                share: 1,
                shared: 1,
                shares: 1,
                shattered: -2,
                shit: -4,
                shithead: -4,
                shitty: -3,
                shock: -2,
                shocked: -2,
                shocking: -2,
                shocks: -2,
                shoody: -2,
                shoot: -1,
                shortage: -2,
                shortages: -2,
                shrew: -4,
                shy: -1,
                sick: -2,
                sickness: -2,
                sigh: -2,
                significance: 1,
                significant: 1,
                silencing: -1,
                silly: -1,
                simplicity: 1,
                sin: -2,
                sincere: 2,
                sincerely: 2,
                sincerest: 2,
                sincerity: 2,
                sinful: -3,
                singleminded: -2,
                sinister: -2,
                sins: -2,
                skeptic: -2,
                skeptical: -2,
                skepticism: -2,
                skeptics: -2,
                slam: -2,
                slash: -2,
                slashed: -2,
                slashes: -2,
                slashing: -2,
                slave: -3,
                slavery: -3,
                slaves: -3,
                sleeplessness: -2,
                slick: 2,
                slicker: 2,
                slickest: 2,
                slip: -1,
                sloppy: -2,
                sluggish: -2,
                slumping: -1,
                slut: -5,
                smart: 1,
                smarter: 2,
                smartest: 2,
                smear: -2,
                smile: 2,
                smiled: 2,
                smiles: 2,
                smiling: 2,
                smog: -2,
                smuggle: -2,
                smuggled: -2,
                smuggling: -2,
                smuggles: -2,
                sneaky: -1,
                sneeze: -2,
                sneezed: -2,
                sneezes: -2,
                sneezing: -2,
                snub: -2,
                snubbed: -2,
                snubbing: -2,
                snubs: -2,
                sobering: 1,
                solemn: -1,
                solid: 2,
                solidarity: 2,
                solidified: 2,
                solidifies: 2,
                solidify: 2,
                solidifying: 2,
                solution: 1,
                solutions: 1,
                solve: 1,
                solved: 1,
                solves: 1,
                solving: 1,
                somber: -2,
                soothe: 3,
                soothed: 3,
                soothing: 3,
                sophisticated: 2,
                sore: -1,
                sorrow: -2,
                sorrowful: -2,
                sorry: -1,
                spacious: 1,
                spam: -2,
                spammer: -3,
                spammers: -3,
                spamming: -2,
                spark: 1,
                sparkle: 3,
                sparkles: 3,
                sparkling: 3,
                spearhead: 2,
                speculative: -2,
                spirit: 1,
                spirited: 2,
                spiritless: -2,
                spiteful: -2,
                splendid: 3,
                spoiled: -2,
                spoilt: -2,
                spotless: 2,
                sprightly: 2,
                squander: -2,
                squandered: -2,
                squandering: -2,
                squanders: -2,
                squelched: -1,
                stab: -2,
                stabbed: -2,
                stable: 2,
                stabs: -2,
                stall: -2,
                stalled: -2,
                stalling: -2,
                stamina: 2,
                stampede: -2,
                stank: -2,
                startled: -2,
                startling: 3,
                starve: -2,
                starved: -2,
                starves: -2,
                starving: -2,
                steadfast: 2,
                steal: -2,
                stealing: -2,
                steals: -2,
                stereotype: -2,
                stereotyped: -2,
                stifled: -1,
                stimulate: 1,
                stimulated: 1,
                stimulates: 1,
                stimulating: 2,
                stingy: -2,
                stink: -2,
                stinked: -2,
                stinker: -2,
                stinking: -2,
                stinks: -2,
                stinky: -2,
                stole: -2,
                stolen: -2,
                stop: -1,
                stopped: -1,
                stopping: -1,
                stops: -1,
                stout: 2,
                straight: 1,
                strange: -1,
                strangely: -1,
                strangled: -2,
                strength: 2,
                strengthen: 2,
                strengthened: 2,
                strengthening: 2,
                strengthens: 2,
                strengths: 2,
                stress: -1,
                stressed: -2,
                stressor: -2,
                stressors: -2,
                stricken: -2,
                strike: -1,
                strikers: -2,
                strikes: -1,
                strong: 2,
                stronger: 2,
                strongest: 2,
                struck: -1,
                struggle: -2,
                struggled: -2,
                struggles: -2,
                struggling: -2,
                stubborn: -2,
                stuck: -2,
                stunned: -2,
                stunning: 4,
                stupid: -2,
                stupidity: -3,
                stupidly: -2,
                suave: 2,
                subpoena: -2,
                substantial: 1,
                substantially: 1,
                subversive: -2,
                succeed: 3,
                succeeded: 3,
                succeeding: 3,
                succeeds: 3,
                success: 2,
                successful: 3,
                successfully: 3,
                suck: -3,
                sucks: -3,
                sue: -2,
                sued: -2,
                sueing: -2,
                sues: -2,
                suffer: -2,
                suffered: -2,
                sufferer: -2,
                sufferers: -2,
                suffering: -2,
                suffers: -2,
                suicidal: -2,
                suicide: -2,
                suicides: -2,
                suing: -2,
                suitable: 2,
                suited: 2,
                sulking: -2,
                sulky: -2,
                sullen: -2,
                sunshine: 2,
                super: 3,
                superb: 5,
                superior: 2,
                support: 2,
                supported: 2,
                supporter: 1,
                supporters: 1,
                supporting: 1,
                supportive: 2,
                supports: 2,
                supreme: 4,
                survived: 2,
                surviving: 2,
                survivor: 2,
                suspect: -1,
                suspected: -1,
                suspecting: -1,
                suspects: -1,
                suspend: -1,
                suspended: -1,
                suspicious: -2,
                sustainability: 1,
                sustainable: 2,
                sustainably: 2,
                swear: -2,
                swearing: -2,
                swears: -2,
                sweet: 2,
                sweeter: 3,
                sweetest: 3,
                swift: 2,
                swiftly: 2,
                swindle: -3,
                swindles: -3,
                swindling: -3,
                sympathetic: 2,
                sympathy: 2,
                taint: -2,
                tainted: -2,
                talent: 2,
                tard: -2,
                tarnish: -2,
                tarnished: -2,
                tarnishes: -2,
                tears: -2,
                tender: 2,
                tenderness: 2,
                tense: -2,
                tension: -1,
                terrible: -3,
                terribly: -3,
                terrific: 4,
                terrifically: 4,
                terrified: -3,
                terror: -3,
                terrorist: -2,
                terrorists: -2,
                terrorize: -3,
                terrorized: -3,
                terrorizes: -3,
                thank: 2,
                thankful: 2,
                thanks: 2,
                thorny: -2,
                thoughtful: 2,
                thoughtless: -2,
                threat: -2,
                threaten: -2,
                threatened: -2,
                threatening: -2,
                threatens: -2,
                threats: -2,
                thrilled: 5,
                thwart: -2,
                thwarted: -2,
                thwarting: -2,
                thwarts: -2,
                timid: -2,
                timorous: -2,
                tired: -2,
                tits: -2,
                tolerance: 2,
                tolerant: 2,
                toothless: -2,
                top: 2,
                tops: 2,
                torn: -2,
                torture: -4,
                tortured: -4,
                tortures: -4,
                torturing: -4,
                totalitarian: -2,
                totalitarianism: -2,
                tout: -2,
                touted: -2,
                touting: -2,
                touts: -2,
                toxic: -3,
                tragedies: -2,
                tragedy: -2,
                tragic: -2,
                tranquil: 2,
                transgress: -2,
                transgressed: -2,
                transgresses: -2,
                transgressing: -2,
                trap: -1,
                trapped: -2,
                traps: -1,
                trauma: -3,
                traumatic: -3,
                travesty: -2,
                treason: -3,
                treasonous: -3,
                treasure: 2,
                treasures: 2,
                trembling: -2,
                tremor: -2,
                tremors: -2,
                tremulous: -2,
                tribulation: -2,
                tribute: 2,
                tricked: -2,
                trickery: -2,
                triumph: 4,
                triumphant: 4,
                troll: -2,
                trouble: -2,
                troubled: -2,
                troubles: -2,
                troubling: -2,
                true: 2,
                trust: 1,
                trusted: 2,
                trusts: 1,
                tumor: -2,
                twat: -5,
                tyran: -3,
                tyrannic: -3,
                tyrannical: -3,
                tyrannically: -3,
                tyrans: -3,
                ubiquitous: 2,
                ugh: -2,
                ugliness: -3,
                ugly: -3,
                unable: -2,
                unacceptable: -2,
                unappeasable: -2,
                unappreciated: -2,
                unapproved: -2,
                unattractive: -2,
                unavailable: -1,
                unavailing: -2,
                unaware: -2,
                unbearable: -2,
                unbelievable: -1,
                unbelieving: -1,
                unbiased: 2,
                uncertain: -1,
                unclear: -1,
                uncomfortable: -2,
                unconcerned: -2,
                unconfirmed: -1,
                unconvinced: -1,
                uncredited: -1,
                undecided: -1,
                undercooked: -2,
                underestimate: -1,
                underestimated: -1,
                underestimates: -1,
                underestimating: -1,
                undermine: -2,
                undermined: -2,
                undermines: -2,
                undermining: -2,
                underperform: -2,
                underperformed: -2,
                underperforming: -2,
                underperforms: -2,
                undeserving: -2,
                undesirable: -2,
                uneasy: -2,
                unemployed: -1,
                unemployment: -2,
                unequal: -1,
                unequaled: 2,
                unethical: -2,
                uneventful: -2,
                unfair: -2,
                unfavorable: -2,
                unfit: -2,
                unfitted: -2,
                unfocused: -2,
                unforgivable: -3,
                unforgiving: -2,
                unfulfilled: -2,
                unfunny: -2,
                ungenerous: -2,
                ungrateful: -3,
                unhappy: -2,
                unhappiness: -2,
                unhealthy: -2,
                unhygienic: -2,
                unified: 1,
                unimaginative: -2,
                unimpressed: -2,
                uninspired: -2,
                unintelligent: -2,
                unintentional: -2,
                uninvolving: -2,
                united: 1,
                unjust: -2,
                unlikely: -1,
                unlovable: -2,
                unloved: -2,
                unmatched: 1,
                unmotivated: -2,
                unoriginal: -2,
                unparliamentary: -2,
                unpleasant: -2,
                unpleasantness: -2,
                unprofessional: -2,
                unravel: 1,
                unreliable: -2,
                unreleting: -2,
                unresearched: -2,
                unsafe: -2,
                unsatisfied: -2,
                unscientific: -2,
                unsecured: -2,
                unselfish: 2,
                unsettled: -1,
                unsold: -1,
                unsophisticated: -2,
                unsound: -2,
                unstable: -2,
                unstoppable: 2,
                unsuccessful: -2,
                unsuccessfully: -2,
                unsupported: -2,
                unsure: -1,
                untarnished: 2,
                untrue: -2,
                unwanted: -2,
                unworthy: -2,
                uplifting: 2,
                uproar: -3,
                upset: -2,
                upsets: -2,
                upsetting: -2,
                uptight: -2,
                urgent: -1,
                useful: 2,
                usefulness: 2,
                useless: -2,
                uselessness: -2,
                vague: -2,
                validate: 1,
                validated: 1,
                validates: 1,
                validating: 1,
                vapid: -2,
                verdict: -1,
                verdicts: -1,
                vested: 1,
                vexation: -2,
                vexing: -2,
                vibrant: 3,
                vicious: -2,
                victim: -3,
                victimization: -3,
                victimize: -3,
                victimized: -3,
                victimizes: -3,
                victimizing: -3,
                victims: -3,
                victor: 3,
                victors: 3,
                victory: 3,
                victories: 3,
                vigilant: 3,
                vigor: 3,
                vile: -3,
                vindicate: 2,
                vindicated: 2,
                vindicates: 2,
                vindicating: 2,
                violate: -2,
                violated: -2,
                violates: -2,
                violating: -2,
                violation: -2,
                violations: -2,
                violence: -3,
                violent: -3,
                violently: -3,
                virtuous: 2,
                virulent: -2,
                vision: 1,
                visionary: 3,
                visioning: 1,
                visions: 1,
                vitality: 3,
                vitamin: 1,
                vitriolic: -3,
                vivacious: 3,
                vividly: 2,
                vociferous: -1,
                vomit: -3,
                vomited: -3,
                vomiting: -3,
                vomits: -3,
                vulnerability: -2,
                vulnerable: -2,
                walkout: -2,
                walkouts: -2,
                wanker: -3,
                want: 1,
                war: -2,
                warfare: -2,
                warm: 1,
                warmhearted: 2,
                warmness: 2,
                warmth: 2,
                warn: -2,
                warned: -2,
                warning: -3,
                warnings: -3,
                warns: -2,
                waste: -1,
                wasted: -2,
                wasting: -2,
                wavering: -1,
                weak: -2,
                weakened: -2,
                weakness: -2,
                weaknesses: -2,
                wealth: 3,
                wealthier: 2,
                wealthy: 2,
                weary: -2,
                weep: -2,
                weeping: -2,
                weird: -2,
                welcome: 2,
                welcomed: 2,
                welcomes: 2,
                whimsical: 1,
                whitewash: -3,
                whore: -4,
                wicked: -2,
                widowed: -1,
                willingness: 2,
                win: 4,
                winner: 4,
                winning: 4,
                wins: 4,
                winwin: 3,
                wisdom: 1,
                wish: 1,
                wishes: 1,
                wishing: 1,
                withdrawal: -3,
                wits: 2,
                woebegone: -2,
                woeful: -3,
                won: 3,
                wonderful: 4,
                wonderfully: 4,
                woo: 3,
                woohoo: 3,
                wooo: 4,
                woow: 4,
                work: 3,
                works: 3,
                working: 3,
                worn: -1,
                worried: -3,
                worries: -3,
                worry: -3,
                worrying: -3,
                worse: -3,
                worsen: -3,
                worsened: -3,
                worsening: -3,
                worsens: -3,
                worshiped: 3,
                worst: -3,
                worth: 2,
                worthless: -2,
                worthwhile: 2,
                worthy: 2,
                wow: 4,
                wowow: 4,
                wowww: 4,
                wrathful: -3,
                wreck: -2,
                wrenching: -2,
                wrong: -2,
                wrongdoing: -2,
                wrongdoings: -2,
                wronged: -2,
                wrongful: -2,
                wrongfully: -2,
                wrongly: -2,
                wtf: -4,
                wtff: -4,
                wtfff: -4,
                xo: 3,
                xoxo: 3,
                xoxoxo: 4,
                xoxoxoxo: 4,
                yeah: 1,
                yearning: 1,
                yeees: 2,
                yes: 1,
                yess: 2,
                yesss: 2,
                youthful: 2,
                yucky: -2,
                yummy: 3,
                zealot: -2,
                zealots: -2,
                zealous: 2
            }
        },
        445: function(e, t) {
            e.exports = {
                ":)": 2,
                ":(": -2,
                ":|": -1,
                ":]": 2,
                ":[": -2,
                ":}": 2,
                ":{": -2,
                ":/": -2,
                ":\\": -2,
                ":*": 2,
                ":-)": 2,
                ":-(": -2,
                ":-|": -1,
                ":-]": 2,
                ":-[": -2,
                ":-}": 2,
                ":-?": -1,
                ":->": 2,
                ":-*": 2,
                ":-D": 3,
                ":-P": 3,
                ":-S": -2,
                ":-p": 3,
                ":-/": -2,
                ":D": 3,
                ":P": 3,
                ":S": -2,
                ":p": 3,
                ":o)": 2,
                ":'(": -2,
                "(:": 2,
                "):": -2,
                "(-:": 2,
                ")-:": -2,
                ";-(": -2,
                ";)": 2,
                ";(": -2,
                ";-)": 2,
                ";-D": 3,
                "=(": -2,
                "=/": -2,
                "=\\": -2,
                "=^/": -1,
                "=P": 3,
                "o/": 3,
                "♥": 3,
                ":-))": 3,
                ":-)))": 3,
                ":-))))": 3,
                ":-)))))": 3,
                ":-))))))": 4,
                ":-)))))))": 4,
                ":-))))))))": 4,
                ":-)))))))))": 4,
                "://": 0,
                ":))": 3,
                ":)))": 3,
                ":))))": 3,
                ":)))))": 3,
                ":))))))": 4,
                ":)))))))": 4,
                ":))))))))": 4,
                ":)))))))))": 4,
                ":))))))))))": 4,
                ":-((": -3,
                ":-(((": -3,
                ":-((((": -3,
                ":((": -3,
                ";))": 3,
                ";)))": 3,
                "<3": 3,
                "<33": 3,
                "<333": 4,
                "<3333": 4,
                "<33333": 4,
                "<333333": 4,
                "<3333333": 4,
                "<33333333": 4,
                "<333333333": 4,
                "8(": -2,
                "8)": 2,
                "8-D": 3,
                "8-)": 2,
                "8-(": -2,
                "8D": 3,
                "X-D": 3,
                XD: 3
            }
        },
        446: function(e, t) {
            e.exports = {
                never: !0,
                none: !0,
                no: !0,
                not: !0,
                non: !0,
                arent: !0,
                cant: !0,
                dont: !0,
                wont: !0,
                isnt: !0,
                wouldnt: !0,
                shouldnt: !0,
                "n't": !0
            }
        },
        447: function(e, t) {
            e.exports = {
                bad: {
                    luck: -2,
                    fit: -1
                },
                best: {
                    damn: 4
                },
                cashing: { in: -2
                },
                cool: {
                    stuff: 3
                },
                cover: {
                    up: -3
                },
                damn: {
                    cute: 3,
                    good: 4
                },
                environment: {
                    friendly: 2
                },
                fed: {
                    up: -3
                },
                fucking: {
                    amazing: 4,
                    beautiful: 4,
                    cute: 4,
                    fantastic: 4,
                    good: 4,
                    great: 4,
                    hot: 2,
                    love: 4,
                    loves: 4,
                    perfect: 4
                },
                game: {
                    changing: 3
                },
                green: {
                    wash: -3,
                    washing: -3
                },
                ill: {
                    fated: -2
                },
                kind: {
                    of: 0
                },
                loving: {
                    kindness: 3
                },
                made: {
                    up: -1
                },
                messing: {
                    up: -2
                },
                post: {
                    traumatic: -2
                },
                right: {
                    direction: 3
                },
                screwed: {
                    up: -3
                },
                self: {
                    abuse: -2,
                    confident: 2,
                    contradictory: -2,
                    deluded: -2
                },
                short: {
                    sighted: -2,
                    sightedness: -2
                },
                side: {
                    effect: -2,
                    effects: -2
                },
                some: {
                    kind: 0
                },
                violence: {
                    related: -3
                },
                well: {
                    being: 2,
                    championed: 3,
                    developed: 2,
                    done: 3,
                    established: 2,
                    focused: 2,
                    groomed: 2,
                    proportioned: 2
                }
            }
        },
        47: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(338),
                a = r.n(n),
                i = r(66),
                o = r(10),
                s = r.n(o),
                u = r(69),
                l = r.n(u),
                c = r(96),
                d = r.n(c);

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function m(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function f(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = v(e);
                    if (t) {
                        var a = v(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
            var $ = function(e) {
                    for (var t = (e = e || "_") + "-", r = 0; r < 7; r++) t += x[Math.floor(Math.random() * x.length)];
                    return t
                },
                P = {
                    "!": "¡",
                    "?": "¿Ɂ",
                    '"': '“”"❝❞',
                    "'": "‘‛❛❜",
                    "-": "—–",
                    a: "ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАадѦѧӐӑӒӓƛɅæ",
                    b: "ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬвъьѢѣҌҍ",
                    c: "¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾСсєҀҁҪҫ",
                    d: "ÐĎďĐđƉƊȡƋƌǷ",
                    e: "ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ",
                    f: "ƑƒϜϝӺӻҒғſ",
                    g: "ĜĝĞğĠġĢģƓǤǥǦǧǴǵ",
                    h: "ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ",
                    I: "ÌÍÎÏ",
                    i: "ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії",
                    j: "ĴĵǰȷɈɉϳЈј",
                    k: "ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ",
                    l: "ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ",
                    m: "ΜϺϻМмӍӎ",
                    n: "ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ",
                    o: "ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ",
                    p: "ƤƿΡρϷϸϼРрҎҏÞ",
                    q: "Ɋɋ",
                    r: "ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ",
                    s: "ŚśŜŝŞşŠšƧƨȘșȿЅѕ",
                    t: "ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮТт",
                    u: "µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύ",
                    v: "νѴѵѶѷ",
                    w: "ŴŵƜωώϖϢϣШЩшщѡѿ",
                    x: "×ΧχϗϰХхҲҳӼӽӾӿ",
                    y: "ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ",
                    z: "ŹźŻżŽžƩƵƶȤȥɀΖζ"
                },
                B = {};
            Object.keys(P).forEach((function(e) {
                P[e].split("").forEach((function(t) {
                    B[t] = e
                }))
            }));
            var G = function(e) {
                    var t = e.split("");
                    return t.forEach((function(e, r) {
                        B[e] && (t[r] = B[e])
                    })), t.join("")
                },
                C = /([A-Z]\.)+[A-Z]?,?$/,
                j = /^[A-Z]\.,?$/,
                D = /[A-Z]{2,}('s|,)?$/,
                E = /([a-z]\.){2,}[a-z]\.?$/,
                N = function(e) {
                    return !0 === C.test(e) || (!0 === E.test(e) || (!0 === j.test(e) || !0 === D.test(e)))
                },
                F = /[a-z\u00C0-\u00FF] ?\/ ?[a-z\u00C0-\u00FF]/,
                z = function(e) {
                    var t = e = (e = (e = e || "").toLowerCase()).trim();
                    return e = G(e), !0 === F.test(e) && (e = e.replace(/\/.*/, "")), e = (e = (e = (e = (e = (e = (e = e.replace(/^[#@]/, "")).replace(/[,;.!?]+$/, "")).replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g, "'")).replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g, '"')).replace(/\u2026/g, "...")).replace(/\u2013/g, "-")).replace(/([aeiou][ktrp])in$/, "$1ing"), !0 === /^(re|un)-?[^aeiou]./.test(e) && (e = e.replace("-", "")), !1 === /^[:;]/.test(e) && (e = (e = (e = e.replace(/\.{3,}$/g, "")).replace(/[",\.!:;\?\)]+$/g, "")).replace(/^['"\(]+/g, "")), "" === (e = e.trim()) && (e = t), N(e) && (e = e.replace(/\./g, "")), e = e.replace(/([0-9]),([0-9])/g, "$1$2")
                },
                O = function(e) {
                    return e = (e = e.replace(/['’]s$/, "")).replace(/s['’]$/, "s")
                },
                _ = /^[ \n\t\.’'\[\](){}⟨⟩:,،、‒–—―…!.‹›«»‐\-?‘’;\/⁄·&*•^†‡°¡¿※№÷×ºª%‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F]+/,
                T = /[ \n\t\.’'\[\](){}⟨⟩:,،、‒–—―…!.‹›«»‐\-?‘’;\/⁄·&*@•^†‡°¡¿※#№÷×ºª‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E]+$/,
                I = /\//,
                V = /['’]/,
                H = /^[a-z]\.([a-z]\.)+/i,
                S = /^[-+\.][0-9]/,
                M = function(e) {
                    var t = e,
                        r = "",
                        n = "";
                    "" === (e = (e = e.replace(_, (function(t) {
                        return "-" !== (r = t) && "+" !== r && "." !== r || !S.test(e) ? "" : (r = "", t)
                    }))).replace(T, (function(a) {
                        return n = a, V.test(a) && /[sn]['’]$/.test(t) && !1 === V.test(r) ? (n = n.replace(V, ""), "'") : !0 === H.test(e) ? (n = n.replace(/\./, ""), ".") : ""
                    }))) && (t = t.replace(/ *$/, (function(e) {
                        return n = e || "", ""
                    })), e = t, r = "", n = n);
                    var a = z(e),
                        i = {
                            text: e,
                            clean: a,
                            reduced: O(a),
                            pre: r,
                            post: n
                        };
                    return I.test(e) && e.split(I).forEach((function(e) {
                        i.alias = i.alias || {}, i.alias[e.trim()] = !0
                    })), i
                };

            function L(e, t, r) {
                return e(r = {
                    path: t,
                    exports: {},
                    require: function(e, t) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(null == t && r.path)
                    }
                }, r.exports), r.exports
            }
            var q = L((function(e, t) {
                    var r = /^[A-Z][a-z'\u00C0-\u00FF]/,
                        n = /^[A-Z]+s?$/;
                    t.toUpperCase = function() {
                        return this.text = this.text.toUpperCase(), this
                    }, t.toLowerCase = function() {
                        return this.text = this.text.toLowerCase(), this
                    }, t.toTitleCase = function() {
                        return this.text = this.text.replace(/^ *[a-z\u00C0-\u00FF]/, (function(e) {
                            return e.toUpperCase()
                        })), this
                    }, t.isUpperCase = function() {
                        return n.test(this.text)
                    }, t.isTitleCase = function() {
                        return r.test(this.text)
                    }, t.titleCase = t.isTitleCase
                })),
                W = L((function(e, t) {
                    var r = /(\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F)/,
                        n = /(\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E)/;
                    t.hasPost = function(e) {
                        return -1 !== this.post.indexOf(e)
                    }, t.hasPre = function(e) {
                        return -1 !== this.pre.indexOf(e)
                    }, t.hasQuote = function() {
                        return r.test(this.pre) || n.test(this.post)
                    }, t.hasQuotation = t.hasQuote, t.hasComma = function() {
                        return this.hasPost(",")
                    }, t.hasPeriod = function() {
                        return !0 === this.hasPost(".") && !1 === this.hasPost("...")
                    }, t.hasExclamation = function() {
                        return this.hasPost("!")
                    }, t.hasQuestionMark = function() {
                        return this.hasPost("?") || this.hasPost("¿")
                    }, t.hasEllipses = function() {
                        return this.hasPost("..") || this.hasPost("…") || this.hasPre("..") || this.hasPre("…")
                    }, t.hasSemicolon = function() {
                        return this.hasPost(";")
                    }, t.hasSlash = function() {
                        return /\//.test(this.text)
                    }, t.hasHyphen = function() {
                        var e = /(-|–|—)/;
                        return e.test(this.post) || e.test(this.pre)
                    }, t.hasDash = function() {
                        var e = / (-|–|—) /;
                        return e.test(this.post) || e.test(this.pre)
                    }, t.hasContraction = function() {
                        return Boolean(this.implicit)
                    }, t.addPunctuation = function(e) {
                        return "," !== e && ";" !== e || (this.post = this.post.replace(e, "")), this.post = e + this.post, this
                    }
                })),
                J = function() {},
                R = function(e, t, r, n) {
                    return t.id === e.id || (!0 === t.anything || (!0 !== t.start || 0 === r) && ((!0 !== t.end || r === n - 1) && (void 0 !== t.word ? null !== e.implicit && e.implicit === t.word || (!(void 0 === e.alias || !e.alias.hasOwnProperty(t.word)) || (!0 === t.soft && t.word === e.root || (t.word === e.clean || t.word === e.text || t.word === e.reduced))) : void 0 !== t.tag ? !0 === e.tags[t.tag] : void 0 !== t.method ? "function" == typeof e[t.method] && !0 === e[t.method]() : void 0 !== t.regex ? t.regex.test(e.clean) : void 0 !== t.oneOf ? t.oneOf.hasOwnProperty(e.reduced) || t.oneOf.hasOwnProperty(e.text) : void 0 !== t.choices && ("and" === t.operator ? t.choices.every((function(t) {
                        return J(e, t, r, n)
                    })) : t.choices.some((function(t) {
                        return J(e, t, r, n)
                    }))))))
                },
                K = J = function(e, t, r, n) {
                    var a = R(e, t, r, n);
                    return !0 === t.negative ? !a : a
                },
                U = {},
                Q = {
                    doesMatch: function(e, t, r) {
                        return K(this, e, t, r)
                    },
                    isAcronym: function() {
                        return N(this.text)
                    },
                    isImplicit: function() {
                        return "" === this.text && Boolean(this.implicit)
                    },
                    isKnown: function() {
                        return Object.keys(this.tags).some((function(e) {
                            return !0 !== U[e]
                        }))
                    },
                    setRoot: function(e) {
                        var t = e.transforms,
                            r = this.implicit || this.clean;
                        if (this.tags.Plural && (r = t.toSingular(r, e)), this.tags.Verb && !this.tags.Negative && !this.tags.Infinitive) {
                            var n = null;
                            this.tags.PastTense ? n = "PastTense" : this.tags.Gerund ? n = "Gerund" : this.tags.PresentTense ? n = "PresentTense" : this.tags.Participle ? n = "Participle" : this.tags.Actor && (n = "Actor"), r = t.toInfinitive(r, e, n)
                        }
                        this.root = r
                    }
                },
                Z = /[\s-]/,
                X = /^[A-Z-]+$/,
                Y = {
                    textOut: function(e, t, r) {
                        e = e || {};
                        var n = this.text,
                            a = this.pre,
                            i = this.post;
                        return !0 === e.reduced && (n = this.reduced || ""), !0 === e.root && (n = this.root || ""), !0 === e.implicit && this.implicit && (n = this.implicit || ""), !0 === e.normal && (n = this.clean || this.text || ""), !0 === e.root && (n = this.root || this.reduced || ""), !0 === e.unicode && (n = G(n)), !0 === e.titlecase && (this.tags.ProperNoun && !this.titleCase() || (this.tags.Acronym ? n = n.toUpperCase() : X.test(n) && !this.tags.Acronym && (n = n.toLowerCase()))), !0 === e.lowercase && (n = n.toLowerCase()), !0 === e.acronyms && this.tags.Acronym && (n = n.replace(/\./g, "")), !0 !== e.whitespace && !0 !== e.root || (a = "", i = " ", !1 !== Z.test(this.post) && !e.last || this.implicit || (i = "")), !0 !== e.punctuation || e.root || (!0 === this.hasPost(".") ? i = "." + i : !0 === this.hasPost("?") ? i = "?" + i : !0 === this.hasPost("!") ? i = "!" + i : !0 === this.hasPost(",") ? i = "," + i : !0 === this.hasEllipses() && (i = "..." + i)), !0 !== t && (a = ""), !0 !== r && (i = ""), !0 === e.abbreviations && this.tags.Abbreviation && (i = i.replace(/^\./, "")), a + n + i
                    }
                },
                ee = {
                    Auxiliary: 1,
                    Possessive: 1
                },
                te = function(e, t) {
                    var r = Object.keys(e.tags),
                        n = t.tags;
                    return r = r.sort((function(e, t) {
                        return ee[t] || !n[t] ? -1 : n[t] ? n[e] ? n[e].lineage.length > n[t].lineage.length ? 1 : n[e].isA.length > n[t].isA.length ? -1 : 0 : 0 : 1
                    }))
                },
                re = {
                    text: !0,
                    tags: !0,
                    implicit: !0,
                    whitespace: !0,
                    clean: !1,
                    id: !1,
                    index: !1,
                    offset: !1,
                    bestTag: !1
                },
                ne = {
                    json: function(e, t) {
                        e = e || {};
                        var r = {};
                        return (e = Object.assign({}, re, e)).text && (r.text = this.text), e.normal && (r.normal = this.normal), e.tags && (r.tags = Object.keys(this.tags)), e.clean && (r.clean = this.clean), (e.id || e.offset) && (r.id = this.id), e.implicit && null !== this.implicit && (r.implicit = this.implicit), e.whitespace && (r.pre = this.pre, r.post = this.post), e.bestTag && (r.bestTag = te(this, t)[0]), r
                    }
                },
                ae = Object.assign({}, q, W, Q, Y, ne);

            function ie() {
                return "undefined" != typeof window && window.document
            }
            var oe = function(e, t) {
                    for (e = e.toString(); e.length < t;) e += " ";
                    return e
                },
                se = function(e, t, r) {
                    if (ie()) console.log("%c" + oe(e.clean, 3) + "  + " + t + " ", "color: #6accb2;");
                    else {
                        var n = "[33m" + oe(e.clean, 15) + "[0m + [32m" + t + "[0m ";
                        r && (n = oe(n, 35) + " " + r), console.log(n)
                    }
                },
                ue = function(e, t, r) {
                    if (ie()) console.log("%c" + oe(e.clean, 3) + "  - " + t + " ", "color: #AB5850;");
                    else {
                        var n = "[33m" + oe(e.clean, 3) + " [31m - #" + t + "[0m ";
                        r && (n = oe(n, 35) + " " + r), console.log(n)
                    }
                },
                le = function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                },
                ce = function(e, t, r, n) {
                    var a = n.tags;
                    if ("" !== t && "." !== t && "-" !== t && ("#" === t[0] && (t = t.replace(/^#/, "")), t = le(t), !0 !== e.tags[t])) {
                        var i = n.isVerbose();
                        !0 === i && se(e, t, r), e.tags[t] = !0, !0 === a.hasOwnProperty(t) && (a[t].isA.forEach((function(t) {
                            e.tags[t] = !0, !0 === i && se(e, "→ " + t)
                        })), e.unTag(a[t].notA, "←", n))
                    }
                },
                de = function(e, t, r, n) {
                    if ("string" != typeof t)
                        for (var a = 0; a < t.length; a++) ce(e, t[a], r, n);
                    else ce(e, t, r, n)
                },
                he = /^[a-z]/,
                ge = function(e, t, r, n) {
                    var a, i = n.isVerbose();
                    if ("*" === t) return e.tags = {}, e;
                    t = t.replace(/^#/, ""), !0 === he.test(t) && (t = (a = t).charAt(0).toUpperCase() + a.substr(1)), !0 === e.tags[t] && (delete e.tags[t], !0 === i && ue(e, t, r));
                    var o = n.tags;
                    if (o[t])
                        for (var s = o[t].lineage, u = 0; u < s.length; u++) !0 === e.tags[s[u]] && (delete e.tags[s[u]], !0 === i && ue(e, " - " + s[u]));
                    return e
                },
                pe = function(e, t, r, n) {
                    if ("string" != typeof t && t)
                        for (var a = 0; a < t.length; a++) ge(e, t[a], r, n);
                    else ge(e, t, r, n)
                },
                me = function e(t, r, n) {
                    var a = n.tags;
                    if ("#" === r[0] && (r = r.replace(/^#/, "")), void 0 === a[r]) return !0;
                    for (var i = a[r].notA || [], o = 0; o < i.length; o++)
                        if (!0 === t.tags[i[o]]) return !1;
                    return void 0 === a[r].isA || e(t, a[r].isA, n)
                },
                fe = {
                    tag: function(e, t, r) {
                        return de(this, e, t, r), this
                    },
                    tagSafe: function(e, t, r) {
                        return me(this, e, r) && de(this, e, t, r), this
                    },
                    unTag: function(e, t, r) {
                        return pe(this, e, t, r), this
                    },
                    canBe: function(e, t) {
                        return me(this, e, t)
                    }
                },
                ve = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        g(this, e), t = String(t);
                        var r = M(t);
                        this.text = r.text || "", this.clean = r.clean, this.reduced = r.reduced, this.root = null, this.implicit = null, this.pre = r.pre || "", this.post = r.post || "", this.tags = {}, this.prev = null, this.next = null, this.id = $(r.clean), this.isA = "Term", r.alias && (this.alias = r.alias)
                    }
                    return m(e, [{
                        key: "set",
                        value: function(e) {
                            var t = M(e);
                            return this.text = t.text, this.clean = t.clean, this
                        }
                    }]), e
                }();
            ve.prototype.clone = function() {
                var e = new ve(this.text);
                return e.pre = this.pre, e.post = this.post, e.tags = Object.assign({}, this.tags), e
            }, Object.assign(ve.prototype, ae), Object.assign(ve.prototype, fe);
            var be = ve,
                ye = {
                    terms: function(e) {
                        if (0 === this.length) return [];
                        if (this.cache.terms) return void 0 !== e ? this.cache.terms[e] : this.cache.terms;
                        for (var t = [this.pool.get(this.start)], r = 0; r < this.length - 1; r += 1) {
                            var n = t[t.length - 1].next;
                            if (null === n) {
                                console.error("Compromise error: Linked list broken in phrase '" + this.start + "'");
                                break
                            }
                            var a = this.pool.get(n);
                            if (t.push(a), void 0 !== e && e === r) return t[e]
                        }
                        return void 0 === e && (this.cache.terms = t), void 0 !== e ? t[e] : t
                    },
                    clone: function(e) {
                        var t = this;
                        if (e) {
                            var r = this.buildFrom(this.start, this.length);
                            return r.cache = this.cache, r
                        }
                        var n = this.terms().map((function(e) {
                            return e.clone()
                        }));
                        return n.forEach((function(e, r) {
                            t.pool.add(e), n[r + 1] && (e.next = n[r + 1].id), n[r - 1] && (e.prev = n[r - 1].id)
                        })), this.buildFrom(n[0].id, n.length)
                    },
                    lastTerm: function() {
                        var e = this.terms();
                        return e[e.length - 1]
                    },
                    hasId: function(e) {
                        if (0 === this.length || !e) return !1;
                        if (this.start === e) return !0;
                        if (this.cache.terms) {
                            for (var t = this.cache.terms, r = 0; r < t.length; r++)
                                if (t[r].id === e) return !0;
                            return !1
                        }
                        for (var n = this.start, a = 0; a < this.length - 1; a += 1) {
                            var i = this.pool.get(n);
                            if (void 0 === i) return console.error("Compromise error: Linked list broken. Missing term '".concat(n, "' in phrase '").concat(this.start, "'\n")), !1;
                            if (i.next === e) return !0;
                            n = i.next
                        }
                        return !1
                    },
                    wordCount: function() {
                        return this.terms().filter((function(e) {
                            return "" !== e.text
                        })).length
                    },
                    fullSentence: function() {
                        for (var e = this.terms(0); e.prev;) e = this.pool.get(e.prev);
                        for (var t = e.id, r = 1; e.next;) e = this.pool.get(e.next), r += 1;
                        return this.buildFrom(t, r)
                    }
                },
                we = function(e) {
                    return e.replace(/ +$/, "")
                },
                ke = {
                    text: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            r = arguments.length > 2 ? arguments[2] : void 0;
                        "string" == typeof e && (e = "normal" === e ? {
                            whitespace: !0,
                            unicode: !0,
                            lowercase: !0,
                            punctuation: !0,
                            acronyms: !0,
                            abbreviations: !0,
                            implicit: !0,
                            normal: !0
                        } : "clean" === e ? {
                            titlecase: !1,
                            lowercase: !0,
                            punctuation: !0,
                            whitespace: !0,
                            unicode: !0,
                            implicit: !0
                        } : "reduced" === e ? {
                            titlecase: !1,
                            lowercase: !0,
                            punctuation: !1,
                            whitespace: !0,
                            unicode: !0,
                            implicit: !0,
                            reduced: !0
                        } : "root" === e ? {
                            titlecase: !1,
                            lowercase: !0,
                            punctuation: !0,
                            whitespace: !0,
                            unicode: !0,
                            implicit: !0,
                            root: !0
                        } : {});
                        var n = this.terms(),
                            a = !1;
                        n[0] && null === n[0].prev && null === n[n.length - 1].next && (a = !0);
                        var i = n.reduce((function(i, o, s) {
                            e.last = r && s === n.length - 1;
                            var u = !0,
                                l = !0;
                            return !1 === a && (0 === s && t && (u = !1), s === n.length - 1 && r && (l = !1)), i + o.textOut(e, u, l)
                        }), "");
                        return !0 === a && r && (i = we(i)), !0 === e.trim && (i = i.trim()), i
                    }
                },
                Ae = {
                    trim: function() {
                        var e = this.terms();
                        if (e.length > 0) {
                            e[0].pre = e[0].pre.replace(/^\s+/, "");
                            var t = e[e.length - 1];
                            t.post = t.post.replace(/\s+$/, "")
                        }
                        return this
                    }
                },
                xe = /[.?!]\s*$/,
                $e = function(e, t) {
                    t[0].pre = e[0].pre;
                    var r, n, a = e[e.length - 1],
                        i = t[t.length - 1];
                    i.post = (r = a.post, n = i.post, xe.test(n) ? n + r.match(/\s*$/) : r), a.post = "", "" === a.post && (a.post += " ")
                },
                Pe = function(e, t, r) {
                    var n = e.terms(),
                        a = t.terms();
                    $e(n, a),
                        function(e, t, r) {
                            var n = e[e.length - 1],
                                a = t[t.length - 1],
                                i = n.next;
                            (n.next = t[0].id, a.next = i, i) && (r.get(i).prev = a.id);
                            var o = e[0].id;
                            o && (t[0].prev = o)
                        }(n, a, e.pool);
                    var i = [e],
                        o = e.start,
                        s = [r];
                    return (s = s.concat(r.parents())).forEach((function(e) {
                        var t = e.list.filter((function(e) {
                            return e.hasId(o)
                        }));
                        i = i.concat(t)
                    })), (i = function(e) {
                        return e.filter((function(t, r) {
                            return e.indexOf(t) === r
                        }))
                    }(i)).forEach((function(e) {
                        e.length += t.length
                    })), e.cache = {}, e
                },
                Be = / /,
                Ge = function(e, t, r) {
                    var n = e.start,
                        a = t.terms();
                    ! function(e) {
                        var t = e[e.length - 1];
                        !1 === Be.test(t.post) && (t.post += " ")
                    }(a),
                    function(e, t, r) {
                        var n = r[r.length - 1];
                        n.next = e.start;
                        var a = e.pool,
                            i = a.get(e.start);
                        i.prev && (a.get(i.prev).next = t.start);
                        r[0].prev = e.terms(0).prev, e.terms(0).prev = n.id
                    }(e, t, a);
                    var i = [e],
                        o = [r];
                    return (o = o.concat(r.parents())).forEach((function(e) {
                        var r = e.list.filter((function(e) {
                            return e.hasId(n) || e.hasId(t.start)
                        }));
                        i = i.concat(r)
                    })), (i = function(e) {
                        return e.filter((function(t, r) {
                            return e.indexOf(t) === r
                        }))
                    }(i)).forEach((function(e) {
                        e.length += t.length, e.start === n && (e.start = t.start), e.cache = {}
                    })), e
                },
                Ce = function(e, t) {
                    var r = t.pool(),
                        n = e.terms(),
                        a = r.get(n[0].prev) || {},
                        i = r.get(n[n.length - 1].next) || {};
                    n[0].implicit && a.implicit && (a.set(a.implicit), a.post += " "),
                        function(e, t, r, n) {
                            var a = e.parents();
                            a.push(e), a.forEach((function(e) {
                                var a = e.list.find((function(e) {
                                    return e.hasId(t)
                                }));
                                a && (a.length -= r, a.start === t && (a.start = n.id), a.cache = {})
                            })), e.list = e.list.filter((function(e) {
                                return !(!e.start || !e.length)
                            }))
                        }(t, e.start, e.length, i), a && (a.next = i.id), i && (i.prev = a.id)
                },
                je = {
                    append: function(e, t) {
                        return Pe(this, e, t), this
                    },
                    prepend: function(e, t) {
                        return Ge(this, e, t), this
                    },
                    delete: function(e) {
                        return Ce(this, e), this
                    },
                    replace: function(e, t) {
                        var r = this.length;
                        Pe(this, e, t);
                        var n = this.buildFrom(this.start, this.length);
                        n.length = r, Ce(n, t)
                    },
                    splitOn: function(e) {
                        var t = this.terms(),
                            r = {
                                before: null,
                                match: null,
                                after: null
                            },
                            n = t.findIndex((function(t) {
                                return t.id === e.start
                            }));
                        if (-1 === n) return r;
                        var a = t.slice(0, n);
                        a.length > 0 && (r.before = this.buildFrom(a[0].id, a.length));
                        var i = t.slice(n, n + e.length);
                        i.length > 0 && (r.match = this.buildFrom(i[0].id, i.length));
                        var o = t.slice(n + e.length, t.length);
                        return o.length > 0 && (r.after = this.buildFrom(o[0].id, o.length, this.pool)), r
                    }
                },
                De = {
                    json: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            r = {};
                        return e.text && (r.text = this.text()), e.normal && (r.normal = this.text("normal")), e.clean && (r.clean = this.text("clean")), e.reduced && (r.reduced = this.text("reduced")), e.root && (r.root = this.text("root")), e.trim && (r.text && (r.text = r.text.trim()), r.normal && (r.normal = r.normal.trim()), r.reduced && (r.reduced = r.reduced.trim())), e.terms && (!0 === e.terms && (e.terms = {}), r.terms = this.terms().map((function(r) {
                            return r.json(e.terms, t)
                        }))), r
                    }
                },
                Ee = {
                    lookAhead: function(e) {
                        e || (e = ".*");
                        var t = this.pool,
                            r = [],
                            n = this.terms();
                        return function e(n) {
                            var a = t.get(n);
                            a && (r.push(a), a.prev && e(a.next))
                        }(n[n.length - 1].next), 0 === r.length ? [] : this.buildFrom(r[0].id, r.length).match(e)
                    },
                    lookBehind: function(e) {
                        e || (e = ".*");
                        var t = this.pool,
                            r = [];
                        return function e(n) {
                            var a = t.get(n);
                            a && (r.push(a), a.prev && e(a.prev))
                        }(t.get(this.start).prev), 0 === r.length ? [] : this.buildFrom(r[r.length - 1].id, r.length).match(e)
                    }
                },
                Ne = Object.assign({}, ye, ke, Ae, je, De, Ee),
                Fe = function(e, t) {
                    if (0 === t.length) return !0;
                    for (var r = 0; r < t.length; r += 1) {
                        var n = t[r];
                        if (!0 !== n.optional && !0 !== n.negative && !0 === n.start && r > 0) return !0;
                        if (!0 === n.anything && !0 === n.negative) return !0
                    }
                    return !1
                },
                ze = function(e, t, r, n, a, i) {
                    for (var o = t; t < e.length; t += 1) {
                        if (n && e[t].doesMatch(n, a + t, i)) return t;
                        var s = t - o + 1;
                        if (void 0 !== r.max && s === r.max) return t;
                        if (!1 === e[t].doesMatch(r, a + t, i)) return void 0 !== r.min && s < r.min ? null : t
                    }
                    return t
                },
                Oe = function(e, t, r, n, a) {
                    if (!r) return e.length;
                    for (; t < e.length; t += 1)
                        if (!0 === e[t].doesMatch(r, n + t, a)) return t;
                    return null
                },
                _e = function(e, t, r, n, a) {
                    var i = e[t];
                    if (i) return i;
                    var o = r[n].id;
                    return e[t] = {
                        group: String(a),
                        start: o,
                        length: 0
                    }, e[t]
                },
                Te = function(e, t, r, n) {
                    for (var a = {}, i = null, o = 0, s = 0; s < t.length; s += 1) {
                        var u = t[s],
                            l = "string" == typeof u.named || "number" == typeof u.named,
                            c = null;
                        if (l) {
                            var d = t[s - 1];
                            d && d.named === u.named && i ? c = i : i = c = $(u.named)
                        }
                        if (!e[o]) {
                            if (!1 === t.slice(s).some((function(e) {
                                    return !e.optional
                                }))) break;
                            return [!1, null]
                        }
                        if (!0 !== u.anything || !0 !== u.greedy) {
                            if (!0 === u.anything || !0 === u.end && !0 === u.greedy && r + o < n - 1 && !0 === e[o].doesMatch(Object.assign({}, u, {
                                    end: !1
                                }), r + o, n) || !0 === e[o].doesMatch(u, r + o, n)) {
                                var h = o;
                                if (u.optional && t[s + 1] && !0 === e[o].doesMatch(t[s + 1], r + o, n) && (e[o + 1] && !1 !== e[o + 1].doesMatch(t[s + 1], r + o, n) || (s += 1)), o += 1, !0 === u.end && o !== e.length && !0 !== u.greedy) return [!1, null];
                                if (!0 === u.greedy) {
                                    if (null === (o = ze(e, o, Object.assign({}, u, {
                                            start: !1,
                                            end: !1
                                        }), t[s + 1], r, n))) return [!1, null];
                                    if (!0 === u.end && r + o !== n) return [!1, null]
                                }
                                if (l) {
                                    var g = _e(a, c, e, h, u.named);
                                    o > 1 && u.greedy ? g.length += o - h : g.length++
                                }
                            } else if (!0 !== u.optional) {
                                if (!(e[o].isImplicit() && t[s - 1] && e[o + 1] && e[o + 1].doesMatch(u, r + o, n))) return [!1, null];
                                o += 2
                            }
                        } else {
                            var p = Oe(e, o, t[s + 1], u, r);
                            if (void 0 !== u.min && p - o < u.min) return [!1, null];
                            if (void 0 !== u.max && p - o > u.max) {
                                o += u.max;
                                continue
                            }
                            if (null === p) return [!1, null];
                            l && (_e(a, c, e, o, u.named).length = p - o), o = p
                        }
                    }
                    return [e.slice(0, o), a]
                },
                Ie = function(e, t, r) {
                    if (!r || 0 === r.length) return r;
                    if (t.some((function(e) {
                            return e.end
                        }))) {
                        var n = e[e.length - 1];
                        r = r.filter((function(e) {
                            return -1 !== e.match.indexOf(n)
                        }))
                    }
                    return r
                },
                Ve = /\{([0-9]+,?[0-9]*)\}/,
                He = /&&/,
                Se = new RegExp(/^<(\S+)>/),
                Me = function(e) {
                    return e[e.length - 1]
                },
                Le = function(e) {
                    return e[0]
                },
                qe = function(e) {
                    return e.substr(1)
                },
                We = function(e) {
                    return e.substr(0, e.length - 1)
                },
                Je = function(e) {
                    return e = qe(e), e = We(e)
                },
                Re = function e(t) {
                    for (var r, n = {}, a = 0; a < 2; a += 1) {
                        if ("$" === Me(t) && (n.end = !0, t = We(t)), "^" === Le(t) && (n.start = !0, t = qe(t)), ("[" === Le(t) || "]" === Me(t)) && (n.named = !0, "[" === Le(t) ? n.groupType = "]" === Me(t) ? "single" : "start" : n.groupType = "end", t = (t = t.replace(/^\[/, "")).replace(/\]$/, ""), "<" === Le(t))) {
                            var i = Se.exec(t);
                            i.length >= 2 && (n.named = i[1], t = t.replace(i[0], ""))
                        }
                        if ("+" === Me(t) && (n.greedy = !0, t = We(t)), "*" !== t && "*" === Me(t) && "\\*" !== t && (n.greedy = !0, t = We(t)), "?" === Me(t) && (n.optional = !0, t = We(t)), "!" === Le(t) && (n.negative = !0, t = qe(t)), "(" === Le(t) && ")" === Me(t)) {
                            He.test(t) ? (n.choices = t.split(He), n.operator = "and") : (n.choices = t.split("|"), n.operator = "or"), n.choices[0] = qe(n.choices[0]);
                            var o = n.choices.length - 1;
                            n.choices[o] = We(n.choices[o]), n.choices = n.choices.map((function(e) {
                                return e.trim()
                            })), n.choices = n.choices.filter((function(e) {
                                return e
                            })), n.choices = n.choices.map(e), t = ""
                        }
                        if ("/" === Le(t) && "/" === Me(t)) return t = Je(t), n.regex = new RegExp(t), n;
                        if ("~" === Le(t) && "~" === Me(t)) return t = Je(t), n.soft = !0, n.word = t, n
                    }
                    return !0 === Ve.test(t) && (t = t.replace(Ve, (function(e, t) {
                        var r = t.split(/,/g);
                        return 1 === r.length ? (n.min = Number(r[0]), n.max = Number(r[0])) : (n.min = Number(r[0]), n.max = Number(r[1] || 999)), n.greedy = !0, ""
                    }))), "#" === Le(t) ? (n.tag = qe(t), n.tag = (r = n.tag).charAt(0).toUpperCase() + r.substr(1), n) : "@" === Le(t) ? (n.method = qe(t), n) : "." === t ? (n.anything = !0, n) : "*" === t ? (n.anything = !0, n.greedy = !0, n.optional = !0, n) : (t && (t = (t = t.replace("\\*", "*")).replace("\\.", "."), n.word = t.toLowerCase()), n)
                },
                Ke = function(e) {
                    return e.filter((function(e) {
                        return e.groupType
                    })).length > 0 && (e = function(e) {
                        for (var t, r, n = !1, a = -1, i = 0; i < e.length; i++) {
                            var o = e[i];
                            "single" !== o.groupType || !0 !== o.named ? ("start" === o.groupType && (n = !0, t = "string" == typeof(r = o.named) || "number" == typeof r ? o.named : a += 1), n && (o.named = t), "end" === o.groupType && (n = !1)) : (a += 1, o.named = a)
                        }
                        return e
                    }(e)), e = function(e) {
                        return e.map((function(e) {
                            if (void 0 !== e.choices && !0 === e.choices.every((function(e) {
                                    return !0 !== e.optional && !0 !== e.negative && void 0 !== e.word
                                }))) {
                                var t = {};
                                e.choices.forEach((function(e) {
                                    return t[e.word] = !0
                                })), e.oneOf = t, delete e.choices
                            }
                            return e
                        }))
                    }(e)
                },
                Ue = function(e) {
                    if (null == e || "" === e) return [];
                    if ("object" === h(e)) {
                        if (function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }(e)) {
                            if (0 === e.length || !e[0]) return [];
                            if ("object" === h(e[0])) return e;
                            if ("string" == typeof e[0]) return function(e) {
                                return [{
                                    choices: e.map((function(e) {
                                        return {
                                            word: e
                                        }
                                    }))
                                }]
                            }(e)
                        }
                        return e && "Doc" === e.isA ? function(e) {
                            if (!e || !e.list || !e.list[0]) return [];
                            var t = [];
                            return e.list.forEach((function(e) {
                                e.terms().forEach((function(e) {
                                    t.push({
                                        id: e.id
                                    })
                                }))
                            })), [{
                                choices: t,
                                greedy: !0
                            }]
                        }(e) : []
                    }
                    "number" == typeof e && (e = String(e));
                    var t = function(e) {
                        var t = e.split(/([\^\[\!]*(?:<\S+>)?\(.*?\)[?+*]*\]?\$?)/);
                        return t = t.map((function(e) {
                            return e.trim()
                        }))
                    }(e);
                    return t = (t = function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            if (/^[[^_/]?\(/.test(e[0])) t.push(e);
                            else {
                                var r = e.split(" ");
                                r = r.filter((function(e) {
                                    return e
                                })), t = t.concat(r)
                            }
                        })), t
                    }(t)).map(Re), t = Ke(t)
                },
                Qe = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ("string" == typeof t && (t = Ue(t)), !0 === Fe(e, t)) return [];
                    var n = t.filter((function(e) {
                            return !0 !== e.optional
                        })).length,
                        a = e.terms(),
                        i = [];
                    if (!0 === t[0].start) {
                        var o = Te(a, t, 0, a.length),
                            s = k(o, 2),
                            u = s[0],
                            l = s[1];
                        return !1 !== u && u.length > 0 && (u = u.filter((function(e) {
                            return e
                        })), i.push({
                            match: u,
                            groups: l
                        })), Ie(a, t, i)
                    }
                    for (var c = 0; c < a.length && !(c + n > a.length); c += 1) {
                        var d = Te(a.slice(c), t, c, a.length),
                            h = k(d, 2),
                            g = h[0],
                            p = h[1];
                        if (!1 !== g && g.length > 0 && (c += g.length - 1, g = g.filter((function(e) {
                                return e
                            })), i.push({
                                match: g,
                                groups: p
                            }), !0 === r)) return Ie(a, t, i)
                    }
                    return Ie(a, t, i)
                },
                Ze = function(e, t) {
                    var r = {};
                    Qe(e, t).forEach((function(e) {
                        e.match.forEach((function(e) {
                            r[e.id] = !0
                        }))
                    }));
                    var n = e.terms(),
                        a = [],
                        i = [];
                    return n.forEach((function(e) {
                        !0 !== r[e.id] ? i.push(e) : i.length > 0 && (a.push(i), i = [])
                    })), i.length > 0 && a.push(i), a
                },
                Xe = {
                    match: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = Qe(this, e, r);
                        return n = n.map((function(e) {
                            var r = e.match,
                                n = e.groups,
                                a = t.buildFrom(r[0].id, r.length, n);
                            return a.cache.terms = r, a
                        }))
                    },
                    has: function(e) {
                        return Qe(this, e, !0).length > 0
                    },
                    not: function(e) {
                        var t = this,
                            r = Ze(this, e);
                        return r = r.map((function(e) {
                            return t.buildFrom(e[0].id, e.length)
                        }))
                    },
                    canBe: function(e, t) {
                        for (var r = this, n = [], a = this.terms(), i = !1, o = 0; o < a.length; o += 1) {
                            var s = a[o].canBe(e, t);
                            !0 === s && (!0 === i ? n[n.length - 1].push(a[o]) : n.push([a[o]]), i = s)
                        }
                        return n = n.filter((function(e) {
                            return e.length > 0
                        })).map((function(e) {
                            return r.buildFrom(e[0].id, e.length)
                        }))
                    }
                },
                Ye = function e(t, r, n) {
                    g(this, e), this.start = t, this.length = r, this.isA = "Phrase", Object.defineProperty(this, "pool", {
                        enumerable: !1,
                        writable: !0,
                        value: n
                    }), Object.defineProperty(this, "cache", {
                        enumerable: !1,
                        writable: !0,
                        value: {}
                    }), Object.defineProperty(this, "groups", {
                        enumerable: !1,
                        writable: !0,
                        value: {}
                    })
                };
            Ye.prototype.buildFrom = function(e, t, r) {
                var n = new Ye(e, t, this.pool);
                return r && Object.keys(r).length > 0 ? n.groups = r : n.groups = this.groups, n
            }, Object.assign(Ye.prototype, Xe), Object.assign(Ye.prototype, Ne);
            var et = {
                term: "terms"
            };
            Object.keys(et).forEach((function(e) {
                return Ye.prototype[e] = Ye.prototype[et[e]]
            }));
            var tt = Ye,
                rt = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        g(this, e), Object.defineProperty(this, "words", {
                            enumerable: !1,
                            value: t
                        })
                    }
                    return m(e, [{
                        key: "add",
                        value: function(e) {
                            return this.words[e.id] = e, this
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return this.words[e]
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            delete this.words[e]
                        }
                    }, {
                        key: "merge",
                        value: function(e) {
                            return Object.assign(this.words, e.words), this
                        }
                    }, {
                        key: "stats",
                        value: function() {
                            return {
                                words: Object.keys(this.words).length
                            }
                        }
                    }]), e
                }();
            rt.prototype.clone = function() {
                var e = this,
                    t = Object.keys(this.words).reduce((function(t, r) {
                        var n = e.words[r].clone();
                        return t[n.id] = n, t
                    }), {});
                return new rt(t)
            };
            for (var nt = rt, at = function(e) {
                    e.forEach((function(t, r) {
                        r > 0 && (t.prev = e[r - 1].id), e[r + 1] && (t.next = e[r + 1].id)
                    }))
                }, it = /(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g, ot = /\S/, st = /[ .][A-Z]\.? *$/i, ut = /(?:\u2026|\.{2,}) *$/, lt = /((?:\r?\n|\r)+)/, ct = /[a-z0-9\u00C0-\u00FF\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/i, dt = /^\s+/, ht = function(e, t) {
                    if (!0 === st.test(e)) return !1;
                    if (!0 === ut.test(e)) return !1;
                    if (!1 === ct.test(e)) return !1;
                    var r = e.replace(/[.!?\u203D\u2E18\u203C\u2047-\u2049] *$/, "").split(" "),
                        n = r[r.length - 1].toLowerCase();
                    return !t.hasOwnProperty(n)
                }, gt = function(e, t) {
                    var r = t.cache.abbreviations;
                    e = e || "";
                    var n = [],
                        a = [];
                    if (!(e = String(e)) || "string" != typeof e || !1 === ot.test(e)) return n;
                    for (var i = function(e) {
                            for (var t = [], r = e.split(lt), n = 0; n < r.length; n++)
                                for (var a = r[n].split(it), i = 0; i < a.length; i++) t.push(a[i]);
                            return t
                        }(e = e.replace(" ", " ")), o = 0; o < i.length; o++) {
                        var s = i[o];
                        if (void 0 !== s && "" !== s) {
                            if (!1 === ot.test(s)) {
                                if (a[a.length - 1]) {
                                    a[a.length - 1] += s;
                                    continue
                                }
                                if (i[o + 1]) {
                                    i[o + 1] = s + i[o + 1];
                                    continue
                                }
                            }
                            a.push(s)
                        }
                    }
                    for (var u = 0; u < a.length; u++) {
                        var l = a[u];
                        a[u + 1] && !1 === ht(l, r) ? a[u + 1] = l + (a[u + 1] || "") : l && l.length > 0 && (n.push(l), a[u] = "")
                    }
                    if (0 === n.length) return [e];
                    for (var c = 1; c < n.length; c += 1) {
                        var d = n[c].match(dt);
                        null !== d && (n[c - 1] += d[0], n[c] = n[c].replace(dt, ""))
                    }
                    return n
                }, pt = /\S/, mt = /^[!?.]+$/, ft = /(\S+)/, vt = /[a-z] ?\/ ?[a-z]*$/, bt = {
                    ".": !0,
                    "-": !0,
                    "–": !0,
                    "—": !0,
                    "--": !0,
                    "...": !0
                }, yt = function(e) {
                    if (!0 === /^(re|un)-?[^aeiou]./.test(e)) return !1;
                    return !0 === /^([a-z\u00C0-\u00FF`"'/]+)(-|–|—)([a-z0-9\u00C0-\u00FF].*)/i.test(e)
                }, wt = function(e) {
                    var t = [],
                        r = e.split(/[-–—]/),
                        n = "-",
                        a = e.match(/[-–—]/);
                    a && a[0] && (n = a);
                    for (var i = 0; i < r.length; i++) i === r.length - 1 ? t.push(r[i]) : t.push(r[i] + n);
                    return t
                }, kt = function(e) {
                    var t = [],
                        r = [];
                    if ("number" == typeof(e = e || "") && (e = String(e)), function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }(e)) return e;
                    for (var n = e.split(ft), a = 0; a < n.length; a++) !0 !== yt(n[a]) ? r.push(n[a]) : r = r.concat(wt(n[a]));
                    for (var i = "", o = 0; o < r.length; o++) {
                        var s = r[o];
                        !0 === pt.test(s) && !1 === bt.hasOwnProperty(s) && !1 === mt.test(s) ? (t.length > 0 ? (t[t.length - 1] += i, t.push(s)) : t.push(i + s), i = "") : i += s
                    }
                    return i && (0 === t.length && (t[0] = ""), t[t.length - 1] += i), t = (t = function(e) {
                        for (var t = 1; t < e.length - 1; t++) vt.test(e[t]) && (e[t - 1] += e[t] + e[t + 1], e[t] = null, e[t + 1] = null);
                        return e
                    }(t)).filter((function(e) {
                        return e
                    }))
                }, At = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, xt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = null;
                    "string" != typeof e && ("number" == typeof e ? e = String(e) : At(e) && (n = e)), n = (n = n || gt(e, t)).map((function(e) {
                        return kt(e)
                    })), r = r || new nt;
                    var a = n.map((function(e) {
                        e = e.map((function(e) {
                            var t = new be(e);
                            return r.add(t), t
                        })), at(e);
                        var t = new tt(e[0].id, e.length, r);
                        return t.cache.terms = e, t
                    }));
                    return a
                }, $t = function(e, t) {
                    var r = new nt;
                    return e.map((function(e, n) {
                        var a = e.terms.map((function(a, i) {
                            var o = new be(a.text);
                            return o.pre = void 0 !== a.pre ? a.pre : "", void 0 === a.post && (a.post = " ", i >= e.terms.length - 1 && (a.post = ". ", n >= e.terms.length - 1 && (a.post = "."))), o.post = void 0 !== a.post ? a.post : " ", a.tags && a.tags.forEach((function(e) {
                                return o.tag(e, "", t)
                            })), r.add(o), o
                        }));
                        return at(a), new tt(a[0].id, a.length, r)
                    }))
                }, Pt = {
                    Comparative: "true¦better",
                    Superlative: "true¦earlier",
                    PresentTense: "true¦is,sounds",
                    Value: "true¦a few",
                    Noun: "true¦a5b4c2f1here,ie,lit,m0no doubt,pd,tce;a,d;t,y;a,ca,o0;l,rp;a,l;d,l,rc",
                    Copula: "true¦a1is,w0;as,ere;m,re",
                    PastTense: "true¦be3came,d2had,lied,meant,sa2taken,w0;as,e0;nt,re;id;en,gan",
                    Condition: "true¦if,unless",
                    Gerund: "true¦accord0be0develop0go0result0stain0;ing",
                    Negative: "true¦n0;ever,o0;!n,t",
                    QuestionWord: "true¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s",
                    Plural: "true¦records",
                    Conjunction: "true¦&,aEbAcuz,how8in caDno7o6p4supposing,t1vers5wh0yet;eth8ile;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh",
                    Pronoun: "true¦'em,elle,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s",
                    Singular: "true¦0:0X;1:10;a0Wb0Kc0Bd04e02fXgShOici1jel0kitty,lNmJnIoHpDquestion mark,rBs7t4u2womW;nc0Rs 2;doll0Dst0F; rex,a3h2ic,ragedy,v show;ere,i1;l0x return;ist0Pky,omeone,t2uper bowl,yst0W;ep3ri1u2;de0Pff;faMmoM;al0i1o2;om,se;a4i0Jl05r3u2;dLrpoD;erogaVobl0O;rt,te0I;bjSceGthers;othi1umb0E;a4ee04o2;del,m2nopo0th0C;!my;n,yf0;i0unch;ead start,o2;l0me3u2;se;! run;adf0entlem5irlZlaci04od,rand3u2;l0y; slam,fa2mo2;th01;an;a5ella,ly,ol0r3un2;di1;iTo2;ntiWsN;mi0thV;conomy,gg,ner5veWx2;ampQecu7;ad7e4innSo2ragonf0ude;cumentFg2i0l0or;gy;ath,t2;ec2;tive;!dy;a8eili1h6i4o2redit card;ttage,u2;riJsin;ty,vil w2;ar;andeliGocol2;ate;n2rD;ary;aAel0lesHo6r4u2;n2tterf0;ti1;eakfast,o2;!th8;dy,tt4y2;!fri2;end;le;nki1r2;ri2;er;d4l0noma0u2;nt;ly; homin4verti2;si1;ng;em",
                    Actor: "true¦aJbGcFdCengineIfAgardenIh9instructPjournalLlawyIm8nurse,opeOp5r3s1t0;echnCherapK;ailNcientJoldiGu0;pervKrgeon;e0oofE;ceptionGsearC;hotographClumbColi1r0sychologF;actitionBogrammB;cem6t5;echanic,inist9us4;airdress8ousekeep8;arm7ire0;fight6m2;eputy,iet0;ici0;an;arpent2lerk;ricklay1ut0;ch0;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt",
                    Honorific: "true¦a03b00cSdReQfiLgKhon,jr,king,lJmEoDp8queen,r4s0taoiseach,vice7;e1fc,gt,ir,r,u0;ltTpt,rg;c0nDrgeaL;ond liJretary;abbi,e0;ar1pAs,v0;!erend; admirY;astPhd,r0vt;esideEi1of0;!essN;me mini5nce0;!ss;fficOp,rd;a3essrs,i2lle,me,r1s0;!tr;!s;stK;gistrate,j,r6yF;i3lb,t;en,ov;eld mar3rst l0;ady,i0;eutena0;nt;shG;sq,xcellency;et,oct6r,utchess;apt6hance4mdr,o0pl;lonel,m2ngress0unci3;m0wom0;an;dr,mand5;ll0;or;!ain;ldg,rig0;!adi0;er;d0sst,tty,yatullah;j,m0v;!ir0;al",
                    SportsTeam: "true¦0:1A;1:1H;2:1G;a1Eb16c0Td0Kfc dallas,g0Ihouston 0Hindiana0Gjacksonville jagua0k0El0Bm01newToQpJqueens parkIreal salt lake,sAt5utah jazz,vancouver whitecaps,w3yW;ashington 3est ham0Rh10;natio1Oredski2wizar0W;ampa bay 6e5o3;ronto 3ttenham hotspur;blue ja0Mrapto0;nnessee tita2xasC;buccanee0ra0K;a7eattle 5heffield0Kporting kansas0Wt3;. louis 3oke0V;c1Frams;marine0s3;eah15ounG;cramento Rn 3;antonio spu0diego 3francisco gJjose earthquak1;char08paA; ran07;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat1steele0;il3oenix su2;adelphia 3li1;eagl1philNunE;dr1;akland 3klahoma city thunder,rlando magic;athle0Mrai3;de0; 3castle01;england 7orleans 6york 3;city fc,g4je0FknXme0Fred bul0Yy3;anke1;ian0D;pelica2sain0C;patrio0Brevolut3;ion;anchester Be9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Fvi3;kings;imberwolv1wi2;rewe0uc0K;dolphi2heat,marli2;mphis grizz3ts;li1;cXu08;a4eicesterVos angeles 3;clippe0dodDla9; galaxy,ke0;ansas city 3nE;chiefs,roya0E; pace0polis colU;astr06dynamo,rockeTtexa2;olden state warrio0reen bay pac3;ke0;.c.Aallas 7e3i05od5;nver 5troit 3;lio2pisto2ti3;ge0;broncZnuggeM;cowbo4maver3;ic00;ys; uQ;arCelKh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki1;brow2cavalie0india2;bengaWre3;ds;arlotte horAicago 3;b4cubs,fire,wh3;iteB;ea0ulR;diff3olina panthe0; c3;ity;altimore 9lackburn rove0oston 5rooklyn 3uffalo bilN;ne3;ts;cel4red3; sox;tics;rs;oriol1rave2;rizona Ast8tlanta 3;brav1falco2h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls",
                    Uncountable: "true¦a1Ib1Ac11d0Ye0Rf0Lg0Hh0Ci08j07knowled1Hl02mUnews,oTpQrLsAt5vi4w0;a2ea05i1oo0;d,l;ldlife,ne;rmth,t17;neg0Yol06tae;e3h2oothpaste,r0una;affPou0;ble,sers,t;ermod1Eund12;a,nnis;a8cene04eri0Oh7il6kittl0Onow,o5p3t1u0;g0Rnshi0H;ati1De0;am,el;ace16e0;ci0Jed;ap,cc0U;k,v0T;eep,ingl0G;d04fe10l0nd;m0St;a3e1ic0;e,ke0D;c0laxa09search;ogni08rea08;bi09in;aJe1hys10last5o0ressV;lit0Zrk,w0J;a0Vtrol;bstetr0Xil,xygen;a5e3ilk,o2u0;mps,s0;ic;nGo0A;a0chan0S;slZt;chine0il,themat0Q; learn05ry;aught08e2i1ogi0Nu0;ck,g0C;ce,ghtn02ngui0LteratH;a0isG;th04;ewel7usti0G;ce,mp0nformaOtself;a0ortan0E;ti0;en0C;a3isto2o0;ck0mework,n0spitali06;ey;ry;ir,libut,ppi7;en01o1r0um,ymna08;a6ound;l0ssip;d,f;i4lour,o1urnit0;ure;od,rgive0uriNwl;ne0;ss;c6sh;conomZduca5lectr4n2quip3thZvery0;body,o0thE;ne;joy0tertain0;ment;iciNonU;tiF;ar1iabet0raugh1;es;ts;a7elcius,h3ivPl2o0urrency;al,ld w0nfusiAttA;ar;assMoth2;aos,e0;e1w0;ing;se;r4sh;a4eef,i1lood,owls,read,utt0;er;lliar1s0;on;ds;g0ss;ga0;ge;c6dvi5ero3ir2mnes1rt,thl0;et7;ty;craft;b4d0naut4;ynam3;ce;id,ou0;st0;ics",
                    Infinitive: "true¦0:6K;1:6Y;2:57;3:6V;4:6W;5:5Z;6:67;7:6Q;8:6I;9:6U;A:6P;B:6S;C:6D;D:6Z;E:56;F:5P;a6Cb61c52d4Ae3Uf3Hg3Bh34i2Rj2Pk2Nl2Fm25n22o1Xp1Iques3Ir0Qs05tXuSvOwHyG;awn,ield;aJe1Yhist6iIoGre65;nd0rG;k,ry;pe,sh,th0;lk,nHrGsh,tCve;n,raD;d0t;aIiGo9;eGsA;!w;l6Cry;nHpGr3se;gra4Mli3Z;dGi9lo5Spub3O;erGo;mi58w1I;aMeLhKoJrHuGwi7;ne,rn;aGe0Mi5Nu7y;de,in,nsf0p,v5F;r2XuC;ank,reat2N;nd,st;lk,rg1Ps9;aZcWeVhTi4Akip,lSmRnee3Jo4YpQtJuGwitC;bmAck,ff0gge7ppHrGspe5;ge,pri1rou4Vvi4;ly,o34;aLeKoJrHuG;dy,mb6;aEeGi4;ngth2Dss,tC;p,re;m,p;in,ke,r0Qy;laFoil,rink6;e1Xi6o3H;am,ip;a2iv0oG;ck,ut;arCem,le5n1r4tt6;aHo2rG;atCew;le,re;il,ve;a05eIisk,oHuG;in,le,sh;am,ll;a01cZdu8fYgXje5lUmTnt,pQquPsKtJvGwa5O;eGiew,o34;al,l,rG;se,t;aEi2u40;eJi7oItG;!o2rG;i5uc1Y;l4rt;mb6nt,r4;e7i2;air,eHlGo3ZreseD;a8y;at;aEemb0i3Vo4;aHeGi4y;a1nt;te,x;a56r0I;act1Wer,le5u1;a11ei4k5IoGyc6;gni2Anci6rd;ch,li29s5G;i1nG;ge,k;aTerSiRlOoMrIuG;b1Zll,mp,rGsh;cha1s4J;ai1eIiDoG;cGdu8greBhibAmi1te7vi2T;eBlaim;di5pa2ss,veD;iDp,rtr3ZsGur;e,t;aHuG;g,n3;n,y;ck,le;fo30mAsi7;ck,iDrt4Fss,u1;bJccur,ff0pera9utweIverGwe;co40lap,ta20u1wG;helm;igh;ser4taE;eHotG;e,i8;ed,gle5;aLeKiIoHuG;ltip3Crd0;nit11ve;nGrr10;d,g6us;asu2lt,n0Nr3;intaEna3rHtG;ch,t0;ch,kGry;et;aLeKiIoGu1B;aGck,ok,ve;d,n;ft,ke,mAnGst2Wve;e,k;a2Dc0Et;b0Nck,uG;gh,nC;iGno2Z;ck,ll,ss;am,oEuG;d3mp;gno2mQnGss3C;cOdica9flu0MhNsKtIvG;eGol4;nt,st;erGrodu8;a5fe2;i7tG;aGru5;ll;abAibA;lu1Er1C;agi22pG;lemeDo20ro4;aKeIi2oHuG;nt,rry;n02pe,st;aGlp;d,t;nd6ppGrm,te;en;aKloBove1MrIuG;arGeBi13;ant33d;aGip,umb6;b,sp;in,th0ze;aQeaPiNlLoIracHuncG;ti3D;tu2;cus,lHrG;ce,eca7m,s2V;d,l1Z;aFoG;at,od,w;gu2lGniFx;e,l;r,tu2;il,vG;or;a13cho,le5mSnPstNvalua9xG;a0AcLerKi7pGte17;a16eHi2laEoGreB;rt,se;ct,riG;en8;ci1t;el,han3;abGima9;liF;ab6couXdHfor8ga3han8j03riCsu2t0vG;isi2Qy;!u2;body,er3pG;hasiGow0;ze;a06eUiLoKrHuG;mp;aHeBiG;ft;g,in;d3ubt;ff0p,re5sHvG;iYor8;aKcHliGmiBpl16tinguiF;ke;oGuB;uGv0;ra3;gr1TppG;ear,ro4;cNem,fLliv0ma0Dny,pKsHterG;mi0E;cribe,er4iHtrG;oy;gn,re;a09e08i5osA;eGi09y;at,ct;iIlHrG;ea1;a2i05;de;ma3n8re,te;a0Ae09h06i9l04oJrG;aHeGoBuFy;a9dA;ck,ve;llZmSnHok,py,uGv0;gh,nt;cePdu5fMsKtIvG;eGin8;rt,y;aEin0SrG;a7ibu9ol;iGtitu9;d0st;iHoGroD;rm;gu2rm;rn;biLfoKmaJpG;a2laE;in;re;nd;rt;ne;ap1e5;aGip,o1;im,w;aHeG;at,ck,w;llen3n3r3se;a1nt0;ll,ncIrGt0u1;eGry;!en;el;aPeMloLoJruFuG;lGry;ly;sh;a7mb,o7rrGth0un8;ow;ck;ar,lHnefAtrG;ay;ie4ong;ng,se;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waA;acIeHra5;ct;m0Fnd;h,k;k,sG;eIiHocia9uG;me;gn,st;mb6rt;le;chHgGri4;ue;!i4;eaJlIroG;aCve;ch;aud,y;l,r;noun8sw0tG;icipa9;ce;lHt0;er;e3ow;ee;rd;aRdIju7mAoR;it;st;!reB;ss;cJhie4knowled3tiva9;te;ge;ve;eIouDu1;se;nt;pt;on",
                    Unit: "true¦0:19;a14b12c0Od0Ne0Lf0Gg0Ch09in0Hjoule0k02l00mNnMoLpIqHsqCt7volts,w6y4z3°2µ1;g,s;c,f,n;b,e2;a0Nb,d0Dears old,o1;tt0H;att0b;able4b3d,e2on1sp;!ne0;a2r0D;!l,sp;spo04; ft,uare 1;c0Id0Hf3i0Fkilo0Jm1ya0E;e0Mil1;e0li0H;eet0o0D;t,uart0;ascals,e2i1ou0Pt;c0Mnt0;rcent,t02;hms,uYz;an0JewtT;/s,b,e9g,i3l,m2p1²,³;h,s;!²;!/h,cro5l1;e1li08;! pFs1²;! 1;anEpD;g06s0B;gQter1;! 2s1;! 1;per second;b,i00m,u1x;men0x0;b,elvin0g,ilo2m1nR;!/h,ph,²;byZgXmeter1;! p2s1;! p1;er1; hour;e1g,r0z;ct1rtz0;aXogQ;al2b,igAra1;in0m0;!l1;on0;a4emtPl2t1;²,³; oz,uid ou1;nce0;hrenheit0rad0;b,x1;abyH;eciCg,l,mA;arat0eAg,m9oulomb0u1;bic 1p0;c5d4fo3i2meAya1;rd0;nch0;ot0;eci2;enti1;me4;!²,³;lsius0nti1;g2li1me1;ter0;ram0;bl,y1;te0;c4tt1;os1;eco1;nd0;re0;!s",
                    Organization: "true¦0:46;a3Ab2Qc2Ad21e1Xf1Tg1Lh1Gi1Dj19k17l13m0Sn0Go0Dp07qu06rZsStFuBv8w3y1;amaha,m0Xou1w0X;gov,tu2S;a3e1orld trade organizati41;lls fargo,st1;fie22inghou16;l1rner br3D;-m11gree31l street journ25m11;an halNeriz3Wisa,o1;dafo2Gl1;kswagLvo;bs,kip,n2ps,s1;a tod2Rps;es35i1;lev2Xted natio2Uv; mobi2Kaco bePd bMeAgi frida9h3im horto2Tmz,o1witt2W;shiba,y1;ota,s r Y;e 1in lizzy;b3carpen33daily ma2Xguess w2holli0rolling st1Ms1w2;mashing pumpki2Ouprem0;ho;ea1lack eyed pe3Fyrds;ch bo1tl0;ys;l2s1;co,la m12;efoni07us;a6e4ieme2Gnp,o2pice gir5ta1ubaru;rbucks,to2N;ny,undgard1;en;a2Rx pisto1;ls;few25insbu26msu1X;.e.m.,adiohead,b6e3oyal 1yan2X;b1dutch she4;ank;/max,aders dige1Ed 1vl32;bu1c1Uhot chili peppe2Klobst28;ll;c,s;ant2Vizno2F;an5bs,e3fiz24hilip morrBi2r1;emier27octer & gamb1Rudenti14;nk floyd,zza hut;psi28tro1uge08;br2Qchina,n2Q; 2ason1Xda2G;ld navy,pec,range juli2xf1;am;us;a9b8e5fl,h4i3o1sa,wa;kia,tre dame,vart1;is;ke,ntendo,ss0K;l,s;c,st1Etflix,w1; 1sweek;kids on the block,york08;a,c;nd1Us2t1;ional aca2Fo,we0Q;a,cYd0O;aAcdonald9e5i3lb,o1tv,yspace;b1Nnsanto,ody blu0t1;ley crue,or0O;crosoft,t1;as,subisO;dica3rcedes2talli1;ca;!-benz;id,re;'s,s;c's milk,tt13z1Y;'ore09a3e1g,ittle caesa1Ktd;novo,x1;is,mark; pres5-z-boy,bour party;atv,fc,kk,m1od1K;art;iffy lu0Lo3pmorgan1sa;! cha1;se;hnson & johns1Sy d1R;bm,hop,n1tv;c,g,te1;l,rpol; & m,asbro,ewlett-packaTi3o1sbc,yundai;me dep1n1J;ot;tac1zbollah;hi;eneral 6hq,l5mb,o2reen d0Iu1;cci,ns n ros0;ldman sachs,o1;dye1g0B;ar;axo smith kliZencore;electr0Im1;oto0V;a3bi,da,edex,i1leetwood mac,oGrito-l0A;at,nancial1restoV; tim0;cebook,nnie mae;b06sa,u3xxon1; m1m1;ob0H;!rosceptics;aiml0Ae5isney,o3u1;nkin donuts,po0Wran dur1;an;j,w j1;on0;a,f leppa3ll,p2r spiegZstiny's chi1;ld;eche mode,t;rd;aEbc,hBi9nn,o3r1;aigsli5eedence clearwater reviv1ossra05;al;!ca c5l4m1o0Ast05;ca2p1;aq;st;dplMgate;ola;a,sco1tigroup;! systems;ev2i1;ck fil-a,na daily;r0Hy;dbury,pital o1rl's jr;ne;aGbc,eCfAl6mw,ni,o2p,r1;exiteeWos;ei3mbardiJston 1;glo1pizza;be;ng;ack & deckFo2ue c1;roX;ckbuster video,omingda1;le; g1g1;oodriN;cht3e ge0n & jer2rkshire hathaw1;ay;ryH;el;nana republ3s1xt5y5;f,kin robbi1;ns;ic;bXcSdidRerosmith,ig,lLmFnheuser-busEol,ppleAr7s3t&t,v2y1;er;is,on;hland2s1;n,ociated F; o1;il;by4g2m1;co;os; compu2bee1;'s;te1;rs;ch;c,d,erican3t1;!r1;ak; ex1;pre1;ss; 4catel2t1;air;!-luce1;nt;jazeera,qae1;da;as;/dc,a3er,t1;ivisi1;on;demy of scienc0;es;ba,c",
                    Demonym: "true¦0:16;1:13;a0Wb0Nc0Cd0Ae09f07g04h02iYjVkTlPmLnIomHpDqatari,rBs7t5u4v3wel0Rz2;am0Fimbabwe0;enezuel0ietnam0H;g9krai1;aiwThai,rinida0Iu2;ni0Qrkmen;a4cot0Ke3ingapoOlovak,oma0Tpa05udRw2y0X;edi0Kiss;negal0Br08;mo0uU;o6us0Lw2;and0;a3eru0Hhilipp0Po2;li0Ertugu06;kist3lesti1na2raguay0;ma1;ani;amiZi2orweP;caragu0geri2;an,en;a3ex0Mo2;ngo0Erocc0;cedo1la2;gasy,y08;a4eb9i2;b2thua1;e0Dy0;o,t02;azakh,eny0o2uwaiti;re0;a2orda1;ma0Bp2;anN;celandic,nd4r2sraeli,ta02vo06;a2iT;ni0qi;i0oneV;aiDin2ondur0unN;di;amDe2hanai0reek,uatemal0;or2rm0;gi0;i2ren7;lipino,n4;cuadoVgyp6ngliJsto1thiopi0urope0;a2ominXut4;niH;a9h6o4roa3ub0ze2;ch;ti0;lom2ngol5;bi0;a6i2;le0n2;ese;lifor1m2na3;bo2eroo1;di0;angladeshi,el8o6r3ul2;gaG;aziBi2;ti2;sh;li2s1;vi0;aru2gi0;si0;fAl7merBngol0r5si0us2;sie,tr2;a2i0;li0;gent2me1;ine;ba1ge2;ri0;ni0;gh0r2;ic0;an",
                    Possessive: "true¦anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne",
                    Currency: "true¦$,aud,bScQdLeurKfJgbp,hkd,iIjpy,kGlEp8r7s3usd,x2y1z0¢,£,¥,ден,лв,руб,฿,₡,₨,€,₭,﷼;lotySł;en,uanR;af,of;h0t5;e0il5;k0q0;elM;iel,oubleLp,upeeL;e2ound st0;er0;lingI;n0soH;ceGn0;ies,y;e0i8;i,mpi7;n,r0wanzaCyatC;!onaBw;ls,nr;ori7ranc9;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s",
                    City: "true¦a2Wb26c1Wd1Re1Qf1Og1Ih1Ai18jakar2Hk0Zl0Tm0Gn0Co0ApZquiYrVsLtCuBv8w3y1z0;agreb,uri1Z;ang1Te0okohama;katerin1Hrev34;ars3e2i0rocl3;ckl0Vn0;nipeg,terth0W;llingt1Oxford;aw;a1i0;en2Hlni2Z;lenc2Uncouv0Gr2G;lan bat0Dtrecht;a6bilisi,e5he4i3o2rondheim,u0;nVr0;in,ku;kyo,ronIulouC;anj23l13miso2Jra2A; haJssaloni0X;gucigalpa,hr2Ol av0L;i0llinn,mpe2Bngi07rtu;chu22n2MpT;a3e2h1kopje,t0ydney;ockholm,uttga12;angh1Fenzh1X;o0KvZ;int peters0Ul3n0ppo1F; 0ti1B;jo0salv2;se;v0z0Q;adU;eykjavik,i1o0;me,sario,t25;ga,o de janei17;to;a8e6h5i4o2r0ueb1Qyongya1N;a0etor24;gue;rt0zn24; elizabe3o;ls1Grae24;iladelph1Znom pe07oenix;r0tah tik19;th;lerJr0tr10;is;dessa,s0ttawa;a1Hlo;a2ew 0is;delTtaip0york;ei;goya,nt0Upl0Uv1R;a5e4i3o1u0;mb0Lni0I;nt0scH;evideo,real;l1Mn01skolc;dellín,lbour0S;drid,l5n3r0;ib1se0;ille;or;chest0dalWi0Z;er;mo;a4i1o0vAy01;nd00s angel0F;ege,ma0nz,sbZverpo1;!ss0;ol; pla0Iusan0F;a5hark4i3laipeda,o1rak0uala lump2;ow;be,pavog0sice;ur;ev,ng8;iv;b3mpa0Kndy,ohsiu0Hra0un03;c0j;hi;ncheMstanb0̇zmir;ul;a5e3o0; chi mi1ms,u0;stI;nh;lsin0rakliG;ki;ifa,m0noi,va0A;bu0SiltD;alw4dan3en2hent,iza,othen1raz,ua0;dalaj0Gngzhou;bu0P;eUoa;sk;ay;es,rankfu0;rt;dmont4indhovU;a1ha01oha,u0;blRrb0Eshanbe;e0kar,masc0FugavpiJ;gu,je0;on;a7ebu,h2o0raioJuriti01;lo0nstanJpenhagNrk;gFmbo;enn3i1ristchur0;ch;ang m1c0ttagoL;ago;ai;i0lgary,pe town,rac4;ro;aHeBirminghWogoAr5u0;char3dap3enos air2r0sZ;g0sa;as;es;est;a2isba1usse0;ls;ne;silPtisla0;va;ta;i3lgrade,r0;g1l0n;in;en;ji0rut;ng;ku,n3r0sel;celo1ranquil0;la;na;g1ja lu0;ka;alo0kok;re;aBb9hmedabad,l7m4n2qa1sh0thens,uckland;dod,gabat;ba;k0twerp;ara;m5s0;terd0;am;exandr0maty;ia;idj0u dhabi;an;lbo1rh0;us;rg",
                    Abbreviation: "true¦a0Tb0Qc0Kd0Ie0Ff0Cg0Ah08i06j04k02l00mRnOoNpIqHrFs9t6u5v2w0yb,µg;is0r,y0L;!c;a,b,e1i0ol,s,t;tro,vo;r,t;niv,safa,t;b1ce,d,e0sp;l,mp,nn,x;!l,sp;ask,e3fc,gt,i2q1r,s,t,u0;pt,rg;! ft;r,tu;c,nVp0;!t;b,d,e0;pSs,v;t,ue;a,d,enn3hd,l,p,r1s0t,vt;!a,eud;ef,o0;b,f,n;!a;ct,kla,nt,p,rd,z;e0ov;b0e;!r;a7b,d,essrs,g,i4l3m2p1rHs0t;!tr;h,s;!e;!le;!n1s0;c,ter;!n;!j,r,sc;at,b,it,lb,m,ng,t0x;!d;an6b,g,m0;!ph;an,d,r,u0;l,n;a,da,e,n0;c,f;g,on,r0wy,z;!s;a0b,en,ov;!l;e1ig,l0m,r,t,y;! oz,a;b,m;a,g,ng,s1tc,x0;!p;p,q,t;ak,e0g,ist,l,m,r;c,f,pt,t;a3ca,g,l,m2o0pl,res,t,yn;!l0mdr,nn,rp;!o;!dr;!l0pt;!if;a,c,l1r0;ig,os;!dg,vd;d4l3p2r1ss0tty,ug,ve;n,t;c,iz;prox,r,t;!ta;!j,m,v",
                    Country: "true¦0:38;1:2L;a2Wb2Dc21d1Xe1Rf1Lg1Bh19i13j11k0Zl0Um0Gn05om3CpZqat1JrXsKtCu6v4wal3yemTz2;a24imbabwe;es,lis and futu2X;a2enezue31ietnam;nuatu,tican city;.5gTkraiZnited 3ruXs2zbeE;a,sr;arab emirat0Kkingdom,states2;! of am2X;k.,s.2; 27a.;a7haBimor-les0Bo6rinidad4u2;nis0rk2valu;ey,me2Xs and caic1T; and 2-2;toba1J;go,kel0Ynga;iw2Vji2nz2R;ki2T;aCcotl1eBi8lov7o5pa2Bri lanka,u4w2yr0;az2ed9itzerl1;il1;d2Qriname;lomon1Vmal0uth 2;afr2IkLsud2O;ak0en0;erra leoEn2;gapo1Wt maart2;en;negKrb0ychellY;int 2moa,n marino,udi arab0;hele24luc0mart1Z;epublic of ir0Com2Cuss0w2;an25;a3eHhilippinTitcairn1Ko2uerto riM;l1rtugE;ki2Bl3nama,pua new0Tra2;gu6;au,esti2;ne;aAe8i6or2;folk1Gth3w2;ay; k2ern mariana1B;or0M;caragua,ger2ue;!ia;p2ther18w zeal1;al;mib0u2;ru;a6exi5icro09o2yanm04;ldova,n2roc4zamb9;a3gol0t2;enegro,serrat;co;c9dagascZl6r4urit3yot2;te;an0i14;shall0Vtin2;ique;a3div2i,ta;es;wi,ys0;ao,ed00;a5e4i2uxembourg;b2echtenste10thu1E;er0ya;ban0Gsotho;os,tv0;azakh1De2iriba02osovo,uwait,yrgyz1D;eling0Jnya;a2erF;ma15p1B;c6nd5r3s2taly,vory coast;le of m19rael;a2el1;n,q;ia,oI;el1;aiSon2ungary;dur0Mg kong;aAermany,ha0Pibralt9re7u2;a5ern4inea2ya0O;!-biss2;au;sey;deloupe,m,tema0P;e2na0M;ce,nl1;ar;bTmb0;a6i5r2;ance,ench 2;guia0Dpoly2;nes0;ji,nl1;lklandTroeT;ast tim6cu5gypt,l salv5ngl1quatorial3ritr4st2thiop0;on0; guin2;ea;ad2;or;enmark,jibou4ominica3r con2;go;!n B;ti;aAentral african 9h7o4roat0u3yprQzech2; 8ia;ba,racao;c3lo2morPngo-brazzaville,okFsta r03te d'ivoiK;mb0;osD;i2ristmasF;le,na;republic;m2naTpe verde,yman9;bod0ero2;on;aFeChut00o8r4u2;lgar0r2;kina faso,ma,undi;azil,itish 2unei;virgin2; is2;lands;liv0nai4snia and herzegoviGtswaGuvet2; isl1;and;re;l2n7rmuF;ar2gium,ize;us;h3ngladesh,rbad2;os;am3ra2;in;as;fghaFlCmAn5r3ustr2zerbaijH;al0ia;genti2men0uba;na;dorra,g4t2;arct6igua and barbu2;da;o2uil2;la;er2;ica;b2ger0;an0;ia;ni2;st2;an",
                    Region: "true¦0:1U;a20b1Sc1Id1Des1Cf19g13h10i0Xj0Vk0Tl0Qm0FnZoXpSqPrMsDtAut9v6w3y1zacatec22;o05u1;cat18kZ;a1est vi4isconsin,yomi14;rwick0shington1;! dc;er2i1;rgin1S;acruz,mont;ah,tar pradesh;a2e1laxca1DuscaA;nnessee,x1R;bas0Kmaulip1QsmJ;a6i4o2taf0Ou1ylh13;ffVrr00s0Y;me10no1Auth 1;cSdR;ber1Ic1naloa;hu0Sily;n2skatchew0Rxo1;ny; luis potosi,ta catari1I;a1hode7;j1ngp02;asth0Mshahi;inghai,u1;e1intana roo;bec,ensWreta0E;ara4e2rince edward1; isU;i,nnsylv1rnambu02;an14;!na;axa0Ndisha,h1klaho1Bntar1reg4x04;io;ayarit,eBo3u1;evo le1nav0L;on;r1tt0Rva scot0X;f6mandy,th1; 1ampton0;c3d2yo1;rk0;ako0Y;aroli0V;olk;bras0Xva01w1; 2foundland1;! and labrador;brunswick,hamp0jers1mexiJyork state;ey;a6i2o1;nta0Nrelos;ch3dlanBn2ss1;issippi,ouri;as geraGneso0M;igQoacQ;dhya,harasht04ine,ni3r1ssachusetts;anhao,y1;land;p1toba;ur;anca0e1incoln0ouis8;e1iH;ds;a1entucky,hul0A;ns08rnata0Dshmir;alis1iangxi;co;daho,llino2nd1owa;ia05;is;a2ert1idalEunA;ford0;mp0waii;ansu,eorgWlou5u1;an2erre1izhou,jarat;ro;ajuato,gdo1;ng;cester0;lori2uji1;an;da;sex;e4o2uran1;go;rs1;et;lawaErby0;a8ea7hi6o1umbrH;ahui4l3nnectic2rsi1ventry;ca;ut;iMorado;la;apEhuahua;ra;l8m1;bridge0peche;a5r4uck1;ingham0;shi1;re;emen,itish columb3;h2ja cal1sque,var2;iforn1;ia;guascalientes,l4r1;izo2kans1;as;na;a2ber1;ta;ba2s1;ka;ma",
                    FemaleName: "true¦0:FY;1:G2;2:FR;3:FD;4:FC;5:EP;6:ER;7:FS;8:GF;9:EZ;A:GB;B:E5;C:FO;D:FL;E:G8;F:EG;aE2bD4cB8dAIe9Gf91g8Hh83i7Sj6Uk60l4Om38n2To2Qp2Fqu2Er1Os0Qt04ursu6vUwOyLzG;aJeHoG;e,la,ra;lGna;da,ma;da,ra;as7EeHol1TvG;et5onB9;le0sen3;an9endBNhiB4iG;lInG;if3AniGo0;e,f39;a,helmi0lGma;a,ow;aMeJiG;cHviG;an9XenG1;kCZtor3;da,l8Vnus,rG;a,nGoniD2;a,iDC;leGnesEC;nDLrG;i1y;aSePhNiMoJrGu6y4;acG3iGu0E;c3na,sG;h9Mta;nHrG;a,i;i9Jya;a5IffaCGna,s7;al3eGomasi0;a,l8Go6Xres1;g7Uo6WrHssG;!a,ie;eFi,ri8;bNliMmKnIrHs7tGwa0;ia0um;a,yn;iGya;a,ka,s7;a4e4iGmCAra;!ka;a,t7;at7it7;a05carlet2Ye04hUiSkye,oQtMuHyG;bFJlvi1;e,sHzG;an2Tet5ie,y;anGi8;!a,e,nG;aDe;aIeG;fGl3DphG;an2;cF8r6;f3nGphi1;d4ia,ja,ya;er4lv3mon1nGobh75;dy;aKeGirlBLo0y6;ba,e0i6lIrG;iGrBPyl;!d70;ia,lBV;ki4nIrHu0w0yG;la,na;i,leAon,ron;a,da,ia,nGon;a,on;l5Yre0;bMdLi9lKmIndHrGs7vannaD;aDi0;ra,y;aGi4;nt7ra;lBNome;e,ie;in1ri0;a02eXhViToHuG;by,thBK;bQcPlOnNsHwe0xG;an94ie,y;aHeGie,lE;ann8ll1marBFtB;!lGnn1;iGyn;e,nG;a,d7W;da,i,na;an9;hel53io;bin,erByn;a,cGkki,na,ta;helBZki;ea,iannDXoG;da,n12;an0bIgi0i0nGta,y0;aGee;!e,ta;a,eG;cARkaD;chGe,i0mo0n5EquCDvCy0;aCCelGi9;!e,le;een2ia0;aMeLhJoIrG;iGudenAW;scil1Uyamva9;lly,rt3;ilome0oebe,ylG;is,lis;arl,ggy,nelope,r6t4;ige,m0Fn4Oo6rvaBBtHulG;a,et5in1;ricGsy,tA8;a,e,ia;ctav3deHfAWlGphAW;a,ga,iv3;l3t5;aQePiJoGy6;eHrG;aDeCma;ll1mi;aKcIkGla,na,s7ta;iGki;!ta;hoB2k8BolG;a,eBH;!mh;l7Tna,risF;dIi5PnHo23taG;li1s7;cy,et5;eAiCO;a01ckenz2eViLoIrignayani,uriBGyG;a,rG;a,na,tAS;i4ll9XnG;a,iG;ca,ka,qB4;a,chOkaNlJmi,nIrGtzi;aGiam;!n9;a,dy,erva,h,n2;a,dIi9JlG;iGy;cent,e;red;!e6;ae6el3G;ag4KgKi,lHrG;edi61isFyl;an2iGliF;nGsAM;a,da;!an,han;b08c9Ed06e,g04i03l01nZrKtJuHv6Sx87yGz2;a,bell,ra;de,rG;a,eC;h75il9t2;a,cSgOiJjor2l6In2s7tIyG;!aGbe5QjaAlou;m,n9S;a,ha,i0;!aIbALeHja,lEna,sGt53;!a,ol,sa;!l06;!h,m,nG;!a,e,n1;arIeHie,oGr3Kueri5;!t;!ry;et3IiB;elGi61y;a,l1;dGon,ue6;akranBy;iGlo36;a,ka,n9;a,re,s2;daGg2;!l2W;alEd2elGge,isBGon0;eiAin1yn;el,le;a0Ie08iWoQuKyG;d3la,nG;!a,dHe9SnGsAQ;!a,e9R;a,sAO;aB1cJelIiFlHna,pGz;e,iB;a,u;a,la;iGy;a2Ae,l25n9;is,l1GrHtt2uG;el6is1;aIeHi8na,rG;a6Zi8;lei,n1tB;!in1;aQbPd3lLnIsHv3zG;!a,be4Ket5z2;a,et5;a,dG;a,sGy;ay,ey,i,y;a,iaIlG;iGy;a8Ge;!n4F;b7Terty;!n5R;aNda,e0iLla,nKoIslARtGx2;iGt2;c3t3;la,nGra;a,ie,o4;a,or1;a,gh,laG;!ni;!h,nG;a,d4e,n4N;cNdon7Si6kes7na,rMtKurIvHxGy6;mi;ern1in3;a,eGie,yn;l,n;as7is7oG;nya,ya;a,isF;ey,ie,y;aZeUhadija,iMoLrIyG;lGra;a,ee,ie;istGy5B;a,en,iGy;!e,n48;ri,urtn9A;aMerLl99mIrGzzy;a,stG;en,in;!berlG;eGi,y;e,y;a,stC;!na,ra;el6PiJlInHrG;a,i,ri;d4na;ey,i,l9Qs2y;ra,s7;c8Wi5XlOma6nyakumari,rMss5LtJviByG;!e,lG;a,eG;e,i78;a5EeHhGi3PlEri0y;ar5Cer5Cie,leCr9Fy;!lyn73;a,en,iGl4Uyn;!ma,n31sF;ei72i,l2;a04eVilToMuG;anKdJliGst56;aHeGsF;!nAt0W;!n8X;i2Ry;a,iB;!anLcelEd5Vel71han6IlJni,sHva0yG;a,ce;eGie;fi0lEph4X;eGie;en,n1;!a,e,n36;!i10lG;!i0Z;anLle0nIrHsG;i5Qsi5Q;i,ri;!a,el6Pif1RnG;a,et5iGy;!e,f1P;a,e72iHnG;a,e71iG;e,n1;cLd1mi,nHqueliAsmin2Uvie4yAzG;min8;a8eHiG;ce,e,n1s;!lGsFt06;e,le;inHk2lEquelG;in1yn;da,ta;lPmNnMo0rLsHvaG;!na;aHiGob6U;do4;!belGdo4;!a,e,l2G;en1i0ma;a,di4es,gr5R;el9ogG;en1;a,eAia0o0se;aNeKilHoGyacin1N;ll2rten1H;aHdGlaH;a,egard;ry;ath0WiHlGnrietBrmiAst0W;en24ga;di;il75lKnJrGtt2yl75z6D;iGmo4Fri4G;etG;!te;aDnaD;ey,l2;aYeTiOlMold12rIwG;enGyne18;!dolE;acHetGisel9;a,chC;e,ieG;!la;adys,enGor3yn1Y;a,da,na;aJgi,lHna,ov71selG;a,e,le;da,liG;an;!n0;mYnIorgHrG;ald35i,m2Stru73;et5i5T;a,eGna;s1Nvieve;briel3Fil,le,rnet,yle;aReOio0loMrG;anHe9iG;da,e9;!cG;esHiGoi0G;n1s3V;!ca;!rG;a,en43;lHrnG;!an9;ec3ic3;rHtiGy8;ma;ah,rah;d0FileCkBl00mUn4ArRsMtLuKvG;aIelHiG;e,ta;in0Ayn;!ngel2H;geni1la,ni3R;h52ta;meral9peranJtG;eHhGrel6;er;l2Pr;za;iGma,nest29yn;cGka,n;a,ka;eJilImG;aGie,y;!liA;ee,i1y;lGrald;da,y;aTeRiMlLma,no4oJsIvG;a,iG;na,ra;a,ie;iGuiG;se;a,en,ie,y;a0c3da,nJsGzaH;aGe;!beG;th;!a,or;anor,nG;!a;in1na;en,iGna,wi0;e,th;aWeKiJoGul2U;lor51miniq3Yn30rGtt2;a,eCis,la,othGthy;ea,y;an09naDonAx2;anPbOde,eNiLja,lImetr3nGsir4U;a,iG;ce,se;a,iHla,orGphiA;es,is;a,l5J;dGrdG;re;!d4Mna;!b2CoraDra;a,d4nG;!a,e;hl3i0mMnKphn1rHvi1WyG;le,na;a,by,cHia,lG;a,en1;ey,ie;a,et5iG;!ca,el1Aka;arGia;is;a0Qe0Mh04i02lUoJrHynG;di,th3;istGy04;al,i0;lOnLrHurG;tn1D;aId28iGn28riA;!nG;a,e,n1;!l1S;n2sG;tanGuelo;ce,za;eGleC;en,t5;aIeoHotG;il4B;!pat4;ir8rIudG;et5iG;a,ne;a,e,iG;ce,sX;a4er4ndG;i,y;aPeMloe,rG;isHyG;stal;sy,tG;aHen,iGy;!an1e,n1;!l;lseHrG;!i8yl;a,y;nLrG;isJlHmG;aiA;a,eGot5;n1t5;!sa;d4el1PtG;al,el1O;cHlG;es5i3F;el3ilG;e,ia,y;iYlXmilWndVrNsLtGy6;aJeIhGri0;erGleCrEy;in1;ri0;li0ri0;a2GsG;a2Fie;a,iMlKmeIolHrG;ie,ol;!e,in1yn;lGn;!a,la;a,eGie,y;ne,y;na,sF;a0Di0D;a,e,l1;isBl2;tlG;in,yn;arb0CeYianXlVoTrG;andRePiIoHyG;an0nn;nwEok8;an2NdgKg0ItG;n27tG;!aHnG;ey,i,y;ny;etG;!t8;an0e,nG;da,na;i8y;bbi8nG;iBn2;ancGossom,ythe;a,he;ca;aRcky,lin9niBrNssMtIulaDvG;!erlG;ey,y;hHsy,tG;e,i0Zy8;!anG;ie,y;!ie;nGt7yl;adHiG;ce;et5iA;!triG;ce,z;a4ie,ra;aliy29b24d1Lg1Hi19l0Sm0Nn01rWsNthe0uJvIyG;anGes7;a,na;a,r25;drIgusHrG;el3;ti0;a,ey,i,y;hHtrG;id;aKlGt1P;eHi8yG;!n;e,iGy;gh;!nG;ti;iIleHpiB;ta;en,n1t5;an19elG;le;aYdWeUgQiOja,nHtoGya;inet5n3;!aJeHiGmI;e,ka;!mGt5;ar2;!belHliFmT;sa;!le;ka,sGta;a,sa;elGie;a,iG;a,ca,n1qG;ue;!t5;te;je6rea;la;!bHmGstas3;ar3;el;aIberHel3iGy;e,na;!ly;l3n9;da;aTba,eNiKlIma,yG;a,c3sG;a,on,sa;iGys0J;e,s0I;a,cHna,sGza;a,ha,on,sa;e,ia;c3is7jaIna,ssaIxG;aGia;!nd4;nd4;ra;ia;i0nHyG;ah,na;a,is,naD;c7da,leCmLnslKsG;haDlG;inGyW;g,n;!h;ey;ee;en;at7g2nG;es;ie;ha;aVdiSelLrG;eIiG;anLenG;a,e,ne;an0;na;aKeJiHyG;nn;a,n1;a,e;!ne;!iG;de;e,lEsG;on;yn;!lG;iAyn;ne;agaJbHiG;!gaI;ey,i8y;!e;il;ah",
                    Place: "true¦a07b05cZdYeXfVgRhQiOjfk,kMlKmHneEoDp9que,rd,s8t5u4v3w0yyz;is1y0;!o;!c;a,t;pYsafa,t;e1he 0;bronx,hamptons;nn,x;ask,fo,oho,t,under6yd;a2e1h0;l,x;k,nnK;!cifX;kla,nt;b1w eng0;land;!r;a1co,i0t,uc;dKnn;libu,nhattS;a0gw,hr;s,x;an0ul;!s;a0cn,da,ndianMst;!x;arlem,kg,nd,wy;a2re0;at 0enwich;britain,lak6;!y village;co,l0ra;!a;urope,verglad2;ak,en,fw,ist,own4xb;al4dg,gk,hina3l2o1r0t;es;lo,nn;!t;town;!if;cn,e0kk,lvd,rooklyn;l air,verly hills;frica,lta,m5ntarct2r1sia,tl0ve;!ant1;ct0iz;ic0; oce0;an;ericas,s",
                    WeekDay: "true¦fri2mon2s1t0wednesd3;hurs1ues1;aturd1und1;!d0;ay0;!s",
                    Month: "true¦aBdec9feb7j2mar,nov9oct1sep0;!t8;!o8;an3u0;l1n0;!e;!y;!u1;!ru0;ary;!em0;ber;pr1ug0;!ust;!il",
                    Date: "true¦t0weekend,yesterd2;mr2o0;d0morrow;ay;!w",
                    FirstName: "true¦aEblair,cCdevBj8k6lashawn,m3nelly,quinn,re2sh0;ay,e0iloh;a,lby;g1ne;ar1el,org0;an;ion,lo;as8e0r9;ls7nyatta,rry;am0ess1ude;ie,m0;ie;an,on;as0heyenne;ey,sidy;lex1ndra,ubr0;ey;is",
                    LastName: "true¦0:34;1:39;2:3B;3:2Y;4:2E;5:30;a3Bb31c2Od2Ee2Bf25g1Zh1Pi1Kj1Ek17l0Zm0Nn0Jo0Gp05rYsMtHvFwCxBy8zh6;a6ou,u;ng,o;a6eun2Uoshi1Kun;ma6ng;da,guc1Zmo27sh21zaR;iao,u;a7eb0il6o3right,u;li3Bs1;gn0lk0ng,tanabe;a6ivaldi;ssilj37zqu2;a9h8i2Go7r6sui,urn0;an,ynisJ;lst0Prr1Uth;at1Uomps1;kah0Vnaka,ylor;aEchDeChimizu,iBmiAo9t7u6zabo;ar2lliv2AzuE;a6ein0;l23rm0;sa,u3;rn4th;lva,mmo24ngh;mjon4rrano;midt,neid0ulz;ito,n7sa6to;ki;ch2dLtos,z;amBeag1Zi9o7u6;bio,iz,sD;b6dri1MgIj0Tme24osevelt,ssi,ux;erts,ins1;c6ve0F;ci,hards1;ir2os;aEeAh8ic6ow20;as6hl0;so;a6illips;m,n1T;ders5et8r7t6;e0Nr4;ez,ry;ers;h21rk0t6vl4;el,te0J;baBg0Blivei01r6;t6w1O;ega,iz;a6eils1guy5ix1owak,ym1E;gy,ka6var1K;ji6muW;ma;aEeCiBo8u6;ll0n6rr0Bssolini,ñ6;oz;lina,oKr6zart;al0Me6r0U;au,no;hhail4ll0;rci0ssi6y0;!er;eWmmad4r6tsu07;in6tin2;!o;aCe8i6op2uo;!n6u;coln,dholm;fe7n0Qr6w0J;oy;bv6v6;re;mmy,rs5u;aBennedy,imuAle0Lo8u7wo6;k,n;mar,znets4;bay6vacs;asY;ra;hn,rl9to,ur,zl4;aAen9ha3imen2o6u3;h6nYu3;an6ns1;ss1;ki0Es5;cks1nsse0D;glesi9ke8noue,shik7to,vano6;u,v;awa;da;as;aBe8itchcock,o7u6;!a3b0ghNynh;a3ffmann,rvat;mingw7nde6rN;rs1;ay;ns5rrQs7y6;asDes;an4hi6;moJ;a9il,o8r7u6;o,tierr2;ayli3ub0;m2nzal2;nd6o,rcia;hi;erAis9lor8o7uj6;ita;st0urni0;es;ch0;nand2;d7insteHsposi6vaL;to;is1wards;aCeBi9omin8u6;bo6rand;is;gu2;az,mitr4;ov;lgado,vi;nkula,rw7vi6;es,s;in;aFhBlarkAo6;h5l6op0rbyn,x;em7li6;ns;an;!e;an8e7iu,o6ristens5u3we;i,ng,u3w,y;!n,on6u3;!g;mpb7rt0st6;ro;ell;aBe8ha3lanco,oyko,r6yrne;ooks,yant;ng;ck7ethov5nnett;en;er,ham;ch,h8iley,rn6;es,i0;er;k,ng;dDl9nd6;ers6rA;en,on,s1;on;eks7iy8var2;ez;ej6;ev;ams",
                    MaleName: "true¦0:CE;1:BL;2:C2;3:BT;4:B5;5:9V;6:BZ;7:AT;8:BD;9:AX;A:AO;aB4bA8c97d87e7Gf6Yg6Gh5Wi5Ij4Lk4Bl3Rm2Pn2Eo28p22qu20r1As0Qt06u05v00wNxavi3yGzB;aBor0;cBh8Ine;hCkB;!aB1;ar51eB0;ass2i,oCuB;sDu25;nEsDusB;oBsC;uf;ef;at0g;aJeHiCoByaAP;lfgang,odrow;lBn1O;bDey,frBJlB;aA5iB;am,e,s;e89ur;i,nde5sB;!l7t1;de,lCrr6yB;l1ne;lBt3;a93y;aEern1iB;cCha0kt5CnceBrg9Bva0;!nt;ente,t5A;lentin49n8Yughn;lyss4Msm0;aTeOhKiIoErCyB;!l3ro8s1;av9QeBist0oy,um0;nt9Iv54y;bDd7XmBny;!as,mBoharu;aAYie,y;i83y;mBt9;!my,othy;adDeoCia7DomB;!as;!do7M;!de9;dErB;en8HrB;an8GeBy;ll,n8F;!dy;dgh,ic9Tnn3req,ts45;aRcotPeNhJiHoFpenc3tBur1Oylve8Hzym1;anDeBua7B;f0phAFvBwa7A;e57ie;!islaw,l7;lom1nA3uB;leyma8ta;dBl7Jm1;!n7;aDeB;lBrm0;d1t1;h6Sne,qu0Uun,wn,y8;aBbasti0k1Xl41rg40th,ymo9I;m9n;!tB;!ie,y;lCmBnti21q4Iul;!mAu4;ik,vato6V;aWeShe92iOoFuCyB;an,ou;b6LdCf9pe6QssB;!elAI;ol2Uy;an,bIcHdGel,geFh0landA9mEnDry,sCyB;!ce;coe,s;!a95nA;an,eo;l3Jr;e4Qg3n7olfo,ri68;co,ky;bAe9U;cBl7;ar5Oc5NhCkBo;!ey,ie,y;a85ie;gCid,ub6x,yBza;ansh,nS;g8WiB;na8Ss;ch5Yfa4lDmCndBpha4sh6Uul,ymo70;al9Yol2By;i9Ion;f,ph;ent2inB;cy,t1;aFeDhilCier62ol,reB;st1;!ip,lip;d9Brcy,tB;ar,e2V;b3Sdra6Ft44ul;ctav2Vliv3m96rFsCtBum8Uw6;is,to;aCc8SvB;al52;ma;i,l49vJ;athJeHiDoB;aBel,l0ma0r2X;h,m;cCg4i3IkB;h6Uola;hol5XkBol5X;!ol5W;al,d,il,ls1vB;il50;anBy;!a4i4;aWeTiKoFuCyB;l21r1;hamCr5ZstaB;fa,p4G;ed,mF;dibo,e,hamDis1XntCsBussa;es,he;e,y;ad,ed,mB;ad,ed;cGgu4kElDnCtchB;!e5;a78ik;house,o03t1;e,olB;aj;ah,hBk7;a4eB;al,l;hClv2rB;le,ri5v2;di,met;ck,hNlLmOnu4rHs1tDuricCxB;!imilian8Cwe5;e,io;eo,hCi52tB;!eo,hew,ia;eBis;us,w;cDio,k86lCqu6Gsha5tBv2;i2Hy;in,on;!el,oKus;achBcolm,ik;ai,y;amBdi,moud;adB;ou;aReNiMlo2RoIuCyB;le,nd1;cEiDkBth3;aBe;!s;gi,s;as,iaB;no;g0nn6RrenDuBwe5;!iB;e,s;!zo;am,on4;a7Bevi,la4SnDoBst3vi;!nB;!a60el;!ny;mCnBr67ur4Twr4T;ce,d1;ar,o4N;aIeDhaled,iBrist4Vu48y3B;er0p,rB;by,k,ollos;en0iEnBrmit,v2;!dCnBt5C;e0Yy;a5ri4N;r,th;na68rBthem;im,l;aYeQiOoDuB;an,liBst2;an,o,us;aqu2eJhnInGrEsB;eChBi7Bue;!ua;!ph;dBge;an,i,on;!aBny;h,s,th4X;!ath4Wie,nA;!l,sBy;ph;an,e,mB;!mA;d,ffGrDsB;sBus;!e;a5JemCmai8oBry;me,ni0O;i6Uy;!e58rB;ey,y;cHd6kGmFrDsCvi3yB;!d6s1;on,p3;ed,od,rBv4M;e4Zod;al,es,is1;e,ob,ub;k,ob,quB;es;aNbrahMchika,gKkeJlija,nuIrGsDtBv0;ai,sB;uki;aBha0i6Fma4sac;ac,iaB;h,s;a,vinBw2;!g;k,nngu52;!r;nacBor;io;im;in,n;aJeFina4VoDuByd56;be25gBmber4CsD;h,o;m3ra33sBwa3X;se2;aDctCitCn4ErB;be20m0;or;th;bKlJmza,nIo,rDsCyB;a43d6;an,s0;lEo4FrDuBv7;hi40ki,tB;a,o;is1y;an,ey;k,s;!im;ib;aQeMiLlenKoIrEuB;illerCsB;!tavo;mo;aDegBov3;!g,orB;io,y;dy,h57nt;nzaBrd1;lo;!n;lbe4Qno,ovan4R;ne,oDrB;aBry;ld,rd4U;ffr7rge;bri4l6rBv2;la1Zr3Eth,y;aReNiLlJorr0IrB;anDedBitz;!dAeBri24;ri23;cDkB;!ie,lB;in,yn;esJisB;!co,zek;etch3oB;yd;d4lBonn;ip;deriDliCng,rnB;an01;pe,x;co;bi0di;arZdUfrTit0lNmGnFo2rCsteb0th0uge8vBym6zra;an,ere2V;gi,iCnBrol,v2w2;est45ie;c07k;och,rique,zo;aGerFiCmB;aFe2P;lCrB;!h0;!io;s1y;nu4;be09d1iEliDmCt1viBwood;n,s;er,o;ot1Ts;!as,j43sB;ha;a2en;!dAg32mEuCwB;a25in;arB;do;o0Su0S;l,nB;est;aYeOiLoErDuCwByl0;ay8ight;a8dl7nc0st2;ag0ew;minFnDri0ugCyB;le;!l03;!a29nBov0;e5ie,y;go,icB;!k;armuCeBll1on,rk;go;id;anIj0lbeHmetri9nFon,rEsDvCwBxt3;ay8ey;en,in;hawn,mo08;ek,ri0F;is,nBv3;is,y;rt;!dB;re;lKmInHrDvB;e,iB;!d;en,iDne5rByl;eBin,yl;l2Vn;n,o,us;!e,i4ny;iBon;an,en,on;e,lB;as;a06e04hWiar0lLoGrEuCyrB;il,us;rtB;!is;aBistobal;ig;dy,lEnCrB;ey,neli9y;or,rB;ad;by,e,in,l2t1;aGeDiByI;fBnt;fo0Ct1;meCt9velaB;nd;nt;rDuCyB;!t1;de;enB;ce;aFeErisCuB;ck;!tB;i0oph3;st3;d,rlBs;eBie;s,y;cBdric,s11;il;lEmer1rB;ey,lCro5y;ll;!os,t1;eb,v2;ar02eUilTlaSoPrCuByr1;ddy,rtI;aJeEiDuCyB;an,ce,on;ce,no;an,ce;nCtB;!t;dCtB;!on;an,on;dCndB;en,on;!foBl7y;rd;bCrByd;is;!by;i8ke;al,lA;nFrBshoi;at,nCtB;!r10;aBie;rd0S;!edict,iCjam2nA;ie,y;to;n7rBt;eBy;tt;ey;ar0Xb0Nd0Jgust2hm0Gid6ja0ElZmXnPputsiOrFsaEuCveBya0ziz;ry;gust9st2;us;hi;aIchHi4jun,maFnDon,tBy0;hBu06;ur;av,oB;ld;an,nd0A;el;ie;ta;aq;dGgel05tB;hoEoB;i8nB;!i02y;ne;ny;reBy;!as,s,w;ir,mBos;ar;an,beOd6eIfFi,lEonDphonHt1vB;aMin;on;so,zo;an,en;onCrB;edP;so;c,jaEksandDssaExB;!and3;er;ar,er;ndB;ro;rtH;ni;en;ad,eB;d,t;in;aColfBri0vik;!o;mBn;!a;dFeEraCuB;!bakr,lfazl;hBm;am;!l;allEel,oulaye,ulB;!lCrahm0;an;ah,o;ah;av,on",
                    Person: "true¦ashton kutchSbRcMdKeIgastNhGinez,jEkDleCmBnettJoAp8r4s3t2v0;a0irgin maG;lentino rossi,n go3;heresa may,iger woods,yra banks;addam hussain,carlett johanssJlobodan milosevic,uB;ay romano,eese witherspoIo1ush limbau0;gh;d stewart,nald0;inho,o;a0ipJ;lmIris hiltD;prah winfrFra;essiaen,itt romnEubarek;bron james,e;anye west,iefer sutherland,obe bryant;aime,effers8k rowli0;ng;alle ber0itlBulk hogan;ry;ff0meril lagasse,zekiel;ie;a0enzel washingt2ick wolf;lt1nte;ar1lint0ruz;on;dinal wols1son0;! palm2;ey;arack obama,rock;er",
                    Verb: "true¦awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en",
                    PhrasalVerb: "true¦0:72;1:6Q;2:7E;3:74;4:6J;5:7H;6:76;7:6P;8:6C;9:6D;A:5I;B:71;C:70;a7Hb63c5Dd5Ae58f46g3Oh38iron0j34k2Zl2Km2Bn29o27p1Pr1Es09tQuOvacuum 1wGyammerCzD;eroAip EonD;e0k0;by,up;aJeGhFiEorDrit53;d 1k2R;mp0n4Ape0r8s8;eel Bip 7L;aEiD;gh 06rd0;n Br 3D;it 5Kk8lk6rm 0Qsh 74t67v4P;rgeCsD;e 9herA;aRePhNiJoHrFuDype 0N;ckArn D;d2in,o3Gup;ade YiDot0y 28;ckle68p 7A;ne67p Ds4D;d2o6Lup;ck FdEe Dgh5Tme0p o0Dre0;aw3ba4d2in,up;e5Ky 1;by,o6V;ink Drow 5V;ba4ov7up;aDe 4Ill4O;m 1r W;ckCke Elk D;ov7u4O;aDba4d2in,o31up;ba4ft7p4Tw3;a0Gc0Fe09h05i02lYmXnWoVpSquare RtJuHwD;earFiD;ngEtch D;aw3ba4o6P; by;ck Dit 1m 1ss0;in,up;aIe0RiHoFrD;aigh1MiD;ke 5Yn2Y;p Drm1P;by,in,o6B;n2Zr 1tc3I;c2Ymp0nd Dr6Hve6y 1;ba4d2up;d2o67up;ar2Vell0ill4UlErDurC;ingCuc8;a33it 3U;be4Crt0;ap 4Eow B;ash 4Zoke0;eep EiDow 9;c3Np 1;in,oD;ff,v7;gn Eng2Zt Dz8;d2o5up;in,o5up;aFoDu4F;ot Dut0w 5X;aw3ba4f37o5R;c2FdeAk4Sve6;e Hll0nd GtD; Dtl43;d2in,o5upD;!on;aw3ba4d2in,o1Yup;o5to;al4Lout0rap4L;il6v8;at0eKiJoGuD;b 4Ele0n Dstl8;aDba4d2in53o3Gt30u3E;c1Xw3;ot EuD;g2Knd6;a1Xf2Ro5;ng 4Op6;aDel6inAnt0;c4Yd D;o2Tu0C;aQePiOlMoKrHsyc2AuD;ll Ft D;aDba4d2in,o1Ht34up;p39w3;ap38d2in,o5t32up;attleCess EiGoD;p 1;ah1Hon;iDp 53re3Mur45wer 53;nt0;ay3ZuD;gAmp 9;ck 53g0leCn 9p3W;el 47ncilA;c3Pir 2In0ss FtEy D;ba4o4R; d2c1Y;aw3ba4o12;pDw3K;e3Jt B;arrow3Terd0oD;d6te3S;aJeHiGoEuD;ddl8ll37;c17p 1uth6ve D;al3Bd2in,o5up;ss0x 1;asur8lt 9ss D;a1Aup;ke Dn 9r30s1Lx0;do,o3Yup;aPeNiIoDuck0;a17c37g GoDse0;k Dse35;aft7ba4d2forw2Bin3Wov7uD;nd7p;in,o0J;e GghtFnEsDv1T;ten 4D;e 1k 1; 1e2Y;ar43d2;av1Ht 2YvelD; o3L;p 1sh DtchCugh6y1U;in3Lo5;eEick6nock D;d2o3H;eDyA;l2Hp D;aw3ba4d2fSin,o05to,up;aFoEuD;ic8mpA;ke2St2W;c31zz 1;aPeKiHoEuD;nker2Ts0U;lDneArse2O;d De 1;ba4d2fast,oZup;de Et D;ba4on,up;aw3o5;aDlp0;d Fl22r Dt 1;fDof;rom;in,oRu1A;cZm 1nDve it,ze1Y;d Dg 27kerF;d2in,o5;aReLive Jloss1VoFrEunD; f0M;in39ow 23; Dof 0U;aEb17it,oDr35t0Ou12;ff,n,v7;bo5ft7hJw3;aw3ba4d2in,oDup,w3;ff,n,ut;a17ek0t D;aEb11d2oDr2Zup;ff,n,ut,v7;cEhDl1Pr2Xt,w3;ead;ross;d aEnD;g 1;bo5;a08e01iRlNoJrFuD;cDel 1;k 1;eEighten DownCy 1;aw3o2L;eDshe1G; 1z8;lFol D;aDwi19;bo5r2I;d 9;aEeDip0;sh0;g 9ke0mDrD;e 2K;gLlJnHrFsEzzD;le0;h 2H;e Dm 1;aw3ba4up;d0isD;h 1;e Dl 11;aw3fI;ht ba4ure0;eInEsD;s 1;cFd D;fDo1X;or;e B;dQl 1;cHll Drm0t0O;apYbFd2in,oEtD;hrough;ff,ut,v7;a4ehi1S;e E;at0dge0nd Dy8;o1Mup;o09rD;ess 9op D;aw3bNin,o15;aShPlean 9oDross But 0T;me FoEuntD; o1M;k 1l6;aJbIforGin,oFtEuD;nd7;ogeth7;ut,v7;th,wD;ard;a4y;pDr19w3;art;eDipA;ck BeD;r 1;lJncel0rGsFtch EveA; in;o16up;h Bt6;ry EvD;e V;aw3o12;l Dm02;aDba4d2o10up;r0Vw3;a0He08l01oSrHuD;bbleFcklTilZlEndlTrn 05tDy 10zz6;t B;k 9; ov7;anMeaKiDush6;ghHng D;aEba4d2forDin,o5up;th;bo5lDr0Lw3;ong;teD;n 1;k D;d2in,o5up;ch0;arKgJil 9n8oGssFttlEunce Dx B;aw3ba4;e 9; ar0B;k Bt 1;e 1;d2up; d2;d 1;aIeed0oDurt0;cFw D;aw3ba4d2o5up;ck;k D;in,oK;ck0nk0st6; oJaGef 1nd D;d2ov7up;er;up;r0t D;d2in,oDup;ff,ut;ff,nD;to;ck Jil0nFrgEsD;h B;ainCe B;g BkC; on;in,o5; o5;aw3d2o5up;ay;cMdIsk Fuction6; oD;ff;arDo5;ouD;nd;d D;d2oDup;ff,n;own;t D;o5up;ut",
                    Modal: "true¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld",
                    Adjective: "true¦0:73;1:7I;2:7O;3:7H;4:7A;5:5B;6:4R;7:49;8:48;9:60;A:7F;a6Eb60c5Md52e4Pf45g3Xh3Mi31j2Zk2Yl2Nm2Cn23o1Np16quack,r0Ws0Ct05uMvJwByear5;arp0eFholeEiDoB;man5oBu67;d69zy;despr6Zs5B;!sa7;eClBste22;co1El o4H;!k5;aCiBola47;b7Nce versa,ol50;ca2gabo5Ynilla;ltSnFpCrb55su4tterB;!mo6U; f30b1KpCsBti1D;ca7et,ide dItairs;er,i3J;aLbeco6Lconvin23deIeHfair,ivers4knGprecedUrEsCwB;iel1Writt5U;i1RuB;pervis0specti3;eBu5;cognHgul6Bl6B;own;ndi3v5Oxpect0;cid0rB;!grou5JsB;iz0tood;b7ppeaHssu6AuthorB;iz0;i20ra;aFeDhough4KoCrB;i1oubl0;geth6p,rp6B;en5LlBm4Vrr2Q;li3;boo,lBn;ent0;aTcSeQhPiNmug,nobbi3AoLpKqueami3AtFuBymb5Y;bDi gener50pBrprisi3;erBre0H;! dup6b,i25;du0seq4P;anda6OeEi0LrBy34;aightBip0; fBfB;or56;adfa5Wreotyp0;a4Uec2Cir1Flend5Wot on; call0le,mb6phist1TrBu0Tvi3X;d5Ury;gnifica2nB;ce4Qg7;am2Le6ocki3ut;cBda1em5lfi2Uni1Spa63re8;o1Cr3R;at53ient24reec53;cr0me,ns serif;aIeEiCoB;bu5Ktt4PuOy4;ghtBv4;!-25f9;ar,bel,condi1du5Xfres4XlDpublic3RsBtard0;is43oB;lu1na2;e1Auc41;b5EciB;al,st;aMeKicayu8lac5Copuli5BrCuB;bl54mp0;eFiCoB;!b06fu5Cmi2Xp6;mCor,sBva1;ti8;a4Re;ci58mB;a0EiB;er,um;ac1WrBti1;feAma2Pplexi3v2Z;rBst;allelDtB;-tiBi4;me;!ed;bMffKkJld fashion0nIpHrg1Dth6utGvB;al,erB;!aDniCt,wB;eiBrouB;ght;ll;do0Rer,g2Hsi41;en,posi1; boa5Ag2Fli8;!ay; gua58bBli8;eat;eDsB;cBer0Dole1;e8u3F;d2Ose;ak0eIiHoBua4J;nFrCtB;ab7;thB;!eB;rn;chala2descri4Ustop;ght5;arby,cessa3Sighbor5xt;aJeHiEoBultip7;bi7derClBnth5ot,st;dy;a1n;nBx0;iaBor;tu2Y;di49naBre;ci3;cBgenta,in,jZkeshift,le,mmoth,ny,sculi8;ab2Uho;aKeFiCoBu0Z;uti0Yvi3;mCteraB;l,te;it0;ftEgBth4;al,eCitiB;ma1;nda38;!-08;ngu3Lst,tt6;ap1Oind5no06;agg0uB;niKstifi0veni7;de4gno46lleg4mOnDpso 1RrB;a1releB;va2; JaIbr0corHdFfluenPiPnEsDtB;aAen3GoxB;ic31;a8i2N;a1er,oce2;iCoB;or;reA;deq3Eppr2T;fBsitu,vitro;ro2;mFpB;arDerfeAoBrop6;li1rtB;a2ed;ti4;eBi0M;d2Ln30;aGelFiDoBumdr36;ne2Uok0rrBs03ur5;if2N;ghfalut1KspB;an2L;liVpf9;lEnDrB;d01roB;wi3;dy,gi3;f,low0;ainf9ener2Eiga1YlHoGraDuB;ilBng ho;ty;cCtB;ef9is;ef9;ne,od;ea28ob4;aQeKinJlIoDrB;a1PeBoz1G;e28q0Ytf9;oDrB; keeps,eBm6tuna1;g00ign;liB;sh;ag2Uue2;al,i1;dFmCrB;ti7;a7ini8;ne;le; up;bl0i2l20r Cux,voB;ri1uri1;oBreac1A;ff;aJfficie2lImiHnFreAthere4veExB;aAcess,pe1JtraCuB;be2Gl0D;!va19;n,ryday; Bcouragi3ti0M;rou1sui1;ne2;abo1YdMe14i1;g6sB;t,ygB;oi3;er;aReJiDoBrea11ue;mina2ne,ubB;le,tf9;dact16fficu1JsCvB;er1F;creDeas0gruntl0hone1AordCtB;a2ress0;er5;et; HadpGfFgene1KliDrang0spe1KtCvoB;ut;ail0ermin0;be1Hca1ghB;tf9;ia2;an;facto;i5magBngeroVs0E;ed,i3;ly;ertaNhief,ivil,oDrB;aBowd0u0D;mp0vYz0;loJmHnCoi3rrBve0K;eAu1D;cre1grEsDtB;emBra0B;po09;ta2;ue2;mer04pleB;te,x;ni4ss4;in;aLeHizarGlFoCrB;and new,isk,okL;gCna fiSttom,urgeoB;is;us;ank,iE;re;autif9hiClov0nBst,yoC;eRt;nd;ul;ckCnkru0SrrB;en;!wards; priori,b0Ic0Fd05fra04g00hZlUma01ntiquTppQrKsIttracti02utheHvEwB;aCkB;wa0P;ke,re;ant garCerB;age;de;ntQ;leep,tonisB;hi3;ab,bitEroDtiB;fiB;ci4;ga2;raB;ry;are2etiLrB;oprB;ia1;at0;arEcohCeBiIl,oof;rt;olB;ic;mi3;ead;ainDgressiConiB;zi3;ve;st;id; IeGuFvB;aCerB;se;nc0;ed;lt;pt,qB;ua1;hoc,infinitB;um;cuCtu4u1;al;ra1;erLlKoIruHsCuB;nda2;e2oCtraA;ct;lu1rbi3;ng;te;pt;aBve;rd;aze,e;ra2;nt",
                    Comparable: "true¦0:3Z;1:4G;2:43;3:2W;4:49;5:3V;a4Mb42c3Md3Be33f2Pg2Dh22i1Tj1Sk1Pl1Hm1Bn15o13p0Tqu0Rr0IsRtKuIvFw7y6za11;ell25ou4;aBe9hi1Wi7r6;o4y;ck0Mde,l6n1ry,se;d,y;a6i4Kt;k,ry;n1Rr6sI;m,y;a7e6ulgar;nge5rda2xi4;gue,in,st;g0n6pco3Kse5;like0ti1;aAen9hi8i7ough,r6;anqu2Oen1ue;dy,g3Sme0ny,r09;ck,n,rs2P;d40se;ll,me,rt,s6wd45;te5;aVcarUeThRiQkin0FlMmKoHpGqua1FtAu7w6;eet,ift;b7dd13per0Gr6;e,re2H;sta2Ft3;aAe9iff,r7u6;pXr1;a6ict,o4;ig3Fn0U;a1ep,rn;le,rk;e22i3Fright0;ci28ft,l7o6re,ur;n,thi4;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g35m6;!y;ek,nd3D;ck,l0mp3;a6iTort,rill,y;dy,ll0Xrp;cu0Rve0Rxy;ce,ed,y;d,fe,int0l1Vv14;aBe9i8o6ude;mantic,o1Isy,u6;gh,nd;ch,pe,tzy;a6d,mo0H;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aEhoDi1QlCoBr8u6;ny,r6;e,p3;egna2ic7o6;fouYud;ey,k0;li04or,te1B;ain,easa2;ny;in5le;dd,f6i0ld,ranQ;fi10;aAe8i7o6;b3isy,rm15sy;ce,mb3;a6w;r,t;ive,rr01;aAe8ild,o7u6;nda19te;ist,o1;a6ek,llX;n,s0ty;d,tuQ;aBeAi9o6ucky;f0Un7o1Du6ve0w17y0T;d,sy;e0g;g1Tke0tt3ve0;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti4;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b3id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t3uiY;u1y;aIeeb3iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi4;gey,lm8r6;e5i4;ful;!i4;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i4;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd",
                    TextValue: "true¦bOeJfDhundredNmOninAone,qu8s6t0zeroN;enMh3rNw0;e0o;l0ntD;fHve;ir0ousandKree;d,t6;e0ix8;cond,pt1ven7xt1;adr0int0;illionD;e0th;!t0;e9ie8y;i3o0;rt1ur0;!t2;ie4y;ft0rst,ve;e3h,ie2y;ight0lev2;!e1h,ie0y;th;en0;!th;illion0;!s,th",
                    Ordinal: "true¦bGeDf9hundredHmGnin7qu6s4t0zeroH;enGh1rFwe0;lfFn9;ir0ousandE;d,t4;e0ixt9;cond,ptAvent8xtA;adr9int9;et0th;e6ie8;i2o0;r0urt3;tie5;ft1rst;ight0lev1;e0h,ie2;en1;illion0;th",
                    Cardinal: "true¦bHeEf8hundred,mHnineAone,qu6s4t0zero;en,h2rGw0;e0o;lve,n8;irt9ousandEree;e0ix5;pt1ven4xt1;adr0int0;illion;i3o0;r1ur0;!t2;ty;ft0ve;e2y;ight0lev1;!e0y;en;illion0;!s",
                    Expression: "true¦a02b01dXeVfuck,gShLlImHnGoDpBshAtsk,u7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la",
                    Adverb: "true¦a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori",
                    Preposition: "true¦'o,-,aKbHcGdFexcept,fEinDmidPnotwithstandiQoBpRqua,sAt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oI;ans,ince,o that;',f0n1ut;!f;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut",
                    Determiner: "true¦aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er"
                }, Bt = ["Person", "Place", "Organization"], Gt = {
                    Noun: {
                        notA: ["Verb", "Adjective", "Adverb"]
                    },
                    Singular: {
                        isA: "Noun",
                        notA: "Plural"
                    },
                    ProperNoun: {
                        isA: "Noun"
                    },
                    Person: {
                        isA: ["ProperNoun", "Singular"],
                        notA: ["Place", "Organization", "Date"]
                    },
                    FirstName: {
                        isA: "Person"
                    },
                    MaleName: {
                        isA: "FirstName",
                        notA: ["FemaleName", "LastName"]
                    },
                    FemaleName: {
                        isA: "FirstName",
                        notA: ["MaleName", "LastName"]
                    },
                    LastName: {
                        isA: "Person",
                        notA: ["FirstName"]
                    },
                    NickName: {
                        isA: "Person",
                        notA: ["FirstName", "LastName"]
                    },
                    Honorific: {
                        isA: "Noun",
                        notA: ["FirstName", "LastName", "Value"]
                    },
                    Place: {
                        isA: "Singular",
                        notA: ["Person", "Organization"]
                    },
                    Country: {
                        isA: ["Place", "ProperNoun"],
                        notA: ["City"]
                    },
                    City: {
                        isA: ["Place", "ProperNoun"],
                        notA: ["Country"]
                    },
                    Region: {
                        isA: ["Place", "ProperNoun"]
                    },
                    Address: {
                        isA: "Place"
                    },
                    Organization: {
                        isA: ["Singular", "ProperNoun"],
                        notA: ["Person", "Place"]
                    },
                    SportsTeam: {
                        isA: "Organization"
                    },
                    School: {
                        isA: "Organization"
                    },
                    Company: {
                        isA: "Organization"
                    },
                    Plural: {
                        isA: "Noun",
                        notA: ["Singular"]
                    },
                    Uncountable: {
                        isA: "Noun"
                    },
                    Pronoun: {
                        isA: "Noun",
                        notA: Bt
                    },
                    Actor: {
                        isA: "Noun",
                        notA: Bt
                    },
                    Activity: {
                        isA: "Noun",
                        notA: ["Person", "Place"]
                    },
                    Unit: {
                        isA: "Noun",
                        notA: Bt
                    },
                    Demonym: {
                        isA: ["Noun", "ProperNoun"],
                        notA: Bt
                    },
                    Possessive: {
                        isA: "Noun"
                    }
                }, Ct = {
                    Verb: {
                        notA: ["Noun", "Adjective", "Adverb", "Value"]
                    },
                    PresentTense: {
                        isA: "Verb",
                        notA: ["PastTense", "Copula", "FutureTense"]
                    },
                    Infinitive: {
                        isA: "PresentTense",
                        notA: ["PastTense", "Gerund"]
                    },
                    Gerund: {
                        isA: "PresentTense",
                        notA: ["PastTense", "Copula", "FutureTense"]
                    },
                    PastTense: {
                        isA: "Verb",
                        notA: ["FutureTense"]
                    },
                    FutureTense: {
                        isA: "Verb"
                    },
                    Copula: {
                        isA: "Verb"
                    },
                    Modal: {
                        isA: "Verb",
                        notA: ["Infinitive"]
                    },
                    PerfectTense: {
                        isA: "Verb",
                        notA: "Gerund"
                    },
                    Pluperfect: {
                        isA: "Verb"
                    },
                    Participle: {
                        isA: "Verb"
                    },
                    PhrasalVerb: {
                        isA: "Verb"
                    },
                    Particle: {
                        isA: "PhrasalVerb"
                    }
                }, jt = {
                    Value: {
                        notA: ["Verb", "Adjective", "Adverb"]
                    },
                    Ordinal: {
                        isA: "Value",
                        notA: ["Cardinal"]
                    },
                    Cardinal: {
                        isA: "Value",
                        notA: ["Ordinal"]
                    },
                    RomanNumeral: {
                        isA: "Cardinal",
                        notA: ["Ordinal", "TextValue"]
                    },
                    TextValue: {
                        isA: "Value",
                        notA: ["NumericValue"]
                    },
                    NumericValue: {
                        isA: "Value",
                        notA: ["TextValue"]
                    },
                    Money: {
                        isA: "Cardinal"
                    },
                    Percent: {
                        isA: "Value"
                    }
                }, Dt = ["Noun", "Verb", "Adjective", "Adverb", "Value", "QuestionWord"], Et = {
                    Adjective: {
                        notA: ["Noun", "Verb", "Adverb", "Value"]
                    },
                    Comparable: {
                        isA: ["Adjective"]
                    },
                    Comparative: {
                        isA: ["Adjective"]
                    },
                    Superlative: {
                        isA: ["Adjective"],
                        notA: ["Comparative"]
                    },
                    NumberRange: {
                        isA: ["Contraction"]
                    },
                    Adverb: {
                        notA: ["Noun", "Verb", "Adjective", "Value"]
                    },
                    Date: {
                        notA: ["Verb", "Conjunction", "Adverb", "Preposition", "Adjective"]
                    },
                    Month: {
                        isA: ["Date", "Singular"],
                        notA: ["Year", "WeekDay", "Time"]
                    },
                    WeekDay: {
                        isA: ["Date", "Noun"]
                    },
                    Time: {
                        isA: ["Date"],
                        notA: ["Value"]
                    },
                    Determiner: {
                        notA: Dt
                    },
                    Conjunction: {
                        notA: Dt
                    },
                    Preposition: {
                        notA: Dt
                    },
                    QuestionWord: {
                        notA: ["Determiner"]
                    },
                    Currency: {},
                    Expression: {
                        notA: ["Noun", "Adjective", "Verb", "Adverb"]
                    },
                    Abbreviation: {},
                    Url: {
                        notA: ["HashTag", "PhoneNumber", "Verb", "Adjective", "Value", "AtMention", "Email"]
                    },
                    PhoneNumber: {
                        notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention", "Email"]
                    },
                    HashTag: {},
                    AtMention: {
                        isA: ["Noun"],
                        notA: ["HashTag", "Verb", "Adjective", "Value", "Email"]
                    },
                    Emoji: {
                        notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
                    },
                    Emoticon: {
                        notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
                    },
                    Email: {
                        notA: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
                    },
                    Auxiliary: {
                        notA: ["Noun", "Adjective", "Value"]
                    },
                    Acronym: {
                        notA: ["Plural", "RomanNumeral"]
                    },
                    Negative: {
                        notA: ["Noun", "Adjective", "Value"]
                    },
                    Condition: {
                        notA: ["Verb", "Adjective", "Noun", "Value"]
                    }
                }, Nt = {
                    Noun: "blue",
                    Verb: "green",
                    Negative: "green",
                    Date: "red",
                    Value: "red",
                    Adjective: "magenta",
                    Preposition: "cyan",
                    Conjunction: "cyan",
                    Determiner: "cyan",
                    Adverb: "cyan"
                }, Ft = function(e) {
                    return Object.keys(e).forEach((function(t) {
                        e[t].color ? e[t].color = e[t].color : Nt[t] ? e[t].color = Nt[t] : e[t].isA.some((function(r) {
                            return !!Nt[r] && (e[t].color = Nt[r], !0)
                        }))
                    })), e
                }, zt = function(e) {
                    return Object.keys(e).forEach((function(t) {
                        for (var r = e[t], n = r.isA.length, a = 0; a < n; a++) {
                            var i = r.isA[a];
                            e[i] && (r.isA = r.isA.concat(e[i].isA))
                        }
                        r.isA = function(e) {
                            return e.filter((function(e, t, r) {
                                return r.indexOf(e) === t
                            }))
                        }(r.isA)
                    })), e
                }, Ot = function(e) {
                    var t = Object.keys(e);
                    return t.forEach((function(r) {
                        var n = e[r];
                        n.notA = n.notA || [], n.isA.forEach((function(t) {
                            if (e[t] && e[t].notA) {
                                var r = "string" == typeof e[t].notA ? [e[t].isA] : e[t].notA || [];
                                n.notA = n.notA.concat(r)
                            }
                        }));
                        for (var a = 0; a < t.length; a++) {
                            var i = t[a]; - 1 !== e[i].notA.indexOf(r) && n.notA.push(i)
                        }
                        n.notA = function(e) {
                            return e.filter((function(e, t, r) {
                                return r.indexOf(e) === t
                            }))
                        }(n.notA)
                    })), e
                }, _t = function(e) {
                    var t = Object.keys(e);
                    return t.forEach((function(r) {
                        var n = e[r];
                        n.lineage = [];
                        for (var a = 0; a < t.length; a++) - 1 !== e[t[a]].isA.indexOf(r) && n.lineage.push(t[a])
                    })), e
                }, Tt = function(e) {
                    return e = function(e) {
                        return Object.keys(e).forEach((function(t) {
                            var r = e[t];
                            r.isA = r.isA || [], "string" == typeof r.isA && (r.isA = [r.isA]), r.notA = r.notA || [], "string" == typeof r.notA && (r.notA = [r.notA])
                        })), e
                    }(e), e = zt(e), e = Ot(e), e = Ft(e), e = _t(e)
                }, It = function(e, t) {
                    Object.keys(e).forEach((function(r) {
                        t[r] = e[r]
                    }))
                }, Vt = function() {
                    var e = {};
                    return It(Gt, e), It(Ct, e), It(jt, e), It(Et, e), e = Tt(e)
                }(), Ht = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", St = Ht.split("").reduce((function(e, t, r) {
                    return e[t] = r, e
                }), {}), Mt = function(e) {
                    if (void 0 !== St[e]) return St[e];
                    for (var t = 0, r = 1, n = 36, a = 1; r < e.length; t += n, r++, n *= 36);
                    for (var i = e.length - 1; i >= 0; i--, a *= 36) {
                        var o = e.charCodeAt(i) - 48;
                        o > 10 && (o -= 7), t += o * a
                    }
                    return t
                }, Lt = function(e, t, r) {
                    var n = Mt(t);
                    return n < e.symCount ? e.syms[n] : r + n + 1 - e.symCount
                }, qt = function(e) {
                    var t = {
                        nodes: e.split(";"),
                        syms: [],
                        symCount: 0
                    };
                    return e.match(":") && function(e) {
                            for (var t = new RegExp("([0-9A-Z]+):([0-9A-Z]+)"), r = 0; r < e.nodes.length; r++) {
                                var n = t.exec(e.nodes[r]);
                                if (!n) {
                                    e.symCount = r;
                                    break
                                }
                                e.syms[Mt(n[1])] = Mt(n[2])
                            }
                            e.nodes = e.nodes.slice(e.symCount, e.nodes.length)
                        }(t),
                        function(e) {
                            var t = [];
                            return function r(n, a) {
                                var i = e.nodes[n];
                                "!" === i[0] && (t.push(a), i = i.slice(1));
                                for (var o = i.split(/([A-Z0-9,]+)/g), s = 0; s < o.length; s += 2) {
                                    var u = o[s],
                                        l = o[s + 1];
                                    if (u) {
                                        var c = a + u;
                                        if ("," !== l && void 0 !== l) r(Lt(e, l, n), c);
                                        else t.push(c)
                                    }
                                }
                            }(0, ""), t
                        }(t)
                }, Wt = function(e) {
                    var t = e.split("|").reduce((function(e, t) {
                            var r = t.split("¦");
                            return e[r[0]] = r[1], e
                        }), {}),
                        r = {};
                    return Object.keys(t).forEach((function(e) {
                        var n = qt(t[e]);
                        "true" === e && (e = !0);
                        for (var a = 0; a < n.length; a++) {
                            var i = n[a];
                            !0 === r.hasOwnProperty(i) ? !1 === Array.isArray(r[i]) ? r[i] = [r[i], e] : r[i].push(e) : r[i] = e
                        }
                    })), r
                }, Jt = function(e, t, r) {
                    void 0 !== r[e] ? ("string" == typeof r[e] && (r[e] = [r[e]]), "string" == typeof t ? r[e].push(t) : r[e] = r[e].concat(t)) : r[e] = t
                }, Rt = Jt, Kt = function(e, t, r) {
                    var n = r.words,
                        a = r.transforms,
                        i = e.split(" ");
                    if (i.length > 1 && (r.hasCompound[i[0]] = !0), "Singular" === t) {
                        var o = a.toPlural(e, r);
                        n[o] = n[o] || "Plural"
                    }
                    if ("Infinitive" === t)
                        for (var s = a.conjugate(e, r), u = Object.keys(s), l = 0; l < u.length; l++) {
                            var c = s[u[l]];
                            n[c] = n[c] || u[l]
                        }
                    if ("Comparable" === t)
                        for (var d = a.adjectives(e), h = Object.keys(d), g = 0; g < h.length; g++) {
                            var p = d[h[g]];
                            n[p] = n[p] || h[g]
                        }
                    if ("PhrasalVerb" === t) {
                        Jt(e, "Infinitive", n);
                        for (var m = a.conjugate(i[0], r), f = Object.keys(m), v = 0; v < f.length; v++) {
                            r.hasCompound[m[f[v]]] = !0;
                            var b = m[f[v]] + " " + i[1];
                            Jt(b, f[v], n), Jt(b, "PhrasalVerb", n)
                        }
                    }
                    if ("Demonym" === t) {
                        var y = a.toPlural(e, r);
                        n[y] = n[y] || ["Demonym", "Plural"]
                    }
                }, Ut = function(e) {
                    for (var t = e.irregulars.nouns, r = Object.keys(t), n = 0; n < r.length; n++) {
                        var a = r[n];
                        e.words[a] = "Singular", e.words[t[a]] = "Plural"
                    }
                    for (var i = e.irregulars.verbs, o = Object.keys(i), s = function(t) {
                            var r = o[t];
                            e.words[r] = e.words[r] || "Infinitive";
                            var n = e.transforms.conjugate(r, e);
                            n = Object.assign(n, i[r]), Object.keys(n).forEach((function(t) {
                                e.words[n[t]] = e.words[n[t]] || t
                            }))
                        }, u = 0; u < o.length; u++) s(u)
                }, Qt = {
                    "20th century fox": "Organization",
                    "7 eleven": "Organization",
                    "7-eleven": "Organization",
                    g8: "Organization",
                    "motel 6": "Organization",
                    vh1: "Organization",
                    q1: "Date",
                    q2: "Date",
                    q3: "Date",
                    q4: "Date"
                }, Zt = {
                    g: "Gerund",
                    prt: "Participle",
                    perf: "PerfectTense",
                    pst: "PastTense",
                    fut: "FuturePerfect",
                    pres: "PresentTense",
                    pluperf: "Pluperfect",
                    a: "Actor"
                }, Xt = {
                    act: {
                        a: "_or"
                    },
                    ache: {
                        pst: "ached",
                        g: "aching"
                    },
                    age: {
                        g: "ageing",
                        pst: "aged",
                        pres: "ages"
                    },
                    aim: {
                        a: "_er",
                        g: "_ing",
                        pst: "_ed"
                    },
                    arise: {
                        prt: "_n",
                        pst: "arose"
                    },
                    babysit: {
                        a: "_ter",
                        pst: "babysat"
                    },
                    ban: {
                        a: "",
                        g: "_ning",
                        pst: "_ned"
                    },
                    be: {
                        a: "",
                        g: "am",
                        prt: "been",
                        pst: "was",
                        pres: "is"
                    },
                    beat: {
                        a: "_er",
                        g: "_ing",
                        prt: "_en"
                    },
                    become: {
                        prt: "_"
                    },
                    begin: {
                        g: "_ning",
                        prt: "begun",
                        pst: "began"
                    },
                    being: {
                        g: "are",
                        pst: "were",
                        pres: "are"
                    },
                    bend: {
                        prt: "bent"
                    },
                    bet: {
                        a: "_ter",
                        prt: "_"
                    },
                    bind: {
                        pst: "bound"
                    },
                    bite: {
                        g: "biting",
                        prt: "bitten",
                        pst: "bit"
                    },
                    bleed: {
                        prt: "bled",
                        pst: "bled"
                    },
                    blow: {
                        prt: "_n",
                        pst: "blew"
                    },
                    boil: {
                        a: "_er"
                    },
                    brake: {
                        prt: "broken"
                    },
                    break: {
                        pst: "broke"
                    },
                    breed: {
                        pst: "bred"
                    },
                    bring: {
                        prt: "brought",
                        pst: "brought"
                    },
                    broadcast: {
                        pst: "_"
                    },
                    budget: {
                        pst: "_ed"
                    },
                    build: {
                        prt: "built",
                        pst: "built"
                    },
                    burn: {
                        prt: "_ed"
                    },
                    burst: {
                        prt: "_"
                    },
                    buy: {
                        prt: "bought",
                        pst: "bought"
                    },
                    can: {
                        a: "",
                        fut: "_",
                        g: "",
                        pst: "could",
                        perf: "could",
                        pluperf: "could",
                        pres: "_"
                    },
                    catch: {
                        pst: "caught"
                    },
                    choose: {
                        g: "choosing",
                        prt: "chosen",
                        pst: "chose"
                    },
                    cling: {
                        prt: "clung"
                    },
                    come: {
                        prt: "_",
                        pst: "came",
                        g: "coming"
                    },
                    compete: {
                        a: "competitor",
                        g: "competing",
                        pst: "_d"
                    },
                    cost: {
                        pst: "_"
                    },
                    creep: {
                        prt: "crept"
                    },
                    cut: {
                        prt: "_"
                    },
                    deal: {
                        prt: "_t",
                        pst: "_t"
                    },
                    develop: {
                        a: "_er",
                        g: "_ing",
                        pst: "_ed"
                    },
                    die: {
                        g: "dying",
                        pst: "_d"
                    },
                    dig: {
                        g: "_ging",
                        prt: "dug",
                        pst: "dug"
                    },
                    dive: {
                        prt: "_d"
                    },
                    do: {
                        pst: "did",
                        pres: "_es"
                    },
                    draw: {
                        prt: "_n",
                        pst: "drew"
                    },
                    dream: {
                        prt: "_t"
                    },
                    drink: {
                        prt: "drunk",
                        pst: "drank"
                    },
                    drive: {
                        g: "driving",
                        prt: "_n",
                        pst: "drove"
                    },
                    drop: {
                        g: "_ping",
                        pst: "_ped"
                    },
                    eat: {
                        a: "_er",
                        g: "_ing",
                        prt: "_en",
                        pst: "ate"
                    },
                    edit: {
                        pst: "_ed",
                        g: "_ing"
                    },
                    egg: {
                        pst: "_ed"
                    },
                    fall: {
                        prt: "_en",
                        pst: "fell"
                    },
                    feed: {
                        prt: "fed",
                        pst: "fed"
                    },
                    feel: {
                        a: "_er",
                        pst: "felt"
                    },
                    fight: {
                        prt: "fought",
                        pst: "fought"
                    },
                    find: {
                        pst: "found"
                    },
                    flee: {
                        g: "_ing",
                        prt: "fled"
                    },
                    fling: {
                        prt: "flung"
                    },
                    fly: {
                        prt: "flown",
                        pst: "flew"
                    },
                    forbid: {
                        pst: "forbade"
                    },
                    forget: {
                        g: "_ing",
                        prt: "forgotten",
                        pst: "forgot"
                    },
                    forgive: {
                        g: "forgiving",
                        prt: "_n",
                        pst: "forgave"
                    },
                    free: {
                        a: "",
                        g: "_ing"
                    },
                    freeze: {
                        g: "freezing",
                        prt: "frozen",
                        pst: "froze"
                    },
                    get: {
                        pst: "got",
                        prt: "gotten"
                    },
                    give: {
                        g: "giving",
                        prt: "_n",
                        pst: "gave"
                    },
                    go: {
                        prt: "_ne",
                        pst: "went",
                        pres: "goes"
                    },
                    grow: {
                        prt: "_n"
                    },
                    hang: {
                        prt: "hung",
                        pst: "hung"
                    },
                    have: {
                        g: "having",
                        prt: "had",
                        pst: "had",
                        pres: "has"
                    },
                    hear: {
                        prt: "_d",
                        pst: "_d"
                    },
                    hide: {
                        prt: "hidden",
                        pst: "hid"
                    },
                    hit: {
                        prt: "_"
                    },
                    hold: {
                        prt: "held",
                        pst: "held"
                    },
                    hurt: {
                        prt: "_",
                        pst: "_"
                    },
                    ice: {
                        g: "icing",
                        pst: "_d"
                    },
                    imply: {
                        pst: "implied",
                        pres: "implies"
                    },
                    is: {
                        a: "",
                        g: "being",
                        pst: "was",
                        pres: "_"
                    },
                    keep: {
                        prt: "kept"
                    },
                    kneel: {
                        prt: "knelt"
                    },
                    know: {
                        prt: "_n"
                    },
                    lay: {
                        prt: "laid",
                        pst: "laid"
                    },
                    lead: {
                        prt: "led",
                        pst: "led"
                    },
                    leap: {
                        prt: "_t"
                    },
                    leave: {
                        prt: "left",
                        pst: "left"
                    },
                    lend: {
                        prt: "lent"
                    },
                    lie: {
                        g: "lying",
                        pst: "lay"
                    },
                    light: {
                        prt: "lit",
                        pst: "lit"
                    },
                    log: {
                        g: "_ging",
                        pst: "_ged"
                    },
                    loose: {
                        prt: "lost"
                    },
                    lose: {
                        g: "losing",
                        pst: "lost"
                    },
                    make: {
                        prt: "made",
                        pst: "made"
                    },
                    mean: {
                        prt: "_t",
                        pst: "_t"
                    },
                    meet: {
                        a: "_er",
                        g: "_ing",
                        prt: "met",
                        pst: "met"
                    },
                    miss: {
                        pres: "_"
                    },
                    name: {
                        g: "naming"
                    },
                    pay: {
                        prt: "paid",
                        pst: "paid"
                    },
                    prove: {
                        prt: "_n"
                    },
                    puke: {
                        g: "puking"
                    },
                    put: {
                        prt: "_"
                    },
                    quit: {
                        prt: "_"
                    },
                    read: {
                        prt: "_",
                        pst: "_"
                    },
                    ride: {
                        prt: "ridden"
                    },
                    ring: {
                        prt: "rung",
                        pst: "rang"
                    },
                    rise: {
                        fut: "will have _n",
                        g: "rising",
                        prt: "_n",
                        pst: "rose",
                        pluperf: "had _n"
                    },
                    rub: {
                        g: "_bing",
                        pst: "_bed"
                    },
                    run: {
                        g: "_ning",
                        prt: "_",
                        pst: "ran"
                    },
                    say: {
                        prt: "said",
                        pst: "said",
                        pres: "_s"
                    },
                    seat: {
                        prt: "sat"
                    },
                    see: {
                        g: "_ing",
                        prt: "_n",
                        pst: "saw"
                    },
                    seek: {
                        prt: "sought"
                    },
                    sell: {
                        prt: "sold",
                        pst: "sold"
                    },
                    send: {
                        prt: "sent"
                    },
                    set: {
                        prt: "_"
                    },
                    sew: {
                        prt: "_n"
                    },
                    shake: {
                        prt: "_n"
                    },
                    shave: {
                        prt: "_d"
                    },
                    shed: {
                        g: "_ding",
                        pst: "_",
                        pres: "_s"
                    },
                    shine: {
                        prt: "shone",
                        pst: "shone"
                    },
                    shoot: {
                        prt: "shot",
                        pst: "shot"
                    },
                    show: {
                        pst: "_ed"
                    },
                    shut: {
                        prt: "_"
                    },
                    sing: {
                        prt: "sung",
                        pst: "sang"
                    },
                    sink: {
                        pst: "sank",
                        pluperf: "had sunk"
                    },
                    sit: {
                        pst: "sat"
                    },
                    ski: {
                        pst: "_ied"
                    },
                    slay: {
                        prt: "slain"
                    },
                    sleep: {
                        prt: "slept"
                    },
                    slide: {
                        prt: "slid",
                        pst: "slid"
                    },
                    smash: {
                        pres: "_es"
                    },
                    sneak: {
                        prt: "snuck"
                    },
                    speak: {
                        fut: "will have spoken",
                        prt: "spoken",
                        pst: "spoke",
                        perf: "have spoken",
                        pluperf: "had spoken"
                    },
                    speed: {
                        prt: "sped"
                    },
                    spend: {
                        prt: "spent"
                    },
                    spill: {
                        prt: "_ed",
                        pst: "spilt"
                    },
                    spin: {
                        g: "_ning",
                        prt: "spun",
                        pst: "spun"
                    },
                    spit: {
                        prt: "spat"
                    },
                    split: {
                        prt: "_"
                    },
                    spread: {
                        pst: "_"
                    },
                    spring: {
                        prt: "sprung"
                    },
                    stand: {
                        pst: "stood"
                    },
                    steal: {
                        a: "_er",
                        pst: "stole"
                    },
                    stick: {
                        pst: "stuck"
                    },
                    sting: {
                        pst: "stung"
                    },
                    stink: {
                        prt: "stunk",
                        pst: "stunk"
                    },
                    stream: {
                        a: "_er"
                    },
                    strew: {
                        prt: "_n"
                    },
                    strike: {
                        g: "striking",
                        pst: "struck"
                    },
                    suit: {
                        a: "_er",
                        g: "_ing",
                        pst: "_ed"
                    },
                    sware: {
                        prt: "sworn"
                    },
                    swear: {
                        pst: "swore"
                    },
                    sweep: {
                        prt: "swept"
                    },
                    swim: {
                        g: "_ming",
                        pst: "swam"
                    },
                    swing: {
                        pst: "swung"
                    },
                    take: {
                        fut: "will have _n",
                        pst: "took",
                        perf: "have _n",
                        pluperf: "had _n"
                    },
                    teach: {
                        pst: "taught",
                        pres: "_es"
                    },
                    tear: {
                        pst: "tore"
                    },
                    tell: {
                        pst: "told"
                    },
                    think: {
                        pst: "thought"
                    },
                    thrive: {
                        prt: "_d"
                    },
                    tie: {
                        g: "tying",
                        pst: "_d"
                    },
                    undergo: {
                        prt: "_ne"
                    },
                    understand: {
                        pst: "understood"
                    },
                    upset: {
                        prt: "_"
                    },
                    wait: {
                        a: "_er",
                        g: "_ing",
                        pst: "_ed"
                    },
                    wake: {
                        pst: "woke"
                    },
                    wear: {
                        pst: "wore"
                    },
                    weave: {
                        prt: "woven"
                    },
                    wed: {
                        pst: "wed"
                    },
                    weep: {
                        prt: "wept"
                    },
                    win: {
                        g: "_ning",
                        pst: "won"
                    },
                    wind: {
                        prt: "wound"
                    },
                    withdraw: {
                        pst: "withdrew"
                    },
                    wring: {
                        prt: "wrung"
                    },
                    write: {
                        g: "writing",
                        prt: "written",
                        pst: "wrote"
                    }
                }, Yt = Object.keys(Xt), er = function(e) {
                    var t = Yt[e],
                        r = {};
                    Object.keys(Xt[t]).forEach((function(e) {
                        var n = Xt[t][e];
                        n = n.replace("_", t), r[Zt[e]] = n
                    })), Xt[t] = r
                }, tr = 0; tr < Yt.length; tr++) er(tr);
            var rr = Xt,
                nr = {
                    b: [{
                        reg: /([^aeiou][aeiou])b$/i,
                        repl: {
                            pr: "$1bs",
                            pa: "$1bbed",
                            gr: "$1bbing"
                        }
                    }],
                    d: [{
                        reg: /(end)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "ent",
                            gr: "$1ing",
                            ar: "$1er"
                        }
                    }, {
                        reg: /(eed)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1ed",
                            gr: "$1ing",
                            ar: "$1er"
                        }
                    }, {
                        reg: /(ed)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1ded",
                            ar: "$1der",
                            gr: "$1ding"
                        }
                    }, {
                        reg: /([^aeiou][ou])d$/i,
                        repl: {
                            pr: "$1ds",
                            pa: "$1dded",
                            gr: "$1dding"
                        }
                    }],
                    e: [{
                        reg: /(eave)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1d",
                            gr: "eaving",
                            ar: "$1r"
                        }
                    }, {
                        reg: /(ide)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "ode",
                            gr: "iding",
                            ar: "ider"
                        }
                    }, {
                        reg: /(t|sh?)(ake)$/i,
                        repl: {
                            pr: "$1$2s",
                            pa: "$1ook",
                            gr: "$1aking",
                            ar: "$1$2r"
                        }
                    }, {
                        reg: /w(ake)$/i,
                        repl: {
                            pr: "w$1s",
                            pa: "woke",
                            gr: "waking",
                            ar: "w$1r"
                        }
                    }, {
                        reg: /m(ake)$/i,
                        repl: {
                            pr: "m$1s",
                            pa: "made",
                            gr: "making",
                            ar: "m$1r"
                        }
                    }, {
                        reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
                        repl: {
                            pr: "$1es",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }, {
                        reg: /([bd]l)e$/i,
                        repl: {
                            pr: "$1es",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }, {
                        reg: /(om)e$/i,
                        repl: {
                            pr: "$1es",
                            pa: "ame",
                            gr: "$1ing"
                        }
                    }],
                    g: [{
                        reg: /([^aeiou][ou])g$/i,
                        repl: {
                            pr: "$1gs",
                            pa: "$1gged",
                            gr: "$1gging"
                        }
                    }],
                    h: [{
                        reg: /(..)([cs]h)$/i,
                        repl: {
                            pr: "$1$2es",
                            pa: "$1$2ed",
                            gr: "$1$2ing"
                        }
                    }],
                    k: [{
                        reg: /(ink)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "unk",
                            gr: "$1ing",
                            ar: "$1er"
                        }
                    }],
                    m: [{
                        reg: /([^aeiou][aeiou])m$/i,
                        repl: {
                            pr: "$1ms",
                            pa: "$1mmed",
                            gr: "$1mming"
                        }
                    }],
                    n: [{
                        reg: /(en)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }],
                    p: [{
                        reg: /(e)(ep)$/i,
                        repl: {
                            pr: "$1$2s",
                            pa: "$1pt",
                            gr: "$1$2ing",
                            ar: "$1$2er"
                        }
                    }, {
                        reg: /([^aeiou][aeiou])p$/i,
                        repl: {
                            pr: "$1ps",
                            pa: "$1pped",
                            gr: "$1pping"
                        }
                    }, {
                        reg: /([aeiu])p$/i,
                        repl: {
                            pr: "$1ps",
                            pa: "$1p",
                            gr: "$1pping"
                        }
                    }],
                    r: [{
                        reg: /([td]er)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }, {
                        reg: /(er)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }],
                    s: [{
                        reg: /(ish|tch|ess)$/i,
                        repl: {
                            pr: "$1es",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }],
                    t: [{
                        reg: /(ion|end|e[nc]t)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }, {
                        reg: /(.eat)$/i,
                        repl: {
                            pr: "$1s",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }, {
                        reg: /([aeiu])t$/i,
                        repl: {
                            pr: "$1ts",
                            pa: "$1t",
                            gr: "$1tting"
                        }
                    }, {
                        reg: /([^aeiou][aeiou])t$/i,
                        repl: {
                            pr: "$1ts",
                            pa: "$1tted",
                            gr: "$1tting"
                        }
                    }],
                    w: [{
                        reg: /(..)(ow)$/i,
                        repl: {
                            pr: "$1$2s",
                            pa: "$1ew",
                            gr: "$1$2ing",
                            prt: "$1$2n"
                        }
                    }],
                    y: [{
                        reg: /([i|f|rr])y$/i,
                        repl: {
                            pr: "$1ies",
                            pa: "$1ied",
                            gr: "$1ying"
                        }
                    }],
                    z: [{
                        reg: /([aeiou]zz)$/i,
                        repl: {
                            pr: "$1es",
                            pa: "$1ed",
                            gr: "$1ing"
                        }
                    }]
                },
                ar = {
                    pr: "PresentTense",
                    pa: "PastTense",
                    gr: "Gerund",
                    prt: "Participle",
                    ar: "Actor"
                },
                ir = function(e, t) {
                    for (var r = {}, n = Object.keys(t.repl), a = 0; a < n.length; a += 1) {
                        var i = n[a];
                        r[ar[i]] = e.replace(t.reg, t.repl[i])
                    }
                    return r
                },
                or = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e[e.length - 1];
                    if (!0 === nr.hasOwnProperty(t))
                        for (var r = 0; r < nr[t].length; r += 1) {
                            var n = nr[t][r].reg;
                            if (!0 === n.test(e)) return ir(e, nr[t][r])
                        }
                    return {}
                },
                sr = /[bcdfghjklmnpqrstvwxz]y$/,
                ur = {
                    Gerund: function(e) {
                        return "e" === e.charAt(e.length - 1) ? e.replace(/e$/, "ing") : e + "ing"
                    },
                    PresentTense: function(e) {
                        return "s" === e.charAt(e.length - 1) ? e + "es" : !0 === sr.test(e) ? e.slice(0, -1) + "ies" : e + "s"
                    },
                    PastTense: function(e) {
                        return "e" === e.charAt(e.length - 1) ? e + "d" : "ed" === e.substr(-2) ? e : !0 === sr.test(e) ? e.slice(0, -1) + "ied" : e + "ed"
                    }
                },
                lr = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = {};
                    return t && t.irregulars && !0 === t.irregulars.verbs.hasOwnProperty(e) && (r = Object.assign({}, t.irregulars.verbs[e])), void 0 === (r = Object.assign({}, or(e), r)).Gerund && (r.Gerund = ur.Gerund(e)), void 0 === r.PastTense && (r.PastTense = ur.PastTense(e)), void 0 === r.PresentTense && (r.PresentTense = ur.PresentTense(e)), r
                },
                cr = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/],
                dr = [/ary$/],
                hr = {
                    nice: "nicest",
                    late: "latest",
                    hard: "hardest",
                    inner: "innermost",
                    outer: "outermost",
                    far: "furthest",
                    worse: "worst",
                    bad: "worst",
                    good: "best",
                    big: "biggest",
                    large: "largest"
                },
                gr = [{
                    reg: /y$/i,
                    repl: "iest"
                }, {
                    reg: /([aeiou])t$/i,
                    repl: "$1ttest"
                }, {
                    reg: /([aeou])de$/i,
                    repl: "$1dest"
                }, {
                    reg: /nge$/i,
                    repl: "ngest"
                }, {
                    reg: /([aeiou])te$/i,
                    repl: "$1test"
                }],
                pr = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/],
                mr = [/ary$/, /ous$/],
                fr = {
                    grey: "greyer",
                    gray: "grayer",
                    green: "greener",
                    yellow: "yellower",
                    red: "redder",
                    good: "better",
                    well: "better",
                    bad: "worse",
                    sad: "sadder",
                    big: "bigger"
                },
                vr = [{
                    reg: /y$/i,
                    repl: "ier"
                }, {
                    reg: /([aeiou])t$/i,
                    repl: "$1tter"
                }, {
                    reg: /([aeou])de$/i,
                    repl: "$1der"
                }, {
                    reg: /nge$/i,
                    repl: "nger"
                }],
                br = {
                    toSuperlative: function(e) {
                        if (hr.hasOwnProperty(e)) return hr[e];
                        for (var t = 0; t < gr.length; t++)
                            if (gr[t].reg.test(e)) return e.replace(gr[t].reg, gr[t].repl);
                        for (var r = 0; r < dr.length; r++)
                            if (!0 === dr[r].test(e)) return null;
                        for (var n = 0; n < cr.length; n++)
                            if (!0 === cr[n].test(e)) return "e" === e.charAt(e.length - 1) ? e + "st" : e + "est";
                        return e + "est"
                    },
                    toComparative: function(e) {
                        if (fr.hasOwnProperty(e)) return fr[e];
                        for (var t = 0; t < vr.length; t++)
                            if (!0 === vr[t].reg.test(e)) return e.replace(vr[t].reg, vr[t].repl);
                        for (var r = 0; r < mr.length; r++)
                            if (!0 === mr[r].test(e)) return null;
                        for (var n = 0; n < pr.length; n++)
                            if (!0 === pr[n].test(e)) return e + "er";
                        return !0 === /e$/.test(e) ? e + "r" : e + "er"
                    }
                },
                yr = function(e) {
                    var t = {},
                        r = br.toSuperlative(e);
                    r && (t.Superlative = r);
                    var n = br.toComparative(e);
                    return n && (t.Comparative = n), t
                },
                wr = {
                    a: [
                        [/(antenn|formul|nebul|vertebr|vit)a$/i, "$1ae"],
                        [/([ti])a$/i, "$1a"]
                    ],
                    e: [
                        [/(kn|l|w)ife$/i, "$1ives"],
                        [/(hive)$/i, "$1s"],
                        [/([m|l])ouse$/i, "$1ice"],
                        [/([m|l])ice$/i, "$1ice"]
                    ],
                    f: [
                        [/^(dwar|handkerchie|hoo|scar|whar)f$/i, "$1ves"],
                        [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, "$1ves"]
                    ],
                    i: [
                        [/(octop|vir)i$/i, "$1i"]
                    ],
                    m: [
                        [/([ti])um$/i, "$1a"]
                    ],
                    n: [
                        [/^(oxen)$/i, "$1"]
                    ],
                    o: [
                        [/(al|ad|at|er|et|ed|ad)o$/i, "$1oes"]
                    ],
                    s: [
                        [/(ax|test)is$/i, "$1es"],
                        [/(alias|status)$/i, "$1es"],
                        [/sis$/i, "ses"],
                        [/(bu)s$/i, "$1ses"],
                        [/(sis)$/i, "ses"],
                        [/^(?!talis|.*hu)(.*)man$/i, "$1men"],
                        [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, "$1i"]
                    ],
                    x: [
                        [/(matr|vert|ind|cort)(ix|ex)$/i, "$1ices"],
                        [/^(ox)$/i, "$1en"]
                    ],
                    y: [
                        [/([^aeiouy]|qu)y$/i, "$1ies"]
                    ],
                    z: [
                        [/(quiz)$/i, "$1zes"]
                    ]
                },
                kr = /(x|ch|sh|s|z)$/,
                Ar = function(e) {
                    var t = e[e.length - 1];
                    if (!0 === wr.hasOwnProperty(t))
                        for (var r = 0; r < wr[t].length; r += 1) {
                            var n = wr[t][r][0];
                            if (!0 === n.test(e)) return e.replace(n, wr[t][r][1])
                        }
                    return null
                },
                xr = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = t.irregulars.nouns;
                    if (r.hasOwnProperty(e)) return r[e];
                    var n = Ar(e);
                    return null !== n ? n : kr.test(e) ? e + "es" : e + "s"
                },
                $r = [
                    [/([^v])ies$/i, "$1y"],
                    [/ises$/i, "isis"],
                    [/(kn|[^o]l|w)ives$/i, "$1ife"],
                    [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, "$1f"],
                    [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, "$1f"],
                    [/(antenn|formul|nebul|vertebr|vit)ae$/i, "$1a"],
                    [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, "$1us"],
                    [/(buffal|tomat|tornad)(oes)$/i, "$1o"],
                    [/(eas)es$/i, "$1e"],
                    [/(..[aeiou]s)es$/i, "$1"],
                    [/(vert|ind|cort)(ices)$/i, "$1ex"],
                    [/(matr|append)(ices)$/i, "$1ix"],
                    [/(x|ch|ss|sh|z|o)es$/i, "$1"],
                    [/men$/i, "man"],
                    [/(n)ews$/i, "$1ews"],
                    [/([ti])a$/i, "$1um"],
                    [/([^aeiouy]|qu)ies$/i, "$1y"],
                    [/(s)eries$/i, "$1eries"],
                    [/(m)ovies$/i, "$1ovie"],
                    [/([m|l])ice$/i, "$1ouse"],
                    [/(cris|ax|test)es$/i, "$1is"],
                    [/(alias|status)es$/i, "$1"],
                    [/(ss)$/i, "$1"],
                    [/(ics)$/i, "$1"],
                    [/s$/i, ""]
                ],
                Pr = function(e, t) {
                    var r, n = t.irregulars.nouns,
                        a = (r = n, Object.keys(r).reduce((function(e, t) {
                            return e[r[t]] = t, e
                        }), {}));
                    if (a.hasOwnProperty(e)) return a[e];
                    for (var i = 0; i < $r.length; i++)
                        if (!0 === $r[i][0].test(e)) return e = e.replace($r[i][0], $r[i][1]);
                    return e
                },
                Br = {
                    Participle: [{
                        reg: /own$/i,
                        to: "ow"
                    }, {
                        reg: /(.)un([g|k])$/i,
                        to: "$1in$2"
                    }],
                    Actor: [{
                        reg: /(er)er$/i,
                        to: "$1"
                    }],
                    PresentTense: [{
                        reg: /(..)(ies)$/i,
                        to: "$1y"
                    }, {
                        reg: /(tch|sh)es$/i,
                        to: "$1"
                    }, {
                        reg: /(ss|zz)es$/i,
                        to: "$1"
                    }, {
                        reg: /([tzlshicgrvdnkmu])es$/i,
                        to: "$1e"
                    }, {
                        reg: /(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,
                        to: "$1"
                    }, {
                        reg: /(ow)s$/i,
                        to: "$1"
                    }, {
                        reg: /(op)s$/i,
                        to: "$1"
                    }, {
                        reg: /([eirs])ts$/i,
                        to: "$1t"
                    }, {
                        reg: /(ll)s$/i,
                        to: "$1"
                    }, {
                        reg: /(el)s$/i,
                        to: "$1"
                    }, {
                        reg: /(ip)es$/i,
                        to: "$1e"
                    }, {
                        reg: /ss$/i,
                        to: "ss"
                    }, {
                        reg: /s$/i,
                        to: ""
                    }],
                    Gerund: [{
                        reg: /(..)(p|d|t|g){2}ing$/i,
                        to: "$1$2"
                    }, {
                        reg: /(ll|ss|zz)ing$/i,
                        to: "$1"
                    }, {
                        reg: /([^aeiou])ying$/i,
                        to: "$1y"
                    }, {
                        reg: /([^ae]i.)ing$/i,
                        to: "$1e"
                    }, {
                        reg: /(ea[dklnrtv])ing$/i,
                        to: "$1"
                    }, {
                        reg: /(ch|sh)ing$/i,
                        to: "$1"
                    }, {
                        reg: /(z)ing$/i,
                        to: "$1e"
                    }, {
                        reg: /(a[gdkvtc])ing$/i,
                        to: "$1e"
                    }, {
                        reg: /(u[rtcbn])ing$/i,
                        to: "$1e"
                    }, {
                        reg: /([^o]o[bdknprv])ing$/i,
                        to: "$1e"
                    }, {
                        reg: /([tbckg]l)ing$/i,
                        to: "$1e"
                    }, {
                        reg: /(c|s)ing$/i,
                        to: "$1e"
                    }, {
                        reg: /(..)ing$/i,
                        to: "$1"
                    }],
                    PastTense: [{
                        reg: /(ued)$/i,
                        to: "ue"
                    }, {
                        reg: /a([^aeiouy])ed$/i,
                        to: "a$1e"
                    }, {
                        reg: /([aeiou]zz)ed$/i,
                        to: "$1"
                    }, {
                        reg: /(e|i)lled$/i,
                        to: "$1ll"
                    }, {
                        reg: /(.)(sh|ch)ed$/i,
                        to: "$1$2"
                    }, {
                        reg: /(tl|gl)ed$/i,
                        to: "$1e"
                    }, {
                        reg: /(um?pt?)ed$/i,
                        to: "$1"
                    }, {
                        reg: /(ss)ed$/i,
                        to: "$1"
                    }, {
                        reg: /pped$/i,
                        to: "p"
                    }, {
                        reg: /tted$/i,
                        to: "t"
                    }, {
                        reg: /(..)gged$/i,
                        to: "$1g"
                    }, {
                        reg: /(..)lked$/i,
                        to: "$1lk"
                    }, {
                        reg: /([^aeiouy][aeiou])ked$/i,
                        to: "$1ke"
                    }, {
                        reg: /(.[aeiou])led$/i,
                        to: "$1l"
                    }, {
                        reg: /(..)(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,
                        to: "$1$2"
                    }, {
                        reg: /(.ut)ed$/i,
                        to: "$1e"
                    }, {
                        reg: /(.pt)ed$/i,
                        to: "$1"
                    }, {
                        reg: /(us)ed$/i,
                        to: "$1e"
                    }, {
                        reg: /(dd)ed$/i,
                        to: "$1"
                    }, {
                        reg: /(..[^aeiouy])ed$/i,
                        to: "$1e"
                    }, {
                        reg: /(..)ied$/i,
                        to: "$1y"
                    }, {
                        reg: /(.o)ed$/i,
                        to: "$1o"
                    }, {
                        reg: /(..i)ed$/i,
                        to: "$1"
                    }, {
                        reg: /(.a[^aeiou])ed$/i,
                        to: "$1"
                    }, {
                        reg: /([aeiou][^aeiou])ed$/i,
                        to: "$1e"
                    }, {
                        reg: /([rl])ew$/i,
                        to: "$1ow"
                    }, {
                        reg: /([pl])t$/i,
                        to: "$1t"
                    }]
                },
                Gr = {
                    Gerund: ["ing"],
                    Actor: ["erer"],
                    Infinitive: ["ate", "ize", "tion", "rify", "then", "ress", "ify", "age", "nce", "ect", "ise", "ine", "ish", "ace", "ash", "ure", "tch", "end", "ack", "and", "ute", "ade", "ock", "ite", "ase", "ose", "use", "ive", "int", "nge", "lay", "est", "ain", "ant", "ent", "eed", "er", "le", "own", "unk", "ung", "en"],
                    PastTense: ["ed", "lt", "nt", "pt", "ew", "ld"],
                    PresentTense: ["rks", "cks", "nks", "ngs", "mps", "tes", "zes", "ers", "les", "acks", "ends", "ands", "ocks", "lays", "eads", "lls", "els", "ils", "ows", "nds", "ays", "ams", "ars", "ops", "ffs", "als", "urs", "lds", "ews", "ips", "es", "ts", "ns"]
                },
                Cr = Gr = Object.keys(Gr).reduce((function(e, t) {
                    return Gr[t].forEach((function(r) {
                        return e[r] = t
                    })), e
                }), {}),
                jr = {
                    nouns: {
                        addendum: "addenda",
                        alga: "algae",
                        alumna: "alumnae",
                        alumnus: "alumni",
                        analysis: "analyses",
                        antenna: "antennae",
                        appendix: "appendices",
                        avocado: "avocados",
                        axis: "axes",
                        bacillus: "bacilli",
                        barracks: "barracks",
                        beau: "beaux",
                        bus: "buses",
                        cactus: "cacti",
                        chateau: "chateaux",
                        child: "children",
                        circus: "circuses",
                        clothes: "clothes",
                        corpus: "corpora",
                        criterion: "criteria",
                        curriculum: "curricula",
                        database: "databases",
                        deer: "deer",
                        diagnosis: "diagnoses",
                        echo: "echoes",
                        embargo: "embargoes",
                        epoch: "epochs",
                        foot: "feet",
                        formula: "formulae",
                        fungus: "fungi",
                        genus: "genera",
                        goose: "geese",
                        halo: "halos",
                        hippopotamus: "hippopotami",
                        index: "indices",
                        larva: "larvae",
                        leaf: "leaves",
                        libretto: "libretti",
                        loaf: "loaves",
                        man: "men",
                        matrix: "matrices",
                        memorandum: "memoranda",
                        modulus: "moduli",
                        mosquito: "mosquitoes",
                        mouse: "mice",
                        move: "moves",
                        nebula: "nebulae",
                        nucleus: "nuclei",
                        octopus: "octopi",
                        opus: "opera",
                        ovum: "ova",
                        ox: "oxen",
                        parenthesis: "parentheses",
                        person: "people",
                        phenomenon: "phenomena",
                        prognosis: "prognoses",
                        quiz: "quizzes",
                        radius: "radii",
                        referendum: "referenda",
                        rodeo: "rodeos",
                        sex: "sexes",
                        shoe: "shoes",
                        sombrero: "sombreros",
                        stimulus: "stimuli",
                        stomach: "stomachs",
                        syllabus: "syllabi",
                        synopsis: "synopses",
                        tableau: "tableaux",
                        thesis: "theses",
                        thief: "thieves",
                        tooth: "teeth",
                        tornado: "tornados",
                        tuxedo: "tuxedos",
                        vertebra: "vertebrae"
                    },
                    verbs: rr
                },
                Dr = {
                    conjugate: lr,
                    adjectives: yr,
                    toPlural: xr,
                    toSingular: Pr,
                    toInfinitive: function(e, t, r) {
                        if (!e) return "";
                        if (!0 === t.words.hasOwnProperty(e))
                            for (var n = t.irregulars.verbs, a = Object.keys(n), i = 0; i < a.length; i++)
                                for (var o = Object.keys(n[a[i]]), s = 0; s < o.length; s++)
                                    if (e === n[a[i]][o[s]]) return a[i];
                        if ((r = r || function(e) {
                                var t = e.substr(e.length - 3);
                                if (!0 === Cr.hasOwnProperty(t)) return Cr[t];
                                var r = e.substr(e.length - 2);
                                return !0 === Cr.hasOwnProperty(r) ? Cr[r] : "s" === e.substr(e.length - 1) ? "PresentTense" : null
                            }(e)) && Br[r])
                            for (var u = 0; u < Br[r].length; u++) {
                                var l = Br[r][u];
                                if (!0 === l.reg.test(e)) return e.replace(l.reg, l.to)
                            }
                        return e
                    }
                },
                Er = !1,
                Nr = function() {
                    function e() {
                        g(this, e), Object.defineProperty(this, "words", {
                            enumerable: !1,
                            value: Qt,
                            writable: !0
                        }), Object.defineProperty(this, "hasCompound", {
                            enumerable: !1,
                            value: {},
                            writable: !0
                        }), Object.defineProperty(this, "irregulars", {
                            enumerable: !1,
                            value: jr,
                            writable: !0
                        }), Object.defineProperty(this, "tags", {
                            enumerable: !1,
                            value: Object.assign({}, Vt),
                            writable: !0
                        }), Object.defineProperty(this, "transforms", {
                            enumerable: !1,
                            value: Dr,
                            writable: !0
                        }), Object.defineProperty(this, "taggers", {
                            enumerable: !1,
                            value: [],
                            writable: !0
                        }), this.unpackWords(Pt), this.addIrregulars(), Object.defineProperty(this, "cache", {
                            enumerable: !1,
                            value: {
                                abbreviations: this.getByTag("Abbreviation")
                            }
                        })
                    }
                    return m(e, [{
                        key: "verbose",
                        value: function(e) {
                            return Er = e, this
                        }
                    }, {
                        key: "isVerbose",
                        value: function() {
                            return Er
                        }
                    }, {
                        key: "getByTag",
                        value: function(e) {
                            for (var t = this.words, r = {}, n = Object.keys(t), a = 0; a < n.length; a++) "string" == typeof t[n[a]] ? t[n[a]] === e && (r[n[a]] = !0) : t[n[a]].some((function(t) {
                                return t === e
                            })) && (r[n[a]] = !0);
                            return r
                        }
                    }, {
                        key: "unpackWords",
                        value: function(e) {
                            for (var t = Object.keys(e), r = 0; r < t.length; r++)
                                for (var n = Object.keys(Wt(e[t[r]])), a = 0; a < n.length; a++) Rt(n[a], t[r], this.words), Kt(n[a], t[r], this)
                        }
                    }, {
                        key: "addWords",
                        value: function(e) {
                            for (var t = Object.keys(e), r = 0; r < t.length; r++) {
                                var n = t[r].toLowerCase();
                                Rt(n, e[t[r]], this.words), Kt(n, e[t[r]], this)
                            }
                        }
                    }, {
                        key: "addIrregulars",
                        value: function() {
                            return Ut(this), this
                        }
                    }, {
                        key: "addTags",
                        value: function(e) {
                            return e = Object.assign({}, e), this.tags = Object.assign(this.tags, e), this.tags = Tt(this.tags), this
                        }
                    }, {
                        key: "postProcess",
                        value: function(e) {
                            return this.taggers.push(e), this
                        }
                    }, {
                        key: "stats",
                        value: function() {
                            return {
                                words: Object.keys(this.words).length,
                                plurals: Object.keys(this.irregulars.nouns).length,
                                conjugations: Object.keys(this.irregulars.verbs).length,
                                compounds: Object.keys(this.hasCompound).length,
                                postProcessors: this.taggers.length
                            }
                        }
                    }]), e
                }(),
                Fr = function(e) {
                    return JSON.parse(JSON.stringify(e))
                };
            Nr.prototype.clone = function() {
                var e = new Nr;
                return e.words = Object.assign({}, this.words), e.hasCompound = Object.assign({}, this.hasCompound), e.irregulars = Fr(this.irregulars), e.tags = Fr(this.tags), e.transforms = this.transforms, e.taggers = this.taggers, e
            };
            var zr = Nr,
                Or = L((function(e, t) {
                    t.all = function() {
                        return this.parents()[0] || this
                    }, t.parent = function() {
                        return this.from ? this.from : this
                    }, t.parents = function(e) {
                        var t = [];
                        return function e(r) {
                            r.from && (t.push(r.from), e(r.from))
                        }(this), t = t.reverse(), "number" == typeof e ? t[e] : t
                    }, t.clone = function(e) {
                        var t = this.list.map((function(t) {
                            return t.clone(e)
                        }));
                        return this.buildFrom(t)
                    }, t.wordCount = function() {
                        return this.list.reduce((function(e, t) {
                            return e += t.wordCount()
                        }), 0)
                    }, t.wordcount = t.wordCount
                })),
                _r = L((function(e, t) {
                    t.first = function(e) {
                        return void 0 === e ? this.get(0) : this.slice(0, e)
                    }, t.last = function(e) {
                        if (void 0 === e) return this.get(this.list.length - 1);
                        var t = this.list.length;
                        return this.slice(t - e, t)
                    }, t.slice = function(e, t) {
                        var r = this.list.slice(e, t);
                        return this.buildFrom(r)
                    }, t.eq = function(e) {
                        var t = this.list[e];
                        return void 0 === t ? this.buildFrom([]) : this.buildFrom([t])
                    }, t.get = t.eq, t.firstTerms = function() {
                        return this.match("^.")
                    }, t.firstTerm = t.firstTerms, t.lastTerms = function() {
                        return this.match(".$")
                    }, t.lastTerm = t.lastTerms, t.termList = function(e) {
                        for (var t = [], r = 0; r < this.list.length; r++)
                            for (var n = this.list[r].terms(), a = 0; a < n.length; a++)
                                if (t.push(n[a]), void 0 !== e && void 0 !== t[e]) return t[e];
                        return t
                    };
                    t.groups = function(e) {
                        return void 0 === e ? function(e) {
                            for (var t = {}, r = {}, n = function(t) {
                                    for (var n = e.list[t], a = Object.keys(n.groups).map((function(e) {
                                            return n.groups[e]
                                        })), i = 0; i < a.length; i++) {
                                        var o = a[i],
                                            s = o.group,
                                            u = o.start,
                                            l = o.length;
                                        r[s] || (r[s] = []), r[s].push(n.buildFrom(u, l))
                                    }
                                }, a = 0; a < e.list.length; a++) n(a);
                            for (var i = Object.keys(r), o = 0; o < i.length; o++) {
                                var s = i[o];
                                t[s] = e.buildFrom(r[s])
                            }
                            return t
                        }(this) : ("number" == typeof e && (e = String(e)), function(e, t) {
                            for (var r = [], n = function(n) {
                                    var a = e.list[n],
                                        i = Object.keys(a.groups);
                                    (i = i.filter((function(e) {
                                        return a.groups[e].group === t
                                    }))).forEach((function(e) {
                                        r.push(a.buildFrom(a.groups[e].start, a.groups[e].length))
                                    }))
                                }, a = 0; a < e.list.length; a++) n(a);
                            return e.buildFrom(r)
                        }(this, e) || this.buildFrom([]))
                    }, t.group = t.groups, t.sentences = function(e) {
                        var t = [];
                        return this.list.forEach((function(e) {
                            t.push(e.fullSentence())
                        })), "number" == typeof e ? this.buildFrom([t[e]]) : this.buildFrom(t)
                    }, t.sentence = t.sentences
                })),
                Tr = function(e, t) {
                    if (e._cache && !0 === e._cache.set) {
                        for (var r = (s = [], u = [], t.forEach((function(e) {
                                !0 !== e.optional && !0 !== e.negative && (void 0 !== e.tag && s.push(e.tag), void 0 !== e.word && u.push(e.word))
                            })), {
                                tags: s,
                                words: u
                            }), n = r.words, a = r.tags, i = 0; i < n.length; i++)
                            if (void 0 === e._cache.words[n[i]]) return !1;
                        for (var o = 0; o < a.length; o++)
                            if (void 0 === e._cache.tags[a[o]]) return !1
                    }
                    var s, u;
                    return !0
                },
                Ir = L((function(e, t) {
                    t.match = function(e, t) {
                        var r = Ue(e);
                        if (0 === r.length) return this.buildFrom([]);
                        if (!1 === Tr(this, r)) return this.buildFrom([]);
                        var n = this.list.reduce((function(e, t) {
                            return e.concat(t.match(r))
                        }), []);
                        return null != t && "" !== t ? this.buildFrom(n).groups(t) : this.buildFrom(n)
                    }, t.not = function(e) {
                        var t = Ue(e);
                        if (0 === t.length || !1 === Tr(this, t)) return this;
                        var r = this.list.reduce((function(e, r) {
                            return e.concat(r.not(t))
                        }), []);
                        return this.buildFrom(r)
                    }, t.matchOne = function(e) {
                        var t = Ue(e);
                        if (!1 === Tr(this, t)) return this.buildFrom([]);
                        for (var r = 0; r < this.list.length; r++) {
                            var n = this.list[r].match(t, !0);
                            return this.buildFrom(n)
                        }
                        return this.buildFrom([])
                    }, t.if = function(e) {
                        var t = Ue(e);
                        if (!1 === Tr(this, t)) return this.buildFrom([]);
                        var r = this.list.filter((function(e) {
                            return !0 === e.has(t)
                        }));
                        return this.buildFrom(r)
                    }, t.ifNo = function(e) {
                        var t = Ue(e),
                            r = this.list.filter((function(e) {
                                return !1 === e.has(t)
                            }));
                        return this.buildFrom(r)
                    }, t.has = function(e) {
                        var t = Ue(e);
                        return !1 !== Tr(this, t) && this.list.some((function(e) {
                            return !0 === e.has(t)
                        }))
                    }, t.lookAhead = function(e) {
                        e || (e = ".*");
                        var t = Ue(e),
                            r = [];
                        return this.list.forEach((function(e) {
                            r = r.concat(e.lookAhead(t))
                        })), r = r.filter((function(e) {
                            return e
                        })), this.buildFrom(r)
                    }, t.lookAfter = t.lookAhead, t.lookBehind = function(e) {
                        e || (e = ".*");
                        var t = Ue(e),
                            r = [];
                        return this.list.forEach((function(e) {
                            r = r.concat(e.lookBehind(t))
                        })), r = r.filter((function(e) {
                            return e
                        })), this.buildFrom(r)
                    }, t.lookBefore = t.lookBehind, t.before = function(e) {
                        var t = Ue(e),
                            r = this.if(t).list.map((function(e) {
                                var r = e.terms().map((function(e) {
                                        return e.id
                                    })),
                                    n = e.match(t)[0],
                                    a = r.indexOf(n.start);
                                return 0 === a || -1 === a ? null : e.buildFrom(e.start, a)
                            }));
                        return r = r.filter((function(e) {
                            return null !== e
                        })), this.buildFrom(r)
                    }, t.after = function(e) {
                        var t = Ue(e),
                            r = this.if(t).list.map((function(e) {
                                var r = e.terms(),
                                    n = r.map((function(e) {
                                        return e.id
                                    })),
                                    a = e.match(t)[0],
                                    i = n.indexOf(a.start);
                                if (-1 === i || !r[i + a.length]) return null;
                                var o = r[i + a.length].id,
                                    s = e.length - i - a.length;
                                return e.buildFrom(o, s)
                            }));
                        return r = r.filter((function(e) {
                            return null !== e
                        })), this.buildFrom(r)
                    }, t.hasAfter = function(e) {
                        return this.filter((function(t) {
                            return t.lookAfter(e).found
                        }))
                    }, t.hasBefore = function(e) {
                        return this.filter((function(t) {
                            return t.lookBefore(e).found
                        }))
                    }
                })),
                Vr = function(e, t, r, n) {
                    var a = [];
                    "string" == typeof e && (a = e.split(" ")), t.list.forEach((function(i) {
                        var o = i.terms();
                        !0 === r && (o = o.filter((function(r) {
                            return r.canBe(e, t.world)
                        }))), o.forEach((function(r, i) {
                            a.length > 1 ? a[i] && "." !== a[i] && r.tag(a[i], n, t.world) : r.tag(e, n, t.world)
                        }))
                    }))
                },
                Hr = {
                    tag: function(e, t) {
                        return e ? (Vr(e, this, !1, t), this) : this
                    },
                    tagSafe: function(e, t) {
                        return e ? (Vr(e, this, !0, t), this) : this
                    },
                    unTag: function(e, t) {
                        var r = this;
                        return this.list.forEach((function(n) {
                            n.terms().forEach((function(n) {
                                return n.unTag(e, t, r.world)
                            }))
                        })), this
                    },
                    canBe: function(e) {
                        if (!e) return this;
                        var t = this.world,
                            r = this.list.reduce((function(r, n) {
                                return r.concat(n.canBe(e, t))
                            }), []);
                        return this.buildFrom(r)
                    }
                },
                Sr = {
                    map: function(e) {
                        var t = this;
                        if (!e) return this;
                        var r = this.list.map((function(r, n) {
                            var a = t.buildFrom([r]);
                            a.from = null;
                            var i = e(a, n);
                            return i && i.list && i.list[0] ? i.list[0] : i
                        }));
                        return 0 === (r = r.filter((function(e) {
                            return e
                        }))).length ? this.buildFrom(r) : "object" !== h(r[0]) || "Phrase" !== r[0].isA ? r : this.buildFrom(r)
                    },
                    forEach: function(e, t) {
                        var r = this;
                        return e ? (this.list.forEach((function(n, a) {
                            var i = r.buildFrom([n]);
                            !0 === t && (i.from = null), e(i, a)
                        })), this) : this
                    },
                    filter: function(e) {
                        var t = this;
                        if (!e) return this;
                        var r = this.list.filter((function(r, n) {
                            var a = t.buildFrom([r]);
                            return a.from = null, e(a, n)
                        }));
                        return this.buildFrom(r)
                    },
                    find: function(e) {
                        var t = this;
                        if (!e) return this;
                        var r = this.list.find((function(r, n) {
                            var a = t.buildFrom([r]);
                            return a.from = null, e(a, n)
                        }));
                        return r ? this.buildFrom([r]) : void 0
                    },
                    some: function(e) {
                        var t = this;
                        return e ? this.list.some((function(r, n) {
                            var a = t.buildFrom([r]);
                            return a.from = null, e(a, n)
                        })) : this
                    },
                    random: function(e) {
                        if (!this.found) return this;
                        var t = Math.floor(Math.random() * this.list.length);
                        if (void 0 === e) {
                            var r = [this.list[t]];
                            return this.buildFrom(r)
                        }
                        return t + e > this.length && (t = (t = this.length - e) < 0 ? 0 : t), this.slice(t, t + e)
                    }
                },
                Mr = function(e) {
                    return e.split(/[ -]/g)
                },
                Lr = function(e, t, r) {
                    for (var n = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                r = {};
                            return e.forEach((function(e, n) {
                                var a = !0;
                                void 0 !== t[n] && (a = t[n]), e = (e = (e || "").toLowerCase()).replace(/[,;.!?]+$/, "");
                                var i = Mr(e).map((function(e) {
                                    return e.trim()
                                }));
                                r[i[0]] = r[i[0]] || {}, 1 === i.length ? r[i[0]].value = a : (r[i[0]].more = r[i[0]].more || [], r[i[0]].more.push({
                                    rest: i.slice(1),
                                    value: a
                                }))
                            })), r
                        }(e, t), a = [], i = function(e) {
                            for (var t = r.list[e], i = t.terms().map((function(e) {
                                    return e.reduced
                                })), o = function(e) {
                                    void 0 !== n[i[e]] && (void 0 !== n[i[e]].more && n[i[e]].more.forEach((function(r) {
                                        void 0 !== i[e + r.rest.length] && (!0 === r.rest.every((function(t, r) {
                                            return t === i[e + r + 1]
                                        })) && a.push({
                                            id: t.terms()[e].id,
                                            value: r.value,
                                            length: r.rest.length + 1
                                        }))
                                    })), void 0 !== n[i[e]].value && a.push({
                                        id: t.terms()[e].id,
                                        value: n[i[e]].value,
                                        length: 1
                                    }))
                                }, s = 0; s < i.length; s++) o(s)
                        }, o = 0; o < r.list.length; o++) i(o);
                    return a
                },
                qr = L((function(e, t) {
                    t.lookup = function(e) {
                        var t, r = this,
                            n = [],
                            a = (t = e) && "[object Object]" === Object.prototype.toString.call(t);
                        !0 === a && (e = Object.keys(e).map((function(t) {
                            return n.push(e[t]), t
                        }))), "string" == typeof e && (e = [e]), !0 !== this._cache.set && this.cache();
                        var i = Lr(e, n, this),
                            o = this.list[0];
                        if (!0 === a) {
                            var s = {};
                            return i.forEach((function(e) {
                                s[e.value] = s[e.value] || [], s[e.value].push(o.buildFrom(e.id, e.length))
                            })), Object.keys(s).forEach((function(e) {
                                s[e] = r.buildFrom(s[e])
                            })), s
                        }
                        return i = i.map((function(e) {
                            return o.buildFrom(e.id, e.length)
                        })), this.buildFrom(i)
                    }, t.lookUp = t.lookup
                })),
                Wr = {
                    cache: function(e) {
                        var t = this;
                        e = e || {};
                        var r = {},
                            n = {};
                        return this._cache.words = r, this._cache.tags = n, this._cache.set = !0, this.list.forEach((function(a, i) {
                            a.cache = a.cache || {}, a.terms().forEach((function(a) {
                                r[a.reduced] && !r.hasOwnProperty(a.reduced) || (r[a.reduced] = r[a.reduced] || [], r[a.reduced].push(i), Object.keys(a.tags).forEach((function(e) {
                                    n[e] = n[e] || [], n[e].push(i)
                                })), e.root && (a.setRoot(t.world), r[a.root] = !0))
                            }))
                        })), this
                    },
                    uncache: function() {
                        return this._cache = {}, this.list.forEach((function(e) {
                            e.cache = {}
                        })), this.parents().forEach((function(e) {
                            e._cache = {}, e.list.forEach((function(e) {
                                e.cache = {}
                            }))
                        })), this
                    }
                },
                Jr = function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                },
                Rr = {
                    replaceWith: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e ? (!0 === r && (r = {
                            keepTags: !0
                        }), !1 === r && (r = {
                            keepTags: !1
                        }), r = r || {}, this.uncache(), this.list.forEach((function(n) {
                            var a, i = e;
                            if ("function" == typeof e && (i = e(n)), i && "object" === h(i) && "Doc" === i.isA) a = i.list, t.pool().merge(i.pool());
                            else {
                                if ("string" != typeof i) return;
                                !1 !== r.keepCase && n.terms(0).isTitleCase() && (i = Jr(i)), a = xt(i, t.world, t.pool());
                                var o = t.buildFrom(a);
                                o.tagger(), a = o.list
                            }
                            if (!0 === r.keepTags) {
                                var s = n.json({
                                    terms: {
                                        tags: !0
                                    }
                                }).terms;
                                a[0].terms().forEach((function(e, r) {
                                    s[r] && e.tagSafe(s[r].tags, "keptTag", t.world)
                                }))
                            }
                            n.replace(a[0], t)
                        })), this) : this.delete()
                    },
                    replace: function(e, t, r) {
                        return void 0 === t ? this.replaceWith(e, r) : (this.match(e).replaceWith(t, r), this)
                    }
                },
                Kr = L((function(e, t) {
                    t.append = function(e) {
                        var t = this;
                        return e ? (this.uncache(), this.list.forEach((function(r) {
                            var n = xt(e, t.world, t.pool())[0];
                            t.buildFrom([n]).tagger(), r.append(n, t)
                        })), this) : this
                    }, t.insertAfter = t.append, t.insertAt = t.append, t.prepend = function(e) {
                        var t = this;
                        return e ? (this.uncache(), this.list.forEach((function(r) {
                            var n = xt(e, t.world, t.pool())[0];
                            t.buildFrom([n]).tagger(), r.prepend(n, t)
                        })), this) : this
                    }, t.insertBefore = t.prepend, t.concat = function() {
                        this.uncache();
                        for (var e = this.list.slice(0), t = 0; t < arguments.length; t++) {
                            var r = arguments[t];
                            if ("string" == typeof r) {
                                var n = xt(r, this.world);
                                e = e.concat(n)
                            } else "Doc" === r.isA ? e = e.concat(r.list) : "Phrase" === r.isA && e.push(r)
                        }
                        return this.buildFrom(e)
                    }, t.delete = function(e) {
                        var t = this;
                        this.uncache();
                        var r = this;
                        return e && (r = this.match(e)), r.list.forEach((function(e) {
                            return e.delete(t)
                        })), this
                    }, t.remove = t.delete
                })),
                Ur = {
                    clean: !0,
                    reduced: !0,
                    root: !0
                },
                Qr = {
                    text: function(e) {
                        var t = this;
                        e = e || {};
                        var r = !1;
                        0 === this.parents().length && (r = !0), ("root" === e || "object" === h(e) && e.root) && this.list.forEach((function(e) {
                            e.terms().forEach((function(e) {
                                null === e.root && e.setRoot(t.world)
                            }))
                        }));
                        var n = this.list.reduce((function(n, a, i) {
                            var o = !r && 0 === i,
                                s = !r && i === t.list.length - 1;
                            return n + a.text(e, o, s)
                        }), "");
                        return !0 !== Ur[e] && !0 !== e.reduced && !0 !== e.clean && !0 !== e.root || (n = n.trim()), n
                    }
                },
                Zr = function(e, t, r) {
                    var n = function(e) {
                        var t = 0,
                            r = 0,
                            n = {};
                        return e.termList().forEach((function(e) {
                            n[e.id] = {
                                index: r,
                                start: t + e.pre.length,
                                length: e.text.length
                            }, t += e.pre.length + e.text.length + e.post.length, r += 1
                        })), n
                    }(e.all());
                    (r.terms.index || r.index) && t.forEach((function(e) {
                        e.terms.forEach((function(e) {
                            e.index = n[e.id].index
                        })), e.index = e.terms[0].index
                    })), (r.terms.offset || r.offset) && t.forEach((function(e) {
                        e.terms.forEach((function(e) {
                            e.offset = n[e.id] || {}
                        })), e.offset = e.terms[0].offset, e.offset.length = e.text.length
                    }))
                },
                Xr = L((function(e, t) {
                    var r = {
                            text: !0,
                            terms: !0,
                            trim: !0
                        },
                        n = function(e) {
                            return (e = Object.assign({}, r, e)).unique && (e.reduced = !0), e.offset && (e.text = !0, e.terms && !0 !== e.terms || (e.terms = {}), e.terms.offset = !0), (e.index || e.terms.index) && (e.terms = !0 === e.terms ? {} : e.terms, e.terms.id = !0), e
                        };
                    t.json = function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if ("number" == typeof t && this.list[t]) return this.list[t].json(r);
                        !0 === (t = n(t)).root && this.list.forEach((function(t) {
                            t.terms().forEach((function(t) {
                                null === t.root && t.setRoot(e.world)
                            }))
                        }));
                        var a = this.list.map((function(r) {
                            return r.json(t, e.world)
                        }));
                        if ((t.terms.offset || t.offset || t.terms.index || t.index) && Zr(this, a, t), t.frequency || t.freq || t.count) {
                            var i = {};
                            this.list.forEach((function(e) {
                                var t = e.text("reduced");
                                i[t] = i[t] || 0, i[t] += 1
                            })), this.list.forEach((function(e, t) {
                                a[t].count = i[e.text("reduced")]
                            }))
                        }
                        if (t.unique) {
                            var o = {};
                            a = a.filter((function(e) {
                                return !0 !== o[e.reduced] && (o[e.reduced] = !0, !0)
                            }))
                        }
                        return a
                    }, t.data = t.json
                })),
                Yr = L((function(e) {
                    var t = function(e, t) {
                        for (e = e.toString(); e.length < t;) e += " ";
                        return e
                    };
                    var r = {
                            green: "#7f9c6c",
                            red: "#914045",
                            blue: "#6699cc",
                            magenta: "#6D5685",
                            cyan: "#2D85A8",
                            yellow: "#e6d7b3",
                            black: "#303b50"
                        },
                        n = {
                            green: function(e) {
                                return "[32m" + e + "[0m"
                            },
                            red: function(e) {
                                return "[31m" + e + "[0m"
                            },
                            blue: function(e) {
                                return "[34m" + e + "[0m"
                            },
                            magenta: function(e) {
                                return "[35m" + e + "[0m"
                            },
                            cyan: function(e) {
                                return "[36m" + e + "[0m"
                            },
                            yellow: function(e) {
                                return "[33m" + e + "[0m"
                            },
                            black: function(e) {
                                return "[30m" + e + "[0m"
                            }
                        };
                    e.exports = function(e) {
                        return "undefined" != typeof window && window.document ? (function(e) {
                            var n = e.world.tags;
                            e.list.forEach((function(e) {
                                console.log('\n%c"' + e.text() + '"', "color: #e6d7b3;"), e.terms().forEach((function(e) {
                                    var a = Object.keys(e.tags),
                                        i = e.text || "-";
                                    e.implicit && (i = "[" + e.implicit + "]");
                                    var o = "'" + i + "'";
                                    o = t(o, 8);
                                    var s = a.find((function(e) {
                                            return n[e] && n[e].color
                                        })),
                                        u = "steelblue";
                                    n[s] && (u = n[s].color, u = r[u]), console.log("   ".concat(o, "  -  %c").concat(a.join(", ")), "color: ".concat(u || "steelblue", ";"))
                                }))
                            }))
                        }(e), e) : (console.log(n.blue("=====")), e.list.forEach((function(r) {
                            console.log(n.blue("  -----")), r.terms().forEach((function(r) {
                                var a = Object.keys(r.tags),
                                    i = r.text || "-";
                                r.implicit && (i = "[" + r.implicit + "]");
                                var o = "'" + (i = n.yellow(i)) + "'";
                                o = t(o, 18);
                                var s = n.blue("  ｜ ") + o + "  - " + function(e, t) {
                                    return (e = e.map((function(e) {
                                        if (!t.tags.hasOwnProperty(e)) return e;
                                        var r = t.tags[e].color || "blue";
                                        return n[r](e)
                                    }))).join(", ")
                                }(a, e.world);
                                console.log(s)
                            }))
                        })), console.log(""), e)
                    }
                })),
                en = function(e) {
                    var t = e.json({
                            text: !1,
                            terms: !1,
                            reduced: !0
                        }),
                        r = {};
                    t.forEach((function(e) {
                        r[e.reduced] || (e.count = 0, r[e.reduced] = e), r[e.reduced].count += 1
                    }));
                    var n = Object.keys(r).map((function(e) {
                        return r[e]
                    }));
                    return n.sort((function(e, t) {
                        return e.count > t.count ? -1 : e.count < t.count ? 1 : 0
                    })), n
                },
                tn = {
                    debug: function() {
                        return Yr(this), this
                    },
                    out: function(e) {
                        if ("text" === e) return this.text();
                        if ("normal" === e) return this.text("normal");
                        if ("json" === e) return this.json();
                        if ("offset" === e || "offsets" === e) return this.json({
                            offset: !0
                        });
                        if ("array" === e) return this.json({
                            terms: !1
                        }).map((function(e) {
                            return e.text
                        }));
                        if ("freq" === e || "frequency" === e) return en(this);
                        if ("terms" === e) {
                            var t = [];
                            return this.json({
                                text: !1,
                                terms: {
                                    text: !0
                                }
                            }).forEach((function(e) {
                                var r = e.terms.map((function(e) {
                                    return e.text
                                }));
                                r = r.filter((function(e) {
                                    return e
                                })), t = t.concat(r)
                            })), t
                        }
                        return "tags" === e ? this.list.map((function(e) {
                            return e.terms().reduce((function(e, t) {
                                return e[t.clean || t.implicit] = Object.keys(t.tags), e
                            }), {})
                        })) : "debug" === e ? (Yr(this), this) : this.text()
                    }
                },
                rn = {
                    alpha: function(e, t) {
                        var r = e.text("clean"),
                            n = t.text("clean");
                        return r < n ? -1 : r > n ? 1 : 0
                    },
                    length: function(e, t) {
                        var r = e.text().trim().length,
                            n = t.text().trim().length;
                        return r < n ? 1 : r > n ? -1 : 0
                    },
                    wordCount: function(e, t) {
                        var r = e.wordCount(),
                            n = t.wordCount();
                        return r < n ? 1 : r > n ? -1 : 0
                    }
                };
            rn.alphabetical = rn.alpha, rn.wordcount = rn.wordCount;
            var nn = {
                    index: !0,
                    sequence: !0,
                    seq: !0,
                    sequential: !0,
                    chron: !0,
                    chronological: !0
                },
                an = {
                    sort: function(e) {
                        return "freq" === (e = e || "alpha") || "frequency" === e || "topk" === e ? (r = {}, n = {
                            case: !0,
                            punctuation: !1,
                            whitespace: !0,
                            unicode: !0
                        }, (t = this).list.forEach((function(e) {
                            var t = e.text(n);
                            r[t] = r[t] || 0, r[t] += 1
                        })), t.list.sort((function(e, t) {
                            var a = r[e.text(n)],
                                i = r[t.text(n)];
                            return a < i ? 1 : a > i ? -1 : 0
                        })), t) : nn.hasOwnProperty(e) ? function(e) {
                            var t = {};
                            return e.json({
                                terms: {
                                    offset: !0
                                }
                            }).forEach((function(e) {
                                t[e.terms[0].id] = e.terms[0].offset.start
                            })), e.list = e.list.sort((function(e, r) {
                                return t[e.start] > t[r.start] ? 1 : t[e.start] < t[r.start] ? -1 : 0
                            })), e
                        }(this) : "function" == typeof(e = rn[e] || e) ? (this.list = this.list.sort(e), this) : this;
                        var t, r, n
                    },
                    reverse: function() {
                        var e = [].concat(this.list);
                        return e = e.reverse(), this.buildFrom(e)
                    },
                    unique: function() {
                        var e = [].concat(this.list),
                            t = {};
                        return e = e.filter((function(e) {
                            var r = e.text("reduced").trim();
                            return !0 !== t.hasOwnProperty(r) && (t[r] = !0, !0)
                        })), this.buildFrom(e)
                    }
                },
                on = /[\[\]{}⟨⟩:,،、‒–—―…‹›«»‐\-;\/⁄·*\•^†‡°¡¿※№÷×ºª%‰=‱¶§~|‖¦©℗®℠™¤₳฿]/g,
                sn = /['‘’“”"′″‴]+/g,
                un = {
                    whitespace: function(e) {
                        var t = e.list.map((function(e) {
                            return e.terms()
                        }));
                        t.forEach((function(e, r) {
                            e.forEach((function(n, a) {
                                !0 !== n.hasDash() ? (n.pre = n.pre.replace(/\s/g, ""), n.post = n.post.replace(/\s/g, ""), (e.length - 1 !== a || t[r + 1]) && (n.implicit && !0 === Boolean(n.text) || !0 !== n.hasHyphen() && (n.post += " "))) : n.post = " - "
                            }))
                        }))
                    },
                    punctuation: function(e) {
                        e.forEach((function(e) {
                            !0 === e.hasHyphen() && (e.post = " "), e.pre = e.pre.replace(on, ""), e.post = e.post.replace(on, ""), e.post = e.post.replace(/\.\.\./, ""), !0 === /!/.test(e.post) && (e.post = e.post.replace(/!/g, ""), e.post = "!" + e.post), !0 === /\?/.test(e.post) && (e.post = e.post.replace(/[\?!]*/, ""), e.post = "?" + e.post)
                        }))
                    },
                    unicode: function(e) {
                        e.forEach((function(e) {
                            !0 !== e.isImplicit() && (e.text = G(e.text))
                        }))
                    },
                    quotations: function(e) {
                        e.forEach((function(e) {
                            e.post = e.post.replace(sn, ""), e.pre = e.pre.replace(sn, "")
                        }))
                    },
                    adverbs: function(e) {
                        e.match("#Adverb").not("(not|nary|seldom|never|barely|almost|basically|so)").remove()
                    },
                    abbreviations: function(e) {
                        e.list.forEach((function(e) {
                            var t = e.terms();
                            t.forEach((function(e, r) {
                                !0 === e.tags.Abbreviation && t[r + 1] && (e.post = e.post.replace(/^\./, ""))
                            }))
                        }))
                    }
                },
                ln = {
                    whitespace: !0,
                    unicode: !0,
                    punctuation: !0,
                    emoji: !0,
                    acronyms: !0,
                    abbreviations: !0,
                    case: !1,
                    contractions: !1,
                    parentheses: !1,
                    quotations: !1,
                    adverbs: !1,
                    possessives: !1,
                    verbs: !1,
                    nouns: !1,
                    honorifics: !1
                },
                cn = {
                    light: {},
                    medium: {
                        case: !0,
                        contractions: !0,
                        parentheses: !0,
                        quotations: !0,
                        adverbs: !0
                    }
                };
            cn.heavy = Object.assign({}, cn.medium, {
                possessives: !0,
                verbs: !0,
                nouns: !0,
                honorifics: !0
            });
            var dn = {
                    normalize: function(e) {
                        "string" == typeof(e = e || {}) && (e = cn[e] || {}), e = Object.assign({}, ln, e), this.uncache();
                        var t = this.termList();
                        return e.case && this.toLowerCase(), e.whitespace && un.whitespace(this), e.unicode && un.unicode(t), e.punctuation && un.punctuation(t), e.emoji && this.remove("(#Emoji|#Emoticon)"), e.acronyms && this.acronyms().strip(), e.abbreviations && un.abbreviations(this), (e.contraction || e.contractions) && this.contractions().expand(), e.parentheses && this.parentheses().unwrap(), (e.quotations || e.quotes) && un.quotations(t), e.adverbs && un.adverbs(this), (e.possessive || e.possessives) && this.possessives().strip(), e.verbs && this.verbs().toInfinitive(), (e.nouns || e.plurals) && this.nouns().toSingular(), e.honorifics && this.remove("#Honorific"), this
                    }
                },
                hn = L((function(e, t) {
                    t.splitOn = function(e) {
                        if (!e) return this.parent().splitOn(this);
                        var t = Ue(e),
                            r = [];
                        return this.list.forEach((function(e) {
                            var n = e.match(t);
                            if (0 !== n.length) {
                                var a = e;
                                n.forEach((function(e) {
                                    var t = a.splitOn(e);
                                    t.before && r.push(t.before), t.match && r.push(t.match), a = t.after
                                })), a && r.push(a)
                            } else r.push(e)
                        })), this.buildFrom(r)
                    }, t.splitAfter = function(e) {
                        if (!e) return this.parent().splitAfter(this);
                        var t = Ue(e),
                            r = [];
                        return this.list.forEach((function(e) {
                            var n = e.match(t);
                            if (0 !== n.length) {
                                var a = e;
                                n.forEach((function(e) {
                                    var t = a.splitOn(e);
                                    t.before && t.match ? (t.before.length += t.match.length, r.push(t.before)) : t.match && r.push(t.match), a = t.after
                                })), a && r.push(a)
                            } else r.push(e)
                        })), this.buildFrom(r)
                    }, t.split = t.splitAfter, t.splitBefore = function(e) {
                        if (!e) return this.parent().splitBefore(this);
                        var t = Ue(e),
                            r = [];
                        return this.list.forEach((function(e) {
                            var n = e.match(t);
                            if (0 !== n.length) {
                                var a = e;
                                n.forEach((function(e) {
                                    var t = a.splitOn(e);
                                    t.before && r.push(t.before), t.match && t.after && (t.match.length += t.after.length), a = t.match
                                })), a && r.push(a)
                            } else r.push(e)
                        })), this.buildFrom(r)
                    }, t.segment = function(e, t) {
                        e = e || {}, t = t || {
                            text: !0
                        };
                        var r = this,
                            n = Object.keys(e);
                        return n.forEach((function(e) {
                            r = r.splitOn(e)
                        })), r.list.forEach((function(t) {
                            for (var r = 0; r < n.length; r += 1)
                                if (t.has(n[r])) return void(t.segment = e[n[r]])
                        })), r.list.map((function(e) {
                            var r = e.json(t);
                            return r.segment = e.segment || null, r
                        }))
                    }
                })),
                gn = function(e, t) {
                    var r = e.world;
                    return e.list.forEach((function(e) {
                        e.terms().forEach((function(e) {
                            return e[t](r)
                        }))
                    })), e
                },
                pn = {
                    toLowerCase: function() {
                        return gn(this, "toLowerCase")
                    },
                    toUpperCase: function() {
                        return gn(this, "toUpperCase")
                    },
                    toTitleCase: function() {
                        return gn(this, "toTitleCase")
                    },
                    toCamelCase: function() {
                        return this.list.forEach((function(e) {
                            var t = e.terms();
                            t.forEach((function(e, r) {
                                0 !== r && e.toTitleCase(), r !== t.length - 1 && (e.post = "")
                            }))
                        })), this
                    }
                },
                mn = L((function(e, t) {
                    t.pre = function(e, t) {
                        return void 0 === e ? this.list[0].terms(0).pre : (this.list.forEach((function(r) {
                            var n = r.terms(0);
                            !0 === t ? n.pre += e : n.pre = e
                        })), this)
                    }, t.post = function(e, t) {
                        return void 0 === e ? this.list.map((function(e) {
                            var t = e.terms();
                            return t[t.length - 1].post
                        })) : (this.list.forEach((function(r) {
                            var n = r.terms(),
                                a = n[n.length - 1];
                            !0 === t ? a.post += e : a.post = e
                        })), this)
                    }, t.trim = function() {
                        return this.list = this.list.map((function(e) {
                            return e.trim()
                        })), this
                    }, t.hyphenate = function() {
                        return this.list.forEach((function(e) {
                            var t = e.terms();
                            t.forEach((function(e, r) {
                                0 !== r && (e.pre = ""), t[r + 1] && (e.post = "-")
                            }))
                        })), this
                    }, t.dehyphenate = function() {
                        var e = /(-|–|—)/;
                        return this.list.forEach((function(t) {
                            t.terms().forEach((function(t) {
                                e.test(t.post) && (t.post = " ")
                            }))
                        })), this
                    }, t.deHyphenate = t.dehyphenate, t.toQuotations = function(e, t) {
                        return e = e || '"', t = t || '"', this.list.forEach((function(r) {
                            var n = r.terms();
                            n[0].pre = e + n[0].pre;
                            var a = n[n.length - 1];
                            a.post = t + a.post
                        })), this
                    }, t.toQuotation = t.toQuotations, t.toParentheses = function(e, t) {
                        return e = e || "(", t = t || ")", this.list.forEach((function(r) {
                            var n = r.terms();
                            n[0].pre = e + n[0].pre;
                            var a = n[n.length - 1];
                            a.post = t + a.post
                        })), this
                    }
                })),
                fn = {
                    join: function(e) {
                        this.uncache();
                        for (var t = this.list[0], r = t.length, n = {}, a = 1; a < this.list.length; a++) {
                            var i = this.list[a];
                            n[i.start] = !0;
                            var o = t.lastTerm();
                            e && (o.post += e), o.next = i.start, i.terms(0).prev = o.id, t.length += i.length, t.cache = {}
                        }
                        var s = t.length - r;
                        return this.parents().forEach((function(e) {
                            e.list.forEach((function(e) {
                                for (var r = e.terms(), n = 0; n < r.length; n++)
                                    if (r[n].id === t.start) {
                                        e.length += s;
                                        break
                                    }
                                e.cache = {}
                            })), e.list = e.list.filter((function(e) {
                                return !0 !== n[e.start]
                            }))
                        })), this.buildFrom([t])
                    }
                },
                vn = /[,\)"';:\-–—\.…]/,
                bn = function(e, t) {
                    if (e.found) {
                        for (var r = e.termList(), n = 0; n < r.length - 1; n++) {
                            var a = r[n];
                            if (vn.test(a.post)) return
                        }
                        r.forEach((function(e) {
                            e.implicit = e.clean
                        })), r[0].text += t, r.slice(1).forEach((function(e) {
                            e.text = ""
                        }));
                        for (var i = 0; i < r.length - 1; i++) {
                            var o = r[i];
                            o.post = o.post.replace(/ /, "")
                        }
                    }
                },
                yn = {
                    contract: function() {
                        var e = this.not("@hasContraction"),
                            t = e.match("(we|they|you) are");
                        return bn(t, "'re"), t = e.match("(he|she|they|it|we|you) will"), bn(t, "'ll"), t = e.match("(he|she|they|it|we) is"), bn(t, "'s"), t = e.match("#Person is"), bn(t, "'s"), t = e.match("#Person would"), bn(t, "'d"), t = e.match("(is|was|had|would|should|could|do|does|have|has|can) not"), bn(t, "n't"), t = e.match("(i|we|they) have"), bn(t, "'ve"), t = e.match("(would|should|could) have"), bn(t, "'ve"), t = e.match("i am"), bn(t, "'m"), t = e.match("going to"), this
                    }
                },
                wn = Object.assign({}, Or, _r, Ir, Hr, Sr, qr, Wr, Rr, Kr, Qr, Xr, tn, an, dn, hn, pn, mn, fn, yn),
                kn = {};
            [
                ["terms", "."],
                ["hyphenated", "@hasHyphen ."],
                ["adjectives", "#Adjective"],
                ["hashTags", "#HashTag"],
                ["emails", "#Email"],
                ["emoji", "#Emoji"],
                ["emoticons", "#Emoticon"],
                ["atMentions", "#AtMention"],
                ["urls", "#Url"],
                ["adverbs", "#Adverb"],
                ["pronouns", "#Pronoun"],
                ["conjunctions", "#Conjunction"],
                ["prepositions", "#Preposition"]
            ].forEach((function(e) {
                kn[e[0]] = function(t) {
                    var r = this.match(e[1]);
                    return "number" == typeof t && (r = r.get(t)), r
                }
            })), kn.emojis = kn.emoji, kn.atmentions = kn.atMentions, kn.words = kn.terms, kn.phoneNumbers = function(e) {
                var t = this.splitAfter("@hasComma");
                return t = t.match("#PhoneNumber+"), "number" == typeof e && (t = t.get(e)), t
            }, kn.money = function(e) {
                var t = this.match("#Money #Currency?");
                return "number" == typeof e && (t = t.get(e)), t
            }, kn.places = function(e) {
                var t = this.match("(#City && @hasComma) (#Region|#Country)"),
                    r = this.not(t).splitAfter("@hasComma");
                return (r = r.concat(t)).sort("index"), r = r.match("#Place+"), "number" == typeof e && (r = r.get(e)), r
            }, kn.organizations = function(e) {
                var t = this.clauses();
                return t = t.match("#Organization+"), "number" == typeof e && (t = t.get(e)), t
            }, kn.entities = function(e) {
                var t = this.clauses(),
                    r = t.people();
                return (r = (r = (r = r.concat(t.places())).concat(t.organizations())).not(["someone", "man", "woman", "mother", "brother", "sister", "father"])).sort("sequence"), "number" == typeof e && (r = r.get(e)), r
            }, kn.things = kn.entities, kn.topics = kn.entities;
            var An = kn,
                xn = /^(under|over)-?/,
                $n = function(e, t, r) {
                    var n = r.words,
                        a = e[t].reduced + " " + e[t + 1].reduced;
                    return void 0 !== n[a] && !0 === n.hasOwnProperty(a) ? (e[t].tag(n[a], "lexicon-two", r), e[t + 1].tag(n[a], "lexicon-two", r), 1) : t + 2 < e.length && void 0 !== n[a += " " + e[t + 2].reduced] && !0 === n.hasOwnProperty(a) ? (e[t].tag(n[a], "lexicon-three", r), e[t + 1].tag(n[a], "lexicon-three", r), e[t + 2].tag(n[a], "lexicon-three", r), 2) : t + 3 < e.length && void 0 !== n[a += " " + e[t + 3].reduced] && !0 === n.hasOwnProperty(a) ? (e[t].tag(n[a], "lexicon-four", r), e[t + 1].tag(n[a], "lexicon-four", r), e[t + 2].tag(n[a], "lexicon-four", r), e[t + 3].tag(n[a], "lexicon-four", r), 3) : 0
                },
                Pn = function(e, t) {
                    for (var r = t.words, n = t.hasCompound, a = 0; a < e.length; a += 1) {
                        var i = e[a].clean;
                        if (!0 === n[i] && a + 1 < e.length) {
                            var o = $n(e, a, t);
                            if (o > 0) {
                                a += o;
                                continue
                            }
                        }
                        if (void 0 === r[i] || !0 !== r.hasOwnProperty(i))
                            if (i === e[a].reduced || !0 !== r.hasOwnProperty(e[a].reduced)) {
                                if (!0 === xn.test(i)) {
                                    var s = i.replace(xn, "");
                                    !0 === r.hasOwnProperty(s) && e[a].tag(r[s], "noprefix-lexicon", t)
                                }
                            } else e[a].tag(r[e[a].reduced], "lexicon", t);
                        else e[a].tag(r[i], "lexicon", t)
                    }
                    return e
                },
                Bn = /[\'‘’‛‵′`´]$/,
                Gn = /^(m|k|cm|km|m)\/(s|h|hr)$/,
                Cn = [
                    [/^[\w\.]+@[\w\.]+\.[a-z]{2,3}$/, "Email"],
                    [/^#[a-z0-9_\u00C0-\u00FF]{2,}$/, "HashTag"],
                    [/^@\w{2,}$/, "AtMention"],
                    [/^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/, "Url"],
                    [/^[\w./]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/, "Url"],
                    [/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$/, "Time"],
                    [/^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$/, "Time"],
                    [/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$/, "Time"],
                    [/^[PMCE]ST$/, "Time"],
                    [/^utc ?[+-]?[0-9]+?$/, "Time"],
                    [/^[a-z0-9]*? o\'?clock$/, "Time"],
                    [/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$/, "Date"],
                    [/^[0-9]{1,4}\/[0-9]{1,2}\/[0-9]{1,4}$/, "Date"],
                    [/^ma?c\'.*/, "LastName"],
                    [/^o\'[drlkn].*/, "LastName"],
                    [/^ma?cd[aeiou]/, "LastName"],
                    [/^(lol)+[sz]$/, "Expression"],
                    [/^woo+a*?h?$/, "Expression"],
                    [/^(un|de|re)\\-[a-z\u00C0-\u00FF]{2}/, "Verb"],
                    [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, "Date"],
                    [/^[0-9]{3}-[0-9]{4}$/, "PhoneNumber"],
                    [/^(\+?[0-9][ -])?[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$/, "PhoneNumber"],
                    [/^[-+]?[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6][-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?(k|m|b|bn)?\+?$/, ["Money", "Value"]],
                    [/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]\+?$/, ["Money", "Value"]],
                    [/^[-+]?[0-9]([0-9,.])+?(usd|eur|jpy|gbp|cad|aud|chf|cny|hkd|nzd|kr|rub)$/i, ["Money", "Value"]],
                    [/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?\+?$/, ["Cardinal", "NumericValue"]],
                    [/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?(st|nd|rd|th)$/, ["Ordinal", "NumericValue"]],
                    [/^\.[0-9]+\+?$/, ["Cardinal", "NumericValue"]],
                    [/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?%\+?$/, ["Percent", "Cardinal", "NumericValue"]],
                    [/^\.[0-9]+%$/, ["Percent", "Cardinal", "NumericValue"]],
                    [/^[0-9]{1,4}\/[0-9]{1,4}$/, "Fraction"],
                    [/^[0-9.]{1,2}[-–][0-9]{1,2}$/, ["Value", "NumberRange"]],
                    [/^[0-9.]{1,4}(st|nd|rd|th)?[-–][0-9\.]{1,4}(st|nd|rd|th)?$/, "NumberRange"],
                    [/^[0-9.]+([a-z]{1,4})$/, "Value"]
                ],
                jn = /^[IVXLCDM]{2,}$/,
                Dn = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,
                En = "Adjective",
                Nn = "Infinitive",
                Fn = "PresentTense",
                zn = "Singular",
                On = "PastTense",
                _n = "Expression",
                Tn = "LastName",
                In = {
                    a: [
                        [/.[aeiou]na$/, "Noun"],
                        [/.[oau][wvl]ska$/, Tn],
                        [/.[^aeiou]ica$/, zn],
                        [/^([hyj]a)+$/, _n]
                    ],
                    c: [
                        [/.[^aeiou]ic$/, En]
                    ],
                    d: [
                        [/[aeiou](pp|ll|ss|ff|gg|tt|rr|bb|nn|mm)ed$/, On],
                        [/.[aeo]{2}[bdgmnprvz]ed$/, On],
                        [/.[aeiou][sg]hed$/, On],
                        [/.[aeiou]red$/, On],
                        [/.[aeiou]r?ried$/, On],
                        [/.[bcdgtr]led$/, On],
                        [/.[aoui]f?led$/, On],
                        [/.[iao]sed$/, On],
                        [/[aeiou]n?[cs]ed$/, On],
                        [/[aeiou][rl]?[mnf]ed$/, On],
                        [/[aeiou][ns]?c?ked$/, On],
                        [/[aeiou][nl]?ged$/, On],
                        [/.[tdbwxz]ed$/, On],
                        [/[^aeiou][aeiou][tvx]ed$/, On],
                        [/.[cdlmnprstv]ied$/, On],
                        [/[^aeiou]ard$/, zn],
                        [/[aeiou][^aeiou]id$/, En],
                        [/.[vrl]id$/, En]
                    ],
                    e: [
                        [/.[lnr]ize$/, Nn],
                        [/.[^aeiou]ise$/, Nn],
                        [/.[aeiou]te$/, Nn],
                        [/.[^aeiou][ai]ble$/, En],
                        [/.[^aeiou]eable$/, En],
                        [/.[ts]ive$/, En]
                    ],
                    h: [
                        [/.[^aeiouf]ish$/, En],
                        [/.v[iy]ch$/, Tn],
                        [/^ug?h+$/, _n],
                        [/^uh[ -]?oh$/, _n]
                    ],
                    i: [
                        [/.[oau][wvl]ski$/, Tn]
                    ],
                    k: [
                        [/^(k){2}$/, _n]
                    ],
                    l: [
                        [/.[gl]ial$/, En],
                        [/.[^aeiou]ful$/, En],
                        [/.[nrtumcd]al$/, En],
                        [/.[^aeiou][ei]al$/, En]
                    ],
                    m: [
                        [/.[^aeiou]ium$/, zn],
                        [/[^aeiou]ism$/, zn],
                        [/^h*u*m+$/, _n],
                        [/^\d+ ?[ap]m$/, "Date"]
                    ],
                    n: [
                        [/.[lsrnpb]ian$/, En],
                        [/[^aeiou]ician$/, "Actor"],
                        [/[aeiou][ktrp]in$/, "Gerund"]
                    ],
                    o: [
                        [/^no+$/, _n],
                        [/^(yo)+$/, _n],
                        [/^woo+[pt]?$/, _n]
                    ],
                    r: [
                        [/.[bdfklmst]ler$/, "Noun"],
                        [/.[ilk]er$/, "Comparative"],
                        [/[aeiou][pns]er$/, zn],
                        [/[^i]fer$/, Nn],
                        [/.[^aeiou][ao]pher$/, "Actor"]
                    ],
                    t: [
                        [/.[di]est$/, "Superlative"],
                        [/.[icldtgrv]ent$/, En],
                        [/[aeiou].*ist$/, En],
                        [/^[a-z]et$/, "Verb"]
                    ],
                    s: [
                        [/.[rln]ates$/, Fn],
                        [/.[^z]ens$/, "Verb"],
                        [/.[lstrn]us$/, zn],
                        [/.[aeiou]sks$/, Fn],
                        [/.[aeiou]kes$/, Fn],
                        [/[aeiou][^aeiou]is$/, zn],
                        [/[a-z]\'s$/, "Noun"],
                        [/^yes+$/, _n]
                    ],
                    v: [
                        [/.[^aeiou][ai][kln]ov$/, Tn]
                    ],
                    y: [
                        [/.[cts]hy$/, En],
                        [/.[st]ty$/, En],
                        [/.[gk]y$/, En],
                        [/.[tnl]ary$/, En],
                        [/.[oe]ry$/, zn],
                        [/[rdntkbhs]ly$/, "Adverb"],
                        [/...lly$/, "Adverb"],
                        [/[bszmp]{2}y$/, En],
                        [/.(gg|bb|zz)ly$/, En],
                        [/.[aeiou]my$/, En],
                        [/[ea]{2}zy$/, En],
                        [/.[^aeiou]ity$/, zn]
                    ]
                },
                Vn = "Adjective",
                Hn = "Infinitive",
                Sn = "PresentTense",
                Mn = "Singular",
                Ln = "PastTense",
                qn = "Adverb",
                Wn = "Plural",
                Jn = "Verb",
                Rn = "LastName",
                Kn = [null, null, {
                    ea: Mn,
                    ia: "Noun",
                    ic: Vn,
                    ly: qn,
                    "'n": Jn,
                    "'t": Jn
                }, {
                    oed: Ln,
                    ued: Ln,
                    xed: Ln,
                    " so": qn,
                    "'ll": "Modal",
                    "'re": "Copula",
                    azy: Vn,
                    end: Jn,
                    ped: Ln,
                    ffy: Vn,
                    ify: Hn,
                    ing: "Gerund",
                    ize: Hn,
                    lar: Vn,
                    mum: Vn,
                    nes: Sn,
                    nny: Vn,
                    oid: Vn,
                    ous: Vn,
                    que: Vn,
                    rmy: Vn,
                    rol: Mn,
                    sis: Mn,
                    zes: Sn
                }, {
                    amed: Ln,
                    aped: Ln,
                    ched: Ln,
                    lked: Ln,
                    nded: Ln,
                    cted: Ln,
                    dged: Ln,
                    akis: Rn,
                    cede: Hn,
                    chuk: Rn,
                    czyk: Rn,
                    ects: Sn,
                    ends: Jn,
                    enko: Rn,
                    ette: Mn,
                    fies: Sn,
                    fore: qn,
                    gate: Hn,
                    gone: Vn,
                    ices: Wn,
                    ints: Wn,
                    ions: Wn,
                    less: qn,
                    llen: Vn,
                    made: Vn,
                    nsen: Rn,
                    oses: Sn,
                    ould: "Modal",
                    some: Vn,
                    sson: Rn,
                    tage: Hn,
                    teen: "Value",
                    tion: Mn,
                    tive: Vn,
                    tors: "Noun",
                    vice: Mn
                }, {
                    tized: Ln,
                    urned: Ln,
                    eased: Ln,
                    ances: Wn,
                    bound: Vn,
                    ettes: Wn,
                    fully: qn,
                    ishes: Sn,
                    ities: Wn,
                    marek: Rn,
                    nssen: Rn,
                    ology: "Noun",
                    ports: Wn,
                    rough: Vn,
                    tches: Sn,
                    tieth: "Ordinal",
                    tures: Wn,
                    wards: qn,
                    where: qn
                }, {
                    auskas: Rn,
                    keeper: "Actor",
                    logist: "Actor",
                    teenth: "Value"
                }, {
                    opoulos: Rn,
                    borough: "Place",
                    sdottir: Rn
                }],
                Un = {
                    ":(": !0,
                    ":)": !0,
                    ":P": !0,
                    ":p": !0,
                    ":O": !0,
                    ":3": !0,
                    ":|": !0,
                    ":/": !0,
                    ":\\": !0,
                    ":$": !0,
                    ":*": !0,
                    ":@": !0,
                    ":-(": !0,
                    ":-)": !0,
                    ":-P": !0,
                    ":-p": !0,
                    ":-O": !0,
                    ":-3": !0,
                    ":-|": !0,
                    ":-/": !0,
                    ":-\\": !0,
                    ":-$": !0,
                    ":-*": !0,
                    ":-@": !0,
                    ":^(": !0,
                    ":^)": !0,
                    ":^P": !0,
                    ":^p": !0,
                    ":^O": !0,
                    ":^3": !0,
                    ":^|": !0,
                    ":^/": !0,
                    ":^\\": !0,
                    ":^$": !0,
                    ":^*": !0,
                    ":^@": !0,
                    "):": !0,
                    "(:": !0,
                    "$:": !0,
                    "*:": !0,
                    ")-:": !0,
                    "(-:": !0,
                    "$-:": !0,
                    "*-:": !0,
                    ")^:": !0,
                    "(^:": !0,
                    "$^:": !0,
                    "*^:": !0,
                    "<3": !0,
                    "</3": !0,
                    "<\\3": !0
                },
                Qn = /^(\u00a9|\u00ae|[\u2319-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
                Zn = {
                    lexicon: Pn,
                    punctuation: function(e, t, r) {
                        var n = e[t];
                        if (Bn.test(n.text) && !Bn.test(n.pre) && !Bn.test(n.post) && n.clean.length > 2) {
                            var a = n.clean[n.clean.length - 2];
                            if ("s" === a) return void n.tag(["Possessive", "Noun"], "end-tick", r);
                            "n" === a && n.tag(["Gerund"], "chillin", r)
                        }
                        Gn.test(n.text) && n.tag("Unit", "per-sec", r)
                    },
                    regex: function(e, t) {
                        for (var r = e.text, n = 0; n < Cn.length; n += 1)
                            if (!0 === Cn[n][0].test(r)) {
                                e.tagSafe(Cn[n][1], "prefix #" + n, t);
                                break
                            }
                        e.text.length >= 2 && jn.test(r) && Dn.test(r) && e.tag("RomanNumeral", "xvii", t)
                    },
                    suffix: function(e, t) {
                        ! function(e, t) {
                            var r = e.clean.length,
                                n = 7;
                            r <= n && (n = r - 1);
                            for (var a = n; a > 1; a -= 1) {
                                var i = e.clean.substr(r - a, r);
                                if (!0 === Kn[i.length].hasOwnProperty(i)) {
                                    var o = Kn[i.length][i];
                                    e.tagSafe(o, "suffix -" + i, t);
                                    break
                                }
                            }
                        }(e, t),
                        function(e, t) {
                            var r = e.clean,
                                n = r[r.length - 1];
                            if (!0 === In.hasOwnProperty(n))
                                for (var a = In[n], i = 0; i < a.length; i += 1)
                                    if (!0 === a[i][0].test(r)) {
                                        e.tagSafe(a[i][1], "endReg ".concat(n, " #").concat(i), t);
                                        break
                                    }
                        }(e, t)
                    },
                    emoji: function(e, t) {
                        var r, n = e.pre + e.text + e.post;
                        !0 === function(e) {
                            return ":" === e.charAt(0) && (null !== e.match(/:.?$/) && (!e.match(" ") && !(e.length > 35)))
                        }(n = (n = n.trim()).replace(/[.!?,]$/, "")) && (e.tag("Emoji", "comma-emoji", t), e.text = n, e.pre = e.pre.replace(":", ""), e.post = e.post.replace(":", "")), e.text.match(Qn) && (e.tag("Emoji", "unicode-emoji", t), e.text = n), !0 === (r = (r = n).replace(/^[:;]/, ":"), Un.hasOwnProperty(r)) && (e.tag("Emoticon", "emoticon-emoji", t), e.text = n)
                    }
                },
                Xn = function(e, t) {
                    var r = e.world;
                    Zn.lexicon(t, r);
                    for (var n = 0; n < t.length; n += 1) {
                        var a = t[n];
                        Zn.punctuation(t, n, r), Zn.regex(a, r), Zn.suffix(a, r), Zn.emoji(a, r)
                    }
                    return e
                },
                Yn = {
                    beforeThisWord: {
                        there: "Verb",
                        me: "Verb",
                        man: "Adjective",
                        only: "Verb",
                        him: "Verb",
                        were: "Noun",
                        took: "Noun",
                        himself: "Verb",
                        went: "Noun",
                        who: "Noun",
                        jr: "Person"
                    },
                    afterThisWord: {
                        i: "Verb",
                        first: "Noun",
                        it: "Verb",
                        there: "Verb",
                        not: "Verb",
                        because: "Noun",
                        if: "Noun",
                        but: "Noun",
                        who: "Verb",
                        this: "Noun",
                        his: "Noun",
                        when: "Noun",
                        you: "Verb",
                        very: "Adjective",
                        old: "Noun",
                        never: "Verb",
                        before: "Noun"
                    },
                    beforeThisPos: {
                        Copula: "Noun",
                        PastTense: "Noun",
                        Conjunction: "Noun",
                        Modal: "Noun",
                        Pluperfect: "Noun",
                        PerfectTense: "Verb"
                    },
                    afterThisPos: {
                        Adjective: "Noun",
                        Possessive: "Noun",
                        Determiner: "Noun",
                        Adverb: "Verb",
                        Pronoun: "Verb",
                        Value: "Noun",
                        Ordinal: "Noun",
                        Modal: "Verb",
                        Superlative: "Noun",
                        Demonym: "Noun",
                        Honorific: "Person"
                    }
                },
                ea = Object.keys(Yn.afterThisPos),
                ta = Object.keys(Yn.beforeThisPos),
                ra = function(e, t) {
                    for (var r = function(r) {
                            var n = e[r];
                            if (!0 === n.isKnown()) return "continue";
                            var a = e[r - 1];
                            if (a) {
                                if (!0 === Yn.afterThisWord.hasOwnProperty(a.clean)) {
                                    var i = Yn.afterThisWord[a.clean];
                                    return n.tag(i, "after-" + a.clean, t), "continue"
                                }
                                var o = ea.find((function(e) {
                                    return a.tags[e]
                                }));
                                if (void 0 !== o) {
                                    var s = Yn.afterThisPos[o];
                                    return n.tag(s, "after-" + o, t), "continue"
                                }
                            }
                            var u = e[r + 1];
                            if (u) {
                                if (!0 === Yn.beforeThisWord.hasOwnProperty(u.clean)) {
                                    var l = Yn.beforeThisWord[u.clean];
                                    return n.tag(l, "before-" + u.clean, t), "continue"
                                }
                                var c = ta.find((function(e) {
                                    return u.tags[e]
                                }));
                                if (void 0 !== c) {
                                    var d = Yn.beforeThisPos[c];
                                    return n.tag(d, "before-" + c, t), "continue"
                                }
                            }
                        }, n = 0; n < e.length; n += 1) r(n)
                },
                na = /^[A-Z][a-z'\u00C0-\u00FF]/,
                aa = /[0-9]/,
                ia = function(e) {
                    var t = e.world;
                    e.list.forEach((function(e) {
                        for (var r = e.terms(), n = 1; n < r.length; n++) {
                            var a = r[n];
                            !0 === na.test(a.text) && !1 === aa.test(a.text) && a.tag("ProperNoun", "titlecase-noun", t)
                        }
                    }))
                },
                oa = /^(re|un)-?[a-z\u00C0-\u00FF]/,
                sa = /^(re|un)-?/,
                ua = function(e, t) {
                    var r = t.words;
                    e.forEach((function(e) {
                        if (!0 !== e.isKnown() && !0 === oa.test(e.clean)) {
                            var n = e.clean.replace(sa, "");
                            n && n.length > 3 && void 0 !== r[n] && !0 === r.hasOwnProperty(n) && e.tag(r[n], "stem-" + n, t)
                        }
                    }))
                },
                la = {
                    isSingular: [/(ax|test)is$/i, /(octop|vir|radi|nucle|fung|cact|stimul)us$/i, /(octop|vir)i$/i, /(rl)f$/i, /(alias|status)$/i, /(bu)s$/i, /(al|ad|at|er|et|ed|ad)o$/i, /(ti)um$/i, /(ti)a$/i, /sis$/i, /(?:(^f)fe|(lr)f)$/i, /hive$/i, /s[aeiou]+ns$/i, /(^aeiouy|qu)y$/i, /(x|ch|ss|sh|z)$/i, /(matr|vert|ind|cort)(ix|ex)$/i, /(m|l)ouse$/i, /(m|l)ice$/i, /(antenn|formul|nebul|vertebr|vit)a$/i, /.sis$/i, /^(?!talis|.*hu)(.*)man$/i],
                    isPlural: [/(^v)ies$/i, /ises$/i, /ives$/i, /(antenn|formul|nebul|vertebr|vit)ae$/i, /(octop|vir|radi|nucle|fung|cact|stimul)i$/i, /(buffal|tomat|tornad)oes$/i, /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i, /(vert|ind|cort)ices$/i, /(matr|append)ices$/i, /(x|ch|ss|sh|s|z|o)es$/i, /is$/i, /men$/i, /news$/i, /.tia$/i, /(^f)ves$/i, /(lr)ves$/i, /(^aeiouy|qu)ies$/i, /(m|l)ice$/i, /(cris|ax|test)es$/i, /(alias|status)es$/i, /ics$/i]
                },
                ca = ["Uncountable", "Pronoun", "Place", "Value", "Person", "Month", "WeekDay", "Holiday"],
                da = [/ss$/, /sis$/, /[^aeiou][uo]s$/, /'s$/],
                ha = [/i$/, /ae$/],
                ga = function(e, t) {
                    if (e.tags.Noun && !e.tags.Acronym) {
                        var r = e.clean;
                        if (e.tags.Singular || e.tags.Plural) return;
                        if (r.length <= 3) return void e.tag("Singular", "short-singular", t);
                        if (ca.find((function(t) {
                                return e.tags[t]
                            }))) return;
                        if (la.isPlural.find((function(e) {
                                return e.test(r)
                            }))) return void e.tag("Plural", "plural-rules", t);
                        if (la.isSingular.find((function(e) {
                                return e.test(r)
                            }))) return void e.tag("Singular", "singular-rules", t);
                        if (!0 === /s$/.test(r)) {
                            if (da.find((function(e) {
                                    return e.test(r)
                                }))) return;
                            return void e.tag("Plural", "plural-fallback", t)
                        }
                        if (ha.find((function(e) {
                                return e.test(r)
                            }))) return;
                        e.tag("Singular", "singular-fallback", t)
                    }
                },
                pa = ["academy", "administration", "agence", "agences", "agencies", "agency", "airlines", "airways", "army", "assoc", "associates", "association", "assurance", "authority", "autorite", "aviation", "bank", "banque", "board", "boys", "brands", "brewery", "brotherhood", "brothers", "building society", "bureau", "cafe", "caisse", "capital", "care", "cathedral", "center", "central bank", "centre", "chemicals", "choir", "chronicle", "church", "circus", "clinic", "clinique", "club", "co", "coalition", "coffee", "collective", "college", "commission", "committee", "communications", "community", "company", "comprehensive", "computers", "confederation", "conference", "conseil", "consulting", "containers", "corporation", "corps", "corp", "council", "crew", "daily news", "data", "departement", "department", "department store", "departments", "design", "development", "directorate", "division", "drilling", "education", "eglise", "electric", "electricity", "energy", "ensemble", "enterprise", "enterprises", "entertainment", "estate", "etat", "evening news", "faculty", "federation", "financial", "fm", "foundation", "fund", "gas", "gazette", "girls", "government", "group", "guild", "health authority", "herald", "holdings", "hospital", "hotel", "hotels", "inc", "industries", "institut", "institute", "institute of technology", "institutes", "insurance", "international", "interstate", "investment", "investments", "investors", "journal", "laboratory", "labs", "liberation army", "limited", "local authority", "local health authority", "machines", "magazine", "management", "marine", "marketing", "markets", "media", "memorial", "mercantile exchange", "ministere", "ministry", "military", "mobile", "motor", "motors", "musee", "museum", "news", "news service", "observatory", "office", "oil", "optical", "orchestra", "organization", "partners", "partnership", "people's party", "petrol", "petroleum", "pharmacare", "pharmaceutical", "pharmaceuticals", "pizza", "plc", "police", "polytechnic", "post", "power", "press", "productions", "quartet", "radio", "regional authority", "regional health authority", "reserve", "resources", "restaurant", "restaurants", "savings", "school", "securities", "service", "services", "social club", "societe", "society", "sons", "standard", "state police", "state university", "stock exchange", "subcommittee", "syndicat", "systems", "telecommunications", "telegraph", "television", "times", "tribunal", "tv", "union", "university", "utilities", "workers"].reduce((function(e, t) {
                    return e[t] = "Noun", e
                }), {}),
                ma = function(e) {
                    return !!e.tags.Noun && (!(e.tags.Pronoun || e.tags.Comma || e.tags.Possessive) && !!(e.tags.Organization || e.tags.Acronym || e.tags.Place || e.titleCase()))
                },
                fa = /^[A-Z]('s|,)?$/,
                va = /([A-Z]\.){2}[A-Z]?/i,
                ba = {
                    I: !0,
                    A: !0
                },
                ya = {
                    neighbours: ra,
                    case: ia,
                    stem: ua,
                    plural: ga,
                    organizations: function(e, t) {
                        for (var r = 0; r < e.length; r += 1) {
                            var n = e[r];
                            if (void 0 !== pa[n.clean] && !0 === pa.hasOwnProperty(n.clean)) {
                                var a = e[r - 1];
                                if (void 0 !== a && !0 === ma(a)) {
                                    a.tagSafe("Organization", "org-word-1", t), n.tagSafe("Organization", "org-word-2", t);
                                    continue
                                }
                                var i = e[r + 1];
                                if (void 0 !== i && "of" === i.clean && e[r + 2] && ma(e[r + 2])) {
                                    n.tagSafe("Organization", "org-of-word-1", t), i.tagSafe("Organization", "org-of-word-2", t), e[r + 2].tagSafe("Organization", "org-of-word-3", t);
                                    continue
                                }
                            }
                        }
                    },
                    acronyms: function(e, t) {
                        e.forEach((function(e) {
                            !0 !== e.tags.RomanNumeral && (!0 === va.test(e.text) && e.tag("Acronym", "period-acronym", t), e.isUpperCase() && function(e, t) {
                                var r = e.reduced;
                                return !!e.tags.Acronym || !t.words[r] && e.isAcronym()
                            }(e, t) ? (e.tag("Acronym", "acronym-step", t), e.tag("Noun", "acronym-infer", t)) : !ba.hasOwnProperty(e.text) && fa.test(e.text) && (e.tag("Acronym", "one-letter-acronym", t), e.tag("Noun", "one-letter-infer", t)), e.tags.Organization && e.text.length <= 3 && e.tag("Acronym", "acronym-org", t), e.tags.Organization && e.isUpperCase() && e.text.length <= 6 && e.tag("Acronym", "acronym-org-case", t))
                        }))
                    }
                },
                wa = function(e, t) {
                    var r = e.world;
                    return ya.neighbours(t, r), ya.case(e), ya.stem(t, r), t.forEach((function(t) {
                        !1 === t.isKnown() && t.tag("Noun", "noun-fallback", e.world)
                    })), ya.organizations(t, r), ya.acronyms(t, r), t.forEach((function(t) {
                        ya.plural(t, e.world)
                    })), e
                },
                ka = /n't$/,
                Aa = {
                    "won't": ["will", "not"],
                    wont: ["will", "not"],
                    "can't": ["can", "not"],
                    cant: ["can", "not"],
                    cannot: ["can", "not"],
                    "shan't": ["should", "not"],
                    dont: ["do", "not"],
                    dun: ["do", "not"]
                },
                xa = function(e, t) {
                    return !0 === Aa.hasOwnProperty(e.clean) ? Aa[e.clean] : "ain't" === e.clean || "aint" === e.clean ? function(e, t) {
                        var r = t.terms(),
                            n = r.indexOf(e),
                            a = r.slice(0, n).find((function(e) {
                                return e.tags.Noun
                            }));
                        return a && a.tags.Plural ? ["are", "not"] : ["is", "not"]
                    }(e, t) : !0 === ka.test(e.clean) ? [e.clean.replace(ka, ""), "not"] : null
                },
                $a = /([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z]{1,2})$/i,
                Pa = {
                    ll: "will",
                    ve: "have",
                    re: "are",
                    m: "am",
                    "n't": "not"
                },
                Ba = function(e) {
                    var t = e.text.match($a);
                    return null === t ? null : Pa.hasOwnProperty(t[2]) ? [t[1], Pa[t[2]]] : null
                },
                Ga = {
                    wanna: ["want", "to"],
                    gonna: ["going", "to"],
                    im: ["i", "am"],
                    alot: ["a", "lot"],
                    ive: ["i", "have"],
                    imma: ["I", "will"],
                    "where'd": ["where", "did"],
                    whered: ["where", "did"],
                    "when'd": ["when", "did"],
                    whend: ["when", "did"],
                    howd: ["how", "did"],
                    whatd: ["what", "did"],
                    dunno: ["do", "not", "know"],
                    brb: ["be", "right", "back"],
                    gtg: ["got", "to", "go"],
                    irl: ["in", "real", "life"],
                    tbh: ["to", "be", "honest"],
                    imo: ["in", "my", "opinion"],
                    til: ["today", "i", "learned"],
                    rn: ["right", "now"],
                    twas: ["it", "was"],
                    "@": ["at"]
                },
                Ca = function(e) {
                    return Ga.hasOwnProperty(e.clean) ? Ga[e.clean] : null
                },
                ja = /([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]s$/i,
                Da = {
                    that: !0,
                    there: !0
                },
                Ea = function(e, t, r) {
                    var n = e.text.match(ja);
                    if (null !== n) {
                        if (!0 === function(e, t) {
                                if (e.tags.Possessive) return !0;
                                if (e.tags.Pronoun || e.tags.QuestionWord) return !1;
                                if (Da.hasOwnProperty(e.reduced)) return !1;
                                var r = t.get(e.next);
                                if (!r) return !0;
                                if (r.tags.Verb) return !!r.tags.Infinitive || !!r.tags.PresentTense;
                                if (r.tags.Noun) return !0;
                                var n = t.get(r.next);
                                return !(!n || !n.tags.Noun || n.tags.Pronoun) || (r.tags.Adjective || r.tags.Adverb || r.tags.Verb, !1)
                            }(e, t.pool)) return e.tag("#Possessive", "isPossessive", r), null;
                        if (null !== n) return function(e, t) {
                            var r = t.terms(),
                                n = r.indexOf(e);
                            return r.slice(n + 1, n + 3).find((function(e) {
                                return e.tags.PastTense
                            }))
                        }(e, t) ? [n[1], "has"] : [n[1], "is"]
                    }
                    return null
                },
                Na = /[a-z\u00C0-\u00FF]'d$/,
                Fa = {
                    how: !0,
                    what: !0
                },
                za = function(e, t) {
                    if (Na.test(e.clean)) {
                        for (var r = e.clean.replace(/'d$/, ""), n = t.terms(), a = n.indexOf(e), i = n.slice(a + 1, a + 4), o = 0; o < i.length; o++) {
                            var s = i[o];
                            if (s.tags.Verb) return s.tags.PastTense ? [r, "had"] : !0 === Fa[r] ? [r, "did"] : [r, "would"]
                        }
                        return [r, "would"]
                    }
                    return null
                },
                Oa = /^([0-9]+)[-–—]([0-9]+)$/i,
                _a = function(e) {
                    if (!0 === e.tags.PhoneNumber) return null;
                    var t = e.text.match(Oa);
                    return null !== t ? [t[1], "to", t[2]] : null
                },
                Ta = /^(l|c|d|j|m|n|qu|s|t)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z\u00C0-\u00FF]+)$/i,
                Ia = {
                    l: "le",
                    c: "ce",
                    d: "de",
                    j: "je",
                    m: "me",
                    n: "ne",
                    qu: "que",
                    s: "se",
                    t: "tu"
                },
                Va = function(e) {
                    var t = e.text.match(Ta);
                    if (null === t || !1 === Ia.hasOwnProperty(t[1])) return null;
                    var r = [Ia[t[1]], t[2]];
                    return r[0] && r[1] ? r : null
                },
                Ha = /^[0-9]+$/,
                Sa = function(e, t) {
                    var r = xt(e.join(" "), t.world, t.pool())[0],
                        n = r.terms();
                    return Pn(n, t.world), n.forEach((function(e) {
                        e.implicit = e.text, e.text = "", e.clean = "", e.pre = "", e.post = "", Ha.test(e.implicit) && (e.tags.Number = !0, e.tags.Cardinal = !0)
                    })), r
                },
                Ma = function(e) {
                    var t = e.world;
                    return e.list.forEach((function(r) {
                        for (var n = r.terms(), a = 0; a < n.length; a += 1) {
                            var i = n[a],
                                o = xa(i, r);
                            if (null !== (o = (o = (o = (o = (o = (o = o || Ba(i)) || Ca(i)) || Ea(i, r, t)) || za(i, r)) || _a(i)) || Va(i))) {
                                var s = Sa(o, e);
                                !0 === r.has("#NumberRange") && e.buildFrom([s]).tag("NumberRange"), s.terms(0).text = i.text, r.buildFrom(i.id, 1, e.pool()).replace(s, e, !0)
                            }
                        }
                    })), e
                },
                La = function(e, t) {
                    var r = e._cache.tags[t] || [];
                    return r = r.map((function(t) {
                        return e.list[t]
                    })), e.buildFrom(r)
                },
                qa = function(e) {
                    var t = function(e, t) {
                        var r = e._cache.words[t] || [];
                        return r = r.map((function(t) {
                            return e.list[t]
                        })), e.buildFrom(r)
                    }(e, "like");
                    return t.match("#Adverb like").notIf("(really|generally|typically|usually|sometimes|often) [like]").tag("Adverb", "adverb-like"), (t = La(e, "Adjective")).match("#Determiner #Adjective$").notIf("(#Comparative|#Superlative)").terms(1).tag("Noun", "the-adj-1"), (t = La(e, "FirstName")).match("#FirstName (#Noun|@titleCase)").ifNo("^#Possessive").ifNo("#Pronoun").lastTerm().tag("#LastName", "firstname-noun"), (t = (t = La(e, "Value")).match("#Value #PresentTense")).found && (!0 === t.has("(one|1)") ? t.terms(1).tag("Singular", "one-presentTense") : t.terms(1).tag("Plural", "value-presentTense")), e.match("^(well|so|okay)").tag("Expression", "well-"), (t = La(e, "Gerund")).match("(be|been) (#Adverb|not)+? #Gerund").not("#Verb$").tag("Auxiliary", "be-walking"), e.match("(try|use|attempt|build|make) #Verb").ifNo("(@hasComma|#Negative|#Copula|will|be)").lastTerm().tag("#Noun", "do-verb"), (t = (t = La(e, "Possessive")).match("#Possessive [#Infinitive]", 0)).lookBehind("(let|made|make|force|ask)").found || t.tag("Noun", "her-match"), e
                },
                Wa = function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
                    return Object.keys(t)
                },
                Ja = [{
                    match: "too much",
                    tag: "Adverb Adjective",
                    reason: "bit-4"
                }, {
                    match: "u r",
                    tag: "Pronoun Copula",
                    reason: "u r"
                }, {
                    match: "#Copula (pretty|dead|full|well) (#Adjective|#Noun)",
                    tag: "#Copula #Adverb #Adjective",
                    reason: "sometimes-adverb"
                }, {
                    match: "[#Gerund] #Adverb? not? #Copula",
                    group: 0,
                    tag: "Activity",
                    reason: "gerund-copula"
                }, {
                    match: "[#Gerund] #Modal",
                    group: 0,
                    tag: "Activity",
                    reason: "gerund-modal"
                }, {
                    match: "holy (shit|fuck|hell)",
                    tag: "Expression",
                    reason: "swears-expression"
                }, {
                    match: "#Noun #Actor",
                    tag: "Actor",
                    reason: "thing-doer"
                }, {
                    match: "#Conjunction [u]",
                    group: 0,
                    tag: "Pronoun",
                    reason: "u-pronoun-2"
                }, {
                    match: "[u] #Verb",
                    group: 0,
                    tag: "Pronoun",
                    reason: "u-pronoun-1"
                }, {
                    match: "#Noun [(who|whom)]",
                    group: 0,
                    tag: "Determiner",
                    reason: "captain-who"
                }, {
                    match: "that #Noun [#Verb]",
                    group: 0,
                    tag: "Determiner",
                    reason: "that-determiner"
                }, {
                    match: "a bit much",
                    tag: "Determiner Adverb Adjective",
                    reason: "bit-3"
                }, {
                    match: "#Verb #Adverb? #Noun [(that|which)]",
                    group: 0,
                    tag: "Preposition",
                    reason: "that-prep"
                }, {
                    match: "@hasComma [which] (#Pronoun|#Verb)",
                    group: 0,
                    tag: "Preposition",
                    reason: "which-copula"
                }, {
                    match: "just [like]",
                    group: 0,
                    tag: "Preposition",
                    reason: "like-preposition"
                }, {
                    match: "#Noun [like] #Noun",
                    group: 0,
                    tag: "Preposition",
                    reason: "noun-like"
                }, {
                    match: "#Noun [#Particle]",
                    group: 0,
                    tag: "Preposition",
                    reason: "repair-noPhrasal"
                }, {
                    match: "[had] #Noun+ #PastTense",
                    group: 0,
                    tag: "Condition",
                    reason: "had-he"
                }, {
                    match: "[were] #Noun+ to #Infinitive",
                    group: 0,
                    tag: "Condition",
                    reason: "were-he"
                }, {
                    match: "^how",
                    tag: "QuestionWord",
                    reason: "how-question"
                }, {
                    match: "[how] (#Determiner|#Copula|#Modal|#PastTense)",
                    group: 0,
                    tag: "QuestionWord",
                    reason: "how-is"
                }, {
                    match: "^which",
                    tag: "QuestionWord",
                    reason: "which-question"
                }, {
                    match: "[which] . (#Noun)+ #Pronoun",
                    group: 0,
                    tag: "QuestionWord",
                    reason: "which-question2"
                }, {
                    match: "[so] #Noun",
                    group: 0,
                    tag: "Conjunction",
                    reason: "so-conj"
                }, {
                    match: "[(who|what|where|why|how|when)] #Noun #Copula #Adverb? (#Verb|#Adjective)",
                    group: 0,
                    tag: "Conjunction",
                    reason: "how-he-is-x"
                }, {
                    match: "[(who|what|where|why|how|when)] #Noun #Adverb? #Infinitive not? #Gerund",
                    group: 0,
                    tag: "Conjunction",
                    reason: "when i go fishing"
                }],
                Ra = "(april|june|may|jan|august|eve)",
                Ka = [{
                    match: "#Holiday (day|eve)",
                    tag: "Holiday",
                    reason: "holiday-day"
                }, {
                    match: "[sun] the #Ordinal",
                    tag: "WeekDay",
                    reason: "sun-the-5th"
                }, {
                    match: "[sun] #Date",
                    group: 0,
                    tag: "WeekDay",
                    reason: "sun-feb"
                }, {
                    match: "#Date (on|this|next|last|during)? [sun]",
                    group: 0,
                    tag: "WeekDay",
                    reason: "1pm-sun"
                }, {
                    match: "(in|by|before|during|on|until|after|of|within|all) [sat]",
                    group: 0,
                    tag: "WeekDay",
                    reason: "sat"
                }, {
                    match: "[sat] #Date",
                    group: 0,
                    tag: "WeekDay",
                    reason: "sat-feb"
                }, {
                    match: "#Preposition [(march|may)]",
                    group: 0,
                    tag: "Month",
                    reason: "in-month"
                }, {
                    match: "this [(march|may)]",
                    group: 0,
                    tag: "Month",
                    reason: "this-month"
                }, {
                    match: "next [(march|may)]",
                    group: 0,
                    tag: "Month",
                    reason: "this-month"
                }, {
                    match: "last [(march|may)]",
                    group: 0,
                    tag: "Month",
                    reason: "this-month"
                }, {
                    match: "[(march|may)] the? #Value",
                    group: 0,
                    tag: "Month",
                    reason: "march-5th"
                }, {
                    match: "#Value of? [(march|may)]",
                    group: 0,
                    tag: "Month",
                    reason: "5th-of-march"
                }, {
                    match: "[(march|may)] .? #Date",
                    group: 0,
                    tag: "Month",
                    reason: "march-and-feb"
                }, {
                    match: "#Date .? [(march|may)]",
                    group: 0,
                    tag: "Month",
                    reason: "feb-and-march"
                }, {
                    match: "#Adverb [(march|may)]",
                    group: 0,
                    tag: "Infinitive",
                    reason: "quickly-march"
                }, {
                    match: "(march|may) [#Adverb]",
                    group: 0,
                    tag: "Infinitive",
                    reason: "march-quickly"
                }, {
                    match: "#Value of #Month",
                    tag: "Date",
                    reason: "value-of-month"
                }, {
                    match: "#Cardinal #Month",
                    tag: "Date",
                    reason: "cardinal-month"
                }, {
                    match: "#Month #Value to #Value",
                    tag: "Date",
                    reason: "value-to-value"
                }, {
                    match: "#Month the #Value",
                    tag: "Date",
                    reason: "month-the-value"
                }, {
                    match: "(#WeekDay|#Month) #Value",
                    tag: "Date",
                    reason: "date-value"
                }, {
                    match: "#Value (#WeekDay|#Month)",
                    tag: "Date",
                    reason: "value-date"
                }, {
                    match: "(#TextValue && #Date) #TextValue",
                    tag: "Date",
                    reason: "textvalue-date"
                }, {
                    match: "in [".concat(Ra, "]"),
                    group: 0,
                    tag: "Date",
                    reason: "in-june"
                }, {
                    match: "during [".concat(Ra, "]"),
                    group: 0,
                    tag: "Date",
                    reason: "in-june"
                }, {
                    match: "on [".concat(Ra, "]"),
                    group: 0,
                    tag: "Date",
                    reason: "in-june"
                }, {
                    match: "by [".concat(Ra, "]"),
                    group: 0,
                    tag: "Date",
                    reason: "in-june"
                }, {
                    match: "before [".concat(Ra, "]"),
                    group: 0,
                    tag: "Date",
                    reason: "in-june"
                }, {
                    match: "#Date [".concat(Ra, "]"),
                    group: 0,
                    tag: "Date",
                    reason: "in-june"
                }, {
                    match: "".concat(Ra, " #Value"),
                    tag: "Date",
                    reason: "june-5th"
                }, {
                    match: "".concat(Ra, " #Date"),
                    tag: "Date",
                    reason: "june-5th"
                }, {
                    match: "".concat(Ra, " #ProperNoun"),
                    tag: "Person",
                    reason: "june-smith",
                    safe: !0
                }, {
                    match: "".concat(Ra, " #Acronym? (#ProperNoun && !#Month)"),
                    tag: "Person",
                    reason: "june-smith-jr"
                }, {
                    match: "#Cardinal [second]",
                    tag: "Unit",
                    reason: "one-second"
                }],
                Ua = "(misty|rusty|dusty|rich|randy)",
                Qa = [{
                    match: "[all] #Determiner? #Noun",
                    group: 0,
                    tag: "Adjective",
                    reason: "all-noun"
                }, {
                    match: "#Adverb [".concat(Ua, "]"),
                    group: 0,
                    tag: "Adjective",
                    reason: "really-rich"
                }, {
                    match: "".concat(Ua, " #Person"),
                    tag: "Person",
                    reason: "randy-smith"
                }, {
                    match: "".concat(Ua, " #Acronym? #ProperNoun"),
                    tag: "Person",
                    reason: "rusty-smith"
                }, {
                    match: "#Copula [(just|alone)]$",
                    group: 0,
                    tag: "Adjective",
                    reason: "not-adverb"
                }, {
                    match: "#Singular is #Adverb? [#PastTense$]",
                    group: 0,
                    tag: "Adjective",
                    reason: "is-filled"
                }, {
                    match: "[#PastTense] #Singular is",
                    group: 0,
                    tag: "Adjective",
                    reason: "smoked-poutine"
                }, {
                    match: "[#PastTense] #Plural are",
                    group: 0,
                    tag: "Adjective",
                    reason: "baked-onions"
                }, {
                    match: "(a|an) [#Gerund]",
                    group: 0,
                    tag: "Adjective",
                    reason: "a|an"
                }, {
                    match: "#Copula [fucked up?]",
                    tag: "Adjective",
                    reason: "swears-adjective"
                }, {
                    match: "#Singular (seems|appears) #Adverb? [#PastTense$]",
                    group: 0,
                    tag: "Adjective",
                    reason: "seems-filled"
                }],
                Za = "(pat|wade|ollie|will|rob|buck|bob|mark|jack)",
                Xa = [{
                    match: "#Noun #Adverb? [left]",
                    group: 0,
                    tag: "PastTense",
                    reason: "left-verb"
                }, {
                    match: "(this|that) [#Plural]",
                    group: 0,
                    tag: "PresentTense",
                    reason: "this-verbs"
                }, {
                    match: "[#Copula (#Adverb|not)+?] (#Gerund|#PastTense)",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "copula-walking"
                }, {
                    match: "[(has|had) (#Adverb|not)+?] #PastTense",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "had-walked"
                }, {
                    match: "[(#Modal|did) (#Adverb|not)+?] #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "modal-verb"
                }, {
                    match: "[#Modal (#Adverb|not)+? have (#Adverb|not)+? had (#Adverb|not)+?] #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "would-have"
                }, {
                    match: "#Modal (#Adverb|not)+? be (#Adverb|not)+? #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "would-be"
                }, {
                    match: "(#Modal|had|has) (#Adverb|not)+? been (#Adverb|not)+? #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "had-been"
                }, {
                    match: "[#Copula (#Adverb|not)+?] (#Gerund|#PastTense)",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "copula-walking"
                }, {
                    match: "[(has|had) (#Adverb|not)+?] #PastTense",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "had-walked"
                }, {
                    match: "[(#Modal|did) (#Adverb|not)+?] #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "modal-verb"
                }, {
                    match: "[(do|does|will|have|had)] (not|#Adverb)? #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "have-had"
                }, {
                    match: "[about to] #Adverb? #Verb",
                    group: 0,
                    tag: ["Auxiliary", "Verb"],
                    reason: "about-to"
                }, {
                    match: "#Modal (#Adverb|not)+? be (#Adverb|not)+? #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "would-be"
                }, {
                    match: "[#Modal (#Adverb|not)+? have (#Adverb|not)+? had (#Adverb|not)+?] #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "would-have"
                }, {
                    match: "(#Modal|had|has) (#Adverb|not)+? been (#Adverb|not)+? #Verb",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "had-been"
                }, {
                    match: "[being] #Participle",
                    group: 0,
                    tag: "Auxiliary",
                    reason: "being-foo"
                }, {
                    match: "(#Verb && @hasHyphen) up",
                    group: 0,
                    tag: "PhrasalVerb",
                    reason: "foo-up"
                }, {
                    match: "(#Verb && @hasHyphen) off",
                    group: 0,
                    tag: "PhrasalVerb",
                    reason: "foo-off"
                }, {
                    match: "(#Verb && @hasHyphen) over",
                    group: 0,
                    tag: "PhrasalVerb",
                    reason: "foo-over"
                }, {
                    match: "(#Verb && @hasHyphen) out",
                    group: 0,
                    tag: "PhrasalVerb",
                    reason: "foo-out"
                }, {
                    match: "#PhrasalVerb [#PhrasalVerb]",
                    group: 0,
                    tag: "Particle",
                    reason: "phrasal-particle"
                }, {
                    match: "[will #Adverb? not? #Adverb? be] #Gerund",
                    group: 0,
                    tag: "Copula",
                    reason: "will-be-copula"
                }, {
                    match: "will #Adverb? not? #Adverb? [be] #Adjective",
                    group: 0,
                    tag: "Copula",
                    reason: "be-copula"
                }, {
                    match: "[march] (up|down|back|to|toward)",
                    group: 0,
                    tag: "Infinitive",
                    reason: "march-to"
                }, {
                    match: "#Modal [march]",
                    group: 0,
                    tag: "Infinitive",
                    reason: "must-march"
                }, {
                    match: "(let|make|made) (him|her|it|#Person|#Place|#Organization)+ [#Singular] (a|an|the|it)",
                    group: 0,
                    tag: "Infinitive",
                    reason: "let-him-glue"
                }, {
                    match: "#Noun #Adverb [#Noun]",
                    group: 0,
                    tag: "Verb",
                    reason: "quickly-foo"
                }, {
                    match: "will [#Adjective]",
                    group: 0,
                    tag: "Verb",
                    reason: "will-adj"
                }, {
                    match: "#Pronoun [#Adjective] #Determiner #Adjective? #Noun",
                    group: 0,
                    tag: "Verb",
                    reason: "he-adj-the"
                }, {
                    match: "#Copula [#Adjective to] #Verb",
                    group: 0,
                    tag: "Verb",
                    reason: "adj-to"
                }, {
                    match: "[open] #Determiner",
                    group: 0,
                    tag: "Infinitive",
                    reason: "open-the"
                }, {
                    match: "#Modal [".concat(Za, "]"),
                    group: 0,
                    tag: "Verb",
                    reason: "would-mark"
                }, {
                    match: "#Adverb [".concat(Za, "]"),
                    group: 0,
                    tag: "Verb",
                    reason: "really-mark"
                }, {
                    match: "".concat(Za, " #Person"),
                    tag: "Person",
                    reason: "rob-smith"
                }, {
                    match: "".concat(Za, " #Acronym? #ProperNoun"),
                    tag: "Person",
                    reason: "rob-a-smith"
                }, {
                    match: "[shit] (#Determiner|#Possessive|them)",
                    group: 0,
                    tag: "Verb",
                    reason: "swear1-verb"
                }, {
                    match: "[damn] (#Determiner|#Possessive|them)",
                    group: 0,
                    tag: "Verb",
                    reason: "swear2-verb"
                }, {
                    match: "[fuck] (#Determiner|#Possessive|them)",
                    group: 0,
                    tag: "Verb",
                    reason: "swear3-verb"
                }],
                Ya = "(paris|alexandria|houston|kobe|salvador|sydney)",
                ei = [{
                    match: "(west|north|south|east|western|northern|southern|eastern)+ #Place",
                    tag: "Region",
                    reason: "west-norfolk"
                }, {
                    match: "#City [(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|or|pa|sc|tn|tx|ut|vt|pr)]",
                    group: 0,
                    tag: "Region",
                    reason: "us-state"
                }, {
                    match: "#ProperNoun+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)",
                    tag: "Region",
                    reason: "foo-district"
                }, {
                    match: "(district|region|province|municipality|territory|burough|state) of #ProperNoun",
                    tag: "Region",
                    reason: "district-of-Foo"
                }, {
                    match: "in [#ProperNoun] #Place",
                    group: 0,
                    tag: "Place",
                    reason: "propernoun-place"
                }, {
                    match: "#Value #Noun (st|street|rd|road|crescent|cr|way|tr|terrace|avenue|ave)",
                    tag: "Address",
                    reason: "address-st"
                }, {
                    match: "in [".concat(Ya, "]"),
                    group: 0,
                    tag: "Place",
                    reason: "in-paris"
                }, {
                    match: "near [".concat(Ya, "]"),
                    group: 0,
                    tag: "Place",
                    reason: "near-paris"
                }, {
                    match: "at [".concat(Ya, "]"),
                    group: 0,
                    tag: "Place",
                    reason: "at-paris"
                }, {
                    match: "from [".concat(Ya, "]"),
                    group: 0,
                    tag: "Place",
                    reason: "from-paris"
                }, {
                    match: "to [".concat(Ya, "]"),
                    group: 0,
                    tag: "Place",
                    reason: "to-paris"
                }, {
                    match: "#Place [".concat(Ya, "]"),
                    group: 0,
                    tag: "Place",
                    reason: "tokyo-paris"
                }, {
                    match: "[".concat(Ya, "] #Place"),
                    group: 0,
                    tag: "Place",
                    reason: "paris-france"
                }],
                ti = "(rose|robin|dawn|ray|holly|bill|joy|viola|penny|sky|violet|daisy|melody|kelvin|hope|mercedes|olive|jewel|faith|van|charity|miles|lily|summer|dolly|rod|dick|cliff|lane|reed|kitty|art|jean|trinity)",
                ri = "(january|april|may|june|jan|sep)",
                ni = [{
                    match: "[(1st|2nd|first|second)] #Honorific",
                    group: 0,
                    tag: "Honorific",
                    reason: "ordinal-honorific"
                }, {
                    match: "[(private|general|major|corporal|lord|lady|secretary|premier)] #Honorific? #Person",
                    group: 0,
                    tag: "Honorific",
                    reason: "ambg-honorifics"
                }, {
                    match: "#Copula [(#Noun|#PresentTense)] #LastName",
                    group: 0,
                    tag: "FirstName",
                    reason: "copula-noun-lastname"
                }, {
                    match: "(lady|queen|sister) #ProperNoun",
                    tag: "FemaleName",
                    reason: "lady-titlecase",
                    safe: !0
                }, {
                    match: "(king|pope|father) #ProperNoun",
                    tag: "MaleName",
                    reason: "pope-titlecase",
                    safe: !0
                }, {
                    match: "[(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill)] #LastName",
                    group: 0,
                    tag: "FirstName",
                    reason: "maybe-lastname"
                }, {
                    match: "#FirstName [#Determiner #Noun] #LastName",
                    group: 0,
                    tag: "NickName",
                    reason: "first-noun-last"
                }, {
                    match: "#Possessive [#FirstName]",
                    group: 0,
                    tag: "Person",
                    reason: "possessive-name"
                }, {
                    match: "#Acronym #ProperNoun",
                    tag: "Person",
                    reason: "acronym-titlecase",
                    safe: !0
                }, {
                    match: "#Person (jr|sr|md)",
                    tag: "Person",
                    reason: "person-honorific"
                }, {
                    match: "#Person #Person the? #RomanNumeral",
                    tag: "Person",
                    reason: "roman-numeral"
                }, {
                    match: "#FirstName [/^[^aiurck]$/]",
                    group: 0,
                    tag: ["Acronym", "Person"],
                    reason: "john-e"
                }, {
                    match: "#Honorific #Person",
                    tag: "Person",
                    reason: "honorific-person"
                }, {
                    match: "#Honorific #Acronym",
                    tag: "Person",
                    reason: "Honorific-TitleCase"
                }, {
                    match: "#Noun van der? #Noun",
                    tag: "Person",
                    reason: "von der noun",
                    safe: !0
                }, {
                    match: "(king|queen|prince|saint|lady) of? #Noun",
                    tag: "Person",
                    reason: "king-of-noun",
                    safe: !0
                }, {
                    match: "[#ProperNoun] #Person",
                    group: 0,
                    tag: "Person",
                    reason: "proper-person",
                    safe: !0
                }, {
                    match: "al (#Person|#ProperNoun)",
                    tag: "Person",
                    reason: "al-borlen",
                    safe: !0
                }, {
                    match: "#FirstName de #Noun",
                    tag: "Person",
                    reason: "bill-de-noun"
                }, {
                    match: "#FirstName (bin|al) #Noun",
                    tag: "Person",
                    reason: "bill-al-noun"
                }, {
                    match: "#FirstName #Acronym #ProperNoun",
                    tag: "Person",
                    reason: "bill-acronym-title"
                }, {
                    match: "#FirstName #FirstName #ProperNoun",
                    tag: "Person",
                    reason: "bill-firstname-title"
                }, {
                    match: "#Honorific #FirstName? #ProperNoun",
                    tag: "Person",
                    reason: "dr-john-Title"
                }, {
                    match: "#FirstName the #Adjective",
                    tag: "Person",
                    reason: "name-the-great"
                }, {
                    match: "#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)",
                    tag: "Person",
                    reason: "bill-green"
                }, {
                    match: "".concat(ti, " #Person"),
                    tag: "Person",
                    reason: "ray-smith",
                    safe: !0
                }, {
                    match: "".concat(ti, " #Acronym? #ProperNoun"),
                    tag: "Person",
                    reason: "ray-a-smith",
                    safe: !0
                }, {
                    match: "#Infinitive #Determiner? #Adjective? #Noun? (to|for) [".concat(ri, "]"),
                    group: 0,
                    tag: "Person",
                    reason: "ambig-person"
                }, {
                    match: "#Infinitive [".concat(ri, "]"),
                    group: 0,
                    tag: "Person",
                    reason: "infinitive-person"
                }, {
                    match: "[".concat(ri, "] #PresentTense for"),
                    group: 0,
                    tag: "Person",
                    reason: "ambig-active-for"
                }, {
                    match: "[".concat(ri, "] #PresentTense to"),
                    group: 0,
                    tag: "Person",
                    reason: "ambig-active-to"
                }, {
                    match: "[".concat(ri, "] #Modal"),
                    group: 0,
                    tag: "Person",
                    reason: "ambig-modal"
                }, {
                    match: "#Modal [".concat(ri, "]"),
                    group: 0,
                    tag: "Person",
                    reason: "modal-ambig"
                }, {
                    match: "#Copula [".concat(ri, "]"),
                    group: 0,
                    tag: "Person",
                    reason: "is-may"
                }, {
                    match: "[".concat(ri, "] #Copula"),
                    group: 0,
                    tag: "Person",
                    reason: "may-is"
                }, {
                    match: "that [".concat(ri, "]"),
                    group: 0,
                    tag: "Person",
                    reason: "that-month"
                }, {
                    match: "with [".concat(ri, "]"),
                    group: 0,
                    tag: "Person",
                    reason: "with-month"
                }, {
                    match: "for [".concat(ri, "]"),
                    group: 0,
                    tag: "Person",
                    reason: "for-month"
                }, {
                    match: "this [".concat(ri, "]"),
                    group: 0,
                    tag: "Month",
                    reason: "this-may"
                }, {
                    match: "next [".concat(ri, "]"),
                    group: 0,
                    tag: "Month",
                    reason: "next-may"
                }, {
                    match: "last [".concat(ri, "]"),
                    group: 0,
                    tag: "Month",
                    reason: "last-may"
                }, {
                    match: "#Date [".concat(ri, "]"),
                    group: 0,
                    tag: "Month",
                    reason: "date-may"
                }, {
                    match: "[".concat(ri, "] the? #Value"),
                    group: 0,
                    tag: "Month",
                    reason: "may-5th"
                }, {
                    match: "#Value of [".concat(ri, "]"),
                    group: 0,
                    tag: "Month",
                    reason: "5th-of-may"
                }, {
                    match: "#ProperNoun (van|al|bin) #ProperNoun",
                    tag: "Person",
                    reason: "title-van-title",
                    safe: !0
                }, {
                    match: "#ProperNoun (de|du) la? #ProperNoun",
                    tag: "Person",
                    reason: "title-de-title",
                    safe: !0
                }, {
                    match: "#Singular #Acronym #LastName",
                    tag: "#Person",
                    reason: "title-acro-noun",
                    safe: !0
                }, {
                    match: "#FirstName (#Noun && #ProperNoun) #ProperNoun?",
                    tag: "Person",
                    reason: "firstname-titlecase"
                }, {
                    match: "#FirstName #Acronym #Noun",
                    tag: "Person",
                    reason: "n-acro-noun",
                    safe: !0
                }],
                ai = [];
            ai = (ai = (ai = (ai = (ai = (ai = (ai = (ai = (ai = (ai = ai.concat(Ja)).concat(Ka)).concat([{
                match: "there (are|were) #Adjective? [#PresentTense]",
                group: 0,
                tag: "Plural",
                reason: "there-are"
            }, {
                match: "#Determiner [sun]",
                group: 0,
                tag: "Singular",
                reason: "the-sun"
            }, {
                match: "#Verb (a|an) [#Value]",
                group: 0,
                tag: "Singular",
                reason: "did-a-value"
            }, {
                match: "#Determiner [(can|will|may)]",
                group: 0,
                tag: "Singular",
                reason: "the can"
            }, {
                match: "#FirstName #Acronym? (#Possessive && #LastName)",
                tag: "Possessive",
                reason: "name-poss"
            }, {
                match: "#Organization+ #Possessive",
                tag: "Possessive",
                reason: "org-possessive"
            }, {
                match: "#Place+ #Possessive",
                tag: "Possessive",
                reason: "place-possessive"
            }, {
                match: "#Adjective [#PresentTense]",
                group: 0,
                tag: "Noun",
                reason: "adj-presentTense"
            }, {
                match: "(his|her|its) [#Adjective]",
                group: 0,
                tag: "Noun",
                reason: "his-fine"
            }, {
                match: "some [#Verb] #Plural",
                group: 0,
                tag: "Noun",
                reason: "determiner6"
            }, {
                match: "more #Noun",
                tag: "Noun",
                reason: "more-noun"
            }, {
                match: "(#Noun && @hasComma) #Noun (and|or) [#PresentTense]",
                group: 0,
                tag: "Noun",
                reason: "noun-list"
            }, {
                match: "(right|rights) of .",
                tag: "Noun",
                reason: "right-of"
            }, {
                match: "a [bit]",
                group: 0,
                tag: "Noun",
                reason: "bit-2"
            }, {
                match: "#Gerund #Determiner [#Infinitive]",
                group: 0,
                tag: "Noun",
                reason: "running-a-show"
            }, {
                match: "#Determiner #Adverb [#Infinitive]",
                group: 0,
                tag: "Noun",
                reason: "the-reason"
            }, {
                match: "(the|this|those|these) #Adjective [#Verb]",
                group: 0,
                tag: "Noun",
                reason: "the-adj-verb"
            }, {
                match: "(the|this|those|these) #Adverb #Adjective [#Verb]",
                group: 0,
                tag: "Noun",
                reason: "determiner4"
            }, {
                match: "#Determiner [#Adjective] (#Copula|#PastTense|#Auxiliary)",
                group: 0,
                tag: "Noun",
                reason: "the-adj-2"
            }, {
                match: "(the|this|a|an) [#Infinitive] #Adverb? #Verb",
                group: 0,
                tag: "Noun",
                reason: "determiner5"
            }, {
                match: "#Determiner [#Infinitive] #Noun",
                group: 0,
                tag: "Noun",
                reason: "determiner7"
            }, {
                match: "#Determiner #Adjective [#Infinitive]$",
                group: 0,
                tag: "Noun",
                reason: "a-inf"
            }, {
                match: "(the|this) [#Verb] #Preposition .",
                group: 0,
                tag: "Noun",
                reason: "determiner1"
            }, {
                match: "#Determiner [#Verb] of",
                group: 0,
                tag: "Noun",
                reason: "the-verb-of"
            }, {
                match: "#Determiner #Noun of [#Verb]",
                group: 0,
                tag: "Noun",
                reason: "noun-of-noun"
            }, {
                match: "#Determiner [(western|eastern|northern|southern|central)] #Noun",
                group: 0,
                tag: "Noun",
                reason: "western-line"
            }, {
                match: "#Possessive [#Gerund]",
                group: 0,
                tag: "Noun",
                reason: "her-polling"
            }, {
                match: "(his|her|its) [#PresentTense]",
                group: 0,
                tag: "Noun",
                reason: "its-polling"
            }, {
                match: "(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun",
                group: 0,
                tag: "Noun",
                reason: "technical-noun"
            }, {
                match: "(the|those|these) #Adjective? [#Infinitive]",
                group: 0,
                tag: "Noun",
                reason: "det-inf"
            }, {
                match: "(the|those|these) #Adjective? [#PresentTense]",
                group: 0,
                tag: "Noun",
                reason: "det-pres"
            }, {
                match: "(the|those|these) #Adjective? [#PastTense]",
                group: 0,
                tag: "Noun",
                reason: "det-past"
            }, {
                match: "(#Noun && @hasHyphen) #Verb",
                tag: "Noun",
                reason: "hyphen-verb"
            }, {
                match: "is no [#Verb]",
                group: 0,
                tag: "Noun",
                reason: "is-no-verb"
            }, {
                match: "[#Verb] than",
                group: 0,
                tag: "Noun",
                reason: "correction"
            }, {
                match: "(go|goes|went) to [#Infinitive]",
                group: 0,
                tag: "Noun",
                reason: "goes-to-verb"
            }, {
                match: "(a|an) #Adjective [(#Infinitive|#PresentTense)]",
                tag: "Noun",
                reason: "a|an2"
            }, {
                match: "(a|an) #Noun [#Infinitive]",
                group: 0,
                tag: "Noun",
                reason: "a-noun-inf"
            }, {
                match: "do [so]",
                group: 0,
                tag: "Noun",
                reason: "so-noun"
            }, {
                match: "#Copula [#Infinitive] #Noun",
                group: 0,
                tag: "Noun",
                reason: "is-pres-noun"
            }, {
                match: "#Determiner #Adverb? [close]",
                group: 0,
                tag: "Adjective",
                reason: "a-close"
            }, {
                match: "#Determiner [(shit|damn|hell)]",
                group: 0,
                tag: "Noun",
                reason: "swears-noun"
            }])).concat(Qa)).concat([{
                match: "[still] #Adjective",
                group: 0,
                tag: "Adverb",
                reason: "still-advb"
            }, {
                match: "[still] #Verb",
                group: 0,
                tag: "Adverb",
                reason: "still-verb"
            }, {
                match: "[so] #Adjective",
                group: 0,
                tag: "Adverb",
                reason: "so-adv"
            }, {
                match: "[all] #Verb",
                group: 0,
                tag: "Adverb",
                reason: "all-verb"
            }, {
                match: "#Verb [like]",
                group: 0,
                tag: "Adverb",
                reason: "verb-like"
            }, {
                match: "(barely|hardly) even",
                tag: "Adverb",
                reason: "barely-even"
            }, {
                match: "#PresentTense [(hard|quick|long|bright|slow)]",
                group: 0,
                tag: "Adverb",
                reason: "lazy-ly"
            }, {
                match: "[much] #Adjective",
                group: 0,
                tag: "Adverb",
                reason: "bit-1"
            }])).concat([{
                match: "1 #Value #PhoneNumber",
                tag: "PhoneNumber",
                reason: "1-800-Value"
            }, {
                match: "#NumericValue #PhoneNumber",
                tag: "PhoneNumber",
                reason: "(800) PhoneNumber"
            }, {
                match: "#Demonym #Currency",
                tag: "Currency",
                reason: "demonym-currency"
            }, {
                match: "[second] #Noun",
                group: 0,
                tag: "Ordinal",
                reason: "second-noun"
            }, {
                match: "#Value+ [#Currency]",
                group: 0,
                tag: "Unit",
                reason: "5-yan"
            }, {
                match: "#Value [(foot|feet)]",
                group: 0,
                tag: "Unit",
                reason: "foot-unit"
            }, {
                match: "(minus|negative) #Value",
                tag: "Value",
                reason: "minus-value"
            }, {
                match: "#Value [#Abbreviation]",
                group: 0,
                tag: "Unit",
                reason: "value-abbr"
            }, {
                match: "#Value [k]",
                group: 0,
                tag: "Unit",
                reason: "value-k"
            }, {
                match: "#Unit an hour",
                tag: "Unit",
                reason: "unit-an-hour"
            }, {
                match: "#Value (point|decimal) #Value",
                tag: "Value",
                reason: "value-point-value"
            }, {
                match: "(#Value|a) [(buck|bucks|grand)]",
                group: 0,
                tag: "Currency",
                reason: "value-bucks"
            }, {
                match: "#Determiner [(half|quarter)] #Ordinal",
                group: 0,
                tag: "Value",
                reason: "half-ordinal"
            }, {
                match: "a #Value",
                tag: "Value",
                reason: "a-value"
            }, {
                match: "[#Value+] #Currency",
                group: 0,
                tag: "Money",
                reason: "15 usd"
            }, {
                match: "(hundred|thousand|million|billion|trillion|quadrillion)+ and #Value",
                tag: "Value",
                reason: "magnitude-and-value"
            }, {
                match: "[(a|an)] (#Duration|hundred|thousand|million|billion|trillion)",
                group: 0,
                tag: "Value",
                reason: "a-is-one"
            }])).concat(Xa)).concat(ei)).concat([{
                match: "#Noun (&|n) #Noun",
                tag: "Organization",
                reason: "Noun-&-Noun"
            }, {
                match: "#Organization of the? #ProperNoun",
                tag: "Organization",
                reason: "org-of-place",
                safe: !0
            }, {
                match: "#Organization #Country",
                tag: "Organization",
                reason: "org-country"
            }, {
                match: "#ProperNoun #Organization",
                tag: "Organization",
                reason: "titlecase-org"
            }, {
                match: "#ProperNoun (ltd|co|inc|dept|assn|bros)",
                tag: "Organization",
                reason: "org-abbrv"
            }, {
                match: "the [#Acronym]",
                group: 0,
                tag: "Organization",
                reason: "the-acronym",
                safe: !0
            }, {
                match: "(world|global|international|national|#Demonym) #Organization",
                tag: "Organization",
                reason: "global-org"
            }, {
                match: "#Noun+ (public|private) school",
                tag: "School",
                reason: "noun-public-school"
            }])).concat(ni);
            var ii = [];
            ai.forEach((function(e) {
                e.reg = Ue(e.match);
                var t = function(e) {
                    var t = [];
                    if (1 === e.reg.filter((function(e) {
                            return void 0 !== e.oneOf
                        })).length) {
                        var r = e.reg.findIndex((function(e) {
                            return void 0 !== e.oneOf
                        }));
                        Object.keys(e.reg[r].oneOf).forEach((function(n) {
                            var a = Object.assign({}, e);
                            a.reg = a.reg.slice(0), a.reg[r] = Object.assign({}, a.reg[r]), a.reg[r].word = n, delete a.reg[r].operator, delete a.reg[r].oneOf, a.reason += "-" + n, t.push(a)
                        }))
                    }
                    return t
                }(e);
                t.length > 0 ? ii = ii.concat(t) : ii.push(e)
            })), ii.forEach((function(e) {
                var t, r, n;
                return e.required = (t = e.reg, r = [], n = [], t.forEach((function(e) {
                    !0 !== e.optional && !0 !== e.negative && (void 0 !== e.tag && r.push(e.tag), void 0 !== e.word && n.push(e.word))
                })), {
                    tags: Wa(r),
                    words: Wa(n)
                }), e
            }));
            var oi = ii,
                si = function(e) {
                    oi.forEach((function(t) {
                        var r = [];
                        t.required.words.forEach((function(t) {
                            r.push(e._cache.words[t] || [])
                        })), t.required.tags.forEach((function(t) {
                            r.push(e._cache.tags[t] || [])
                        }));
                        var n = function(e) {
                            if (0 === e.length) return [];
                            var t = {};
                            e.forEach((function(e) {
                                e = Wa(e);
                                for (var r = 0; r < e.length; r++) t[e[r]] = t[e[r]] || 0, t[e[r]] += 1
                            }));
                            var r = Object.keys(t);
                            return r = (r = r.filter((function(r) {
                                return t[r] === e.length
                            }))).map((function(e) {
                                return Number(e)
                            }))
                        }(r);
                        if (0 !== n.length) {
                            var a = n.map((function(t) {
                                    return e.list[t]
                                })),
                                i = e.buildFrom(a).match(t.reg, t.group);
                            i.found && (!0 === t.safe ? i.tagSafe(t.tag, t.reason) : i.tag(t.tag, t.reason))
                        }
                    }))
                },
                ui = function(e) {
                    return si(e), qa(e), e
                },
                li = function(e) {
                    var t = e.termList();
                    return e = Xn(e, t), e = wa(e, t), (e = Ma(e)).cache(), (e = ui(e)).uncache(), e.world.taggers.forEach((function(t) {
                        t(e)
                    })), e
                },
                ci = function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r() {
                            return g(this, r), t.apply(this, arguments)
                        }
                        return m(r, [{
                            key: "stripPeriods",
                            value: function() {
                                return this.termList().forEach((function(e) {
                                    !0 === e.tags.Abbreviation && e.next && (e.post = e.post.replace(/^\./, ""));
                                    var t = e.text.replace(/\./, "");
                                    e.set(t)
                                })), this
                            }
                        }, {
                            key: "addPeriods",
                            value: function() {
                                return this.termList().forEach((function(e) {
                                    e.post = e.post.replace(/^\./, ""), e.post = "." + e.post
                                })), this
                            }
                        }]), r
                    }(e);
                    return t.prototype.unwrap = t.prototype.stripPeriods, e.prototype.abbreviations = function(e) {
                        var r = this.match("#Abbreviation");
                        return "number" == typeof e && (r = r.get(e)), new t(r.list, this, this.world)
                    }, e
                },
                di = /\./,
                hi = function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r() {
                            return g(this, r), t.apply(this, arguments)
                        }
                        return m(r, [{
                            key: "stripPeriods",
                            value: function() {
                                return this.termList().forEach((function(e) {
                                    var t = e.text.replace(/\./g, "");
                                    e.set(t)
                                })), this
                            }
                        }, {
                            key: "addPeriods",
                            value: function() {
                                return this.termList().forEach((function(e) {
                                    var t = e.text.replace(/\./g, "");
                                    t = t.split("").join("."), !1 === di.test(e.post) && (t += "."), e.set(t)
                                })), this
                            }
                        }]), r
                    }(e);
                    return t.prototype.unwrap = t.prototype.stripPeriods, t.prototype.strip = t.prototype.stripPeriods, e.prototype.acronyms = function(e) {
                        var r = this.match("#Acronym");
                        return "number" == typeof e && (r = r.get(e)), new t(r.list, this, this.world)
                    }, e
                },
                gi = function(e) {
                    return e.prototype.clauses = function(t) {
                        var r = this.if("@hasComma").notIf("@hasComma @hasComma").notIf("@hasComma . .? (and|or) .").notIf("(#City && @hasComma) #Country").notIf("(#Date && @hasComma) #Year").notIf("@hasComma (too|also)$").match("@hasComma"),
                            n = this.splitAfter(r),
                            a = n.quotations(),
                            i = (n = n.splitOn(a)).parentheses(),
                            o = (n = n.splitOn(i)).if("#Copula #Adjective #Conjunction (#Pronoun|#Determiner) #Verb").match("#Conjunction"),
                            s = (n = n.splitBefore(o)).if("if .{2,9} then .").match("then"),
                            u = (n = (n = (n = (n = (n = (n = n.splitBefore(s)).splitBefore("as well as .")).splitBefore("such as .")).splitBefore("in addition to .")).splitAfter("@hasSemicolon")).splitAfter("@hasDash")).filter((function(e) {
                                return e.wordCount() > 5 && e.match("#Verb+").length >= 2
                            }));
                        if (u.found) {
                            var l = u.splitAfter("#Noun .* #Verb .* #Noun+");
                            n = n.splitOn(l.eq(0))
                        }
                        return "number" == typeof t && (n = n.get(t)), new e(n.list, this, this.world)
                    }, e
                },
                pi = function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r(e, n, a) {
                            var i;
                            return g(this, r), (i = t.call(this, e, n, a)).contracted = null, i
                        }
                        return m(r, [{
                            key: "expand",
                            value: function() {
                                return this.list.forEach((function(e) {
                                    var t = e.terms(),
                                        r = t[0].isTitleCase();
                                    t.forEach((function(e, r) {
                                        e.set(e.implicit || e.text), e.implicit = void 0, r < t.length - 1 && "" === e.post && (e.post += " ")
                                    })), r && t[0].toTitleCase()
                                })), this
                            }
                        }]), r
                    }(e);
                    return e.prototype.contractions = function(e) {
                        var r = this.match("@hasContraction+");
                        return "number" == typeof e && (r = r.get(e)), new t(r.list, this, this.world)
                    }, e.prototype.expanded = e.prototype.isExpanded, e.prototype.contracted = e.prototype.isContracted, e
                },
                mi = function(e) {
                    var t = function(e) {
                            var t = e.splitAfter("@hasComma").splitOn("(and|or) not?").not("(and|or) not?"),
                                r = e.match("[.] (and|or)", 0);
                            return {
                                things: t,
                                conjunction: e.match("(and|or) not?"),
                                beforeLast: r,
                                hasOxford: r.has("@hasComma")
                            }
                        },
                        r = function(e) {
                            f(n, e);
                            var r = w(n);

                            function n() {
                                return g(this, n), r.apply(this, arguments)
                            }
                            return m(n, [{
                                key: "conjunctions",
                                value: function() {
                                    return this.match("(and|or)")
                                }
                            }, {
                                key: "parts",
                                value: function() {
                                    return this.splitAfter("@hasComma").splitOn("(and|or) not?")
                                }
                            }, {
                                key: "items",
                                value: function() {
                                    return t(this).things
                                }
                            }, {
                                key: "add",
                                value: function(e) {
                                    return this.forEach((function(r) {
                                        var n = t(r).beforeLast;
                                        n.append(e), n.termList(0).addPunctuation(",")
                                    })), this
                                }
                            }, {
                                key: "remove",
                                value: function(e) {
                                    return this.items().if(e).remove()
                                }
                            }, {
                                key: "hasOxfordComma",
                                value: function() {
                                    return this.filter((function(e) {
                                        return t(e).hasOxford
                                    }))
                                }
                            }, {
                                key: "addOxfordComma",
                                value: function() {
                                    var e = this.items(),
                                        t = e.eq(e.length - 2);
                                    return t.found && !1 === t.has("@hasComma") && t.post(", "), this
                                }
                            }, {
                                key: "removeOxfordComma",
                                value: function() {
                                    var e = this.items(),
                                        t = e.eq(e.length - 2);
                                    return t.found && !0 === t.has("@hasComma") && t.post(" "), this
                                }
                            }]), n
                        }(e);
                    return r.prototype.things = r.prototype.items, e.prototype.lists = function(e) {
                        var t = this.if("@hasComma+ .? (and|or) not? ."),
                            n = t.match("(#Noun|#Adjective|#Determiner|#Article)+ #Conjunction not? (#Article|#Determiner)? #Adjective? #Noun+").if("#Noun"),
                            a = t.match("(#Adjective|#Adverb)+ #Conjunction not? #Adverb? #Adjective+"),
                            i = t.match("(#Verb|#Adverb)+ #Conjunction not? #Adverb? #Verb+"),
                            o = n.concat(a);
                        return o = (o = o.concat(i)).if("@hasComma"), "number" == typeof e && (o = t.get(e)), new r(o.list, this, this.world)
                    }, e
                },
                fi = function(e) {
                    return !0 === e.has("#Plural") || !0 !== e.has("(#Pronoun|#Place|#Value|#Person|#Uncountable|#Month|#WeekDay|#Holiday|#Possessive)")
                },
                vi = {
                    hour: "an",
                    heir: "an",
                    heirloom: "an",
                    honest: "an",
                    honour: "an",
                    honor: "an",
                    uber: "an"
                },
                bi = {
                    a: !0,
                    e: !0,
                    f: !0,
                    h: !0,
                    i: !0,
                    l: !0,
                    m: !0,
                    n: !0,
                    o: !0,
                    r: !0,
                    s: !0,
                    x: !0
                },
                yi = [/^onc?e/i, /^u[bcfhjkqrstn][aeiou]/i, /^eul/i],
                wi = function(e) {
                    if (e.has("#Person") || e.has("#Place")) return "";
                    if (e.has("#Plural")) return "the";
                    var t = e.text("normal").trim();
                    if (vi.hasOwnProperty(t)) return vi[t];
                    var r = t.substr(0, 1);
                    if (e.has("^@isAcronym") && bi.hasOwnProperty(r)) return "an";
                    for (var n = 0; n < yi.length; n++)
                        if (yi[n].test(t)) return "a";
                    return /^[aeiou]/i.test(t) ? "an" : "a"
                },
                ki = {
                    isSingular: [/(ax|test)is$/i, /(octop|vir|radi|nucle|fung|cact|stimul)us$/i, /(octop|vir)i$/i, /(rl)f$/i, /(alias|status)$/i, /(bu)s$/i, /(al|ad|at|er|et|ed|ad)o$/i, /(ti)um$/i, /(ti)a$/i, /sis$/i, /(?:(^f)fe|(lr)f)$/i, /hive$/i, /(^aeiouy|qu)y$/i, /(x|ch|ss|sh|z)$/i, /(matr|vert|ind|cort)(ix|ex)$/i, /(m|l)ouse$/i, /(m|l)ice$/i, /(antenn|formul|nebul|vertebr|vit)a$/i, /.sis$/i, /^(?!talis|.*hu)(.*)man$/i],
                    isPlural: [/(antenn|formul|nebul|vertebr|vit)ae$/i, /(octop|vir|radi|nucle|fung|cact|stimul)i$/i, /men$/i, /.tia$/i, /(m|l)ice$/i]
                },
                Ai = /s$/,
                xi = function(e) {
                    return !ki.isSingular.find((function(t) {
                        return t.test(e)
                    })) && (!0 === Ai.test(e) || (!!ki.isPlural.find((function(t) {
                        return t.test(e)
                    })) || null))
                },
                $i = {
                    he: "his",
                    she: "hers",
                    they: "theirs",
                    we: "ours",
                    i: "mine",
                    you: "yours",
                    her: "hers",
                    their: "theirs",
                    our: "ours",
                    my: "mine",
                    your: "yours"
                },
                Pi = function(e) {
                    var t = e.text("text").trim();
                    return $i.hasOwnProperty(t) ? (e.replaceWith($i[t], !0), void e.tag("Possessive", "toPossessive")) : /s$/.test(t) ? (t += "'", e.replaceWith(t, !0), void e.tag("Possessive", "toPossessive")) : (t += "'s", e.replaceWith(t, !0), void e.tag("Possessive", "toPossessive"))
                },
                Bi = function(e) {
                    var t = {
                        main: e
                    };
                    if (e.has("#Noun (of|by|for) .")) {
                        var r = e.splitAfter("[#Noun+]", 0);
                        t.main = r.eq(0), t.post = r.eq(1)
                    }
                    return t
                },
                Gi = {
                    json: function(e) {
                        var t = null;
                        "number" == typeof e && (t = e, e = null), e = e || {
                            text: !0,
                            normal: !0,
                            trim: !0,
                            terms: !0
                        };
                        var r = [];
                        return this.forEach((function(t) {
                            var n = t.json(e)[0];
                            n.article = wi(t), r.push(n)
                        })), null !== t ? r[t] : r
                    },
                    adjectives: function() {
                        var e = this.lookAhead("^(that|who|which)? (was|is|will)? be? #Adverb? #Adjective+");
                        return (e = (e = e.concat(this.lookBehind("#Adjective+ #Adverb?$"))).match("#Adjective")).sort("index")
                    },
                    isPlural: function() {
                        return this.if("#Plural")
                    },
                    hasPlural: function() {
                        return this.filter((function(e) {
                            return fi(e)
                        }))
                    },
                    toPlural: function(e) {
                        var t = this,
                            r = this.world.transforms.toPlural;
                        return this.forEach((function(n) {
                            if (!n.has("#Plural") && !1 !== fi(n)) {
                                var a = Bi(n).main,
                                    i = a.text("reduced");
                                if ((a.has("#Singular") || !0 !== xi(i)) && (i = r(i, t.world), a.replace(i).tag("#Plural"), e)) {
                                    var o = a.lookBefore("(an|a) #Adjective?$").not("#Adjective");
                                    !0 === o.found && o.remove()
                                }
                            }
                        })), this
                    },
                    toSingular: function(e) {
                        var t = this,
                            r = this.world.transforms.toSingular;
                        return this.forEach((function(n) {
                            if (!n.has("^#Singular+$") && !1 !== fi(n)) {
                                var a = Bi(n).main,
                                    i = a.text("reduced");
                                if ((a.has("#Plural") || !0 === xi(i)) && (i = r(i, t.world), a.replace(i).tag("#Singular"), e)) {
                                    var o = n,
                                        s = n.lookBefore("#Adjective");
                                    s.found && (o = s);
                                    var u = wi(o);
                                    o.insertBefore(u)
                                }
                            }
                        })), this
                    },
                    toPossessive: function() {
                        return this.forEach((function(e) {
                            Pi(e)
                        })), this
                    }
                },
                Ci = function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r() {
                            return g(this, r), t.apply(this, arguments)
                        }
                        return r
                    }(e);
                    return Object.assign(t.prototype, Gi), e.prototype.nouns = function(e) {
                        var r = this.match("(#City && @hasComma) (#Region|#Country)"),
                            n = this.not(r).splitAfter("@hasComma");
                        return n = (n = (n = (n = (n = (n = (n = n.concat(r)).match("#Noun+ (of|by)? the? #Noun+?")).not("#Pronoun")).not("(there|these)")).not("(#Month|#WeekDay)")).not("(my|our|your|their|her|his)")).not("(of|for|by|the)$"), "number" == typeof e && (n = n.get(e)), new t(n.list, this, this.world)
                    }, e
                },
                ji = /\(/,
                Di = /\)/,
                Ei = function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r() {
                            return g(this, r), t.apply(this, arguments)
                        }
                        return m(r, [{
                            key: "unwrap",
                            value: function() {
                                return this.list.forEach((function(e) {
                                    var t = e.terms(0);
                                    t.pre = t.pre.replace(ji, "");
                                    var r = e.lastTerm();
                                    r.post = r.post.replace(Di, "")
                                })), this
                            }
                        }]), r
                    }(e);
                    return e.prototype.parentheses = function(e) {
                        var r = [];
                        return this.list.forEach((function(e) {
                            for (var t = e.terms(), n = 0; n < t.length; n += 1) {
                                var a = t[n];
                                if (ji.test(a.pre))
                                    for (var i = n; i < t.length; i += 1)
                                        if (Di.test(t[i].post)) {
                                            var o = i - n + 1;
                                            r.push(e.buildFrom(a.id, o)), n = i;
                                            break
                                        }
                            }
                        })), "number" == typeof e ? (r = r[e] ? [r[e]] : [], new t(r, this, this.world)) : new t(r, this, this.world)
                    }, e
                },
                Ni = function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r(e, n, a) {
                            var i;
                            return g(this, r), (i = t.call(this, e, n, a)).contracted = null, i
                        }
                        return m(r, [{
                            key: "strip",
                            value: function() {
                                return this.list.forEach((function(e) {
                                    e.terms().forEach((function(e) {
                                        var t = e.text.replace(/'s$/, "");
                                        e.set(t || e.text)
                                    }))
                                })), this
                            }
                        }]), r
                    }(e);
                    return e.prototype.possessives = function(e) {
                        var r = this.match("#Noun+? #Possessive");
                        return "number" == typeof e && (r = r.get(e)), new t(r.list, this, this.world)
                    }, e
                },
                Fi = {
                    '"': '"',
                    "＂": "＂",
                    "'": "'",
                    "“": "”",
                    "‘": "’",
                    "‟": "”",
                    "‛": "’",
                    "„": "”",
                    "⹂": "”",
                    "‚": "’",
                    "«": "»",
                    "‹": "›",
                    "‵": "′",
                    "‶": "″",
                    "‷": "‴",
                    "〝": "〞",
                    "`": "´",
                    "〟": "〞"
                },
                zi = RegExp("(" + Object.keys(Fi).join("|") + ")"),
                Oi = function(e, t) {
                    var r = e.verb,
                        n = r.text("normal");
                    if (r.has("#Infinitive")) return n;
                    var a = null;
                    return r.has("#PastTense") ? a = "PastTense" : r.has("#Gerund") ? a = "Gerund" : r.has("#PresentTense") ? a = "PresentTense" : r.has("#Participle") ? a = "Participle" : r.has("#Actor") && (a = "Actor"), t.transforms.toInfinitive(n, t, a)
                },
                _i = function(e) {
                    var t = e.verb;
                    if (t.has("(are|were|does)") || e.auxiliary.has("(are|were|does)")) return !0;
                    if (t.has("(is|am|do|was)") || e.auxiliary.has("(is|am|do|was)")) return !1;
                    var r = function(e) {
                        return e.lookBehind("#Noun+").last()
                    }(t);
                    return !!r.has("(we|they|you)") || (!!r.has("#Plural") || !r.has("#Singular") && null)
                },
                Ti = function(e, t) {
                    var r = e.verb;
                    if (!e.negative.found)
                        if (e.auxiliary.found) e.auxiliary.eq(0).append("not");
                        else if (r.has("(#Copula|will|has|had|do)")) r.append("not");
                    else {
                        if (r.has("#PastTense")) {
                            var n = Oi(e, t);
                            return r.replaceWith(n, !0), void r.prepend("did not")
                        }
                        if (r.has("#PresentTense")) {
                            var a = Oi(e, t);
                            return r.replaceWith(a, !0), void(_i(e) ? r.prepend("do not") : r.prepend("does not"))
                        }
                        if (r.has("#Gerund")) {
                            var i = Oi(e, t);
                            return r.replaceWith(i, !0), void r.prepend("not")
                        }
                        _i(e) ? r.prepend("does not") : r.prepend("do not")
                    }
                },
                Ii = function(e) {
                    var t = {
                        adverb: e.match("#Adverb+"),
                        negative: e.match("#Negative"),
                        auxiliary: e.match("#Auxiliary").not("(#Negative|#Adverb)"),
                        particle: e.match("#Particle"),
                        verb: e.match("#Verb").not("(#Adverb|#Negative|#Auxiliary|#Particle)")
                    };
                    if (!t.verb.found) return Object.keys(t).forEach((function(e) {
                        t[e] = t[e].not(".")
                    })), t.verb = e, t;
                    if (t.adverb && t.adverb.found) {
                        var r = t.adverb.text("reduced") + "$";
                        e.has(r) && (t.adverbAfter = !0)
                    }
                    return t
                },
                Vi = function(e) {
                    var t = !1,
                        r = _i(e),
                        n = e.negative.found;
                    e.verb.lookBehind("(i|we) (#Adverb|#Verb)?$").found && (t = !0);
                    var a = {
                        PastTense: "was",
                        PresentTense: "is",
                        FutureTense: "will be",
                        Infinitive: "is",
                        Gerund: "being",
                        Actor: "",
                        PerfectTense: "been",
                        Pluperfect: "been"
                    };
                    return !0 === t && (a.PresentTense = "am", a.Infinitive = "am"), r && (a.PastTense = "were", a.PresentTense = "are", a.Infinitive = "are"), n && (a.PastTense += " not", a.PresentTense += " not", a.FutureTense = "will not be", a.Infinitive += " not", a.PerfectTense = "not " + a.PerfectTense, a.Pluperfect = "not " + a.Pluperfect, a.Gerund = "not " + a.Gerund), a
                },
                Hi = function(e, t) {
                    var r = e.verb;
                    if (r.has("#Copula") || "be" === r.out("normal") && e.auxiliary.has("will")) return Vi(e);
                    var n = e.verb.termList(0).hasHyphen(),
                        a = Oi(e, t);
                    if (!a) return {};
                    var i = t.transforms.conjugate(a, t);
                    if (i.Infinitive = a, e.particle.found) {
                        var o = e.particle.text(),
                            s = !0 === n ? "-" : " ";
                        Object.keys(i).forEach((function(e) {
                            return i[e] += s + o
                        }))
                    }
                    if (e.adverb.found) {
                        var u = e.adverb.text(),
                            l = !0 === n ? "-" : " ";
                        !0 === e.adverbAfter ? Object.keys(i).forEach((function(e) {
                            return i[e] += l + u
                        })) : Object.keys(i).forEach((function(e) {
                            return i[e] = u + l + i[e]
                        }))
                    }
                    var c = e.negative.found;
                    return c && (i.PastTense = "did not " + i.Infinitive, i.PresentTense = "does not " + i.Infinitive, i.Gerund = "not " + i.Gerund), i.FutureTense || (i.FutureTense = c ? "will not " + i.Infinitive : "will " + i.Infinitive), c && (i.Infinitive = "not " + i.Infinitive), i
                },
                Si = {
                    json: function(e) {
                        var t = this,
                            r = null;
                        "number" == typeof e && (r = e, e = null), e = e || {
                            text: !0,
                            normal: !0,
                            trim: !0,
                            terms: !0
                        };
                        var n = [];
                        return this.forEach((function(r) {
                            var a = r.json(e)[0],
                                i = Ii(r);
                            a.parts = {}, Object.keys(i).forEach((function(e) {
                                i[e] && "Doc" === i[e].isA ? a.parts[e] = i[e].text("normal") : a.parts[e] = i[e]
                            })), a.isNegative = r.has("#Negative"), a.conjugations = Hi(i, t.world), n.push(a)
                        })), null !== r ? n[r] : n
                    },
                    adverbs: function() {
                        var e = [];
                        this.forEach((function(t) {
                            var r = Ii(t).adverb;
                            r.found && (e = e.concat(r.list))
                        }));
                        var t = this.lookBehind("#Adverb+$");
                        return t.found && (e = t.list.concat(e)), (t = this.lookAhead("^#Adverb+")).found && (e = e.concat(t.list)), this.buildFrom(e)
                    },
                    isPlural: function() {
                        var e = this,
                            t = [];
                        return this.forEach((function(r) {
                            var n = Ii(r);
                            !0 === _i(n, e.world) && t.push(r.list[0])
                        })), this.buildFrom(t)
                    },
                    isSingular: function() {
                        var e = this,
                            t = [];
                        return this.forEach((function(r) {
                            var n = Ii(r);
                            !1 === _i(n, e.world) && t.push(r.list[0])
                        })), this.buildFrom(t)
                    },
                    conjugate: function() {
                        var e = this,
                            t = [];
                        return this.forEach((function(r) {
                            var n = Ii(r),
                                a = Hi(n, e.world);
                            t.push(a)
                        })), t
                    },
                    toPastTense: function() {
                        var e = this;
                        return this.forEach((function(t) {
                            var r = Ii(t),
                                n = Hi(r, e.world).PastTense;
                            n && t.replaceWith(n, !1)
                        })), this
                    },
                    toPresentTense: function() {
                        var e = this;
                        return this.forEach((function(t) {
                            var r = Ii(t),
                                n = Hi(r, e.world),
                                a = n.PresentTense;
                            t.lookBehind("(i|we) (#Adverb|#Verb)?$").found && (a = n.Infinitive), a && (t.replaceWith(a, !1), t.tag("PresentTense"))
                        })), this
                    },
                    toFutureTense: function() {
                        var e = this;
                        return this.forEach((function(t) {
                            var r = Ii(t),
                                n = Hi(r, e.world).FutureTense;
                            n && (t.replaceWith(n, !1), t.tag("FutureTense"))
                        })), this
                    },
                    toInfinitive: function() {
                        var e = this;
                        return this.forEach((function(t) {
                            var r = Ii(t),
                                n = Hi(r, e.world).Infinitive;
                            n && (t.replaceWith(n, !1), t.tag("Infinitive"))
                        })), this
                    },
                    toGerund: function() {
                        var e = this;
                        return this.forEach((function(t) {
                            var r = Ii(t),
                                n = Hi(r, e.world).Gerund;
                            n && (t.replaceWith(n, !1), t.tag("Gerund"))
                        })), this
                    },
                    isNegative: function() {
                        return this.if("#Negative")
                    },
                    isPositive: function() {
                        return this.ifNo("#Negative")
                    },
                    toNegative: function() {
                        var e = this;
                        return this.list.forEach((function(t) {
                            var r = e.buildFrom([t]),
                                n = Ii(r);
                            Ti(n, r.world)
                        })), this
                    },
                    toPositive: function() {
                        var e = this.match("do not #Verb");
                        return e.found && e.remove("do not"), this.remove("#Negative")
                    }
                },
                Mi = [ci, hi, gi, pi, mi, Ci, Ei, Ni, function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r() {
                            return g(this, r), t.apply(this, arguments)
                        }
                        return m(r, [{
                            key: "unwrap",
                            value: function() {
                                return this
                            }
                        }]), r
                    }(e);
                    return e.prototype.quotations = function(e) {
                        var r = [];
                        return this.list.forEach((function(e) {
                            for (var t = e.terms(), n = 0; n < t.length; n += 1) {
                                var a = t[n];
                                if (zi.test(a.pre))
                                    for (var i = (a.pre.match(zi) || [])[0], o = Fi[i], s = n; s < t.length; s += 1)
                                        if (-1 !== t[s].post.indexOf(o)) {
                                            var u = s - n + 1;
                                            r.push(e.buildFrom(a.id, u)), n = s;
                                            break
                                        }
                            }
                        })), "number" == typeof e ? (r = r[e] ? [r[e]] : [], new t(r, this, this.world)) : new t(r, this, this.world)
                    }, e.prototype.quotes = e.prototype.quotations, e
                }, function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r() {
                            return g(this, r), t.apply(this, arguments)
                        }
                        return r
                    }(e);
                    return Object.assign(t.prototype, Si), t.prototype.negate = t.prototype.toNegative, e.prototype.verbs = function(e) {
                        var r = this.match("(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+"),
                            n = (r = (r = r.not("^#Adverb+")).not("#Adverb+$")).match("(#Adverb && @hasComma) #Adverb"),
                            a = r.not(n).splitAfter("@hasComma");
                        return (a = a.concat(n)).sort("index"), (a = a.if("#Verb")).has("(is|was)$") && (a = a.splitBefore("(is|was)$")), "number" == typeof e && (a = a.get(e)), new t(a.list, this, this.world)
                    }, e
                }, function(e) {
                    var t = function(e) {
                        f(r, e);
                        var t = w(r);

                        function r() {
                            return g(this, r), t.apply(this, arguments)
                        }
                        return r
                    }(e);
                    return e.prototype.people = function(e) {
                        var r = this.splitAfter("@hasComma");
                        return r = r.match("#Person+"), "number" == typeof e && (r = r.get(e)), new t(r.list, this, this.world)
                    }, e
                }],
                Li = function(e) {
                    return Object.keys(An).forEach((function(t) {
                        return e.prototype[t] = An[t]
                    })), Mi.forEach((function(t) {
                        return t(e)
                    })), e
                },
                qi = {
                    misc: wn,
                    selections: An
                },
                Wi = function() {
                    function e(t, r, n) {
                        var a = this;
                        g(this, e), this.list = t, Object.defineProperty(this, "from", {
                            enumerable: !1,
                            value: r,
                            writable: !0
                        }), void 0 === n && void 0 !== r && (n = r.world), Object.defineProperty(this, "world", {
                            enumerable: !1,
                            value: n,
                            writable: !0
                        }), Object.defineProperty(this, "_cache", {
                            enumerable: !1,
                            writable: !0,
                            value: {}
                        }), Object.defineProperty(this, "found", {
                            get: function() {
                                return a.list.length > 0
                            }
                        }), Object.defineProperty(this, "length", {
                            get: function() {
                                return a.list.length
                            }
                        }), Object.defineProperty(this, "isA", {
                            get: function() {
                                return "Doc"
                            }
                        })
                    }
                    return m(e, [{
                        key: "tagger",
                        value: function() {
                            return li(this)
                        }
                    }, {
                        key: "pool",
                        value: function() {
                            return this.list.length > 0 ? this.list[0].pool : this.all().list[0].pool
                        }
                    }]), e
                }();
            Wi.prototype.buildFrom = function(e) {
                return e = e.map((function(e) {
                    return e.clone(!0)
                })), new Wi(e, this, this.world)
            }, Wi.prototype.fromText = function(e) {
                var t = xt(e, this.world, this.pool());
                return this.buildFrom(t)
            }, Object.assign(Wi.prototype, qi.misc), Object.assign(Wi.prototype, qi.selections), Li(Wi);
            var Ji = {
                untag: "unTag",
                and: "match",
                notIf: "ifNo",
                only: "if",
                onlyIf: "if"
            };
            Object.keys(Ji).forEach((function(e) {
                return Wi.prototype[e] = Wi.prototype[Ji[e]]
            }));
            var Ri = Wi,
                Ki = function(e) {
                    var t = e.termList();
                    return Pn(t, e.world), e
                };
            var Ui = function e(t) {
                    var r = t,
                        n = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            t && r.addWords(t);
                            var n = xt(e, r),
                                a = new Ri(n, null, r);
                            return a.tagger(), a
                        };
                    return n.tokenize = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = r;
                        t && ((n = n.clone()).words = {}, n.addWords(t));
                        var a = xt(e, n),
                            i = new Ri(a, null, n);
                        return t && Ki(i), i
                    }, n.extend = function(e) {
                        return e(Ri, r, this, tt, be, nt), this
                    }, n.fromJSON = function(e) {
                        var t = $t(e, r);
                        return new Ri(t, null, r)
                    }, n.clone = function() {
                        return e(r.clone())
                    }, n.verbose = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return r.verbose(e), this
                    }, n.world = function() {
                        return r
                    }, n.version = "13.3.1", n.import = n.load, n
                }(new zr),
                Qi = r(73);
            s.a.use(i.a), s.a.component("downloadCsv", l.a);
            var Zi = r(72),
                Xi = (r(67), r(442)),
                Yi = a()(),
                eo = {
                    name: "TextAnalyzer",
                    props: ["originalContent"],
                    data: () => ({
                        quill: {},
                        language: "en",
                        all_stopwords: Qi,
                        minWordLength: 1,
                        text: "",
                        currentPage: 1,
                        minUses: 1,
                        perPage: 50,
                        totalRows: 0,
                        filterText: "",
                        wordsOne: !1,
                        wordsTwo: !1,
                        wordsThree: !1,
                        wordsFour: !1,
                        filterInclude: !0,
                        stats: {
                            word_count: 0,
                            length: 0,
                            letterCount: 0,
                            sentenceCount: 0,
                            syllable_count: 0,
                            reading_ease: 0,
                            grade_level: 0,
                            gunningFocScore: 0,
                            colemanLiauIndex: 0,
                            smogIndex: 0,
                            automatedReadabilityIndex: 0,
                            averageWordsPerSentence: 0,
                            averageSyllablesPerWord: 0,
                            wordsWithThreeSyllables: 0,
                            percentageWordsWithThreeSyllables: 0,
                            lexicalDensity: 0,
                            lexicalDiversity: 0
                        },
                        sentences: [],
                        topics: [],
                        sentiment: 0,
                        longSentences: [],
                        keywords: [],
                        filteredItems: []
                    }),
                    mounted() {},
                    methods: {
                        showSentiment(e) {
                            for (var t = [{
                                    max: -2,
                                    text: "Very Negative",
                                    emoji: "ߘ"
                                }, {
                                    max: -1,
                                    text: "Negative",
                                    emoji: "ߘ"
                                }, {
                                    max: -.25,
                                    text: "Slightly Negative",
                                    emoji: "ߤ"
                                }, {
                                    max: .25,
                                    text: "Neutral",
                                    emoji: "ߘ"
                                }, {
                                    max: 1,
                                    text: "Slightly Positive",
                                    emoji: "ߙ"
                                }, {
                                    max: 2,
                                    text: "Positive",
                                    emoji: "ߘ"
                                }, {
                                    max: 99,
                                    text: "Very Positive",
                                    emoji: "ߘ"
                                }], r = e.normalizedScore, n = 0; n < t.length; n++)
                                if (r < t[n].max) return t[n];
                            return t[3]
                        },
                        analyzeText() {
                            this.stats.word_count = Yi.wordCount(this.text), this.stats.length = Yi.textLength(this.text), this.stats.letterCount = Yi.letterCount(this.text), this.stats.sentenceCount = Yi.sentenceCount(this.text), this.stats.syllable_count = Yi.syllableCount(this.text), this.stats.reading_ease = Yi.fleschKincaidReadingEase(this.text), this.stats.grade_level = Yi.fleschKincaidGradeLevel(this.text), this.stats.gunningFocScore = Yi.gunningFogScore(this.text), this.stats.colemanLiauIndex = Yi.colemanLiauIndex(this.text), this.stats.smogIndex = Yi.smogIndex(this.text), this.stats.automatedReadabilityIndex = Yi.automatedReadabilityIndex(this.text), this.stats.averageWordsPerSentence = Yi.averageWordsPerSentence(this.text), this.stats.averageSyllablesPerWord = Yi.averageSyllablesPerWord(this.text), this.stats.wordsWithThreeSyllables = Yi.wordsWithThreeSyllables(this.text), this.stats.percentageWordsWithThreeSyllables = Yi.percentageWordsWithThreeSyllables(this.text);
                            r(67);
                            var e = this.text.toLowerCase().split(/\s|[:\?\!\.,'"\$]+\s?/);
                            e = e.filter(e => e.length >= this.minWordLength);
                            var t = Qi[this.language] || [],
                                n = e.filter(e => !t.includes(e)),
                                a = 1;
                            e.length > 0 && (a = e.length), this.stats.lexicalDensity = n.length / a, this.stats.lexicalDiversity = [...new Set(e)].length / a;
                            for (var i = Zi(2)(n).concat(Zi(3)(n)).concat(Zi(1)(n)).concat(Zi(4)(n)), o = [], s = {}, u = {}, l = (e.join(" "), 0); l < i.length; l++) {
                                let e = i[l].join(" ");
                                u[e] = i[l].length, s[e] = s[e] ? s[e] + 1 : 1
                            }
                            let c = Object.keys(s);
                            for (l = 0; l < c.length; l++) {
                                let e = c[l],
                                    t = s[String(e)];
                                t >= this.minUses && e.trim().length > 0 && o.push({
                                    keyword: e,
                                    word_count: u[e],
                                    uses: t,
                                    density: (t / Number(this.stats.word_count) * 100).toFixed(1)
                                })
                            }
                            this.keywords = o;
                            let h = Ui(this.text);
                            this.topics = [], d()(h.topics().json()).pluck("text").countBy().each((e, t) => {
                                this.topics.push({
                                    topic: t,
                                    uses: e
                                })
                            }), this.sentences = [], d()(h.sentences().json()).pluck("text").each(e => {
                                let t = Xi(e),
                                    r = e.toLowerCase().split(/\s|[:\?\!\.,'"\$]+\s?/).length,
                                    n = Yi.fleschKincaidGradeLevel(e);
                                var a = "";
                                a = r < 14 ? "normal" : n >= 10 && n < 14 ? "hard" : n > 14 ? "very hard" : "normal", this.sentences.push({
                                    sentence: e,
                                    sentiment: t,
                                    words: r,
                                    level: n,
                                    readability: a
                                })
                            }), this.sentiment = Xi(this.text)
                        },
                        filterFunction(e) {
                            if (this.filterText.length > 0 && !e.keyword.match(this.filterText) === this.filterInclude) return !1;
                            if (this.wordsOne + this.wordsTwo + this.wordsThree + this.wordsFour > 0) {
                                if (!this.wordsOne && 1 == e.word_count) return !1;
                                if (!this.wordsTwo && 2 == e.word_count) return !1;
                                if (!this.wordsThree && 3 == e.word_count) return !1;
                                if (!this.wordsFour && 4 == e.word_count) return !1
                            }
                            return !0
                        },
                        onFiltered(e) {
                            this.totalRows = e.length, this.filteredItems = e, this.currentPage = 1
                        }
                    },
                    computed: {
                        statsArray() {
                            return Object.entries(this.stats)
                        },
                        filterValue() {
                            return this.wordsOne + this.wordsTwo + this.wordsThree + this.filterText
                        }
                    },
                    watch: {
                        text() {
                            this.analyzeText()
                        }
                    }
                },
                to = r(57),
                ro = Object(to.a)(eo, (function() {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", {
                                staticClass: "container-fluid px-5"
                            }, [r("div", {
                                staticClass: "row mt-4"
                            }, [r("div", {
                                staticClass: "col"
                            }, [r("div", {
                                staticClass: "card shadow mb-3 mr-3"
                            }, [r("div", {
                                staticClass: "card-body p-3"
                            }, [r("h3", [e._v(e._s(e.stats.word_count))]), e._v(" "), r("span", {
                                staticClass: "text-uppercase text-muted"
                            }, [e._v("Word Count")])])])]), e._v(" "), r("div", {
                                staticClass: "col"
                            }, [r("div", {
                                staticClass: "card shadow mb-3 mr-3"
                            }, [r("div", {
                                staticClass: "card-body p-3"
                            }, [r("h3", [e._v(e._s(e.stats.reading_ease) + "%")]), e._v(" "), r("span", {
                                staticClass: "text-uppercase text-muted"
                            }, [e._v("Reading Ease")])])])]), e._v(" "), r("div", {
                                staticClass: "col"
                            }, [r("div", {
                                staticClass: "card shadow mb-3 mr-3"
                            }, [r("div", {
                                staticClass: "card-body p-3"
                            }, [r("h3", [e._v(e._s(e.stats.grade_level))]), e._v(" "), r("span", {
                                staticClass: "text-uppercase text-muted"
                            }, [e._v("Grade Level")])])])]), e._v(" "), r("div", {
                                staticClass: "col"
                            }, [r("div", {
                                staticClass: "card shadow mb-3 mr-3"
                            }, [r("div", {
                                staticClass: "card-body p-3"
                            }, [r("h2", [e._v(e._s(e.showSentiment(e.sentiment).emoji))]), e._v(" "), r("span", {
                                staticClass: "text-uppercase text-muted"
                            }, [e._v(e._s(e.showSentiment(e.sentiment).text) + " Sentiment")])])])])]), e._v(" "), r("div", {
                                staticClass: "row mt-4"
                            }, [r("div", {
                                staticClass: "col-7"
                            }, [r("b-tabs", {
                                attrs: {
                                    pills: "",
                                    "nav-class": "small"
                                }
                            }, [r("b-tab", {
                                attrs: {
                                    title: "Text Editor"
                                }
                            }, [r("b-form-textarea", {
                                staticClass: "form-control mt-2",
                                staticStyle: {
                                    height: "750px"
                                },
                                attrs: {
                                    debounce: "1000",
                                    autofocus: "",
                                    placeholder: "Enter your text here to check your word count, readability and analyze your keyword density"
                                },
                                model: {
                                    value: e.text,
                                    callback: function(t) {
                                        e.text = t
                                    },
                                    expression: "text"
                                }
                            }, [e._v("Some text here\n                    ")])], 1)], 1)], 1), e._v(" "), r("div", {
                                staticClass: "col-5"
                            }, [r("b-tabs", {
                                attrs: {
                                    pills: "",
                                    "nav-class": "small"
                                }
                            }, [r("b-tab", {
                                staticClass: "mt-2",
                                staticStyle: {
                                    height: "720px",
                                    "overflow-y": "auto",
                                    "overflow-x": "hidden"
                                },
                                attrs: {
                                    title: "Keyword Density"
                                }
                            }, [r("div", {
                                staticClass: "card"
                            }, [r("div", {
                                staticClass: "card-body"
                            }, [r("div", {
                                staticClass: "row"
                            }, [r("div", {
                                staticClass: "col-7"
                            }, [r("label", {
                                staticClass: "small"
                            }, [e._v("Filter Words")]), e._v(" "), r("b-form-group", [r("select", {
                                directives: [{
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.filterInclude,
                                    expression: "filterInclude"
                                }],
                                staticClass: "form-control",
                                on: {
                                    change: function(t) {
                                        var r = Array.prototype.filter.call(t.target.options, (function(e) {
                                            return e.selected
                                        })).map((function(e) {
                                            return "_value" in e ? e._value : e.value
                                        }));
                                        e.filterInclude = t.target.multiple ? r : r[0]
                                    }
                                }
                            }, [r("option", {
                                domProps: {
                                    value: !0
                                }
                            }, [e._v("Including")]), e._v(" "), r("option", {
                                domProps: {
                                    value: !1
                                }
                            }, [e._v("Excluding")])]), e._v(" "), r("b-input", {
                                attrs: {
                                    placeholder: "Filter"
                                },
                                model: {
                                    value: e.filterText,
                                    callback: function(t) {
                                        e.filterText = t
                                    },
                                    expression: "filterText"
                                }
                            })], 1)], 1), e._v(" "), r("div", {
                                staticClass: "col"
                            }, [r("label", {
                                staticClass: "small"
                            }, [e._v("Number of Words")]), e._v(" "), r("b-button-group", [r("b-button", {
                                class: {
                                    "bg-info": e.wordsOne
                                },
                                attrs: {
                                    variant: "outline-info"
                                },
                                on: {
                                    click: function(t) {
                                        e.wordsOne = !e.wordsOne
                                    }
                                }
                            }, [e._v("1")]), e._v(" "), r("b-button", {
                                class: {
                                    "bg-info": e.wordsTwo
                                },
                                attrs: {
                                    variant: "outline-info"
                                },
                                on: {
                                    click: function(t) {
                                        e.wordsTwo = !e.wordsTwo
                                    }
                                }
                            }, [e._v("2")]), e._v(" "), r("b-button", {
                                class: {
                                    "bg-info": e.wordsThree
                                },
                                attrs: {
                                    variant: "outline-info"
                                },
                                on: {
                                    click: function(t) {
                                        e.wordsThree = !e.wordsThree
                                    }
                                }
                            }, [e._v("3")]), e._v(" "), r("b-button", {
                                class: {
                                    "bg-info": e.wordsFour
                                },
                                attrs: {
                                    variant: "outline-info"
                                },
                                on: {
                                    click: function(t) {
                                        e.wordsFour = !e.wordsFour
                                    }
                                }
                            }, [e._v("4")])], 1), e._v(" "), r("download-csv", {
                                attrs: {
                                    data: e.filteredItems
                                }
                            }, [r("b-link", {
                                staticClass: "small"
                            }, [e._v("Export CSV")])], 1)], 1)]), e._v(" "), e.keywords.length > 0 ? r("b-table", {
                                staticClass: "small",
                                attrs: {
                                    items: e.keywords,
                                    "per-page": e.perPage,
                                    "sort-by": "uses",
                                    "sort-desc": !0,
                                    "sticky-header": "",
                                    "empty-text": "Please add some text to the editor to see an analysis of your keyword density and usage",
                                    fields: [{
                                        key: "keyword",
                                        sortable: !0
                                    }, {
                                        key: "word_count",
                                        label: "Words",
                                        sortable: !0,
                                        sortDirection: "desc",
                                        class: "text-right"
                                    }, {
                                        key: "uses",
                                        label: "Uses",
                                        sortable: !0,
                                        sortDirection: "desc",
                                        class: "text-right"
                                    }, {
                                        key: "density",
                                        label: "Uses",
                                        sortable: !0,
                                        sortDirection: "desc",
                                        class: "text-right"
                                    }],
                                    "filter-function": e.filterFunction,
                                    filter: e.filterValue
                                },
                                on: {
                                    filtered: e.onFiltered
                                },
                                scopedSlots: e._u([{
                                    key: "cell(density)",
                                    fn: function(t) {
                                        return [e._v("\n                                    " + e._s(t.item.density) + "%\n                                ")]
                                    }
                                }], null, !1, 2831030155)
                            }) : e._e(), e._v(" "), e.keywords.length > 0 ? r("b-pagination", {
                                attrs: {
                                    "per-page": e.perPage,
                                    "total-rows": e.totalRows
                                },
                                model: {
                                    value: e.currentPage,
                                    callback: function(t) {
                                        e.currentPage = t
                                    },
                                    expression: "currentPage"
                                }
                            }) : r("p", {
                                staticClass: "lead"
                            }, [r("em", [e._v("Please enter some text in the editor to see your keyword analysis!")])])], 1)])]), e._v(" "), r("b-tab", {
                                staticClass: "small mt-2",
                                attrs: {
                                    title: "Text Analysis"
                                }
                            }, [r("div", {
                                staticClass: "card shadow m-1"
                            }, [r("div", {
                                staticClass: "card-body p-2"
                            }, [r("h3", [e._v("Content Analysis")]), e._v(" "), r("table", {
                                staticClass: "table table-sm"
                            }, [r("tr", [r("th", [e._v("Word Count")]), e._v(" "), r("td", [e._v(e._s(e.stats.word_count))])]), e._v(" "), r("tr", [r("th", [e._v("Character Length")]), e._v(" "), r("td", [e._v(e._s(e.stats.length))])]), e._v(" "), r("tr", [r("th", [e._v("Letters")]), e._v(" "), r("td", [e._v(e._s(e.stats.letterCount))])]), e._v(" "), r("tr", [r("th", [e._v("Sentences")]), e._v(" "), r("td", [e._v(e._s(e.stats.sentenceCount))])]), e._v(" "), r("tr", [r("th", [e._v("Syllables")]), e._v(" "), r("td", [e._v(e._s(e.stats.syllable_count))])]), e._v(" "), r("tr", [r("th", [e._v("Average Words/Sentence")]), e._v(" "), r("td", [e._v(e._s(Number(e.stats.averageWordsPerSentence).toFixed(1)))])]), e._v(" "), r("tr", [r("th", [e._v("Average Syllables/Word")]), e._v(" "), r("td", [e._v(e._s(Number(e.stats.averageSyllablesPerWord).toFixed(1)))])]), e._v(" "), r("tr", [r("th", [e._v("Lexical Density")]), e._v(" "), r("td", [e._v(e._s(Number(100 * e.stats.lexicalDensity).toFixed(0)) + "%")])]), e._v(" "), r("tr", [r("th", [e._v("Lexical Diversity")]), e._v(" "), r("td", [e._v(e._s(Number(100 * e.stats.lexicalDiversity).toFixed(0)) + "%")])])])])]), e._v(" "), r("div", {
                                staticClass: "card shadow m-1 mt-4"
                            }, [r("div", {
                                staticClass: "card-body p-2"
                            }, [r("h3", [e._v("Readability")]), e._v(" "), r("table", {
                                staticClass: "table table-sm"
                            }, [r("tr", [r("th", [e._v("Reading Ease")]), e._v(" "), r("td", [e._v(e._s(e.stats.reading_ease) + "%")])]), e._v(" "), r("tr", [r("th", [e._v("Grade Level")]), e._v(" "), r("td", [e._v(e._s(e.stats.grade_level))])]), e._v(" "), r("tr", [r("th", [e._v("Gunning Fog")]), e._v(" "), r("td", [e._v(e._s(e.stats.gunningFocScore))])]), e._v(" "), r("tr", [r("th", [e._v("Coleman Liau Index")]), e._v(" "), r("td", [e._v(e._s(e.stats.colemanLiauIndex))])]), e._v(" "), r("tr", [r("th", [e._v("Smog Index")]), e._v(" "), r("td", [e._v(e._s(e.stats.smogIndex))])]), e._v(" "), r("tr", [r("th", [e._v("Automated Reading Index")]), e._v(" "), r("td", [e._v(e._s(e.stats.automatedReadabilityIndex))])])])])])]), e._v(" "), r("b-tab", {
                                attrs: {
                                    title: "Topics"
                                }
                            }, [r("div", {
                                staticClass: "alert alert-info"
                            }, e.topics.length > 0 ? r("b-table", {
                                attrs: {
                                    items: e.topics,
                                    "sort-by": "uses",
                                    "sort-desc": !0,
                                    "sticky-header": "",
                                    "empty-text": ""
                                }
                            }) : r("p", {
                                staticClass: "lead"
                            }, [r("em", [e._v("")])])], 1), e._v(" "), r("b-tab", {
                                staticClass: "small",
                                attrs: {
                                    title: "Sentences"
                                }
                            }, [e.sentences.length > 0 ? r("b-table", {
                                attrs: {
                                    items: e.sentences,
                                    fields: ["sentence", {
                                        key: "sentiment.score",
                                        label: "Sentiment",
                                        sortable: !0
                                    }, {
                                        key: "words",
                                        sortable: !0
                                    }, {
                                        key: "readability",
                                        sortable: !0
                                    }],
                                    "sticky-header": "",
                                    "empty-text": "Please add some text to the editor to see an analysis of your sentences"
                                },
                                scopedSlots: e._u([{
                                    key: "cell(sentiment.score)",
                                    fn: function(t) {
                                        return [r("span", {
                                            staticClass: "lead",
                                            attrs: {
                                                title: e.showSentiment(t.item.sentiment).text
                                            }
                                        }, [e._v(e._s(e.showSentiment(t.item.sentiment).emoji))])]
                                    }
                                }, {
                                    key: "cell(sentence)",
                                    fn: function(t) {
                                        return [e._v("\n                            " + e._s(t.item.sentence) + "\n                        ")]
                                    }
                                }], null, !1, 2034161311)
                            }) : r("p", {
                                staticClass: "lead mt-2"
                            }, [r("em", [e._v("Please add some text to the editor to see an analysis of your sentences")])])], 1), e._v(" "), r("b-tab", {
                                scopedSlots: e._u([{
                                    key: "title",
                                    fn: function() {
                                        return [r("i", {
                                            staticClass: "fa fa-cogs"
                                        })]
                                    },
                                    proxy: !0
                                }])
                            }, [e._v(" "), r("table", {
                                staticClass: "table"
                            }, [r("tr", [r("td", [e._v("Stopwords Language")]), e._v(" "), r("td", [r("b-select", {
                                attrs: {
                                    options: Object.keys(e.all_stopwords).sort()
                                },
                                on: {
                                    change: e.analyzeText
                                },
                                model: {
                                    value: e.language,
                                    callback: function(t) {
                                        e.language = t
                                    },
                                    expression: "language"
                                }
                            })], 1)]), e._v(" "), r("tr", [r("td", [e._v("Minimum Word Length: " + e._s(e.minWordLength))]), e._v(" "), r("td", [r("b-input", {
                                attrs: {
                                    type: "range",
                                    min: "1",
                                    max: "10"
                                },
                                on: {
                                    change: e.analyzeText
                                },
                                model: {
                                    value: e.minWordLength,
                                    callback: function(t) {
                                        e.minWordLength = t
                                    },
                                    expression: "minWordLength"
                                }
                            })], 1)]), e._v(" "), r("tr", [r("td", [e._v("Minimum Uses: " + e._s(e.minUses))]), e._v(" "), r("td", [r("b-input", {
                                attrs: {
                                    type: "range",
                                    min: "1",
                                    max: "10"
                                },
                                on: {
                                    change: e.analyzeText
                                },
                                model: {
                                    value: e.minUses,
                                    callback: function(t) {
                                        e.minUses = t
                                    },
                                    expression: "minUses"
                                }
                            })], 1)])])])], 1)], 1)]), e._v(" "), e._m(0)])
                        }), [function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", {
                            staticClass: "row text-center justify-content-center"
                        }, [t("span", {
                            staticClass: "small text-muted"
                        }, [this._v("All content analysis is performed on your own device. We don't monitor or store any of your text or results.")])])
                    }], !1, null, "e129e30e", null); t.default = ro.exports
                }
        }]));
