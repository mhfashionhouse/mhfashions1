<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>বোরকা কালেকশন</title>
    <link rel="icon" type="image/x-icon" href="images/favicon/favicon.ico">
    <link rel="icon" type="image/svg+xml" href="images/favicon/favicon.svg">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
    <link rel="manifest" href="images/favicon/site.webmanifest">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Tiro+Bangla&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s) {
        if(f.fbq)return;
        n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
    }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    
    // Initialize pixel only once
    fbq('init', '1224675005739488');
    // Track PageView only once
    fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1224675005739488&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Meta Pixel Code -->
</head>
<body>
    <!-- Debug Section - Add this at the top of the body -->
    <div id="debug-section" style="position: fixed; 
                                  top: 10px; 
                                  right: 10px; 
                                  width: 300px; 
                                  z-index: 9999; 
                                  background: rgba(255, 255, 255, 0.95); 
                                  box-shadow: 0 0 10px rgba(0,0,0,0.1); 
                                  border-radius: 5px; 
                                  padding: 10px;">
        <h3 style="margin: 0 0 10px 0; padding: 5px; background: #f0f0f0; border-radius: 3px;">Debug Log</h3>
        <div id="debug-log" style="max-height: 300px; 
                                  overflow-y: auto; 
                                  font-size: 12px; 
                                  font-family: monospace; 
                                  background: white; 
                                  padding: 10px; 
                                  border: 1px solid #ddd;">
        </div>
    </div>

    <!-- Update the thank you popup style -->
    <style>
        .thank-you-popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            background: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
        }

        .popup-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            max-width: 400px;
            margin: 20% auto;
        }

        #debug-section {
            display: none; /* Hidden by default */
        }

        #debug-section.visible {
            display: block; /* Show when has visible class */
        }
    </style>

    <section class="showcase-section">
        <div class="showcase-grid">
            <div class="hero-item">
                <img src="images/cover.webp" alt="বোরকা কালেকশন">
            </div>
            <div class="product-grid">
                <div class="showcase-item" onclick="scrollToProducts(0)">
                    <img src="images/brown.webp" alt="ব্রাউন বোরকা">
                </div>
                <div class="showcase-item" onclick="scrollToProducts(1)">
                    <img src="images/black.webp" alt="কালো বোরকা">
                </div>
                <div class="showcase-item" onclick="scrollToProducts(2)">
                    <img src="images/green.webp" alt="গ্রীন বোরকা">
                </div>
                <div class="showcase-item" onclick="scrollToProducts(3)">
                    <img src="images/purple.webp" alt="পার্পল বোরকা">
                </div>
            </div>
        </div>
    </section>

    <section class="features-section">
        <h2>আমাদের বোরকার বৈশিষ্ট্য</h2>
        <div class="features-grid">
            <div class="feature-item">
                <div class="feature-icon">✓</div>
                <p>প্রিমিয়াম ছেরি কাপড়</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">✓</div>
                <p>ডি.এম.সি স্টাইলের কাজ করা</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">✓</div>
                <p>১০০% কোয়ালিটি গ্যারান্টি</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">✓</div>
                <p>লম্বা ৫০,৫২,৫৪,৫৬,৫৮</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">✓</div>
                <p>বডি ৪২-৫০</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">✓</div>
                <p>পছন্দ না হলে ফেরত দেওয়ার সুযোগ</p>
            </div>
        </div>
        <button class="scroll-to-products-btn" onclick="scrollToProducts()">অর্ডার করুন</button>
    </section>

    <div class="timer-container">
        <section class="countdown-section">
            <h2>অফারটি সীমিত সময়ের জন্য</h2>
            <div class="countdown-grid">
                <div class="countdown-item">
                    <div class="countdown-value" id="hours">10</div>
                    <div class="countdown-label">ঘন্টা</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value" id="minutes">32</div>
                    <div class="countdown-label">মিনিট</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value" id="seconds">08</div>
                    <div class="countdown-label">সেকেন্ড</div>
                </div>
            </div>
            <button class="order-now-btn" onclick="scrollToProducts()">এখনই অর্ডার করতে চাই</button>
        </section>
    </div>

    <div class="container">
        <section class="contact">
            <p>যেকোনো প্রয়োজনে কল করুন</p>
            <h2>01884314771</h2>
            <a href="tel:01884314771" class="call-btn">01884314771</a>
        </section>
    </div>

    <section class="product-selection" id="product-selection" style="max-width: 800px; margin: 0 auto;">
        <h3>পছন্দের পণ্যটি সিলেক্ট করুন</h3>
        <div class="product-warning" id="productWarning"></div>
        
        <div class="product-item">
            <div class="product-image">
                <img src="images/brown.webp" alt="ব্রাউন বোরকা">
            </div>
            <div class="product-details">
                <h4>ব্রাউন বোরকা</h4>
                <div class="size-selection">
                    <span>সাইজ:</span>
                    <div class="size-buttons">
                        <button class="size-btn">50</button>
                        <button class="size-btn">52</button>
                        <button class="size-btn">54</button>
                        <button class="size-btn">56</button>
                        <button class="size-btn">58</button>
                    </div>
                </div>
                <div class="hijab-option">
                    <label>
                        <input type="radio" name="hijab1" value="without">
                        হিজাব ছাড়া
                    </label>
                    <label>
                        <input type="radio" name="hijab1" value="with">
                        হিজাবসহ
                    </label>
                </div>
                <div class="quantity-price-container">
                    <div class="quantity-control">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity" value="1" min="1" max="10">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="price-container">
                        <span class="original-price">৳ 900</span>
                        <span class="price">৳ 750</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-item">
            <div class="product-image">
                <img src="images/black.webp" alt="কালো বোরকা">
            </div>
            <div class="product-details">
                <h4>কালো বোরকা</h4>
                <div class="size-selection">
                    <span>সাইজ:</span>
                    <div class="size-buttons">
                        <button class="size-btn">50</button>
                        <button class="size-btn">52</button>
                        <button class="size-btn">54</button>
                        <button class="size-btn">56</button>
                        <button class="size-btn">58</button>
                    </div>
                </div>
                <div class="hijab-option">
                    <label>
                        <input type="radio" name="hijab2" value="without">
                        হিজাব ছাড়া
                    </label>
                    <label>
                        <input type="radio" name="hijab2" value="with">
                        হিজাবসহ
                    </label>
                </div>
                <div class="quantity-price-container">
                    <div class="quantity-control">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity" value="1" min="1" max="10">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="price-container">
                        <span class="original-price">৳ 900</span>
                        <span class="price">৳ 750</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-item">
            <div class="product-image">
                <img src="images/green.webp" alt="গ্রীন বোরকা">
            </div>
            <div class="product-details">
                <h4>গ্রীন বোরকা</h4>
                <div class="size-selection">
                    <span>সাইজ:</span>
                    <div class="size-buttons">
                        <button class="size-btn">50</button>
                        <button class="size-btn">52</button>
                        <button class="size-btn">54</button>
                        <button class="size-btn">56</button>
                        <button class="size-btn">58</button>
                    </div>
                </div>
                <div class="hijab-option">
                    <label>
                        <input type="radio" name="hijab3" value="without">
                        হিজাব ছাড়া
                    </label>
                    <label>
                        <input type="radio" name="hijab3" value="with">
                        হিজাবসহ
                    </label>
                </div>
                <div class="quantity-price-container">
                    <div class="quantity-control">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity" value="1" min="1" max="10">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="price-container">
                        <span class="original-price">৳ 900</span>
                        <span class="price">৳ 750</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-item">
            <div class="product-image">
                <img src="images/purple.webp" alt="পার্পল বোরকা">
            </div>
            <div class="product-details">
                <h4>পার্পল বোরকা</h4>
                <div class="size-selection">
                    <span>সাইজ:</span>
                    <div class="size-buttons">
                        <button class="size-btn">50</button>
                        <button class="size-btn">52</button>
                        <button class="size-btn">54</button>
                        <button class="size-btn">56</button>
                        <button class="size-btn">58</button>
                    </div>
                </div>
                <div class="hijab-option">
                    <label>
                        <input type="radio" name="hijab4" value="without">
                        হিজাব ছাড়া
                    </label>
                    <label>
                        <input type="radio" name="hijab4" value="with">
                        হিজাবসহ
                    </label>
                </div>
                <div class="quantity-price-container">
                    <div class="quantity-control">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity" value="1" min="1" max="10">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="price-container">
                        <span class="original-price">৳ 900</span>
                        <span class="price">৳ 750</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="order-form-container">
        <section class="order-form">
            <h3>অর্ডার ফর্ম</h3>
            <form id="orderForm" onsubmit="return handleOrderSubmit(event)">
                <div class="validation-message" id="validationMessage"></div>
                <div class="form-group">
                    <label>নাম: <span class="required">*</span></label>
                    <input type="text" name="customerName" placeholder="আপনার নাম লিখুন" required>
                </div>

                <div class="form-group">
                    <label>ঠিকানা: <span class="required">*</span></label>
                    <textarea name="address" placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন" required></textarea>
                </div>

                <div class="form-group">
                    <label>ফোন নাম্বার: <span class="required">*</span></label>
                    <input type="tel" name="phone" placeholder="আপনার ফোন নাম্বার লিখুন" required>
                </div>

                <div class="form-group">
                    <label>ডেলিভারি লোকেশন: <span class="required">*</span></label>
                    <div class="shipping-options">
                        <label>
                            <input type="radio" name="shipping" value="dhaka" checked>
                            ঢাকা সিটির ভিতরে (৮০ টাকা)
                        </label>
                        <label>
                            <input type="radio" name="shipping" value="outside">
                            ঢাকা সিটির বাহিরে (১৫০ টাকা)
                        </label>
                    </div>
                </div>

                <div class="order-summary-box">
                    <div class="summary-header">
                        <span class="cart-icon">🛒</span>
                        <span>অর্ডার সামারি</span>
                    </div>
                    <div class="selected-items">
                        <div class="summary-section">
                            <div class="summary-label">নির্বাচিত পণ্য:</div>
                            <div id="selected-product-info" class="product-info">কোনো পণ্য নির্বাচন করা হয়নি</div>
                        </div>
                        <div class="divider"></div>
                        <div class="summary-item">
                            <span>মোট মূল্য:</span>
                            <span id="product-price">৳ 0</span>
                        </div>
                        <div class="summary-item">
                            <span>ডেলিভারি চার্জ:</span>
                            <span id="delivery-charge">৳ 80</span>
                        </div>
                        <div class="divider"></div>
                        <div class="summary-item total">
                            <span>সর্বমোট:</span>
                            <span id="total-price">৳ 0</span>
                        </div>
                    </div>
                </div>

                <div class="order-button-container">
                    <div class="order-warning-message" id="orderWarningMessage"></div>
                    <button type="submit" class="place-order-btn">অর্ডার কনফার্ম করুন</button>
                </div>
            </form>
        </section>
    </div>

    <!-- Thank You Popup -->
    <div class="thank-you-popup" id="thankYouPopup">
        <div class="popup-content">
            <div class="popup-icon">✓</div>
            <h3>অভিনন্দন! 🎉</h3>
            <p>আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে</p>
            <p class="success-message">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব</p>
            <button class="close-popup-btn" onclick="closeThankYouPopup()">ঠিক আছে</button>
        </div>
    </div>

    <!-- Audio Elements -->
    <audio id="celebrationSound">
        <source src="https://www.soundjay.com/buttons/sounds/success-1.mp3" type="audio/mpeg">
    </audio>
    <audio id="popSound">
        <source src="https://www.soundjay.com/buttons/sounds/button-09.mp3" type="audio/mpeg">
    </audio>

    <script src="script.js"></script>
    <script>
        // Global variables to track selections
        let selectedProducts = [];
        const basePrice = 750;
        const hijabPrice = 300;

        // Update order summary based on selections
        function updateOrderSummary() {
            const orderSummaryList = document.getElementById('order-summary-list');
            orderSummaryList.innerHTML = '';
            let totalPrice = 0;

            document.querySelectorAll('.product-item').forEach((item, index) => {
                const sizeSelect = item.querySelector('.size-select');
                const hijabSelect = item.querySelector('.hijab-select');
                const quantityInput = item.querySelector('.quantity');
                const productName = item.querySelector('.product-name').textContent;
                const productPrice = parseFloat(item.querySelector('.price').textContent.replace('৳', ''));

                // Only add to summary if both size and hijab are selected
                if (sizeSelect.value && hijabSelect.value) {
                    const quantity = parseInt(quantityInput.value);
                    const itemTotal = productPrice * quantity;
                    totalPrice += itemTotal;

                    const summaryItem = document.createElement('div');
                    summaryItem.classList.add('summary-item');
                    summaryItem.innerHTML = `
                        <p>${productName}</p>
                        <p>সাইজঃ ${sizeSelect.value}</p>
                        <p>হিজাবঃ ${hijabSelect.value}</p>
                        <p>পরিমাণঃ ${quantity}</p>
                        <p>মূল্যঃ ৳${itemTotal}</p>
                    `;
                    orderSummaryList.appendChild(summaryItem);
                }
            });

            document.getElementById('total-price').textContent = `মোট মূল্যঃ ৳${totalPrice}`;
        }

        // Event listeners for product selection
        document.querySelectorAll('.product-item').forEach((item, index) => {
            const productNames = ['ব্রাউন বোরকা', 'কালো বোরকা', 'গ্রীন বোরকা', 'পার্পল বোরকা'];
            
            // Initialize product in the array
            selectedProducts[index] = {
                id: index,
                color: productNames[index],
                size: '',
                hijab: '',
                quantity: 1,
                isSelected: false
            };
            
            // Size selection
            const sizeButtons = item.querySelectorAll('.size-btn');
            sizeButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    
                    if (btn.classList.contains('active')) {
                        // If clicking already active button, deselect it
                        btn.classList.remove('active');
                        selectedProducts[index].size = '';
                    } else {
                        // Remove active class from all size buttons in this product
                        sizeButtons.forEach(b => b.classList.remove('active'));
                        // Add active class to clicked button
                        btn.classList.add('active');
                        selectedProducts[index].size = btn.textContent;
                    }
                    
                    updateOrderSummary();
                });
            });

            // Hijab option
            const hijabInputs = item.querySelectorAll('.hijab-option input');
            hijabInputs.forEach(input => {
                input.addEventListener('change', (e) => {
                    e.stopPropagation();
                    if (input.checked) {
                        selectedProducts[index].hijab = input.value === 'with' ? 'হিজাবসহ' : 'হিজাব ছাড়া';
                    } else {
                        selectedProducts[index].hijab = '';
                    }
                    updateOrderSummary();
                });
            });

            // Quantity changes
            const quantityInput = item.querySelector('.quantity');
            const plusBtn = item.querySelector('.quantity-btn.plus');
            const minusBtn = item.querySelector('.quantity-btn.minus');
            
            plusBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                let value = parseInt(quantityInput.value);
                if (value < 10) {
                    quantityInput.value = value + 1;
                    updateOrderSummary();
                }
            };
            
            minusBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                    updateOrderSummary();
                }
            };
        });

        // Event listener for delivery location changes
        document.querySelectorAll('input[name="shipping"]').forEach(input => {
            input.addEventListener('change', updateOrderSummary);
        });

        // Initialize order summary
        updateOrderSummary();

        // Existing countdown and scroll functions remain the same
        function scrollToProducts(productIndex) {
            const productSection = document.querySelector('.product-selection');
            productSection.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                const products = document.querySelectorAll('.product-item');
                if (products[productIndex]) {
                    products.forEach(p => p.classList.remove('selected'));
                    products[productIndex].classList.add('selected');
                }
            }, 800);
        }

        function updateCountdown() {
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
            
            let hours = parseInt(hoursElement.textContent);
            let minutes = parseInt(minutesElement.textContent);
            let seconds = parseInt(secondsElement.textContent);
            
            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) {
                    minutes--;
                } else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    } else {
                        hours = 10;
                        minutes = 32;
                        seconds = 8;
                    }
                }
            }
            
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);

        // Update the debug log function
        function debugLog(message, data = null) {
            const timestamp = new Date().toLocaleTimeString();
            const logMessage = `${timestamp} - ${message}`;
            console.log(logMessage, data);
            
            const debugDiv = document.getElementById('debug-log');
            const debugSection = document.getElementById('debug-section');
            
            if (debugDiv) {
                const logEntry = document.createElement('div');
                logEntry.style.borderBottom = '1px solid #eee';
                logEntry.style.padding = '5px 0';
                logEntry.innerHTML = `${logMessage}${data ? ': ' + JSON.stringify(data) : ''}`;
                debugDiv.insertBefore(logEntry, debugDiv.firstChild);
                
                // Show debug section
                debugSection.classList.add('visible');
                
                // Auto-scroll to latest log
                debugDiv.scrollTop = 0;
            }
        }

        // Test purchase function
        async function testPurchaseEvent() {
            debugLog('Starting test purchase event');
            try {
                await trackEvent('Purchase', {
                    currency: 'BDT',
                    value: 750,
                    content_type: 'product',
                    contents: [{
                        id: 1,
                        quantity: 1,
                        item_price: 750
                    }]
                });
                debugLog('Test purchase event completed');
            } catch (error) {
                debugLog('Test purchase event failed', error.message);
            }
        }

        // Track Purchase event on form submission
        async function trackEvent(eventName, eventData) {
            debugLog(`Preparing to send ${eventName} event to CAPI...`);
            
            try {
                const response = await fetch('/.netlify/functions/conversion-api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        data: {
                            event_name: eventName,
                            custom_data: {
                                currency: eventData.currency,
                                value: eventData.value,
                                contents: eventData.contents,
                                content_type: eventData.content_type,
                                delivery_category: eventData.shipping_cost ? 'home_delivery' : undefined,
                                shipping_cost: eventData.shipping_cost,
                                custom_products: eventData.custom_data?.products // Include detailed product info
                            },
                            user_data: eventData.user_data
                        }
                    })
                });

                const result = await response.json();
                debugLog(`CAPI ${eventName} response:`, result);
                return result;
            } catch (error) {
                debugLog(`CAPI ${eventName} error:`, error.message);
                throw error;
            }
        }

        // Track events for product interactions
        document.querySelectorAll('.product-item').forEach((item, index) => {
            // Track ViewContent when product is viewed
            const productName = item.querySelector('h4').textContent;
            trackEvent('ViewContent', {
                content_type: 'product',
                content_name: productName,
                currency: 'BDT',
                value: 750
            });

            // Track AddToCart when size and hijab are selected
            const sizeButtons = item.querySelectorAll('.size-btn');
            const hijabInputs = item.querySelectorAll('.hijab-option input');
            
            function checkAndTrackAddToCart() {
                const selectedSize = Array.from(sizeButtons).find(btn => btn.classList.contains('active'))?.textContent;
                const selectedHijab = Array.from(hijabInputs).find(input => input.checked)?.value;
                const quantity = parseInt(item.querySelector('.quantity').value) || 1;

                if (selectedSize && selectedHijab) {
                    trackEvent('AddToCart', {
                        content_type: 'product',
                        content_name: productName,
                        currency: 'BDT',
                        value: 750 * quantity,
                        contents: [{
                            id: index + 1,
                            quantity: quantity,
                            item_price: 750
                        }]
                    });
                }
            }

            sizeButtons.forEach(btn => btn.addEventListener('click', checkAndTrackAddToCart));
            hijabInputs.forEach(input => input.addEventListener('change', checkAndTrackAddToCart));
        });

        // Update the form submission handler
        async function handleOrderSubmit(event) {
            event.preventDefault();
            
            // Show debug section
            const debugSection = document.getElementById('debug-section');
            debugSection.classList.add('visible');
            
            debugLog('Order form submitted - starting processing...');
            
            try {
                const form = event.target;
                
                // Get form data
                const customerData = {
                    name: form.querySelector('input[name="customerName"]').value,
                    phone: form.querySelector('input[name="phone"]').value,
                    address: form.querySelector('textarea[name="address"]').value,
                    shipping: form.querySelector('input[name="shipping"]:checked').value
                };
                debugLog('Customer data collected:', customerData);
                
                // Get selected products - Enhanced logging
                const productsInfo = [];
                const allProducts = document.querySelectorAll('.product-item');
                debugLog(`Checking ${allProducts.length} products for selection...`);
                
                allProducts.forEach((item, index) => {
                    const productName = item.querySelector('h4').textContent;
                    debugLog(`Checking product ${index + 1}: ${productName}`);
                    
                    const selectedSize = item.querySelector('.size-btn.active');
                    const selectedHijab = item.querySelector('.hijab-option input:checked');
                    const quantityInput = item.querySelector('.quantity');
                    
                    debugLog(`Product ${index + 1} state:`, {
                        hasSelectedSize: !!selectedSize,
                        sizeValue: selectedSize ? selectedSize.textContent : 'none',
                        hasSelectedHijab: !!selectedHijab,
                        hijabValue: selectedHijab ? selectedHijab.value : 'none',
                        quantity: quantityInput ? quantityInput.value : 'none'
                    });
                    
                    if (selectedSize && selectedHijab) {
                        const quantity = parseInt(quantityInput.value) || 1;
                        
                        const productInfo = {
                            id: index + 1,
                            name: productName,
                            size: selectedSize.textContent,
                            hijab: selectedHijab.value === 'with' ? 'হিজাবসহ' : 'হিজাব ছাড়া',
                            quantity: quantity,
                            price: 750
                        };
                        
                        productsInfo.push(productInfo);
                        debugLog(`Added product ${index + 1} to order:`, productInfo);
                    }
                });
                
                debugLog(`Total products selected: ${productsInfo.length}`, productsInfo);
                
                if (productsInfo.length === 0) {
                    debugLog('Error: No products selected');
                    alert('দয়া করে কমপক্ষে একটি পণ্য নির্বাচন করুন।');
                    return false;
                }
                
                // Calculate totals
                const totalBill = productsInfo.reduce((sum, product) => sum + (product.price * product.quantity), 0);
                const shippingCost = customerData.shipping === 'dhaka' ? 80 : 150;
                const finalTotal = totalBill + shippingCost;
                
                debugLog('Order totals:', {
                    numberOfProducts: productsInfo.length,
                    productDetails: productsInfo,
                    subtotal: totalBill,
                    shipping: shippingCost,
                    total: finalTotal
                });
                
                // Prepare purchase event data with complete product information
                const purchaseData = {
                    value: finalTotal,
                    currency: 'BDT',
                    content_type: 'product',
                    contents: productsInfo.map(product => ({
                        id: product.id,
                        quantity: product.quantity,
                        item_price: product.price
                    })),
                    shipping_cost: shippingCost,
                    user_data: {
                        external_id: customerData.phone,
                        phone_number: customerData.phone,
                        address: {
                            street_address: customerData.address
                        },
                        client_user_agent: navigator.userAgent
                    },
                    custom_data: {
                        products: productsInfo.map(product => ({
                            id: product.id,
                            name: product.name,
                            size: product.size,
                            hijab: product.hijab,
                            quantity: product.quantity,
                            price: product.price
                        }))
                    }
                };
                
                debugLog('Sending purchase event with complete data:', purchaseData);
                
                try {
                    // Send to Facebook
                    await trackEvent('Purchase', purchaseData);
                    debugLog('Purchase event sent successfully');
                    
                    // Show thank you popup after a slight delay
                    setTimeout(() => {
                        showThankYouPopup();
                    }, 1000);
                    
                    // Reset form and selections
                    form.reset();
                    document.querySelectorAll('.size-btn.active').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.hijab-option input:checked').forEach(input => input.checked = false);
                    document.querySelectorAll('.quantity').forEach(input => input.value = 1);
                    
                    debugLog('Order process completed successfully');
                    
                    return false;
                } catch (error) {
                    debugLog('Error during order process:', error.message);
                    alert('অর্ডার প্রক্রিয়াকরণে একটি সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।');
                    return false;
                }
            } catch (error) {
                debugLog('Error during order process:', error.message);
                alert('অর্ডার প্রক্রিয়াকরণে একটি সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।');
                return false;
            }
        }

        // Update the thank you popup function
        function showThankYouPopup() {
            const popup = document.getElementById('thankYouPopup');
            if (popup) {
                popup.style.display = 'block';
                // Keep debug section visible
                document.getElementById('debug-section').classList.add('visible');
                
                // Play celebration sound
                const celebrationSound = document.getElementById('celebrationSound');
                if (celebrationSound) {
                    celebrationSound.play().catch(e => console.log('Sound play failed:', e));
                }
                
                // Trigger confetti
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }

        function closeThankYouPopup() {
            const popup = document.getElementById('thankYouPopup');
            if (popup) {
                popup.style.display = 'none';
            }
        }

        // Initialize debug section
        document.addEventListener('DOMContentLoaded', function() {
            debugLog('Debug section initialized');
            // Show debug section initially
            document.getElementById('debug-section').classList.add('visible');
        });

        // Add keyboard shortcut to toggle debug section
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'd') { // Ctrl+D to toggle debug section
                const debugSection = document.getElementById('debug-section');
                debugSection.classList.toggle('visible');
            }
        });

        // Update quantity change handlers
        document.querySelectorAll('.product-item').forEach(item => {
            const quantityInput = item.querySelector('.quantity');
            const plusBtn = item.querySelector('.quantity-btn.plus');
            const minusBtn = item.querySelector('.quantity-btn.minus');
            
            if (plusBtn) {
                plusBtn.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    let value = parseInt(quantityInput.value) || 1;
                    if (value < 10) {
                        quantityInput.value = value + 1;
                        debugLog('Quantity increased:', {
                            product: item.querySelector('h4').textContent,
                            quantity: value + 1
                        });
                    }
                };
            }
            
            if (minusBtn) {
                minusBtn.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    let value = parseInt(quantityInput.value) || 2;
                    if (value > 1) {
                        quantityInput.value = value - 1;
                        debugLog('Quantity decreased:', {
                            product: item.querySelector('h4').textContent,
                            quantity: value - 1
                        });
                    }
                };
            }
            
            // Add direct input handling
            if (quantityInput) {
                quantityInput.addEventListener('change', function(e) {
                    let value = parseInt(this.value) || 1;
                    value = Math.max(1, Math.min(10, value));
                    this.value = value;
                    debugLog('Quantity changed directly:', {
                        product: item.querySelector('h4').textContent,
                        quantity: value
                    });
                });
            }
        });
    </script>
</body>
</html> 
