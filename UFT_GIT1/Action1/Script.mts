Services.StartTransaction "AdvShop"
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=4500").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image id4500")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("Your shopping cart is").Check CheckPoint("Your shopping cart is empty") @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping").WebElement("Your shopping cart is")_;_script infofile_;_ZIP::ssf6.xml_;_
Services.EndTransaction "AdvShop"

