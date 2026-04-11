import { r as registerInstance, h } from './index-BBzp1U1H.js';

const lusterArticleCardCss = () => `:host{display:block}.article-card{background:var(--dc-surface-container-high);border-radius:var(--dc-round-4);overflow:hidden;display:flex;flex-direction:column;transition:background var(--dc-transition-base);cursor:pointer}.article-card:hover{background:var(--dc-surface-bright)}.article-card__image{position:relative;height:160px;overflow:hidden}.article-card__image img{width:100%;height:100%;object-fit:cover}.article-card__image-overlay{position:absolute;inset:0;background:linear-gradient(to bottom, rgba(6,14,32,0.1) 0%, rgba(6,14,32,0.7) 100%)}.article-card__body{padding:var(--dc-space-5);display:flex;flex-direction:column;gap:var(--dc-space-3);flex:1}.article-card__category{font-size:var(--dc-label-sm);font-weight:700;color:var(--dc-primary);letter-spacing:var(--dc-tracking-wider);text-transform:uppercase}.article-card__date{font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant)}.article-card__title{font-family:var(--dc-font-display);font-size:var(--dc-title-lg);font-weight:700;color:var(--dc-on-surface);letter-spacing:var(--dc-tracking-tight);line-height:1.3;margin:0}.article-card--featured .article-card__title{font-size:var(--dc-headline-sm)}.article-card__excerpt{font-size:var(--dc-body-sm);color:var(--dc-on-surface-variant);line-height:1.6;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.article-card__byline{display:flex;align-items:center;gap:var(--dc-space-2);margin-top:auto}.article-card__author-avatar{width:24px;height:24px;border-radius:var(--dc-round-full);background:linear-gradient(135deg, var(--dc-primary), var(--dc-primary-dim));display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--dc-on-primary);flex-shrink:0}.article-card__author{display:block;font-size:var(--dc-label-md);font-weight:600;color:var(--dc-on-surface)}.article-card__author-role{display:block;font-size:var(--dc-label-sm);color:var(--dc-on-surface-variant)}.article-card__read-more{display:flex;align-items:center;gap:var(--dc-space-1);font-size:var(--dc-label-sm);color:var(--dc-primary);margin-left:auto}`;

const DcArticleCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.category = '';
        this.heading = '';
        this.excerpt = '';
        this.date = '';
        this.author = '';
        this.authorRole = '';
        this.imageUrl = '';
        this.featured = false;
    }
    render() {
        return (h("article", { key: '520f8dc527b674523094963a9fe21caa1bfe1cff', class: `article-card ${this.featured ? 'article-card--featured' : ''}` }, this.featured && this.imageUrl && (h("div", { key: '8f190538fbacc6e87be7573a5d91fce8c1f9dd53', class: "article-card__image" }, h("img", { key: '120e1b8d46076ab89333565f9b0c6b98ad6b2850', src: this.imageUrl, alt: this.heading }), h("div", { key: 'a31961b7c434a95ba063f5a0a121c5b3b4709484', class: "article-card__image-overlay" }))), h("div", { key: 'dd331d9b8896566747539b658d4e3c77eff11798', class: "article-card__body" }, this.category && (h("span", { key: '26f6c42e629c2576715d3c0b43ec61a73edbf8f1', class: "article-card__category" }, this.category)), this.date && !this.featured && (h("span", { key: '3d05f2ae1b3b102558422307b545f144ea920cd4', class: "article-card__date" }, this.date)), this.date && this.featured && (h("span", { key: '492c6989b62416e891349a7027ce9cade8be229a', class: "article-card__date" }, this.date)), h("h3", { key: 'aa7a850253dbf612ba16fa9b628a2abd25a74083', class: "article-card__title" }, this.heading), this.excerpt && (h("p", { key: '933fd34f4f424d95f94d05eacbe6b4694cc580a8', class: "article-card__excerpt" }, this.excerpt)), (this.author || this.authorRole) && (h("div", { key: 'b0a42dd52449991dab675fd2d492c6646f7f9dfc', class: "article-card__byline" }, h("div", { key: '2ea5b62143c7f4796f46faca3e6f1fa7419b6c93', class: "article-card__author-avatar" }, this.author.charAt(0)), h("div", { key: 'b1e7ff029659a237da73c7421f5742b1ce655a60' }, h("span", { key: 'e4a71f5e73610d6b5fcce237cd30a1f9eb8512ea', class: "article-card__author" }, this.author), this.authorRole && h("span", { key: '936042578927a847d0601bdfba58afafcc57cbf9', class: "article-card__author-role" }, this.authorRole)), h("span", { key: '5435de2d1ecb991c8500bbb3c7e22b3f3dc7f361', class: "article-card__read-more" }, h("svg", { key: '49186537061817a26ded5538a8b5cf185b5c5e1e', width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" }, h("path", { key: '7304d21f204471e939ebeeeb51d3eb817e392262', d: "M5 12h14M12 5l7 7-7 7", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })), "More"))))));
    }
};
DcArticleCard.style = lusterArticleCardCss();

export { DcArticleCard as luster_article_card };
//# sourceMappingURL=luster-article-card.entry.esm.js.map

//# sourceMappingURL=luster-article-card.entry.js.map