const apiKey = ""; // API key is injected by the execution environment

// --- CUSTOM ALERT LOGIC ---
function showCustomAlert(message) {
    document.getElementById('customAlertText').innerText = message;
    document.getElementById('customAlertModal').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlertModal').style.display = 'none';
}

// ===================================================================
// --- COMING SOON CONFIGURATION ---
// TO ACTIVATE A CATEGORY: Simply delete its name from the list below!
// ===================================================================
const comingSoonCategories = [
    '3 Seater Sofa', 'Circular Sofa', 'Sofa Cum Bed', 
    'Chester', 'Centre Table', 'Headboard', 
    'Mattress', 'Dressing'
];

function applyComingSoonStatus() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        const catName = card.querySelector('h3').innerText;
        if (comingSoonCategories.includes(catName)) {
            card.classList.add('coming-soon');
            card.innerHTML += '<span class="coming-soon-badge">Soon</span>';
            card.onclick = function(e) {
                e.preventDefault(); // Stop any other click actions
                showCustomAlert("The " + catName + " collection is launching very soon! Stay tuned.");
            };
        }
    });
}

// --- AUTO-GENERATE REAL ITEMS AND PLACEHOLDERS ---
function populateCatalog() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = ''; 
    const categories = ['5 Seater Sofa Set', '3 Seater Sofa', 'Corner Sofa', 'Circular Sofa', 'Sofa Cum Bed', 'Chester', 'Centre Table', 'Bed', 'Headboard', 'Mattress', 'Dressing'];

    // High quality placeholder pictures for other categories
    const sampleImages = [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
    ];

    // YOUR REAL SOFA SETS FOR THE 5-SEATER COLUMN
    const real5Seaters = [
        { name: "53 No. Model (Maroon)", price: 75000, imgs: '["image1.1.png", "image1.2.png", "image1.3.png", "image1.4.png"]', descs: '["Full Set View", "3-Seater Angled", "3-Seater Front", "1-Seater Profile"]' },
        { name: "53 No. Model (Golden Brown)", price: 75000, imgs: '["image10.1.png", "image10.2.png", "image10.3.png", "image10.4.png", "image10.5.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile", "Detail Angle"]' },
        { name: "53 No. Model (Classic Black)", price: 75000, imgs: '["image2.1.png", "image2.2.png", "image2.3.png", "image2.4.jpg", "image2.5.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile", "Detail Angle"]' },
        { name: "53 No. Model (Royal Purple)", price: 75000, imgs: '["image3.1.png", "image3.2.png", "image3.3.png", "image3.4.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile"]' },
        { name: "53 No. Model (Cream & Tan)", price: 75000, imgs: '["image4.1.png", "image4.2.png", "image4.3.png", "image4.4.png", "image4.5.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile", "Detail Angle"]' },
        { name: "53 No. Model (Light Tan)", price: 75000, imgs: '["image5.1.png", "image5.2.png", "image5.3.png", "image5.4.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile"]' },
        { name: "53 No. Model (Emerald Green)", price: 75000, imgs: '["image6.1.png", "image6.2.png", "image6.3.png", "image6.4.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile"]' },
        { name: "53 No. Model (Teal Blue)", price: 75000, imgs: '["image7.1.png", "image7.2.png", "image7.3.png", "image7.4.png", "image7.5.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile", "Detail Angle"]' },
        { name: "53 No. Model (Deep Magenta)", price: 75000, imgs: '["image8.1.png", "image8.2.png", "image8.3.png", "image8.4.png", "image8.5.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile", "Detail Angle"]' },
        { name: "53 No. Model (Olive Green)", price: 75000, imgs: '["image9.1.png", "image9.2.png", "image9.3.png", "image9.4.png", "image9.5.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile", "Detail Angle"]' },
        { name: "Diamond Stitch Sofa (Textured Beige)", price: 70000, imgs: '["image11.1.png", "image11.2.png", "image11.3.png", "image11.4.png", "image11.5.png"]', descs: '["Full Set View", "3-Seater Front", "1-Seater Front", "Side Profile", "Detail Angle"]' },
        { name: "Bullet Sofa (Brown Fabric)", price: 68000, imgs: '["image12.1.png", "image12.2.png", "image12.3.png", "image12.4.png"]', descs: '["Full Set View: A sleek, modern 5-seater bullet sofa with clean geometric lines.", "3-Seater Front: Featuring a distinctive criss-cross tufted backrest.", "1-Seater Front: A comfortable, stylish individual seat with broad armrests.", "Side Profile: Minimalist side view highlighting the sturdy boxy armrests."]' },
        { name: "Bullet Sofa (Navy Blue)", price: 68000, imgs: '["image13.1.png", "image13.2.png", "image13.3.png", "image13.4.png"]', descs: '["Full Set View: A sleek, modern 5-seater bullet sofa with clean geometric lines.", "3-Seater Front: Featuring a distinctive criss-cross tufted backrest.", "1-Seater Front: A comfortable, stylish individual seat with broad armrests.", "Side Profile: Minimalist side view highlighting the sturdy boxy armrests."]' },
        { name: "Bullet Sofa (Charcoal Grey)", price: 68000, imgs: '["image14.1.png", "image14.2.png", "image14.3.png", "image14.4.png"]', descs: '["Full Set View: A sleek, modern 5-seater bullet sofa with clean geometric lines.", "3-Seater Front: Featuring a distinctive criss-cross tufted backrest.", "1-Seater Front: A comfortable, stylish individual seat with broad armrests.", "Side Profile: Minimalist side view highlighting the sturdy boxy armrests."]' },
        { name: "Bullet Sofa (Mocha Brown)", price: 68000, imgs: '["image15.1.png", "image15.2.png", "image15.3.png", "image15.4.png"]', descs: '["Full Set View: A sleek, modern 5-seater bullet sofa with clean geometric lines.", "3-Seater Front: Featuring a clean vertical channel tufted backrest.", "1-Seater Front: A comfortable, stylish individual seat with broad armrests.", "Side Profile: Minimalist side view highlighting the sturdy boxy armrests."]' },
        { name: "Bullet Sofa (Teal Green)", price: 68000, imgs: '["image16.1.png", "image16.2.png", "image16.3.png", "image16.4.png"]', descs: '["Full Set View: A sleek, modern 5-seater bullet sofa with clean geometric lines.", "3-Seater Front: Featuring a distinctive criss-cross tufted backrest.", "1-Seater Front: A comfortable, stylish individual seat with broad armrests.", "Side Profile: Minimalist side view highlighting the sturdy boxy armrests."]' },
        { name: "Bullet Sofa (Ocean Blue)", price: 68000, imgs: '["image17.1.png", "image17.2.png", "image17.3.png", "image17.4.png"]', descs: '["Full Set View: A sleek, modern 5-seater bullet sofa with clean geometric lines.", "3-Seater Front: Featuring a distinctive criss-cross tufted backrest.", "1-Seater Front: A comfortable, stylish individual seat with broad armrests.", "Side Profile: Minimalist side view highlighting the sturdy boxy armrests."]' },
        { name: "Bullet Sofa (Sapphire Blue)", price: 68000, imgs: '["image18.1.png", "image18.2.png", "image18.3.png", "image18.4.png"]', descs: '["Full Set View: A sleek, modern 5-seater bullet sofa with clean geometric lines.", "3-Seater Front: Featuring a distinctive criss-cross tufted backrest.", "1-Seater Front: A comfortable, stylish individual seat with broad armrests.", "Side Profile: Minimalist side view highlighting the sturdy boxy armrests."]' }
    ];

    categories.forEach((category, catIndex) => {
        // Skip generating if the category is marked as "Coming Soon"
        if (comingSoonCategories.includes(category)) return;

        // IF WE ARE IN THE 5 SEATER CATEGORY -> LOAD YOUR REAL PRODUCTS
        if (category === '5 Seater Sofa Set') {
            real5Seaters.forEach((item) => {
                const firstImage = JSON.parse(item.imgs)[0]; // Pulls the main picture
                const html = `
                <div class="card" data-category="${category}">
                    <img src="${firstImage}" alt="${item.name}" class="zoomable-img" 
                         data-images='${item.imgs}' 
                         data-descs='${item.descs}'
                         onclick="openGallery(this, '${item.name}', ${item.price})">
                    <h3>${item.name}</h3>
                    <p class="price">₹${item.price.toLocaleString('en-IN')}</p>
                    <button class="btn-add" onclick="addToCart('${item.name}', ${item.price})">Add to Order</button>
                </div>
                `;
                grid.innerHTML += html;
            });
        } 
        // FOR ALL OTHER CATEGORIES -> LOAD PLACEHOLDER DUMMY ITEMS
        else {
            for(let i = 1; i <= 20; i++) {
                const imgIndex = (catIndex + i) % sampleImages.length;
                const img1 = sampleImages[imgIndex];
                const img2 = sampleImages[(imgIndex + 1) % sampleImages.length];
                const img3 = sampleImages[(imgIndex + 2) % sampleImages.length];
                
                const price = 15000 + (catIndex * 5000) + (i * 1000);
                
                const imageArrayJson = `["${img1}", "${img2}", "${img3}"]`;
                const descArrayJson = `["Front view showing details.", "Side profile view.", "Material close up."]`;
                
                const html = `
                <div class="card" data-category="${category}">
                    <img src="${img1}" alt="${category} ${i}" class="zoomable-img" 
                         data-images='${imageArrayJson}' 
                         data-descs='${descArrayJson}'
                         onclick="openGallery(this, '${category} - Design ${i}', ${price})">
                    <h3>${category} - Design ${i}</h3>
                    <p class="price">₹${price.toLocaleString('en-IN')}</p>
                    <button class="btn-add" onclick="addToCart('${category} - Design ${i}', ${price})">Add to Order</button>
                </div>
                `;
                grid.innerHTML += html;
            }
        }
    });
}

