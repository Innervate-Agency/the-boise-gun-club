# Storybook Organization Strategy
**Organizing 70 components into logical categories**

## **🎯 Proposed Category Structure**

### **1. Core UI (Foundation) - 15 components**
*Basic building blocks used everywhere*
- Button ✅
- Badge ✅  
- Card ✅
- Input ✅
- Textarea ✅
- Label ✅
- Separator ✅
- Avatar ✅
- Skeleton ✅
- Progress ✅
- Tooltip ✅
- Sonner ✅
- LoadingSpinner ❌
- NewThemeToggle ❌
- StatCard ❌

### **2. Navigation - 8 components**
*Navigation, routing, and wayfinding*
- NavigationMenu ✅
- Breadcrumb ❌
- Breadcrumb-Hero ❌
- Menubar ✅
- Command ✅
- Pagination ✅
- Site-Navigation ❌
- Navigation-Fusion ❌

### **3. Forms & Inputs - 9 components**
*Data collection and user input*
- Form ✅
- Input ✅ (duplicate - move to Core)
- Textarea ✅ (duplicate - move to Core)
- Checkbox ✅
- Radio-Group ✅
- Switch ✅
- Select ✅
- Input-OTP ✅
- Contact-Form ❌

### **4. Layout & Containers - 8 components**
*Structure and organization*
- Accordion ✅
- Collapsible ✅
- Tabs ✅
- Resizable ✅
- Scroll-Area ✅
- Aspect-Ratio ✅
- Drawer ✅
- Sheet ✅

### **5. Overlays & Modals - 6 components**
*Pop-ups, dialogs, and overlays*
- Dialog ✅
- Alert-Dialog ✅
- Popover ✅
- Hover-Card ✅
- Context-Menu ✅
- Dropdown-Menu ✅

### **6. Data Display - 6 components**
*Tables, charts, and data visualization*
- Table ✅
- Chart ✅
- Stats-Showcase ✅
- Carousel ✅
- Gallery-Showcase ✅
- Pricing-Table ❌

### **7. Feedback & Alerts - 3 components**
*User feedback and notifications*
- Alert ✅
- Sonner ✅ (duplicate - move to Core)
- Toast (part of Sonner)

### **8. Specialized Controls - 4 components**
*Advanced interactive elements*
- Calendar ✅
- Slider ✅
- Toggle ✅
- Toggle-Group ✅

### **9. Content & Media - 6 components**
*Rich content and media display*
- Blog-Article ❌
- Testimonial-Carousel ✅
- Feature-Grid ✅
- FAQ-Accordion ✅
- UnsplashImage ❌
- AnimatedSplashCard ❌

### **10. Heroes & Headers - 4 components**
*Page headers and hero sections*
- Mega-Hero ❌
- Page-Hero ❌
- Breadcrumb-Hero ❌ (duplicate - move to Navigation)
- Site-Footer ❌

### **11. Accessibility & Effects - 3 components**
*Accessibility and visual effects*
- AccessibilityFAB ❌
- Floating-Background ✅
- Callout-Card ❌

### **12. Facility-Specific - 2 components**
*Gun club specific components*
- FacilityCard ✅
- (Room for more club-specific components)

## **📊 Implementation Priority**

### **Phase 1: Missing Core & Navigation (High Priority)**
1. LoadingSpinner ❌
2. NewThemeToggle ❌
3. StatCard ❌
4. Breadcrumb ❌
5. Site-Navigation ❌

### **Phase 2: Missing Forms & Content (Medium Priority)**
6. Contact-Form ❌
7. Blog-Article ❌
8. Pricing-Table ❌
9. UnsplashImage ❌
10. AnimatedSplashCard ❌

### **Phase 3: Missing Heroes & Specialized (Lower Priority)**
11. Mega-Hero ❌
12. Page-Hero ❌
13. Navigation-Fusion ❌
14. Site-Footer ❌
15. AccessibilityFAB ❌
16. Callout-Card ❌
17. Breadcrumb-Hero ❌

## **🔄 Storybook Title Updates Needed**

**Current titles need to be updated to match categories:**
```
// OLD
title: 'Components/UI/Button'

// NEW
title: 'Core UI/Button'
title: 'Navigation/Breadcrumb'
title: 'Forms/Contact Form'
title: 'Data Display/Pricing Table'
title: 'Heroes/Mega Hero'
```

## **🎨 Enhanced Story Requirements**

Each story should include:
1. **All variants** (default, premium, elite, glass where applicable)
2. **Idaho color examples** using the 26-color palette
3. **Responsive behavior** demonstration
4. **Accessibility features** documentation
5. **Usage examples** with real gun club content
6. **Integration examples** showing how components work together

## **🚀 Next Steps**

1. **Batch create missing stories** in priority order
2. **Update existing story titles** to match new categories
3. **Add missing variants** to existing stories
4. **Create comprehensive documentation** for each category
5. **Add interactive examples** with real club data 