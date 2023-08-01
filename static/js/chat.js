str = ''
        // openAI API  
        const $inputPrice = document.querySelector('#price')
        const $button = document.querySelector('button')
        const $select_color = document.querySelector('#select_color')
        const $select_price = document.querySelector('#select_price')
        
        let color_list = ['black', 'gray', 'white', 'red', 'yellow', 'brown', 'green', 'skyblue', 'indigo']
        let price_list = ['~10', '10~30', '30~50', '50~100', '100~']
        
        let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
        
        // //select option의 value, text값 가져오기
        // const showValue = ($select_price) => {
        //     const value = $select_price.value;
        //     const text =  $select_price.options[$select_price.selectedIndex].text;
        // }
        
        let data = [
            {"role": "system", "content": "assistant는 신발 추천 전문가이다."},
            {"role": "user", "content": "결과는 문장을 제외하고 json으로만 해줘. 전체 요소는 price, color, product로 하고 price는 입력받은 가격, color는 입력받은 색상, product는 제품의 정보이고, product의 요소는 brand_name, product_name, all으로 나눠줘. product의 요소 중 all은 전체 이름을 표시해줘. 결과는 문장을 제외하고 json으로만 해줘. "},
            // {"role": "user", "content": "결과는 문장을 제외하고 json으로만 해줘."},
            // {"role": "user", "content": "전체 요소는 price, color, product로 하고 price는 입력받은 가격, color는 입력받은 색상, product는 제품의 정보야."},
            // {"role": "user", "content": "product의 요소는 brand_name, product_name, all으로 나눠줘."},
            // {"role": "user", "content": "product의 요소 중 all은 전체 이름을 표시해줘."},
        ]
        
        $button.addEventListener('click', e =>{
            str = ''
            e.preventDefault()
            check_price_color()

            // console.log($inputPrice.value)
            // console.log(userInputData + $inputPrice.value)
            console.log('$select_color.value : ' + $select_color.value)
            console.log('$select_price.value : ' + $select_price.value)
            
            data.push({
                "role" : "assistant",
                "content" : userInputData + '결과는 문장을 제외하고 json으로만 해줘.'
            })
            
            chatGptAPI()
        })

        function chatGptAPI(){
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                redirect: "follow",
            })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                // result -> 결과로 받은 json
                result = JSON.parse(res.choices[0].message.content)
                
                console.log(JSON.parse(res.choices[0].message.content))
                console.log(result.price)
                // console.log(result.product[0].all)
                console.log(result.product.length)
                
                const divanswer_content = document.querySelector('#answer_content')
                
                str += `
                    <p class="text-2xl text-[#1E5AFD] font-bold mb-5">추천 결과</p>
                    <div class="result_top">
                        <p class="result_price">선택 가격대 : <b class="font-bold">${result.price}</b>만원</p>
                        <p>선택 색상 : <b class="font-bold text-${result.color}-500 bg-slate-300">${result.color.toUpperCase()}</b></p>
                    </div>
                    <div class="result_container pt-5">
                    `
                        for (let i=0; i < result.product.length; i++){
                            // console.log(result.product[i].all)
                            str += `
                                <div class="result_info p-5">
                                    <p class="text-xl font-bold">${i+1}</p>
                                    <img class="result_img" src="./src/img/shoe/${$select_color.value}/${$select_price.value}/${result.product[i].all}.webp" alt="">
                                    <p class="text-xl font-bold">${result.product[i].brand_name}</p>
                                    <p>${result.product[i].all}</p>
                                </div>
                            `
                    
                    }
                    `
                        </div>
                    `
                    
                closeLoadingWithMask()
                divanswer_content.innerHTML = str;
            })
            
        }