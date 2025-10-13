"use client"
import { useSelector } from 'react-redux';
import {RootState} from "@/shared/redux/store";
import {
    ComplexApartmentCatalog,
    ComplexDetailContactForm,
    ComplexDetailBankOffers,
    ComplexDetailFeatures,
    ComplexDetailHero,
    ComplexDetailIntroBlock,
    ComplexDetailTimeline,
    ComplexDetailNavigationPanel
} from "@/widgets/ComplexDetail";

export const ComplexDetailContainer = () => {
    const complex = useSelector((state: RootState) => state.complex.list);

    return (
        <section>
            <h2>DetailPage</h2>
            <ComplexDetailHero/>
            <ComplexDetailFeatures/>
            <ComplexDetailIntroBlock/>
            <ComplexDetailBankOffers/>
            <ComplexDetailTimeline/>
            <ComplexApartmentCatalog/>
            <ComplexDetailContactForm/>
            <ComplexDetailNavigationPanel/>
        </section>
    );
}
