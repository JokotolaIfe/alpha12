import { Injectable } from '@angular/core';
import { ObserveData } from './observe';

@Injectable({
    providedIn: 'root',
})
export class Theme {
    theme: string = 'light';
    constructor(
        public observe: ObserveData
    ) {
        //subscribe to a global variable to fetch current theme
        this.observe.getTheme().subscribe(theme => {
            this.theme = theme;
        });
    }

    COLORS() {
        const theme = this.theme;
        const isDark = theme === 'dark' ? true : false;
        return {
            // Backgrounds 
            sideNavBg: isDark ? '#484554' : '#FFFFFF',
            pageBg: isDark ? '#383544' : '#FFFFFF',
            priBg: isDark ? '#8576FF' : '#FCF7FF',
            tableHeaderBg: isDark ? '#6A6676' : '#F1F5F9',

            //Headers, Titles, Texts
            priText: isDark ? '#FFFFFF' : '#334155',
            tableText: isDark ? '#FFFFFF' : '#334155',
            tableHeader: isDark ? '#FFFFFF' : '#64748B',
            faintText: isDark ? '#FFFFFF' : '#64748B',
            cardHeader: isDark ? '#FFFFFF' : '#64748B',
            cardText: isDark ? '#FFFFFF' : '#334155',
            sectionTitle: isDark ? '#FFFFFF' : '#000000',
            dangerText: '#F43F5E',
            tertiaryText: '#10B981',

            // Chips and Stats
            greenChipBg: isDark ? 'transparent' : '#D1FAE5',
            greenChipBorder: isDark ? '#65DDB5' : '#D1FAE5',
            greenChipText: isDark ? '#65DDB5' : '#10B981',
            blueChipBg: isDark ? 'transparent' : '#DBEAFE',
            blueChipBorder: isDark ? '#77B1FF' : '#DBEAFE',
            blueChipText: isDark ? '#77B1FF' : '#3B82F6',

            // Inputs
            inputBorder: isDark ? '#484554' : '#E2E8F0',
            inputBg: isDark ? '#484554' : 'transparent',
            inputText: isDark ? '#FCF7FF' : '#334155',
            inputPlaceholder: isDark ? '#CBD5E1' : '#CBD5E1',

            // OTHERS - Modals, Icons, etc
            //sidenavs
            sidenavIcon: '#ADA9BB',
            sidenavTitle: isDark ? '#FFFFFF' : '#334155',
            sidenavBorder: isDark ? '#484554' : '#F1F5F9',
            navHover: isDark ? '#8576FF' : '#FCF7FF',
            navTextHover: isDark ? '#FFFFFF' : '#8576FF',
            //accordions for mobile
            accordionHover: isDark ? '#514E5D' : '#F5F5F5',
            accordionBody: isDark ? '#383544' : '#FCF7FF',

            modalFooterBg: isDark ? '#ADA9BB' : 'transparent',
            disabledBtn: isDark ? '#484554' : '#E2E8F0',
            tabsBg: isDark ? '#484554' : '#FCF7FF',
        }
    }
}