// Run the catalog builder as soon as the page loads!
window.onload = function() {
    applyComingSoonStatus();
    populateCatalog();
};

// --- DYNAMIC TEXT CHANGER (TRENDING CATEGORIES) ---
// Updated to only advertise currently active categories
const changingWords = ["5 seater sofa", "corner sofa", "bed", "living room sets"]; 
let wordIndex = 0;
const changingElement = document.getElementById("changing-category");

setInterval(() => {
    changingElement.style.opacity = 0; // Fade out the old word
    setTimeout(() => {
        wordIndex = (wordIndex + 1) % changingWords.length;
        changingElement.innerText = changingWords[wordIndex];
        changingElement.style.opacity = 1; // Fade in the new word
    }, 400); // 400ms matches the CSS transition time
}, 2500); // Cycles to a new word every 2.5 seconds


// --- SWIPEABLE GALLERY LOGIC ---
let currentImages = [];
let currentDescs = [];
let currentIndex = 0;
let currentSelectedColor = "";

function openGallery(imgElement, title, price) {
    // Read data from the clicked image
    currentImages = JSON.parse(imgElement.getAttribute('data-images'));
    currentDescs = JSON.parse(imgElement.getAttribute('data-descs'));
    const colorsData = imgElement.getAttribute('data-colors');
    currentIndex = 0;
    currentSelectedColor = "";

    // Set text details
    document.getElementById('galleryTitle').innerText = title;
    document.getElementById('galleryPrice').innerText = `₹${price.toLocaleString('en-IN')}`;
    
    // Handle Color Options dynamically
    const colorsSection = document.getElementById('galleryColorsSection');
    const colorThumbs = document.getElementById('galleryColorThumbs');
    colorThumbs.innerHTML = '';
    
    if (colorsData) {
        const colors = JSON.parse(colorsData);
        if (colors.length > 0) {
            colorsSection.style.display = 'block';
            colors.forEach((colorObj, idx) => {
                const thumb = document.createElement('img');
                thumb.src = colorObj.img;
                thumb.title = colorObj.name;
                thumb.className = 'color-thumb';
                
                if (idx === 0) {
                    thumb.classList.add('active-color');
                    currentSelectedColor = colorObj.name;
                }
                
                thumb.onclick = () => {
                    // Upgrade: Swap out the ENTIRE gallery array if this color has multiple angles!
                    if (colorObj.imgs && colorObj.imgs.length > 0) {
                        currentImages = colorObj.imgs;
                    } else {
                        currentImages = [colorObj.img];
                    }
                    currentIndex = 0;
                    currentSelectedColor = colorObj.name;
                    
                    // Highlight the selected thumbnail
                    document.querySelectorAll('.color-thumb').forEach(t => t.classList.remove('active-color'));
                    thumb.classList.add('active-color');

                    // Refresh the display
                    updateGalleryUI();
                    
                    // Keep the description focused on the color choice
                    document.getElementById('galleryDesc').innerText = `Viewing Color Variant: ${colorObj.name} - Swipe to see angles!`;
                };
                colorThumbs.appendChild(thumb);
            });
        } else {
            colorsSection.style.display = 'none';
        }
    } else {
        colorsSection.style.display = 'none';
    }

    // Setup "Add to Order" button inside gallery to INCLUDE THE CHOSEN COLOR
    document.getElementById('galleryAddBtn').onclick = () => {
        let finalTitle = title;
        if (currentSelectedColor) {
            finalTitle += ` (${currentSelectedColor})`;
        }
        addToCart(finalTitle, price);
        closeGallery();
    };

    updateGalleryUI();
    document.getElementById('galleryModal').style.display = 'flex';
}

