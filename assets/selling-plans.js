class ProductSubscriptions extends HTMLElement {
  constructor() {
    super();

    this.input = this.querySelector('input[name="selling_plan"]');
    this.options = this.querySelectorAll('input[name="purchase_option"]');
    this.select = this.querySelector('select[name="purchase_option_values"]');

    this.initialise();
  }

  initialise() {
    // Safe: only bind if options exist (NodeList is always safe)
    if (this.options && this.options.length > 0) {
      this.options.forEach((option) =>
        option.addEventListener('click', this.onRadioChange.bind(this))
      );
    }

    // Safe: only bind if select exists
    if (this.select) {
      this.select.addEventListener('change', this.onSelectChange.bind(this));
    }
  }

  onRadioChange(e) {
    if (this.input) {
      this.input.value = e.target.value;
    }
  }

  onSelectChange(e) {
    if (this.input) {
      this.input.value = e.target.value;
    }
  }

  getCurrentSellingPlanId() {
    // Safe: return empty string if input is missing
    return this.input ? this.input.value : '';
  }
}

if (!customElements.get('product-subscriptions')) {
  customElements.define('product-subscriptions', ProductSubscriptions);
}

window.ProductSubscriptions = ProductSubscriptions;

window.getCurrentSellingPlanId = function () {
  const productSubscriptions = document.querySelector('product-subscriptions');
  return productSubscriptions ? productSubscriptions.getCurrentSellingPlanId() : '';
};