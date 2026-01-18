import AppLogoIcon from './app-logo-icon';
import WhiteAppLogoIcon from './white-app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex dark:hidden aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="hidden dark:flex  aspect-square size-8 items-center justify-center rounded-md bg-dark text-sidebar-primary-foreground">
                <WhiteAppLogoIcon className="size-5 fill-current " />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">Sacco</span>
            </div>
        </>
    );
}
