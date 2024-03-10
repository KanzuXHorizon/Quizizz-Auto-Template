
const snackbar = document.createElement("div");
        snackbar.id = "snackbar";
        snackbar.style.left = "50%";
        snackbar.style.transform = "translate(-50%, 0)";
        snackbar.style.visibility = "hidden";
        snackbar.style.minWidth = "250px";
        snackbar.style.margin = "0 5px 0 5px";
        snackbar.style.backgroundColor = "#333";
        snackbar.style.color = "#fff";
        snackbar.style.textAlign = "center";
        snackbar.style.borderRadius = "2px";
        snackbar.style.padding = "16px";
        snackbar.style.position = "fixed";
        snackbar.style.zIndex = "1";
        snackbar.style.top = "65px";
    
        document.body.appendChild(snackbar);
    
        function Notification (Msg) {
            snackbar.innerHTML = Msg;
            snackbar.style.visibility = 'visible'

        }
    

    function getRandomNumber() {
        var min = 500;
        var max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //created by KanzuWakazaki - Nguyễn Thái Hảo - Fb.com/Lazic.Kanzu
    
    async function choose() {
        try { 
        const All_Text = document.querySelectorAll("#optionText > div > div");
        if (All_Text.length == 0 || All_Text.length == 10) return console.log(All_Text.length)
        let    question = document.querySelector("#questionText > div > div").textContent
        let    aw1 = All_Text[0];
        let   aw2 = All_Text[1]
        let   aw3 = All_Text[2];
        let   aw4 = All_Text[3];
        console.log(question)


          function findMostSimilar(jsonArray, targetString) {
            return jsonArray.questions.reduce((mostSimilar, item) => {
                let currentSimilarity = similarity((item.structure.query.text).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim(), targetString);
                let maxSimilarity = similarity((mostSimilar.structure.query.text).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim(), targetString);
                return currentSimilarity > maxSimilarity ? item : mostSimilar;
            });
        }
        
        function similarity(s1, s2) {
            let longer = s1;
            let shorter = s2;
            if (s1.length < s2.length) {
                longer = s2;
                shorter = s1;
            }
            let longerLength = longer.length;
            if (longerLength === 0) {
                return 1.0;
            }
            return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
        }
        
        function editDistance(s1, s2) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();
        
            let costs = new Array();
            for (let i = 0; i <= s1.length; i++) {
                let lastValue = i;
                for (let j = 0; j <= s2.length; j++) {
                    if (i === 0)
                        costs[j] = j;
                    else {
                        if (j > 0) {
                            let newValue = costs[j - 1];
                            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                                newValue = Math.min(Math.min(newValue, lastValue),
                                costs[j]) + 1;
                            costs[j - 1] = lastValue;
                            lastValue = newValue;
                        }
                    }
                }
                if (i > 0)
                    costs[s2.length] = lastValue;
            }
            return costs[s2.length];
        }
        
        const AWS = findMostSimilar(JSONNEE(), question);
            //await new Promise((re,rj) => setTimeout(re, 1500))
            const rvAnswer = (AWS.structure.options[AWS.structure.answer].text).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
            Notification(rvAnswer)
            if (rvAnswer.includes((aw1.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()) || ((aw1.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()).includes(rvAnswer) ) {
                console.log('c1-1')
                // aw1.dispatchEvent(new MouseEvent('click', {
                //     view: window,
                //     bubbles: true,
                //     cancelable: true
                // }))
                aw1.style.background = 'black'
            }
            else if (rvAnswer.includes((aw2.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()) || ((aw2.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()).includes(rvAnswer)) {
                console.log('c1-2')
                // aw2.dispatchEvent(new MouseEvent('click', {
                //     view: window,
                //     bubbles: true,
                //     cancelable: true
                // }))
                aw2.style.background = 'black'
            }
            else if (rvAnswer.includes((aw3.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()) || ((aw3.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()).includes(rvAnswer)) {
                console.log('c1-3')
                // aw3.dispatchEvent(new MouseEvent('click', {
                //     view: window,
                //     bubbles: true,
                //     cancelable: true
                // }))
                aw3.style.background = 'black'
            }
            else if ( rvAnswer.includes((aw4.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()) || ((aw3.innerHTML).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()).includes(rvAnswer)) {
                console.log('c1-4')
                // aw4.dispatchEvent(new MouseEvent('click', {
                //     view: window,
                //     bubbles: true,
                //     cancelable: true
                // }))
                aw4.style.background = 'black'
            }
        
        }
    catch (e) {
        console.log(e)
    }
    }

     //created by KanzuWakazaki - Nguyễn Thái Hảo - Fb.com/Lazic.Kanzu
    async function getData () {
        if (document.querySelector('[data-v-c1f7eb2f]') == null) {
            for (let i  =0; i< 1000000;i++) {
                await new Promise(re => setTimeout(re, 1000)) 
                await choose()
            }
        }
        else return;
    }

    getData();

    // console.log(JSONNE.questions[0].structure.query.text)
    // console.log(JSONNE.questions[0].structure.options[JSONNE.questions[0].structure.answer].text)
    // const AWS = JSONNE.questions.find(i => i.structure.query.text == "Câu 1: Trong truyện ngắn Chí Phèo (Nam Cao), trước khi đi tù Chí Phèo đã từng có ước mơ gì?");
    //     console.log(AWS)

    function JSONNEE() {
      return{
        "error": false,
        "title": "THUYỀN VÀ BIỂN K19 SPRING 2024",
        "roomHash": "65d18956734600ef49514e94",
        "questions": [
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": "<p></p>"
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Nghị luận.</span></p>",
                  "_id": "658e9374fd99ef7f854777df",
                  "id": "658e9374fd99ef7f854777df"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tự sự.",
                  "_id": "658e9374fd99ef7f854777e0",
                  "id": "658e9374fd99ef7f854777e0"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Thuyết minh.",
                  "_id": "658e9374fd99ef7f854777e1",
                  "id": "658e9374fd99ef7f854777e1"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Biểu cảm.",
                  "_id": "658e9374fd99ef7f854777e2",
                  "id": "658e9374fd99ef7f854777e2"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text_image",
                "hasMath": false,
                "answerTime": -1,
                "media": [
                  {
                    "type": "image",
                    "video": "",
                    "url": "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/questions/1bf741f0-815e-41b7-8cf9-5eb4e875d57d-v2",
                    "meta": {
                      "width": 0,
                      "height": 0,
                      "text": "",
                      "bgColor": "",
                      "layout": "",
                      "videoId": "",
                      "start": 0,
                      "end": 0,
                      "duration": 0,
                      "kind": "",
                      "embeddable": true,
                      "title": ""
                    }
                  }
                ],
                "text": "Câu 1: Phương thức biểu đạt chính của bài thơ Thuyền và biển (Xuân Quỳnh) là gì?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 5,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea3c13a4e046e57bada26",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:47:29.452Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tên khai sinh là Nguyễn Thị Xuân Quỳnh.",
                  "_id": "658e9374fd99ef7f854777f6",
                  "id": "658e9374fd99ef7f854777f6"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Xuân Quỳnh quê ở quận Hà Đông, Hà Nội.",
                  "_id": "658e9374fd99ef7f854777f7",
                  "id": "658e9374fd99ef7f854777f7"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Sáng tác của Xuân Quỳnh bao gồm cả thơ và văn xuôi.",
                  "_id": "658e9374fd99ef7f854777f8",
                  "id": "658e9374fd99ef7f854777f8"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Xuân Quỳnh chỉ sáng tác nhạc và vẽ tranh.",
                  "_id": "658e9374fd99ef7f854777f9",
                  "id": "658e9374fd99ef7f854777f9"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text_image",
                "hasMath": false,
                "answerTime": -1,
                "media": [
                  {
                    "type": "image",
                    "video": "",
                    "url": "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/questions/3a3212cf-e07d-4fc0-ae4f-6239bcaabff8-v2",
                    "meta": {
                      "width": 0,
                      "height": 0,
                      "text": "",
                      "bgColor": "",
                      "layout": "",
                      "videoId": "",
                      "start": 0,
                      "end": 0,
                      "duration": 0,
                      "kind": "",
                      "embeddable": true,
                      "title": ""
                    }
                  }
                ],
                "text": "Câu 2: Đâu là đáp án KHÔNG ĐÚNG về nhà thơ Xuân Quỳnh?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e99b43a4e0443b2bacf51",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:04:36.279Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Lục bát.</span></p>",
                  "_id": "658e9374fd99ef7f8547780d",
                  "id": "658e9374fd99ef7f8547780d"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tự do.",
                  "_id": "658e9374fd99ef7f8547780e",
                  "id": "658e9374fd99ef7f8547780e"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Năm chữ.",
                  "_id": "658e9374fd99ef7f8547780f",
                  "id": "658e9374fd99ef7f8547780f"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Thất ngôn tứ tuyệt.",
                  "_id": "658e9374fd99ef7f85477810",
                  "id": "658e9374fd99ef7f85477810"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text_image",
                "hasMath": false,
                "answerTime": -1,
                "media": [
                  {
                    "type": "image",
                    "video": "",
                    "url": "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/questions/b1fe4762-30f4-4e6a-ba40-7cef7d16c2d9-v2",
                    "meta": {
                      "width": 0,
                      "height": 0,
                      "text": "",
                      "bgColor": "",
                      "layout": "",
                      "videoId": "",
                      "start": 0,
                      "end": 0,
                      "duration": 0,
                      "kind": "",
                      "embeddable": true,
                      "title": ""
                    }
                  }
                ],
                "text": "Câu 3: Bài thơ Thuyền và biển (Xuân Quỳnh) được viết theo thể thơ nào?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e99c62e91bcac0434e948",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:04:54.277Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Mùa xuân chín.</span></p>",
                  "_id": "658e9374fd99ef7f85477824",
                  "id": "658e9374fd99ef7f85477824"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Gió Lào, cát trắng.",
                  "_id": "658e9374fd99ef7f85477825",
                  "id": "658e9374fd99ef7f85477825"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Lời ru trên mặt đất.",
                  "_id": "658e9374fd99ef7f85477826",
                  "id": "658e9374fd99ef7f85477826"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Sân ga chiều em đi.",
                  "_id": "658e9374fd99ef7f85477827",
                  "id": "658e9374fd99ef7f85477827"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 4: Đâu KHÔNG PHẢI là tên một tác phẩm của nhà thơ Xuân Quỳnh?"
              },
              "answer": 0
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e99db1662ec617313678f",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:05:15.299Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Thơ Xuân Quỳnh giàu yếu tố tự thuật.",
                  "_id": "658e9374fd99ef7f8547783b",
                  "id": "658e9374fd99ef7f8547783b"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Thơ Xuân Quỳnh luôn bộc lộ niềm khát khao được yêu thương, chia sẻ và ý thức chắt chiu, gìn giữ hạnh phúc đang có.",
                  "_id": "658e9374fd99ef7f8547783c",
                  "id": "658e9374fd99ef7f8547783c"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Thơ Xuân Quỳnh chứa đựng những dự cảm đầy lo âu về cái mong manh của đời sống, của tình yêu.",
                  "_id": "658e9374fd99ef7f8547783d",
                  "id": "658e9374fd99ef7f8547783d"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Thơ Xuân Quỳnh chứa đựng yếu tố mỉa mai, trào phúng, phê phán, đả kích giai cấp phong kiến thống trị.",
                  "_id": "658e9374fd99ef7f8547783e",
                  "id": "658e9374fd99ef7f8547783e"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 5: Đáp án nào KHÔNG ĐÚNG về phong cách sáng tác của Xuân Quỳnh?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e99ea5525c084bd6b86a5",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:05:30.314Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Người nông dân, người trí thức nghèo.</span></p>",
                  "_id": "658e9374fd99ef7f85477852",
                  "id": "658e9374fd99ef7f85477852"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tình yêu, hạnh phúc gia đình, trẻ em.",
                  "_id": "658e9374fd99ef7f85477853",
                  "id": "658e9374fd99ef7f85477853"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Chiến tranh, người lính.",
                  "_id": "658e9374fd99ef7f85477854",
                  "id": "658e9374fd99ef7f85477854"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Thiên nhiên, quê hương, đất nước.",
                  "_id": "658e9374fd99ef7f85477855",
                  "id": "658e9374fd99ef7f85477855"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 6: Đề tài chiếm vị trí nổi bật trong thơ Xuân Quỳnh là gì?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9a491662ecc9be136834",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:07:05.548Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Điệp từ.</span></p>",
                  "_id": "658e9374fd99ef7f85477869",
                  "id": "658e9374fd99ef7f85477869"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Nhân hoá.",
                  "_id": "658e9374fd99ef7f8547786a",
                  "id": "658e9374fd99ef7f8547786a"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Nói quá.",
                  "_id": "658e9374fd99ef7f8547786b",
                  "id": "658e9374fd99ef7f8547786b"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Câu hỏi tu từ.",
                  "_id": "658e9374fd99ef7f8547786c",
                  "id": "658e9374fd99ef7f8547786c"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "<p>Câu 7: Biện pháp tu từ nào được sử dụng trong câu thơ sau đây? </p><p>“Từ ngày nào chẳng biết</p><p>Thuyền nghe lời biển khơi”</p><p> (Thuyền và biển – Xuân Quỳnh)</p>"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9a685525c049806b86df",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:07:36.839Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Liệt kê, nhân hoá.</span></p>",
                  "_id": "658e9374fd99ef7f85477880",
                  "id": "658e9374fd99ef7f85477880"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Hoán dụ, so sánh.",
                  "_id": "658e9374fd99ef7f85477881",
                  "id": "658e9374fd99ef7f85477881"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Nhân hoá, so sánh.",
                  "_id": "658e9374fd99ef7f85477882",
                  "id": "658e9374fd99ef7f85477882"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Điệp từ, nhân hoá.",
                  "_id": "658e9374fd99ef7f85477883",
                  "id": "658e9374fd99ef7f85477883"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "<p>Câu 8: Biện pháp tu từ nào được sử dụng trong câu thơ sau đây? </p><p>“Những đêm trăng hiền từ </p><p>Biển như cô gái nhỏ” </p><p>(Thuyền và biển – Xuân Quỳnh)</p>"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9a865525c083e16b86ee",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:08:06.762Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Bài thơ thể hiện tình yêu, sự chia sẻ, cảm thông của những người lính đối với đồng đội của mình.",
                  "_id": "658e9374fd99ef7f85477897",
                  "id": "658e9374fd99ef7f85477897"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Bài thơ thể hiện nỗi nhớ nhà, nhớ quê hương của những người lính.",
                  "_id": "658e9374fd99ef7f85477898",
                  "id": "658e9374fd99ef7f85477898"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Bài thơ thể hiện một tình yêu chân thành, chung thuỷ, sắc son, vượt qua thời gian, không gian cùng với những cảm xúc lãng mạn của tâm hồn người phụ nữ trong tình yêu.",
                  "_id": "658e9374fd99ef7f85477899",
                  "id": "658e9374fd99ef7f85477899"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Bài thơ thể hiện nỗi nhớ của người phụ nữ khi có chồng đi chinh chiến nơi xa.",
                  "_id": "658e9374fd99ef7f8547789a",
                  "id": "658e9374fd99ef7f8547789a"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 9: Nội dung chính của bài thơ Thuyền và biển (Xuân Quỳnh) là gì?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9a9f1662ec7a14136874",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:08:31.254Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. “Sóng” và “biển”, hình ảnh ẩn dụ cho người con trai và con gái đang yêu.",
                  "_id": "658e9374fd99ef7f854778ae",
                  "id": "658e9374fd99ef7f854778ae"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. “Thuyền” và “sóng”, hình ảnh ẩn dụ cho người con trai và con gái đang yêu.",
                  "_id": "658e9374fd99ef7f854778af",
                  "id": "658e9374fd99ef7f854778af"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. “Sóng” và “bờ”, hình ảnh ẩn dụ cho người con trai và con gái đang yêu.",
                  "_id": "658e9374fd99ef7f854778b0",
                  "id": "658e9374fd99ef7f854778b0"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. “Thuyền” và “biển”, hình ảnh ẩn dụ cho người con trai và con gái đang yêu.",
                  "_id": "658e9374fd99ef7f854778b1",
                  "id": "658e9374fd99ef7f854778b1"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 10: Trong bài thơ Thuyền và biển (Xuân Quỳnh), đối tượng được nhà thơ nhắc đến trong khổ thơ sau là ai? “Chỉ có thuyền mới hiểu Biển mênh mông nhường nào Chỉ có biển mới biết Thuyền đi đâu, về đâu”"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9ac55525c0898e6b8722",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:09:09.609Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Cây trong phố - chờ trăng</span></p>",
                  "_id": "658e9374fd99ef7f854778c5",
                  "id": "658e9374fd99ef7f854778c5"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Hoa dọc chiến hào",
                  "_id": "658e9374fd99ef7f854778c6",
                  "id": "658e9374fd99ef7f854778c6"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Chồi biếc",
                  "_id": "658e9374fd99ef7f854778c7",
                  "id": "658e9374fd99ef7f854778c7"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Không bao giờ là cuối",
                  "_id": "658e9374fd99ef7f854778c8",
                  "id": "658e9374fd99ef7f854778c8"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 11: Tác phẩm Thuyền và biển (Xuân Quỳnh) in trong tập nào?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9ade2e91bc1bd234ea43",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:09:34.278Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Tất cả các đáp án trên</span></p>",
                  "_id": "658e9374fd99ef7f854778dc",
                  "id": "658e9374fd99ef7f854778dc"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. “Anh” và “em”",
                  "_id": "658e9374fd99ef7f854778dd",
                  "id": "658e9374fd99ef7f854778dd"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. “Biển” và “em”",
                  "_id": "658e9374fd99ef7f854778de",
                  "id": "658e9374fd99ef7f854778de"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. “Thuyền” và “em”",
                  "_id": "658e9374fd99ef7f854778df",
                  "id": "658e9374fd99ef7f854778df"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 12: Qua bài thơ “Thuyền và biển”, Xuân Quỳnh đã khám phá sự tương đồng, hòa hợp giữa:"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 8,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9b84ee05e4d3999dffd2",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:12:20.266Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. So sánh và điệp ngữ</span></p>",
                  "_id": "658e9374fd99ef7f854778f3",
                  "id": "658e9374fd99ef7f854778f3"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Ẩn dụ và nhân hóa",
                  "_id": "658e9374fd99ef7f854778f4",
                  "id": "658e9374fd99ef7f854778f4"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Ẩn dụ và hoán dụ",
                  "_id": "658e9374fd99ef7f854778f5",
                  "id": "658e9374fd99ef7f854778f5"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Hoán dụ và nhân hóa",
                  "_id": "658e9374fd99ef7f854778f6",
                  "id": "658e9374fd99ef7f854778f6"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "<p>Câu 13: Cho đoạn thơ sau: </p><p><em><span>“Chỉ có thuyền mới hiểu</span></em></p><p><em><span>Biển mênh mông nhường nào</span></em></p><p><em><span>Chỉ có biển mới biết</span></em></p><p><em><span>Thuyền đi đâu, về đâu</span></em></p><p><em><span>Những ngày không gặp nhau</span></em></p><p><em><span>Biển bạc đầu thương nhớ</span></em></p><p><em><span>Những ngày không gặp nhau</span></em></p><p><em><span>Lòng thuyền đau – rạn vỡ”</span></em></p><p><em><span>(Thuyền và biển</span></em><span> - Xuân Quỳnh</span></p><p>Biện pháp tu từ nào được sử dụng trong 2 khổ thơ trên?</p>"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9c575525c07b2c6b8886",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:15:51.164Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. 1967</span></p>",
                  "_id": "658e9374fd99ef7f85477921",
                  "id": "658e9374fd99ef7f85477921"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. 1963",
                  "_id": "658e9374fd99ef7f85477922",
                  "id": "658e9374fd99ef7f85477922"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. 1966",
                  "_id": "658e9374fd99ef7f85477923",
                  "id": "658e9374fd99ef7f85477923"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. 1965",
                  "_id": "658e9374fd99ef7f85477924",
                  "id": "658e9374fd99ef7f85477924"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 15: Bài thơ Thuyền và biển (Xuân Quỳnh) sáng tác năm bao nhiêu?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9c9b2e91bc6e6d34ebd8",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:16:59.320Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Chiến tranh</span></p>",
                  "_id": "658e9374fd99ef7f85477938",
                  "id": "658e9374fd99ef7f85477938"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Thiên nhiên",
                  "_id": "658e9374fd99ef7f85477939",
                  "id": "658e9374fd99ef7f85477939"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Tình yêu",
                  "_id": "658e9374fd99ef7f8547793a",
                  "id": "658e9374fd99ef7f8547793a"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Gia đình",
                  "_id": "658e9374fd99ef7f8547793b",
                  "id": "658e9374fd99ef7f8547793b"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 16: Bài thơ Thuyền và biển (Xuân Quỳnh) thuộc đề tài nào?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9cae6db44c661f53ceb2",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:17:18.396Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Có hình ảnh </span><em><span>“thuyền và biển”</span></em><span>.</span></p><p><span><br></span></p>",
                  "_id": "658e9374fd99ef7f8547794f",
                  "id": "658e9374fd99ef7f8547794f"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Thể thơ năm chữ",
                  "_id": "658e9374fd99ef7f85477950",
                  "id": "658e9374fd99ef7f85477950"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Cụm từ “Từ ngày nào”",
                  "_id": "658e9374fd99ef7f85477951",
                  "id": "658e9374fd99ef7f85477951"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Cụm từ “kể anh nghe”",
                  "_id": "658e9374fd99ef7f85477952",
                  "id": "658e9374fd99ef7f85477952"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 17: Trong bài thơ Thuyền và biển (Xuân Quỳnh), dấu hiệu hình thức nào chứng tỏ có một câu chuyện được kể trong bài thơ?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9f095525c00d996b8b38",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:27:21.918Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Người thiếu phụ và người chồng đã đi xa",
                  "_id": "658e9374fd99ef7f85477966",
                  "id": "658e9374fd99ef7f85477966"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Người con gái và người con trai yêu nhau",
                  "_id": "658e9374fd99ef7f85477967",
                  "id": "658e9374fd99ef7f85477967"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Người con trai và người con gái đã đi lấy chồng",
                  "_id": "658e9374fd99ef7f85477968",
                  "id": "658e9374fd99ef7f85477968"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Người con gái và người con trai đã đi lấy vợ",
                  "_id": "658e9374fd99ef7f85477969",
                  "id": "658e9374fd99ef7f85477969"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 18: Trong bài thơ Thuyền và biển (Xuân Quỳnh), hình ảnh “thuyền” và “biển” trong bài thơ là ẩn dụ tượng trưng cho?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9f1cee05e4b4229e0378",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:27:40.112Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Ai cũng có thể hiểu được nhau, chỉ cần họ muốn",
                  "_id": "658e9374fd99ef7f8547797d",
                  "id": "658e9374fd99ef7f8547797d"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Chỉ có những người yêu nhau mới biết nhau muốn đi đâu",
                  "_id": "658e9374fd99ef7f8547797e",
                  "id": "658e9374fd99ef7f8547797e"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Chỉ có những người yêu nhau mới hiểu được nhau",
                  "_id": "658e9374fd99ef7f8547797f",
                  "id": "658e9374fd99ef7f8547797f"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Chỉ có những người cùng máu mủ mới hiểu được nhau",
                  "_id": "658e9374fd99ef7f85477980",
                  "id": "658e9374fd99ef7f85477980"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 19: Trong bài thơ Thuyền và biển (Xuân Quỳnh), nhân vật trữ tình rút ra nhận thức gì từ câu chuyện?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 7,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea1371662ece531136ed3",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:36:39.100Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Diễn ra linh hoạt, đan xen với nhau",
                  "_id": "658e9374fd99ef7f85477994",
                  "id": "658e9374fd99ef7f85477994"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Diễn ra song song, độc lập với nhau",
                  "_id": "658e9374fd99ef7f85477995",
                  "id": "658e9374fd99ef7f85477995"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Là một câu chuyện, nhưng được tách ra thành hai",
                  "_id": "658e9374fd99ef7f85477996",
                  "id": "658e9374fd99ef7f85477996"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Cả ba đáp án đều sai",
                  "_id": "658e9374fd99ef7f85477997",
                  "id": "658e9374fd99ef7f85477997"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 20: Nhận xét về sự lồng ghép hai câu chuyện trong bài thơ Thuyền và biển (Xuân Quỳnh)?"
              },
              "answer": 0
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea1593a4e0435b7bad790",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:37:13.646Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. “Nếu phải cách xa anh”.</span></p>",
                  "_id": "658e9374fd99ef7f854779ab",
                  "id": "658e9374fd99ef7f854779ab"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. “Em chỉ còn bão tố”.",
                  "_id": "658e9374fd99ef7f854779ac",
                  "id": "658e9374fd99ef7f854779ac"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. “Em sẽ kể anh nghe”.",
                  "_id": "658e9374fd99ef7f854779ad",
                  "id": "658e9374fd99ef7f854779ad"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. “Biển chỉ còn sóng gió”.",
                  "_id": "658e9374fd99ef7f854779ae",
                  "id": "658e9374fd99ef7f854779ae"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 21: Câu thơ nào thể hiện rõ yếu tố tự sự trong bài thơ Thuyền và biển (Xuân Quỳnh)?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea16f5525c067806b8d34",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:37:35.427Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Sự gặp gỡ, đính ước của những người đang yêu.",
                  "_id": "658e9374fd99ef7f854779c2",
                  "id": "658e9374fd99ef7f854779c2"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Trò chuyện, hỏi han của những người đang yêu.",
                  "_id": "658e9374fd99ef7f854779c3",
                  "id": "658e9374fd99ef7f854779c3"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Sự thấu hiểu, đồng cảm của con người trong tình yêu.",
                  "_id": "658e9374fd99ef7f854779c4",
                  "id": "658e9374fd99ef7f854779c4"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Sự thách thức, chờ đợi của con người trong tình yêu.",
                  "_id": "658e9374fd99ef7f854779c5",
                  "id": "658e9374fd99ef7f854779c5"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 22: Từ “hiểu” trong câu thơ sau có nghĩa là gì:  “Chỉ có thuyền mới hiểu/ Biển mênh mông nhường nào”. (trích Thuyền và biển – Xuân Quỳnh) "
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea18b3a4e040c0fbad7bb",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:38:03.138Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Sự gặp gỡ, trò chuyện thân mật giữa những người đang yêu.",
                  "_id": "658e9374fd99ef7f854779d9",
                  "id": "658e9374fd99ef7f854779d9"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Sự chia sẻ, cảm thông giữa những người đang yêu.",
                  "_id": "658e9374fd99ef7f854779da",
                  "id": "658e9374fd99ef7f854779da"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Sự thấu hiểu, đồng cảm giữa những người đang yêu.",
                  "_id": "658e9374fd99ef7f854779db",
                  "id": "658e9374fd99ef7f854779db"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Sự thách thức, chờ đợi giữa những người đang yêu.",
                  "_id": "658e9374fd99ef7f854779dc",
                  "id": "658e9374fd99ef7f854779dc"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "<p>Câu 23: Từ “gặp” trong đoạn thơ sau có nghĩa là gì: </p><p><em><span>“Những ngày không gặp nhau</span></em></p><p><em><span>Biển bạc đầu thương nhớ</span></em></p><p><em><span>Những ngày không gặp nhau</span></em></p><p><em><span>Lòng thuyền đau – rạn vỡ”</span></em></p><p><span>(trích </span><em><span>Thuyền và biển</span></em><span> – Xuân Quỳnh)</span></p>"
              },
              "answer": 0
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea1ac6db44cce0f53d3a5",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:38:36.481Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Diễn tả nỗi nhớ tha thiết, nỗi nhớ được dựng lên bởi một thời gian bất thường và cụ thể hóa được nỗi thương nhớ.",
                  "_id": "658e9374fd99ef7f854779f0",
                  "id": "658e9374fd99ef7f854779f0"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Thể hiện sự chờ đợi mỏi mòn của người con gái trong tình yêu.",
                  "_id": "658e9374fd99ef7f854779f1",
                  "id": "658e9374fd99ef7f854779f1"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Diễn tả sự đau đớn, khổ sở của người vợ khi bị chồng phụ bạc.",
                  "_id": "658e9374fd99ef7f854779f2",
                  "id": "658e9374fd99ef7f854779f2"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Diễn tả nỗi nhớ của người vợ có chồng đi chinh chiến ở nơi xa.",
                  "_id": "658e9374fd99ef7f854779f3",
                  "id": "658e9374fd99ef7f854779f3"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 24: Trong bài thơ Thuyền và biển (Xuân Quỳnh), hình ảnh “Biển bạc đầu” trong câu: “Biển bạc đầu thương nhớ” có ý nghĩa gì?"
              },
              "answer": 0
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea1c23a4e046975bad7dc",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:38:58.994Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Thể hiện nỗi nhớ của người con trai khi yêu.",
                  "_id": "658e9374fd99ef7f85477a07",
                  "id": "658e9374fd99ef7f85477a07"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Thể hiện tâm lí bất ổn, những đau khổ về tinh thần của người con gái khi phải xa cách một nửa của mình.",
                  "_id": "658e9374fd99ef7f85477a08",
                  "id": "658e9374fd99ef7f85477a08"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Thể hiện nỗi buồn của chàng trai.",
                  "_id": "658e9374fd99ef7f85477a09",
                  "id": "658e9374fd99ef7f85477a09"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Thể hiện nỗi buồn của người vợ khi có chồng đi chinh chiến ở nơi xa.",
                  "_id": "658e9374fd99ef7f85477a0a",
                  "id": "658e9374fd99ef7f85477a0a"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 25: Câu thơ “Em chỉ còn bão tố!” trong bài thơ Thuyền và biển (Xuân Quỳnh) được hiểu như thế nào?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea1d4ee05e49aab9e05c1",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:39:16.635Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Giải thích cho hai dòng thơ trước đó: sự “xô thuyền” của biển giống như sự biến đổi trong tình yêu, luôn thay đổi không ngừng.",
                  "_id": "658e9374fd99ef7f85477a1e",
                  "id": "658e9374fd99ef7f85477a1e"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Ẩn dụ cho hai dòng thơ trước đó: thể hiện sự chung thuỷ của người con gái trong tình yêu.",
                  "_id": "658e9374fd99ef7f85477a1f",
                  "id": "658e9374fd99ef7f85477a1f"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. So sánh với hai dòng thơ trước đó: thể hiện nỗi niềm xót xa của người phụ nữ khi có chồng đi chinh chiến ở nơi xa.",
                  "_id": "658e9374fd99ef7f85477a20",
                  "id": "658e9374fd99ef7f85477a20"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Bổ sung thêm nghĩa cho hai dòng thơ trước đó: người phụ nữ khi yêu lúc nào cũng đau khổ.",
                  "_id": "658e9374fd99ef7f85477a21",
                  "id": "658e9374fd99ef7f85477a21"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "<p>Câu 26: Tác dụng của dấu ngoặc đơn trong khổ thơ sau của bài thơ Thuyền và biển (Xuân Quỳnh) là gì?</p><p><em><span>“Cũng có khi vô cớ</span></em></p><p><em><span>Biển ào ạt xô thuyền</span></em></p><p><em><span>(Vì tình yêu muôn thuở</span></em></p><p><em><span>Có bao giờ đứng yên?)”</span></em></p>"
              },
              "answer": 0
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea1e75525c038166b8d6e",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:39:35.421Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Cần phải chung thuỷ, thấu hiểu, chia sẻ, cảm thông với người mình yêu.",
                  "_id": "658e9374fd99ef7f85477a35",
                  "id": "658e9374fd99ef7f85477a35"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Cần phải vượt qua mọi gian nan thử thách để đến được bến bờ của hạnh phúc.",
                  "_id": "658e9374fd99ef7f85477a36",
                  "id": "658e9374fd99ef7f85477a36"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Khi yêu xa hãy luôn nghĩ và hướng về nhau để giữ vững niềm tin, hi vọng về một ngày tương phùng.",
                  "_id": "658e9374fd99ef7f85477a37",
                  "id": "658e9374fd99ef7f85477a37"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Khi yêu chỉ cần suy nghĩ đến cảm xúc của cá nhân, không cần phải có niềm tin, hi vọng về người mình yêu.",
                  "_id": "658e9374fd99ef7f85477a38",
                  "id": "658e9374fd99ef7f85477a38"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 27: Đáp án nào KHÔNG PHẢI là thông điệp mà nhà thơ Xuân Quỳnh muốn gửi gắm qua bài thơ Thuyền và biển?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 9,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9374ee05e4f7439df8f3",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T09:37:56.121Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": null,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tác giả thấy mình giống như chàng trai trong câu chuyện, vì quá yêu mà không muốn cách xa, chia rẽ, chỉ muốn ở bên nhau, tận hưởng niềm vui hạnh phúc.",
                  "_id": "658e9374fd99ef7f85477a4c",
                  "id": "658e9374fd99ef7f85477a4c"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Tác giả thấy mình giống như người con gái trong câu chuyện, nếu thiếu vắng người yêu thì trong cô gái “chỉ còn bão tố”, bên cạnh đó, vì quá yêu mà không muốn cách xa, chia rẽ, chỉ muốn ở bên nhau, tận hưởng niềm vui hạnh phúc.",
                  "_id": "658e9374fd99ef7f85477a4d",
                  "id": "658e9374fd99ef7f85477a4d"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Tác giả thấy mình giống như người vợ trong câu chuyện, vì chồng phải ra trận nên lúc nào cũng trong trạng thái nhớ mong, trông ngóng chồng về.",
                  "_id": "658e9374fd99ef7f85477a4e",
                  "id": "658e9374fd99ef7f85477a4e"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Tác giả thấy mình giống như chàng trai trong câu chuyện, nếu thiếu vắng người yêu thì trong chàng trai “chỉ còn bão tố”.",
                  "_id": "658e9374fd99ef7f85477a4f",
                  "id": "658e9374fd99ef7f85477a4f"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 28: Trong bài thơ Thuyền và biển (Xuân Quỳnh), nhân vật trữ tình - người kể chuyện đã đồng nhất mình với nhân vật trong câu chuyện như thế nào?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea2031662ec163d136f5c",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:40:03.579Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Giúp cho hai sự vật “thuyền” và “biển” tưởng như xa lạ lại trở nên gần gũi hơn, chạm đến sự đồng cảm của người đọc một cách tự nhiên và sâu sắc nhất.",
                  "_id": "658e9374fd99ef7f85477a63",
                  "id": "658e9374fd99ef7f85477a63"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Làm cho thông điệp về tình yêu được truyền tải một cách tự nhiên và gần gũi hơn.",
                  "_id": "658e9374fd99ef7f85477a64",
                  "id": "658e9374fd99ef7f85477a64"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Giúp cho người đọc hình dung và cảm nhận được tâm tư, tình cảm của tác giả.",
                  "_id": "658e9374fd99ef7f85477a65",
                  "id": "658e9374fd99ef7f85477a65"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Giúp cho hai sự vật “sóng” và “em” tưởng như xa lạ lại trở nên gần gũi hơn, chạm đến sự đồng cảm của người đọc một cách tự nhiên và sâu sắc nhất.",
                  "_id": "658e9374fd99ef7f85477a66",
                  "id": "658e9374fd99ef7f85477a66"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 29: Đáp án nào KHÔNG ĐÚNG về vài trò, ý nghĩa của yếu tố tự sự được thể hiện trong bài thơ Thuyền và biển (Xuân Quỳnh)?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea20fee05e40eba9e05fe",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:40:15.537Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Sử dụng cặp hình tượng sánh đôi “thuyền - biển” để nói về tình yêu đôi lứa.",
                  "_id": "658e9374fd99ef7f85477a7a",
                  "id": "658e9374fd99ef7f85477a7a"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Nhịp thơ linh hoạt, lúc nhẹ nhàng, tâm tình, lúc sôi nổi, dồn dập.",
                  "_id": "658e9374fd99ef7f85477a7b",
                  "id": "658e9374fd99ef7f85477a7b"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Sử dụng tài tình bút pháp ước lệ tượng trưng và tả cảnh ngụ tình.",
                  "_id": "658e9374fd99ef7f85477a7c",
                  "id": "658e9374fd99ef7f85477a7c"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Sử dụng nhiều biện pháp nghệ thuật: so sánh, nhân hóa",
                  "_id": "658e9374fd99ef7f85477a7d",
                  "id": "658e9374fd99ef7f85477a7d"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 30: Đáp án nào KHÔNG ĐÚNG về đặc sắc nghệ thuật được thể hiện trong bài thơ Thuyền và biển (Xuân Quỳnh)?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea21fee05e46ec79e0610",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:40:31.643Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Tuổi thơ đầy trải nghiệm thú vị</span></p><p><span><br></span></p>",
                  "_id": "658e9374fd99ef7f85477a91",
                  "id": "658e9374fd99ef7f85477a91"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tuổi thơ đầy đủ, trọn vẹn",
                  "_id": "658e9374fd99ef7f85477a92",
                  "id": "658e9374fd99ef7f85477a92"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Tuổi thơ bất hạnh, luôn khao khát mái ấm",
                  "_id": "658e9374fd99ef7f85477a93",
                  "id": "658e9374fd99ef7f85477a93"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Tuổi thơ hạnh phúc, êm đềm",
                  "_id": "658e9374fd99ef7f85477a94",
                  "id": "658e9374fd99ef7f85477a94"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 31: Đâu là nhận xét đúng về tuổi thơ Xuân Quỳnh?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea2326db44c14b353d3f6",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:40:50.113Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Phóng sự</span></p>",
                  "_id": "658e9374fd99ef7f85477aa8",
                  "id": "658e9374fd99ef7f85477aa8"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Thơ",
                  "_id": "658e9374fd99ef7f85477aa9",
                  "id": "658e9374fd99ef7f85477aa9"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Truyện ngắn",
                  "_id": "658e9374fd99ef7f85477aaa",
                  "id": "658e9374fd99ef7f85477aaa"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Tiểu thuyết",
                  "_id": "658e9374fd99ef7f85477aab",
                  "id": "658e9374fd99ef7f85477aab"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 32: Xuân Quỳnh nổi tiếng với thể loại nào?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea2436db44c0c1953d409",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:41:07.897Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Là nhà thơ nữ tiêu biểu của thế hệ các nhà thơ trẻ thời kì chống Mĩ.",
                  "_id": "658e9374fd99ef7f85477abf",
                  "id": "658e9374fd99ef7f85477abf"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Là nhà thơ nữ tiêu biểu của thế hệ các nhà thơ trẻ thời kì chống Pháp.",
                  "_id": "658e9374fd99ef7f85477ac0",
                  "id": "658e9374fd99ef7f85477ac0"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Là nhà thơ nữ tiêu biểu của thế hệ các nhà thơ trẻ thời kì chống Nhật.",
                  "_id": "658e9374fd99ef7f85477ac1",
                  "id": "658e9374fd99ef7f85477ac1"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Là nhà thơ nữ tiêu biểu của thế hệ các nhà thơ trẻ thời kì phong kiến.",
                  "_id": "658e9374fd99ef7f85477ac2",
                  "id": "658e9374fd99ef7f85477ac2"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 33: Đáp án nào dưới đây đúng về nhà thơ Xuân Quỳnh?"
              },
              "answer": 0
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea24f5525c008906b8da2",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:41:19.230Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. lo âu – kiêu sa – toan tính.</span></p>",
                  "_id": "658e9374fd99ef7f85477ad6",
                  "id": "658e9374fd99ef7f85477ad6"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. bất hạnh – khát khao – da diết.",
                  "_id": "658e9374fd99ef7f85477ad7",
                  "id": "658e9374fd99ef7f85477ad7"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. trắc ẩn – chân thành – da diết.",
                  "_id": "658e9374fd99ef7f85477ad8",
                  "id": "658e9374fd99ef7f85477ad8"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. suy tư – chân thành – buồn tủi.",
                  "_id": "658e9374fd99ef7f85477ad9",
                  "id": "658e9374fd99ef7f85477ad9"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 34: Điền từ vào chỗ trống theo đúng thứ tự sắp xếp trong câu: “Thơ Xuân Quỳnh là tiếng lòng của một tâm hồn phụ nữ nhiều …, vừa hồn nhiên, tươi tắn, vừa …, đằm thắm và luôn … trong khát vọng về hạnh phúc bình dị đời thường.” (Sách giáo khoa Kết nối tri thức Ngữ văn 11, tập một, Nhà xuất bản Giáo dục). "
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea2673a4e04d477bad88c",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:41:43.975Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Là tiếng lòng của một tâm hồn phụ nữ giàu trắc ẩn.",
                  "_id": "658e9374fd99ef7f85477aed",
                  "id": "658e9374fd99ef7f85477aed"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Thể hiện được những rung cảm của người phụ nữ và khao khát hạnh phúc đời thường.",
                  "_id": "658e9374fd99ef7f85477aee",
                  "id": "658e9374fd99ef7f85477aee"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Xuất hiện những hình ảnh đời thường bình dị nhưng có giá trị biểu cảm cao.",
                  "_id": "658e9374fd99ef7f85477aef",
                  "id": "658e9374fd99ef7f85477aef"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Tập trung xây dựng cốt truyện với nhiều tình tiết li kì hấp dẫn.",
                  "_id": "658e9374fd99ef7f85477af0",
                  "id": "658e9374fd99ef7f85477af0"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 35: Đáp án nào KHÔNG ĐÚNG về đặc điểm sáng tác của nhà thơ Xuân Quỳnh? "
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 9,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9374ee05e483179df8fb",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T09:37:56.121Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": null,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tình yêu mới nở, rộ như thuyền và biển, đi khắp muôn nơi",
                  "_id": "658e9374fd99ef7f85477b04",
                  "id": "658e9374fd99ef7f85477b04"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Những cung bậc cảm xúc trong tình yêu: khi thì thầm, yên lặng, khi xô bồ, thay đổi",
                  "_id": "658e9374fd99ef7f85477b05",
                  "id": "658e9374fd99ef7f85477b05"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Tác giả khẳng định thuyền và biển cũng như anh và em, không thể tách rời bởi khi xa chỉ để lại những nỗi buồn đau, tương tư.",
                  "_id": "658e9374fd99ef7f85477b06",
                  "id": "658e9374fd99ef7f85477b06"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Tất cả các đáp án trên",
                  "_id": "658e9374fd99ef7f85477b07",
                  "id": "658e9374fd99ef7f85477b07"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 36: Những cung bậc tình cảm gì đã được “người kể” soi rọi, khám phá trong bài thơ Thuyền và biển (Xuân Quỳnh)?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 9,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9374ee05e438629df8fc",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T09:37:56.121Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": null,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Vẻ đẹp của thiên nhiên.",
                  "_id": "658e9374fd99ef7f85477b1b",
                  "id": "658e9374fd99ef7f85477b1b"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Những đau khổ của con người, thiên nhiên.",
                  "_id": "658e9374fd99ef7f85477b1c",
                  "id": "658e9374fd99ef7f85477b1c"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Những tình cảm gần gũi, bình dị.",
                  "_id": "658e9374fd99ef7f85477b1d",
                  "id": "658e9374fd99ef7f85477b1d"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Tất cả các đáp án trên.",
                  "_id": "658e9374fd99ef7f85477b1e",
                  "id": "658e9374fd99ef7f85477b1e"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 37: Xuân Quỳnh thường viết về đề tài gì?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 9,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9374ee05e458919df8fd",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T09:37:56.121Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": null,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Xuân Quỳnh mồ côi cha mẹ từ nhỏ, Xuân Quỳnh ở với bà nội.",
                  "_id": "658e9374fd99ef7f85477b32",
                  "id": "658e9374fd99ef7f85477b32"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Xuân Quỳnh mồ côi mẹ từ nhỏ, Xuân Quỳnh ở với bà nội.",
                  "_id": "658e9374fd99ef7f85477b33",
                  "id": "658e9374fd99ef7f85477b33"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Xuân Quỳnh mồ côi mẹ từ nhỏ, Xuân Quỳnh ở với bà ngoại.",
                  "_id": "658e9374fd99ef7f85477b34",
                  "id": "658e9374fd99ef7f85477b34"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Vì cha mẹ đi công tác xa nên thuở nhỏ Xuân Quỳnh sống với bà nội.",
                  "_id": "658e9374fd99ef7f85477b35",
                  "id": "658e9374fd99ef7f85477b35"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 38: Chọn đáp án đúng:"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea28aee05e43d799e066b",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:42:18.657Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Lâm Thị Mỹ Dạ.</span></p>",
                  "_id": "658e9374fd99ef7f85477b49",
                  "id": "658e9374fd99ef7f85477b49"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Nguyễn Hoàng Xuân Quỳnh.",
                  "_id": "658e9374fd99ef7f85477b4a",
                  "id": "658e9374fd99ef7f85477b4a"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Nguyễn Thị Xuân Quỳnh.",
                  "_id": "658e9374fd99ef7f85477b4b",
                  "id": "658e9374fd99ef7f85477b4b"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Phan Thị Thanh Nhàn.",
                  "_id": "658e9374fd99ef7f85477b4c",
                  "id": "658e9374fd99ef7f85477b4c"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 39: Tên thật của Xuân Quỳnh là gì?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea2a56db44c0fba53d49b",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:42:45.476Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Diễn viên hài.</span></p>",
                  "_id": "658e9374fd99ef7f85477b60",
                  "id": "658e9374fd99ef7f85477b60"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Diễn viên điện ảnh.",
                  "_id": "658e9374fd99ef7f85477b61",
                  "id": "658e9374fd99ef7f85477b61"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Ca sĩ.",
                  "_id": "658e9374fd99ef7f85477b62",
                  "id": "658e9374fd99ef7f85477b62"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Diễn viên múa.",
                  "_id": "658e9374fd99ef7f85477b63",
                  "id": "658e9374fd99ef7f85477b63"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 40: Ngoài vai trò nhà thơ, Xuân Quỳnh còn được biết đến là?"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea2c23a4e0479c9bad8b6",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:43:14.685Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Nói giảm nói tránh, so sánh.</span></p>",
                  "_id": "658e9374fd99ef7f85477b77",
                  "id": "658e9374fd99ef7f85477b77"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. So sánh, hoán dụ.",
                  "_id": "658e9374fd99ef7f85477b78",
                  "id": "658e9374fd99ef7f85477b78"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Liệt kê, nói quá.",
                  "_id": "658e9374fd99ef7f85477b79",
                  "id": "658e9374fd99ef7f85477b79"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Ẩn dụ, điệp cấu trúc.",
                  "_id": "658e9374fd99ef7f85477b7a",
                  "id": "658e9374fd99ef7f85477b7a"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "<p>Câu 41: Biện pháp tu từ được sử dụng trong 4 câu sau là gì?</p><p><span>dụng trong 4 câu sau là gì?</span></p><p><em><span>Những ngày không gặp nhau</span></em></p><p><em><span>Biển bạc đầu thương nhớ</span></em></p><p><em><span>Những ngày không gặp nhau</span></em></p><p><em><span>Lòng thuyền đau - rạn vỡ</span></em></p><p><span>(</span><em><span>Thuyền và biển</span></em><span> – Xuân Quỳnh)</span></p>"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea2f06db44c60d153d4ea",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:44:00.580Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Cô gái miền núi.</span></p>",
                  "_id": "658e9374fd99ef7f85477b8e",
                  "id": "658e9374fd99ef7f85477b8e"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Cô gái nhỏ.",
                  "_id": "658e9374fd99ef7f85477b8f",
                  "id": "658e9374fd99ef7f85477b8f"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Người lính Trường Sơn.",
                  "_id": "658e9374fd99ef7f85477b90",
                  "id": "658e9374fd99ef7f85477b90"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Người chinh phụ.",
                  "_id": "658e9374fd99ef7f85477b91",
                  "id": "658e9374fd99ef7f85477b91"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 42: Trong bài thơ Thuyền và biển (Xuân Quỳnh), hình ảnh “biển” được so sánh với hình ảnh nào?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea30f1662ec54bb13703a",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:44:31.917Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Tập trung tái hiện đời sống nội tâm phức tạp của những nhân vật phản diện.",
                  "_id": "658e9374fd99ef7f85477ba5",
                  "id": "658e9374fd99ef7f85477ba5"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Thể hiện được những rung cảm của người phụ nữ và khao khát hạnh phúc đời thường.",
                  "_id": "658e9374fd99ef7f85477ba6",
                  "id": "658e9374fd99ef7f85477ba6"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Thiên về những điều kì thú trong thiên nhiên.",
                  "_id": "658e9374fd99ef7f85477ba7",
                  "id": "658e9374fd99ef7f85477ba7"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Tập trung xây dựng cốt truyện với nhiều tình tiết kì ảo.",
                  "_id": "658e9374fd99ef7f85477ba8",
                  "id": "658e9374fd99ef7f85477ba8"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 43: Đa số các sáng tác của Xuân Quỳnh có đặc điểm chung nào sau đây?"
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea3221662ec8f7a137058",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:44:50.257Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Là một trong những cây bút tiêu biểu của thế hệ các nhà thơ trẻ thời kì chống Mĩ.",
                  "_id": "658e9374fd99ef7f85477bbc",
                  "id": "658e9374fd99ef7f85477bbc"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Là tác giả của những bài thơ viết về tình yêu vừa hồn nhiên, giàu trực cảm, vừa lắng sâu những trải nghiệm suy tư.",
                  "_id": "658e9374fd99ef7f85477bbd",
                  "id": "658e9374fd99ef7f85477bbd"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Là một nghệ sĩ đa tài, làm thơ, vẽ tranh, sáng tác nhạc.",
                  "_id": "658e9374fd99ef7f85477bbe",
                  "id": "658e9374fd99ef7f85477bbe"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Các sáng tác thơ của bà là tiếng lòng của tâm hồn người phụ nữ nhiều trắc ẩn vừa hồn nhiên, vừa tươi tắn, vừa chân thành, đằm thắm.",
                  "_id": "658e9374fd99ef7f85477bbf",
                  "id": "658e9374fd99ef7f85477bbf"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 44: Đáp án nào không đúng về thi sĩ Xuân Quỳnh?"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea331ee05e456d59e06e6",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:45:05.053Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. tình người – cách sống – hướng đi.</span></p>",
                  "_id": "658e9374fd99ef7f85477bd3",
                  "id": "658e9374fd99ef7f85477bd3"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. tình mẫu tử – cách sống – cốt lõi.",
                  "_id": "658e9374fd99ef7f85477bd4",
                  "id": "658e9374fd99ef7f85477bd4"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. tình yêu – tình cảm – cốt lõi.",
                  "_id": "658e9374fd99ef7f85477bd5",
                  "id": "658e9374fd99ef7f85477bd5"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. tình quân dân  – tình cảm – hướng đi.",
                  "_id": "658e9374fd99ef7f85477bd6",
                  "id": "658e9374fd99ef7f85477bd6"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 45: Điền từ vào chỗ trống theo đúng thứ tự sắp xếp trong câu: “Điều đáng quý nhất ở Xuân Quỳnh và thơ Xuân Quỳnh là sự thành thật rất thành thật, thành thật trong quan hệ bạn bè, với xã hội và cả ... Chị không quanh co không giấu diếm một điều gì. Mỗi dòng thơ, mỗi trang thơ đều phơi bày một ..., một suy nghĩ của chị. Thành thật, đây là ... thơ Xuân Quỳnh” (Nhận định của Võ Văn Trực)"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea3433a4e0420aabad909",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:45:23.355Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. Nói quá</span></p>",
                  "_id": "658e9374fd99ef7f85477bea",
                  "id": "658e9374fd99ef7f85477bea"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. So sánh",
                  "_id": "658e9374fd99ef7f85477beb",
                  "id": "658e9374fd99ef7f85477beb"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Câu hỏi tu từ",
                  "_id": "658e9374fd99ef7f85477bec",
                  "id": "658e9374fd99ef7f85477bec"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Điệp ngữ",
                  "_id": "658e9374fd99ef7f85477bed",
                  "id": "658e9374fd99ef7f85477bed"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "<p>Câu 46: Biện pháp tu từ được sử dụng trong 2 câu sau là gì?</p><p><em><span>(Vì tình yêu muôn thuở</span></em></p><p><em><span>Có bao giờ đứng yên?)</span></em></p><p><span>(</span><em><span>Thuyền và biển</span></em><span> – Xuân Quỳnh)</span></p>"
              },
              "answer": 2
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea35b2e91bce09234f2a2",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:45:47.020Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. lục bát – thuyền-biển – giản dị – tự sự.",
                  "_id": "658e9374fd99ef7f85477c01",
                  "id": "658e9374fd99ef7f85477c01"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. năm chữ – sóng-em – uyên bác – chính luận.",
                  "_id": "658e9374fd99ef7f85477c02",
                  "id": "658e9374fd99ef7f85477c02"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. lục bát – sóng-em – uyên bác – chính luận.",
                  "_id": "658e9374fd99ef7f85477c03",
                  "id": "658e9374fd99ef7f85477c03"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. năm chữ – thuyền-biển – giản dị – tự sự.",
                  "_id": "658e9374fd99ef7f85477c04",
                  "id": "658e9374fd99ef7f85477c04"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 47: Điền từ vào chỗ trống theo đúng thứ tự sắp xếp trong câu: “Như vậy, với thể thơ ..., cặp hình tượng ... giàu sức gợi, ngôn ngữ ..., giọng điệu tâm tình, kết hợp hài hòa giữa yếu tố ...và trữ tình Xuân Quỳnh đã đem đến những quan niệm cao đẹp về tình yêu hiện đại.” (Sách giáo khoa Ngữ Văn Kết nối tri thức 11, tập 1, Nhà xuất bản Giáo dục Việt Nam.)"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea3683a4e049bb8bad9c4",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:46:00.674Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. Cánh bướm – ở ẩn  – mưa to.",
                  "_id": "658e9374fd99ef7f85477c18",
                  "id": "658e9374fd99ef7f85477c18"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. Cánh chuồn chuồn – nương thân – nắng nôi.",
                  "_id": "658e9374fd99ef7f85477c19",
                  "id": "658e9374fd99ef7f85477c19"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. Bông hoa hướng dương – nương thân – mưa to.",
                  "_id": "658e9374fd99ef7f85477c1a",
                  "id": "658e9374fd99ef7f85477c1a"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. Bông hoa cúc – ở ẩn – nắng nôi.",
                  "_id": "658e9374fd99ef7f85477c1b",
                  "id": "658e9374fd99ef7f85477c1b"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 48: Điền từ vào chỗ trống theo đúng thứ tự sắp xếp về lời nhận định của Trịnh Công Sơn: “Thơ Xuân Quỳnh là thơ của một ... bay tìm chỗ ... trong ... giông bão của cuộc đời”."
              },
              "answer": 1
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea3795525c001006b8e7e",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:46:17.539Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "<p><span>D. tình mẫu tử – Thái Bình – đau khổ.</span></p>",
                  "_id": "658e9374fd99ef7f85477c2f",
                  "id": "658e9374fd99ef7f85477c2f"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. tình mẫu tử – Hà Nội – nhớ nhung.",
                  "_id": "658e9374fd99ef7f85477c30",
                  "id": "658e9374fd99ef7f85477c30"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. tình yêu – Hà Nội – đau khổ.",
                  "_id": "658e9374fd99ef7f85477c31",
                  "id": "658e9374fd99ef7f85477c31"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. tình yêu – Thái Bình – nhớ nhung.",
                  "_id": "658e9374fd99ef7f85477c32",
                  "id": "658e9374fd99ef7f85477c32"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 49: Điền từ vào chỗ trống theo đúng thứ tự sắp xếp trong câu: “Khi đến với bài thơ Thuyền và biển của Xuân Quỳnh ta càng cảm nhận được rõ những băn khoăn, khát khao, trăn trở về ... lý tưởng của nhà thơ. Bài thơ chính là kết quả của chiến đi thực tế lên vùng đất ... Bà viết nên bài thơ với nỗi .., cùng với nhiều cung bậc cảm xúc.”(Sách giáo khoa Ngữ Văn Kết nối tri thức 11, tập 1, Nhà xuất bản Giáo dục Việt Nam.)"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 6,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658ea3966db44cf63253d55b",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T10:46:46.828Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": true,
            "standards": [],
            "aiCreateMeta": null
          },
          {
            "structure": {
              "settings": {
                "hasCorrectAnswer": true,
                "fibDataType": "string",
                "canSubmitCustomResponse": false,
                "doesOptionHaveMultipleTargets": false
              },
              "marks": {
                "correct": 1,
                "incorrect": 0
              },
              "theme": {
                "fontColor": {
                  "text": "#5D2057"
                },
                "background": {
                  "color": "#FFFFFF",
                  "image": "",
                  "video": ""
                },
                "shape": {
                  "largeShapeColor": "#F2F2F2",
                  "smallShapeColor": "#9A4292"
                },
                "fontFamily": "Quicksand",
                "titleFontFamily": "Quicksand"
              },
              "explain": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "",
                "hasMath": false,
                "answerTime": 0,
                "media": [],
                "text": ""
              },
              "kind": "MCQ",
              "hints": [],
              "options": [
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "A. người con trai – dịu dàng – hùng vĩ – tình yêu.",
                  "_id": "658e9374fd99ef7f85477c46",
                  "id": "658e9374fd99ef7f85477c46"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "B. người con gái – đối lập – hùng vĩ – tình mẫu tử.",
                  "_id": "658e9374fd99ef7f85477c47",
                  "id": "658e9374fd99ef7f85477c47"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "C. người con trai – dịu dàng – rộng lớn – tình yêu.",
                  "_id": "658e9374fd99ef7f85477c48",
                  "id": "658e9374fd99ef7f85477c48"
                },
                {
                  "math": {
                    "latex": [],
                    "template": null
                  },
                  "type": "text",
                  "hasMath": false,
                  "answerTime": 0,
                  "media": [],
                  "text": "D. người con gái – dịu dàng – rộng lớn – tình yêu.",
                  "_id": "658e9374fd99ef7f85477c49",
                  "id": "658e9374fd99ef7f85477c49"
                }
              ],
              "hasMath": false,
              "query": {
                "math": {
                  "latex": [],
                  "template": null
                },
                "type": "text",
                "hasMath": false,
                "answerTime": -1,
                "media": [],
                "text": "Câu 50: Điền từ vào chỗ trống theo đúng thứ tự sắp xếp trong câu: “Trong bài Thuyền và Biển, Xuân Quỳnh sử dụng biển để ẩn dụ cho hình ảnh ..., bởi qua đôi mắt của mình, bà thấy biển cũng có sự ..., êm ả, đặc biệt có sự ..., bao la như chính tình cảm của nhà thơ trong ....” (Sách giáo khoa Ngữ Văn Kết nối tri thức 11, tập 1, Nhà xuất bản Giáo dục Việt Nam.)"
              },
              "answer": 3
            },
            "topics": [],
            "isSuperParent": false,
            "standardIds": [],
            "aiGenerated": false,
            "__v": 9,
            "teleportFrom": null,
            "ver": 2,
            "_id": "658e9374ee05e44b109df90a",
            "time": 120000,
            "published": true,
            "type": "MCQ",
            "createdAt": "2023-12-29T09:37:56.121Z",
            "updated": "2024-02-02T08:31:01.187Z",
            "cached": true,
            "state": "inactive",
            "attempt": 0,
            "cause": "",
            "cloned": null,
            "standards": [],
            "aiCreateMeta": null
          }
        ]
      }
    }
