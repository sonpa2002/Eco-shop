var popup_z_index = 99;
var domain =  window.location.origin.toString() + "/";
if(window.location.host.toString() == "sonpa2002.github.io")
{
    domain = domain + "Eco-shop/";
}


// Khai bao OBJ popup-promo
const popup_promo_OBJ = document.querySelector(".PopUpPromo");
// Khai bao OBJ profilepopup Sign in and Register popup
const popup_profile_OBJ = document.querySelector(".SingInAndRegisterPopUp");
// Khai bao OBJ Sign in popup
const popup_Signin_OBJ = document.querySelector(".SingInPopUp");
// Khai bao OBJ ForgotPassword popup
const popup_ForgotPassword_OBJ = document.querySelector(".ForgotPasswordPopUp");
// Khai bao OBJ Entercode Reset Password popup
const popup_EntercodeResetPassword_OBJ = document.querySelector(".ResetPasswordPopUp");
// Khai bao OBJ ready Reset Password popup
const popup_ReadyResetPassword_OBJ = document.querySelector(".ReadyResetPasswordPopUp");
// Khai bao OBJ success-message popup
const popup_SuccessMessage_OBJ = document.querySelector(".SuccessMessagePopUp");
// Khai bao OBJ Register popup
const popup_Register_OBJ = document.querySelector(".RegisterPopUp");
// Khai bao OBJ Bag shopping popup
const popup_BagShopping_OBJ = document.querySelector(".BagShoppingPopUp");


// Function to display the popup
function showPopup(popup) {
    popup_z_index++;
    popup.style.zIndex = popup_z_index.toString();
    popup.style.display = "block";
}

// Function to hide the popup
function hidePopup(popup) {
    popup_z_index--;
    popup.style.display = "none";
}

// Kiểm tra 1 chuỗi có thể ép thành số nguyên hay không
function isIntegerConvertible(str) {
    return Number.isInteger(Number.parseInt(str));
}