function updateGalleryUI() {
    document.getElementById('galleryImg').src = currentImages[currentIndex];
    
    // Update the one-liner description dynamically based on the current photo!
    document.getElementById('galleryDesc').innerText = currentDescs[currentIndex];
    
    // Hide arrows if there's only 1 image
    const arrows = document.querySelectorAll('.nav-btn');
    arrows.forEach(btn => btn.style.display = currentImages.length > 1 ? 'block' : 'none');

    // Update dots
    const dotsContainer = document.getElementById('galleryDots');
    dotsContainer.innerHTML = '';
    if (currentImages.length > 1) {
        currentImages.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
            dotsContainer.appendChild(dot);
        });
    }
}

function nextImage(event) {
    if(event) event.stopPropagation();
    if (currentImages.length > 1) {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateGalleryUI();
    }
}

function prevImage(event) {
    if(event) event.stopPropagation();
    if (currentImages.length > 1) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateGalleryUI();
    }
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Close if clicking outside the white box
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) closeGallery();
});

// Touch Swiping Logic for Mobile
let touchstartX = 0;
let touchendX = 0;

const sliderArea = document.getElementById('sliderArea');

sliderArea.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

sliderArea.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (currentImages.length <= 1) return;
    const threshold = 50; // Minimum swipe distance
    if (touchendX < touchstartX - threshold) nextImage(); // Swiped left
    if (touchendX > touchstartX + threshold) prevImage(); // Swiped right
}


