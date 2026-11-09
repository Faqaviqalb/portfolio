<script setup lang="ts">
import { profile } from '~/data/site'

// No backend: the form composes an email in the visitor's mail app.
// Want submissions without a mail app? Swap the submit handler for a
// free form service (Formspree, Web3Forms, Netlify Forms…).
const form = reactive({ name: '', email: '', type: '', message: '' })
const sent = ref(false)

function submit() {
  const subject = `Project inquiry${form.type ? ` — ${form.type}` : ''} from ${form.name}`
  const body = `${form.message}\n\n— ${form.name} (${form.email})`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container box reveal">
      <div class="info">
        <span class="eyebrow">Get in touch</span>
        <h2 class="section-title">Want to work together?</h2>
        <p>Tell me a little about what you need and I’ll get back to you.</p>

        <ul>
          <li><span class="icon-circle"><AppIcon name="mail" /></span><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li><span class="icon-circle"><AppIcon name="map-pin" /></span>{{ profile.location }}</li>
        </ul>
      </div>

      <form class="form" @submit.prevent="submit">
        <div class="row">
          <label><span>Your name</span><input v-model="form.name" required autocomplete="name" /></label>
          <label><span>Email address</span><input v-model="form.email" type="email" required autocomplete="email" /></label>
        </div>
        <label>
          <span>Project type</span>
          <select v-model="form.type">
            <option value="">Select one…</option>
            <option>A new website or store</option>
            <option>Building a design I already have</option>
            <option>Fixing a slow site</option>
            <option>A job opening</option>
            <option>Something else</option>
          </select>
        </label>
        <label><span>Message</span><textarea v-model="form.message" rows="5" required placeholder="A few lines is plenty" /></label>
        <button class="btn btn-gold" type="submit">Send Message <AppIcon name="send" /></button>
        <p v-if="sent" class="note" role="status">Your mail app should open with the message ready to send.</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.box { display: grid; grid-template-columns: 1fr 1.15fr; background: var(--white); border: 1px solid var(--line); border-radius: 26px; overflow: hidden; }
.info { position: relative; background: var(--cream-2); padding: 48px 44px; overflow: hidden; }
.info > p { margin-top: 14px; color: var(--muted); }
.info ul { list-style: none; padding: 0; margin: 30px 0 0; display: grid; gap: 14px; position: relative; z-index: 1; }
.info li { display: flex; align-items: center; gap: 14px; font-size: 15px; font-weight: 500; }
.info li a:hover { color: var(--sage); }

.form { padding: 44px; display: grid; gap: 16px; align-content: start; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
label { display: grid; gap: 6px; }
label span { font-size: 12.5px; font-weight: 600; color: var(--muted); }
input, select, textarea {
  font: inherit; font-size: 15px; color: var(--ink); background: var(--cream);
  border: 1px solid var(--line); border-radius: 12px; padding: 12px 14px; width: 100%;
  transition: border-color .2s, box-shadow .2s;
}
input:focus, select:focus, textarea:focus { outline: none; border-color: var(--sage); box-shadow: 0 0 0 3px var(--sage-tint); }
textarea { resize: vertical; }
.form .btn { justify-self: start; margin-top: 4px; }
.note { font-size: 13px; color: var(--sage); }

@media (max-width: 880px) { .box { grid-template-columns: 1fr; } }
@media (max-width: 520px) {
  .info, .form { padding: 30px 22px; }
  .row { grid-template-columns: 1fr; }
}
</style>
