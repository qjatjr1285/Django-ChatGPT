function check_price_color(){
    if ($select_color.value == 'black') {
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Asics Jog 100 2 Black, 2. Converse Chuck 70 Ox Black, 3. Nike Waffle Trainer 2 Black White 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Samba OG Black White Gum, 2. Adidas Superstar Core Black White, 3.Nike Air Force 1 \'07 Low Triple Black 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 x Travis Scott Retro Low OG SP Black Phantom, 2. Maison Mihara Yasuhiro Peterson OG Sole Canvas Low Sneakers Black, 3. Nike x Supreme Air Force 1 Low Black, 4. Salomon XT-6 Gore-Tex Black Ebony 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Balenciaga Speed Trainer Black White 2021_2022, 2. New Balance 992 Made in USA Black Grey, 3. Nike x Peaceminusone Air Force 1 Low Para-Noise 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Nike x Off-White Air Force 1 Low Black White, 2. Nike x Sacai VaporWaffle Black White, 3. Nike x Tiffany & Co. Air Force 1 Low SP 1837 이 있습니다.'
        }
    }
    else if ($select_color.value == 'gray'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Asics Gel-1130 Piedmont Grey, 2. New Balance 327 Grey, 3. New Balance 996 Grey 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Low Light Smoke Grey, 2. New Balance 530 Steel Grey, 3. New Balance 2002R Grey, 4. Nike Dunk Low Retro Grey Fog 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. New Balance 993 Made in USA Grey - D Standard, 2. Nike x Off-White Dunk Low The 50 - Lot 46, 3. Salomon XT-6 Expanse Alloy Quiet Shade 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Asics x JJJJound Gel-Kayano 14 Silver Black, 2. Maison Mihara Yasuhiro Wayne OG Sole Leather Low-top Sneakers Grey White, 3. Nike x Sacai x Fragment LDWaffle Light Smoke Grey 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 x Dior Low OG, 2. Jordan 4 x Kaws Retro Cool Grey, 3. Jordan 5 Retro Low Neymar, 4. Nike x Staple Dunk SB Low NYC Pigeon 이 있습니다.'
        }
    }
    else if ($select_color.value == 'white'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Superstar White Black, 2. Asics Gel-1090 White Midnight, 3. Asics Jog 100 S White - 2E Wide, 4. New Balance 327 White Moonbeam 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Samba Vegan White Black, 2. New Balance 530 White, 3. Nike Air Force 1 `07 Low White, 4. Nike x Supreme Air Force 1 Low White, 5. Salomon XT-6 ADV White 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Ader Error Log; baus Off White, 2. Maison Margiela Calfskin Replica Sneakers, 3. Maison Mihara Yasuhiro Blakey OG Sole Leather Low-top Sneakers White, 4. New Balance 992 Made in USA White Silver 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Nike x Off-White Dunk Low The 50 - Lot 1, 2. Nike x Peaceminusone Air Force 1 Low Para-Noise 2.0, 3. Prada Downtown Leather Sneakers White Black 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Dior B27 Low-Top Sneakers White, 2. Hermes Bouncing Sneakers Calfskin Suede Goatskin & Blanc, 3. Nike x Off-White Air Presto White 이 있습니다.'
        }
    }
    else if ($select_color.value == 'red'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Gazelle Preloved Red Off White, 2. Nike SB Dunk Low Adobe, 3. Vans Authentic Red 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Low White Gym Red Black, 2. Jordan 1 Retro High Spider-Man Next Chapter, 3. New Balance 2002R Rust Oxide 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Low Golf Chicago, 2. Jordan 1 Low OG Starfish, 3. Jordan 1 Retro High OG Chicago 2022, 4. Maison Mihara Yasuhiro Peterson OG Sole Canvas Low Sneakers Orange 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Retro High OG Bred Toe, 2. Nike SB Dunk Low Pro Chicago, 3. Nike x Off-White Dunk Low University Red 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Retro High Not for Resale Varsity Red, 2. Jordan 1 Retro High OG Bred Banned 2016, 3. Nike x Peaceminusone Air Force 1 Low Para-Noise - Korea Exclusive, 4. Nike x StrangeLove SB Dunk Low Pink (Regular Box) 이 있습니다.'
        }
    }
    else if ($select_color.value == 'yellow'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Converse Chuck 70 High Vintage Canvas Sunflower, 2. Nike Dunk Low Apple Green and Yellow Strike, 3. Nike Dunk Low Retro University Gold and Deep Maroon 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 4 Retro Thunder 2023, 2. Nike x Sacai Blazer Low Magma Orange, 3. Nike x Tom Sachs General Purpose Shoe Archive 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Yeezy Boost 350 V2 Carbon Beluga, 2. Jordan 4 Retro Tour Yellow, 3. Nike x Sacai LDWaffle Green Multi 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Nike x Grateful Dead SB Dunk Low Yellow Bear, 2. Nike x Off-White Dunk Low University Gold Midnight Navy, 3. Nike x Sacai VaporWaffle Sesame and Blue Void 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Retro High OG Reverse Shattered Backboard, 2. Jordan 1 Retro Shattered Backboard, 3. Nike x Concepts SB Dunk Low Orange Lobster (Special Box) 이 있습니다.'
        }
    }
    else if ($select_color.value == 'brown'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. New Balance 574 Heritage Orange Burst White, 2. Nike Killshot 2 Leather Sail Desert Orange, 3. Nike x Tom Sachs General Purpose Shoe Brown 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Nike Air Force 1 \'07 WB Flax, 2. Nike x Supreme Air Force 1 Low Flax, 3. Adidas Yeezy Foam RNNR Clay Taupe 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Retro High OG Black Mocha, 2. Jordan 1 x A Ma Maniere Retro High OG SP Sail and Burgundy, 3. Salomon XT-6 Turtledove 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Retro High Rookie of the Year, 2. Nike x Off-White Air Max 90 V2 Desert Ore, 3. Nike x Travis Scott Air Force 1 Low Cactus Jack 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 x Travis Scott Retro High OG SP Mocha, 2. Jordan 1 x Travis Scott Retro Low OG SP Mocha, 3. Jordan 1 x Travis Scott Retro Low OG SP Sail and Ridgerock 이 있습니다.'
        }
    }
    else if ($select_color.value == 'green'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Gazelle Dark Green Cream White, 2. Asics Jog 100 S Sheet Rock - 2E Wide, 3. New Balance 574 Legacy Green 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Gazelle Court Green Cloud White, 2. Adidas x Emmi Gazelle Indoor Off White Dark Green, 3. Nike Air Force 1 \'07 LV8 40th Anniversary Join Forces Sail Malachite 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Low Green Toe, 2. Jordan 4 x Nike SB Retro Pine Green, 3. Nike x Jarritos SB Dunk Low Phantom and Malachite 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Maison Mihara Yasuhiro Blakey OG Sole Canvas Low-top Sneakers Green, 2. New Balance x JJJJound 990v3 Olive, 3. Nike Kobe 6 Protro Green Apple, 4. Nike x Supreme SB Dunk Low Mean Green 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Hermes Bouncing Sneakers Mesh Suede Goatskin & Vert Cactus Blanc, 2. New Balance x JJJJound 992 Made in USA Mossy Green, 3. Nike x Off-White Dunk Low Pine Green 이 있습니다.'
        }
    }
    else if ($select_color.value == 'skyblue'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Gazelle Blue, 2. Converse Chuck 70 High Rush Blue, 3. Nike Dunk Low Retro QS Argon 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Converse x Ader Error Chuck 70 High White, 2. Jordan 1 Low SE Tokyo 96, 3. Jordan 1 Retro Low OG Black and Dark Powder Blue, 4. Nike Dunk Low Retro SE Industrial Blue 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Retro High OG Hyper Royal, 2. Jordan 1 Retro High OG University Blue, 3. Jordan 4 Retro University Blue 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 x Maison Chateau Rouge Mid SE Fearless, 2. Nike x Kasina Dunk Low Road Sign - Kasina Exclusive, 3. Nike x Sean Cliver SB Dunk Low Holiday Special 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 x Off-White Retro High University Blue, 2. Jordan 1 x Travis Scott x Fragment Retro High OG SP Military Blue, 3. Jordan 1 x Travis Scott x Fragment Retro Low OG SP Military Blue, 4. Louis Vuitton LV Trainer Sneakers Bleu Ciel 이 있습니다.'
        }
    }
    else if ($select_color.value == 'indigo'){
        if ($select_price.value == '~10') {
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Adidas Gazelle Collegiate Navy, 2. Asics Gel-Venture 6 SPS Glacier Grey, 3. New Balance 574 Heritage Navy, 4. Nike x J.Crew Killshot 2 Sail Midnight Navy 이 있습니다.'
        }
        else if($select_price.value == '10~30'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. New Balance 574 Legacy Navy, 2. Nike Air Force 1 \'07 LV8 Midnight Navy, 3. Nike Dunk Low SP Kentucky 2022 이 있습니다.'
        }
        else if($select_price.value == '30~50'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Jordan 1 Retro High OG CO.JP Midnight Navy, 2. New Balance 991 Made in UK Navy, 3. New Balance x Aime Leon Dore 860v2 Blue, 4. Nike x Sacai x Fragment LDWaffle Blackened Blue 이 있습니다.'
        }
        else if($select_price.value == '50~100'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Nike x Kasina Dunk Low 80\'s Bus, 2. Nike x Supreme SB Dunk Low Hyper Blue, 3. Salomon x JJJJound XT-Wings 2 White Lapis Blue 이 있습니다.'
        }
        else if($select_price.value == '100~'){
            userInputData = '가격이 ' + $select_price.value + '인 ' + $select_color.value + '계열의 신발은 1. Hermes Bouncing Sneakers Chevron Denim Calfskin & Bleu Clair Blanc, 2. Jordan 1 x Union Retro High Blue Toe, 3. Louis Vuitton LV Trainer Sneakers Monogram Denim Blue 이 있습니다.'
        }
    }
}