// --- VIEW SWITCHING LOGIC ---
function showView(viewId) {
    document.getElementById('view-home').style.display = 'none';
    document.getElementById('view-categories').style.display = 'none';
    document.getElementById('view-products').style.display = 'none';
    document.getElementById('view-ai-stylist').style.display = 'none';
    
    document.getElementById(viewId).style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCategoryPage(categoryName) {
    const titleElement = document.getElementById('dynamicCategoryTitle');
    titleElement.innerText = categoryName === 'All' ? 'All Products' : categoryName + ' Collection';

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (categoryName === 'All' || card.getAttribute('data-category') === categoryName) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    showView('view-products');
}

// --- CART DRAWER LOGIC ---
function openCart() {
    document.getElementById('cartOverlay').style.display = 'block';
    setTimeout(() => { document.getElementById('cartDrawer').classList.add('open'); }, 10);
}

function closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
    setTimeout(() => { document.getElementById('cartOverlay').style.display = 'none'; }, 300);
}

// --- CART AND WHATSAPP LOGIC ---
let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCartUI();
    openCart(); 
}

function updateCartUI() {
    const cartDiv = document.getElementById('cartItems');
    const totalSpan = document.getElementById('totalBill');
    const cartBadge = document.getElementById('cartBadge');
    
    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartDiv.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span style="font-weight:bold;">₹${item.price.toLocaleString('en-IN')}</span>
            </div>`;
    });

    if (cart.length === 0) cartDiv.innerHTML = '<p style="color: #777; text-align: center; font-size: 1.1em;">No items added yet.</p>';
    
    totalSpan.innerText = total.toLocaleString('en-IN');
    cartBadge.innerText = cart.length; 
}

function placeOrder() {
    const name = document.getElementById('custName').value;
    const address = document.getElementById('custAddress').value; 

    if (!name || !address || cart.length === 0) {
        showCustomAlert("Please add items to your cart and enter both your name and address.");
        return;
    }

    let total = 0;
    let itemDetails = "";
    cart.forEach((item, i) => {
        itemDetails += `${i+1}. ${item.name} - ₹${item.price.toLocaleString('en-IN')}\n`;
        total += item.price;
    });

    const message = `*NEW ORDER - THE ONLINE FURNITURE*\n\n*Customer Name:* ${name}\n*Delivery Address:* ${address}\n\n*Items Ordered:*\n${itemDetails}\n*TOTAL BILL:* ₹${total.toLocaleString('en-IN')}\n\n_Please confirm this order._`;
    
    const myNumber = "919905044663"; 
    const waLink = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(waLink, '_blank');
}

// --- GEMINI API INTEGRATION (AI Stylist) ---
async function fetchWithBackoff(url, options, retries = 5, delay = 1000) {
    try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return await res.json();
    } catch (error) {
        if (retries > 0) {
            await new Promise(r => setTimeout(r, delay));
            return fetchWithBackoff(url, options, retries - 1, delay * 2);
        }
        throw error;
    }
}

async function generateAIRecommendation() {
    const inputField = document.getElementById('aiInput');
    const userInput = inputField.value.trim();
    const loader = document.getElementById('aiLoader');
    const responseContainer = document.getElementById('aiResponseContainer');
    const responseContent = document.getElementById('aiResponseContent');

    if (!userInput) {
        showCustomAlert("Please describe your room or what you are looking for first.");
        return;
    }

    loader.style.display = 'block';
    responseContainer.style.display = 'none';

    const systemPrompt = `You are a professional interior designer helping customers shop at 'The Online Furniture'. 
    Read the user's room description and recommend 2 to 3 specific furniture categories from our catalog. 
    Our available categories are: 5 Seater Sofa Set, 3 Seater Sofa, Corner Sofa, Circular Sofa, Sofa Cum Bed, Chester, Centre Table, Bed, Headboard, Mattress, and Dressing.
    Keep the response warm, encouraging, and brief (under 150 words). Format the output using bullet points and bold text for category names.`;

    const payload = {
        contents: [{ parts: [{ text: userInput }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    try {
        const result = await fetchWithBackoff(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        let textResponse = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a recommendation right now.";
        
        textResponse = textResponse.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 
        textResponse = textResponse.replace(/\*(.*?)\*/g, '<em>$1</em>'); 
        textResponse = textResponse.replace(/\n/g, '<br>'); 
        
        responseContent.innerHTML = textResponse;
        responseContainer.style.display = 'block';
    } catch (error) {
        responseContent.innerHTML = "<em>We're experiencing a brief technical issue connecting to our AI Stylist. Please try again in a moment.</em>";
        responseContainer.style.display = 'block';
    } finally {
        loader.style.display = 'none';
    }
}
