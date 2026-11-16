import { query, pool } from './db.js';

const products = [
    // [name, brand, description, price, image_filename, category_slug, is_new, is_bestseller]
    ['Shea Nourish Lotion', 'Nivea', 'Deep moisture for glowing skin', 1200, '01_nivea_shea_lotion.jpg', 'skin-body', true, false],
    ['Cocoa Radiant Lotion', 'Vaseline', 'Rich cocoa butter for soft skin', 950, '02_vaseline_cocoa_lotion.jpg', 'skin-body', false, false],
    ['Petroleum Jelly', 'Vaseline', 'Original healing jelly', 450, '03_vaseline_petroleum_jelly.jpg', 'skin-body', false, false],
    ['Healing Lotion', 'Vaseline', 'Intensive care for dry skin', 1100, '04_vaseline_healing_lotion.jpg', 'skin-body', false, false],
    ['NIVEA Creme', 'Nivea', 'Classic moisturizing cream', 650, '05_nivea_creme.jpg', 'skin-body', false, false],
    ['Soft Cream', 'Nivea', 'Refreshingly soft moisturizer', 750, '06_nivea_soft_cream.jpg', 'skin-body', false, false],
    ['Sun Protect SPF50+', 'Nivea', 'High protection sunscreen', 1400, '07_nivea_sunscreen.jpg', 'skin-body', false, false],
    ['Hair Moisturizer', 'Dark & Lovely', 'Oil-infused moisture for hair', 850, '08_dark_lovely_hair_moisturizer.jpg', 'hair-care', false, false],
    ['Conditioning Treatment', 'Dark & Lovely', 'Deep conditioning for hair', 900, '09_dark_lovely_conditioner.jpg', 'hair-care', false, false],
    ['JBCO Leave-In', 'SheaMoisture', 'Jamaican Black Castor Oil leave-in', 1750, '10_sheamoisture_leavein.jpg', 'hair-care', false, false],
    ['Shampoo', 'SheaMoisture', 'Gentle cleansing shampoo', 1550, '11_sheamoisture_shampoo.jpg', 'hair-care', false, false],
    ['Conditioner', 'SheaMoisture', 'Nourishing conditioner', 1550, '12_sheamoisture_conditioner.jpg', 'hair-care', false, false],
    ['Shampoo + Conditioner Duo', 'SheaMoisture', 'Complete hair care set', 2900, '13_sheamoisture_shampoo_duo.jpg', 'hair-care', false, true],
    ['Mauve Lipstick', 'Maybelline', 'Creamy mauve finish', 1250, '14_maybelline_lipstick_mauve.jpg', 'makeup', false, false],
    ['Ink Crayon', 'Maybelline', 'Bold, long-wear lip color', 1350, '15_maybelline_lipstick_crayon.jpg', 'makeup', false, false],
    ['Concealer', 'Maybelline', 'Natural coverage concealer', 1400, '16_maybelline_concealer.jpg', 'makeup', false, false],
    ['Serum Lipstick', 'Maybelline', 'Hydrating serum lipstick', 1500, '17_maybelline_serum_lipstick.jpg', 'makeup', false, false],
    ['Glamazon Lipstick', 'Glamazon', 'Bold statement lipstick', 1100, '18_glamazon_lipstick.jpg', 'makeup', false, false],
    ['b.pure Mascara', 'Clean Beauty', 'Volumizing mascara', 800, '19_clean_beauty_mascara.jpg', 'makeup', false, false],
    ['Aloe Vera Gel', 'Nature', 'Soothing aloe vera gel', 600, '20_aloe_vera_gel.jpg', 'skin-body', false, false],
    ['Aloe Soothing Gel', 'Nature', 'Cooling aloe gel', 650, '21_aloe_soothing_gel.jpg', 'skin-body', false, false],
    ['Shea Butter Lotion', 'Nature', 'Rich shea butter lotion', 850, '22_shea_butter_lotion.jpg', 'skin-body', false, false],
    ['Shea Body Butter', 'Nature', 'Deeply moisturizing body butter', 1100, '23_shea_body_butter.jpg', 'skin-body', false, false],
    ["Palmer's Coconut Body Oil", "Palmer's", 'Moisturizing coconut oil', 1200, '24_palmers_body_oil.jpg', 'skin-body', false, false],
    ['Perfume Body Lotion', 'Fragrance Co', 'Scented body lotion', 1400, '25_perfume_body_lotion.jpg', 'skin-body', false, false],
    ['Ultra Healing Lotion', 'Jergens', 'Fast-absorbing healing lotion', 950, '26_jergens_ultra_healing_lotion.jpg', 'skin-body', false, false],
    ["Palmer's Cocoa Butter Lotion", "Palmer's", 'Cocoa butter moisturizer', 1050, '27_palmers_cocoa_butter_lotion.jpg', 'skin-body', false, false],
    ["Johnson's Baby Lotion", "Johnson's", 'Gentle baby lotion', 700, '28_johnsons_baby_lotion.jpg', 'baby-care', false, false],
    ["Johnson's Baby Shampoo", "Johnson's", 'No-tears baby shampoo', 600, '29_johnsons_baby_shampoo.jpg', 'baby-care', false, false],
    ["Johnson's Baby Oil", "Johnson's", 'Pure baby oil', 550, '30_johnsons_baby_oil.jpg', 'baby-care', false, false],
    ['Micellar Rose Water', 'Garnier', 'Gentle makeup remover', 950, '31_garnier_micellar_rose_water.jpg', 'face-care', false, false],
    ['Pure Active Cleanser', 'Garnier', 'Anti-blemish cleanser', 800, '32_garnier_pure_active_cleanser.jpg', 'face-care', false, false],
    ['Bright Complete Face Wash', 'Garnier', 'Brightening face wash', 750, '33_garnier_bright_complete_face_wash.jpg', 'face-care', false, false],
    ['Rose Toner', 'Garnier', 'Soothing rose water toner', 900, '34_garnier_rose_toner.jpg', 'face-care', false, false],
    ['Olive Oil Relaxer Kit', 'ORS', 'Complete relaxer kit', 2200, '35_ors_olive_oil_relaxer_kit.jpg', 'hair-care', false, false],
    ['Relaxer Collection', 'ORS', 'Hair relaxer collection', 2500, '36_ors_relaxer_collection.jpg', 'hair-care', false, false],
    ['Hair Conditioner', 'Blue Magic', 'Deep conditioning treatment', 700, '37_blue_magic_hair_conditioner.jpg', 'hair-care', false, false],
    ['Amla Hair Oil', 'Dabur', 'Traditional amla hair oil', 550, '38_dabur_amla_hair_oil.jpg', 'hair-care', false, false],
    ['Castor Oil', 'Nature', 'Pure castor oil', 600, '39_castor_oil.jpg', 'hair-care', false, false],
    ['Soak-Off Gel Polish', 'Gelish', 'Long-lasting gel polish', 1500, '40_gelish_soak_off_gel_polish.jpg', 'makeup', false, false],
    ['Taupe Model Polish', 'Gelish', 'Elegant taupe shade', 1500, '41_gelish_taupe_model_polish.jpg', 'makeup', false, false],
    ['Eyebrow Precision Pencil', 'Beauty Co', 'Precision eyebrow pencil', 500, '42_eyebrow_precision_pencil.jpg', 'makeup', false, false],
    ['Signature Brow Pen Brush', 'Beauty Co', 'Dual-ended brow tool', 650, '43_signature_brow_pen_brush.jpg', 'makeup', false, false],
    ['20pc Makeup Brush Set', 'Beauty Co', 'Complete brush set', 2800, '44_makeup_brush_set_20pc.jpg', 'makeup', false, true],
    ['Travel Makeup Brush Set', 'Beauty Co', 'Compact travel brushes', 1800, '45_makeup_brush_travel_set.jpg', 'makeup', false, false],
    ['Angled Makeup Brush', 'Beauty Co', 'Precision angled brush', 350, '46_angled_makeup_brush.jpg', 'makeup', false, false],
    ['Beauty Blender Sponge', 'Beauty Co', 'Blending makeup sponge', 450, '47_beauty_blender_sponge.jpg', 'makeup', false, false],
    ['Dainty CZ Stud Earrings', 'Adorn', 'Elegant cubic zirconia studs', 850, '48_dainty_cz_stud_earrings.jpg', 'makeup', false, false],
    ["Johnson's Head-to-Toe Wash", "Johnson's", 'Gentle baby wash', 650, '49_johnsons_baby_head_to_toe_wash.jpg', 'baby-care', false, false],
    ['Coconut Hair Oil', 'Nature', 'Pure coconut hair oil', 500, '50_coconut_hair_oil.jpg', 'hair-care', false, false],
];

async function seed() {
    try {
        // Build lookup: slug -> id
        const { rows: cats } = await query('SELECT id, slug FROM categories');
        const categoryMap = Object.fromEntries(cats.map(c => [c.slug, c.id]));

        console.log(`📦 Found ${cats.length} categories, inserting ${products.length} products...`);

        let inserted = 0;
        for (const [name, brand, description, price, image, slug, isNew, isBest] of products) {
            await query(
                `INSERT INTO products
                 (name, brand, description, price_ksh, image_filename, category_id, is_new, is_bestseller)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                [name, brand, description, price, image, categoryMap[slug], isNew, isBest]
            );
            inserted++;
        }

        console.log(`✅ Inserted ${inserted} products`);
    } catch (err) {
        console.error('❌ Seed failed:', err);
    } finally {
        await pool.end();
    }
}

seed();