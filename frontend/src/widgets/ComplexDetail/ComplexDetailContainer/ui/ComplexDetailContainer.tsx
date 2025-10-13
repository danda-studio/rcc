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
        <section className="min-h-screen px-[1.6rem] py-[1.6rem]">
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