// Đảm bảo tất cả các phần tử HTML đã được tải trước khi thêm sự kiện
document.addEventListener("DOMContentLoaded", function() {
    // load popup_promo afer 3s
    // setTimeout(function(){showPopup(popup_promo_OBJ);}, 3000);

    // Lấy phần tử đầu tiên có class là "sticky-promo"
    let stickyPromo = document.querySelector(".sticky-promo");
    // get OBJ close-promo-popup
    let ClosePromo = document.querySelector(".PopUpPromo-content .close");
    // get OBJ profile
    let profileButton = document.querySelector(".profile");
    // get OBJ signin
    let SignInButton = document.querySelector(".SingInAndRegisterPopUp .sign-in");
    // get OBJ close-signin-popup
    let CloseSigninPopup = document.querySelector(".SingInPopUp .Close-SingInPopUp");
    // get OBJ forgotpassword button
    let ForgotPasswordButton = document.querySelector(".SingInPopUp .SingInPopUp-content .frame-565");
    // get OBJ close-forgot-password-popup
    let CloseForgotPasswordPopup = document.querySelector(".ForgotPasswordPopUp__close");
    // get OBJ enter code to reset password button
    let EntercodeResetPasswordButton = document.querySelector(".ForgotPasswordPopUp__send-button");
    // get OBJ close-enter code to reset-password-popup
    let CloseEntercodeResetPasswordPopup = document.querySelector(".ResetPasswordPopUp .reset-password-form .reset-password-form__close");
    // get OBJ ready to reset password button
    let ReadyPasswordButton = document.querySelector(".ResetPasswordPopUp .reset-password-form .reset-password-form__send-button");
    // get OBJ close ready reset-password-popup
    let CloseReadyResetPasswordPopup = document.querySelector(".ReadyResetPasswordPopUp .reset-password-form .reset-password-form__close");
    // get OBJ SuccessMessage popup button
    let SuccessMessageButton = document.querySelector(".ReadyResetPasswordPopUp .reset-password-form .reset-password-form__send-button");
    // get OBJ close SuccessMessage-popup
    let CloseSuccessMessagePopup = document.querySelector(".SuccessMessagePopUp .success-message .success-message__close");
    // get OBJ Back button in SuccessMessage-popup
    let BackButtonInSuccessMessagePopup = document.querySelector(".SuccessMessagePopUp .success-message .success-message__back-button");
    // get OBJ Register popup button
    let RegisterButton = document.querySelector(".SingInAndRegisterPopUp .SingInAndRegisterPopUp-content .register");
    // get OBJ close Register-popup
    let CloseRegisterPopup = document.querySelector(".RegisterPopUp .register-popup__content .register-popup__close");
    // get OBJ  have an account ? Sign in here.
    let HaveAnAccountSignInButton = document.querySelector(".RegisterPopUp .register-popup__content .register-popup__existing-account");
    // get OBJ shopping bag button
    let BagShoppingButton = document.querySelector(".home .bag");
    // get OBJ menu bar icon for mobile 
    let MenuBarForMobile = document.querySelector(".home .menu-bar-mobile-icon");
    // khai bao OBJ list các sản phẩm đang ở trong trang thanh toán 
    let ListProductOBJ = document.querySelectorAll(".home .frame-233-payment-page .frame-461 .frame-408 .frame-434");
    // khai bao OBJ list các sản phẩm đang ở trong shopping bag 
    let ListProductOBJInBag = document.querySelectorAll(".BagShoppingPopUp .shopping-cart-popup .shopping-cart-item");
    
    // -----------------------// chuyển hướng 
    let ProductPageRedirects = document.querySelectorAll(".home .navigation-bar .menu-bar div");
    for(let i = 0; i<ProductPageRedirects.length ; i++){
        ProductPageRedirects[i].addEventListener("click", function() {
            window.location = domain + "Product-page.html";
        });
    }
    // chuyển hướng nav bar in mobile
    let ProductPageRedirectsNavBarMobile = document.querySelectorAll(".home .menu-bar-mobile-list .menu-bar-mobile-list-span");
    for(let i = 0; i<ProductPageRedirectsNavBarMobile.length ; i++){
        ProductPageRedirectsNavBarMobile[i].addEventListener("click", function() {
            window.location = domain + "Product-page.html";
        });
    }
    // chuyển hướng đến product page khi nhấn đường dẫn tại footer cuối trang tương ứng
    let ProductPageRedirectsLinkAtFooter = document.querySelectorAll(".home .container-10 div");
    for(let i = 0; i<ProductPageRedirectsLinkAtFooter.length ; i++){
        ProductPageRedirectsLinkAtFooter[i].addEventListener("click", function() {
            window.location = domain + "Product-page.html";
        });
    }
    
    // chuyển hướng trang thanh toán khi mở popup bag shopping và click check out
    let PaymentPageRedirectsWithPayButtonInBag = document.querySelector(".BagShoppingPopUp .shopping-cart-popup .shopping-cart-popup__checkout");
    PaymentPageRedirectsWithPayButtonInBag.addEventListener("click", function() {
        window.location = domain + "payment-page.html";
    });
    let HomePageRedirects = document.querySelector(".navigation-bar .navigation-bar-top .container-13");
    HomePageRedirects.addEventListener("click", function() {
        window.location = domain + "index.html";
    });



    // Thêm sự kiện click cho phần tử "sticky-promo"
    stickyPromo.addEventListener("click", function() {
        showPopup(popup_promo_OBJ); // 
    });
    ClosePromo.addEventListener("click", function() {
        hidePopup(popup_promo_OBJ); // 
    });
    profileButton.addEventListener("click", function() {
        let position_profileButton = profileButton.getBoundingClientRect();
        let Div_SignInAndRegister = document.querySelector(".SingInAndRegisterPopUp-content");
        Div_SignInAndRegister.style.top=position_profileButton.bottom.toString().substring(0, position_profileButton.bottom.toString().indexOf("."))+"px";
        Div_SignInAndRegister.style.left=(position_profileButton.right - 95).toString().substring(0, (position_profileButton.right - 95).toString().indexOf("."))+"px";
        
        
        showPopup(popup_profile_OBJ); // Hiển thị popup 
    });
    popup_profile_OBJ.addEventListener("click", function(event) {
        // Kiểm tra xem sự kiện click được kích hoạt từ popup_profile hay không nếu không thì close popup
        if (event.target === event.currentTarget) {
            hidePopup(popup_profile_OBJ); 
        }
    });
    SignInButton.addEventListener("click", function() {
        showPopup(popup_Signin_OBJ); // show popup Sign in
    });
    CloseSigninPopup.addEventListener("click", function() {
        hidePopup(popup_Signin_OBJ);  // hide popup Sign in
    });
    ForgotPasswordButton.addEventListener("click", function() {
        hidePopup(popup_profile_OBJ);
        hidePopup(popup_Signin_OBJ);
        showPopup(popup_ForgotPassword_OBJ); // show popup Forgot pass
    });
    CloseForgotPasswordPopup.addEventListener("click", function() {
        hidePopup(popup_ForgotPassword_OBJ);  // hide popup Forgot pass
    });
    EntercodeResetPasswordButton.addEventListener("click", function() {
        hidePopup(popup_ForgotPassword_OBJ);
        showPopup(popup_EntercodeResetPassword_OBJ); // show popup Enter code to reset pass
    });
    CloseEntercodeResetPasswordPopup.addEventListener("click", function() {
        hidePopup(popup_EntercodeResetPassword_OBJ);  // hide popup Enter code to reset pass
    });
    ReadyPasswordButton.addEventListener("click", function() {
        hidePopup(popup_EntercodeResetPassword_OBJ);
        showPopup(popup_ReadyResetPassword_OBJ); // show popup Ready reset password
    });
    CloseReadyResetPasswordPopup.addEventListener("click", function() {
        hidePopup(popup_ReadyResetPassword_OBJ);  // hide popup Ready reset password
    });
    SuccessMessageButton.addEventListener("click", function() {
        hidePopup(popup_ReadyResetPassword_OBJ);
        showPopup(popup_SuccessMessage_OBJ); // show popup SuccessMessage
    });
    CloseSuccessMessagePopup.addEventListener("click", function() {
        hidePopup(popup_SuccessMessage_OBJ);  // hide popup SuccessMessage
    });
    BackButtonInSuccessMessagePopup.addEventListener("click", function() {
        hidePopup(popup_SuccessMessage_OBJ);  // hide popup SuccessMessage when click back button in SuccessMessagePopup
    });
    RegisterButton.addEventListener("click", function() {
        showPopup(popup_Register_OBJ); // show popup Register
    });
    CloseRegisterPopup.addEventListener("click", function() {
        hidePopup(popup_Register_OBJ);  // hide popup Register
    });
    HaveAnAccountSignInButton.addEventListener("click", function() {
        hidePopup(popup_Register_OBJ);  // hide popup Register
        showPopup(popup_Signin_OBJ); // show popup Sign in
    });
    BagShoppingButton.addEventListener("click", function() {
        showPopup(popup_BagShopping_OBJ); // Hiển thị bagshopping popup 
    });
    popup_BagShopping_OBJ.addEventListener("click", function(event) {
        // Kiểm tra xem sự kiện click được kích hoạt từ popup_BagShopping hay không nếu không thì close popup
        if (event.target === event.currentTarget) {
            hidePopup(popup_BagShopping_OBJ); 
        }
    });
    MenuBarForMobile.addEventListener("click", function() {
        let MenuListOBJ=document.querySelector(".home .menu-bar-mobile-list");
        if(MenuListOBJ.style.display == "flex")
            document.querySelector(".home .menu-bar-mobile-list").style.display="none";
        else
            document.querySelector(".home .menu-bar-mobile-list").style.display="flex";
    });
    // Gán sự kiện khi nhấn tương tác lên sản phẩm trong trang thanh toán vD: tăng hoặc giảm số lượng sp
    for(let i = 0; i<ListProductOBJ.length ; i++){
        ListProductOBJ[i].querySelector(".minus-frame-455").addEventListener("click", function() {
            let QuantityProductOBJ = ListProductOBJ[i].querySelector(".Number-of-product-frame-456");
            if(isIntegerConvertible(QuantityProductOBJ.innerHTML) == true)
            {
                let QuantityProduct = Number.parseInt(QuantityProductOBJ.innerHTML);
                if(QuantityProduct > 1)
                {
                    QuantityProduct--;
                    QuantityProductOBJ.innerHTML = (QuantityProduct).toString();
                }
                else
                    alert("Không thể giảm thêm nữa!");
            }
            else
            alert("Đã có lỗi xảy ra! Vui lòng tải lại trang và thử lại sau.");
        });

        //tương tác tăng sp
        ListProductOBJ[i].querySelector(".Plus-frame-457").addEventListener("click", function() {
            let QuantityProductOBJ = ListProductOBJ[i].querySelector(".Number-of-product-frame-456");
            if(isIntegerConvertible(QuantityProductOBJ.innerHTML) == true)
            {
                let QuantityProduct = Number.parseInt(QuantityProductOBJ.innerHTML);
                if(QuantityProduct < 99)
                {
                    QuantityProduct++;
                    QuantityProductOBJ.innerHTML = (QuantityProduct).toString();
                }
                else
                    alert("Không thể tăng thêm nữa!");
            }
            else
            alert("Đã có lỗi xảy ra! Vui lòng tải lại trang và thử lại sau.");
        });
    }

    // Gán sự kiện khi nhấn tương tác lên sản phẩm trong Giỏ hàng - Bag Shopping vD: tăng hoặc giảm số lượng sp
    for(let i = 0; i<ListProductOBJInBag.length ; i++){
        ListProductOBJInBag[i].querySelector(".shopping-cart-item__quantity-control-minus").addEventListener("click", function() {
            let QuantityProductOBJ = ListProductOBJInBag[i].querySelector(".shopping-cart-item__quantity-number");
            if(isIntegerConvertible(QuantityProductOBJ.innerHTML) == true)
            {
                let QuantityProduct = Number.parseInt(QuantityProductOBJ.innerHTML);
                if(QuantityProduct > 1)
                {
                    QuantityProduct--;
                    QuantityProductOBJ.innerHTML = (QuantityProduct).toString();
                }
                else
                    alert("Không thể giảm thêm nữa!");
            }
            else
            alert("Đã có lỗi xảy ra! Vui lòng tải lại trang và thử lại sau.");
        });

        //tương tác tăng sp
        ListProductOBJInBag[i].querySelector(".shopping-cart-item__quantity-control-plus").addEventListener("click", function() {
            let QuantityProductOBJ = ListProductOBJInBag[i].querySelector(".shopping-cart-item__quantity-number");
            if(isIntegerConvertible(QuantityProductOBJ.innerHTML) == true)
            {
                let QuantityProduct = Number.parseInt(QuantityProductOBJ.innerHTML);
                if(QuantityProduct < 99)
                {
                    QuantityProduct++;
                    QuantityProductOBJ.innerHTML = (QuantityProduct).toString();
                }
                else
                    alert("Không thể tăng thêm nữa!");
            }
            else
            alert("Đã có lỗi xảy ra! Vui lòng tải lại trang và thử lại sau.");
        });
    }



});

