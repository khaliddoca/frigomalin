<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { db } from "./data/db";
import type { StockItem } from "./domain/types";

const stockItems = ref<StockItem[]>([]);
const loading = ref(true);
const storageUnavailable = ref(false);
const frigoIcon = `${import.meta.env.BASE_URL}frigo.svg`;
const today = new Date().toISOString().slice(0, 10);
const nearExpiryItems = computed(() =>
	stockItems.value
		.filter((item) => item.expiresOn <= today)
		.sort((first, second) => first.expiresOn.localeCompare(second.expiresOn)),
);

onMounted(async () => {
	try {
		stockItems.value = await db.stockItems
			.where("status")
			.equals("in-stock")
			.toArray();
	} catch {
		storageUnavailable.value = true;
	} finally {
		loading.value = false;
	}
});
</script>

<template>
  <main class="app-shell">
    <header class="topbar">
      <a
        class="brand"
        href="./"
        aria-label="FrigoMalin, accueil"
      >
        <img
          :src="frigoIcon"
          alt=""
          width="34"
          height="34"
        >
        <span>FrigoMalin</span>
      </a>
      <span class="local-badge">Stockage local</span>
    </header>

    <section
      class="inventory"
      aria-labelledby="inventory-title"
    >
      <div class="section-heading">
        <div>
          <p class="eyebrow">
            Votre foyer
          </p>
          <h1 id="inventory-title">
            Inventaire
          </h1>
        </div>
        <span class="item-count">{{ stockItems.length }} produit{{ stockItems.length === 1 ? "" : "s" }}</span>
      </div>

      <p
        v-if="loading"
        class="notice"
        role="status"
      >
        Chargement de l’inventaire…
      </p>
      <p
        v-else-if="storageUnavailable"
        class="notice notice-error"
        role="alert"
      >
        Le stockage local est indisponible dans ce navigateur.
      </p>
      <p
        v-else-if="stockItems.length === 0"
        class="empty-state"
      >
        Aucun produit dans votre inventaire pour le moment.
      </p>
      <ul
        v-else
        class="product-list"
      >
        <li
          v-for="item in stockItems"
          :key="item.id"
          class="product-row"
        >
          <div>
            <h2>{{ item.name }}</h2>
            <p>{{ item.quantity }} {{ item.unit }} · {{ item.location }}</p>
          </div>
          <time :datetime="item.expiresOn">{{ item.expiresOn }}</time>
        </li>
      </ul>
    </section>

    <section
      v-if="nearExpiryItems.length > 0"
      class="expiry-section"
      aria-labelledby="expiry-title"
    >
      <h2 id="expiry-title">
        À vérifier aujourd’hui
      </h2>
      <ul>
        <li
          v-for="item in nearExpiryItems"
          :key="item.id"
        >
          {{ item.name }} · {{ item.dateKind }}
        </li>
      </ul>
    </section>
  </main>
</template>