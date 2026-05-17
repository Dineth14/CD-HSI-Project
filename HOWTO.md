# Project Website HOWTO

## 1. Adding your photo

1. Save your photo as `assets/photo.jpg`.
2. Done.

## 2. Filling in placeholder text

1. Open the HTML file you want to edit.
2. Find text inside `<span class="ph">...</span>`.
3. Replace only the placeholder text inside the span.
4. When the text is final, you can delete the span tags and leave plain text.

Example:

```html
<span class="ph">[Observation]</span>
```

Can become:

```html
The benchmark dataset contains clear building-change examples.
```

## 3. Updating a week's status

1. Change the status square class in the sidebar of all pages.
2. Change the status span on that week's own page.
3. Change the status cell in the schedule table on `index.html`.

Use these classes:

1. `sq-proposed` is an empty grey square in the sidebar.
2. `sq-active` is an amber square in the sidebar.
3. `sq-done` is a green square in the sidebar.
4. `s-proposed` is grey status text.
5. `s-active` is amber bold status text.
6. `s-done` is green status text.

Example sidebar change:

```html
<span class="sq sq-proposed"></span>
```

Change to:

```html
<span class="sq sq-active"></span>
```

## 4. Activating a new week

1. Open `weeks/weekNN.html`.
2. The page currently has only the `Proposed Work` block.
3. Replace everything inside `<div id="content">...</div>` with the full progress template below.
4. Update the week number, title, status, dates, navigation links, and next week title.

```html
<h1>Week N — [Full Title]</h1>
<div class="meta-line">Status: <span class="s-active">In progress</span> · Dates: <span class="ph">[DD Mon] – [DD Mon YYYY]</span></div>
<div class="week-nav">← <a href="weekNN-prev.html">Week N-1</a> &nbsp;·&nbsp; <a href="../index.html">Home</a> &nbsp;·&nbsp; <a href="weekNN-next.html">Week N+1</a> →</div>

<hr class="section-rule">

<h2>Planned Work</h2>
<!-- List what was planned for this week. Edit these bullet points or add/remove as needed. -->
<ul>
  <li><span class="ph">[Planned task]</span></li>
  <li><span class="ph">[Planned task]</span></li>
  <li><span class="ph">[Planned task]</span></li>
</ul>

<h2>Work Log</h2>
<!--
  ADD A ROW: copy and paste this before the closing </tbody>:
  <tr>
    <td>14 Jun 2025</td>
    <td>What you did</td>
    <td>What came out of it</td>
  </tr>
-->
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Activity</th>
      <th>Outcome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="ph">[Date]</span></td>
      <td><span class="ph">[Activity]</span></td>
      <td><span class="ph">[Outcome]</span></td>
    </tr>
    <tr>
      <td><span class="ph">[Date]</span></td>
      <td><span class="ph">[Activity]</span></td>
      <td><span class="ph">[Outcome]</span></td>
    </tr>
    <tr>
      <td><span class="ph">[Date]</span></td>
      <td><span class="ph">[Activity]</span></td>
      <td><span class="ph">[Outcome]</span></td>
    </tr>
  </tbody>
</table>

<h2>Findings</h2>
<h3>Observations</h3>
<!-- Add or remove bullet points as needed. -->
<ul>
  <li><span class="ph">[Observation]</span></li>
  <li><span class="ph">[Observation]</span></li>
</ul>

<h3>Decisions</h3>
<ul>
  <li><span class="ph">[Decision made based on findings]</span></li>
  <li><span class="ph">[Decision made based on findings]</span></li>
</ul>

<h2>Figures</h2>
<!--
  TO ADD A FIGURE:
  1. Copy your image to assets/figures/
  2. Name it: weekNN_fig1.png, weekNN_fig2.png, etc.
  3. Replace the <div class="fig-empty"> block below with:
     <img src="../assets/figures/weekNN_fig1.png"
          alt="Describe the figure here"
          style="max-width:100%; border:1px solid #C8C4BB;">
  4. Update the <figcaption> text.
-->
<figure>
  <div class="fig-empty">
    <span class="ph">[Figure 1 — replace this with an img tag]</span>
  </div>
  <figcaption><span class="ph">[Caption for figure 1]</span></figcaption>
</figure>

<figure>
  <div class="fig-empty">
    <span class="ph">[Figure 2 — replace this with an img tag]</span>
  </div>
  <figcaption><span class="ph">[Caption for figure 2]</span></figcaption>
</figure>

<h2>Results</h2>
<!--
  USE THIS TABLE for numbers: benchmark scores, metrics, comparisons.
  ADD A ROW by copying a <tr> block and filling in the cells.
  Leave placeholders if no results yet.
-->
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Dataset</th>
      <th>F1</th>
      <th>IoU</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="ph">[Method]</span></td>
      <td><span class="ph">[Dataset]</span></td>
      <td><span class="ph">[F1]</span></td>
      <td><span class="ph">[IoU]</span></td>
      <td><span class="ph">[Notes]</span></td>
    </tr>
    <tr>
      <td><span class="ph">[Method]</span></td>
      <td><span class="ph">[Dataset]</span></td>
      <td><span class="ph">[F1]</span></td>
      <td><span class="ph">[IoU]</span></td>
      <td><span class="ph">[Notes]</span></td>
    </tr>
    <tr>
      <td><span class="ph">[Method]</span></td>
      <td><span class="ph">[Dataset]</span></td>
      <td><span class="ph">[F1]</span></td>
      <td><span class="ph">[IoU]</span></td>
      <td><span class="ph">[Notes]</span></td>
    </tr>
  </tbody>
</table>

<h2>Next Week</h2>
<p style="font:12px 'Courier New', Courier, monospace;">Week N+1 — [Next week title]</p>
<p><span class="ph">[Brief note on what the next week will focus on.]</span></p>

<h2>References</h2>
<!--
  IEEE format: [N] A. Author, "Title," Venue, Year.
  Add a new <li> for each paper referenced this week.
-->
<ol>
  <li><span class="ph">[Reference in IEEE format]</span></li>
  <li><span class="ph">[Reference in IEEE format]</span></li>
</ol>
```

## 5. Adding a work log entry

1. Open the week file.
2. Find the work log table.
3. Copy the row shown in the HTML comment.
4. Paste the new row before `</tbody>`.
5. Fill in the date, activity, and outcome.

## 6. Adding a figure

1. Save the image to `assets/figures/weekNN_figN.png`.
2. Open the week file.
3. Find the `<div class="fig-empty">` block.
4. Replace that block with this:

```html
<img src="../assets/figures/weekNN_fig1.png"
     alt="Describe the figure here"
     style="max-width:100%; border:1px solid #C8C4BB;">
```

5. Update the `<figcaption>` below it.

## 7. Adding a results row

1. Open the week file.
2. Find the results table.
3. Add a new row with five `<td>` cells:

```html
<tr>
  <td>Method name</td>
  <td>Dataset name</td>
  <td>F1 score</td>
  <td>IoU score</td>
  <td>Notes</td>
</tr>
```

## 8. Deploying to GitHub Pages

1. Push the project to a public GitHub repository.
2. Open the repository on GitHub.
3. Go to Settings → Pages.
4. Choose Deploy from branch.
5. Choose `main`.
6. Choose `/ (root)`.
7. The site URL will be `https://username.github.io/repo-name/`.

## 9. What never to touch

1. Do not edit the `<head>` section.
2. Do not edit the `<link>` tag.
3. Do not edit the `<script>` tag.
4. Do not change the `#sidebar` HTML structure.
5. Do not edit `style.css`.
6. Do not edit `nav.js`.
7. Only change class names, text content, and `href` values.
