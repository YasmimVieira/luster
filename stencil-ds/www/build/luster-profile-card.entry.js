import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterProfileCardCss = () => `:host{display:block}.profile-card{display:flex;flex-direction:column;align-items:center;gap:var(--dc-space-4);padding:var(--dc-space-6);background:var(--dc-surface-container-high);border-radius:var(--dc-round-4);text-align:center}.profile-card__avatar{width:80px;height:80px;border-radius:var(--dc-round-full);background:linear-gradient(135deg, var(--dc-primary-dim), var(--dc-secondary-container));display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;box-shadow:0 0 0 3px rgba(163, 166, 255, 0.2)}.profile-card__avatar-img{width:100%;height:100%;object-fit:cover}.profile-card__avatar-initials{font-family:var(--dc-font-display);font-size:var(--dc-headline-sm);font-weight:800;color:var(--dc-on-primary)}.profile-card__info{display:flex;flex-direction:column;gap:var(--dc-space-1)}.profile-card__name{font-family:var(--dc-font-display);font-size:var(--dc-title-lg);font-weight:700;color:var(--dc-on-surface);margin:0;letter-spacing:var(--dc-tracking-tight)}.profile-card__role{font-size:var(--dc-body-sm);color:var(--dc-on-surface-variant)}.profile-card__stats{display:flex;gap:var(--dc-space-6);width:100%;justify-content:center;padding:var(--dc-space-3) 0;border-top:1px solid rgba(64, 72, 93, 0.2);border-bottom:1px solid rgba(64, 72, 93, 0.2)}.profile-card__stat{display:flex;flex-direction:column;align-items:center;gap:2px}.profile-card__stat-value{font-family:var(--dc-font-display);font-size:var(--dc-headline-sm);font-weight:800;color:var(--dc-on-surface)}.profile-card__stat-label{font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant);text-transform:uppercase;letter-spacing:var(--dc-tracking-wide)}`;

const DcProfileCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = '';
        this.role = '';
        this.avatar = '';
        this.stat1Value = '';
        this.stat1Label = '';
        this.stat2Value = '';
        this.stat2Label = '';
        this.ctaLabel = 'View Portfolio';
    }
    render() {
        return (h("div", { key: '69a8fff167fee4805499b3bb754d286c2287413b', class: "profile-card" }, h("div", { key: 'd2547d0cec607d9d001b3074f69557f06d863e3d', class: "profile-card__avatar" }, this.avatar
            ? h("img", { src: this.avatar, alt: this.name, class: "profile-card__avatar-img" })
            : h("span", { class: "profile-card__avatar-initials" }, this.name.split(' ').map(n => n[0]).join('').slice(0, 2))), h("div", { key: '22f74d3a2982647a4fcfb807fb8ece81a59d2b9c', class: "profile-card__info" }, h("h3", { key: '06d8567c4c4be29e3653d39357fbf0235a907303', class: "profile-card__name" }, this.name), h("span", { key: '9e8500c7a3d5ee6c895d6209c067c9441dce7d2f', class: "profile-card__role" }, this.role)), (this.stat1Value || this.stat2Value) && (h("div", { key: '5dd61dcd4d290b140e50de1bf4ca3befb81d6f3a', class: "profile-card__stats" }, this.stat1Value && (h("div", { key: '2c972fdc9dd621540e7d7fc572df27bb61fef70a', class: "profile-card__stat" }, h("span", { key: '9693a5bb68e674a3c21681c8ba4b99ca12bf934c', class: "profile-card__stat-value" }, this.stat1Value), h("span", { key: 'ece29d1b9fdc7ebdc4461298bcae931f6d83e8ed', class: "profile-card__stat-label" }, this.stat1Label))), this.stat2Value && (h("div", { key: '211198eda038b08f6093289b7f97c8d5fdac6b6e', class: "profile-card__stat" }, h("span", { key: 'ce84623aeeed41e2b48f0e50a10b4b633fd5b246', class: "profile-card__stat-value" }, this.stat2Value), h("span", { key: 'dcfad2516563bdef51e37623a8fd3c474bea40a6', class: "profile-card__stat-label" }, this.stat2Label))))), h("luster-button", { key: '5de015471f6e29cc283aef60bb7097ec384b3b15', variant: "primary", "full-width": true }, this.ctaLabel)));
    }
};
DcProfileCard.style = lusterProfileCardCss();

export { DcProfileCard as luster_profile_card };
//# sourceMappingURL=luster-profile-card.entry.esm.js.map

//# sourceMappingURL=luster-profile-card.entry.js.map